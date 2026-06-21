// Service Worker - CONTROLO TREINO KIKA (FOCA)
// Versão do cache - MUDAR este número sempre que fizeres upload de um novo index.html
const CACHE_NAME = "kika-treino-cache-v2";

// Ficheiros essenciais para a app abrir offline (a "casca" da app)
const ASSETS_TO_CACHE = [
  "./index.html",
  "./manifest.json",
  "./logo.jpg",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-512-maskable.png"
];

// Instalação: guarda os ficheiros essenciais no cache
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Ativação: limpa caches antigos (de versões anteriores)
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys
          .filter(function (key) { return key !== CACHE_NAME; })
          .map(function (key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

// Pedidos de rede: tenta ir buscar à internet primeiro (para teres dados
// atualizados do Google Sheets), e só usa o cache se não houver internet.
self.addEventListener("fetch", function (event) {
  var req = event.request;

  // Apenas pedidos GET
  if (req.method !== "GET") return;

  event.respondWith(
    fetch(req)
      .then(function (response) {
        // Se a resposta for válida, guarda uma cópia no cache para uso offline
        if (response && response.status === 200) {
          var responseClone = response.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(req, responseClone);
          });
        }
        return response;
      })
      .catch(function () {
        // Sem internet: tenta responder com a versão guardada no cache
        return caches.match(req).then(function (cached) {
          if (cached) return cached;
          // Se não houver nada no cache, devolve a página principal (fallback)
          if (req.mode === "navigate") {
            return caches.match("./index.html");
          }
        });
      })
  );
});
