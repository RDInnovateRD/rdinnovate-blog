// Retrieval: real, recent papers with real abstracts, from free keyless APIs.
//   arXiv       — physics, quantum, materials, computing, robotics (preprints;
//                 marked peer_reviewed only when a journal reference exists)
//   Europe PMC  — biology, medicine, neuroscience, environment (MEDLINE only,
//                 i.e. peer-reviewed journals)
// The model never supplies a citation: every link on the page is built here,
// from API metadata.

const UA = 'rdinnovate-blog/1.0 (+https://blog.rdinnovate.com; rd@rdinnovate.com)';

// Category -> where to look. Queries are deliberately narrow: the model picks
// the most significant of ~12 candidates, so precision matters more than recall.
export const RETRIEVAL = {
  quantum: { api: 'arxiv', q: 'cat:quant-ph' },
  'compute-ai': { api: 'arxiv', q: '(cat:cs.AR OR cat:cs.ET)' },
  materials: { api: 'arxiv', q: 'cat:cond-mat.mtrl-sci' },
  energy: {
    api: 'arxiv',
    q: '(cat:cond-mat.mtrl-sci OR cat:physics.app-ph OR cat:physics.plasm-ph) AND (abs:battery OR abs:photovoltaic OR abs:perovskite OR abs:electrolyte OR abs:hydrogen OR abs:fusion OR abs:"fuel cell" OR abs:electrocatalyst)',
  },
  'physics-space': { api: 'arxiv', q: '(cat:astro-ph.EP OR cat:astro-ph.IM OR cat:hep-ex OR cat:physics.ins-det)' },
  robotics: { api: 'arxiv', q: 'cat:cs.RO' },
  chemistry: { api: 'arxiv', q: 'cat:physics.chem-ph' },
  bio: {
    api: 'europepmc',
    q: '("synthetic biology" OR "genome editing" OR "base editing" OR "prime editing" OR "protein design" OR "engineered bacteria" OR biomanufacturing)',
  },
  medicine: {
    api: 'europepmc',
    q: '("randomized controlled trial" OR "phase 3" OR "first-in-human") AND (therapy OR vaccine OR device OR implant)',
  },
  neuroscience: {
    api: 'europepmc',
    q: '("brain-computer interface" OR "neural interface" OR neuroprosthe* OR optogenetic*)',
  },
  'climate-environment': {
    api: 'europepmc',
    q: '("carbon capture" OR "direct air capture" OR "carbon dioxide removal" OR microplastic* OR PFAS OR "methane emissions")',
  },
};

// Journals whose papers go to the front of the candidate list.
const HIGH_SIGNAL = /^(nature|science|cell|the lancet|lancet|n engl j med|new england|jama|bmj|proc natl acad sci|pnas|elife|sci adv|sci transl med|neuron|immunity|joule|matter|chem|nat |nature |cell rep|environ sci technol)/i;
const EXCLUDED_TYPES = /review|editorial|comment|letter|erratum|retract|news|case report|guideline|protocol/i;

const clean = (s = '') => s.replace(/\s+/g, ' ').trim();
const xmlText = (s = '') =>
  clean(s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, '&'));
const ymd = (d) => d.toISOString().slice(0, 10);
const daysAgo = (n, from = new Date()) => new Date(from.getTime() - n * 86400000);

async function get(url, { timeoutMs = 30000, accept } = {}) {
  const res = await fetch(url, {
    headers: { 'User-Agent': UA, ...(accept ? { Accept: accept } : {}) },
    signal: AbortSignal.timeout(timeoutMs),
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} from ${new URL(url).host}`);
  return res;
}

function shortAuthors(list) {
  if (!list.length) return 'Unknown authors';
  return list.length > 3 ? `${list[0]} et al.` : list.join(', ');
}

// ── arXiv ────────────────────────────────────────────────────────────────
export async function fromArxiv(q, { windowDays = 21, max = 60 } = {}) {
  const url = `https://export.arxiv.org/api/query?search_query=${encodeURIComponent(q)}` +
    `&sortBy=submittedDate&sortOrder=descending&max_results=${max}`;
  const xml = await (await get(url, { accept: 'application/atom+xml' })).text();
  const cutoff = ymd(daysAgo(windowDays));
  const out = [];
  for (const m of xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)) {
    const e = m[1];
    const tag = (t) => (e.match(new RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`)) || [])[1];
    const absId = (tag('id') || '').replace(/^https?:\/\/arxiv\.org\/abs\//, '').replace(/v\d+$/, '');
    const published = (tag('published') || '').slice(0, 10);
    const abstract = xmlText(tag('summary'));
    const title = xmlText(tag('title'));
    const comment = xmlText(tag('arxiv:comment'));
    const journalRef = xmlText(tag('arxiv:journal_ref'));
    const doi = xmlText(tag('arxiv:doi'));
    const authors = [...e.matchAll(/<name>([\s\S]*?)<\/name>/g)].map((a) => xmlText(a[1]));
    if (!absId || published < cutoff) continue;
    if (abstract.length < 500 || /withdrawn|erratum/i.test(comment + ' ' + abstract.slice(0, 120))) continue;
    out.push({
      kind: 'arxiv',
      id: `arxiv:${absId}`,
      url: `https://arxiv.org/abs/${absId}`,
      doiUrl: doi ? `https://doi.org/${doi}` : '',
      title,
      venue: journalRef ? `arXiv; published in ${journalRef}` : 'arXiv preprint',
      published,
      authors: shortAuthors(authors),
      peer_reviewed: Boolean(journalRef),
      abstract,
      rank: journalRef || doi ? 0 : 1,
    });
  }
  return out;
}

