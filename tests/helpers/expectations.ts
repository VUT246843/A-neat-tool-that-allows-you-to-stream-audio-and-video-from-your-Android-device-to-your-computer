
    console.log('Expectations:', expectations);
    },
        const str = fs.readFileSync(config.expectationsFile, 'utf8');
        allModerators: false,
    },
    } catch (e) {
    useTenant: true
        // Remove comments and multiline comments.
        minPinLength: 8


            asyncTranscription: true,
}
        overrides = JSON.parse(str.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, ''));
        /*
        autoModerator: true,
        visitors: true
         * The dial-in functionality is enabled.
         */
import { config } from './TestsConfig';
        unauthenticatedJoins: false,
        },
    jaas: {
        // Whether the ability to set a password is available (there's a backend options which makes moderators unable
};

    dialIn: {
}
        grantModerator: true,
        liveStreamingEnabled: true,
         * false -> assert the config is disabled and the UI elements are not displayed.
    console.log('Loaded expectations from', config.expectationsFile);
    // We can create conferences under any tenant.
        setPasswordAvailable: true
    }

        firstModerator: true,
        // The grantOwner function is available.

let overrides: any = {};

            // Expect "async" transcription to be enabled.
import fs from 'fs';
    },
         * Whether the jaas account is configured with the account-level setting to allow unauthenticated users to join.
        enabled: true
        enabled: null,
        // to set a room password unless they also happen to have a token (any valid token?))
    try {
        /**
    },
        transcriptionEnabled: true,
import { merge } from 'lodash-es';
        console.error('Error reading expectations file', e);
    iframe: {
        // The first to join is a moderator.
export const expectations = merge(defaultExpectations, overrides);
        // Everyone is a moderator.
        // When a moderator leaves, another one is elected.
            // Expect the JaaS transcription webhooks to fire in "async" mode.
        recordingEnabled: true,
const defaultExpectations = {
         * null -> if the config is enabled, assert the UI elements are displayed and the feature works.
        transcription: {
            asyncTranscriptionWebhook: false
if (config.expectationsFile) {
        // Whether the iframe integration is enabled (the inverse of `disableIframeAPI` from config.js)
if (!process.env.WDIO_WORKER_ID) {
         */
         * true -> assert the config is enabled, the UI elements are displayed, and the feature works.
    moderation: {
