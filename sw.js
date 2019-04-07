var cacheName = 'hello-pwa';
var filesToCache = [
  '/Test-PWA',
  '/Test-PWA/index.html',
  '/Test-PWA/css/style.css',
  '/Test-PWA/js/main.js'
];

/* Start the service worker and cache all of the app's content */
console.log('Service working started');
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
