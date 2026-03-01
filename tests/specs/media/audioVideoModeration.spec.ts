        await moderatorParticipantsPane.allowVideo(nonModerator);

        await p1.getFilmstrip().grantModerator(p3);

    await unmuteVideoAndCheck(participant, moderator);
        const isP2Moderator = await p2.isModerator();
describe('Audio/video moderation', () => {
    await participant.getToolbar().clickAudioUnmuteButton();
        await nonModerator.getNotifications().waitForAskToUnmuteNotification();

            || (await p1.isModerator() && await p2.isModerator() && await p3.isModerator())) {
    it('grant moderator', async () => {
    });
 * @param observer

        await p2.getToolbar().clickRaiseHandButton();
        // we don't use ensureThreeParticipants to avoid all meeting join checks
 * In case of moderation, tries to video unmute but stays muted.
        const p1ParticipantsPane = ctx.p1.getParticipantsPane();
    // Check local audio muted icon state
             p2=${await p2.isModerator()}, p3=${await p3.isModerator()}`;

        await p1.hangup();
        await p1ParticipantsPane.getAVModerationMenu().clickStartVideoModeration();


    ensureThreeParticipants, ensureTwoParticipants,
 * Checks a user can unmute after being asked by moderator.
}
    it('check video enable/disable', async () => {
    it('setup', async () => {

        stopModeration: boolean) {


async function tryToVideoUnmuteAndCheck(participant: Participant, observer: Participant) {
        // mute p2
    await moderator.getNotifications().waitForRaisedHandNotification();

        // Here we want to try unmuting and check that we are still muted.
 * Checks locally and remotely that this is still the case.
    });


        await p2.getNotifications().closeYouAreMutedNotification();
        const { p1, p2, p3 } = ctx;
        await p1ParticipantsPane.clickContextMenuButton();
        await p3.getToolbar().clickRaiseHandButton();



 * @param participant
            skipInMeetingChecks: true
        const moderator = isP2Moderator ? p2 : p3;

        await unmuteAudioAndCheck(p2, p1);
    await unmuteAudioAndCheck(participant, moderator);
    // ask participant to unmute
        await p2.getFilmstrip().assertAudioMuteIconIsDisplayed(p2);
        await moderatorParticipantsPane.clickContextMenuButton();

        const { p1, p3 } = ctx;
    // raise hand to speak
    await participant.getNotifications().waitForAskToUnmuteNotification();

        await ensureThreeParticipants();

        if (!await p1.isModerator()
        await unmuteAudioAndCheck(p3, p1);
        const { p1, p2 } = ctx;
        // we try to unmute and test it that it was still muted
    await participant.getFilmstrip().assertAudioMuteIconIsDisplayed(participant);
        await p1ParticipantsPane.getAVModerationMenu().clickStartAudioModeration();

    });
        await p1.getFilmstrip().muteAudio(p2);
        await unmuteVideoAndCheck(p2, p1);
        // if all 3 participants are moderators, skip this test

        await hangupAllParticipants();
        await p3.driver.waitUntil(
import { unmuteAudioAndCheck, unmuteVideoAndCheck } from '../helpers/mute';


        await tryToAudioUnmuteAndCheck(p3, p1);
        await p1ParticipantsPane.close();



    it('join moderated', async () => {
        const p1ParticipantsPane = p1.getParticipantsPane();
        await p2.getNotifications().waitForAskToUnmuteNotification();


/**
        await p1ParticipantsPane.close();
        // Here we want to try unmuting and check that we are still muted.
import {

});
        await p1ParticipantsPane.close();
        await unmuteAudioAndCheck(nonModerator, p1);
    ensureOneParticipant,
        await moderatorParticipantsPane.clickContextMenuButton();
}
            ctx.skipSuiteTests = `Unsupported moderator configuration: p1=${await p1.isModerator()},\
        const p1ParticipantsPane = p1.getParticipantsPane();

/**
        await p1ParticipantsPane.getAVModerationMenu().clickStartAudioModeration();
        // moderation is stopped at this point, make sure participants 1 & 2 are also unmuted,
 */
        const { p1, p2 } = ctx;
} from '../../helpers/participants';
 * @param participant
        await p2.getParticipantsPane().assertVideoMuteIconIsDisplayed(p2);

 * @param turnOnModeration - if we want to turn on moderation before testing (when it is currently off).
        await moderatorParticipantsPane.getAVModerationMenu().clickStartVideoModeration();

        await moderatorParticipantsPane.clickContextMenuButton();


        // p1 mute audio on p2 and check
        const { p1, p2 } = ctx;
        await nonModeratorParticipantsPane.assertVideoMuteIconIsDisplayed(nonModerator);
 */
    });
        // all participants are muted and checks for media will fail

    it('unmute by moderator', async () => {

        await moderatorParticipantsPane.askToUnmute(nonModerator, false);
    await moderatorParticipantsPane.askToUnmute(participant, false);
        await moderatorParticipantsPane.getAVModerationMenu().clickStopAudioModeration();

        await moderatorParticipantsPane.close();
    });
        const { p1, p2, p3 } = ctx;
    it('ask to unmute', async () => {
        await p3.getToolbar().clickAudioMuteButton();
        turnOnModeration: boolean,
        await p1ParticipantsPane.getAVModerationMenu().clickStopAudioModeration();
        await unmuteByModerator(p1, p2, false, false);
        await ensureThreeParticipants();
import { Participant } from '../../helpers/Participant';
        // mute and check
        await p1ParticipantsPane.getAVModerationMenu().clickStartAudioModeration();

        // The test below is only correct when the environment is configured to automatically elect a new moderator

import { setTestProperties } from '../../helpers/TestProperties';
        await p1ParticipantsPane.getAVModerationMenu().clickStartVideoModeration();
    await observer.getFilmstrip().assertAudioMuteIconIsDisplayed(participant);


        await moderatorParticipantsPane.getAVModerationMenu().clickStopAudioModeration();
        });

