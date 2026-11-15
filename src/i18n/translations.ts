export type Lang = 'it' | 'en';

export const translations: Record<Lang, Record<string, string>> = {
  it: {
    // Navigazione
    'nav.overview': 'PANORAMICA',
    'nav.trailers': 'TRAILER',
    'nav.news': 'NOTIZIE & CURIOSITÀ',
    'nav.editions': 'EDIZIONI',
    'nav.screenshots': 'SCREENSHOT 4K',
    'nav.leonida': 'MAPPA LEONIDA',
    'nav.tracker': 'TRACKER ESPLORATIVO',
    'nav.storage': 'CALCOLATORE SSD',
    'nav.newswire': 'COMUNICATI ROCKSTAR',
    'nav.preorder_btn': 'DISPONIBILITÀ',
    'nav.community_badge': 'PORTALE COMMUNITY FAN • DATABASE LEONIDA',

    // Hero Section
    'hero.countdown_title': 'CONTO ALLA ROVESCIA AL LANCIO MONDIALE',
    'hero.coming_date': 'IN ARRIVO IL 19 NOVEMBRE 2026',
    'hero.quote': 'Vice City, USA. Jason e Lucia sanno bene che la fortuna non è mai dalla loro parte. Ma quando un colpo apparentemente facile va storto, si ritrovano catapultati nel lato più oscuro e pericoloso del luogo più soleggiato d\'America.',
    'hero.days': 'GIORNI',
    'hero.hours': 'ORE',
    'hero.minutes': 'MINUTI',
    'hero.seconds': 'SECONDI',
    'hero.unlock_label': 'SBLOCCO ORE 00:00 (FUSO ORARIO ITALIANO)',
    'hero.sync_active': 'SINCRONIZZAZIONE ATTIVA',
    'hero.cta_preorder': 'SCOPRI LE PIATTAFORME',
    'hero.cta_trailer': 'GUARDA IL TRAILER 1',
    'hero.plays_best_label': 'OTTIMIZZATO PER',
    'hero.scroll_label': 'SCORRI PER ALTRI CONTENUTI',

    // Barra Condivisione Virale
    'share.title': 'CONDIVIDI IL CONTO ALLA ROVESCIA',
    'share.subtitle': 'PASSAPAROLA GAMER',
    'share.whatsapp': 'WhatsApp',
    'share.telegram': 'Telegram',
    'share.twitter': 'X (Twitter)',
    'share.copy': 'Copia Link',
    'share.copied': 'COPIATO! ✓',

    // Citazione Storia Rockstar
    'pillars.story_tag': 'VICE CITY, USA',
    'pillars.story_quote': '"Jason e Lucia sanno bene che il banco vince sempre. Ma quando un colpo da poco va a rotoli, si ritrovano invischiati nel lato più buio del posto più soleggiato d\'America, al centro di una cospirazione criminale che abbraccia l\'intero Stato di Leonida — costretti a fidarsi l\'uno dell\'altra più che mai se vogliono uscirne vivi."',
    'pillars.story_author': '— Panoramica Ufficiale della Trama di Rockstar Games',

    // Edizioni e Piattaforme
    'pillars.editions_tag': 'EDIZIONI UFFICIALI',
    'pillars.editions_title': 'DISPONIBILITÀ & PIATTAFORME',
    'pillars.available_platforms': 'CONFERMATO SU PLAYSTATION® 5 E XBOX SERIES X|S',
    'pillars.standard_tag': 'GIOCO COMPLETO CURRENT-GEN',
    'pillars.standard_title': 'STANDARD EDITION',
    'pillars.standard_desc': 'L\'esperienza narrativa completa di Grand Theft Auto VI attraverso le strade illuminate al neon di Vice City e le vaste terre selvagge dello Stato di Leonida. Disponibile al lancio per PlayStation 5 e Xbox Series X|S.',
    'pillars.learn_more': 'PORTALE ROCKSTAR ➔',
    'pillars.preorder_btn': 'SCOPRI DI PIÙ ➔',
    'pillars.special_tag': 'STATO PRE-ORDER // COMUNICATO UFFICIALE',
    'pillars.special_title': 'EDIZIONI SPECIALI & PRE-ORDINI DIGITALI',
    'pillars.special_desc': 'Rockstar Games e Take-Two Interactive non hanno ancora comunicato i dettagli specifici di eventuali Collector\'s Edition, Deluxe Edition o bonus di pre-ordine per GTA VI. Tutti gli annunci ufficiali verranno pubblicati direttamente su Rockstar Newswire e sui canali PlayStation Store e Xbox Store.',
    'pillars.special_sub': 'Canali Ufficiali Rockstar Games',
    'pillars.special_status': 'IN ATTESA DI COMUNICAZIONE',

    // 4 Pilastri Fondamentali
    'pillars.screenshots_tag': 'SCREENSHOT UFFICIALI',
    'pillars.screenshots_title': 'GALLERIA FOTOGRAFICA 4K',
    'pillars.screenshots_desc': 'Esplora lo Stato di Leonida con le catture fotografiche ufficiali in risoluzione Ultra HD 4K estratte dal reveal di Rockstar Games.',
    'pillars.view_all': 'VEDI TUTTI',
    'pillars.people_tag': 'PERSONAGGI E LUOGHI',
    'pillars.people_title': 'SOLO A LEONIDA',
    'pillars.people_desc': 'Vice City, USA. Il lato più oscuro e pericoloso del luogo più soleggiato d\'America.',
    'pillars.explore_more': 'ESPLORA DI PIÙ',
    'pillars.music_tag': 'COLONNA SONORA UFFICIALE',
    'pillars.music_title': '"LOVE IS A LONG ROAD"',
    'pillars.music_desc': 'Il celebre brano di Tom Petty (1989) scelto da Rockstar Games come colonna sonora del Trailer 1 ufficiale.',
    'pillars.downloads_tag': 'ARCHIVIO MULTIMEDIALE',
    'pillars.downloads_title': 'TRAILER UFFICIALE ROCKSTAR',
    'pillars.downloads_desc': 'Riguarda il primo reveal trailer in alta definizione e scopri tutti i dettagli con l\'analisi fotogramma per fotogramma.',
    'pillars.see_all': 'GUARDA ORA',

    // Negozio e Magazzino Rockstar
    'store.tag': 'STORE UFFICIALE',
    'store.title': 'ROCKSTAR WAREHOUSE & MERCHANDISE',
    'store.view_all': 'SCOPRI TUTTI I PRODOTTI SU ROCKSTAR STORE ➔',
    'store.merch_tag': 'ABBIGLIAMENTO E ACCESSORI',
    'store.merch_title': 'MERCHANDISE UFFICIALE ROCKSTAR',
    'store.merch_desc': 'Capi di abbigliamento, cappellini, spille, adesivi e accessori da collezione ufficiali disponibili direttamente nello store ufficiale di Rockstar Games.',
    'store.rockstar_official': 'Store Ufficiale Rockstar',
    'store.shop_now': 'ACQUISTA SU ROCKSTAR STORE ➔',
    'store.box_tag': 'FONTI CERTIFICATE',
    'store.box_title': 'CANALI UFFICIALI DI COMUNICAZIONE',
    'store.box_desc': 'Tutte le novità, i futuri trailer di gioco, le date di apertura dei pre-order e le edizioni speciali saranno annunciate in esclusiva mondiale su Rockstar Newswire e tramite Take-Two Interactive.',
    'store.exclusive_run': 'Comunicati Diretti',
    'store.explore_now': 'LEGGI NEWSWIRE ➔',

    // Sezione Notizie / Newswire
    'news.tag': 'COMUNICATI CERTIFICATI ALLA FONTE',
    'news.title': 'ROCKSTAR NEWSWIRE & REPORT UFFICIALI',
    'news.view_all': 'TUTTI GLI ARTICOLI NEWSWIRE ➔',
    'news.item1_title': 'Grand Theft Auto VI: Pubblicato Ufficialmente il Trailer 1',
    'news.item1_desc': 'Rockstar Games ha presentato ufficialmente il primo reveal trailer di Grand Theft Auto VI, introducendo lo Stato di Leonida, la protagonista Lucia e la colonna sonora di Tom Petty.',
    'news.item2_title': '3 Record Mondiali Certificati al Debutto di GTA VI',
    'news.item2_desc': 'Il primo trailer ufficiale ha superato 90.4 milioni di visualizzazioni nelle prime 24 ore su YouTube, stabilendo il record assoluto come video non musicale più visto al debutto.',
    'news.item3_title': 'Take-Two Interactive: Finestra di Lancio Confermata',
    'news.item3_desc': 'Nelle comunicazioni finanziarie ufficiali con gli investitori di Wall Street, la società madre Take-Two ha ribadito la finestra di rilascio del titolo per console current-gen.',
    'news.category': 'Comunicato Newswire',

    // Propaganda Newsletter
    'propaganda.title': 'RICEVI LA PROPAGANDA ROCKSTAR',
    'propaganda.desc': 'Ricevi gli annunci di gioco ufficiali, aggiornamenti e comunicati stampa direttamente da Rockstar Games.',
    'propaganda.placeholder': 'Inserisci il tuo indirizzo email',
    'propaganda.signup': 'ISCRIVITI ORA',
    'propaganda.privacy_notice': 'Iscrivendoti, accetti di ricevere comunicazioni promozionali da Rockstar Games.',

    // Classificazione PEGI
    'pegi.tag': 'RATING IN ATTESA DI CONFERMA (18+)',
    'pegi.desc': 'Violenza estrema, linguaggio forte, contenuti per soli adulti.',

    // Video & Trailer Selector
    'videos.tag': 'ARCHIVIO MULTIMEDIALE ROCKSTAR GAMES',
    'videos.title': 'TRAILER UFFICIALE',
    'videos.filter_all': 'TUTTI I VIDEO',
    'videos.filter_official': 'CANONICI',
    'videos.coming_soon': 'PROSSIMAMENTE',
    'videos.watch_breakdown': 'ANALISI DETTAGLIATA FOTOGRAMMA PER FOTOGRAMMA ➔',

    // Screenshot Gallery
    'gallery.tag': 'ARCHIVIO FOTOGRAFICO 4K',
    'gallery.title': 'GALLERIA SCREENSHOT',
    'gallery.filter_all': 'TUTTI',
    'gallery.filter_night': 'NOTTE A VICE CITY',
    'gallery.filter_nature': 'PALUDI & NATURA',
    'gallery.filter_characters': 'JASON & LUCIA',

    // Regioni Leonida
    'regions.tag': 'CARTOGRAFIA E TERRITORI',
    'regions.title': 'SOLO A LEONIDA',
    'regions.desc': 'Vice City, USA. Dai viali al neon di Ocean Beach alle paludi misteriose delle Grassrivers: esplora le regioni che compongono lo Stato di Leonida.',
    'regions.details_btn': 'DETTAGLI REGIONI E FOTOGRAFIA',

    // Protagonisti
    'protagonists.tag': 'PERSONAGGI GIOCABILI',
    'protagonists.title': 'LUCIA & JASON',
    'protagonists.lucia_desc': 'Presentata all\'interno del penitenziario dello Stato di Leonida all\'inizio del Trailer 1 ufficiale. Forma con Jason una determinata coppia criminale impegnata in rapine e fughe lungo le strade di Vice City.',
    'protagonists.lucia_quote': '"L\'unico modo per uscirne è restare uniti. Facendo squadra. Ti fidi di me? — Fiducia."',
    'protagonists.jason_desc': 'Partner di Lucia nelle rapine ad alto rischio documentate nel Trailer 1 ufficiale. I due protagonisti sono uniti da un forte patto di fiducia reciproca per sopravvivere nello Stato di Leonida.',
    'protagonists.jason_quote': '"Fiducia. È l\'unica cosa che ci tiene vivi."',
    'protagonists.role_label': 'RUOLO:',
    'protagonists.role_value': 'PROTAGONISTA GIOCABILE',
    'protagonists.canon_badge': 'CANON VERIFICATO',

    // Sezione Dossier Tecnico
    'dossier.tag': 'SCHEDA TECNICA',
    'dossier.title': 'DOSSIER UFFICIALE DI LANCIO',

    // Footer
    'footer.community_title': 'COMMUNITY FAN HUB',
    'footer.community_subtitle': 'NON-UFFICIALE • NON-AFFILIATO',
    'footer.disclaimer': 'DISCLAIMER COMMERCIALE E COPYRIGHT: Leonida Index (gta6leonida.it) è un portale editoriale amatoriale indipendente e non ufficiale per gli appassionati. Non è affiliato, sponsorizzato, approvato né associato in alcun modo a Rockstar Games, Take-Two Interactive Software, Inc., Sony Interactive Entertainment o Microsoft Corporation.',
    'footer.copyright_note': 'Grand Theft Auto, GTA VI, GTA 6, Vice City, Leonida e tutti i rispettivi loghi, marchi, asset e nomi di personaggi appartengono esclusivamente a Take-Two Interactive Software, Inc. e Rockstar Games, Inc. L\'uso dei contenuti sul portale è svolto a puro scopo informativo, divulgativo e di cronaca nel quadro del diritto di citazione e del Fair Use (art. 70 L. 633/1941).',
    'footer.privacy_link': 'PRIVACY POLICY',
    'footer.affiliate_link': 'TRASPARENZA AFFILIAZIONI',
    'footer.security_link': 'POLITICA DI SICUREZZA (RFC 9116)',
    'footer.copy_notice': '© 2026 Leonida Index. Progettato con passione per la community di Vice City.',

    // Lingua
    'lang.current': 'Italiano',
    'lang.switch_to_en': 'Passa all\'Inglese',
    'lang.switch_to_it': 'Passa all\'Italiano',
  },
  en: {
    // Navigation
    'nav.overview': 'OVERVIEW',
    'nav.trailers': 'TRAILERS',
    'nav.news': 'NEWS & TRIVIA',
    'nav.editions': 'EDITIONS',
    'nav.screenshots': '4K SCREENSHOTS',
    'nav.leonida': 'LEONIDA MAP',
    'nav.tracker': 'EXPLORATION TRACKER',
    'nav.storage': 'SSD CALCULATOR',
    'nav.newswire': 'ROCKSTAR NEWSWIRE',
    'nav.preorder_btn': 'AVAILABILITY',
    'nav.community_badge': 'COMMUNITY FAN PORTAL • LEONIDA DATABASE',

    // Hero Section
    'hero.countdown_title': 'COUNTDOWN TO WORLDWIDE LAUNCH',
    'hero.coming_date': 'COMING NOVEMBER 19, 2026',
    'hero.quote': 'Vice City, USA. Jason and Lucia have always known the deck is stacked against them. But when an easy score goes wrong, they find themselves on the darkest side of the sunniest place in America.',
    'hero.days': 'DAYS',
    'hero.hours': 'HOURS',
    'hero.minutes': 'MINUTES',
    'hero.seconds': 'SECONDS',
    'hero.unlock_label': 'MIDNIGHT UNLOCK 00:00 (LOCAL TIMEZONE)',
    'hero.sync_active': 'LIVE SYNCHRONIZED',
    'hero.cta_preorder': 'EXPLORE PLATFORMS',
    'hero.cta_trailer': 'WATCH TRAILER 1',
    'hero.plays_best_label': 'PLAYS BEST ON',
    'hero.scroll_label': 'SCROLL FOR MORE CONTENT',

    // Viral Share Bar
    'share.title': 'SHARE THE COUNTDOWN',
    'share.subtitle': 'GAMER WORD OF MOUTH',
    'share.whatsapp': 'WhatsApp',
    'share.telegram': 'Telegram',
    'share.twitter': 'X (Twitter)',
    'share.copy': 'Copy Link',
    'share.copied': 'COPIED! ✓',

    // Rockstar Story Quote
    'pillars.story_tag': 'VICE CITY, USA',
    'pillars.story_quote': '"Jason and Lucia have always known the deck is stacked against them. But when an easy score goes wrong, they find themselves on the darkest side of the sunniest place in America, in the middle of a criminal conspiracy stretching across the state of Leonida — forced to rely on each other more than ever if they want to make it out alive."',
    'pillars.story_author': '— Rockstar Games Official Story Overview',

    // Editions and Platforms
    'pillars.editions_tag': 'OFFICIAL EDITIONS',
    'pillars.editions_title': 'AVAILABILITY & PLATFORMS',
    'pillars.available_platforms': 'CONFIRMED ON PLAYSTATION® 5 AND XBOX SERIES X|S',
    'pillars.standard_tag': 'CURRENT-GEN FULL GAME',
    'pillars.standard_title': 'STANDARD EDITION',
    'pillars.standard_desc': 'The complete narrative Grand Theft Auto VI experience across neon-soaked Vice City and the state of Leonida. Available at launch on PlayStation 5 and Xbox Series X|S.',
    'pillars.learn_more': 'ROCKSTAR PORTAL ➔',
    'pillars.preorder_btn': 'LEARN MORE ➔',
    'pillars.special_tag': 'PRE-ORDER STATUS // OFFICIAL STATEMENT',
    'pillars.special_title': 'SPECIAL EDITIONS & DIGITAL PRE-ORDERS',
    'pillars.special_desc': 'Rockstar Games and Take-Two Interactive have not yet announced specific details for Collector\'s Editions, Deluxe Editions, or pre-order bonuses for GTA VI. Official updates will be released directly through Rockstar Newswire and console digital stores.',
    'pillars.special_sub': 'Rockstar Games Official Channels',
    'pillars.special_status': 'PENDING OFFICIAL ANNOUNCEMENT',

    // 4 Core Pillars
    'pillars.screenshots_tag': 'OFFICIAL SCREENSHOTS',
    'pillars.screenshots_title': '4K PHOTO GALLERY',
    'pillars.screenshots_desc': 'Explore the State of Leonida with official Ultra HD 4K captures from Rockstar Games\' worldwide reveal.',
    'pillars.view_all': 'VIEW ALL',
    'pillars.people_tag': 'PEOPLE & PLACES',
    'pillars.people_title': 'ONLY IN LEONIDA',
    'pillars.people_desc': 'Vice City, USA. The darkest side of the sunniest place in America.',
    'pillars.explore_more': 'EXPLORE MORE',
    'pillars.music_tag': 'OFFICIAL SOUNDTRACK',
    'pillars.music_title': '"LOVE IS A LONG ROAD"',
    'pillars.music_desc': 'Tom Petty\'s 1989 classic track featured by Rockstar Games as the official theme of Trailer 1.',
    'pillars.downloads_tag': 'MEDIA ARCHIVE',
    'pillars.downloads_title': 'ROCKSTAR OFFICIAL TRAILER',
    'pillars.downloads_desc': 'Watch the record-breaking reveal trailer in high definition with a full frame-by-frame breakdown.',
    'pillars.see_all': 'WATCH NOW',

    // Rockstar Warehouse & Store
    'store.tag': 'OFFICIAL STORE',
    'store.title': 'ROCKSTAR WAREHOUSE & MERCHANDISE',
    'store.view_all': 'EXPLORE ALL GEAR ON ROCKSTAR STORE ➔',
    'store.merch_tag': 'APPAREL & ACCESSORIES',
    'store.merch_title': 'OFFICIAL ROCKSTAR GEAR',
    'store.merch_desc': 'Official apparel, collectibles, caps, stickers, and accessories available directly on the official Rockstar Games store.',
    'store.rockstar_official': 'Rockstar Official Store',
    'store.shop_now': 'BUY ON ROCKSTAR STORE ➔',
    'store.box_tag': 'CERTIFIED SOURCES',
    'store.box_title': 'OFFICIAL CHANNELS',
    'store.box_desc': 'All future news, upcoming trailers, pre-order dates, and special editions will be announced exclusively on Rockstar Newswire and Take-Two Interactive communications.',
    'store.exclusive_run': 'Direct Press Releases',
    'store.explore_now': 'READ NEWSWIRE ➔',

    // News / Newswire Section
    'news.tag': 'CERTIFIED SOURCE RELEASES',
    'news.title': 'ROCKSTAR NEWSWIRE & OFFICIAL REPORTS',
    'news.view_all': 'ALL NEWSWIRE ARTICLES ➔',
    'news.item1_title': 'Grand Theft Auto VI Trailer 1 Officially Released',
    'news.item1_desc': 'Rockstar Games officially revealed the first trailer for Grand Theft Auto VI, introducing the state of Leonida, protagonist Lucia, and Tom Petty\'s soundtrack.',
    'news.item2_title': '3 Official Guinness World Records Certified at Debut',
    'news.item2_desc': 'Trailer 1 surpassed 90.4 million views in its first 24 hours on YouTube, becoming the most-viewed non-music video debut in YouTube history.',
    'news.item3_title': 'Take-Two Interactive: Launch Window Confirmed',
    'news.item3_desc': 'In official SEC filings with Wall Street investors, parent company Take-Two reaffirmed its release schedule for current-gen consoles.',
    'news.category': 'Newswire Release',

    // Propaganda Newsletter
    'propaganda.title': 'GET ROCKSTAR PROPAGANDA',
    'propaganda.desc': 'Get official game announcements, updates on special events and offers, and much more from Rockstar Games.',
    'propaganda.placeholder': 'Enter your email address',
    'propaganda.signup': 'SIGN UP NOW',
    'propaganda.privacy_notice': 'By signing up, you agree to receive promotional communications from Rockstar Games.',

    // PEGI Rating
    'pegi.tag': 'RATING PENDING OFFICIAL CONFIRMATION (18+)',
    'pegi.desc': 'Extreme violence, strong language, mature adult content.',

    // Video & Trailer Selector
    'videos.tag': 'ROCKSTAR GAMES MEDIA ARCHIVE',
    'videos.title': 'OFFICIAL TRAILER',
    'videos.filter_all': 'ALL VIDEOS',
    'videos.filter_official': 'CANONICAL',
    'videos.coming_soon': 'COMING SOON',
    'videos.watch_breakdown': 'WATCH FULL FRAME-BY-FRAME BREAKDOWN ➔',

    // Screenshot Gallery
    'gallery.tag': '4K PHOTO ARCHIVE',
    'gallery.title': 'SCREENSHOT GALLERY',
    'gallery.filter_all': 'ALL',
    'gallery.filter_night': 'NIGHT IN VICE CITY',
    'gallery.filter_nature': 'SWAMPS & WILDLIFE',
    'gallery.filter_characters': 'JASON & LUCIA',

    // Leonida Regions
    'regions.tag': 'CARTOGRAPHY & REGIONS',
    'regions.title': 'ONLY IN LEONIDA',
    'regions.desc': 'Vice City, USA. From the neon boulevards of Ocean Beach to the wild swamps of Grassrivers: explore the regions of the State of Leonida.',
    'regions.details_btn': 'REGION DETAILS & PHOTOGRAPHY',

    // Protagonists
    'protagonists.tag': 'PLAYABLE PROTAGONISTS',
    'protagonists.title': 'LUCIA & JASON',
    'protagonists.lucia_desc': 'Introduced inside the Leonida State Penitentiary at the start of official Trailer 1. She partners with Jason as a criminal team facing heists and escapes across Vice City.',
    'protagonists.lucia_quote': '"The only way we\'re gonna get through this is by sticking together. Being a team. Do you trust me? — Trust."',
    'protagonists.jason_desc': 'Lucia\'s partner in high-risk robberies documented in the official Trailer 1. The duo is bonded by mutual trust to survive across the State of Leonida.',
    'protagonists.jason_quote': '"Trust. It\'s the only thing keeping us alive."',
    'protagonists.role_label': 'ROLE:',
    'protagonists.role_value': 'PLAYABLE PROTAGONIST',
    'protagonists.canon_badge': 'VERIFIED CANON',

    // Technical Dossier Section
    'dossier.tag': 'TECHNICAL SPECS',
    'dossier.title': 'OFFICIAL LAUNCH DOSSIER',

    // Footer
    'footer.community_title': 'COMMUNITY FAN HUB',
    'footer.community_subtitle': 'NON-OFFICIAL • NON-AFFILIATED',
    'footer.disclaimer': 'COMMERCIAL & COPYRIGHT DISCLAIMER: Leonida Index (gta6leonida.it) is an independent non-official fan editorial portal for enthusiasts. It is not affiliated, sponsored, endorsed, or associated in any way with Rockstar Games, Take-Two Interactive Software, Inc., Sony Interactive Entertainment, or Microsoft Corporation.',
    'footer.copyright_note': 'Grand Theft Auto, GTA VI, GTA 6, Vice City, Leonida, and all respective logos, trademarks, assets, and character names are the exclusive property of Take-Two Interactive Software, Inc. and Rockstar Games, Inc. Content is featured strictly for informational, educational, and commentary purposes under Fair Use and citation rights.',
    'footer.privacy_link': 'PRIVACY POLICY',
    'footer.affiliate_link': 'AFFILIATE DISCLOSURE',
    'footer.security_link': 'SECURITY POLICY (RFC 9116)',
    'footer.copy_notice': '© 2026 Leonida Index. Built with passion for the Vice City community.',

    // Language
    'lang.current': 'English',
    'lang.switch_to_en': 'Switch to English',
    'lang.switch_to_it': 'Passa all\'Italiano',
  },
};
