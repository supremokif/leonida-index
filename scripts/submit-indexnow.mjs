import https from 'https';

const KEY = '5c0adf94b6370e022bf3e132d4056c1f';
const HOST = 'supremokif.github.io';
const BASE_PATH = '/leonida-index';
const KEY_LOCATION = `https://${HOST}${BASE_PATH}/${KEY}.txt`;

const urls = [
  `https://${HOST}${BASE_PATH}/`,
  `https://${HOST}${BASE_PATH}/tracker/`,
  `https://${HOST}${BASE_PATH}/storage-calculator/`,
  `https://${HOST}${BASE_PATH}/legal/`,
  `https://${HOST}${BASE_PATH}/trailers/trailer-1/`,
  `https://${HOST}${BASE_PATH}/trailers/trailer-2/`,
  `https://${HOST}${BASE_PATH}/trailers/extended-look/`,
  `https://${HOST}${BASE_PATH}/trailers/launch-trailer/`,
  `https://${HOST}${BASE_PATH}/trailers/launch-gallery/`,
  `https://${HOST}${BASE_PATH}/trailers/the-festival/`,
  `https://${HOST}${BASE_PATH}/trailers/preload-ps5-showcase/`,
  `https://${HOST}${BASE_PATH}/leonida/vice-city/`,
  `https://${HOST}${BASE_PATH}/leonida/leonida-keys/`,
  `https://${HOST}${BASE_PATH}/leonida/grassrivers/`,
  `https://${HOST}${BASE_PATH}/leonida/port-gellhorn/`,
  `https://${HOST}${BASE_PATH}/leonida/ambrosia/`,
  `https://${HOST}${BASE_PATH}/leonida/mount-kalaga/`,
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
      console.log(`[${endpoint}] Response status: ${res.statusCode} ${res.statusMessage}`);
      res.on('data', () => {});
    }
  );

  req.on('error', (e) => {
    console.error(`[${endpoint}] Error:`, e.message);
  });

  req.write(payload);
  req.end();
}
