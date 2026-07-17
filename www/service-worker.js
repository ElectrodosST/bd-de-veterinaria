// service-worker.js — Permite que la app funcione sin internet
// una vez que se abrió por primera vez (cachea los archivos).

const CACHE_NAME = 'cuatro-patas-v1';

const ARCHIVOS_A_GUARDAR = [
  './index.html',
  './manifest.json',
  './css/style.css',
  './css/print.css',
  './js/db.js',
  './pages/pacientes.html',
  './pages/nuevo-paciente.html',
  './pages/detalle-paciente.html',
  './pages/consultas.html',
  './icons/icon-72.png',
  './icons/icon-96.png',
  './icons/icon-128.png',
  './icons/icon-144.png',
  './icons/icon-152.png',
  './icons/icon-192.png',
  './icons/icon-384.png',
  './icons/icon-512.png',
];

// Instalación: guarda todos los archivos en caché
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ARCHIVOS_A_GUARDAR))
  );
  self.skipWaiting();
});

// Activación: limpia cachés viejos de versiones anteriores
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((nombres) =>
      Promise.all(
        nombres.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))
      )
    )
  );
  self.clients.claim();
});

// Cada vez que la app pide un archivo: primero intenta de internet,
// si no hay internet, lo entrega desde el caché guardado.
self.addEventListener('fetch', (event) => {
  // No cachear llamadas a servicios externos (como los íconos de tabler)
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    fetch(event.request)
      .then((respuesta) => {
        const copia = respuesta.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copia));
        return respuesta;
      })
      .catch(() => caches.match(event.request))
  );
});
