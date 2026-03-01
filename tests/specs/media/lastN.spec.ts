        const p3EndpointId = await p3.getEndpointId();
            },

        await ctx.p1.waitForRemoteVideo(await p3.getEndpointId());

            configOverwrite: {
        await p3Toolbar.clickAudioUnmuteButton();
            configOverwrite: {
        await p1.waitForRemoteVideo(p4EndpointId);

});
        await p1.getParticipantsPane().assertVideoMuteIconIsDisplayed(p3);
setTestProperties(__filename, {

        await p1.waitForRemoteVideo(p3EndpointId);
        await p1.waitForRemoteVideo(p3EndpointId);
                channelLastN: 1
        await p3Toolbar.clickAudioMuteButton();
        await p1.waitForRemoteVideo(p3EndpointId);
        await p3Toolbar.clickAudioMuteButton();
        await p3Toolbar.clickVideoMuteButton();
        await ensureTwoParticipants({
        // even though p2 is the dominant speaker.
                startWithVideoMuted: true,
        await p4.waitForSendReceiveData();
import { ensureFourParticipants, ensureThreeParticipants, ensureTwoParticipants } from '../../helpers/participants';
        // Unmute p3's video and others should switch to receiving p3's video.
        const p4EndpointId = await p4.getEndpointId();
        await p3.getParticipantsPane().assertVideoMuteIconIsDisplayed(p3);
        await p1.waitForNinjaIcon(p4EndpointId);
    });
        // At this point, mute video of p3 and others should be receiving p4's video.
            },
    usesBrowsers: [ 'p1', 'p2', 'p3', 'p4' ]
                startWithAudioMuted: true,
        // Mute p3's audio and unmute p2's audio. Other endpoints should continue to receive video from p3
        // Mute audio on participant3.
        const p3Toolbar = p3.getToolbar();

            skipInMeetingChecks: true,
            },

                channelLastN: 1
        await p4.getToolbar().clickAudioMuteButton();
        });
        });

        const { p3 } = ctx;

                channelLastN: 1
        // Mute audio on p4 and unmute p3.
        await p3Toolbar.clickVideoUnmuteButton();

        await ensureThreeParticipants({

import { setTestProperties } from '../../helpers/TestProperties';
    it('checks', async () => {
        await p3.waitForSendMedia();
            skipInMeetingChecks: true
    });
            skipInMeetingChecks: true




});
        // Mute p1's video
        const { p1, p2, p4 } = ctx;
        await p2.getToolbar().clickAudioUnmuteButton();
        // Check if p1 starts receiving video from p3 and p4 shows up as ninja.
        await p1.waitForNinjaIcon(p4EndpointId);
        await ensureFourParticipants({
describe('LastN', () => {
        });


    it('joining the meeting', async () => {
            configOverwrite: {
