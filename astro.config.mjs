// blog.rdinnovate.com — static Astro build, deployed to GitHub Pages by
// .github/workflows/publish.yml. URLs match the old Jekyll site exactly:
//   /YYYY/MM/DD/slug/   /feed.xml   /workbench/
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://blog.rdinnovate.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  markdown: {
    // Typographic quotes and dashes, as kramdown produced on the old site.
    smartypants: true,
  },
});
