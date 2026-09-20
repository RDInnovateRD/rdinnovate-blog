#!/usr/bin/env node
// Daily article: retrieval -> model -> validate -> write.
//
//   node scripts/generate-article.mjs                  write today's article
//   node scripts/generate-article.mjs --dry-run        do everything but write
//   node scripts/generate-article.mjs --category=quantum
//   node scripts/generate-article.mjs --mock=path.txt  use a saved model reply (tests)
//   node scripts/generate-article.mjs --force          write even if today has a post
//   node scripts/generate-article.mjs --retrieve-only  show the candidates and stop
//
// Env: GEMINI_API_KEY, ANTHROPIC_API_KEY,
//      AI_PROVIDER = gemini (default) | anthropic | both
//      GEMINI_MODELS = comma list to override the ladder
//      ANTHROPIC_MODEL = override claude-sonnet-5
//
// Exit 0 = article written (or nothing needed today). Exit 1 = no article.
// Either way the decisive facts go to $GITHUB_STEP_SUMMARY: which model
// answered, its finish reason, token counts, which checks passed, and the raw
// output when parsing or validation failed. That page is readable without
// downloading logs.

import fs from 'node:fs';
import path from 'node:path';
import { candidatesFor, checkUrl, RETRIEVAL } from './lib/sources.mjs';
import { ladder, callWithRetry } from './lib/models.mjs';
import { validateArticle } from './lib/validate.mjs';
import { CATEGORY_NAMES, loadCategories, paletteFor, CATEGORIES_FILE } from '../src/lib/categories.mjs';

const POSTS_DIR = path.resolve('src/content/posts');
const args = Object.fromEntries(process.argv.slice(2).map((a) => {
  const [k, v] = a.replace(/^--/, '').split('=');
  return [k, v ?? true];
}));
const DRY = Boolean(args['dry-run']);
const MAX_MODEL_CALLS = 4;

// ── summary ──────────────────────────────────────────────────────────────
const summary = [];
const say = (line = '') => { summary.push(line); console.log(line.replace(/<\/?(details|summary)>/g, '')); };
function flushSummary() {
  const file = process.env.GITHUB_STEP_SUMMARY;
  if (file) fs.appendFileSync(file, summary.join('\n') + '\n');
}
function finish(code, headline) {
  say('');
  say(`**Result:** ${headline}`);
  flushSummary();
  process.exit(code);
}
const fence = (s) => '```text\n' + String(s).replace(/```/g, "'''") + '\n```';

// ── helpers ──────────────────────────────────────────────────────────────
const todaySydney = () =>
  new Intl.DateTimeFormat('en-CA', { timeZone: 'Australia/Sydney', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());

function readPosts() {
  return fs.readdirSync(POSTS_DIR).filter((f) => /^\d{4}-\d{2}-\d{2}-.+\.md$/.test(f)).sort().map((f) => {
    const text = fs.readFileSync(path.join(POSTS_DIR, f), 'utf8');
    const fm = text.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
    const field = (k) => fm.match(new RegExp(`^${k}:\\s*"?(.*?)"?\\s*$`, 'm'))?.[1] ?? '';
    return { file: f, date: f.slice(0, 10), title: field('title'), catslug: field('catslug'),
      sourceId: fm.match(/^\s+id:\s*"?([^"\n]+)"?/m)?.[1] ?? '' };
  });
}

/** Least recently used category first, so coverage stays even. */
function categoryOrder(posts, forced) {
  const cats = Object.keys(RETRIEVAL);
  if (forced) return [forced];
  const last = Object.fromEntries(cats.map((c) => [c, '0000-00-00']));
  for (const p of posts) if (p.catslug in last && p.date > last[p.catslug]) last[p.catslug] = p.date;
  return cats.sort((a, b) => (last[a] < last[b] ? -1 : last[a] > last[b] ? 1 : a.localeCompare(b)));
}

const slugify = (s) => s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '')
  .replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60).replace(/-+$/, '');

