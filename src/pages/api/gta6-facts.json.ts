import type { APIRoute } from 'astro';
import db from '../../data/gta6_db.json';

export const GET: APIRoute = async () => {
  const payload = {
    canonicalUrl: 'https://leonidaindex.com',
    generatedAt: '2026-11-11T17:45:00+01:00',
    meta: {
      title: 'Leonida Index - GTA VI Verified Intelligence API',
      version: '1.0.0',
      license: 'Fair Use Informational Database',
      disclaimer: 'Unofficial database. GTA VI is a trademark of Rockstar Games / Take-Two Interactive.',
    },
    release: {
      gameTitle: db.releaseInfo.gameTitle,
      developer: db.releaseInfo.developer,
      publisher: db.releaseInfo.publisher,
      releaseDate: db.releaseInfo.releaseDate,
      releaseDateHuman: db.releaseInfo.releaseDateHuman,
      preloadDate: db.releaseInfo.preloadDate,
      preloadActive: true,
      platforms: db.releaseInfo.platforms,
      downloadSize: {
        ps5: db.releaseInfo.downloadSizePS5,
        xbox: db.releaseInfo.downloadSizeXbox,
      },
      engine: db.releaseInfo.engine,
      setting: db.releaseInfo.setting,
      unlockSchedule: db.releaseInfo.unlockSchedule,
    },
    trailersCount: db.trailers.length,
    trailers: db.trailers.map(t => ({
      number: t.number,
      slug: t.slug,
      title: t.title,
      publishDate: t.publishDate,
      duration: t.duration,
      youtubeId: t.youtubeId,
      soundtrack: t.soundtrack,
      summary: t.summary,
      url: `https://leonidaindex.com/trailers/${t.slug}`,
    })),
    regionsCount: db.locations.length,
    regions: db.locations.map(l => ({
      id: l.id,
      slug: l.slug,
      name: l.name,
      category: l.category,
      coordinates: l.coordinates,
      subLocationsCount: l.subLocations.length,
      collectiblesCount: l.collectibles.length,
      url: `https://leonidaindex.com/leonida/${l.slug}`,
    })),
    faq: db.releaseInfo.faq,
  };

  return new Response(JSON.stringify(payload, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

