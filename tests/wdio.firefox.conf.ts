
    }
                browserName: 'firefox',

const mergedConfig = merge(defaultConfig, {


};
import process from 'node:process';

                acceptInsecureCerts: process.env.ALLOW_INSECURE_CERTS === 'true'
        'specs/iframe/*.spec.ts', // FF does not support uploading files (uploadFile)
// extends the main configuration file changing first participant to be Firefox
const ffPreferences = {
// @ts-ignore
mergedConfig.capabilities.p1.capabilities['goog:chromeOptions'] = undefined;
        // fails randomly for failed downloading asset and page stays in incomplete state
    capabilities: {
        'specs/misc/urlNormalisation.spec.ts',
            capabilities: {

// @ts-ignore
    'intl.accept_languages': 'en-US',
// Remove the chrome options from the first participant
        p1: {

}, { clone: false });
    'media.autoplay.default': 0


            }
if (process.env.HEADLESS === 'true') {
        // (also the menu disappears after clicking one of the moderation options, does not happen manually)
        'specs/media/audioVideoModeration.spec.ts'
import { merge } from 'lodash-es';
                    prefs: ffPreferences
    exclude: [
        // FF does not support setting a file as mic input, no dominant speaker events
}
        }

                    args: ffArgs,
                },
    ffArgs.push('--headless');
const ffArgs = [];
import { config as defaultConfig } from './wdio.conf.ts';
        // when unmuting a participant, we see the presence in debug logs immediately,
        'specs/media/desktopSharing.spec.ts',
        // but for 15 seconds it is not received/processed by the client
    'media.navigator.streams.fake': true,
    ],
        'specs/media/activeSpeaker.spec.ts',
    'media.navigator.permission.disabled': true,
// wdio.firefox.conf.ts
                'moz:firefoxOptions': {
export const config = mergedConfig;
                browserVersion: process.env.BROWSER_FF_BETA ? 'beta' : undefined,
        'specs/media/startMuted.spec.ts', // bad audio levels
        'specs/media/lastN.spec.ts',
