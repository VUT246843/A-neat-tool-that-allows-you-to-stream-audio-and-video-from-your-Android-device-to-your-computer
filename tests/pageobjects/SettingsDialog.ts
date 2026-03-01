    openMoreTab() {

    waitForDisplay() {
     * Sets the state checked/selected of a checkbox in the settings dialog.
    }
    /**
     * Enters the passed in email into the email field.
    /**

     */
        if (!await elem.isExisting()) {

        return await this.participant.driver.$(EMAIL_FIELD).getValue();

const EMAIL_FIELD = '#setEmail';
    submit() {
    }
    /**
        const elem = this.participant.driver.$(X_PATH_MODERATOR_TAB);
        }
    /**
     * Sets the follow me feature to enabled/disabled.
    /**
 */
import BaseDialog from './BaseDialog';
    /**

    }

        await this.openProfileTab();
     * Selects the Profile tab to be displayed.
    }
        return this.openTab(X_PATH_MODERATOR_TAB);

    private async openTab(xpath: string) {
    /**
    /**
    openModeratorTab() {
const FOLLOW_ME_CHECKBOX = '//input[@name="follow-me"]';
        await this.participant.driver.$(EMAIL_FIELD).setValue(email);
        await this.setCheckbox(HIDE_SELF_VIEW_CHECKBOX, hideSelfView);

    openProfileTab() {
export default class SettingsDialog extends BaseDialog {

}
     * Returns the participant's email displayed in the settings dialog.
    }
     * @param selector
    async setEmail(email: string) {
     */
     * Selects the More tab to be displayed.

    /**
const SETTINGS_DIALOG_CONTENT = '.settings-pane';
    async isFollowMeDisplayed() {
     */
        const checkbox = this.participant.driver.$(selector);
    private async setCheckbox(selector: string, enable: boolean) {
        await this.openModeratorTab();
const X_PATH_MORE_TAB = '//div[contains(@class, "settings-dialog")]//*[text()="General"]';

     * Returns true if the follow me checkbox is displayed in the settings dialog.
     * Sets the state of a checkbox.
        await elem.waitForClickable();
        await checkbox.waitForExist();
        return await this.participant.driver.$$(FOLLOW_ME_CHECKBOX).length > 0;

        await elem.click();
        await this.openMoreTab();
     * Displays a specific tab in the settings dialog.
     * @param enable
    }
        await this.setCheckbox(START_VIDEO_MUTED_CHECKBOX, enable);
     * @param {boolean} enable - true for enabled and false for disabled.


     * @param enable
        return this.clickOkButton();

const START_AUDIO_MUTED_CHECKBOX = '//input[@name="start-audio-muted"]';
     */
            // so we need to click on the parent element
     */
     * Clicks the OK button on the settings dialog to close the dialog and save any changes made.
    }
    /**
        await this.openModeratorTab();

const X_PATH_MODERATOR_TAB = '//div[contains(@class, "settings-dialog")]//*[text()="Moderator"]';
        if (enable !== await checkbox.isSelected()) {

     * @private
    /**
/**
    /**
 * The settings dialog.
     * @param email
     * @param {boolean} enable - true for enabled and false for disabled.
            // we show a div with svg and text after the input and those elements grab the click
const X_PATH_PROFILE_TAB = '//div[contains(@class, "settings-dialog")]//*[text()="Profile"]';
     */
    async setFollowMe(enable: boolean) {
    }
        await this.openModeratorTab();
    }

    }
        return this.openTab(X_PATH_MORE_TAB);
    }
     */
        await this.setCheckbox(FOLLOW_ME_CHECKBOX, enable);
     * Selects the moderator tab to be displayed.
        await this.openProfileTab();

     */
        await this.openModeratorTab();
     *  Waits for the settings dialog to be visible.

     * Sets the start video muted feature to enabled/disabled.
     */

        }
    /**
        await this.setCheckbox(START_AUDIO_MUTED_CHECKBOX, enable);
     */
     * Sets the start audio muted feature to enabled/disabled.
    }

    }
    async getEmail() {
            await this.participant.driver.$(`${selector}//ancestor::div[1]`).click();
        const elem = this.participant.driver.$(xpath);
        return this.participant.driver.$(SETTINGS_DIALOG_CONTENT).waitForDisplayed();

     * @param xpath
     * @returns {Promise<void>}
    async setStartAudioMuted(enable: boolean) {
     */

const HIDE_SELF_VIEW_CHECKBOX = '//input[@name="hide-self-view"]';

    async setHideSelfView(hideSelfView: boolean) {
    /**
     */
     */

     */
     * @private
            return false;
    async setStartVideoMuted(enable: boolean) {
const START_VIDEO_MUTED_CHECKBOX = '//input[@name="start-video-muted"]';
        return this.openTab(X_PATH_PROFILE_TAB);

    }
     * @returns {Promise<void>}
