import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const origin = site ? site.origin : 'https://supremokif.github.io';
  const base = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');
  const sitemapUrl = `${origin}${base}/sitemap-index.xml`;

  const content = `# Robots.txt for Leonida Index - Unofficial GTA VI Database & Launch Hub
User-agent: *
Allow: /

# Explicit AI Search & LLM Crawlers
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot-Extended
Allow: /

# Sitemaps & Structured Manifests
Sitemap: ${sitemapUrl}
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

