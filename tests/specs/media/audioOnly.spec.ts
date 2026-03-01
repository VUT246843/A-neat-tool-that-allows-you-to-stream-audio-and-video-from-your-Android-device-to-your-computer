        await p1.assertThumbnailShowsAvatar(p1);
        // Mute video on participant1.
    await p2.getParticipantsPane().assertVideoMuteIconIsDisplayed(p1, !muted);

    it('joining the meeting', () => ensureTwoParticipants());
        await p1.getVideoQualityDialog().setVideoQuality(false);
        await setAudioOnlyAndCheck(true);
     */
        .waitForDisplayed({ reverse: !enable });
        // p1 should stay muted since it was muted before audio-only was enabled.

    it('unmute video and check not muted', async () => {
    const { p1, p2 } = ctx;
    // Verify the testee sees itself in the desired muted state.
    it('avatars check', async () => {
/**
    usesBrowsers: [ 'p1', 'p2' ]
     */


    it('mute video, set twice and check muted', async () => {
        const { p1 } = ctx;
        // Enable audio-only mode.
 */
        await verifyVideoMute(true);
    /**

        // Makes sure that the avatar is displayed in the local thumbnail and that the video is not displayed.
        // Disable audio-only mode.
 */

 * Verifies that p1 and p2 see p1 as video muted or not.
        const { p1 } = ctx;
 * p2 participant sees a video mute state for the former.
});
}
});
describe('Audio-only mode', () => {
     * Enables audio only mode for p1 and verifies that the other participant sees participant1 as video muted.
        await verifyVideoMute(true);
    it('set and check', () => setAudioOnlyAndCheck(true));
     * as video muted.
async function verifyVideoMute(muted: boolean) {
    });
 * @param muted

    await p1.driver.$('//div[@id="videoResolutionLabel"][contains(@class, "audio-only")]')
    await p1.getParticipantsPane().assertVideoMuteIconIsDisplayed(p1, !muted);

     */

import { setTestProperties } from '../../helpers/TestProperties';

        await p1.getToolbar().clickVideoMuteButton();

    const { p1 } = ctx;

    /**
    it('disable and check', () => setAudioOnlyAndCheck(false));
    await p1.getVideoQualityDialog().setVideoQuality(enable);
        // Unmute video on participant1.
/**
     * Disables audio only mode and verifies that both participants see p1 as not video muted.
    await verifyVideoMute(enable);
        await verifyVideoMute(false);
setTestProperties(__filename, {
async function setAudioOnlyAndCheck(enable: boolean) {

    /**

}
        await p1.driver.$('//div[@id="dominantSpeaker"]').waitForDisplayed();
     * Mutes video on participant1, toggles audio-only twice and then verifies if both participants see participant1
 * @param enable
    });


    });
     * Verifies that participant1 sees avatars for itself and other participants.

    /**



 * Toggles the audio only state of a p1 participant and verifies participant sees the audio only label and that
    // Verify the observer sees the testee in the desired muted state.

     */
        await ctx.p1.getToolbar().clickVideoUnmuteButton();
import { ensureTwoParticipants } from '../../helpers/participants';

