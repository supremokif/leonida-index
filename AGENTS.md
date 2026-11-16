# Antigravity Multi-Agent Council Protocol (GTA VI Leonida Hub)

Questo repository adotta l'architettura **Multi-Agent Council** di Google Antigravity per eliminare allucinazioni, anacronismi, errori di codice e "AI slop" visivo.

## La Struttura dei 4 Agenti:

```
                  ┌─────────────────────────────────────────┐
                  │           CHIEF COORDINATOR             │
                  │   (Lead Orchestrator & Final Gate)      │
                  └────────────────────┬────────────────────┘
                                       │
         ┌─────────────────────────────┼─────────────────────────────┐
         ▼                             ▼                             ▼
┌─────────────────┐           ┌─────────────────┐           ┌─────────────────┐
│  FACT-CHECKER   │           │   UI-DESIGNER   │           │  CODE-ENGINEER  │
│  & RESEARCHER   │           │  (Anti-Slop)    │           │ (Build & Sec)   │
└─────────────────┘           └─────────────────┘           └─────────────────┘
```

### 1. Chief Coordinator (Lead Orchestrator)
- Riceve la richiesta dell'utente.
- Pianifica l'esecuzione e assegna gli incarichi ai 3 sub-agenti specializzati.
- Esegue la sintesi finale e controlla che nessuno dei 3 agenti abbia espresso un veto prima del rilascio.

### 2. Fact-Checker & Research Specialist (`fact-checker`)
- **Ruolo:** Verifica rigorosa di fonti primarie, date, numeri, citazioni e lore.
- **Fonti Ammesse:** Solo Rockstar Games (Newswire/Canali ufficiali), Take-Two Interactive (SEC Filings, Earnings), Sony PlayStation Blog, Microsoft Xbox Wire.
- **Potere di Veto:** Blocca categoricamente fake leak, rumor non ufficiali e anacronismi temporali (es. confondere la data odierna con finestre passate o future di pre-order).

### 3. Frontend Taste & UI/UX Designer (`ui-designer`)
- **Ruolo:** Applicazione ferrea della skill `design-taste-frontend` (Figma/x.ai quality bar).
- **Controllo Asset:** Tolleranza zero per fotografie stock di persone reali, auto reali o mock-up inventati. Solo catture in-engine autentiche e key art ufficiali.
- **Rigore Geometrico:** One section per screen, margini simmetrici, contrasto WCAG AAA, micro-interazioni sobrie (`translateY(-2px)`, `active:scale-[0.985]`).

### 4. Full-Stack Software Engineer (`code-engineer`)
- **Ruolo:** Scrittura di codice pulito in Astro, TypeScript e Tailwind CSS.
- **Sicurezza:** Aderenza alle linee guida `security-audit` (CSP rigida, zero vulnerabilità XSS o Prototype Pollution).
- **Funzionalità Reale:** Nessun finto mock. Ogni pulsante, form, filtro o calcolatore deve avere gestione dello stato e validazione reali.
- **Gate di Build:** `npm run build` deve chiudersi con 0 errori prima di qualunque commit o deploy.
