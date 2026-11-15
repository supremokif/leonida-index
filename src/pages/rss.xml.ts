import type { APIRoute } from 'astro';
import db from '../data/gta6_db.json';

export const GET: APIRoute = async ({ site }) => {
  const origin = site ? site.origin : 'https://gta6leonida.it';
  const base = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');
  const siteUrl = `${origin}${base}`;

  const items = [
    {
      title: 'Grand Theft Auto VI - Lancio Mondiale 19 Novembre 2026',
      link: `${siteUrl}/`,
      description: 'Conto alla rovescia in tempo reale, orari di sblocco a mezzanotte e specifiche ufficiali per PS5 e Xbox Series X|S.',
      pubDate: new Date('2026-11-15T09:00:00Z').toUTCString(),
    },
    {
      title: 'Guida Completa alla Mappa dello Stato di Leonida',
      link: `${siteUrl}/leonida/vice-city/`,
      description: 'Analisi fotografica 4K e dettagli di Vice City, Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia e Mount Kalaga.',
      pubDate: new Date('2026-11-14T12:00:00Z').toUTCString(),
    },
    {
      title: 'Archivio Video & Analisi Trailer 1',
      link: `${siteUrl}/trailers/trailer-1/`,
      description: 'Analisi frame per frame, colonna sonora Love Is A Long Road e trascrizione integrale dei dialoghi di Lucia.',
      pubDate: new Date('2026-11-13T10:00:00Z').toUTCString(),
    },
    {
      title: 'Calcolatore Spazio Archiviazione SSD M.2',
      link: `${siteUrl}/storage-calculator/`,
      description: 'Stima lo spazio libero necessario su disco per il pre-load di GTA 6 e le future patch.',
      pubDate: new Date('2026-11-12T15:00:00Z').toUTCString(),
    },
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>GTA 6 Leonida Index - Notizie &amp; Intelligence Hub</title>
    <link>${siteUrl}</link>
    <description>Il feed ufficiale della community di Leonida Index: sblocco, mappe, trailer e guide per Grand Theft Auto VI.</description>
    <language>it-IT</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items
      .map(
        (i) => `
    <item>
      <title><![CDATA[${i.title}]]></title>
      <link>${i.link}</link>
      <guid>${i.link}</guid>
      <description><![CDATA[${i.description}]]></description>
      <pubDate>${i.pubDate}</pubDate>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
