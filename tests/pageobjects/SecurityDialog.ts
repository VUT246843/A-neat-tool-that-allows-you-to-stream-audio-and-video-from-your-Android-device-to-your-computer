        await removePassword.click();
export default class SecurityDialog extends BaseDialog {
     * Returns is the lobby enabled.

const ADD_PASSWORD_FIELD = 'info-password-input';
const ADD_PASSWORD_LINK = 'add-password';
    }

        return this.participant.driver.$(`.${LOCAL_LOCK}`).isExisting();

    /**
     * @return {@code true} if the conference is displayed as locked locally in
            return;
    async toggleLobby() {
     * Checks whether lobby section is present in the UI.
import BaseDialog from './BaseDialog';
        await passwordEntry.waitForDisplayed();
        return this.participant.driver.$(`.${REMOTE_LOCK}`).isExisting();
    private getLobbySwitch() {
     */
        }
     * security dialog, {@code false} otherwise.
     */
     * Checks if the current conference is locked with a locally set password.
        return this.participant.driver.$(`.${DIALOG_CONTAINER}`).waitForDisplayed();

     *  Waits for the settings dialog to be visible.
    async addPassword(password: string) {
     * @param reverse
     * Returns the switch that can be used to detect lobby state or change lobby state.
            {

    waitForDisplay() {
 */
     */
    /**
     * Waits for the lobby to be enabled or disabled.

    private isLockedRemotely() {
    }
     * the security dialog, {@code false} otherwise.
    }
     */

    /**
    async removePassword() {
const REMOTE_LOCK = 'info-password-remote';
 * Page object for the security dialog.



const LOCAL_LOCK = 'info-password-local';
        );
                timeoutMsg: `Timeout waiting for lobby being ${reverse ? 'disabled' : 'enabled'} for ${

    }
    }
     * in the security dialog, {@code false} otherwise.
     * Removes the password from the current conference through the security dialog, if a password is set.
        await lobbySwitch.click();
    }
     *
    /**
    waitForLobbyEnabled(reverse = false) {
    }
    }
     *
    /**
    /**
    }
     * @return {@code true}  if the conference is displayed as locked remotely

     */
        return this.participant.driver.$('#lobby-section-switch');
        return this.getLobbySwitch().isSelected();
     */


     */
     *
    isLobbySectionPresent() {
}

                    this.participant.name}.`
        await addPasswordLink.waitForClickable();
    isLobbyEnabled() {
    /**
    /**
     */


const REMOVE_PASSWORD = 'remove-password';
            async () => await lobbySwitch.isSelected() !== reverse,
    async isLocked() {
     * Checks if the current conference is locked with a locally set password.
        await this.participant.driver.keys(password);
        return this.getLobbySwitch().isExisting();
        const lobbySwitch = this.getLobbySwitch();
                timeout: 5_000, // 30 seconds
     * @private
        const lobbySwitch = this.getLobbySwitch();
     * Checks if the current conference is locked based on the security dialog's
     * Toggles the lobby option from the security dialog.
     *
        const passwordEntry = this.participant.driver.$(`#${ADD_PASSWORD_FIELD}`);
     * @param password - The password to use to lock the conference.
     */
     * @return {@code true} if the conference is displayed as locked in the


        await this.participant.driver.$('button=Add').click();
     */
        return await this.isLockedLocally() || await this.isLockedRemotely();
     */
        await lobbySwitch.moveTo();
        const addPasswordLink = this.participant.driver.$(`.${ADD_PASSWORD_LINK}`);
        const removePassword = this.participant.driver.$(`.${REMOVE_PASSWORD}`);
        await addPasswordLink.click();
        await removePassword.waitForClickable();
    }
/**
            }
        await passwordEntry.click();
    }
     * display state.
    /**
     * Sets a password on the current conference to lock it.
        return this.participant.driver.waitUntil(
        if (!await this.isLocked()) {
const DIALOG_CONTAINER = 'security-dialog';
    /**
    /**
    private isLockedLocally() {

