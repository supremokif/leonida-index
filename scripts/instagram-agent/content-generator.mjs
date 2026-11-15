/**
 * GTA 6 Leonida - Instagram Content Generator Engine
 * Genera automaticamente post, caroselli, didascalie e set di hashtag
 * basati sui dati canonici di https://gta6leonida.it
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.resolve(__dirname, '../../src/data/gta6_db.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

const SITE_URL = 'https://gta6leonida.it';

// Archivio hashtag ad alto rendimento e viralità
const HASHTAG_SETS = {
  general: [
    '#GTA6', '#GTAVI', '#GrandTheftAuto6', '#GrandTheftAutoVI', '#RockstarGames',
    '#GTA6Leonida', '#Leonida', '#ViceCity', '#GTAItalia', '#GamingItalia',
    '#PS5', '#XboxSeriesX', '#GamerCommunity', '#GTAOnline'
  ],
  characters: [
    '#LuciaGTA6', '#JasonGTA6', '#GTA6Protagonists', '#LuciaAndJason',
    '#GTAVILucia', '#GTA6News', '#GTACommunity', '#RockstarFans'
  ],
  locations: [
    '#ViceCity2026', '#LeonidaKeys', '#Grassrivers', '#PortGellhorn',
    '#ViceBeach', '#GTA6Map', '#GTAVIMap'
  ],
  tech: [
    '#RAGEEngine', '#PS5Pro', '#GamingTech', '#NextGenGaming', '#RayTracing',
    '#SSDPS5', '#4KGaming'
  ]
};

function calculateDaysLeft() {
  const target = new Date('2026-11-19T00:00:00Z').getTime();
  const now = new Date().getTime();
  const diff = target - now;
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

/**
 * Genera una serie di template di post per Instagram
 */
export function generatePostCatalog() {
  const daysLeft = calculateDaysLeft();

  return [
    // 1. Post Conto alla Rovescia
    {
      id: 'countdown_daily',
      type: 'single_image',
      topic: 'Conto alla Rovescia Ufficiale',
      imageUrl: `${SITE_URL}/images/gtavi-standard-edition.jpg`,
      caption: `🌴 MANCANO SOLO ${daysLeft} GIORNI A GRAND THEFT AUTO VI! ⏳🔥\n\nIl 19 Novembre 2026 le porte dello Stato di Leonida si apriranno finalmente per tutti i giocatori su PlayStation 5 e Xbox Series X|S.\n\nSei pronto a tornare tra le luci al neon di Vice City con Lucia e Jason?\n\n📊 Segui il conto alla rovescia al secondo, gli orari di sblocco a mezzanotte e tutte le ultime novità ufficiali sul nostro portale:\n🔗 Link in Bio 👉 gta6leonida.it\n\n💬 Dicci nei commenti: quale sarà la prima cosa che farai appena atterrerai a Vice City? 👇\n\n${HASHTAG_SETS.general.join(' ')}`
    },

    // 2. Focus Protagonista: Lucia
    {
      id: 'character_lucia',
      type: 'single_image',
      topic: 'Dossier Protagonisti: Lucia',
      imageUrl: `${SITE_URL}/images/lucia-profile.jpg`,
      caption: `🚨 "L'unico modo per uscirne è restare uniti. Facendo squadra. Ti fidi di me? — Fiducia." 💥\n\nLucia è la prima protagonista femminile dell'era moderna di Grand Theft Auto: determinata, imprevedibile e pronta a tutto pur di riprendersi il controllo di Vice City dopo il periodo trascorso al penitenziario di Leonida.\n\nAssieme a Jason forma una coppia criminale che dovrà affrontare cospirazioni e rapine attraverso l'intero Stato.\n\n🔎 Leggi l'analisi completa della trama, dei dialoghi del Trailer 1 e delle teorie verificate sul nostro sito:\n👉 Link in Bio: gta6leonida.it\n\nTi piace il personaggio di Lucia? Faccelo sapere nei commenti! 👇\n\n${HASHTAG_SETS.general.concat(HASHTAG_SETS.characters).join(' ')}`
    },

    // 3. Focus Protagonista: Jason
    {
      id: 'character_jason',
      type: 'single_image',
      topic: 'Dossier Protagonisti: Jason',
      imageUrl: `${SITE_URL}/images/jason-profile.jpg`,
      caption: `⚡ DOSSIER JASON // PROTAGONISTA GTA VI 🕶️\n\n"Fiducia. È l'unica cosa che ci tiene vivi."\n\nJason si ritrova trascinato in una spirale di colpi e pericoli crescenti attraverso la contea e le isole di Leonida. In un mondo dove chiunque cerca di fregarti, l'unica certezza rimane il legame con Lucia.\n\n🎮 Il sistema di switch dinamico tra i due protagonisti permetterà di pianificare rapine coordinate e affrontare missioni con approcci totalmente differenti.\n\n📲 Scopri tutti i retroscena confermati su gta6leonida.it (Link in bio!)\n\nQuale protagonista userai di più? Jason o Lucia? Scrivilo qui sotto! 👇\n\n${HASHTAG_SETS.general.concat(HASHTAG_SETS.characters).join(' ')}`
    },

    // 4. Cartografia: Le 6 Regioni di Leonida
    {
      id: 'map_vice_city',
      type: 'single_image',
      topic: 'Cartografia: Vice City Downtown',
      imageUrl: `${SITE_URL}/images/vice-city-downtown.jpg`,
      caption: `🏙️ BENVENUTO A VICE CITY: IL CUORE DELLO STATO DI LEONIDA 🌴☀️\n\nDagli iconici hotel Art Déco di Ocean Beach fino agli imponenti grattacieli specchiati di Downtown: Vice City rinasce con un livello di dettaglio e interazione mai visto prima nel mondo dei videogiochi.\n\n🌐 Sapevi che la mappa include 6 regioni distinte tra cui le paludi delle Grassrivers e le isole coralline delle Leonida Keys?\n\n🗺️ Esplora la cartografia interattiva e le coordinate GPS sul nostro hub:\n🔗 gta6leonida.it/leonida/vice-city (Link in Bio!)\n\nTagga il tuo compagno di colpi con cui esplorerai Vice City! 🚗💨\n\n${HASHTAG_SETS.general.concat(HASHTAG_SETS.locations).join(' ')}`
    },

    // 5. Curiosità Verificata: Tom Petty & Soundtrack
    {
      id: 'trivia_soundtrack',
      type: 'single_image',
      topic: 'Curiosità: Il Record di Love Is A Long Road',
      imageUrl: `${SITE_URL}/images/vice-nightlife-neon.jpg`,
      caption: `🎵 LO SAPEVI CHE...? 📈🔥\n\nNelle ore successive all'uscita del Trailer 1 di Grand Theft Auto VI, il leggendario brano del 1989 "Love Is a Long Road" di Tom Petty ha registrato un clamoroso +36.988% di streaming globali su Spotify!\n\nTom Petty è nato e cresciuto proprio in Florida (a Gainesville), rendendo la scelta della canzone un tributo autentico e profondo alla cultura del Sunshine State.\n\n🎧 Ascolta l'analisi completa della colonna sonora e i dettagli delle radio in-game su:\n👉 gta6leonida.it (Link in bio)\n\nQuale artista sogni di ascoltare sulle radio di GTA VI? Dillo nei commenti! 📻👇\n\n${HASHTAG_SETS.general.join(' ')}`
    },

    // 6. Diagnostica Hardware & Spazio Console
    {
      id: 'tech_ssd_calculator',
      type: 'single_image',
      topic: 'Consigli Tecnici: Preparazione SSD PS5 e Xbox',
      imageUrl: `${SITE_URL}/images/action-supercar.jpg`,
      caption: `💾 IL TUO DISCO È PRONTO PER GTA VI? 🎮⚠️\n\nCon una mappa enorme, texture in 4K ad altissima risoluzione e simulazione fisica in tempo reale, Grand Theft Auto VI richiederà uno spazio considerevole sul disco interno della tua console.\n\n⚡ Su PlayStation 5 serve un SSD M.2 NVMe PCIe 4.0 con velocità minima di 5.500 MB/s e dissipatore termico in alluminio.\n\n🧮 Sul nostro sito trovi il CALCOLATORE SSD GRATUITO per simulare lo spazio residuo sulla tua console ed evitare blocchi al momento del download:\n🔗 Visita: gta6leonida.it/storage-calculator (Link in bio!)\n\nQuanti GB liberi hai attualmente sulla tua console? Commenta qui sotto! 📦\n\n${HASHTAG_SETS.general.concat(HASHTAG_SETS.tech).join(' ')}`
    }
  ];
}

