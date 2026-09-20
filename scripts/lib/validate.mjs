// Rules every generated article must pass before it is written to disk.
// Each rule returns { rule, ok, detail } so the run summary can show exactly
// which inputs validated and which did not.
//
// Several rules exist because of real failures:
//  - no HTML / comments / angle brackets: an unclosed <!-- once hid every
//    article below it on the homepage
//  - no URLs or DOIs from the model: models reconstruct the *shape* of a
//    citation rather than recalling one (a fabricated DOI got through on
//    another site); every link is built from API metadata instead
//  - numbers guard and overlap guard: the article must stay grounded in the
//    abstract without copying it

export const HYPE = /\b(revolutionar(y|ise|ize|ises|izes)|game[- ]chang(er|ing)|groundbreaking|mind[- ]blowing|holy grail|jaw[- ]dropping|paradigm[- ]shift(ing)?|unprecedented|miracle)\b/i;
export const TAX_ADVICE = /\b(eligib\w*|qualif\w*|claimable|claim\s+(it|this|them))\b[^.\n]{0,80}\b(tax|incentive|offset|rdti|r&d tax)\b|\b(tax|incentive|offset|rdti)\b[^.\n]{0,80}\b(eligib\w*|qualif\w*)\b/i;
export const GUARANTEE = /\bguarantee(d|s)?\b[^.\n]{0,40}\b(refund|approval|eligib\w*|outcome|result|success)\b/i;
export const PLACEHOLDER = /\b(PLACEHOLDER|TODO|TBD|lorem ipsum)\b|\[citation needed\]|\{\{|\}\}|\[insert/i;

const words = (s) => s.toLowerCase().replace(/[^a-z0-9%.\s-]/g, ' ').split(/\s+/).filter(Boolean);

/** Longest run of consecutive words shared between the article and the abstract. */
export function longestSharedRun(article, abstract) {
  const a = words(article);
  const b = words(abstract);
  const N = 8;
  const grams = new Set();
  for (let i = 0; i + N <= b.length; i++) grams.add(b.slice(i, i + N).join(' '));
  let best = 0;
  for (let i = 0; i + N <= a.length; i++) {
    if (!grams.has(a.slice(i, i + N).join(' '))) continue;
    let len = N;
    const bs = b.join(' ');
    while (i + len < a.length && bs.includes(a.slice(i, i + len + 1).join(' '))) len++;
    best = Math.max(best, len);
  }
  return best;
}

/** Figures the article states as results: percentages, multipliers, "-fold". */
export function statedFigures(text) {
  const out = new Set();
  for (const m of text.matchAll(/(\d+(?:[.,]\d+)?)\s*(%|per ?cent|-?fold|x\b|×|times\b)/gi)) {
    out.add(m[1].replace(',', '.'));
  }
  return [...out];
}

/** Numbers that appear anywhere in the source text (title + abstract). */
function sourceNumbers(text) {
  const nums = new Set();
  for (const m of text.matchAll(/\d+(?:[.,]\d+)?/g)) {
    const n = m[0].replace(',', '.');
    nums.add(n);
    nums.add(String(Number(n))); // 5.50 -> 5.5
  }
  return nums;
}

export function validateArticle({ title, excerpt, body }, source) {
  const r = [];
  const add = (rule, ok, detail = '') => r.push({ rule, ok: Boolean(ok), detail });
  const wordCount = body.split(/\s+/).filter(Boolean).length;
  const sections = [...body.matchAll(/^##\s+(.+)$/gm)].map((m) => m[1].trim());

  add('title length 20-110', title.length >= 20 && title.length <= 110, `${title.length} chars`);
  add('title not shouting', title !== title.toUpperCase());
  add('excerpt length 60-200', excerpt.length >= 60 && excerpt.length <= 200, `${excerpt.length} chars`);
  add('excerpt has no quotes or angle brackets', !/["<>]/.test(excerpt));
  add('body 700-1600 words', wordCount >= 700 && wordCount <= 1600, `${wordCount} words`);
  add('no HTML, comments, < or >', !/[<>]/.test(body + title));
  add('no H1 heading', !/^#\s/m.test(body));
  add('at least 3 ## sections', sections.length >= 3, sections.join(' | '));
  add('last section is "The R&D takeaway"', /^the r&d takeaway$/i.test(sections.at(-1) ?? ''));
  add('no Sources section from the model', !sections.some((s) => /^sources?$/i.test(s)));
  add('no URLs, links or DOIs from the model',
    !/(https?:\/\/|www\.|\]\(|doi\.org|\b10\.\d{4,9}\/|arxiv\.org|pmid)/i.test(body + excerpt));
  add('no exclamation marks', !/!/.test(title + excerpt + body));
  const hype = (title + ' ' + body).match(HYPE);
  add('no hype words', !hype, hype ? hype[0] : '');
  add('no R&D tax eligibility claims', !TAX_ADVICE.test(body), (body.match(TAX_ADVICE) || [''])[0]);
  add('no guarantees', !GUARANTEE.test(body));
  add('no placeholders', !PLACEHOLDER.test(title + excerpt + body));
  add('no signature line from the model', !/R&D Innovate desk/i.test(body));

  const run = longestSharedRun(body, source.abstract);
  add('written in own words (no 12+ word run copied from abstract)', run < 12, `longest shared run: ${run} words`);

  const known = sourceNumbers(`${source.title} ${source.abstract}`);
  const unsupported = statedFigures(`${title} ${excerpt} ${body}`).filter((n) => !known.has(n) && !known.has(String(Number(n))));
  add('every %/x/-fold figure appears in the abstract', unsupported.length === 0,
    unsupported.length ? `not in abstract: ${unsupported.join(', ')}` : '');

  if (!source.peer_reviewed) {
    add('preprint is disclosed as not yet peer reviewed', /preprint/i.test(body) && /peer[- ]review/i.test(body));
  }
  return r;
}
