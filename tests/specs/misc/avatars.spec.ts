
            // and fails with an error of: expected number of remote streams:1 in 15s for participant1

        await p1.getParticipantsPane().assertVideoMuteIconIsDisplayed(p1);

        expect(await p1.getLocalVideoAvatar()).toContain(HASH);
        // check if the local avatar in the toolbar menu has changed
            // strangely this test when FF is involved, missing source mapping from jvb
        await p3.assertDisplayNameVisibleOnStage(
        // Check if avatar on large video is the same as on local thumbnail
        await p2.getToolbar().clickVideoMuteButton();



        await p2.getParticipantsPane().assertVideoMuteIconIsDisplayed(p2);

        const p2EndpointId = await p2.getEndpointId();
                timeoutMsg: `Large video did not switch to ${p1.name}`
        await p3.assertThumbnailShowsAvatar(p1, false, false, true);

            await Promise.all([ p2.waitForRemoteStreams(2), p3.waitForRemoteStreams(2) ]);

    );

        expect(await p1.getSettingsDialog().getEmail()).toBe(EMAIL);

        // p1 pins p2's video

        await p1.hangup();

        // p2 has the default avatar
        // The avatar should be on large video and display name instead of an avatar, local video displayed
        await p3.assertThumbnailShowsAvatar(p3, true);
        // and the m from the text can mute the call, check whether we are muted

        // check if the avatar in the large video has changed
            });
        // Click on p2's video
                 timeout: 3000, // give more time for the initial download of the image


        const { p1 } = ctx;
            await p3.getFilmstrip().getRemoteDisplayName(p2EndpointId)
        // the problem on FF where we can send keys to the input field,
        // Now both p1 and p2 have video muted
        await p3.driver.waitUntil(
            skipDisplayName: true
             });
            });
            await p3.getFilmstrip().getRemoteDisplayName(p1EndpointId));
        })
        await p3.assertThumbnailShowsAvatar(p1, false, false, true);
        await ensureTwoParticipants({
        await unmuteVideoAndCheck(p1, p2);
        await p3.hangup();
        await p1.driver.waitUntil(

        await ensureTwoParticipants({
        // When the first participant is FF because of their audio mic feed it will never become dominant speaker
        await p3.assertThumbnailShowsAvatar(p3, true);
            await Promise.all([ p2.waitForRemoteStreams(1), p3.waitForRemoteStreams(1) ]);






        await p3.assertThumbnailShowsAvatar(p2, false, true);
    });


        await p3.getFilmstrip().pinParticipant(p1);
        // Unmute - now local avatar should be hidden and local video displayed
        }
        const settings = p1.getSettingsDialog();
            async () => await p3.getLargeVideo().getResource() === p1EndpointId, {

        await p3.getFilmstrip().pinParticipant(p2);
        const { p3 } = ctx;
        await ensureThreeParticipants({

                 timeoutMsg: 'Avatar has not changed for p1'
        expect(await p1.getSettingsDialog().getEmail()).toBe(EMAIL);


        await p1.getToolbar().clickProfileButton();
            return;

        await p1.getFilmstrip().pinParticipant(p2);
    });
describe('Avatar', () => {
});
            skipInMeetingChecks: true
        // we check whether the default avatar of participant2 is displayed on both sides
        );
                  timeout: 2000,
        await p1.assertThumbnailShowsAvatar(p1, false, false, true);
        await settings.submit();
        // and no audio track will be received by the third participant and video is muted,
import { ensureThreeParticipants, ensureTwoParticipants } from '../../helpers/participants';
        await settings.waitForDisplay();
                timeout: 5000,
        await p3.assertThumbnailShowsAvatar(p2, false, true);

                timeout: 2000,
        await p1.getToolbar().clickVideoMuteButton();

                timeoutMsg: 'Avatar has not changed for p1 on p2'
        const p1EndpointId = await p1.getEndpointId();
        await p2.getParticipantsPane().assertVideoMuteIconIsDisplayed(p1);
        expect(await p2.getLargeVideo().getAvatar()).toContain(HASH);
        const { p1, p2 } = ctx;

        await settings.setEmail(EMAIL);

const HASH = '38f014e4b7dde0f64f8157d26a8c812e';
        await p2.getParticipantsPane().assertVideoMuteIconIsDisplayed(p1);
                timeout: 2000,
        const p1EndpointId = await p1.getEndpointId();
const EMAIL = 'support@jitsi.org';
        });

        // Check if avatar is displayed on p1's local video thumbnail

              async () => await p2.getLargeVideo().getAvatar() === p1LargeSrc, {
        await p2.getFilmstrip().pinParticipant(p1);
    });
        // Unmute p1's and p2's videos
        // Join p2
        await p1.getToolbar().clickProfileButton();

    it('email persistence', async () => {

                timeout: 2000,
        await p1.getParticipantsPane().assertVideoMuteIconIsDisplayed(p1);

        // check if the avatar in the local thumbnail has changed

            });
            async () => (await p2.getFilmstrip().getAvatar(p1EndpointId))?.includes(HASH), {
            async () => (await p1.getLargeVideo().getAvatar())?.includes(HASH), {
        expect(await p3.getFilmstrip().getAvatar(p1EndpointId)).toBe(p1ThumbSrc);
        // that's why we need to do a different check that expects any track just from p2
        } else {

            skipDisplayName: true
        });
        await p2.assertDefaultAvatarExist(p2);

            });
    it('change and check', async () => {

                  timeoutMsg: 'Avatar on large video did not change'
import { setTestProperties } from '../../helpers/TestProperties';
        // The avatar should be on large video and display name instead of an avatar, local video displayed
        }
            async () => await p3.getLargeVideo().getResource() === p2EndpointId, {
        await p2.getFilmstrip().assertAudioMuteIconIsDisplayed(p1, true);
        await p1.getToolbar().clickVideoMuteButton();
        await p2.assertDefaultAvatarExist(p1);
        if (p1.driver.isFirefox) {
        await p1.driver.waitUntil(

        const { p2 } = ctx;

        await p3.getFilmstrip().pinParticipant(p3);
        p1 = ctx.p1;
setTestProperties(__filename, {
                timeoutMsg: 'Avatar on large video did not change'
        // Check if p1's avatar is on large video now
        await p1.getParticipantsPane().assertVideoMuteIconIsDisplayed(p2);
        // check default avatar for p1 on p2
    it('when video muted', async () => {
        await p2.driver.waitUntil(
        // Verify that p1 is muted from the perspective of p2
import { unmuteVideoAndCheck } from '../helpers/mute';
        await p1.asserLocalThumbnailShowsVideo();
        await p1.assertDefaultAvatarExist(p2);



        if (p1.driver.isFirefox) {
            skipDisplayName: true


              });

    it('setup the meeting', () =>
        // Click on p1's video

        const p1LargeSrc = await p1.getLargeVideo().getAvatar();
                timeoutMsg: `Large video did not switch to ${p2.name}`
        });
             async () => (await p1.getToolbar().getProfileImage())?.includes(HASH), {
        await ctx.p2.hangup();
        // Start the third participant
        await p2.driver.waitUntil(

        const p1ThumbSrc = await p1.getLocalVideoAvatar();

        ensureTwoParticipants({
});
        expect(p1ThumbSrc).toBe(p1LargeSrc);
        await unmuteVideoAndCheck(p1, p2);
        await p1.getToolbar().clickProfileButton();
        // Mute p1's video
        // Pin local video and verify avatars are displayed
        let { p1 } = ctx;


        await p3.assertDisplayNameVisibleOnStage(
    usesBrowsers: [ 'p1', 'p2', 'p3' ]
        await p3.driver.waitUntil(