async function unmuteByModerator(

        const p1ParticipantsPane = p1.getParticipantsPane();

 * Checks locally and remotely that this is still the case.
        await p1ParticipantsPane.getAVModerationMenu().clickStartVideoModeration();
    // Check local audio muted icon state
        }
        await p1.getParticipantsPane().assertVideoMuteIconIsDisplayed(p2);
    usesBrowsers: [ 'p1', 'p2', 'p3' ]
        // asked to unmute and check
        // After p1 re-joins either p2 or p3 is promoted to moderator. They should still be muted.
        await unmuteByModerator(p3, p2, false, true);
        await p1.getFilmstrip().assertAudioMuteIconIsDisplayed(p2);
        await unmuteByModerator(p1, p3, true, true);
    await moderatorParticipantsPane.allowVideo(participant);
        await p1ParticipantsPane.getAVModerationMenu().clickStartAudioModeration();
        const moderatorParticipantsPane = moderator.getParticipantsPane();
    });
            return;
 * @param participant - The participant being asked to unmute.
        await hangupAllParticipants();

import { expectations } from '../../helpers/expectations';
    await participant.getToolbar().clickVideoUnmuteButton();

        // stop video and check

        // participant3 was unmuted by unmuteByModerator
        await tryToAudioUnmuteAndCheck(p2, p1);
    // try to audio unmute and check
        await p1.getParticipantsPane().close();
        // join with second participant and check

        await p2.getFilmstrip().assertAudioMuteIconIsDisplayed(p2, true);
        await p1ParticipantsPane.getAVModerationMenu().clickStartVideoModeration();

        await p1ParticipantsPane.clickContextMenuButton();

        await p1ParticipantsPane.clickContextMenuButton();
                timeoutMsg: `${p3.name} is not moderator`
 */
    }


        await p1ParticipantsPane.clickContextMenuButton();
        await tryToVideoUnmuteAndCheck(p3, p1);

            });
        // make sure p1 is not muted after turning on and then off the AV moderation
        await ensureThreeParticipants();
        await p1.getFilmstrip().assertAudioMuteIconIsDisplayed(p1, true);
    it('hangup and change moderator', async () => {
    // try to video unmute and check
        await tryToVideoUnmuteAndCheck(p2, p1);
        await unmuteByModerator(p1, p2, true, false);
        await p1ParticipantsPane.clickContextMenuButton();
        await moderatorParticipantsPane.getAVModerationMenu().clickStopVideoModeration();
        await ensureOneParticipant();
async function tryToAudioUnmuteAndCheck(participant: Participant, observer: Participant) {
        await p1.getFilmstrip().muteAudio(p2);
    if (stopModeration) {
    await participant.getToolbar().clickRaiseHandButton();

    await participant.getParticipantsPane().assertVideoMuteIconIsDisplayed(participant);
        await Promise.all([ ctx.p2.hangup(), ctx.p3.hangup() ]);
 * In case of moderation, tries to audio unmute but stays muted.
        const { p1, p2, p3 } = ctx;
        }
        await p2.getToolbar().clickAudioMuteButton();
        await p1ParticipantsPane.getAVModerationMenu().clickStopVideoModeration();
        await moderatorParticipantsPane.close();
        await p1.getParticipantsPane().close();
                timeout: 5000,
    if (turnOnModeration) {
        await moderatorParticipantsPane.getAVModerationMenu().clickStartAudioModeration();
 * @param observer


    });
        await nonModerator.getNotifications().waitForAskToUnmuteNotification();

 * @param stopModeration - true if moderation to be stopped when done.
        await p2.getToolbar().clickAudioMuteButton();
        await p1ParticipantsPane.clickContextMenuButton();
        await p2.getFilmstrip().assertAudioMuteIconIsDisplayed(p2);
    hangupAllParticipants
        await moderatorParticipantsPane.assertVideoMuteIconIsDisplayed(moderator);
        await tryToVideoUnmuteAndCheck(p2, p1);

        await ensureTwoParticipants({
setTestProperties(__filename, {
    it('check audio enable/disable', async () => {

        await p1ParticipantsPane.close();


}
        await moderatorParticipantsPane.getAVModerationMenu().clickStopVideoModeration();
        await tryToAudioUnmuteAndCheck(p2, p1);

        await p1.getParticipantsPane().open();
            () => p3.isModerator(), {


        await p1.getFilmstrip().assertAudioMuteIconIsDisplayed(p2);
        participant: Participant,
});
        const nonModeratorParticipantsPane = nonModerator.getParticipantsPane();

        const { p1, p2, p3 } = ctx;
        const p1ParticipantsPane = p1.getParticipantsPane();
        if (!expectations.autoModerator) {
    const moderatorParticipantsPane = moderator.getParticipantsPane();

    await participant.getNotifications().waitForAskToUnmuteNotification();
    await observer.getParticipantsPane().assertVideoMuteIconIsDisplayed(participant);

/**
        const nonModerator = isP2Moderator ? p3 : p2;


        // ask p2 to unmute
    });

        await p1ParticipantsPane.clickContextMenuButton();


        await unmuteVideoAndCheck(nonModerator, p1);
        await p1.getFilmstrip().muteVideo(p2);
        // close and open participants pane to make sure the context menu disappears
        await unmuteVideoAndCheck(p3, p1);
        await hangupAllParticipants();
        // when the moderator leaves. For environments where this is not the case, the test is skipped.
    });
        await ensureTwoParticipants();
        const { p1, p3 } = ctx;
        await p1ParticipantsPane.close();
        moderator: Participant,
    it('remove from whitelist', async () => {



        await ensureOneParticipant();
 * @param moderator - The participant that is moderator.
        await p1.getParticipantsPane().askToUnmute(p2, true);
    }
        await tryToAudioUnmuteAndCheck(p2, p1);

