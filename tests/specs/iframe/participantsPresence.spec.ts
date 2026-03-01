            timeoutMsg: 'videoConferenceLeft not received'

        await p1.switchToIFrame();

});
        const { p1, roomName } = ctx;
            timeoutMsg: 'readyToClose not received'
            p2.getIframeAPI().getEventResult('videoConferenceLeft'), {
    usesBrowsers: [ 'p1', 'p2' ]
        const eventReadyToCloseP2 = await p2.driver.waitUntil(() => p2.getIframeAPI().getEventResult('readyToClose'), {
            return;
            expect(roomsInfo.id).toBeDefined();
            expect(roomsInfo.isMainRoom).toBe(true);


        // dispose
        expect((await p1.getIframeAPI().getEventResult('participantsPaneToggled'))?.open).toBe(true);
            const { node, resource } = parseJid(roomsInfo.jid);
            timeout: 4000,
        expect(await p1.getFilmstrip().getRemoteDisplayName(p2EpId)).toBe(newP2Name);

        expect(await p1.getIframeAPI().isParticipantsPaneOpen()).toBe(false);
describe('Participants presence', () => {
            timeout: 2000,
            const p1EpId = await p1.getEndpointId();
            timeout: 2000,

        // check there is no iframe on the page
        const eventReadyToClose = await p1.driver.waitUntil(() => p1.getIframeAPI().getEventResult('readyToClose'), {
            expect(roomsInfo.participants.length).toBe(2);
            expect(await p1.getIframeAPI().getNumberOfParticipants()).toBe(2);
            expect(node).toBe(roomName);
        await p1.getIframeAPI().addEventListener('videoConferenceLeft');

import { checkIframeApi } from './util';

        await p1.switchToMainFrame();
            timeoutMsg: 'readyToClose not received'
    );
        await p2.getIframeAPI().addEventListener('readyToClose');
        await p1.getIframeAPI().addEventListener('readyToClose');

        const p1EpId = await p1.getEndpointId();
        expect(await p1.getIframeAPI().getEventResult('isModerator')).toBe(true);
        const { p1, p2, roomName } = ctx;

        });

setTestProperties(__filename, {

import { P1, P2 } from '../../helpers/Participant';
        await p1.getIframeAPI().executeCommand('toggleParticipantsPane', true);
            timeout: 4000,

        await p2.switchToMainFrame();

            timeoutMsg: 'iframe is still on the page'
        });



    it('dispose conference', async () => {
        await p1.getIframeAPI().executeCommand('toggleParticipantsPane', false);
        const { p1 } = ctx;
        await ensureTwoParticipants({}, { name: 'p1', iFrameApi: true });
        const newP2Name = P2;

        const eventConferenceLeft = await p1.driver.waitUntil(() =>


    it('participants pane', async () => {
        const eventConferenceLeftP2 = await p2.driver.waitUntil(() =>
        }, {
        await p1.getIframeAPI().addEventListener('participantsPaneToggled');
        await p2.getIframeAPI().executeCommand('hangup');

        });
        expect(eventConferenceLeft.roomName).toBe(roomName);

            expect(roomsInfo).toBeDefined();

    it('participants info',




            const { node: roomNode } = parseJid(roomsInfo.id);
        await p2.getIframeAPI().addEventListener('videoConferenceLeft');


    });
        await p2.getIframeAPI().clearEventResults('videoConferenceLeft');


        expect(await p2.getIframeAPI().getEventResult('videoConferenceJoined')).toBeDefined();

        await p1.driver.$('iframe').waitForExist({
});

        await p1.getIframeAPI().executeCommand('hangup');
import { setTestProperties } from '../../helpers/TestProperties';
    it('overwrite names', async () => {
        expect(eventConferenceLeft).toBeDefined();
            const { p1, roomName } = ctx;
            timeoutMsg: 'videoConferenceLeft not received'
        const p2EpId = await p2.getEndpointId();
        await Promise.all([
            expect(roomNode).toBe(roomName);
        await p1.getIframeAPI().dispose();
            reverse: true,

        }
        } ];
            const roomsInfo = (await p1.getIframeAPI().getRoomsInfo()).rooms[0];
            expect(resource).toBe(p1EpId);
            p2.switchToMainFrame()
    });
        expect(await p1.getLocalDisplayName()).toBe(newP1Name);
            p1.getIframeAPI().getEventResult('videoConferenceLeft'), {
        expect(await p1.getIframeAPI().getEventResult('videoConferenceJoined')).toBeDefined();
        expect(await p1.getIframeAPI().isParticipantsPaneOpen()).toBe(false);
    });
    it('hangup', async () => {
        expect(eventReadyToCloseP2).toBeDefined();
        expect((await p1.getIframeAPI().getEventResult('participantsPaneToggled'))?.open).toBe(false);


    it('joining the meeting', async () => {

        if (!await checkIframeApi(p1)) {
        });
        const { p1, p2 } = ctx;
        await p1.switchToMainFrame();
import { ensureTwoParticipants, parseJid } from '../../helpers/participants';
        const { p1, p2 } = ctx;

        await p1.getIframeAPI().clearEventResults('videoConferenceLeft');
            timeout: 2000,
            p1.switchToMainFrame(),

    });
        expect(eventConferenceLeftP2).toBeDefined();

        const newP1Name = P1;
        });
        expect(eventConferenceLeftP2.roomName).toBe(roomName);
        ]);
        expect(await p1.getIframeAPI().isParticipantsPaneOpen()).toBe(true);
            id: p1EpId,


        }
        await p1.getIframeAPI().executeCommand('overwriteNames', newNames);
            id: p2EpId,
            name: newP2Name
            name: newP1Name

        const newNames: ({ id: string; name: string; })[] = [ {


        async () => {

    });
        expect(eventReadyToClose).toBeDefined();
