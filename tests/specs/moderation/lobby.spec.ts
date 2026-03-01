        await p1ParticipantsPane.open();
    it('shared password', async () => {
        // moderator allows access

        const { p1, p2, p3 } = ctx;

        ...options,
        // ensure 3 participants in the call will check for the third one that muc is joined, ice connected,
        await p3.waitForReceiveMedia();
        await p3.waitForRemoteStreams(2);


        await p1ParticipantsPane.close();
        await p1.getNotifications().allowLobbyParticipant();
        await p3.getNotifications().waitForLobbyAccessDeniedNotification();
    }

        if (!await ctx.p1.execute(() => APP.conference._room.isLobbySupported())) {
        await lobbyScreen.enterPassword(roomPasscode);
    };

    } else {
    hangupAllParticipants
        // we need to check remote participants as isInMuc has not changed its value as

    // new screen, is password button shown
        await p3.hangup();
    usesBrowsers: [ 'p1', 'p2', 'p3' ]
        // let's retry to enter the lobby and approve this time

        await p3.waitToJoinMUC();
        await p2SecurityDialog.toggleLobby();
        await p3.hangup();
        await p1.waitForRemoteStreams(2);
                timeoutMsg: 'p2 is not moderator after p1 leaves'
        await p1.getToolbar().clickSecurityButton();
        await p3.hangup();

        await hangupAllParticipants();

    if (enterDisplayName) {
    it('entering in lobby and deny', async () => {
    // WebParticipant participant3 = getParticipant3();


    expect(await displayNameInput.isDisplayed()).toBe(true);
        expect(classes.includes('disabled')).toBe(false);
    // check display name is visible
        expect(await p3.getLobbyScreen().isLobbyRoomJoined()).toBe(false);
        await p2SecurityDialog.waitForLobbyEnabled();
        const p1SecurityDialog = p1.getSecurityDialog();
        await p1ParticipantsPane.close();
        // moderator rejects access
        screen = p3.getPreJoinScreen();
 * @param participant The participant that is moderator in the meeting.
        // check the denied one is out of lobby, sees the notification about it
        await screen.enterDisplayName(P3);

                timeout: 2000,
    } else {
        expect(await p3.getLobbyScreen().isLobbyRoomJoined()).toBe(true);
    });
    });
    // ParentPreMeetingScreen lobbyScreen;
        await hangupAllParticipants();
}
        await p1ParticipantsPane.open();
        // when the moderator leaves. For environments where this is not the case, the test is skipped.
        await ensureTwoParticipants();

        // click join button
        await p1.hangup();

    const passwordButton = screen.getPasswordButton();


        async () => !await joinButton.isExisting() || !await joinButton.isDisplayed() || !await joinButton.isEnabled(),
    // participant 3 should be now on pre-join screen

        const { p1 } = ctx;
 *
        {
        await p3.getNotifications().closeLocalLobbyAccessDenied();
        await p3.getNotifications().waitForLobbyAccessDeniedNotification();
        const name = await p1.getFilmstrip().getRemoteDisplayName(await p3.getEndpointId());
        await ensureTwoParticipants();

    await p1.getToolbar().clickSecurityButton();
    const joinButton = screen.getJoinButton();

                timeoutMsg: 'p2 is not moderator after p1 leaves'
    it('reject from participants pane', async () => {
        await p3.driver.$('.dialog.leaveReason').isExisting();
        await enableLobby();
    const options: IJoinOptions = { };
        await p1.driver.waitUntil(
        await p1ParticipantsPane.rejectLobbyParticipant(knockingParticipant);
    expect(await p1SecurityDialog.isLobbyEnabled()).toBe(false);
    it('enable with more than two participants', async () => {
        await enterLobby(p1, true);
    const p1SecurityDialog = p1.getSecurityDialog();
        const name = await p1.getFilmstrip().getRemoteDisplayName(await p3.getEndpointId());
setTestProperties(__filename, {


        // The test below is only correct when the environment is configured to automatically elect a new moderator
    const { p3 } = ctx;

        await ensureThreeParticipants();
        await p1ParticipantsPane.rejectLobbyParticipant(knockingParticipant);

    await p2.getNotifications().closeLobbyEnabled();
        // now fill in password
        skipDisplayName: true,
        expect(notificationText.includes(P1)).toBe(true);
        await p1ParticipantsPane.close();
        await enterLobby(p1, false);
        const roomPasscode = String(Math.trunc(Math.random() * 1_000_000));
        skipPrejoinButtonClick: true
        if (!usePreJoin) {
import type { IJoinOptions } from '../../helpers/types';
    let screen: PreMeetingScreen;
        await p3.waitToJoinMUC();
        skipInMeetingChecks: true,



        await p2.driver.waitUntil(

        await p3.hangup();



        await enableLobby();
        await p3.hangup();
        // check the denied one is out of lobby, sees the notification about it
    });



        const { p3 } = ctx;



        );
        if (!expectations.autoModerator) {
        // now check third one display name in the room, is the one set in the prejoin screen
async function enterLobby(participant: Participant, enterDisplayName = false, usePreJoin = false) {

        await p3.waitForIceConnected();

        await p3.waitForIceConnected();

            return;
        skipWaitToJoin: true,
        const { p1, p2 } = ctx;
        await p1ParticipantsPane.admitLobbyParticipant(knockingParticipant);
        await p1.getFilmstrip().assertNoGapsInFilmstrip();
        const p2SecurityDialog = p2.getSecurityDialog();
    await p1SecurityDialog.waitForDisplay();

    // check that moderator (participant 1) sees notification about participant in lobby
    it('enable', async () => {

        const p1SecurityDialog = p1.getSecurityDialog();


        const notificationText = await p2.getNotifications().getLobbyParticipantAccessDenied();
        expect(await p3.getLobbyScreen().isLobbyRoomJoined()).toBe(false);
        await p1.hangup();


        // the first time tests is executed we need to enter display name,
            timeoutMsg: 'Join button is still available for p3'

    options.configOverwrite = {
    it('change of moderators in lobby', async () => {
        expect(await p2SecurityDialog.isLobbySectionPresent()).toBe(false);

        const lobbyScreen = p3.getLobbyScreen();

        await p1.getToolbar().clickSecurityButton();


    });
        const p1ParticipantsPane = p1.getParticipantsPane();
        const { p1 } = ctx;

        await p1SecurityDialog.waitForDisplay();
    it('lobby user leave', async () => {
        prejoinConfig: {
    it('approve from participants pane', async () => {
    it('reject and approve in pre-join', async () => {
    await p2SecurityDialog.clickCloseButton();


        await p3.hangup();
    expect(await joinButton.isExisting()).toBe(true);
        await ensureOneParticipant();


        const { p1, p2 } = ctx;
            {

 * Expects that lobby is enabled for the room we will try to join.
        const { p1 } = ctx;
        await p1.getNotifications().waitForHideOfKnockingParticipants();

        await p2.driver.waitUntil(
        const { p3 } = ctx;
        const knockingParticipant = await enterLobby(p1, false);
    // check no join button
        await p1.hangup();
        await p3.waitForRemoteStreams(2);
        const { p3 } = ctx;

        await p3.waitForRemoteStreams(2);
        expect(notificationText.includes(P1)).toBe(true);
        await enterLobby(p1, false);
    await ensureThreeParticipants({
        );


        const { p1, p2, p3 } = ctx;

        await lobbyScreen.getJoinButton().click();

    expect(await screen.isLobbyRoomJoined()).toBe(true);

        const lobbyScreen = p2.getLobbyScreen();
        await p3.waitToJoinMUC();

    await p2SecurityDialog.waitForDisplay();
        // moderator rejects access

        // check join button is enabled



        );


        // moderator rejects access

        await p3.waitForReceiveMedia();
});
    ensureThreeParticipants,
        }

});
        const { p1 } = ctx;
        // The test below is only correct when the environment is configured to automatically elect a new moderator
        await ensureTwoParticipants();
    await screen.waitToJoinLobby();
    }
        // enter display name
import type PreMeetingScreen from '../../pageobjects/PreMeetingScreen';

                timeout: 3000,

            timeout: 2_000,

        await p1SecurityDialog.toggleLobby();
        // deny notification on 2nd participant
        await p1SecurityDialog.waitForDisplay();

    expect(await passwordButton.isExisting()).toBe(true);
    }
        }

        let classes = await joinButton.getAttribute('class');
        }
    const { p1, p2 } = ctx;
        // hanging up the first one, which is moderator and second one should be


        await p1.getNotifications().rejectLobbyParticipant();
    // let's close the security dialog, or we will not be able to click
    // click join button
        const { p1, p2 } = ctx;


            async () => !await p3.getLobbyScreen().isLobbyRoomJoined(),
        await p2SecurityDialog.waitForLobbyEnabled();
        await p3.waitForIceConnected();
        // media is being receiving and there are two remote streams

/**


        expect(name).toBe(P3);
        // check Lobby room left
    });
        screen = p3.getLobbyScreen();
import { P1, P3, Participant } from '../../helpers/Participant';
        expect(await p3.getLobbyScreen().isLobbyRoomJoined()).toBe(false);
        // this check needs to be added once the functionality exists
        await p3.driver.waitUntil(

 * a participant sees the lobby screen, next time visiting the page display name will be pre-filled


    await p1SecurityDialog.waitForLobbyEnabled();
        await p2.hangup();



import { setTestProperties } from '../../helpers/TestProperties';

 * Lobby UI is shown, enter display name and join.
        await p3.waitForReceiveMedia();
        // TODO check that password is hidden as the room does not have password
            }
        // Check that there are no gaps in the filmstrip after joining from lobby
        expect(await p3.getLobbyScreen().isLobbyRoomJoined()).toBe(false);
        classes = await joinButton.getAttribute('class');
    });
    expect(await passwordButton.isEnabled()).toBe(true);
        const { p3 } = ctx;
        });
        // for next execution that will be locally stored
/**

        expect(notificationText.includes(P3)).toBe(true);
 */
    await p1SecurityDialog.clickCloseButton();
        const { p3 } = ctx;
    await p1SecurityDialog.toggleLobby();
    if (usePreJoin) {
    });



        await p2.waitForRemoteStreams(2);

        expect(await p1SecurityDialog.isLocked()).toBe(false);
import {
    });
        await p3.waitToJoinMUC();
    ensureTwoParticipants,
                timeoutMsg: 'room did not lock for p1'
            }
async function enableLobby() {
            // check join button is disabled
        await enterLobby(p1, false);
        await enableLobby();
            {
        expect(await lobbyScreen.isLobbyRoomJoined()).toBe(true);


} from '../../helpers/participants';
        await p3.waitForRemoteStreams(2);
        // now check third one display name in the room, is the one set in the prejoin screen
import { expectations } from '../../helpers/expectations';
        const { p3 } = ctx;
}
        expect(name).toBe(P3);
        expect(await p3.getFilmstrip().countVisibleThumbnails()).toBe(3);

    return name;


        const p1ParticipantsPane = p1.getParticipantsPane();
        const { p1, p2 } = ctx;
        await ctx.p3.hangup();
        await p2.getNotifications().closeLobbyParticipantAccessDenied();



    it('lobby persistence', async () => {

        );

        if (!expectations.autoModerator) {
    expect((await p2.getNotifications().getLobbyEnabledText()).includes(p1.name)).toBe(true);
    it('disable while participant in lobby', async () => {
            expect(classes.includes('disabled')).toBe(true);

    const displayNameInput = screen.getDisplayNameInput();
                timeout: 3000,

            }

        await p3.getFilmstrip().assertNoGapsInFilmstrip();
 * @param enterDisplayName whether to enter display name. We need to enter display name only the first time when
        // check the denied one is out of lobby, sees the notification about it
        await enableLobby();


    // on popups for allow/deny participants

        await p1SecurityDialog.waitForLobbyEnabled(true);
                timeout: 2000,






        }
 * Checks Lobby UI and also that when joining the moderator sees corresponding notifications.

        await p3.getNotifications().waitForLobbyAccessDeniedNotification();
    // lobby is visible to moderators only, this depends on whether deployment is all moderators or not
        await hangupAllParticipants();
        const { p1 } = ctx;
        await p2.getFilmstrip().assertNoGapsInFilmstrip();
            enabled: usePreJoin
        // check that moderator (participant 1) sees notification about participant in lobby
        // check that everything is fine in the meeting
    await screen.getJoinButton().click();
    it('moderator leaves while lobby enabled', async () => {


    });
            () => p2.isModerator(),

        await enterLobby(p1, false);
    });

    });
        const lobbyScreen = p3.getPreJoinScreen();
        // try again entering the lobby with the third one and approve it

                timeoutMsg: 'p3 did not leave lobby'
            {
        }
        // check that moderator (participant 1) no longer sees notification about participant in lobby

        await hangupAllParticipants();
    expect(name).toBe(P3);
        // The third participant should see a warning that his access to the room was denied
    it('entering in lobby and approve', async () => {

        await ensureTwoParticipants();
        await p2.getNotifications().closeLobbyParticipantAccessGranted();
        const knockingParticipant = await enterLobby(p1, true, true);
    await p3.driver.waitUntil(

        // The third participant should see a warning that his access to the room was denied

        await enableLobby();
    if (await p2.isModerator()) {
        await p2SecurityDialog.waitForDisplay();
            {
        await p1ParticipantsPane.open();
 * @return the participant name knocking.
        // here the important check is whether the moderator sees the knocking participant
        // when the moderator leaves. For environments where this is not the case, the test is skipped.

        await p3.waitForParticipants(2);
        const p1ParticipantsPane = p1.getParticipantsPane();
 */
 * from local storage.
            () => p2.isModerator(),

        await enterLobby(p2, false);
        expect(notificationText.includes(P3)).toBe(true);
    await screen.waitForLoading();

        await p1ParticipantsPane.admitLobbyParticipant(knockingParticipant);
        const knockingParticipant = await enterLobby(p1, false);

    await p2.getToolbar().clickSecurityButton();
        const { p3 } = ctx;
        const notificationText = await p2.getNotifications().getLobbyParticipantAccessGranted();
        await lobbyScreen.waitToJoinLobby();



            return;
    });
        await p2.getToolbar().clickSecurityButton();

        await enterLobby(p1);
    });
        // ensure 3 participants in the call will check for the third one that muc is joined, ice connected,
        await p1SecurityDialog.addPassword(roomPasscode);



        await p1ParticipantsPane.open();


    ensureOneParticipant,
    });
        // the bug is triggered by presence with status 322 which is not handled correctly

            ctx.skipSuiteTests = 'The environment does not support lobby.';

    it('joining the meeting', async () => {

        await ensureTwoParticipants();


        // media is being receiving and there are two remote streams
            () => p1SecurityDialog.isLocked(),
    });
    const name = await participant.getNotifications().getKnockingParticipantName();
describe('Lobby', () => {
        await p1ParticipantsPane.close();
 * Enable lobby and check that it is enabled.
        expect(await lobbyScreen.isLobbyRoomJoined()).toBe(true);

        const { p3 } = ctx;
    expect(await displayNameInput.isExisting()).toBe(true);
        // check Lobby room not left
            }
        expect(name).toBe(P3);
 * @param usePreJoin


        const name = await p1.getNotifications().getKnockingParticipantName();
    const p2SecurityDialog = p2.getSecurityDialog();
        const { p1, p2 } = ctx;
