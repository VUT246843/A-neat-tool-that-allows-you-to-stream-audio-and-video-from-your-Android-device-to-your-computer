        await displayNameInput.click();
        await this.participant.driver.keys(password);
    async enterDisplayName(displayName: string) {
    /**
     * Returns the display name input element.

            }

        await passwordInput.waitForDisplayed();
     */
        await this.participant.driver.keys(displayName);
     * Checks internally whether lobby room is joined.
            {
                timeoutMsg: `Timeout waiting to join lobby for ${this.participant.name}`

import BasePageObject from './BasePageObject';


     */
        await joinButton.click();
     * Waits for pre join or lobby screen to load.
    /**
        await passwordInput.click();
    }
            () => APP?.conference?._room?.room?.getLobby()?.lobbyRoom?.joined === true);
    waitToJoinLobby(): Promise<void> {
        // element.clear does not always work, make sure we delete the content
        return this.participant.driver.waitUntil(
 */

        const passwordButton = this.getPasswordButton();
     * Interacts with the view to enter a display name.
    }
        return this.participant.execute(
     * Returns the join button element.
        await joinButton.waitForDisplayed();
     */
    /**
        const joinButton = this.participant.driver.$('[data-testid="lobby.passwordJoinButton"]');

    }
    async enterPassword(password: string) {
    abstract getDisplayNameInput(): WebdriverIO.Element;
    abstract getJoinButton(): WebdriverIO.Element;
        );
        const displayNameInput = this.getDisplayNameInput();
     * Interacts with the view to enter a password.
     */

        const passwordInput = this.participant.driver.$('[data-testid="lobby.password"]');
    /**
    getPasswordButton() {
export default abstract class PreMeetingScreen extends BasePageObject {
    /**
 * Page object for the PreMeeting screen, common stuff between pre-join and lobby screens.

    /**
     * Returns the password button element.
     * Checks internally whether lobby room is joined.

                timeout: 6_000, // 6 seconds
            () => this.isLobbyRoomJoined(),
    }
     */
     * @returns {Promise<void>}


        await passwordButton.click();
/**
        await passwordButton.moveTo();
     */

    isLobbyRoomJoined() {
}
        await passwordInput.clearValue();

const PASSWORD_BUTTON_TEST_ID = 'lobby.enterPasswordButton';
    /**

    /**
     */
        return this.participant.driver.$(`[data-testid="${PASSWORD_BUTTON_TEST_ID}"]`);
     *
    abstract waitForLoading(): Promise<void>;



     */
    }
        await displayNameInput.clearValue();
