#!/usr/bin/env node
// Compliance gate. Runs in CI after the build; exits non-zero on any error,
// which stops the deploy. Checks the Markdown sources AND the built HTML, so
// nothing that slipped past the schema reaches the live site.
//
//   errors   — block the deploy
//   warnings — printed, never block (older hand-written posts predate some rules)

import fs from 'node:fs';
import path from 'node:path';
import { HYPE, TAX_ADVICE, GUARANTEE, PLACEHOLDER } from './lib/validate.mjs';

const POSTS = path.resolve('src/content/posts');
const DIST = path.resolve('dist');
const errors = [];
const warnings = [];
const err = (f, m) => errors.push(`${f}: ${m}`);
const warn = (f, m) => warnings.push(`${f}: ${m}`);

// ── Markdown sources ─────────────────────────────────────────────────────
for (const f of fs.readdirSync(POSTS).filter((x) => x.endsWith('.md')).sort()) {
  const text = fs.readFileSync(path.join(POSTS, f), 'utf8');
  const m = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) { err(f, 'missing front matter'); continue; }
  const [, fm, body] = m;
  const generated = /^source:/m.test(fm);
  const prose = body.replace(/```[\s\S]*?```/g, '').replace(/`[^`]*`/g, '');

  if (!/^\d{4}-\d{2}-\d{2}-[a-z0-9-]+\.md$/.test(f)) err(f, 'filename must be YYYY-MM-DD-kebab-slug.md');
  if (/<!--/.test(body)) err(f, 'HTML comment (<!--) in body: an unclosed one hides every card below it');
  if (/[<>]/.test(prose.replace(/^>\s/gm, ''))) err(f, 'raw < or > in body: write "less than" / "more than"');
  if (/^#\s/m.test(body)) err(f, 'H1 in body: the title comes from front matter');
  if (PLACEHOLDER.test(fm + body)) err(f, 'placeholder text (PLACEHOLDER / TODO / TBD / lorem / {{ }})');
  if (GUARANTEE.test(body)) err(f, 'guarantee language about refunds, approval or outcomes');
  if (TAX_ADVICE.test(body)) {
    (generated ? err : warn)(f, `reads as an R&D tax eligibility claim: "${body.match(TAX_ADVICE)[0]}"`);
  }
  if (/\bATO[- ](approved|endorsed|certified)\b/i.test(body)) err(f, 'claims ATO approval or endorsement');

  if (generated) {
    if (!/^## Sources\s*$/m.test(body)) err(f, 'generated post without a ## Sources section');
    if (!/^## The R&D takeaway\s*$/m.test(body)) err(f, 'generated post without ## The R&D takeaway');
    if (!/\*The R&D Innovate desk\*\s*$/.test(body)) err(f, 'generated post without the desk signature');
    if (/!/.test(prose.replace(/!\[/g, ''))) err(f, 'exclamation mark in a generated post');
    if (HYPE.test(prose)) err(f, `hype word: ${prose.match(HYPE)[0]}`);
    if (/peer_reviewed:\s*false/.test(fm) && !/preprint/i.test(body)) err(f, 'preprint source not disclosed in body');
  } else {
    if (!/^## Sources\s*$/m.test(body) && !/\]\(https?:\/\//.test(body)) warn(f, 'no Sources section or links');
  }
}

// ── Built HTML ───────────────────────────────────────────────────────────
if (!fs.existsSync(DIST)) {
  err('dist', 'not built — run `npm run build` first');
} else {
  const walk = (d) => fs.readdirSync(d, { withFileTypes: true })
    .flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
  for (const file of walk(DIST).filter((x) => x.endsWith('.html'))) {
    const rel = path.relative(DIST, file);
    const html = fs.readFileSync(file, 'utf8');
    const visible = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '')
      .replace(/<[^>]+>/g, ' ');
    for (const bad of ['PLACEHOLDER', 'undefined', 'NaN', '[object Object]', 'TODO', 'lorem ipsum']) {
      if (visible.includes(bad)) err(rel, `visible text contains "${bad}"`);
    }
    if (!/<title>[^<]{5,}<\/title>/.test(html)) err(rel, 'missing <title>');
    if (!/<meta name="description" content="[^"]{20,}"/.test(html)) err(rel, 'missing meta description');
  }
}

for (const w of warnings) console.log(`warn  ${w}`);
for (const e of errors) console.log(`ERROR ${e}`);
console.log(`\ncompliance: ${errors.length} error(s), ${warnings.length} warning(s)`);
if (process.env.GITHUB_STEP_SUMMARY) {
  fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY,
    `\n### Compliance\n${errors.length} error(s), ${warnings.length} warning(s)\n` +
    errors.map((e) => `- ❌ ${e}`).join('\n') + '\n');
}
process.exit(errors.length ? 1 : 0);
