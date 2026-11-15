import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || (isGitHubActions ? 'https://supremokif.github.io' : 'https://gta6leonida.vercel.app'),
  base: process.env.PUBLIC_BASE_PATH || (isGitHubActions ? '/leonida-index' : '/'),
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
