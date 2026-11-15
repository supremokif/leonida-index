/**
 * Client Ufficiale per Instagram Graph API (Meta Developers)
 * Utilizza gli endpoint REST standard di Meta:
 * - Content Publishing API (Creazione e pubblicazione container media)
 * - Comments API (Lettura commenti e risposte automatiche)
 */

export class InstagramMetaClient {
  constructor(config = {}) {
    this.accessToken = config.accessToken || process.env.META_ACCESS_TOKEN || '';
    this.instagramAccountId = config.instagramAccountId || process.env.INSTAGRAM_ACCOUNT_ID || '';
    this.graphApiVersion = config.graphApiVersion || 'v20.0';
    this.baseUrl = `https://graph.facebook.com/${this.graphApiVersion}`;
  }

  isConfigured() {
    return Boolean(this.accessToken && this.instagramAccountId);
  }

  /**
   * 1. Crea il container media per una foto
   */
  async createPhotoContainer(imageUrl, caption) {
    if (!this.isConfigured()) {
      throw new Error('Configurazione Meta API mancante: imposta META_ACCESS_TOKEN e INSTAGRAM_ACCOUNT_ID.');
    }

    const url = `${this.baseUrl}/${this.instagramAccountId}/media`;
    const params = new URLSearchParams({
      image_url: imageUrl,
      caption: caption,
      access_token: this.accessToken
    });

    const response = await fetch(`${url}?${params.toString()}`, {
      method: 'POST'
    });

    const data = await response.json();
    if (!response.ok || data.error) {
      throw new Error(`Errore creazione container media: ${JSON.stringify(data.error || data)}`);
    }

    return data.id; // creation_id
  }

  /**
   * 2. Pubblica il container precedentemente creato
   */
  async publishContainer(creationId) {
    if (!this.isConfigured()) {
      throw new Error('Configurazione Meta API mancante.');
    }

    const url = `${this.baseUrl}/${this.instagramAccountId}/media_publish`;
    const params = new URLSearchParams({
      creation_id: creationId,
      access_token: this.accessToken
    });

    const response = await fetch(`${url}?${params.toString()}`, {
      method: 'POST'
    });

    const data = await response.json();
    if (!response.ok || data.error) {
      throw new Error(`Errore pubblicazione container: ${JSON.stringify(data.error || data)}`);
    }

    return data.id; // instagram_post_id
  }

  /**
   * Workflow completo di pubblicazione foto
   */
  async publishPhoto(imageUrl, caption) {
    console.log(`[Meta API] 1. Creazione container per: ${imageUrl}...`);
    const creationId = await this.createPhotoContainer(imageUrl, caption);
    console.log(`[Meta API] Container creato con successo (ID: ${creationId}). Attesa propagazione...`);

    // Attendi 3 secondi per consentire a Meta di processare l'immagine remota
    await new Promise((res) => setTimeout(res, 3000));

    console.log(`[Meta API] 2. Pubblicazione effettiva del post...`);
    const postId = await this.publishContainer(creationId);
    console.log(`[Meta API] ✓ Post pubblicato su Instagram! Post ID: ${postId}`);
    return postId;
  }

  /**
   * Recupera i commenti recenti degli ultimi post
   */
  async getRecentComments(limitPosts = 3) {
    if (!this.isConfigured()) {
      throw new Error('Configurazione Meta API mancante.');
    }

    const url = `${this.baseUrl}/${this.instagramAccountId}/media`;
    const params = new URLSearchParams({
      fields: 'id,caption,timestamp,comments{id,text,username,timestamp,like_count}',
      limit: String(limitPosts),
      access_token: this.accessToken
    });

    const response = await fetch(`${url}?${params.toString()}`);
    const data = await response.json();

    if (!response.ok || data.error) {
      throw new Error(`Errore recupero commenti: ${JSON.stringify(data.error || data)}`);
    }

    return data.data || [];
  }

  /**
   * Risponde a un commento specifico
   */
  async replyToComment(commentId, replyMessage) {
    if (!this.isConfigured()) {
      throw new Error('Configurazione Meta API mancante.');
    }

    const url = `${this.baseUrl}/${commentId}/replies`;
    const params = new URLSearchParams({
      message: replyMessage,
      access_token: this.accessToken
    });

    const response = await fetch(`${url}?${params.toString()}`, {
      method: 'POST'
    });

    const data = await response.json();
    if (!response.ok || data.error) {
      throw new Error(`Errore invio risposta: ${JSON.stringify(data.error || data)}`);
    }

    return data.id;
  }
}
