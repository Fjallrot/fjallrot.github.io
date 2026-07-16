const CACHE_NAME = 'fjallrot-v29';


const ASSETS_TO_CACHE = [

    // Core pages
    '/',
    '/index.html',
    '/standard.html',
    '/privacy.html',
    '/terms.html',
    '/security.html',
    '/legal/disclaimer.html',
    '/404.html',


    // PWA
    '/manifest.webmanifest',


    // Security
    '/.well-known/security.txt',


    // Styles
    '/assets/css/style.css',


    // Scripts
    '/assets/js/main.js',
    '/assets/js/standard.js',
    '/assets/js/translations.js',


    // Images
    '/assets/images/logo6-1.png',


    // Danish standard docs
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


    // Faroese docs
    '/standard/fo/00-constitution.md',
    '/standard/fo/08-products.md',


    // English docs
    '/standard/en/00-constitution.md',
    '/standard/en/08-products.md'

];





/*
 INSTALL
*/

self.addEventListener(
    'install',
    event => {

        event.waitUntil(

            caches.open(CACHE_NAME)

            .then(cache => {

                console.log(
                    '[Fjallrót SW] Installing cache'
                );

                return cache.addAll(
                    ASSETS_TO_CACHE
                );

            })

            .then(() => {

                return self.skipWaiting();

            })

        );

    }

);






/*
 ACTIVATE
*/

self.addEventListener(
    'activate',
    event => {


        event.waitUntil(

            caches.keys()

            .then(cacheNames => {


                return Promise.all(

                    cacheNames.map(cache => {


                        if (
                            cache !== CACHE_NAME
                        ) {


                            console.log(
                                '[Fjallrót SW] Removing old cache:',
                                cache
                            );


                            return caches.delete(
                                cache
                            );


                        }


                    })

                );


            })


            .then(() => {

                return self.clients.claim();

            })

        );


    }

);







/*
 FETCH
*/


self.addEventListener(
    'fetch',
    event => {


        if (
            event.request.method !== 'GET'
        ) {

            return;

        }



        const requestURL =
            new URL(
                event.request.url
            );




        /*
           HTML
           Network First
        */


        if (
            event.request.headers
            .get('accept')
            ?.includes('text/html')
        ) {


            event.respondWith(


                fetch(event.request)

                .then(response => {


                    const clone =
                        response.clone();


                    caches.open(
                            CACHE_NAME
                        )
                        .then(cache => {

                            cache.put(
                                event.request,
                                clone
                            );

                        });


                    return response;


                })


                .catch(() => {


                    return caches.match(
                        event.request
                    )

                    .then(cached => {


                        return cached || caches.match('/404.html');


                    });


                })


            );


            return;

        }







        /* Markdown: network first, so edits appear immediately. */
        if (requestURL.pathname.endsWith('.md')) {
            event.respondWith(
                fetch(event.request)
                    .then(response => {
                        if (response.ok) {
                            const clone = response.clone();
                            caches.open(CACHE_NAME)
                                .then(cache => cache.put(event.request, clone));
                        }
                        return response;
                    })
                    .catch(() => caches.match(event.request))
            );
            return;
        }

        /* Static files: cache first. */


        event.respondWith(


            caches.match(
                event.request
            )

            .then(cachedResponse => {


                if (
                    cachedResponse
                ) {


                    return cachedResponse;


                }



                return fetch(
                    event.request
                )


                .then(networkResponse => {


                    if (

                        !networkResponse ||

                        networkResponse.status !== 200 ||

                        networkResponse.type !== 'basic'

                    ) {


                        return networkResponse;


                    }



                    const responseClone =
                        networkResponse.clone();



                    caches.open(
                        CACHE_NAME
                    )

                    .then(cache => {


                        cache.put(
                            event.request,
                            responseClone
                        );


                    });



                    return networkResponse;


                });


            })


        );


    }

);
