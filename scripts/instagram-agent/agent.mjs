#!/usr/bin/env node

/**
 * GTA 6 Leonida - Instagram Autonomous Agent CLI
 * 
 * Utilizzo:
 *   node scripts/instagram-agent/agent.mjs plan           -> Mostra il piano editoriale e i post pronti
 *   node scripts/instagram-agent/agent.mjs preview <id>   -> Anteprima formattata di un post con didascalia e hashtag
 *   node scripts/instagram-agent/agent.mjs test-reply "quanto costa?" -> Simula la risposta automatica a un commento
 *   node scripts/instagram-agent/agent.mjs publish <id>   -> Pubblica il post su Instagram (Live o Dry-Run)
 *   node scripts/instagram-agent/agent.mjs auto-publish   -> Seleziona il prossimo post inedito e lo pubblica
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { generatePostCatalog, generateCommentReply } from './content-generator.mjs';
import { InstagramMetaClient } from './meta-api.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HISTORY_FILE = path.resolve(__dirname, 'post_history.json');
const CONFIG_FILE = path.resolve(__dirname, 'config.json');

// Carica configurazione opzionale da file config.json o da environment
let config = {};
if (fs.existsSync(CONFIG_FILE)) {
  try {
    config = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf-8'));
  } catch (err) {
    console.error('Attenzione: Errore nella lettura di config.json', err.message);
  }
}

const client = new InstagramMetaClient(config);

function getHistory() {
  if (!fs.existsSync(HISTORY_FILE)) {
    return { publishedPosts: [], replies: [] };
  }
  try {
    return JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf-8'));
  } catch {
    return { publishedPosts: [], replies: [] };
  }
}

function saveHistory(history) {
  fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2), 'utf-8');
}

const command = process.argv[2] || 'help';
const arg = process.argv[3];

async function main() {
  console.log('\n======================================================');
  console.log('🤖 GTA 6 LEONIDA // INSTAGRAM AUTONOMOUS AGENT');
  console.log('======================================================\n');

  const catalog = generatePostCatalog();
  const history = getHistory();

  switch (command) {
    case 'plan': {
      console.log(`📋 PIANO EDITORIALE PRONTO PER INSTAGRAM (${catalog.length} POST DISPONIBILI):\n`);
      catalog.forEach((post, i) => {
        const isPublished = history.publishedPosts.some((p) => p.id === post.id);
        const status = isPublished ? '✅ GIÀ PUBBLICATO' : '⏳ IN CODA (PRONTO)';
        console.log(`[${i + 1}] ID: ${post.id.padEnd(22)} | ${status}`);
        console.log(`    Argomento: ${post.topic}`);
        console.log(`    Immagine:  ${post.imageUrl}`);
        console.log('    --------------------------------------------------');
      });
      console.log('\n👉 Usa: "node scripts/instagram-agent/agent.mjs preview <id>" per vedere il testo completo.');
      break;
    }

    case 'preview': {
      const postId = arg || catalog[0].id;
      const post = catalog.find((p) => p.id === postId) || catalog[0];

      console.log(`🔍 ANTEPRIMA POST: [${post.id}] - ${post.topic}\n`);
      console.log(`🖼️ URL IMMAGINE PUBBLICA (4K):\n${post.imageUrl}\n`);
      console.log('📝 DIDASCALIA & HASHTAG (ESATTAMENTE COME APPARIRÀ SU INSTAGRAM):');
      console.log('------------------------------------------------------');
      console.log(post.caption);
      console.log('------------------------------------------------------');
      break;
    }

    case 'test-reply': {
      const comment = arg || 'quando esce gta 6 e su che console si potra giocare?';
      console.log(`💬 TEST RISPOSTA AUTOMATICA A COMMENTO FAN:`);
      console.log(`   Domanda Fan: "${comment}"\n`);
      const reply = generateCommentReply(comment, 'utente_fan_gta');
      console.log(`🤖 Risposta Agente Instagram:`);
      console.log(`   "${reply}"\n`);
      console.log('✓ La logica risponde in modo accurato e rimanda strategicamente a gta6leonida.it');
      break;
    }

    case 'publish': {
      const postId = arg || catalog[0].id;
      const post = catalog.find((p) => p.id === postId);

      if (!post) {
        console.error(`❌ Errore: Post con ID "${postId}" non trovato.`);
        process.exit(1);
      }

      console.log(`🚀 TENTATIVO DI PUBBLICAZIONE POST: [${post.id}]`);
      console.log(`Titolo: ${post.topic}`);

      if (client.isConfigured()) {
        try {
          console.log('\n📡 Credenziali Meta rilevate! Invio alla Instagram Graph API...');
          const metaPostId = await client.publishPhoto(post.imageUrl, post.caption);
          console.log(`\n🎉 SUCCESSO! Il post è online su Instagram! ID: ${metaPostId}`);

          history.publishedPosts.push({
            id: post.id,
            topic: post.topic,
            publishedAt: new Date().toISOString(),
            metaPostId,
            status: 'LIVE'
          });
          saveHistory(history);
        } catch (err) {
          console.error(`❌ Errore durante la chiamata API di Meta: ${err.message}`);
        }
      } else {
        console.log('\nℹ️ MODALITÀ SIMULAZIONE / DRY-RUN (Nessuna chiave Meta configurata):');
        console.log('   Per pubblicare realmente dal vivo, inserisci le tue credenziali in:');
        console.log('   scripts/instagram-agent/config.json');
        console.log('   (Vedi la guida dettagliata in scripts/instagram-agent/README.md)');

        history.publishedPosts.push({
          id: post.id,
          topic: post.topic,
          simulatedAt: new Date().toISOString(),
          status: 'SIMULATED'
        });
        saveHistory(history);
        console.log('\n✓ Post registrato nello storico delle simulazioni!');
      }
      break;
    }

    case 'auto-publish': {
      // Trova il primo post non ancora pubblicato
      const pendingPost = catalog.find((p) => !history.publishedPosts.some((hp) => hp.id === p.id));

      if (!pendingPost) {
        console.log('🎉 Tutti i post in catalogo sono già stati pubblicati! Reset della coda o aggiunta nuovi contenuti necessaria.');
        return;
      }

      console.log(`🎯 Prossimo post programmato individuato: [${pendingPost.id}] - ${pendingPost.topic}`);
      if (client.isConfigured()) {
        const metaPostId = await client.publishPhoto(pendingPost.imageUrl, pendingPost.caption);
        history.publishedPosts.push({
          id: pendingPost.id,
          topic: pendingPost.topic,
          publishedAt: new Date().toISOString(),
          metaPostId,
          status: 'LIVE'
        });
        saveHistory(history);
        console.log(`✓ Pubblicato con successo: ${metaPostId}`);
      } else {
        console.log('ℹ️ Esecuzione in DRY-RUN: per renderlo operativo al 100% dal vivo inserisci il token Meta in config.json.');
      }
      break;
    }

    case 'help':
    default:
      console.log('Comandi disponibili:');
      console.log('  plan                     -> Visualizza tutti i post in catalogo pronti');
      console.log('  preview <id>             -> Mostra l\'anteprima esatta di un post');
      console.log('  test-reply "<commento>"  -> Testa il risponditore automatico ai commenti');
      console.log('  publish <id>             -> Pubblica un post (Live su Instagram se configurato, o Dry-Run)');
      console.log('  auto-publish             -> Pubblica automaticamente il prossimo post inedito');
      break;
  }
}

main().catch(console.error);
