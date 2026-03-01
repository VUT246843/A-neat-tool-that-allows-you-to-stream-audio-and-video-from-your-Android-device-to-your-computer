                },


            configOverwrite: {
        await p1.getParticipantsPane().assertVideoMuteIconIsDisplayed(p2);

        ]);
        await p3.getParticipantsPane().assertVideoMuteIconIsDisplayed(p2, true);
        await p2.getLargeVideo().assertPlaying();
                    enabled: true

        await p1.waitForAudioMuted(p2, false);
    });
                    debugAudioLevels: true
        await p2.waitForIceConnected();


        await unmuteVideoAndCheck(p2, p1);

        await p3.getToolbar().clickAudioUnmuteButton();
        // Enable screenshare on p1.
                testing: {
                },

import { setTestProperties } from '../../helpers/TestProperties';
        await p2.getFilmstrip().assertAudioMuteIconIsDisplayed(p2, true);
                }

        await p3.getParticipantsPane().assertVideoMuteIconIsDisplayed(p2, true);
        await p2.getParticipantsPane().assertVideoMuteIconIsDisplayed(p1);
        await Promise.all([ p1.waitForAudioMuted(p2, true), p2.waitForAudioMuted(p1, false) ]);
        const p2EndpointId = await p2.getEndpointId();
        await p3.waitForIceConnected();
        };
        await joinSecondParticipant({


        const { p2 } = ctx;
                p2p: {

        const settingsDialog = p1.getSettingsDialog();

                    enabled: true
        await ensureTwoParticipants(options);
        await settingsDialog.waitForDisplay();
        await p2.waitForReceiveMedia();
        await Promise.all([ p1.waitForAudioMuted(p2, true), p2.waitForAudioMuted(p1, true) ]);



        await Promise.all([

        await ensureTwoParticipants(options);
    });
        await ensureOneParticipant(options);
    it('startWithAudioVideoMuted=true can unmute', async () => {

    usesBrowsers: [ 'p1', 'p2', 'p3' ]
        const p2ID = await p2.getEndpointId();
        await p2.waitForRemoteVideo(p1EndpointId, false);
                }
        };
    it('checkboxes test', async () => {
        // Maybe disable if there is FF or Safari participant.

        await p1.getToolbar().clickAudioMuteButton();

    hangupAllParticipants,
    });

        await p3.getFilmstrip().assertAudioMuteIconIsDisplayed(p2, true);
        await Promise.all([
        // large video while in P2P.
        await p3.getParticipantsPane().assertVideoMuteIconIsDisplayed(p1, true);
        await unmuteVideoAndCheck(p1, p2);
                testing: {

                },
        // Check if p2's video is playing on p1.
            p2.waitForAudioMuted(p3, true)
        await p1.getParticipantsPane().assertVideoMuteIconIsDisplayed(p2, true);
        await p1.log('configOptionsTest, unmuted third participant');
            }
            configOverwrite: {
        const { p1, p2 } = ctx;
            p1.getLargeVideo().waitForSwitchTo(await p2.getEndpointId()),


        await p3.waitForReceiveMedia();
        await Promise.all([
            }
    joinThirdParticipant
        await p2.getToolbar().clickAudioMuteButton();
        await p2.waitForAudioMuted(p1, true);
                testing: {
            configOverwrite: {
                startAudioMuted: 2,

        // Mute p2's video just before p3 leaves.



        await ensureOneParticipant(options);

        await hangupAllParticipants();
        await p2.waitForAudioMuted(p1, false);



        await p1.getToolbar().clickAudioUnmuteButton();
    ensureTwoParticipants,
                p2p: {
        await p1.getParticipantsPane().assertVideoMuteIconIsDisplayed(p2);



            configOverwrite: {
        await p1.getToolbar().clickSettingsButton();
        await p1.waitForRemoteVideo(p2EndpointId, true);
        await p2.getToolbar().clickVideoMuteButton();
        await p2.getParticipantsPane().assertVideoMuteIconIsDisplayed(p2);
            }
        await unmuteVideoAndCheck(p2, p3);
                startVideoMuted: 2
                startWithVideoMuted: false,
        //  Check that p1 doesn't get muted.
} from '../../helpers/participants';
                startWithAudioMuted: true,
        await p2.waitForIceConnected();
        await joinThirdParticipant(options);

        await p1.getFilmstrip().assertAudioMuteIconIsDisplayed(p1, true);
    it('startWithVideoMuted=true can unmute', async () => {
            }
        await p3.getFilmstrip().assertAudioMuteIconIsDisplayed(p2, true);
        // Add a third participant and check p3 is able to receive audio and video from p2.
        await checkForScreensharingTile(p1, p1);
    });

        await settingsDialog.setStartVideoMuted(true);
        await p2.getParticipantsPane().assertVideoMuteIconIsDisplayed(p1);
    joinSecondParticipant,
        // Mute p2's video just before p3 joins.



        await joinThirdParticipant({
                startWithVideoMuted: false

    });
        await p2.getFilmstrip().assertAudioMuteIconIsDisplayed(p2);
        // Unmute and see if the audio works
        // Unmute p1's both audio and video and check on p2.
        });

                    enabled: true
        await p2.waitForAudioMuted(p1, false);
            }

        await p2.waitForReceiveMedia();

        await p2.getParticipantsPane().assertVideoMuteIconIsDisplayed(p1, true);
        await p1.waitForRemoteVideo(p2EndpointId, false);
                startWithVideoMuted: true
                startWithAudioMuted: true,

        // Enable video on p2 and check if p2 appears unmuted on p1.

        const { p3 } = ctx;

        };

            p2.getLargeVideo().waitForSwitchTo(await p1.getEndpointId())
        await p2.getParticipantsPane().assertVideoMuteIconIsDisplayed(p2, true);
                startWithAudioMuted: false,

});
        await joinSecondParticipant(options);
        await p2.waitForIceConnected();

        await p2.waitForSendMedia();

        await hangupAllParticipants();
        await hangupAllParticipants();
        await p3.getParticipantsPane().assertVideoMuteIconIsDisplayed(p3);
        await p1.log(`Start configOptionsTest, second participant: ${p2ID}`);
import {
                }


        await p2.getToolbar().clickVideoMuteButton();

        await settingsDialog.setStartAudioMuted(true);
                    testMode: true,
        await p3.getFilmstrip().assertAudioMuteIconIsDisplayed(p1, true);
            p1.waitForAudioMuted(p3, true),
        const { p1 } = ctx;
        const { p3 } = ctx;
        await hangupAllParticipants();
    it('config options test', async () => {
        ]);
        await p1.getParticipantsPane().assertVideoMuteIconIsDisplayed(p1, true);
        const { p1 } = ctx;
                testing: {
        await checkForScreensharingTile(p1, p3);
setTestProperties(__filename, {
        await p3.hangup();
        // Participant 3 should be muted, 1 and 2 unmuted.
        await p3.waitForIceConnected();


        const { p3 } = ctx;
        // Explicitly enable P2P due to a regression with unmute not updating

import { unmuteVideoAndCheck } from '../helpers/mute';
        await p1.getLargeVideo().assertPlaying();
        await p1.waitForAudioMuted(p2, true);
        const options = {

    ensureOneParticipant,
describe('Start muted', () => {

        await joinSecondParticipant(options);

                    enabled: true
        const options = {
                    testMode: true,
        const p1EndpointId = await p1.getEndpointId();
    it('startWithAudioMuted=true can unmute', async () => {
});
        await p2.getToolbar().clickVideoUnmuteButton();

        const { p1, p2 } = ctx;
            configOverwrite: {
            p2.getToolbar().clickAudioUnmuteButton(), p2.getToolbar().clickVideoUnmuteButton()
        await joinThirdParticipant(options);
                }
            configOverwrite: {
    });
        p1.getToolbar().clickDesktopSharingButton();
        await p1.getLargeVideo().assertPlaying();
        await settingsDialog.submit();
                    testMode: true,
                p2p: {

        await p3.getFilmstrip().assertAudioMuteIconIsDisplayed(p3);
        await p1.waitForAudioMuted(p3, false /* unmuted */);
            configOverwrite: {
            } };

        });
        await p1.getParticipantsPane().assertVideoMuteIconIsDisplayed(p2, true);
                p2p: {
        const { p2 } = ctx;

                    testMode: true,
        await p1.getToolbar().clickAudioUnmuteButton();
                    enabled: true
        await ensureOneParticipant(options);
        const options = {
        };
                    debugAudioLevels: true

        // we need 1 and 2 to be muted so we have a dominant speaker event for correct audio levels calculations
                },
        const { p1, p2 } = ctx;
        await checkForScreensharingTile(p1, p2);

                    debugAudioLevels: true
                startWithVideoMuted: true,
    checkForScreensharingTile,
        const { p1, p2 } = ctx;
            }
        // Unmute p2 and check if its video is being received by p1 and p3.

        const options = {
                    debugAudioLevels: true
        ]);

                },
        await p3.waitForReceiveMedia();

    it('test p2p JVB switch and switch back', async () => {
                p2p: {
        // Check if a remote screenshare tile is created on p2.
        const options = {
        await p2.getFilmstrip().assertAudioMuteIconIsDisplayed(p1, true);

