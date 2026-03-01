 * Toggles the mute state of a specific Meet conference participant and verifies that a specific other Meet
 *
export async function unmuteAudioAndCheck(testee: Participant, observer: Participant) {



 * @param testee
import { Participant } from '../../helpers/Participant';
    await observer.getParticipantsPane().assertVideoMuteIconIsDisplayed(testee, true);
/**
 * Unmute audio, checks if the local UI has been updated accordingly and then does the verification from
/**
 * @returns {Promise<void>}
 * @param observer
    await testee.getParticipantsPane().assertVideoMuteIconIsDisplayed(testee, true);
export async function muteAudioAndCheck(testee: Participant, observer: Participant): Promise<void> {
    await testee.getNotifications().closeAskToUnmuteNotification(true);
    await testee.getParticipantsPane().assertAudioMuteIconIsDisplayed(testee, true);
/**

 * @param observer

export async function unmuteVideoAndCheck(testee: Participant, observer: Participant): Promise<void> {

 * @param {Participant} testee - The {@code Participant} which represents the Meet conference participant whose
    await testee.getToolbar().clickAudioUnmuteButton();
}
/**
    await testee.getNotifications().closeAVModerationMutedNotification(true);
    await testee.getToolbar().clickVideoUnmuteButton();
 * @param testee
 * Starts the video on testee and check on observer.
 * the other observer participant perspective.
    await testee.getToolbar().clickAudioMuteButton();
 */
    await testee.getParticipantsPane().assertAudioMuteIconIsDisplayed(testee);
    await observer.getParticipantsPane().assertVideoMuteIconIsDisplayed(testee);
 */

 * @param observer
    await observer.getFilmstrip().assertAudioMuteIconIsDisplayed(testee);
 */
    await testee.getToolbar().clickVideoMuteButton();
 * @param testee
    await observer.getFilmstrip().assertAudioMuteIconIsDisplayed(testee, true);
    await testee.getFilmstrip().assertAudioMuteIconIsDisplayed(testee, true);
 * conference participants sees a specific mute state for the former.
    await testee.getNotifications().closeAskToUnmuteNotification(true);
}
 * Stop the video on testee and check on observer.
 * @param {Participant} observer - The {@code Participant} which represents the Meet conference participant to verify
 */
    await testee.getParticipantsPane().assertVideoMuteIconIsDisplayed(testee);
    await testee.getNotifications().closeAVModerationVideoMutedNotification(true);

    await observer.getParticipantsPane().assertAudioMuteIconIsDisplayed(testee);
    await observer.getParticipantsPane().assertAudioMuteIconIsDisplayed(testee, true);
 * mute state is to be toggled.

}

}
    await testee.getFilmstrip().assertAudioMuteIconIsDisplayed(testee);

 * the mute state of {@code testee}.
export async function muteVideoAndCheck(testee: Participant, observer: Participant): Promise<void> {
