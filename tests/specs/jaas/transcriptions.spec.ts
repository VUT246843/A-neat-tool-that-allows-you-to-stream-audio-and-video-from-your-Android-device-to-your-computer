        }
    }

    expect(p1Event.data.participant.id).toBe(p1Id);
            await p1.getIframeAPI().addEventListener('transcribingStatusChanged');
    requireWebhookProxy: true,
            p2 = await joinJaasMuc({
                    await p.switchToMainFrame();
                expect(roomMetadata.asyncTranscription).toBeFalsy();


            await clearTranscriptionStatusChange();
            const room = ctx.roomName;
    const p1Transcript = p1Event.data.stable || p1Event.data.final;

            await p1.getIframeAPI().executeCommand('toggleSubtitles');
        expect(event.eventType).toBe('TRANSCRIPTION_CHUNK_RECEIVED');
                    startWithAudioMuted: true

        timeoutMsg: 'transcriptionChunkReceived event not received on p1 side'
        expect(event.data.messageID).toBe(p1Event.data.messageID);
    usesBrowsers: [ 'p1', 'p2' ]
    const p1Promise = p1.driver.waitUntil(() => p1.getIframeAPI()



                token: t({ room }),
            await p1.getIframeAPI().executeCommand('toggleSubtitles');
            await waitForTranscriptionStatusChange(false);
            });
            .getEventResult('transcriptionChunkReceived'), {
                iFrameApi: true
    describe(`Transcription (async=${asyncTranscriptions})`, () => {

            await p2.getIframeAPI().addEventListener('transcribingStatusChanged');
        });
        it('start/stop transcriptions via recording', async () => {
                iFrameApi: true
                name: 'p1',
for (const asyncTranscriptions of asyncTranscriptionValues) {
            await p1.getIframeAPI().clearEventResults('transcribingStatusChanged');
            p1 = await joinJaasMuc({
                language: string;
                name: 'p2',
                    await p.waitForParticipants(
            });
                    name: string;
         *  for the "on" field.
        });
            }
            }

            await checkReceivingChunks(p1, p2, webhooksProxy, asyncTranscriptions);
            await p1.getIframeAPI().executeCommand('startRecording', { transcription: true });
                        timeoutMsg: `transcribingStatusChanged event not received on ${p.name}`
        expect(event.data.participant.id).toBe(p1Id);

                    {
        }

            await p2.getIframeAPI().clearEventResults('transcriptionChunkReceived');
                } = await webhooksProxy.waitForEvent('TRANSCRIPTION_UPLOADED');
        async function clearTranscriptionStatusChange() {
            data: {
                if (event.on !== expectedOn) {
import { setTestProperties } from '../../helpers/TestProperties';
                    throw new Error(`Expected transcribing to be ${expectedOn} for ${p.name}, got ${event.on}`);
            await waitForTranscriptionStatusChange(true);
    }
            await p1.getIframeAPI().clearEventResults('transcriptionChunkReceived');

                };

            await waitForTranscriptionStatusChange(true);
});
            expect(await p1.getIframeAPI().getEventResult('isModerator')).toBe(true);
