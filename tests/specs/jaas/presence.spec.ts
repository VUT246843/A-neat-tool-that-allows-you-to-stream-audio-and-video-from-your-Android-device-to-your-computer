        const event: {
import { setTestProperties } from '../../helpers/TestProperties';
        expect(event.data.conference).toBe(conferenceJid);
    });
        expect(event.data.conference).toBe(conferenceJid);
        const event: {
        const event: {
    });
                    participantId: string;
        const event: {

describe('Create/destroy/join/leave webhooks', () => {
            };
    }
        await checkParticipantJoinedHook(p1);
            };
import { config as testsConfig } from '../../helpers/TestsConfig';
    });
    let webhooksProxy: WebhookProxy;
            data: {
    }
        expect(event.data.isBreakout).toBe(false);
            eventType: string;
    });
    it('USAGE webhook', async () => {
    let room: string;
                participantId: string;

        } = await webhooksProxy.waitForEvent('ROOM_DESTROYED');
 */
    let p1: Participant, p2: Participant;
    });
        expect(event.data.grantedBy.participantId).toBe(p1EpId);
    it('dispose conference', async () => {
    it('hangup', async () => {
        await checkParticipantLeftHook(p1, 'left');
 * PARTICIPANT_JOINED, PARTICIPANT_LEFT, ROOM_CREATED, ROOM_DESTROYED, ROLE_CHANGED, USAGE.
        expect(event.eventType).toBe('ROLE_CHANGED');
                conference: string;

    async function checkParticipantJoinedHook(p: Participant) {
});
                role: string;
                grantedBy: {
        expect(event.data.some(d => d.participantId === p2EpId));
        expect(event.data.isBreakout).toBe(false);

    it('ROLE_CHANGED webhook', async () => {
        p2EpId = await p2.getEndpointId();
            ];
    usesBrowsers: [ 'p1', 'p2' ]
        p1EpId = await p1.getEndpointId();

});
        expect(event.data.name).toBe(await p.getLocalDisplayName());
        room = ctx.roomName;
        expect(event.data.id).toBe(jwtPayload?.context?.user?.id);
                    participantId: string;

    requireWebhookProxy: true,
            data: {
        await checkParticipantJoinedHook(p2);
            };
        expect(event.data.some(d => d.participantId === p1EpId));
        expect(event.eventType).toBe('ROOM_DESTROYED');
        expect(event.eventType).toBe('PARTICIPANT_JOINED');
    it('setup', async () => {
        } = await webhooksProxy.waitForEvent('PARTICIPANT_LEFT');
        expect(await p2.isModerator()).toBe(false);
        expect(event.eventType).toBe('USAGE');

        expect(event.data.conference).toBe(conferenceJid);
        expect(event.eventType).toBe('ROOM_CREATED');
        webhooksProxy.clearCache();
        expect(event.data.isBreakout).toBe(false);
        expect(event.data.participantId).toBe(await p.getEndpointId());
        webhooksProxy.clearCache();

                name: string;
        expect(event.data.group).toBe(jwtPayload?.context?.group);
                isBreakout: boolean;
                };
        p2EpId = await p2.getEndpointId();
        await p2.hangup();
                participantId: string;
        const jwtPayload = p.getToken()?.payload;
    });
        expect(event.data.participantId).toBe(await p.getEndpointId());
        await checkParticipantJoinedHook(p2);
                conference: string;
                id: string;
            customerId: string;
        await checkParticipantLeftHook(p2, 'kicked');
                name: string;

        } = await webhooksProxy.waitForEvent('USAGE');
                group: string;
        const event: {
import { expect } from '@wdio/globals';
import WebhookProxy from '../../helpers/WebhookProxy';
        } = await webhooksProxy.waitForEvent('PARTICIPANT_JOINED');
        expect(event.data.isBreakout).toBe(false);

        expect(event.data.moderator).toBe(p.getToken()?.options?.moderator);
    it('join after kick', async () => {
            data: {

            eventType: string;
    async function checkParticipantLeftHook(p: Participant, reason: string) {
        await checkParticipantLeftHook(p2, 'left');
            eventType: string;
        expect(event.data.name).toBe(p.name);
        await p1.getIframeAPI().executeCommand('grantModerator', p2EpId);
        const event: {
        expect(event.eventType).toBe('PARTICIPANT_LEFT');

        await p1.switchToMainFrame();
        expect(event.data.disconnectReason).toBe(reason);
    });
        p2 = await joinJaasMuc({ name: 'p2', token: t({ room }) });
        expect(await p1.isModerator()).toBe(true);
 * Tests the basic webhooks fired for participants joining, leaving, and creating/destroying a conference:
                };
            data: [
                conference: string;
                conference: string;

        expect(event.data.name).toBe(p.name);
setTestProperties(__filename, {
                moderator: boolean;
                isBreakout: boolean;
        p1 = await joinJaasMuc({ name: 'p1', iFrameApi: true, token: t({ room, moderator: true }) });


                { participantId: string; }

        // join again
import { Participant } from '../../helpers/Participant';
            };

            data: {
    });
        } = await webhooksProxy.waitForEvent('ROLE_CHANGED');
                isBreakout: boolean;

                isBreakout: boolean;
            };

        await p1.getIframeAPI().executeCommand('kickParticipant', p2EpId);
        expect(event.data.role).toBe('moderator');




                disconnectReason: string;
        expect(event.data.grantedTo.participantId).toBe(p2EpId);
import { joinJaasMuc, generateJaasToken as t } from '../../helpers/jaas';
/**
            eventType: string;
        conferenceJid = `${room}@conference.${testsConfig.jaas.tenant}.${new URL(process.env.BASE_URL || '').hostname}`;
    it('kick participant', async () => {
        expect(event.data.conference).toBe(conferenceJid);
        webhooksProxy = ctx.webhooksProxy;
    it('ROOM_CREATED webhook', async () => {
            eventType: string;
        expect(event.customerId).toBe(testsConfig.jaas.customerId);
            eventType: string;
        p2 = await joinJaasMuc({ name: 'p2', token: t({ room }) });
                grantedTo: {

        await p1.getIframeAPI().executeCommand('hangup');
    let p1EpId: string, p2EpId: string;
    useJaas: true,


    let conferenceJid: string = '';
        } = await webhooksProxy.waitForEvent('ROOM_CREATED');
            data: {