const yamlStr = (s) => JSON.stringify(String(s)); // JSON strings are valid YAML

function tooSimilar(title, posts) {
  const set = (s) => new Set(s.toLowerCase().split(/\W+/).filter((w) => w.length > 3));
  const t = set(title);
  return posts.find((p) => {
    const o = set(p.title);
    const inter = [...t].filter((w) => o.has(w)).length;
    return inter / Math.max(1, Math.min(t.size, o.size)) > 0.6;
  });
}

// ── prompt ───────────────────────────────────────────────────────────────
const SYSTEM = `You are the R&D Innovate desk. You write one article a day for blog.rdinnovate.com,
read by people who fund, plan and run research and development.

Grounding rules. These are not negotiable.
- Choose ONE of the numbered candidate papers and write about it using ONLY what its title,
  metadata and abstract state. Do not add results, numbers, names, institutions, funders,
  dates or quotes that are not in the abstract.
- General background that any textbook would give (how a battery or a qubit works) is fine,
  but never present background as a finding of this paper.
- Write entirely in your own words. Do not copy sentences or long phrases from the abstract.
- If the candidate is marked as a preprint, say plainly in the body that it is a preprint that
  has not yet been peer reviewed.
- If no candidate has enough substance for an honest article, reply with exactly: SKIP

House style.
- 900 to 1300 words. Australian English spelling (optimise, colour, centre).
- Open with the problem, or the assumption the result overturns. Never open with
  "Researchers have announced" or similar.
- Explain the mechanism plainly for an intelligent reader who is not a specialist.
- State the headline result, then be honest about what it does NOT prove: limitations, scale,
  and how far it sits from commercial deployment.
- Calm and factual. No hype words (revolutionary, game-changing, groundbreaking,
  unprecedented, holy grail), no exclamation marks.
- Three to five "##" sections. The LAST section must be "## The R&D takeaway": two to four
  sentences on what this means for people funding or planning R&D. It is about R&D strategy
  only. Never say or imply that any activity is or may be eligible for an R&D tax incentive
  or any other government program.

Format rules.
- No links, no URLs, no DOIs, no reference list and no "Sources" section: sources are added
  automatically from the paper's metadata.
- No H1 heading, no HTML, no "<" or ">" characters (write "less than", "more than").
- No sign-off line.

Reply in exactly this format and nothing else:
PICK: <candidate number>
TITLE: <headline in sentence case, 20 to 100 characters, no quotation marks>
EXCERPT: <one or two sentences, 60 to 190 characters, no quotation marks>
---BODY---
<the article in Markdown>
---END---`;

function userPrompt(category, cands, avoidTitles) {
  const list = cands.map((c, i) => [
    `[${i + 1}] ${c.title}`,
    `    Source: ${c.venue} | ${c.peer_reviewed ? 'peer reviewed' : 'PREPRINT, not yet peer reviewed'} | ${c.published} | ${c.authors}`,
    `    Abstract: ${c.abstract}`,
  ].join('\n')).join('\n\n');
  return `Today's category: ${category}.

Recent article titles on the blog (do not repeat these topics):
${avoidTitles.map((t) => `- ${t}`).join('\n')}

Candidate papers:

${list}`;
}

