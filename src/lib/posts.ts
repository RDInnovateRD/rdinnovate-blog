import { getCollection, type CollectionEntry } from 'astro:content';
import { site } from '../data/site';

export type Post = CollectionEntry<'posts'>;

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'];

/** Today's date in Sydney as YYYY-MM-DD. */
export function todayInSydney(now = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: site.timezone, year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(now);
}

/** The date a post belongs to, taken from its filename (the permalink source). */
export const dateOf = (p: Post) => p.id.slice(0, 10);
/** Slug part of the filename, normalised the way Jekyll's slugify did it:
 *  runs of hyphens collapsed, leading/trailing hyphens dropped
 *  (several old filenames end in "-", but their live URLs do not). */
export const slugOf = (p: Post) =>
  p.id.slice(11).toLowerCase().replace(/[^a-z0-9._~!$&'()+,;=@-]+/g, '-').replace(/-{2,}/g, '-').replace(/^-+|-+$/g, '');

/** /YYYY/MM/DD/slug/ — identical to the old Jekyll permalink. */
export function urlOf(p: Post): string {
  const [y, m, d] = dateOf(p).split('-');
  return `/${y}/${m}/${d}/${slugOf(p)}/`;
}

/** "16 July 2026" (Jekyll's "%-d %B %Y"). */
export function displayDate(ymd: string): string {
  const [y, m, d] = ymd.split('-').map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

/** Sydney-offset ISO timestamp for midnight of that day, e.g. 2026-07-16T00:00:00+10:00. */
export function isoDate(ymd: string): string {
  const probe = new Date(`${ymd}T12:00:00Z`);
  const tz = new Intl.DateTimeFormat('en-AU', { timeZone: site.timezone, timeZoneName: 'longOffset' })
    .formatToParts(probe).find((x) => x.type === 'timeZoneName')?.value ?? 'GMT+10:00';
  const off = tz.replace('GMT', '') || '+00:00';
  return `${ymd}T00:00:00${off}`;
}

/** Liquid's `truncate`: total length n including the "..." */
export function truncate(s: string, n: number): string {
  return s.length > n ? s.slice(0, n - 3) + '...' : s;
}

/**
 * Posts that are live today: not drafts, and not dated in the future.
 * Future-dated posts stay hidden until the daily rebuild on or after their date.
 */
export async function publishedPosts(): Promise<Post[]> {
  const today = todayInSydney();
  const all = await getCollection('posts', (p) => !p.data.draft && dateOf(p) <= today);
  return all.sort((a, b) => (a.id < b.id ? 1 : a.id > b.id ? -1 : 0)); // newest first
}
