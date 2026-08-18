const CACHE_NAME = "sudoku-maman-v2";
const CACHED_URLS = ["./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){ return cache.addAll(CACHED_URLS); })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(key){ return key !== CACHE_NAME; }).map(function(key){ return caches.delete(key); }));
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function(event){
  event.respondWith(
    fetch(event.request).then(function(response){
      var copy = response.clone();
      caches.open(CACHE_NAME).then(function(cache){ cache.put(event.request, copy); });
      return response;
    }).catch(function(){
      return caches.match(event.request);
    })
  );
});