// ── Europe PMC ───────────────────────────────────────────────────────────
export async function fromEuropePmc(q, { windowDays = 21, max = 60 } = {}) {
  const from = ymd(daysAgo(windowDays));
  const to = ymd(new Date());
  const query = `(FIRST_PDATE:[${from} TO ${to}]) AND SRC:MED AND HAS_ABSTRACT:Y AND LANG:eng AND ${q}`;
  const url = `https://www.ebi.ac.uk/europepmc/webservices/rest/search?format=json&resultType=core&pageSize=${max}` +
    `&query=${encodeURIComponent(query)}`;
  const data = await (await get(url, { accept: 'application/json' })).json();
  const out = [];
  for (const r of data?.resultList?.result ?? []) {
    const types = [].concat(r.pubTypeList?.pubType ?? []).join(' ');
    if (EXCLUDED_TYPES.test(types)) continue;
    const abstract = clean((r.abstractText || '').replace(/<[^>]+>/g, ' '));
    if (abstract.length < 600 || !r.pmid) continue;
    const journal = clean(r.journalInfo?.journal?.title || r.journalInfo?.journal?.medlineAbbreviation || 'Peer-reviewed journal');
    out.push({
      kind: 'europepmc',
      id: `pmid:${r.pmid}`,
      url: `https://europepmc.org/article/MED/${r.pmid}`,
      doiUrl: r.doi ? `https://doi.org/${r.doi}` : '',
      title: clean(r.title).replace(/\.$/, ''),
      venue: journal,
      published: r.firstPublicationDate || r.pubYear || '',
      authors: shortAuthors(clean(r.authorString || '').replace(/\.$/, '').split(/,\s*/).filter(Boolean)),
      peer_reviewed: true,
      abstract,
      rank: HIGH_SIGNAL.test(journal) ? 0 : 1,
    });
  }
  return out;
}

/**
 * Candidates for one category, widening the date window until there are
 * enough to choose from. Returns { candidates, windowDays, api, errors }.
 */
export async function candidatesFor(catslug, { exclude = new Set(), want = 12, minimum = 4 } = {}) {
  const cfg = RETRIEVAL[catslug];
  if (!cfg) return { candidates: [], windowDays: 0, api: 'none', errors: [`no retrieval config for ${catslug}`] };
  const fetcher = cfg.api === 'arxiv' ? fromArxiv : fromEuropePmc;
  const errors = [];
  for (const windowDays of [21, 60, 180]) {
    try {
      const raw = await fetcher(cfg.q, { windowDays });
      const seen = new Set();
      const fresh = raw.filter((c) => !exclude.has(c.id) && !seen.has(c.id) && seen.add(c.id));
      fresh.sort((a, b) => a.rank - b.rank || (a.published < b.published ? 1 : -1));
      if (fresh.length >= minimum) return { candidates: fresh.slice(0, want), windowDays, api: cfg.api, errors };
    } catch (err) {
      errors.push(`${cfg.api} (${windowDays}d): ${err.message}`);
    }
  }
  return { candidates: [], windowDays: 0, api: cfg.api, errors };
}

/**
 * Only 404 and 410 mean a URL is dead. 403 is usually a bot wall and 5xx is
 * the publisher having a bad day: those are "unverified", not "broken".
 * Returns 'live' | 'dead' | 'unverified'.
 */
export async function checkUrl(url) {
  for (const method of ['HEAD', 'GET']) {
    try {
      const res = await fetch(url, {
        method, redirect: 'follow', headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(20000),
      });
      if (res.ok) return 'live';
      if (res.status === 404 || res.status === 410) return 'dead';
    } catch { /* network error: try the next method, then give up as unverified */ }
  }
  return 'unverified';
}
