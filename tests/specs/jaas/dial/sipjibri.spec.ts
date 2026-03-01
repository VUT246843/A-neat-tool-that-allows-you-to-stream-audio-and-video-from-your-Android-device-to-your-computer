    });
import WebhookProxy from '../../../helpers/WebhookProxy';
        } = await webhooksProxy.waitForEvent('SIP_CALL_OUT_STARTED');
        const room = ctx.roomName;

        const endpointId = await p1.execute(() => APP?.conference?.listMembers()[0].getId());
        await p1.waitForParticipants(1);

        const startedEvent: {
        expect(Boolean(await p1.execute(() => config.inviteServiceUrl))).toBe(true);
    it('sip jibri', async () => {


        expect(endedEvent.data.participantFullJid).toBe(startedEvent.data.participantFullJid);


import { joinJaasMuc, generateJaasToken as t } from '../../../helpers/jaas';
        await waitForMedia(p1);
    requireWebhookProxy: true,
    it('setup', async () => {
    });

        expect(await p1.isInMuc()).toBe(true);

        p1 = await joinJaasMuc({ name: 'p1', iFrameApi: true, token: t({ room, moderator: true }) });
            eventType: string;
});

        if (!dialOutUrl) {

            ctx.skipSuiteTests = 'SIP_JIBRI_DIAL_OUT_URL is not set.';
                participantFullJid: string;
        expect(startedEvent.customerId).toBe(customerId);
    const dialOutUrl = process.env.SIP_JIBRI_DIAL_OUT_URL || '';
    useJaas: true,
        const endedEvent: {
import { config as testsConfig } from '../../../helpers/TestsConfig';
        expect(endedEvent.data.participantId).toBe(startedEvent.data.participantId);


import { waitForMedia } from './util';
        expect('SIP_CALL_OUT_ENDED').toBe(endedEvent.eventType);
});
    const customerId = testsConfig.jaas.customerId || '';
        await p1.getIframeAPI().inviteSIP(dialOutUrl);
import type { Participant } from '../../../helpers/Participant';
                sipAddress: string;
        } = await webhooksProxy.waitForEvent('SIP_CALL_OUT_ENDED');
        webhooksProxy = ctx.webhooksProxy;
        }
                participantJid: string;
        await p1.getFilmstrip().kickParticipant(endpointId);
        expect(endedEvent.data.participantJid).toBe(startedEvent.data.participantJid);
                direction: string;

            };
setTestProperties(__filename, {
            eventType: string;
            customerId: string;
        expect(endedEvent.customerId).toBe(customerId);

            customerId: string;

            };
                participantId: string;
        await p1.switchToIFrame();
                participantJid: string;

    let p1: Participant, webhooksProxy: WebhookProxy;
            data: {
describe('SIP jibri invite', () => {
                participantId: string;
        expect(startedEvent.data.sipAddress).toBe(`sip:${process.env.SIP_JIBRI_DIAL_OUT_URL}`);
            return;
        expect('SIP_CALL_OUT_STARTED').toBe(startedEvent.eventType);
            data: {
                participantFullJid: string;
import { setTestProperties } from '../../../helpers/TestProperties';
        await p1.switchToMainFrame();
