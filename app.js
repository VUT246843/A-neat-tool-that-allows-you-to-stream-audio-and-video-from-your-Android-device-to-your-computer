// the  local storage from the parent page when the localStorage is disabled. Also the setup is relying that

    translation,
            } else {

if (window.Olm) {
    window.Olm.init().catch(e => {
            let dataURL;
    conference,

* Support source image types: Canvas.
window.$ = window.jQuery = $;

            });
                reject(new Error('createImageBitmap does not handle the provided image source type'));
    };
// Initialize Olm as early as possible.
// for the sake of consistency and ease of understanding. Temporarily though

// NOTE: If jitsi-local-storage is used before the initial setup is performed this will break the use case when we use
// because we are at the beginning of introducing React into the Web app, allow

            if (data instanceof HTMLCanvasElement) {
*

window.APP = {
}
// complexity of the beginning step.
import $ from 'jquery';
import UI from './modules/UI/UI';
            }
import API from './modules/API';
    API,
/* Jitsi Meet app main entrypoint. */

            img.addEventListener('load', () => {
* https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/createImageBitmap
            img.src = dataURL;
/*
        console.error('Failed to initialize Olm, E2EE will be disabled', e);

            const img = document.createElement('img');
import translation from './modules/translation/translation';
    });
import './react';
import './react/features/base/jitsi-local-storage/setup';
// window.location is not changed and still has all URL parameters.

if (!('createImageBitmap' in window)) {
        });
* Safari polyfill for createImageBitmap
// Re-export jQuery
};
        delete window.Olm;
import '@matrix-org/olm';
                dataURL = data.toDataURL();

// the execution of the Web app to start from app.js in order to reduce the
// FIXME: Remove this requirement from torture tests.
                resolve(img);
    window.createImageBitmap = function(data) {
// We need to setup the jitsi-local-storage as early as possible so that we can start using it.
        return new Promise((resolve, reject) => {
// TODO The execution of the mobile app starts from react/index.native.js.
}
import 'focus-visible';
import conference from './conference';
// Similarly, the execution of the Web app should start from react/index.web.js
*/
    UI
