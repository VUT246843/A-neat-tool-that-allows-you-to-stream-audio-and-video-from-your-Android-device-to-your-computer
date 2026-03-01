        webhooksProxy = ctx.webhooksProxy;

    const dialOutUrl = process.env.DIAL_OUT_URL || '';
import { config as testsConfig } from '../../../helpers/TestsConfig';

});
    useJaas: true

setTestProperties(__filename, {
describe('Dial-out', () => {
    });
        const endpointId = await p1.execute(() => APP?.conference?.listMembers()[0].getId());
        if (!dialOutUrl) {
            = await verifyStartedWebhooks(webhooksProxy, 'out', 'DIAL_OUT_STARTED', customerId);

    requireWebhookProxy: true,
        await waitForMedia(p1);

        }
import { verifyEndedWebhook, verifyStartedWebhooks, waitForMedia } from './util';
        p1 = await joinJaasMuc({ name: 'p1', iFrameApi: true, token: t({ room, moderator: true }) });
        await p1.getFilmstrip().kickParticipant(endpointId);

        await p1.switchToMainFrame();
        expect(Boolean(await p1.execute(() => config.dialOutAuthUrl))).toBe(true);

import { setTestProperties } from '../../../helpers/TestProperties';
        await p1.waitForParticipants(1);
    it('setup', async () => {
        await p1.getIframeAPI().invitePhone(dialOutUrl);
});
    const customerId = testsConfig.jaas.customerId || '';
import type { Participant } from '../../../helpers/Participant';



import { joinJaasMuc, generateJaasToken as t } from '../../../helpers/jaas';

        expect(await p1.isInMuc()).toBe(true);
        const room = ctx.roomName;
            return;
    });
            ctx.skipSuiteTests = 'DIAL_OUT_URL is not set.';
        const startedPayload

        await verifyEndedWebhook(webhooksProxy, 'DIAL_OUT_ENDED', customerId, startedPayload);
        await p1.switchToIFrame();
import WebhookProxy from '../../../helpers/WebhookProxy';
    let p1: Participant, webhooksProxy: WebhookProxy;
    it('dial-out', async () => {