/**
 * Generatore di risposte intelligenti ai commenti degli utenti su Instagram
 */
export function generateCommentReply(commentText, commenterUsername = 'fan') {
  const lower = commentText.toLowerCase();

  if (lower.includes('quando esce') || lower.includes('data') || lower.includes('uscita') || lower.includes('release')) {
    return `Ciao @${commenterUsername}! Grand Theft Auto VI uscirà ufficialmente il 19 Novembre 2026 su PS5 e Xbox Series X|S! Trovi il countdown in tempo reale e tutti i dettagli su gta6leonida.it (link in bio) 🌴🔥`;
  }

  if (lower.includes('pc') || lower.includes('computer') || lower.includes('steam')) {
    return `Ciao @${commenterUsername}! Al lancio (19 Novembre 2026) il gioco sarà disponibile in esclusiva su console PlayStation 5 e Xbox Series X|S. Come da tradizione Rockstar, la versione PC verrà annunciata successivamente. Trovi le FAQ complete su gta6leonida.it 💻✨`;
  }

  if (lower.includes('ps4') || lower.includes('xbox one') || lower.includes('old gen')) {
    return `Ciao @${commenterUsername}! GTA VI non sarà disponibile su PS4 o Xbox One perché richiede la potenza del processore e dell'SSD ultraveloce delle console Next-Gen (PS5 e Xbox Series X|S) per caricare il mondo di Leonida senza attese! 🚀`;
  }

  if (lower.includes('mappa') || lower.includes('grandezza') || lower.includes('size')) {
    return `Ciao @${commenterUsername}! La mappa dello Stato di Leonida comprende Vice City e ben 6 regioni geografiche esplorabili! Puoi consultare la cartografia e i punti di interesse su gta6leonida.it/leonida/vice-city 🗺️📍`;
  }

  if (lower.includes('trailer 2') || lower.includes('nuovo trailer')) {
    return `Ciao @${commenterUsername}! Il Trailer 2 è tra i contenuti più attesi: non appena Rockstar rilascerà comunicati sul Newswire lo troverai analizzato frame per frame sul nostro hub gta6leonida.it! Rimani sintonizzato! 🎬`;
  }

  // Risposta di default accogliente e calorosa
  return `Grazie del commento @${commenterUsername}! Sei carico per il ritorno a Vice City? Trovi tutte le novità verificate, screenshot 4K e il countdown su gta6leonida.it (link in bio) 🌴🔥`;
}
