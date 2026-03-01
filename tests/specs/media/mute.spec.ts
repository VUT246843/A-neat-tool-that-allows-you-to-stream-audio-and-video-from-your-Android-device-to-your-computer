                enabled: p2p
        testee: Participant,
            }
    await ensureOneParticipant({
    });

import {
    const { p1 } = ctx;
    await p1.getToolbar().clickDesktopSharingButton();

        await toggleMuteAndCheck(p1, p2, false);
    });

 * @param p2p whether to enable p2p or not.
        await p2.getFilmstrip().assertAudioMuteIconIsDisplayed(p2);
import type { Participant } from '../../helpers/Participant';

    muteAudioAndCheck,
    ensureOneParticipant,
    const { p2 } = ctx;
 * Video mutes participant1 before participant2 joins and checks if participant1 can share or unmute video
    } else {
        await p2.waitForIceConnected();
    usesBrowsers: [ 'p1', 'p2' ]
        await p1.getToolbar().clickAudioMuteButton();
    unmuteVideoAndCheck
        }
    joinSecondParticipant,

        configOverwrite: {
    // Start desktop share.
    await Promise.all([ ctx.p1?.hangup(), ctx.p2?.hangup() ]);

    }


} from '../../helpers/participants';

            p2p: {
    it('p1 mutes before p2 joins', async () => {
    // we need to pass the id of the fake participant we use for the screensharing
}
    }
        await muteAudioAndCheck(testee, observer);
 */

        }

        const { p2 } = ctx;

    checkForScreensharingTile,

        const { p1 } = ctx;
import {
        }


    it('unmute p1 and check', () => toggleMuteAndCheck(ctx.p1, ctx.p2, false));
    it('mute p2 and check', () => toggleMuteAndCheck(ctx.p2, ctx.p1, true));
});



        await unmuteAudioAndCheck(p2, p1);
    await p1.getToolbar().clickStopDesktopSharingButton();


        const { p1, p2 } = ctx;
    // Stop desktop share and unmute video and check for video again.
        await unmuteAudioAndCheck(testee, observer);
    } else {
import { setTestProperties } from '../../helpers/TestProperties';
 * @param muted the mute state of {@code testee} expected to be observed by {@code observer}.
    it('p1 mutes p2 and check', async () => {
    it('joining the meeting', () => ensureTwoParticipants());
        configOverwrite: {
        await p2.getFilmstrip().assertAudioMuteIconIsDisplayed(p1);
});
/**
        await ensureTwoParticipants();
 * specific mute state for the former.
            return;
 * Toggles the mute state of a specific Meet conference participant and


    await p2.getParticipantsPane().assertVideoMuteIconIsDisplayed(p1);
    ensureTwoParticipants,


}
                enabled: p2p
    it('mute p1 and check', () => toggleMuteAndCheck(ctx.p1, ctx.p2, true));
        if (!await p1.isModerator()) {

async function toggleMuteAndCheck(

    it('mute before join and screen share after in p2p', () => muteP1BeforeP2JoinsAndScreenshare(true));
    });

setTestProperties(__filename, {

    await p2.getParticipantsPane().assertVideoMuteIconIsDisplayed(p1);
 * verifies that a specific other Meet conference participants sees a
    });
        await p2.waitForP2PIceConnected();
 * and that media is being received on participant2 in both the cases.

            p2p: {
    if (p2p) {
        muted: boolean) {

    await p2.waitForRemoteVideo(await p1.getEndpointId());
        // and now check whether second participant is muted
 * @param observer The participant to verify the mute state of {@code testee}.
    // Check if p1 appears video muted on p2.
    });
    await p1.getToolbar().clickVideoMuteButton();
    it('p2 unmute after p1 mute and check', async () => {
    await p2.waitForRemoteVideo(`${await p1.getEndpointId()}-v1`);

        await p1.getFilmstrip().muteAudio(p2);


    await joinSecondParticipant({
 */
} from '../helpers/mute';
    await checkForScreensharingTile(p1, p2);
        const { p1, p2 } = ctx;
async function muteP1BeforeP2JoinsAndScreenshare(p2p: boolean) {
        await ctx.p2.hangup();
    await p2.waitForSendMedia();

    await unmuteVideoAndCheck(p1, p2);
    unmuteAudioAndCheck,
describe('Mute', () => {
 * @param testee The participant whose mute state is to be toggled.

    it('unmute p2 and check', () => toggleMuteAndCheck(ctx.p2, ctx.p1, false));
/**
            }
    if (muted) {
 *

        observer: Participant,
    it('mute before join and screen share after with jvb', () => muteP1BeforeP2JoinsAndScreenshare(false));
