import https from 'https';

const KEY = '5c0adf94b6370e022bf3e132d4056c1f';
const HOST = 'gta6leonida.it';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const urls = [
  `https://${HOST}/`,
  `https://${HOST}/tracker/`,
  `https://${HOST}/storage-calculator/`,
  `https://${HOST}/legal/`,
  `https://${HOST}/trailers/trailer-1/`,
  `https://${HOST}/trailers/trailer-2/`,
  `https://${HOST}/trailers/extended-look/`,
  `https://${HOST}/trailers/launch-trailer/`,
  `https://${HOST}/trailers/launch-gallery/`,
  `https://${HOST}/trailers/the-festival/`,
  `https://${HOST}/trailers/preload-ps5-showcase/`,
  `https://${HOST}/leonida/vice-city/`,
  `https://${HOST}/leonida/leonida-keys/`,
  `https://${HOST}/leonida/grassrivers/`,
  `https://${HOST}/leonida/port-gellhorn/`,
  `https://${HOST}/leonida/ambrosia/`,
  `https://${HOST}/leonida/mount-kalaga/`,
];

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urls,
});

const endpoints = [
  'api.indexnow.org',
  'www.bing.com',
  'yandex.com',
];

for (const endpoint of endpoints) {
  const req = https.request(
    {
      hostname: endpoint,
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload),
      },
    },
    (res) => {
      console.log(`[IndexNow - ${HOST}] ${endpoint} -> HTTP ${res.statusCode} (${res.statusMessage})`);
    }
  );

  req.on('error', (e) => {
    console.error(`[IndexNow - ${HOST}] ${endpoint} ERROR:`, e.message);
  });

  req.write(payload);
  req.end();
}
