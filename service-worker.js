const CACHE_NAME = 'studiopolis-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './catalogo.html',
  './favoritos.html',
  './historial.html',
  './playlists.html',
  './estadisticas.html',
  './login.html',
  './style.css',
  './app.js',
  './js/repositorios/cancionrepository.js',
  './js/repositorios/localstoragecancionrepository.js',
  './js/servicios/cancionservicio.js',
  './js/controladores/cancioncontroller.js',
  'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).catch(() => {
        // Retorno de respaldo si falla la red
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});