import { expectations } from '../../helpers/expectations';
            if (!asyncTranscriptions || expectations.jaas.transcription.asyncTranscriptionWebhook) {

                    data: {
                if (!expectedOn && !asyncTranscriptions) {

            webhooksProxy = ctx.webhooksProxy;

                participant: {
}
            await p1.getIframeAPI().executeCommand('setSubtitles', true, true);
            expect(transcriptionEnabled).toBe(expectations.jaas.transcriptionEnabled);

            await p1.getIframeAPI().executeCommand('setSubtitles', false);
            // we need to clear results or the last one will be used, from the previous time subtitles were on

                        preAuthenticatedLink: string;
                        1,
        if (!asyncTranscription) {
/**
         *  Note that addEventListener for 'transcriptionChunkReceived' should have been called prior to this function.
        expect(p1Event.data.participant.name).toBe(p1.name);
            .getEventResult('transcriptionChunkReceived'), {
        }
            await p2.getIframeAPI().executeCommand('hangup');
    const p2Promise = p2.driver.waitUntil(() => p2.getIframeAPI()

            await Promise.all([
        expect(webhookTranscript.includes(p1Transcript) || p1Transcript.includes(webhookTranscript)).toBe(true);
                const event = await p.driver.waitUntil(
            expect(event.data.participant.name).toBe(p1.name);

                        'Unexpected number of participants. Jigasi failed to leave?');
        it('setup', async () => {
import type WebhookProxy from '../../helpers/WebhookProxy';

            await p2.getIframeAPI().clearEventResults('transcriptionChunkReceived');

import { expect } from '@wdio/globals';
        timeout: 60000,
                    };
        /**
        expect(event.data.language).toBe(p1Event.data.language);
        let webhooksProxy: WebhookProxy;
                    () => p.getIframeAPI().getEventResult('transcribingStatusChanged'),
         *  Wait until a transcribingStatusChanged iFrame event is received for both p1 and p2, with a specific value
 * @param p2

            for (const p of [ p1, p2 ]) {
    if (!asyncTranscription) {
            await checkReceivingChunks(p1, p2, webhooksProxy, asyncTranscriptions);
            webhooksProxy.clearCache();
                configOverwrite: {

                    id: string;
    const p1Id = await p1.getEndpointId();

            await checkReceivingChunks(p1, p2, webhooksProxy, asyncTranscriptions);
            ]);

        } = await webhooksProxy.waitForEvent('TRANSCRIPTION_CHUNK_RECEIVED');
            await p2.getIframeAPI().clearEventResults('transcribingStatusChanged');

async function checkReceivingChunks(p1: Participant, p2: Participant, webhooksProxy: WebhookProxy, asyncTranscription = false) {
    expect(p2Event.data.messageID).toBe(p1Event.data.messageID);
import type { Participant } from '../../helpers/Participant';
            expect(await p1.getIframeAPI().getEventResult('videoConferenceJoined')).toBeDefined();
        });
            await waitForTranscriptionStatusChange(true);
         */

        expect(p2Event.data.participant.name).toBe(p1.name);
            if (asyncTranscriptions) {
            };
            await p1.getIframeAPI().addEventListener('transcriptionChunkReceived');
 */
                p1.switchToMainFrame(),
                    // The "stopped" event is sometimes fired before the jigasi participant leaves. If we re-start

            }
            } else {
            // let's wait for destroy event before waiting for those that depends on it

                    // transcription before jigasi has left, jicofo will reject the request.

        it('toggle subtitles', async () => {
        it('set subtitles on and off', async () => {
                messageID: string;
 * @param asyncTranscription Whether async transciptions are used.

    const p2Transcript = p2Event.data.stable || p2Event.data.final;
                    });
        const event: {
    });
        async function waitForTranscriptionStatusChange(expectedOn: boolean) {
                stable: string;
const asyncTranscriptionValues = expectations.jaas.transcription.asyncTranscription ? [ false, true ] : [ false ];
                expect(event.eventType).toBe('TRANSCRIPTION_UPLOADED');
}
                }
            // we need to clear results or the last one will be used, from the previous time subtitles were on
            }, {
                token: t({ room, moderator: true }),
            await p1.getIframeAPI().executeCommand('stopRecording', 'file', true);
            await clearTranscriptionStatusChange();


        timeoutMsg: 'transcriptionChunkReceived event not received on p2 side'
 * @param p1

            await p2.getIframeAPI().addEventListener('transcriptionChunkReceived');
                final: string;
                expect(roomMetadata.asyncTranscription).toBe(true);
    const [ p1Event, p2Event ] = await Promise.all([ p1Promise, p2Promise ]);

setTestProperties(__filename, {

            const transcriptionEnabled = await p1.execute(() => config.transcription?.enabled);

            await waitForTranscriptionStatusChange(false);
                    await p.switchToIFrame();

            await clearTranscriptionStatusChange();

        timeout: 60000,

        });
                        timeout: 10000,
 *
            eventType: string;

                const event: {
    expect(p2Transcript.includes(p1Transcript) || p1Transcript.includes(p2Transcript)).toBe(true);

    useJaas: true,
    expect(p2Event.data.language).toBe(p1Event.data.language);
    });
    if (!asyncTranscription || expectations.jaas.transcription.asyncTranscriptionWebhook) {
                expect(event.data.preAuthenticatedLink).toBeDefined();
import { joinJaasMuc, generateJaasToken as t } from '../../helpers/jaas';
            // sometimes events are not immediately received,
        const webhookTranscript = event.data.final;
    });
            await p1.getIframeAPI().executeCommand('hangup');
            webhooksProxy.defaultMeetingSettings = { asyncTranscriptions };


            await p1.getIframeAPI().clearEventResults('transcriptionChunkReceived');
                p2.switchToMainFrame(),
            const roomMetadata = await p1.getRoomMetadata();
            await clearTranscriptionStatusChange();

            await waitForTranscriptionStatusChange(false);
                }
    expect(p2Event.data.participant.id).toBe(p1Id);
            await clearTranscriptionStatusChange();
            await webhooksProxy.waitForEvent('ROOM_DESTROYED');
            await clearTranscriptionStatusChange();
                    eventType: string;
 * @param webhooksProxy
        let p1: Participant, p2: Participant;
                }
