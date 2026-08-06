const CACHE_NAME = 'fjallrot-v30';

const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/standard.html',
    '/privacy.html',
    '/terms.html',
    '/security.html',
    '/legal/disclaimer.html',
    '/404.html',
    '/manifest.webmanifest',
    '/.well-known/security.txt',
    '/assets/css/style.css',
    '/assets/js/main.js',
    '/assets/js/standard.js',
    '/assets/js/translations.js',
    '/assets/images/logo6-1.svg',
    '/standard/00-constitution.md',
    '/standard/01-philosophy.md',
    '/standard/02-brand.md',
    '/standard/03-security.md',
    '/standard/04-web.md',
    '/standard/05-git.md',
    '/standard/06-infrastructure.md',
    '/standard/07-release.md',
    '/standard/08-products.md',
    '/standard/09-ethics.md',
    '/standard/fo/00-constitution.md',
    '/standard/fo/08-products.md',
    '/standard/en/00-constitution.md',
    '/standard/en/08-products.md'
];

const CACHEABLE_PATHS = new Set(ASSETS_TO_CACHE);
const NAVIGATION_PATHS = new Set(
    ASSETS_TO_CACHE.filter(path => path === '/' || path.endsWith('.html'))
);

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS_TO_CACHE))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(names => Promise.all(
                names
                    .filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);

    // Never intercept third-party traffic or unexpected same-origin endpoints.
    if (url.origin !== self.location.origin || !CACHEABLE_PATHS.has(url.pathname)) {
        return;
    }

    if (NAVIGATION_PATHS.has(url.pathname)) {
        event.respondWith(networkFirst(event.request, url.pathname, '/404.html'));
        return;
    }

    if (url.pathname.endsWith('.md')) {
        event.respondWith(networkFirst(event.request, url.pathname));
        return;
    }

    event.respondWith(cacheFirst(event.request, url.pathname));
});

async function networkFirst(request, cacheKey, fallbackKey) {
    try {
        const response = await fetch(request);

        if (response.ok && response.type === 'basic') {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(cacheKey, response.clone());
        }

        return response;
    } catch {
        const cached = await caches.match(cacheKey);
        if (cached) return cached;
        if (fallbackKey) return caches.match(fallbackKey);
        return Response.error();
    }
}

async function cacheFirst(request, cacheKey) {
    const cached = await caches.match(cacheKey);
    if (cached) return cached;

    const response = await fetch(request);

    if (response.ok && response.type === 'basic') {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(cacheKey, response.clone());
    }

    return response;
}
