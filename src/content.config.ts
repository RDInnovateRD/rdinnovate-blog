// The rules for a post live here. A post that breaks them fails the build,
// so a bad article can never reach the live site.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const noAngle = (s: string) => !/[<>]/.test(s);

const posts = defineCollection({
  // Filename is the permalink: YYYY-MM-DD-slug.md -> /YYYY/MM/DD/slug/
  loader: glob({
    pattern: '[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]-*.md',
    base: './src/content/posts',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string().min(8).max(140).refine(noAngle, 'no < or > in title'),
    date: z.coerce.date(),
    excerpt: z.string().min(20).max(320).refine(noAngle, 'no < or > in excerpt'),
    category: z.string().min(2).max(40),
    catslug: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'catslug must be kebab-case'),
    draft: z.boolean().optional(),
    // Set by scripts/generate-article.mjs. Hand-written posts omit these.
    source: z
      .object({
        kind: z.enum(['arxiv', 'europepmc']),
        id: z.string(),
        url: z.string().url(),
        title: z.string(),
        venue: z.string(),
        published: z.string(),
        authors: z.string(),
        peer_reviewed: z.boolean(),
      })
      .optional(),
    generated: z
      .object({ provider: z.string(), model: z.string(), at: z.string() })
      .optional(),
  }),
});

export const collections = { posts };
