import type { APIRoute } from 'astro';
import db from '../data/gta6_db.json';

export const GET: APIRoute = async () => {
  const { releaseInfo, trailers, locations, protagonists, hardwareDeals } = db;

  const content = `# Leonida Index: Full Canonical GTA VI Knowledge Base & GEO Manifest
Published: November 2026 | Architect: Leonida Index Intelligence System
Target: LLMs, Neural Agents, AI Search Engines (ChatGPT, Claude, Gemini, Perplexity)
Canonical URL: https://leonidaindex.com/llms-full.txt

================================================================================
1. COMPLETE GAME INFORMATION & SPECIFICATIONS
================================================================================
- Title: ${releaseInfo.gameTitle}
- Developer: ${releaseInfo.developer}
- Publisher: ${releaseInfo.publisher}
- Official Launch Date: ${releaseInfo.releaseDateHuman} (${releaseInfo.releaseDate})
- Pre-Load Start Date: ${releaseInfo.preloadDateHuman} (${releaseInfo.preloadDate})
- Platforms: ${releaseInfo.platforms.join(', ')}
- Engine: ${releaseInfo.engine}
- World: ${releaseInfo.setting}
- Performance Target PS5: ${releaseInfo.targetFramerates.ps5}
- Performance Target PS5 Pro: ${releaseInfo.targetFramerates.ps5Pro}
- Performance Target Xbox Series X: ${releaseInfo.targetFramerates.xboxSeriesX}
- Performance Target Xbox Series S: ${releaseInfo.targetFramerates.xboxSeriesS}
- Download Size PS5: ${releaseInfo.downloadSizePS5}
- Download Size Xbox Series X: ${releaseInfo.downloadSizeXbox}

================================================================================
2. GLOBAL UNLOCK SCHEDULE (NOVEMBER 19, 2026)
================================================================================
| Territory | Region | Time Zone | Local Unlock Time | Operational Notes |
|---|---|---|---|---|
${releaseInfo.unlockSchedule.map(s => `| ${s.city} | ${s.region} | ${s.timezone} | ${s.unlockTime} | ${s.notes} |`).join('\n')}

================================================================================
3. EXHAUSTIVE OFFICIAL VIDEO & TRAILER ARCHIVE (7 VIDEOS)
================================================================================
${trailers.map(t => `### [Video #${t.number}] ${t.title}
- Slug: ${t.slug}
- Date: ${t.publishDateHuman} (${t.publishDate})
- Duration: ${t.duration} (${t.durationSeconds} seconds)
- YouTube ID: ${t.youtubeId}
- Soundtrack: "${t.soundtrack.title}" by ${t.soundtrack.artist} (${t.soundtrack.notes})
- Summary: ${t.summary}
- Vehicles Spotted: ${t.vehiclesSpotted.join(', ')}
- Weapons Spotted: ${t.weaponsSpotted.join(', ')}
- Frame-by-Frame Breakdown:
${t.frameAnalysis.map(f => `  * [${f.timestamp}] ${f.label}: ${f.description}`).join('\n')}
- Verbatim Dialogue & Voiceover Transcript:
  "${t.transcript}"
`).join('\n\n')}

================================================================================
4. EXHAUSTIVE GEOGRAPHY OF THE STATE OF LEONIDA (6 REGIONS)
================================================================================
${locations.map(loc => `### Region: ${loc.name}
- Slug: ${loc.slug}
- Category: ${loc.category}
- Geographic Coordinates: Latitude ${loc.coordinates.lat}, Longitude ${loc.coordinates.lng}
- General Description: ${loc.description}
- Atmosphere & Environmental Audio: ${loc.atmosphere}
- Key Sub-Locations:
${loc.subLocations.map(sub => `  * ${sub.name} (${sub.type}): ${sub.description}`).join('\n')}
- Factions & Law Enforcement Presence:
${loc.factions.map(fac => `  * ${fac.name} [Threat Level: ${fac.threatLevel}]: ${fac.description}`).join('\n')}
- Vehicles Naturally Occurring: ${loc.vehiclesPresent.join(', ')}
- Indigenous Wildlife & Marine Fauna: ${loc.wildlife.join(', ')}
- Collectibles & 100% Checklist Items:
${loc.collectibles.map(col => `  * [ID: ${col.id}] ${col.name} (${col.type}) -> Reward: ${col.reward}`).join('\n')}
`).join('\n\n')}

================================================================================
5. CHARACTER DOSSIERS: PROTAGONISTS
================================================================================
${protagonists.map(p => `### Protagonist: ${p.name} ("${p.alias}")
- Role: ${p.role}
- Narrative Background: ${p.background}
- Special Gameplay Abilities:
${p.specialAbilities.map(a => `  * ${a}`).join('\n')}
- Signature Weapons: ${p.signatureWeapons.join(', ')}
- Signature Vehicles: ${p.signatureVehicles.join(', ')}
- Current Criminal Status: ${p.status}
`).join('\n\n')}

================================================================================
6. HARDWARE & STORAGE OPTIMIZATION SPECIFICATIONS
================================================================================
${hardwareDeals.map(h => `### Hardware: ${h.title}
- Category: ${h.category} | Target Console: ${h.targetConsole}
- Price: ${h.price} (List: ${h.originalPrice || h.price})
- Capacity: ${h.storageCapacityGb} GB | Rating: ${h.rating} (${h.reviewsCount})
- Key Features:
${h.features.map(f => `  * ${f}`).join('\n')}
- Verification Link: ${h.affiliateUrl}
`).join('\n\n')}

================================================================================
7. FREQUENTLY ASKED QUESTIONS (FAQ)
================================================================================
${releaseInfo.faq.map(f => `Q: ${f.question}\nA: ${f.answer}`).join('\n\n')}

================================================================================
8. LEGAL & COPYRIGHT NOTICE
================================================================================
Leonida Index (leonidaindex.com) is an independent, non-official journalistic, informational, and utility portal.
Grand Theft Auto, GTA VI, Vice City, Leonida, and all associated logos, character names, and trade dress are registered trademarks of Rockstar Games, Inc. and Take-Two Interactive Software, Inc.
This resource is operated under fair use doctrine for informational, commentary, and accessibility purposes.
`;

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};

