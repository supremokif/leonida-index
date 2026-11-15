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
    'nav.tracker': 'TRACKER 100%',
    'nav.storage': 'CALCOLATORE SSD',
    'nav.newswire': 'COMUNICATI ROCKSTAR',
    'nav.preorder_btn': 'PRE-ORDINA ORA',
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
    'hero.cta_preorder': 'PRE-ORDINA ORA',
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

    // Edizioni e Pre-Order
    'pillars.editions_tag': 'EDIZIONI UFFICIALI',
    'pillars.editions_title': 'PRE-ORDINA ORA',
    'pillars.available_platforms': 'DISPONIBILE SU PLAYSTATION® 5 E XBOX SERIES X|S',
    'pillars.ultimate_tag': 'COLLEZIONE DIGITALE ESCLUSIVA',
    'pillars.ultimate_title': 'ULTIMATE EDITION',
    'pillars.ultimate_desc': 'Una collezione esclusiva di oggetti ed elementi intrecciati in ogni aspetto della storia di Jason e Lucia. Include la Grotti Cheetah, la Electric Fang, i revolver Hawk & Little Morgan e One-Eyed Willie.',
    'pillars.learn_more': 'SCOPRI DI PIÙ ➔',
    'pillars.standard_tag': 'GIOCO BASE',
    'pillars.standard_title': 'STANDARD EDITION',
    'pillars.standard_desc': 'L\'esperienza completa di Grand Theft Auto VI attraverso le strade di Vice City e le terre selvagge dello Stato di Leonida.',
    'pillars.preorder_btn': 'PRE-ORDINA ➔',
    'pillars.vintage_tag': 'BONUS PRE-ORDINE',
    'pillars.vintage_title': 'PACCHETTO VINTAGE VICE CITY',
    'pillars.vintage_desc': 'Pre-ordina subito per ricevere vantaggi unici che riportano ai tempi in cui le luci al neon ardevano più luminose in tutta la città.',
    'pillars.vintage_sub': 'Incluso in tutti i pre-ordini digitali',
    'pillars.bonus_unlocked': 'BONUS SBLOCCATO',

    // 4 Pilastri Fondamentali
    'pillars.screenshots_tag': 'SCREENSHOT UFFICIALI',
    'pillars.screenshots_title': 'GALLERIA DI LANCIO 4K',
    'pillars.screenshots_desc': 'Ammira Leonida in ogni dettaglio con la raccolta esclusiva di nuove catture in risoluzione Ultra HD 4K.',
    'pillars.view_all': 'VEDI TUTTI',
    'pillars.people_tag': 'PERSONAGGI E LUOGHI',
    'pillars.people_title': 'SOLO A LEONIDA',
    'pillars.people_desc': 'Vice City, USA. Il lato più oscuro e corrotto del luogo più assolato d\'America.',
    'pillars.explore_more': 'ESPLORA DI PIÙ',
    'pillars.music_tag': 'COLONNA SONORA E RADIO',
    'pillars.music_title': 'RADIO DI GIOCO, COLONNA SONORA E BRANI ORIGINALI',
    'pillars.music_desc': 'Ascolta la colonna sonora e i brani ufficiali, oltre a una selezione di stazioni radio in-game.',
    'pillars.downloads_tag': 'DOWNLOAD E MEDIA',
    'pillars.downloads_title': 'MEDIA & ARTWORK IN ALTA DEFINIZIONE',
    'pillars.downloads_desc': 'Scarica e condividi video ufficiali, wallpaper e screenshot in altissima definizione.',
    'pillars.see_all': 'VEDI TUTTO',

    // Negozio e Magazzino Rockstar
    'store.tag': 'MAGAZZINO ROCKSTAR',
    'store.title': 'SHOP & MERCHANDISE',
    'store.view_all': 'SCOPRI TUTTI I PRODOTTI ➔',
    'store.merch_tag': 'ABBIGLIAMENTO E ACCESSORI',
    'store.merch_title': 'MERCHANDISE UFFICIALE',
    'store.merch_desc': 'Capi di abbigliamento premium, oggetti da collezione, spille e accessori ispirati allo stile senza tempo di Vice City.',
    'store.rockstar_official': 'Store Ufficiale Rockstar',
    'store.shop_now': 'ACQUISTA ORA ➔',
    'store.box_tag': 'EDIZIONE LIMITATA',
    'store.box_title': 'COFANETTO DA COLLEZIONE',
    'store.box_desc': 'The Vice City Collection — Un cofanetto esclusivo di cimeli e oggetti fisici curati per il lancio mondiale.',
    'store.exclusive_run': 'Tiratura Esclusiva',
    'store.explore_now': 'ESPLORA ORA ➔',

    // Sezione Notizie / Newswire
    'news.tag': 'ULTIMI AGGIORNAMENTI',
    'news.title': 'ROCKSTAR NEWSWIRE',
    'news.view_all': 'TUTTI GLI ARTICOLI NEWSWIRE ➔',
    'news.item1_title': 'Il Pre-Load di Grand Theft Auto VI è Disponibile',
    'news.item1_desc': 'Il pre-download digitale è ora attivo su PlayStation 5 e Xbox Series X|S in vista del lancio mondiale del 19 Novembre.',
    'news.item2_title': 'Esplora la Galleria Fotografica di Lancio',
    'news.item2_desc': 'Scopri i nuovi scatti 4K che mostrano la vibrante vita notturna di Vice City, le paludi di Grassrivers e le autostrade costiere.',
    'news.item3_title': 'Orari di Sblocco a Mezzanotte nel Mondo',
    'news.item3_desc': 'Dettagli ufficiali sugli orari di sblocco a scaglioni a mezzanotte locale per tutti i territori del pianeta.',
    'news.category': 'Comunicato Newswire',

    // Propaganda Newsletter
    'propaganda.title': 'RICEVI LA PROPAGANDA ROCKSTAR',
    'propaganda.desc': 'Ricevi gli annunci di gioco più recenti, aggiornamenti su eventi speciali, promozioni e molto altro da Rockstar Games.',
    'propaganda.placeholder': 'Inserisci il tuo indirizzo email',
    'propaganda.signup': 'ISCRIVITI ORA',
    'propaganda.privacy_notice': 'Iscrivendoti, accetti di ricevere comunicazioni promozionali da Rockstar Games.',

    // Classificazione PEGI
    'pegi.tag': 'RATING IN ATTESA DI CONFERMA (18+)',
    'pegi.desc': 'Violenza estrema, linguaggio forte, contenuti per soli adulti.',

    // Video & Trailer Selector
    'videos.tag': 'CONTENUTI MULTIMEDIALI ROCKSTAR',
    'videos.title': 'VIDEO E TRAILER',
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
    'protagonists.lucia_desc': 'Determinata, cinica e spietata quando necessario. Dopo aver affrontato la prigione di Leonida, è pronta a riprendersi Vice City colpo su colpo.',
    'protagonists.lucia_quote': '"L\'unico modo per uscirne è restare uniti. Facendo squadra. Ti fidi di me? — Fiducia."',
    'protagonists.jason_desc': 'Al fianco di Lucia in una spirale di rapine e pericoli crescenti attraverso la contea e le isole di Leonida, costretto a fidarsi ciecamente della sua compagna.',
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
    // Navigazione
    'nav.overview': 'OVERVIEW',
    'nav.trailers': 'TRAILERS',
    'nav.news': 'NEWS & TRIVIA',
    'nav.editions': 'EDITIONS',
    'nav.screenshots': '4K SCREENSHOTS',
    'nav.leonida': 'LEONIDA MAP',
    'nav.tracker': '100% TRACKER',
    'nav.storage': 'SSD CALCULATOR',
    'nav.newswire': 'ROCKSTAR NEWSWIRE',
    'nav.preorder_btn': 'PRE-ORDER NOW',
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
    'hero.cta_preorder': 'PRE-ORDER NOW',
    'hero.cta_trailer': 'WATCH TRAILER 1',
    'hero.plays_best_label': 'PLAYS BEST ON',
    'hero.scroll_label': 'SCROLL FOR MORE CONTENT',

    // Barra Condivisione Virale
    'share.title': 'SHARE THE COUNTDOWN',
    'share.subtitle': 'GAMER WORD OF MOUTH',
    'share.whatsapp': 'WhatsApp',
    'share.telegram': 'Telegram',
    'share.twitter': 'X (Twitter)',
    'share.copy': 'Copy Link',
    'share.copied': 'COPIED! ✓',

    // Citazione Storia Rockstar
    'pillars.story_tag': 'VICE CITY, USA',
    'pillars.story_quote': '"Jason and Lucia have always known the deck is stacked against them. But when an easy score goes wrong, they find themselves on the darkest side of the sunniest place in America, in the middle of a criminal conspiracy stretching across the state of Leonida — forced to rely on each other more than ever if they want to make it out alive."',
    'pillars.story_author': '— Rockstar Games Official Story Overview',

    // Edizioni e Pre-Order
    'pillars.editions_tag': 'OFFICIAL EDITIONS',
    'pillars.editions_title': 'PRE-ORDER NOW',
    'pillars.available_platforms': 'AVAILABLE ON PLAYSTATION® 5 AND XBOX SERIES X|S',
    'pillars.ultimate_tag': 'EXCLUSIVE DIGITAL COLLECTION',
    'pillars.ultimate_title': 'ULTIMATE EDITION',
    'pillars.ultimate_desc': 'An exclusive collection of items threaded across all aspects of Jason and Lucia’s story. Includes the Grotti Cheetah, Electric Fang, Hawk & Little Morgan Revolvers, and One-Eyed Willie.',
    'pillars.learn_more': 'LEARN MORE ➔',
    'pillars.standard_tag': 'BASE GAME',
    'pillars.standard_title': 'STANDARD EDITION',
    'pillars.standard_desc': 'The complete Grand Theft Auto VI experience across Vice City and the state of Leonida.',
    'pillars.preorder_btn': 'PRE-ORDER ➔',
    'pillars.vintage_tag': 'PRE-ORDER BONUSES',
    'pillars.vintage_title': 'VINTAGE VICE CITY PACK',
    'pillars.vintage_desc': 'Pre-order to get unique benefits that flash back to when the neon burned brightest across the city.',
    'pillars.vintage_sub': 'Included with all digital pre-orders',
    'pillars.bonus_unlocked': 'BONUS UNLOCKED',

    // 4 Pilastri Fondamentali
    'pillars.screenshots_tag': 'SCREENSHOTS',
    'pillars.screenshots_title': 'THE LAUNCH GALLERY',
    'pillars.screenshots_desc': 'Get a stunning look inside Leonida with a collection of new 4K screenshots.',
    'pillars.view_all': 'VIEW ALL',
    'pillars.people_tag': 'PEOPLE & PLACES',
    'pillars.people_title': 'ONLY IN LEONIDA',
    'pillars.people_desc': 'Vice City, USA. The darkest side of the sunniest place in America.',
    'pillars.explore_more': 'EXPLORE MORE',
    'pillars.music_tag': 'MUSIC & RADIO',
    'pillars.music_title': 'IN-GAME RADIO, SOUNDTRACK & SCORE',
    'pillars.music_desc': 'Listen to the Official Score and Soundtrack, plus select in-game radio stations.',
    'pillars.downloads_tag': 'DOWNLOADS',
    'pillars.downloads_title': 'MEDIA & ARTWORK IN ULTRA HD',
    'pillars.downloads_desc': 'Download and share official videos, screenshots, and wallpapers in ultra high-definition.',
    'pillars.see_all': 'SEE ALL',

    // Negozio e Magazzino Rockstar
    'store.tag': 'ROCKSTAR WAREHOUSE',
    'store.title': 'SHOP & MERCHANDISE',
    'store.view_all': 'VIEW ALL STORE ITEMS ➔',
    'store.merch_tag': 'APPAREL & GEAR',
    'store.merch_title': 'MERCHANDISE',
    'store.merch_desc': 'Premium apparel, collectibles, pins, and accessories inspired by Vice City.',
    'store.rockstar_official': 'Rockstar Official Store',
    'store.shop_now': 'SHOP NOW ➔',
    'store.box_tag': 'LIMITED EDITION',
    'store.box_title': 'COLLECTOR’S BOX',
    'store.box_desc': 'The Vice City Collection — An exclusive curated set of physical memorabilia for the official launch.',
    'store.exclusive_run': 'Exclusive Run',
    'store.explore_now': 'EXPLORE NOW ➔',

    // Sezione Notizie / Newswire
    'news.tag': 'FEATURED NEWS',
    'news.title': 'ROCKSTAR NEWSWIRE',
    'news.view_all': 'VIEW ALL NEWSWIRE POSTS ➔',
    'news.item1_title': 'Pre-Load Grand Theft Auto VI Now',
    'news.item1_desc': 'Digital pre-load is now live on PlayStation 5 and Xbox Series X|S ahead of the worldwide launch on November 19.',
    'news.item2_title': 'Explore the Grand Theft Auto VI Launch Gallery',
    'news.item2_desc': 'Take a look at new 4K captures showcasing Vice City\'s vibrant nightlife, the Grassrivers swamps, and coastal highways.',
    'news.item3_title': 'Grand Theft Auto VI Rolling Worldwide Midnight Schedules',
    'news.item3_desc': 'Official timing details for digital pre-orders and rolling midnight unlock schedules worldwide.',
    'news.category': 'Newswire Article',

    // Propaganda Newsletter
    'propaganda.title': 'GET ROCKSTAR PROPAGANDA',
    'propaganda.desc': 'Get the latest game announcements, updates on special events and offers, and much more from Rockstar Games.',
    'propaganda.placeholder': 'Enter your email address',
    'propaganda.signup': 'SIGN UP NOW',
    'propaganda.privacy_notice': 'By signing up, you agree to receive promotional communications from Rockstar Games.',

    // Classificazione PEGI
    'pegi.tag': 'RATING PENDING OFFICIAL CONFIRMATION (18+)',
    'pegi.desc': 'Extreme violence, strong language, mature adult content.',

    // Video & Trailer Selector
    'videos.tag': 'ROCKSTAR GAMES MEDIA',
    'videos.title': 'OFFICIAL VIDEOS',
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

    // Regioni Leonida
    'regions.tag': 'CARTOGRAPHY & REGIONS',
    'regions.title': 'ONLY IN LEONIDA',
    'regions.desc': 'Vice City, USA. From the neon boulevards of Ocean Beach to the wild swamps of Grassrivers: explore the regions of the State of Leonida.',
    'regions.details_btn': 'REGION DETAILS & PHOTOGRAPHY',

    // Protagonisti
    'protagonists.tag': 'PLAYABLE PROTAGONISTS',
    'protagonists.title': 'LUCIA & JASON',
    'protagonists.lucia_desc': 'Determined, cynical, and ruthless when necessary. Having survived Leonida Penitentiary, she is ready to take back Vice City score by score.',
    'protagonists.lucia_quote': '"The only way we\'re gonna get through this is by sticking together. Being a team. Do you trust me? — Trust."',
    'protagonists.jason_desc': 'Alongside Lucia in an escalating spiral of heists and dangers across the counties and keys of Leonida, forced to trust his partner with his life.',
    'protagonists.jason_quote': '"Trust. It\'s the only thing keeping us alive."',
    'protagonists.role_label': 'ROLE:',
    'protagonists.role_value': 'PLAYABLE PROTAGONIST',
    'protagonists.canon_badge': 'VERIFIED CANON',

    // Sezione Dossier Tecnico
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

    // Lingua
    'lang.current': 'English',
    'lang.switch_to_en': 'Switch to English',
    'lang.switch_to_it': 'Passa all\'Italiano',
  },
};
