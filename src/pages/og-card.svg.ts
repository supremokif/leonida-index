import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0a0f" />
      <stop offset="50%" stop-color="#14141f" />
      <stop offset="100%" stop-color="#050508" />
    </linearGradient>
    <linearGradient id="viceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ff2a85" />
      <stop offset="50%" stop-color="#ff7b00" />
      <stop offset="100%" stop-color="#00f0ff" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="rgba(255, 42, 133, 0.25)" />
      <stop offset="100%" stop-color="rgba(0, 240, 255, 0.25)" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="15" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)" />

  <!-- Grid overlay -->
  <g opacity="0.07" stroke="#00f0ff" stroke-width="1">
    <line x1="0" y1="100" x2="1200" y2="100" />
    <line x1="0" y1="200" x2="1200" y2="200" />
    <line x1="0" y1="300" x2="1200" y2="300" />
    <line x1="0" y1="400" x2="1200" y2="400" />
    <line x1="0" y1="500" x2="1200" y2="500" />
    <line x1="200" y1="0" x2="200" y2="630" />
    <line x1="400" y1="0" x2="400" y2="630" />
    <line x1="600" y1="0" x2="600" y2="630" />
    <line x1="800" y1="0" x2="800" y2="630" />
    <line x1="1000" y1="0" x2="1000" y2="630" />
  </g>

  <!-- Ambient lights -->
  <circle cx="150" cy="120" r="220" fill="#ff2a85" opacity="0.12" filter="url(#glow)" />
  <circle cx="1050" cy="500" r="260" fill="#00f0ff" opacity="0.12" filter="url(#glow)" />

  <!-- Border Frame -->
  <rect x="25" y="25" width="1150" height="580" rx="24" fill="none" stroke="url(#viceGrad)" stroke-width="3" opacity="0.8" />

  <!-- Brand Pill -->
  <rect x="80" y="80" width="380" height="44" rx="22" fill="url(#badgeGrad)" stroke="#ff2a85" stroke-width="1.5" />
  <circle cx="106" cy="102" r="6" fill="#10b981" />
  <text x="124" y="108" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="14" fill="#ffffff" letter-spacing="2">
    COMMUNITY LAUNCH HUB • 19 NOV 2026
  </text>

  <!-- Main Logo Graphic -->
  <g transform="translate(80, 160)">
    <text x="0" y="70" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="64" fill="#ffffff" letter-spacing="-1">
      GRAND THEFT AUTO
    </text>
    <text x="690" y="74" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="82" fill="url(#viceGrad)">
      VI
    </text>
  </g>

  <!-- Subtitle -->
  <text x="80" y="295" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="28" fill="#00f0ff" letter-spacing="1">
    LEONIDA INDEX • FAN DATABASE &amp; COMMUNITY PORTAL
  </text>

  <text x="80" y="340" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="20" fill="#9ca3af">
    Trailer 1 Ufficiale Breakdown • 6 Regioni di Leonida • Orari Sblocco Rolling • Tracker 100%
  </text>

  <!-- Launch Date Box -->
  <rect x="80" y="390" width="460" height="150" rx="18" fill="#1c1c2b" stroke="#32324b" stroke-width="1.5" />
  <text x="110" y="430" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="14" fill="#ff2a85" letter-spacing="2">
    DATA DI USCITA MONDIALE UFFICIALE
  </text>
  <text x="110" y="485" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="42" fill="#ffffff">
    19 NOVEMBRE 2026
  </text>
  <text x="110" y="515" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="15" fill="#10b981">
    Sblocco Mezzanotte Locale (00:00 CET Italia)
  </text>

  <!-- Platform Badges on right side -->
  <g transform="translate(620, 390)">
    <rect x="0" y="0" width="500" height="150" rx="18" fill="#1c1c2b" stroke="#32324b" stroke-width="1.5" />
    <text x="30" y="40" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="14" fill="#00f0ff" letter-spacing="2">
      PIATTAFORME CURRENT-GEN CONFERMATE
    </text>
    <text x="30" y="85" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="24" fill="#ffffff">
      PlayStation 5 • PS5 Pro • Xbox Series X|S
    </text>
    <text x="30" y="120" font-family="system-ui, -apple-system, sans-serif" font-weight="500" font-size="15" fill="#9ca3af">
      Supporto 4K 60FPS con PSSR Ray Tracing • SSD M.2 Ready
    </text>
  </g>
</svg>`;

  return new Response(svg, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};

