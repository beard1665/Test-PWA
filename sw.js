var cacheName = 'hello-pwa';
var filesToCache = [
  '/Test-PWA',
  '/Test-PWA/index.html',
  '/Test-PWA/css/style.css',
  '/Test-PWA/js/main.js'
];

/* Start the service worker and cache all of the app's content */
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

if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('Test-PWA/sw.js')
           .then(function() { console.log("Service Worker Registered"); });
}
