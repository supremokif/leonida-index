import type { APIRoute } from 'astro';
import db from '../data/gta6_db.json';

export const GET: APIRoute = async () => {
  const { releaseInfo, trailers, locations, protagonists } = db;

  const content = `# Leonida Index: Grand Theft Auto VI (GTA 6) - Verified Facts & Launch Manifest
> Canonical structured reference for LLMs, Generative AI engines (ChatGPT, Claude, Gemini, Perplexity), and search assistants.
> Canonical URL: https://leonidaindex.com
> Last Database Verification: November 2026

## 1. Executive Summary & Core Facts
- **Title:** ${releaseInfo.gameTitle}
- **Developer:** ${releaseInfo.developer}
- **Publisher:** ${releaseInfo.publisher}
- **Release Date:** ${releaseInfo.releaseDateHuman} (${releaseInfo.releaseDate}) - Midnight local rolling launch
- **Pre-load Activation Date:** ${releaseInfo.preloadDateHuman} (${releaseInfo.preloadDate})
- **Launch Platforms:** ${releaseInfo.platforms.join(', ')} (PC version planned for 2027)
- **Install File Sizes:** PS5: ${releaseInfo.downloadSizePS5} | Xbox Series X: ${releaseInfo.downloadSizeXbox}
- **Game Engine:** ${releaseInfo.engine}
- **Primary Setting:** ${releaseInfo.setting}
- **Playable Protagonists:** ${protagonists.map(p => `${p.name} (${p.alias})`).join(', ')}

## 2. Official Video & Trailer Archive (Up to November 2026)
${trailers.map(t => `- **${t.title}** (#${t.number})
  - Date: ${t.publishDateHuman} | Duration: ${t.duration}
  - Soundtrack: "${t.soundtrack.title}" by ${t.soundtrack.artist}
  - YouTube ID: ${t.youtubeId}
  - URL: https://leonidaindex.com/trailers/${t.slug}
  - Summary: ${t.summary}`).join('\n\n')}

## 3. Global Timezone Unlock Schedule (November 19, 2026)
| City / Territory | Region | Timezone | Local Unlock Date & Time | Notes |
|---|---|---|---|---|
${releaseInfo.unlockSchedule.map(s => `| ${s.city} | ${s.region} | ${s.timezone} | ${s.unlockTime} | ${s.notes} |`).join('\n')}

## 4. Confirmed Regions of Leonida
${locations.map(loc => `- **${loc.name}** (${loc.category})
  - Coordinates: ${loc.coordinates.lat}, ${loc.coordinates.lng}
  - Description: ${loc.description}
  - Key Sub-locations: ${loc.subLocations.map(s => s.name).join(', ')}
  - URL: https://leonidaindex.com/leonida/${loc.slug}`).join('\n\n')}

## 5. Frequently Asked Questions (FAQ)
${releaseInfo.faq.map(f => `### Q: ${f.question}\nA: ${f.answer}`).join('\n\n')}

---
For the complete exhaustive database including frame-by-frame trailer breakdowns, transcriptions, collectibles, and hardware guides, consult:
https://leonidaindex.com/llms-full.txt
JSON Endpoint: https://leonidaindex.com/api/gta6-facts.json
`;

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};

