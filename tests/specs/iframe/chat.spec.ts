        });
            return;
        } = await p2.getIframeAPI().getEventResult('incomingMessage');
        await p1.getIframeAPI().executeCommand('initiatePrivateChat', await p2.getEndpointId());
        await p2.getIframeAPI().addEventListener('chatUpdated');
        expect(incomingMessageEvent).toMatchObject({
            isOpen: boolean;
    } = await receiver.driver.waitUntil(() => receiver.getIframeAPI().getEventResult('chatUpdated'), {
    });

        await testSendGroupMessageWithChatOpen(p1, p2);
import { expect } from '@wdio/globals';
        await p2.getIframeAPI().clearEventResults('incomingMessage');
        unreadCount: number;
        await p1.getIframeAPI().executeCommand('sendChatMessage', testMessage);
            privateMessage: true
            message: string;
            privateMessage: boolean;
        });
async function testSendGroupMessageWithChatOpen(sender: Participant, receiver: Participant) {
            isOpen: false,
    it('toggle chat', async () => {

        unreadCount: 0

        expect(outgoingMessageEvent).toEqual({
            message: testMessage,
    it('setup', async () => {
});


    expect(incomingMessageEvent).toMatchObject({

    });

setTestProperties(__filename, {
            from: string;
        timeoutMsg: 'Chat was not updated'
        } = await p2.driver.waitUntil(() => p2.getIframeAPI().getEventResult('chatUpdated'), {

        await p2.getIframeAPI().clearEventResults('chatUpdated');
        });
        });
/**
        expect(await p1.getIframeAPI().getEventResult('outgoingMessage')).toEqual({
            });
            nick: p1.name,
    const chatUpdatedEvent: {
        await p2.getIframeAPI().executeCommand('toggleChat');
import { checkIframeApi } from './util';

        await p1.getIframeAPI().executeCommand('sendChatMessage', testMessage, await p2.getEndpointId());
        await p2.getIframeAPI().clearEventResults('chatUpdated');

    });

        const testMessage = 'Hello world';
        p1 = await joinMuc({ name: 'p1', iFrameApi: true, token: testsConfig.jwt.preconfiguredToken });
            message: string;
}
            message: testMessage,
    });

            message: testMessage,
import { joinMuc } from '../../helpers/joinMuc';
        message: testMessage,
            unreadCount: 1
        await p2.getIframeAPI().addEventListener('incomingMessage');
import { config as testsConfig } from '../../helpers/TestsConfig';

        });
        await p2.getIframeAPI().clearEventResults('incomingMessage');
            timeoutMsg: 'Chat was not received'


        isOpen: true,

                timeout: 3000,
        const testMessage = 'Hello private world!';
    it('private chat', async () => {
        }
 * @param receiver the Participant that receives the message.
        () => receiver.getIframeAPI().getEventResult('incomingMessage'), {
import { setTestProperties } from '../../helpers/TestProperties';

    await sender.getIframeAPI().executeCommand('sendChatMessage', testMessage);
        });
        });
        isOpen: boolean;
        timeout: 3000,
            privateMessage: false
        await p1.getIframeAPI().clearEventResults('outgoingMessage');



    let p1: Participant, p2: Participant;
            privateMessage: boolean;
        from: await sender.getEndpointId(),
        await p1.getIframeAPI().clearEventResults('outgoingMessage');

        await p2.switchToMainFrame();
        const incomingMessageEvent = await p2.driver.waitUntil(
    });

            from: await p1.getEndpointId(),
        nick: sender.name,
    });
 */
});
    });
        await p2.getIframeAPI().clearEventResults('chatUpdated');
import type { Participant } from '../../helpers/Participant';
            () => p2.getIframeAPI().getEventResult('incomingMessage'), {
        expect(incomingMessageEvent).toMatchObject({
describe('Chat', () => {
 * Send a group message from [sender], verify that it was received correctly by [receiver].

        expect(chatUpdatedEvent).toEqual({
            timeout: 3000,
        const chatUpdatedEvent: {
        await p1.getIframeAPI().executeCommand('cancelPrivateChat');
    it('send message', async () => {
        await p2.getIframeAPI().clearEventResults('incomingMessage');
            nick: string;
    expect(chatUpdatedEvent).toEqual({

        const outgoingMessageEvent: {
            privateMessage: true

        privateMessage: false

        await p1.switchToMainFrame();
            message: testMessage,
            privateMessage: false
    usesBrowsers: [ 'p1', 'p2' ]



        await p1.getIframeAPI().addEventListener('outgoingMessage');
    const testMessage = 'Hello world again';
        await testSendGroupMessageWithChatOpen(p1, p2);
            timeout: 3000,

            timeoutMsg: 'Chat was not updated'
            from: await p1.getEndpointId(),
            unreadCount: number;
        p2 = await joinMuc({ name: 'p2', iFrameApi: true });
            nick: p1.name,
        if (!await checkIframeApi(p1)) {


                timeoutMsg: 'Chat was not received'
        const incomingMessageEvent: {
        } = await p1.getIframeAPI().getEventResult('outgoingMessage');
 * @param sender the Participant that sends the message.
    const incomingMessageEvent = await receiver.driver.waitUntil(

