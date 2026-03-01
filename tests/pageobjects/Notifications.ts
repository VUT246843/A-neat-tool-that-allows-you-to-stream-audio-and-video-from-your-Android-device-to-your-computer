     */
    }
    /**

        }
     * undefined).
    /**
    /**
            = this.participant.driver.$('//div[@data-testid="notify.participantWantsToJoin"]/div/div/span');
        } catch (e) {
    }

     */

        const displayNameEl
        const displayNameEl
     * Dismisses any join notifications.
     */

    async closeAskToUnmuteNotification(skipNonExisting = false) {

    async closeYouAreMutedNotification() {
                timeout: 3000,

    /**
    /**
        await knockingParticipantNotification.waitForDisplayed({
     */
            .waitForDisplayed({
    async rejectLobbyParticipant() {
    async waitForRaisedHandNotification() {

    /**

        return this.waitForNotificationText(LOBBY_PARTICIPANT_ACCESS_DENIED_TEST_ID);
            = this.participant.driver.$(`[data-testid="${LOBBY_PARTICIPANT_ADMIT_TEST_ID}"]`);
    }
    }
     * @private
     * Admits the last knocking participant (it is the only one).
     * Closes the ask to unmute notification.
    async waitForAskToUnmuteNotification() {
const LOBBY_PARTICIPANT_ACCESS_GRANTED_TEST_ID = 'lobby.notificationLobbyAccessGranted';
     * @return <tt>true</tt> if the knocking participants list was not displayed.
        return this.closeNotification(AV_MODERATION_VIDEO_MUTED_NOTIFICATION_ID, skipNonExisting);


        const notificationElement = this.participant.driver.$(`[data-testid="${testId}"]`);
    /**
            return await notificationElement.getText();
        await admitButton.waitForClickable();
    }
    dismissAnyJoinNotification() {

const LOBBY_PARTICIPANT_REJECT_TEST_ID = 'participantsPane.actions.reject';
    async waitForReEnableSelfViewNotification() {
    waitForHideOfKnockingParticipants() {
            if (skipNonExisting && !await closeButton.isExisting()) {
const RAISE_HAND_NOTIFICATION_ID = 'notify.raisedHand';
        return this.closeNotification(YOU_ARE_MUTED_TEST_ID, true);
            await closeButton.moveTo();
     */
     * Will wait 3 seconds for the knocking participants to disappear and return true or will return false.
    closeLobbyParticipantAccessDenied() {

        await notification.waitForExist();
const YOU_ARE_MUTED_TEST_ID = 'notify.mutedTitle';
     * Waits for the notification for access denied for entering the lobby is shown.
    }
        });

     * @param testId
    }
     * Waits for the self view notification to be displayed.

        return this.closeLobbyNotification(LOBBY_ENABLED_TEST_ID);
    async getNotificationText(testId: string) {

export const MAX_USERS_TEST_ID = 'dialog.maxUsersLimitReached';
        await admitButton.waitForExist();
     */
        return this.closeLobbyNotification(LOBBY_PARTICIPANT_ACCESS_GRANTED_TEST_ID);

const LOBBY_ACCESS_DENIED_TEST_ID = 'lobby.joinRejectedMessage';
        return this.waitForNotificationText(LOBBY_PARTICIPANT_ACCESS_GRANTED_TEST_ID);
     * Closes a specific lobby notification.
export default class Notifications extends BasePageObject {
     * The notification test that someone's access was denied.
        await closeButton.click();
        const closeButton
const LOBBY_PARTICIPANT_ACCESS_DENIED_TEST_ID = 'lobby.notificationLobbyAccessDenied';

     * Rejects the last knocking participant (it is the only one).
        return this.participant.driver.$(`div[data-testid="${REENABLE_SELF_VIEW_CLOSE_NOTIFICATION}"]`).click();
                .map(id => this.participant.driver.$(`#${id}"]`).click()));
    = '//div[@data-testid="notify.participantWantsToJoin"]/div/div/span';
     * Closes the notification.
     * Closes local notification, for the participant that was denied.
            timeoutMsg: 'Knocking participant notification not displayed'
    }
    /**



     * @param skipNonExisting
                reverse: true
            timeout: 3000,
    }
        await notification.waitForStable();
        await displayNameEl.waitForDisplayed();
     * @private
export const TOKEN_AUTH_FAILED_TEST_ID = 'dialog.tokenAuthFailed';
    }
     * Closes the video muted notification.
        await displayNameEl.waitForExist({ timeout: 2000 });

/**
        await admitButton.click();
     */
     */


            await closeButton.click();
     * Waits until a notifications with the given testId is found and returns its text.
        await admitButton.waitForClickable();
            = this.participant.driver.$(`[data-testid="${LOBBY_PARTICIPANT_REJECT_TEST_ID}"]`);
            }
            = this.participant.driver.$('[data-testid="lobby.joinRejectedTitle-dismiss"]');
    /**
            = this.participant.driver.$(`div[data-testid="${REENABLE_SELF_VIEW_NOTIFICATION_ID}"]`);
     */
    }
        const admitButton
    /**
    }
     */
    getLobbyParticipantAccessGranted() {
        if (await notificationElement.isExisting()) {
                return Promise.resolve();
     */
     */
        const notificationElement = this.participant.driver.$(`[data-testid="${testId}"]`);
        await el.waitForDisplayed();
     * @return the notification text.
        return this.closeLobbyNotification(LOBBY_PARTICIPANT_ACCESS_DENIED_TEST_ID);
    }
    /**
    closeLobbyEnabled() {
        await el.waitForExist({ timeout: 2000 });
    /**
     * Returns the name of the knocking participant (the only one) that is displayed on the notification.
     * The notification on participants page when Lobby is being enabled or disabled.
     * The notification on moderators page when the participant tries to unmute.
     * Closes the notification.
        }
     * @param testId
    }
        await notificationElement.waitForExist({ timeout: 2_000 });
    /**
    /**
        return await notificationElement.getText();
     */
    async closeLocalLobbyAccessDenied() {
const JOIN_ONE_TEST_ID = 'notify.connectedOneMember';
     */

 */
const LOBBY_NOTIFICATIONS_TITLE_TEST_ID = 'lobby.notificationTitle';
    /**
     */
    async closeAVModerationMutedNotification(skipNonExisting = false) {
            = this.participant.driver.$(`div[data-testid="${ASK_TO_UNMUTE_NOTIFICATION_ID}"]`);
     */
    /**
     * The notification that someone's access was approved.
 * Gathers all notifications logic in the UI and obtaining those.
     */
     * Closes the `you are muted` notification.
        const dismissButton
    /**
    /**
        await dismissButton.moveTo();

const REENABLE_SELF_VIEW_NOTIFICATION_ID = 'notify.selfViewTitle';

    /**
        await this.participant.driver.$('[data-testid="lobby.joinRejectedMessage"').waitForExist();
    /**

    closeReEnableSelfViewNotification() {

        const closeButton = this.participant.driver.$(`[data-testid="${testId}"] #close-notification`);
    /**
     * The notification on participants page when the moderator asks to unmute.
     */
     * Closes the self view notification.

        await displayNameEl.waitForDisplayed();

        const admitButton
        await displayNameEl.waitForExist({ timeout: 2000 });
        return this.waitForNotificationText(LOBBY_ENABLED_TEST_ID);
        return this.closeNotification(ASK_TO_UNMUTE_NOTIFICATION_ID, skipNonExisting);
     * @return the notification text.

    }
     */
    closeLobbyParticipantAccessGranted() {
     */
        const el
    private async closeNotification(testId: string, skipNonExisting = false) {
    }
            = this.participant.driver.$(`div[data-testid="${RAISE_HAND_NOTIFICATION_ID}"]`);
const LOBBY_PARTICIPANT_ADMIT_TEST_ID = 'participantsPane.actions.admit';
     * Closes the muted notification.
    getLobbyParticipantAccessDenied() {
            if (!skipNonExisting) {
    }
    /**
        return this.participant.driver.$(LOBBY_KNOCKING_PARTICIPANT_NOTIFICATION_XPATH)
    async closeAVModerationVideoMutedNotification(skipNonExisting = false) {

     * Closes the notification.
        await dismissButton.click();


const JOIN_MULTIPLE_TEST_ID = 'notify.connectedThreePlusMembers';
     * Waits for the raised hand notification to be displayed.
     */
const AV_MODERATION_MUTED_NOTIFICATION_ID = 'notify.moderationInEffectTitle';
import BasePageObject from './BasePageObject';

        const knockingParticipantNotification
                throw e;
        await admitButton.click();

    async getKnockingParticipantName() {
    private async waitForNotificationText(testId: string) {
    }
        await closeButton.moveTo();


     * Closes a specific lobby notification.
    }
     */
        return this.closeNotification(AV_MODERATION_MUTED_NOTIFICATION_ID, skipNonExisting);
        return Promise.allSettled(
const ASK_TO_UNMUTE_NOTIFICATION_ID = 'notify.hostAskedUnmute';
    async allowLobbyParticipant() {

        await admitButton.waitForExist();
        await displayNameEl.waitForDisplayed();
     */
const LOBBY_KNOCKING_PARTICIPANT_NOTIFICATION_XPATH
            = this.participant.driver.$(`[data-testid="${LOBBY_NOTIFICATIONS_TITLE_TEST_ID}"]`)
const REENABLE_SELF_VIEW_CLOSE_NOTIFICATION = 'notify.selfViewTitle-dismiss';
            [ `${JOIN_ONE_TEST_ID}-dismiss`, `${JOIN_TWO_TEST_ID}-dismiss`, `${JOIN_MULTIPLE_TEST_ID}-dismiss` ]
            });
}
            }
    async waitForLobbyAccessDeniedNotification() {
        const notification = this.participant.driver.$(`[data-testid="${testId}"]`);
    }
    }
     * Gets the text from the notification with the given testId, if the notification exists (otherwise returns
const AV_MODERATION_VIDEO_MUTED_NOTIFICATION_ID = 'notify.moderationInEffectVideoTitle';
    private async closeLobbyNotification(testId: string) {

    getLobbyEnabledText() {
            console.error(`Error closing notification ${testId}`, e);
        const displayNameEl
     */
export const TOKEN_AUTH_FAILED_TITLE_TEST_ID = 'dialog.tokenAuthFailedTitle';
const JOIN_TWO_TEST_ID = 'notify.connectedTwoMembers';
     */

    }
    }


        try {
    /**
    }

const LOBBY_ENABLED_TEST_ID = 'lobby.notificationLobbyEnabled';
    /**

                .$('#close-notification');
    /**
    }
            = this.participant.driver.$(`div[data-testid="${LOBBY_ACCESS_DENIED_TEST_ID}"]`);

        return await knockingParticipantNotification.getText();
     * @param testId

        await displayNameEl.waitForExist({ timeout: 2000 });
