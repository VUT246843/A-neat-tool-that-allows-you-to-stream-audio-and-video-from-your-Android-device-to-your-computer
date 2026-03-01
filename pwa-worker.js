    // chance to call event.respondWith(). If no fetch handlers call

                if (preloadResponse) {
        })());
    );
                const cachedResponse = await cache.match(OFFLINE_URL);
    // for an HTML page.

    // We only want to call event.respondWith() if this is a navigation request
*/
                // If fetch() returns a valid HTTP response with a response code in
 limitations under the License.

 You may obtain a copy of the License at
        event.respondWith((async () => {
    })()
                }
});
            }
        const cache = await caches.open(CACHE_NAME);
Copyright 2015, 2019, 2020 Google LLC. All Rights Reserved.
 you may not use this file except in compliance with the License.

    event.waitUntil(
    (async () => {
                return networkResponse;
 Unless required by applicable law or agreed to in writing, software

                const preloadResponse = await event.preloadResponse;
self.addEventListener('fetch', event => {


    // Tell the active service worker to take control of the page immediately.
 Licensed under the Apache License, Version 2.0 (the "License");
const CACHE_NAME = 'offline';
    // event.respondWith(), the request will be handled by the browser as if there

    if (event.request.mode === 'navigate') {
                // the 4xx or 5xx range, the catch() will NOT be called.
    })()
    self.clients.claim();
self.addEventListener('activate', event => {
});
                // First, try to use the navigation preload response if it's supported.
    event.waitUntil(

        // Enable navigation preload if it's supported.
        // See https://developers.google.com/web/updates/2017/02/navigation-preload
                console.log('Fetch failed; returning offline page instead.', error);
 http://www.apache.org/licenses/LICENSE-2.0
                // Always try the network first.
                const cache = await caches.open(CACHE_NAME);
        await cache.add(new Request(OFFLINE_URL, { cache: 'reload' }));
        // response isn't fulfilled from the HTTP cache; i.e., it will be from
const OFFLINE_URL = 'static/offline.html';
            try {
                // due to a network error.
});
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

self.addEventListener('install', event => {
        // Setting {cache: 'reload'} in the new request will ensure that the
 See the License for the specific language governing permissions and
    self.skipWaiting();
                return cachedResponse;
    // If our if() condition is false, then this fetch handler won't intercept the
    );
    (async () => {
                // catch is only triggered if an exception is thrown, which is likely
            await self.registration.navigationPreload.enable();
 distributed under the License is distributed on an "AS IS" BASIS,
// Customize this with a different URL if needed.
    // Force the waiting service worker to become the active service worker.
    // request. If there are any other fetch handlers registered, they will get a
/*

                const networkResponse = await fetch(event.request);

                    return preloadResponse;
        }


        // the network.
            } catch (error) {
    // were no service worker involvement.
    }
        if ('navigationPreload' in self.registration) {

