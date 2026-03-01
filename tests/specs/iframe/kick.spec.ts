        await ctx.p2.getIframeAPI().executeCommand('hangup');
        const p2DisplayName = await p2.getLocalDisplayName();
        const p2EpId = await p2.getEndpointId();
        expect(await p1.getIframeAPI().getEventResult('videoConferenceJoined')).toBeDefined();
        expect(isEqual(eventP2, {

            timeoutMsg: 'participantJoined not received'
        expect(event.formattedDisplayName).toBe(p2DisplayName);
            timeout: 2000,
    it('joining the meeting', async () => {

        await ctx.p2.getIframeAPI().clearEventResults('videoConferenceLeft');


    it('join after kick', async () => {
            timeoutMsg: 'videoConferenceLeft not received'
        await p2.getIframeAPI().addEventListener('videoConferenceLeft');
        await ctx.p2.getIframeAPI().addEventListener('videoConferenceLeft');
        const { p1, p2, roomName } = ctx;

                name: p2DisplayName
        await ensureTwoParticipants({}, { name: 'p1', iFrameApi: true });
        await Promise.all([
        const eventP2 = await p2.driver.waitUntil(() => p2.getIframeAPI().getEventResult('participantKickedOut'), {
        await ensureTwoParticipants({}, { name: 'p1', iFrameApi: true });
    usesBrowsers: [ 'p1', 'p2' ]

        expect(await p1.getIframeAPI().getEventResult('isModerator')).toBe(true);
        });

            timeoutMsg: 'participantKickedOut event not received on p2 side'
        if (!await checkIframeApi(p1)) {
        const p2DisplayName = await p2.getLocalDisplayName();
        const p1DisplayName = await p1.getLocalDisplayName();
        expect(eventConferenceLeftP2).toBeDefined();



        })).toBe(true);
            timeout: 4000,
            timeout: 2000,
        expect(eventConferenceLeftP2.roomName).toBe(roomName);

            p1.switchToMainFrame(),
        expect(isEqual(eventP1, {
            timeout: 2000,

            timeout: 4000,

                local: true,
        expect(event.displayName).toBe(p2DisplayName);


                local: true,
        await p1.switchToMainFrame();
        const { p1 } = ctx;
            return;

        await p2.switchToMainFrame();
                id: p1EpId,
        });
            timeoutMsg: 'videoConferenceLeft not received'
        const { p1, p2 } = ctx;
        expect(eventP2).toBeDefined();
        const event = await p1.driver.waitUntil(() => p1.getIframeAPI().getEventResult('participantJoined'), {
    });
        await ctx.p2.switchToMainFrame();

        await ensureTwoParticipants({}, { name: 'p1', iFrameApi: true });
        });

                name: p1DisplayName
});

            kicked: {
        const eventP1 = await p1.driver.waitUntil(() => p1.getIframeAPI().getEventResult('participantKickedOut'), {
            }

describe('Kick participants', () => {
        const p1EpId = await p1.getEndpointId();
                name: p2DisplayName
        await p1.getIframeAPI().executeCommand('kickParticipant', p2EpId);
            p2.switchToMainFrame()
import { setTestProperties } from '../../helpers/TestProperties';
                local: false,

        const { p2 } = ctx;
                id: p2EpId,

        }
    retry: true,
        expect(await p2.getIframeAPI().getEventResult('videoConferenceJoined')).toBeDefined();
            },
            p2.getIframeAPI().getEventResult('videoConferenceLeft'), {
            timeoutMsg: 'participantKickedOut event not received on p1 side'

        await p1.switchToMainFrame();
        await p1.getIframeAPI().addEventListener('participantKickedOut');
        })).toBe(true);
        await p2.getIframeAPI().clearEventResults('videoConferenceLeft');
        await ctx.p2.driver.waitUntil(() =>
        ]);
            kicker: {
        expect(eventP1).toBeDefined();
            }

            kicker: {
    it('kick participant', async () => {
                name: p1DisplayName
    });
        expect(event.id).toBe(await p2.getEndpointId());
        const eventConferenceLeftP2 = await p2.driver.waitUntil(() =>
        });
                id: 'local',
        // join again
            ctx.p2.getIframeAPI().getEventResult('videoConferenceLeft'), {
            kicked: {


                id: p1EpId,
setTestProperties(__filename, {
import { checkIframeApi } from './util';
import { isEqual } from 'lodash-es';
        await p1.getIframeAPI().addEventListener('participantJoined');


            },
});

        });
    });
import { ensureTwoParticipants } from '../../helpers/participants';

        await p2.getIframeAPI().addEventListener('participantKickedOut');
        expect(event).toBeDefined();


