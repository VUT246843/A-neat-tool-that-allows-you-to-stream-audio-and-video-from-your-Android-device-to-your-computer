        expect(await p4.execute(() => JitsiMeetJS.app.testing.isLargeVideoReceived())).toBe(true);
        await p2.getFilmstrip().assertNoGapsInFilmstrip();
     * A case where a non-dominant speaker is sharing screen for a participant in low bandwidth mode
describe('Desktop sharing', () => {

            }
                    enabled: true
        await p4.waitForNinjaIcon(p2EndpointId);
        await ensureThreeParticipants({

            });
                startWithAudioMuted: false,
     * Ensure screen share is still visible when the call switches from jvb to p2p and back.
                }
        await checkForScreensharingTile(p2, p1);
        await p2.getToolbar().clickStopDesktopSharingButton();

     * in p2p mode, i.e., share is restarted when user is in p2p mode and then the call switches over to jvb mode.
        await checkForScreensharingTile(p1, p2);
        // Check if the remote screen share thumbnail disappears on p1.

        expect(await p2.execute(() => JitsiMeetJS.app.testing.isLargeVideoReceived())).toBe(true);
        await p1.getToolbar().clickAudioMuteButton();
     * Ensures screen share is still visible when the call switches from p2p to jvb connection.

        });
        await hangupAllParticipants();


            timeoutMsg: 'expected remote screen share to be on large'
     * A case where first participant is muted (a&v) and enters low bandwidth mode,
        await hangupAllParticipants();
        const { p4 } = ctx;
        await checkForScreensharingTile(p2, p2);
        const p2EndpointId = await p2.getEndpointId();
});
            }
        const p2ScreenShareTileId = `${p2EndpointId}-v1`;
            APP?.conference?.onToggleAudioOnly();

        await checkForScreensharingTile(p2, p1);
        await p4.waitForRemoteVideo(p1EndpointId);
                startWithVideoMuted: false
     * A problem fixed in jitsi-meet 3657c19e and d6ab0a72.
        await checkForScreensharingTile(p1, p3);
        // the video should be playing
        await hangupAllParticipants();
            timeout: 5_000,
        await p3.waitForParticipantOnLargeVideo(`${p2EndpointId}-v1`);

        });
            configOverwrite: {
        await ensureFourParticipants({
        });
        await p2.waitForParticipantOnLargeVideo(p1ScreenShareTileId);
        });
                p2p: {
        await checkForScreensharingTile(p3, p4);
        await p3.getFilmstrip().assertNoGapsInFilmstrip();

                }
        // p3 leaves the call.
        await p1.waitForP2PIceConnected();
    /**
        // Start share on both p1 and p2.
            }
        });
    it('screen sharing toggle before others join', async () => {
                p2p: {
        // Let's switch and check, muting participant 2 and unmuting 1 will leave participant 1 as dominant
        }, SET_AUDIO_ONLY);
            }
        });
    });
        await p2.waitForParticipantOnLargeVideo(p1ScreenShareTileId);


        await p3.getToolbar().clickDesktopSharingButton();

            configOverwrite: {
        await p3.hangup();
        await p1.waitForP2PIceConnected();
        // Check if a remote screen share tile is created on p1.
        const p2EndpointId = await p2.getEndpointId();
        await ensureTwoParticipants({
        const { p1, p2, p3 } = ctx;
        await checkForScreensharingTile(p2, p3);
                },

            }
        await p1.driver.waitUntil(() => p1.execute(() => JitsiMeetJS.app.testing.isLargeVideoReceived()), {
    });

    it('p2p to jvb switch', async () => {
        });
            APP?.conference?.onToggleAudioOnly();

                startWithAudioMuted: true
            APP?.store?.dispatch({
        // Check if the local screen share thumbnail disappears on p2.
        await p3.waitForParticipantOnLargeVideo(p1ScreenShareTileId);

        await checkForScreensharingTile(p3, p1);
        }, SET_AUDIO_ONLY);
        await checkForScreensharingTile(p2, p1);
        // p1, p3, p4 are audio muted, so p2 should eventually become dominant speaker.
     */
        await p1.getFilmstrip().assertNoGapsInFilmstrip();
        });
        await p4.getFilmstrip().assertNoGapsInFilmstrip();

                }
        // Check if a local screen share tile is created on p2.
    ensureTwoParticipants,
    usesBrowsers: [ 'p1', 'p2', 'p3', 'p4' ]
    });

        await p3.getFilmstrip().assertNoGapsInFilmstrip();
    /**
     */
    ensureOneParticipant,
    });
        await checkForScreensharingTile(p1, p2, true);
            },
        await p2.getToolbar().clickAudioMuteButton();
        await p3.hangup();
     * Ensure that screen share is still visible in jvb connection when share is toggled while the users are
            timeoutMsg: 'expected remote screen share to be on large'

                p2p: {
        await checkForScreensharingTile(p1, p1);
        await p1.waitForP2PIceConnected();
                    backToP2PDelay: 3,
} from '../../helpers/participants';
        // Check that there are no gaps in the filmstrip when participant joins during screensharing
                startWithAudioMuted: true,
        await ensureOneParticipant({

        await p3.hangup();

                startWithAudioMuted: true,
    it('p2p to jvb switch and back', async () => {
        // Wait for p1 and p2 to switch back to p2p.
            skipInMeetingChecks: true
            },
    checkForScreensharingTile,
     */
                audioOnly: true
        // The desktop sharing participant should be on large
        await p1.getToolbar().clickDesktopSharingButton();
        await p3.getToolbar().clickAudioMuteButton();
        // Wait for p1 and p2 to switch back to p2p.
        await p4.waitForNinjaIcon(p1EndpointId);
        await p1.execute(type => {
        await p4.waitForRemoteVideo(p2EndpointId);
                startWithVideoMuted: true
                startWithAudioMuted: true,
            APP?.store?.dispatch({

                type,
        expect(await p1.getLargeVideo().getResource()).toBe(`${await p3.getEndpointId()}-v1`);
            configOverwrite: {
            skipInMeetingChecks: true
        // And the video should be playing
     * where only a screen share can be received. A bug fixed in jvb 0c5dd91b where the video was not received.
        await ensureThreeParticipants({
        await checkForScreensharingTile(p2, p2, true);
        // Check if a remote screen share tile is created on all participants.
            configOverwrite: {
                    enabled: true

        await p2.getToolbar().clickDesktopSharingButton();
        await checkForScreensharingTile(p1, p2);
        await checkForScreensharingTile(p2, p4);


        const { p1, p2 } = ctx;
        await ctx.p2.getToolbar().clickDesktopSharingButton();
            configOverwrite: {
        await checkForScreensharingTile(p1, p3);
        await p2.waitForP2PIceConnected();
                },
        // p1 stops share.
        await checkForScreensharingTile(p1, p1);
            timeout: 5_000,

        await checkForScreensharingTile(p2, p2);
import { setTestProperties } from '../../helpers/TestProperties';
        await ensureTwoParticipants({
        await checkForScreensharingTile(p1, p3);
        const p2EndpointId = await p2.getEndpointId();

    });

    it('start', async () => {
     * the second one is audio muted only and the one sharing (the third) is dominant speaker.
     */
     */

        // Wait for p1 and p2 to switch back to p2p.

        await checkForScreensharingTile(p2, p2);
        await p1.getToolbar().clickDesktopSharingButton();
        // Check p2 and p3 are able to see p1's share.
                },
                audioOnly: true
    });
        await checkForScreensharingTile(p3, p2);

        await p2.waitForP2PIceConnected();
            skipInMeetingChecks: true
        // Add another participant to verify multiple screenshares are visible without gaps in filmstrip.
        await p1.waitForParticipantOnLargeVideo(`${await p2.getEndpointId()}-v1`);
                    enabled: true
        const { p2, p3 } = ctx;
    ensureFourParticipants,

        await p1.waitForP2PIceConnected();

import { SET_AUDIO_ONLY } from '../../../react/features/base/audio-only/actionTypes';

    /**
     *  Ensures screen share is visible when a muted screen share track is added to the conference, i.e.,
                    backToP2PDelay: 3,
                    enabled: true
});
        const { p1, p2, p3 } = ctx;



        await checkForScreensharingTile(p2, p3);
                startWithAudioMuted: false
        await checkForScreensharingTile(p2, p1);
                filmstrip: {
            configOverwrite: {
        await p1.getToolbar().clickAudioMuteButton();
        });
        });
                startWithVideoMuted: false
        await p3.getToolbar().clickAudioMuteButton();
                startWithVideoMuted: false
        // Stop share on both p1 and p2.

        await p3.getToolbar().clickDesktopSharingButton();
    });
    /**
        // p4 has lastN=2 and has selected p3. With p2 being dominant speaker p4 should eventually
    hangupAllParticipants
        await checkForScreensharingTile(p1, p4);
        // p1 starts share when alone in the call.
                p2p: {
            configOverwrite: {

        // Participants should display p3 on-stage because it is screensharing.

        const { p1 } = ctx;

        });

        });
        // the video should be playing
            configOverwrite: {

        // p3 is screensharing.

        // see video for [p3, p2] and p1 as ninja.
        await ensureThreeParticipants({
        await p1.getFilmstrip().assertNoGapsInFilmstrip();
        // a workaround to directly set audio only mode without going through the rest of the settings in the UI
        await p2.getToolbar().clickStopDesktopSharingButton();
            configOverwrite: {

        await checkForScreensharingTile(p3, p2);
            },
        await checkForScreensharingTile(p1, p2);
                    stageFilmstripParticipants: 2
        await p4.getFilmstrip().assertNoGapsInFilmstrip();
                    backToP2PDelay: 3,

    });
        const { p1, p2, p3 } = ctx;
        await p1.waitForParticipantOnLargeVideo(p2ScreenShareTileId);
        await ensureOneParticipant();
        await checkForScreensharingTile(p1, p2);
        await p1.execute(type => {
    it('with lastN', async () => {
        const { p2, p3 } = ctx;
                }
                p2p: {


    /**
            }
                channelLastN: 2,


        });
     * Test screensharing with lastN. We add p4 with lastN=2 and verify that it receives the expected streams.

        const { p1, p2 } = ctx;
        await p2.getToolbar().clickDesktopSharingButton();

        const { p1 } = ctx;
        // Participant4 should eventually see video for [p3, p1] and p2 as a ninja.
        const { p4 } = ctx;
        const p1ScreenShareTileId = `${p1EndpointId}-v1`;
        const { p2, p3 } = ctx;
            configOverwrite: {

        // Start desktop share on p1.
        await ensureThreeParticipants({

                    backToP2PDelay: 3,
     */
                p2p: {
                type,
        await p1.getToolbar().clickDesktopSharingButton();
        await p1.driver.waitUntil(() => p1.execute(() => JitsiMeetJS.app.testing.isLargeVideoReceived()), {
                    enabled: true
        await ensureFourParticipants({
        // Check if a new tile for p1's screen share is created on both p1 and p2.
                startWithAudioMuted: false
        await checkForScreensharingTile(p2, p3);
        await p1.getToolbar().clickStopDesktopSharingButton();
        const p1EndpointId = await p1.getEndpointId();
        });
        await p2.waitForP2PIceConnected();
        // p2 starts share when in p2p.
        // Add p3 back to the conference and check if p1 and p2's shares are visible on p3.
        await p1.getToolbar().clickStopDesktopSharingButton();
        const { p1 } = ctx;

        // Makes sure p2's share is visible on p1.
            }
        await ensureOneParticipant({
                startWithVideoMuted: false
        await p1.getToolbar().clickDesktopSharingButton();
        // The video should be playing.
    ensureThreeParticipants,

        await checkForScreensharingTile(p3, p1);

    /**
        await hangupAllParticipants();
                    backToP2PDelay: 3,


        // Check if a remote screen share tile is created on p1 and p2 after switching back to p2p.
     *  users starts and stops the share before anyone else joins the call.

setTestProperties(__filename, {

        await p3.getToolbar().clickDesktopSharingButton();

                    enabled: true
            }
        await p1.getToolbar().clickAudioUnmuteButton();
            }
        await checkForScreensharingTile(p2, p1);
        // a workaround to directly set audio only mode without going through the rest of the settings in the UI


     */
            });
     *  The call switches to jvb and then back to p2p.
            configOverwrite: {
        // p1 starts share again when call switches to jvb.

                startWithAudioMuted: false,
        // We now have p1, p2, p3, p4.

        const { p1, p2, p3 } = ctx;
    });


    it('stop screen sharing and back', async () => {
            configOverwrite: {

        await ensureThreeParticipants({
        await p2.getToolbar().clickDesktopSharingButton();
    /**
    it('audio only and non dominant screen share', async () => {

        });

        // Check if p1 and p2 can see each other's shares in p2p.
        // Make sure p2 see's p1's share after the call switches back to p2p.

    it('stop', async () => {
        await ensureThreeParticipants({
        await ensureThreeParticipants({
        await checkForScreensharingTile(p3, p2);
        await checkForScreensharingTile(p3, p1);
        // Call switches to jvb.

    it('audio only and dominant screen share', async () => {

import {
        const p1EndpointId = await p1.getEndpointId();
