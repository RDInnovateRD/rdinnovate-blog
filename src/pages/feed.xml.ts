// Atom feed at /feed.xml — same URL and format jekyll-feed served, so existing
// subscribers keep working. Entry ids are the article URLs, as before.
import type { APIRoute } from 'astro';
import { publishedPosts, urlOf, dateOf, isoDate } from '../lib/posts';
import { site } from '../data/site';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async () => {
  const posts = (await publishedPosts()).slice(0, site.feedEntries);
  const updated = posts.length ? isoDate(dateOf(posts[0])) : new Date().toISOString();

  const entries = posts.map((p) => {
    const url = new URL(urlOf(p), site.url).href;
    const when = isoDate(dateOf(p));
    const html = p.rendered?.html ?? '';
    return `  <entry>
    <title type="html">${esc(p.data.title)}</title>
    <link href="${url}" rel="alternate" type="text/html" title="${esc(p.data.title)}"/>
    <published>${when}</published>
    <updated>${when}</updated>
    <id>${url}</id>
    <content type="html" xml:base="${url}">${esc(html)}</content>
    <author><name>${esc(site.name)}</name></author>
    <category term="${esc(p.data.category)}"/>
    <summary type="html">${esc(p.data.excerpt)}</summary>
  </entry>`;
  });

  const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <link href="${site.url}/feed.xml" rel="self" type="application/atom+xml"/>
  <link href="${site.url}/" rel="alternate" type="text/html"/>
  <updated>${updated}</updated>
  <id>${site.url}/feed.xml</id>
  <title type="html">${esc(site.name)}</title>
  <subtitle>${esc(site.description)}</subtitle>
${entries.join('\n')}
</feed>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/atom+xml; charset=utf-8' } });
};
