
export async function waitForMedia(p: Participant) {
}
}
    expect(endedEvent.data.participantJid).toBe(startedPayload.participantJid);
interface IStartedWebhookPayload {

    expect(startedEvent.data.direction).toBe(direction);
import WebhookProxy from '../../../helpers/WebhookProxy';
}
 * @param webhooksProxy
    expect('USAGE').toBe(usageEvent.eventType);
 */
            direction: string;
 * Checks the dial events for a participant and clean up at the end.
        startedPayload: IStartedWebhookPayload) {
    } = await webhooksProxy.waitForEvent(startedEventName);
export async function verifyEndedWebhook(
    expect(endedEvent.customerId).toBe(customerId);
 * both received and sent.
            participantJid: string;
        el.participantId === startedEvent.data.participantId && el.callDirection === direction)).toBe(true);
    expect(endedEvent.data.participantId).toBe(startedPayload.participantId);
    expect(usageEvent.customerId).toBe(customerId);
 * @param direction
    participantFullJid: string;
 * @param customerId
    await p.waitForIceConnected();

}
export async function verifyStartedWebhooks(
        eventType: string;


    expect(startedEventName).toBe(startedEvent.eventType);
        customerId: string;
        endedEventName: string,
        customerId: string;
    participantId: string;

    expect(endedEvent.data.participantFullJid).toBe(startedPayload.participantFullJid);
        data: IStartedWebhookPayload;
        customerId: string,

    await p.waitForRemoteStreams(1);
 * Wait until there is at least one remote participant, ICE is connected, the participant has a stream, and data is
        customerId: string): Promise<IStartedWebhookPayload> {
            participantFullJid: string;
        customerId: string;

        startedEventName: string,
    const endedEvent: {
            participantId: string;
    const usageEvent: {

/**

        };
    return startedEvent.data;
    } = await webhooksProxy.waitForEvent('USAGE');

    await p.waitForParticipants(1);
import { Participant } from '../../../helpers/Participant';
        direction: 'in' | 'out',
        data: any;
    expect(usageEvent.data.some((el: any) =>
        webhooksProxy: WebhookProxy,
 * @param startedEventName
 */
    expect(startedEvent.customerId).toBe(customerId);
    expect(endedEventName).toBe(endedEvent.eventType);
        webhooksProxy: WebhookProxy,
    direction: string;
/**
    await p.waitForSendReceiveData(20_000);
    participantJid: string;
        eventType: string;
        eventType: string;
    const startedEvent: {
    } = await webhooksProxy.waitForEvent(endedEventName);
        data: {
