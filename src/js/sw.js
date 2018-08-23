var namedCache = 'site-cache-v1';
var urlsToCache = [
  '/',
  '/src/css/styles.css',
  '/src/js/app.js',
  '/src/img/About.png',
  '/src/img/Classic Arcade Game - blur-sm.jpg',
  '/src/img/Classic Arcade Game.png',
  '/src/img/Memory Game - blur-sm.jpg',
  '/src/img/Memory Game.png',
  '/src/img/myreads - blur-sm.jpg',
  '/src/img/myreads.png',
  '/src/img/Neighborhood Restaurant - blur-sm.jpg',
  '/src/img/Neighborhood Restaurant.png',
  '/src/img/ProfilePic.jpg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(namedCache)
          .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
          })
          .catch(function(error) {
            console.log(error);
            return;
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
          .catch(function(error) {console.log(error)})
  );
});

self.addEventListener('activate', function(event) {

  var cacheWhiteList = ['site-cache-v1'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if(cacheWhiteList.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    }).catch(function(error) {console.log(error)})
  );
});