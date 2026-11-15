# 🤖 GTA 6 Leonida - Instagram Autonomous Agent

Questo modulo contiene l'architettura completa per un **Agente Autonomo per Instagram** dedicato a `https://gta6leonida.it/`.

---

## 📌 1. Perché la registrazione iniziale dell'account va fatta manualmente?
Meta (Facebook & Instagram) applica severi controlli anti-bot:
1. **Verifica OTP obbligatoria:** Richiede un numero di cellulare o email reale per ricevere il codice di sicurezza a 6 cifre via SMS.
2. **CAPTCHA interattivo:** Rileva e blocca qualsiasi browser headless o bot di registrazione.
3. **Prevenzione Ban:** Gli account registrati automaticamente tramite script terzi vengono identificati e disattivati istantaneamente per violazione delle policy di Meta.

### ⏱️ Setup iniziale in 2 minuti (da Smartphone o Browser):
1. Vai su [Instagram.com](https://www.instagram.com) o apri l'app Instagram e crea l'account:
   - **Nome Utente consigliato:** `@gta6leonida`, `@gta6leonida_it` o `@leonida_index`
   - **Nome:** `GTA 6 Leonida Hub 🌴`
2. **Bio consigliata già pronta:**
   ```text
   🌴 Portale Fan Ufficiale dedicato a Grand Theft Auto VI nello Stato di Leonida.
   ⏳ Conto alla rovescia, novità verificate, trailer 4K & mappa.
   🔗 Scopri di più su gta6leonida.it 👇
   gta6leonida.it
   ```
3. **Passa ad Account Professionista (Gratuito):**
   - Vai su *Impostazioni e privacy* > *Tipo di account e strumenti* > *Passa a un account per professionisti* (scegli *Creator* o *Azienda*).
   - Questo passaggio sblocca l'accesso alle **Instagram Graph API** ufficiali di Meta per consentire all'agente di pubblicare e rispondere ai commenti.

---

## 🚀 2. Funzionalità dell'Agente

L'agente si trova in `scripts/instagram-agent/` ed è suddiviso in 3 motori principali:

1. **Content Generator (`content-generator.mjs`):**
   - Genera didascalie accattivanti con hook, curiosità, conto alla rovescia in tempo reale, call-to-action per visitare `gta6leonida.it` e set di hashtag virali calcolati.
   - Associa automaticamente le immagini 4K già ospitate e visibili sul nostro sito (`https://gta6leonida.it/images/...`).
2. **Meta Graph API Client (`meta-api.mjs`):**
   - Si interfaccia con gli endpoint ufficiali di Meta (`/media` e `/media_publish`).
   - Monitora i commenti sotto i post e invia risposte automatiche intelligenti.
3. **Orchestratore CLI (`agent.mjs`):**
   - Gestisce la pianificazione editoriale, la simulazione (Dry-Run) e la pubblicazione automatica.

---

## 💻 3. Comandi CLI Disponibili

Dalla radice del progetto:

### Visualizzare il piano editoriale e i post pronti:
```bash
node scripts/instagram-agent/agent.mjs plan
```

### Visualizzare l'anteprima esatta di un post:
```bash
node scripts/instagram-agent/agent.mjs preview countdown_daily
```

### Testare la risposta automatica a un commento dei fan:
```bash
node scripts/instagram-agent/agent.mjs test-reply "quando esce gta 6 e su quali console?"
```

### Pubblicare il post (Live o Simulazione):
```bash
node scripts/instagram-agent/agent.mjs publish countdown_daily
```

### Pubblicare automaticamente il prossimo post inedito in coda:
```bash
node scripts/instagram-agent/agent.mjs auto-publish
```

---

## 🔑 4. Come collegare le API di Meta per la Pubblicazione Live

Se desideri che l'agente pubblichi realmente dal vivo sul tuo profilo Instagram:

1. Vai su [Meta for Developers](https://developers.facebook.com/) e accedi con il tuo account Facebook collegato a Instagram.
2. Crea un'app selezionando tipo **Business**.
3. Aggiungi il prodotto **Instagram Graph API**.
4. Genera un token di accesso con i permessi:
   - `instagram_basic`
   - `instagram_content_publish`
   - `instagram_manage_comments`
5. Crea il file `scripts/instagram-agent/config.json` copiando da `config.example.json`:
   ```json
   {
     "instagramAccountId": "IL_TUO_INSTAGRAM_ACCOUNT_ID",
     "accessToken": "IL_TUO_TOKEN_DI_ACCESSO_META",
     "graphApiVersion": "v20.0"
   }
   ```
6. Esegui `node scripts/instagram-agent/agent.mjs publish countdown_daily`: il post andrà online sul tuo feed Instagram in pochi secondi!

---

## 🔄 5. Esecuzione Automatica Giornaliera (Cron)

Per far pubblicare l'agente ogni giorno alle ore 18:00 in modo totalmente automatico, basta impostare un cron job su Mac / Linux:

```bash
crontab -e
```
Aggiungi la riga:
```bash
0 18 * * * cd "/Users/macbookkif/sito gta 6" && /usr/local/bin/node scripts/instagram-agent/agent.mjs auto-publish >> /tmp/instagram_agent.log 2>&1
```
L'agente controllerà lo storico (`post_history.json`), prenderà il prossimo post e lo pubblicherà automaticamente!
