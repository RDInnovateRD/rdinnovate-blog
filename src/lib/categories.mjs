// Category colours. Shared by the site build and scripts/generate-article.mjs.
// Known categories come from src/data/categories.json (hand-tunable).
// Any new slug gets a deterministic palette from the same FNV-1a hash the old
// _source/sync_categories.py used, so colours stay stable across builds.

import fs from 'node:fs';
import path from 'node:path';

// Resolved from the repo root (where `npm run build` and the scripts run), not
// from this file: the Astro bundler relocates modules at build time.
export const CATEGORIES_FILE = path.resolve(process.cwd(), 'src/data/categories.json');

// The house category list: display name <-> slug. Extend deliberately.
export const CATEGORY_NAMES = {
  quantum: 'Quantum',
  'compute-ai': 'Compute & AI',
  energy: 'Energy',
  materials: 'Materials',
  bio: 'Bio',
  'physics-space': 'Physics & Space',
  robotics: 'Robotics',
  'climate-environment': 'Climate & Environment',
  medicine: 'Medicine',
  chemistry: 'Chemistry',
  neuroscience: 'Neuroscience',
};

function hueOf(slug) {
  let h = 2166136261;
  for (const ch of slug) {
    h ^= ch.codePointAt(0);
    h = Math.imul(h, 16777619) >>> 0;
  }
  const hue = h % 360;
  return hue < 24 || hue > 336 ? (hue + 40) % 360 : hue; // clear of brand maroon
}

// Python colorsys.hls_to_rgb equivalent
function hls(h, l, s) {
  if (s === 0) return [l, l, l];
  const m2 = l <= 0.5 ? l * (1 + s) : l + s - l * s;
  const m1 = 2 * l - m2;
  const v = (hue) => {
    hue = ((hue % 1) + 1) % 1;
    if (hue < 1 / 6) return m1 + (m2 - m1) * hue * 6;
    if (hue < 0.5) return m2;
    if (hue < 2 / 3) return m1 + (m2 - m1) * (2 / 3 - hue) * 6;
    return m1;
  };
  return [v(h + 1 / 3), v(h), v(h - 1 / 3)];
}
const hex = (h, s, l) =>
  '#' + hls(h / 360, l, s).map((c) => Math.trunc(c * 255).toString(16).padStart(2, '0')).join('');

export function paletteFor(slug) {
  const h = hueOf(slug);
  return { c1: hex(h, 0.58, 0.36), c2: hex((h + 34) % 360, 0.72, 0.52), c3: hex((h + 348) % 360, 0.56, 0.2) };
}

export function loadCategories() {
  return JSON.parse(fs.readFileSync(CATEGORIES_FILE, 'utf8'));
}

export function colourFor(slug, known = loadCategories()) {
  return known[slug] ?? paletteFor(slug);
}

export function styleVars(slug, known) {
  const c = colourFor(slug, known);
  return `--c1:${c.c1};--c2:${c.c2};--c3:${c.c3}`;
}
