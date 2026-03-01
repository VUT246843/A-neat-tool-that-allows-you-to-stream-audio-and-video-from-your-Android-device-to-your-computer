import { Participant } from '../../helpers/Participant';

                initiatorId: string;

        await p.getIframeAPI().executeCommand('stopRecording', 'stream');
        expect(jaasUploadedEvent.data.initiatorId).toBe(jwtPayload?.context?.user?.id);
        await p.getIframeAPI().addEventListener('recordingStatusChanged');
            eventType: string;
        if (command) {
        // to avoid rate limits


            await p.getIframeAPI().startRecording({
        });
        webhooksProxy.clearCache();
        }
        webhooksProxy = ctx.webhooksProxy;
            customerId: string;
            timeoutMsg: 'recordingLinkAvailable event not received'
            timeoutMsg: 'recordingStatusChanged event not received'
    const customerId = tenant?.replace('vpaas-magic-cookie-', '');

 * Tests the recording and live-streaming functionality of JaaS (including relevant webhooks) exercising the iFrame API
        const iFrameEvent = (await p.getIframeAPI().getEventResult('recordingStatusChanged'));
                mode: 'file'
        if (!recordingEnabled) {
describe('Recording and live-streaming', () => {
     * Starts recording and asserts that the expected iFrame and JaaS events are received.
        expect(liveStreamingEnabled).toBe(expectations.jaas.liveStreamingEnabled);

            customerId: string;
        expect(jaasEvent.customerId).toBe(customerId);

        const iFrameEvent = (await p.getIframeAPI().getEventResult('recordingStatusChanged'));

        if (liveStreamingEnabled && !process.env.YTUBE_TEST_STREAM_KEY) {
    requireWebhookProxy: true,
        liveStreamingEnabled = Boolean(await p.execute(() => config.liveStreaming?.enabled));
        p = await joinJaasMuc({ iFrameApi: true, token: t({ moderator: true }) }, { roomName: ctx.roomName });
     * @param command whether to use the "command" or the "function" iFrame API.
     * @param command whether to use the "command" or the "function" iFrame API.
            };
            customerId: string;
import { joinJaasMuc, generateJaasToken as t } from '../../helpers/jaas';
            liveStreamingEnabled = false;
            await p.getIframeAPI().executeCommand('stopRecording', 'file');
            eventType: string;
        expect('RECORDING_STARTED').toBe(jaasEvent.eventType);
        const iFrameEndedEvent = (await p.getIframeAPI().getEventResult('recordingStatusChanged'));
    let p: Participant;

 * TODO: also assert "this meeting is being recorded" notifications are show/played?
            });
    it('start/stop live-streaming using the iFrame command', async () => {

        await p.getIframeAPI().addEventListener('recordingLinkAvailable');
                mode: 'file'
    it('start/stop recording using the iFrame command', async () => {
        }

        expect(recordingEnabled).toBe(expectations.jaas.recordingEnabled);

            youtubeBroadcastID: process.env.YTUBE_TEST_BROADCAST_ID,

        } = await webhooksProxy.waitForEvent('RECORDING_STARTED');
        expect(iFrameEvent.mode).toBe('file');

        expect(jaasEndedEvent.customerId).toBe(customerId);

     */
        const jaasEndedEvent: {
 * commands and functions.
});
        if (process.env.YTUBE_TEST_BROADCAST_ID) {
        }
            customerId: string;
import { setTestProperties } from '../../helpers/TestProperties';



            data: {
 */
            mode: 'stream',
            expect(liveStreamUrl.livestreamUrl).toBeDefined();
});
        expect(iFrameEvent.mode).toBe('file');
            await p.getIframeAPI().executeCommand('startRecording', {
        expect(jaasEvent.customerId).toBe(customerId);
            eventType: string;
        await p.driver.pause(30000);
            youtubeStreamKey: process.env.YTUBE_TEST_STREAM_KEY

    /**

        } = await webhooksProxy.waitForEvent('LIVE_STREAM_STARTED');
        const jwtPayload = p.getToken()?.payload;
            timeout: 5000,
            // @ts-ignore
            p.getIframeAPI().getEventResult('recordingStatusChanged'), {
     */
        }
        expect(linkEvent.ttl > 0).toBe(true);
        await p.getIframeAPI().executeCommand('startRecording', {

        } = await webhooksProxy.waitForEvent('LIVE_STREAM_ENDED');

    useJaas: true

        await p.switchToMainFrame();
        });

        if (command) {


            eventType: string;
            timeout: 5000,
                participants: Array<string>;
        recordingEnabled = Boolean(await p.execute(() => config.recordingService?.enabled));

    let liveStreamingEnabled: boolean;

        webhooksProxy.clearCache();
        const jaasEndedEvent: {
        } else {

        expect(iFrameEndedEvent.on).toBe(false);




            e => e.id === jwtPayload?.context?.user?.id)).toBe(true);
            });

        if (!liveStreamingEnabled) {
        const jaasEvent: {
        expect(linkEvent.link.includes(tenant)).toBe(true);
    it('setup', async () => {
    it('start/stop recording using the iFrame function', async () => {
        }
            return;
            p.getIframeAPI().getEventResult('recordingLinkAvailable'), {
            console.log('Skipping live-streaming tests because YTUBE_TEST_STREAM_KEY is not set.');
import { config as testsConfig } from '../../helpers/TestsConfig';
    });
        } else {
        } = await webhooksProxy.waitForEvent('RECORDING_ENDED');
        const iFrameEvent = await p.driver.waitUntil(() =>


    }
        expect(iFrameEvent.on).toBe(true);
        expect(iFrameEndedEvent.mode).toBe('stream');
        expect(jaasUploadedEvent.data.participants.some(
    let recordingEnabled: boolean;
    let webhooksProxy: WebhookProxy;
            const liveStreamUrl = await p.getIframeAPI().getLivestreamUrl();
        await startRecording(false);
        await stopRecording(false);

import { expectations } from '../../helpers/expectations';

        const linkEvent = await p.driver.waitUntil(() =>
        expect(iFrameEvent.mode).toBe('stream');
    });

    retry: true,
        }
        expect(linkEvent.link.startsWith('https://')).toBe(true);
        } = await webhooksProxy.waitForEvent('RECORDING_UPLOADED');
        // to avoid rate limits
    const tenant = testsConfig.jaas.tenant;
        await p.getIframeAPI().clearEventResults('recordingStatusChanged');
        expect('LIVE_STREAM_STARTED').toBe(jaasEvent.eventType);
        if (!recordingEnabled) {
    }

        await startRecording(true);
        const jaasUploadedEvent: {
    async function stopRecording(command: boolean) {
        expect(jaasEndedEvent.eventType).toBe('LIVE_STREAM_ENDED');
    });
            await p.getIframeAPI().stopRecording('file');
            return;
        await stopRecording(true);

        expect(iFrameEvent.on).toBe(false);
     * Stops recording and asserts that the expected iFrame and JaaS events are received.
        await p.getIframeAPI().addEventListener('recordingStatusChanged');

        }
        expect('RECORDING_ENDED').toBe(jaasEndedEvent.eventType);
/**
            customerId: string;
    /**

        expect(iFrameEvent.on).toBe(true);

        expect(jaasEndedEvent.customerId).toBe(customerId);
        await p.driver.pause(30000);
    });
            return;
import WebhookProxy from '../../helpers/WebhookProxy';
setTestProperties(__filename, {


        });
        const jaasEvent: {

    async function startRecording(command: boolean) {
            eventType: string;
