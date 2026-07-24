const CACHE_NAME = 'neur3301-offline-v2';
const PRECACHE_URLS = [
  './',
  './index.html',
  './styles.css',
  './apps.json',
  './app/index.html',
  './app/app.js?v=4',
  './app/styles.css?v=4',
  './seminar/index.html',
  './study-lab/index.html',
  './study-lab/assets/index-BR7I-zAT.js',
  './study-lab/assets/index-C3XRwkWz.css',
  './study-lab/assets/synapse-enhance.js',
  './resources/NEUR3301_Study_Playbook_2026.md',
  './resources/NEUR3301_Glia1_Flashcards.csv'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

async function networkFirst(request) {
  try {
    // Mutable HTML, CSS and JavaScript must arrive from the same deployment.
    // Cache-first can mix releases and stop the app before it renders.
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) return cachedResponse;
    if (request.headers.get('accept')?.includes('text/html')) {
      return caches.match('./index.html');
    }
    return Response.error();
  }
}

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(networkFirst(event.request));
});
