var CACHE_NAME = 'site-cache-v1';
var urlsToCache = [
  '/',
  'src/css/styles.css',
  'src/js/app.js',
  'src/img/About.png',
  'src/img/Classic Arcade Game - blur-sm.jpg',
  'src/img/Classic Arcade Game.png',
  'src/img/Memory Game - blur-sm.jpg',
  'src/img/Memory Game.png',
  'src/img/myreads - blur-sm.jpg',
  'src/img/myreads.png',
  'src/img/Neighborhood Restaurant - blur-sm.jpg',
  'src/img/Neighborhood Restaurant.png',
  'src/img/ProfilePic.jpg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
          .then(function(cache) {
            console.log('Opened cache');
            return cace.addAll(urlsToCache);
          })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
          .then(function(response) {
            //Cache hit - return response
            if (response) {
              return response;
            }
            return fetch(event.request);
          })
  );
});

self.addEventListener('activate', function(event) {

  var cacheWhiteList = ['site-cache-v1'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promis.all(
        cacheNames.map(function(cacheName) {
          if(cacheWhiteList.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});