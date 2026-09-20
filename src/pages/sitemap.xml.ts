import type { APIRoute } from 'astro';
import { publishedPosts, urlOf, dateOf } from '../lib/posts';
import { site } from '../data/site';

export const GET: APIRoute = async () => {
  const posts = await publishedPosts();
  const newest = posts[0] ? dateOf(posts[0]) : undefined;
  const urls = [
    { loc: `${site.url}/`, lastmod: newest },
    { loc: `${site.url}/workbench/` },
    ...posts.map((p) => ({ loc: new URL(urlOf(p), site.url).href, lastmod: dateOf(p) })),
  ];
  const body = urls
    .map((u) => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`)
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
