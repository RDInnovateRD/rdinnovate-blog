#!/usr/bin/env node
// Launch check: blockers vs nice-to-haves. Blockers exit non-zero.
// Run after `npm run build`.

import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');
const blockers = [];
const nice = [];
const ok = [];
const exists = (p) => fs.existsSync(path.join(DIST, p));
const read = (p) => fs.readFileSync(path.join(DIST, p), 'utf8');

if (!fs.existsSync(DIST)) {
  console.log('BLOCKER dist/ missing — run `npm run build` first');
  process.exit(1);
}

// 1. Custom domain survives the deploy
const cname = exists('CNAME') ? read('CNAME').trim() : '';
cname === 'blog.rdinnovate.com' ? ok.push('CNAME is blog.rdinnovate.com') : blockers.push(`CNAME is "${cname}", expected blog.rdinnovate.com`);

// 2. Every URL the old Jekyll site served still resolves
const legacy = fs.readFileSync(path.resolve('scripts/legacy-urls.txt'), 'utf8').split('\n').map((s) => s.trim()).filter((s) => s && !s.startsWith('#'));
const missing = legacy.filter((u) => !exists(u.endsWith('/') ? `${u}index.html` : u));
missing.length ? blockers.push(`legacy URLs missing: ${missing.join(', ')}`) : ok.push(`all ${legacy.length} legacy URLs present`);

// 3. Feed, sitemap, robots, 404
for (const f of ['feed.xml', 'sitemap.xml', 'robots.txt', '404.html', 'workbench/index.html', 'index.html']) {
  exists(f) ? ok.push(`${f} present`) : blockers.push(`${f} missing`);
}
if (exists('feed.xml')) {
  const n = (read('feed.xml').match(/<entry>/g) || []).length;
  n > 0 ? ok.push(`feed has ${n} entries`) : blockers.push('feed.xml has no entries');
}

// 4. Internal links all land on a real file
const walk = (d) => fs.readdirSync(d, { withFileTypes: true })
  .flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const html = walk(DIST).filter((f) => f.endsWith('.html'));
const broken = new Set();
for (const f of html) {
  for (const m of fs.readFileSync(f, 'utf8').matchAll(/href="(\/[^"#?]*)"/g)) {
    const u = m[1];
    const target = u.endsWith('/') ? `${u}index.html` : u;
    if (!exists(target.slice(1))) broken.add(`${u} (on ${path.relative(DIST, f)})`);
  }
}
broken.size ? blockers.push(`broken internal links: ${[...broken].slice(0, 10).join(', ')}`) : ok.push(`internal links OK across ${html.length} pages`);

// 5. Freshness (nice-to-have: a stale blog is a signal something upstream broke)
const posts = fs.readdirSync('src/content/posts').filter((f) => /^\d{4}-\d{2}-\d{2}-/.test(f)).sort();
const newest = posts.at(-1)?.slice(0, 10);
const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Australia/Sydney' }).format(new Date());
const age = newest ? Math.round((Date.parse(today) - Date.parse(newest)) / 86400000) : Infinity;
age <= 2 ? ok.push(`newest article ${newest}`) : nice.push(`newest article is ${age} days old (${newest}) — check the daily job`);

// 6. Secrets the daily job needs (only meaningful inside Actions)
if (process.env.GITHUB_ACTIONS) {
  const provider = process.env.AI_PROVIDER || 'gemini';
  const need = provider === 'anthropic' ? 'ANTHROPIC_API_KEY' : 'GEMINI_API_KEY';
  process.env[need] ? ok.push(`${need} is set`) : nice.push(`${need} is not set — the daily article job cannot run`);
}

for (const o of ok) console.log(`ok       ${o}`);
for (const n of nice) console.log(`nice-to  ${n}`);
for (const b of blockers) console.log(`BLOCKER  ${b}`);
console.log(`\nlaunch: ${blockers.length} blocker(s), ${nice.length} nice-to-have(s)`);
process.exit(blockers.length ? 1 : 0);
