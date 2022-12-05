let cacheData = "apppV1";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((ceche) => {
      ceche.addAll([
        "/index.html",
        "/manifest.json",
        "/favicon.ico",
        "/style.min.css",
        "/math.min.js",
        "/script.min.js",
        "/",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      if (resp) {
        return resp;
      }
    })
  );
});