function parseReply(text) {
  if (/^\s*SKIP\s*$/i.test(text)) return { skip: true };
  const pick = Number(text.match(/^\s*PICK:\s*(\d+)/mi)?.[1]);
  const title = text.match(/^\s*TITLE:\s*(.+)$/mi)?.[1]?.trim().replace(/^["']|["']$/g, '') ?? '';
  const excerpt = text.match(/^\s*EXCERPT:\s*(.+)$/mi)?.[1]?.trim().replace(/^["']|["']$/g, '') ?? '';
  const body = text.match(/---BODY---\s*\n([\s\S]*?)\n\s*---END---/)?.[1]?.trim() ?? '';
  const missing = [!pick && 'PICK', !title && 'TITLE', !excerpt && 'EXCERPT', !body && 'BODY'].filter(Boolean);
  return missing.length ? { error: `missing ${missing.join(', ')}` } : { pick, title, excerpt, body };
}

function assemble({ title, excerpt, body }, src, date, category, catslug, gen) {
  // Sources go in before the takeaway, matching the house layout.
  const idx = body.search(/^##\s+The R&D takeaway\s*$/mi);
  const main = body.slice(0, idx).trimEnd();
  const takeaway = body.slice(idx).trim();
  const status = src.peer_reviewed ? src.venue : `${src.venue}, not yet peer reviewed`;
  const lines = [`- [${src.title}](${src.url}), ${src.authors}, ${status}, ${src.published}`];
  if (src.doiUrl) lines.push(`- [Publisher record (DOI)](${src.doiUrl})`);
  const fm = [
    '---',
    `title: ${yamlStr(title)}`,
    `date: ${date}`,
    `excerpt: ${yamlStr(excerpt)}`,
    `category: ${yamlStr(category)}`,
    `catslug: ${yamlStr(catslug)}`,
    'source:',
    `  kind: ${src.kind}`,
    `  id: ${yamlStr(src.id)}`,
    `  url: ${yamlStr(src.url)}`,
    `  title: ${yamlStr(src.title)}`,
    `  venue: ${yamlStr(src.venue)}`,
    `  published: ${yamlStr(src.published)}`,
    `  authors: ${yamlStr(src.authors)}`,
    `  peer_reviewed: ${src.peer_reviewed}`,
    'generated:',
    `  provider: ${gen.provider}`,
    `  model: ${yamlStr(gen.model)}`,
    `  at: ${yamlStr(new Date().toISOString())}`,
    '---',
  ].join('\n');
  return `${fm}\n\n${main}\n\n## Sources\n\n${lines.join('\n')}\n\n${takeaway}\n\n*The R&D Innovate desk*\n`;
}

// ── main ─────────────────────────────────────────────────────────────────
async function main() {
  const date = args.date || todaySydney();
  say(`## Daily article — ${date}${DRY ? ' (dry run)' : ''}`);

  const posts = readPosts();
  const today = posts.filter((p) => p.date === date);
  if (today.length && !args.force) finish(0, `already have an article for ${date} (${today[0].file}); nothing to do.`);

  const exclude = new Set(posts.map((p) => p.sourceId).filter(Boolean));
  const avoidTitles = posts.slice(-30).map((p) => p.title).reverse();

  // 1. Retrieval
  let chosen = null;
  for (const catslug of categoryOrder(posts, args.category)) {
    const res = await candidatesFor(catslug, { exclude });
    say(`- Retrieval **${catslug}** via ${res.api}: ${res.candidates.length} candidates` +
      (res.windowDays ? ` (last ${res.windowDays} days)` : '') + (res.errors.length ? ` — ${res.errors.join('; ')}` : ''));
    if (res.candidates.length) { chosen = { catslug, ...res }; break; }
    if (args.category) break;
  }
  if (!chosen) finish(1, 'no candidate papers retrieved from any source. No article today.');

  const category = CATEGORY_NAMES[chosen.catslug] ?? chosen.catslug;
  const cands = chosen.candidates;
  if (args['retrieve-only']) {
    cands.forEach((c, i) => say(`\n[${i + 1}] ${c.title}\n    ${c.id} | ${c.venue} | ${c.published} | peer reviewed: ${c.peer_reviewed}\n    ${c.abstract}`));
    finish(0, 'retrieve-only: stopped before calling a model.');
  }

  // 2. Model, down the ladder, until one produces an article that validates
  const keys = { gemini: process.env.GEMINI_API_KEY, anthropic: process.env.ANTHROPIC_API_KEY };
  const steps = ladder({ provider: args.provider || process.env.AI_PROVIDER || 'gemini',
    geminiModels: process.env.GEMINI_MODELS, anthropicModel: process.env.ANTHROPIC_MODEL });
  const user = userPrompt(category, cands, avoidTitles);
  const log = [];
  let article = null;
  let reply = null;
  let calls = 0;

  for (const step of steps) {
    if (calls >= MAX_MODEL_CALLS) break;
    calls++;
    try {
      reply = args.mock
        ? { provider: 'mock', model: 'mock', finishReason: 'STOP', tokens: { input: 0, output: 0, thinking: 0, total: 0 }, text: fs.readFileSync(args.mock, 'utf8') }
        : await callWithRetry(step, SYSTEM, user, keys, log);
    } catch (err) {
      say(`- Model **${step.model}** failed: ${err.message.slice(0, 200)}`);
      if (err.fatal) break;
      continue;
    }
    say(`- Model **${reply.model}** answered: finish reason \`${reply.finishReason}\`, tokens in ${reply.tokens.input} / out ${reply.tokens.output} / thinking ${reply.tokens.thinking}, ${reply.text.length} chars`);

    if (!reply.text.trim()) { say('  - empty output; trying the next model'); continue; }
    const parsed = parseReply(reply.text);
    if (parsed.skip) { say('  - model replied SKIP: no candidate worth an honest article'); break; }
    if (parsed.error) {
      say(`  - could not parse reply (${parsed.error})`);
      say('<details><summary>Raw model output</summary>\n\n' + fence(reply.text.slice(0, 20000)) + '\n</details>');
      if (args.mock) break;
      continue;
    }
    const src = cands[parsed.pick - 1];
    if (!src) { say(`  - PICK ${parsed.pick} is not a valid candidate number`); continue; }

    const checks = validateArticle(parsed, src);
    const similar = tooSimilar(parsed.title, posts);
    checks.push({ rule: 'not a repeat of an existing title', ok: !similar, detail: similar ? similar.file : '' });
    say(`  - Picked [${parsed.pick}] ${src.title} (${src.id})`);
    say('\n  | Check | Result | Detail |\n  |---|---|---|');
    for (const c of checks) say(`  | ${c.rule} | ${c.ok ? '✅' : '❌'} | ${String(c.detail).replace(/\|/g, '/')} |`);
    say('');
    if (checks.every((c) => c.ok)) { article = { ...parsed, src }; break; }
    say('<details><summary>Raw model output (failed validation)</summary>\n\n' + fence(reply.text.slice(0, 20000)) + '\n</details>');
    if (args.mock) break;
  }

  if (log.length) {
    say('\n<details><summary>Every model attempt</summary>\n\n' + fence(log.map((l) => JSON.stringify(l)).join('\n')) + '\n</details>');
  }
  if (!article) finish(1, 'no article passed validation. Nothing was written. A missed day is better than a weak article.');

  // 3. The citation must resolve. Only 404/410 count as dead.
  const link = await checkUrl(article.src.url);
  say(`- Source link ${article.src.url}: **${link}**`);
  if (link === 'dead') finish(1, `source URL is dead (404/410): ${article.src.url}. Nothing written.`);

  // 4. Write
  const md = assemble(article, article.src, date, category, chosen.catslug, reply);
  const file = path.join(POSTS_DIR, `${date}-${slugify(article.title)}.md`);
  if (DRY) {
    say('\n<details><summary>Article (dry run, not written)</summary>\n\n' + fence(md) + '\n</details>');
    finish(0, `dry run OK — would write ${path.basename(file)}`);
  }
  fs.writeFileSync(file, md);

  // New category? Give it a stable colour so the card renders properly.
  const known = loadCategories();
  if (!known[chosen.catslug]) {
    known[chosen.catslug] = paletteFor(chosen.catslug);
    fs.writeFileSync(CATEGORIES_FILE, JSON.stringify(known, null, 2) + '\n');
    say(`- NEW CATEGORY COLOUR: ${chosen.catslug}`);
  }
  finish(0, `wrote ${path.relative(process.cwd(), file)} — "${article.title}" (${category}), answered by ${reply.model}`);
}

main().catch((err) => {
  say(`\n**Crashed:** ${err.stack || err.message}`);
  flushSummary();
  process.exit(1);
});
