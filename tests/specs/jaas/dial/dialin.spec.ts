        p1 = await joinJaasMuc({ name: 'p1', token: t({ room, moderator: true }) });
        }
        expect(customerId).toBeDefined();
import { setTestProperties } from '../../../helpers/TestProperties';

import WebhookProxy from '../../../helpers/WebhookProxy';
        webhooksProxy = ctx.webhooksProxy;
            await assertDialInDisplayed(p1, expectations.dialIn.enabled);

        expect(dialInPin.length >= 8).toBe(true);

        if (!webhooksProxy) {
        if (webhooksProxy) {



    isDialInEnabled, verifyMoreNumbersPage,
        if (webhooksProxy) {
        const dialInPin = await p1.getDialInPin();
        if (expectations.dialIn.enabled === true) {

    });
import { config as testsConfig } from '../../../helpers/TestsConfig';
        }


        let startedPayload: any;
import { verifyEndedWebhook, verifyStartedWebhooks, waitForMedia } from './util';
            return;
        await assertUrlDisplayed(p1);
        await waitForMedia(p1);

});

        await p1.hangup();
        }
} from '../../helpers/DialIn';
    dialIn,
describe('Dial-in', () => {
    useWebhookProxy: true
        }
        await p1.getFilmstrip().kickParticipant(endpointId);
        }
import {
import { joinJaasMuc, generateJaasToken as t } from '../../../helpers/jaas';
    it('dial-in', async () => {
        }

        expect(await p1.isInMuc()).toBe(true);
    assertDialInDisplayed, assertUrlDisplayed,
    it('setup', async () => {
    const customerId: string = testsConfig.jaas.customerId || '';
});
            await verifyMoreNumbersPage(p1);

    });
            expect(await isDialInEnabled(p1)).toBe(expectations.dialIn.enabled);
        if (!process.env.DIAL_IN_REST_URL) {
            // TODO: assert the page is NOT shown when the expectation is false.
import type { Participant } from '../../../helpers/Participant';
            ctx.skipSuiteTests = 'DIAL_IN_REST_URL is not set.';

        }
    let p1: Participant, webhooksProxy: WebhookProxy;
            console.error('WebhooksProxy is not available, will not verify webhooks.');
        await dialIn(dialInPin);
                = await verifyStartedWebhooks(webhooksProxy, 'in', 'DIAL_IN_STARTED', customerId);


        if (expectations.dialIn.enabled !== null) {
import { expectations } from '../../../helpers/expectations';
    useJaas: true,
        if (expectations.dialIn.enabled !== null) {
        const room = ctx.roomName;
    });
            startedPayload

        const endpointId = await p1.execute(() => APP?.conference?.listMembers()[0].getId());
            await verifyEndedWebhook(webhooksProxy, 'DIAL_IN_ENDED', customerId, startedPayload);

    it ('Invite UI', async () => {
setTestProperties(__filename, {
