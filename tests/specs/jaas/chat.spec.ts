        expect(messages.some(m => m.name === 'p1' && m.content === 'foo')).toBe(true);

        const event: {
import { fetchJson } from '../../helpers/utils';

            };
            fqn: string;
    });
});
        messages.forEach(m => {
                preAuthenticatedLink: string;

        expect(messages.some(m => m.name === 'p1' && m.content === 'baz')).toBe(true);
import type { Participant } from '../../helpers/Participant';

        expect(uploadedChat.meetingFqn).toBe(fqn);
    usesBrowsers: [ 'p1', 'p2' ]

        });
        expect(uploadedChat.messageType).toBe('CHAT');
        await p1.getChatPanel().sendMessage('baz');
    it('test webhook', async () => {
        await p1.hangup();
});
        await p2.getChatPanel().sendMessage('bar');
import { expect } from '@wdio/globals';
            customerId: string;
import { joinJaasMuc, generateJaasToken as t } from '../../helpers/jaas';
    useJaas: true,
describe('JaaS CHAT_UPLOADED webhook.', () => {

    const tenant = testsConfig.jaas.tenant;
        await p2.hangup();

        await p1.getChatPanel().sendMessage('foo');
            eventType: string;
    const customerId = tenant?.replace('vpaas-magic-cookie-', '');

        const uploadedChat: any = await fetchJson(event.data.preAuthenticatedLink);


            expect(typeof m.timestamp).toBe('number');
        expect(event.appId).toBe(tenant);
            data: {
        expect(event.fqn).toBe(fqn);

        expect(event.data.preAuthenticatedLink).toBeDefined();
        expect(messages.length).toBe(3);
        const room = ctx.roomName;
        } = await webhooksProxy.waitForEvent('CHAT_UPLOADED');
        expect(messages.some(m => m.name === 'p2' && m.content === 'bar')).toBe(true);
        p1 = await joinJaasMuc({ name: 'p1', token: t({ room }) });
    let webhooksProxy: WebhookProxy;
        console.log(JSON.stringify(messages));
import WebhookProxy from '../../helpers/WebhookProxy';

        p2 = await joinJaasMuc({ name: 'p2', token: t({ room }) });
        expect(messages).toBeDefined();
        webhooksProxy = ctx.webhooksProxy;
    let p1: Participant, p2: Participant;
        expect(event.eventType).toBe('CHAT_UPLOADED');
        const messages: any[] = uploadedChat.messages;
import { setTestProperties } from '../../helpers/TestProperties';
    it('setup', async () => {
import { config as testsConfig } from '../../helpers/TestsConfig';
            appId: string;
    requireWebhookProxy: true,
    });

        fqn = `${testsConfig.jaas.tenant}/${room}`;
setTestProperties(__filename, {
    let fqn: string;
        expect(event.customerId).toBe(customerId);
