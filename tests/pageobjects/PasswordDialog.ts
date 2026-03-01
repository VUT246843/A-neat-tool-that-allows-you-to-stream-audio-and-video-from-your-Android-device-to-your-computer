    }
        await input.waitForDisplayed();

    }
            timeoutMsg: 'Password dialog not found'
     * Waiting for the dialog to appear.

import BaseDialog from './BaseDialog';


            return false;
export default class PasswordDialog extends BaseDialog {
     */
        await passwordInput.waitForStable();
        await passwordInput.clearValue();
        await this.clickOkButton();

const INPUT_KEY_XPATH = '//input[@name="lockKey"]';
        const input = this.participant.driver.$(INPUT_KEY_XPATH);
        await input.waitForStable();
        await input.waitForExist({
}
 */
        await this.participant.driver.keys(password);
/**
        const passwordInput = this.participant.driver.$(INPUT_KEY_XPATH);
    /**
    /**
        } catch (e) {
     */
    async waitForDialog() {

            timeout: 5000,
            await input.isExisting();
        await passwordInput.click();
            return await input.isDisplayed();
    async submitPassword(password: string) {
    }
     * @param password
        }

 * Represents the password dialog in a particular participant.
        });

        const input = this.participant.driver.$(INPUT_KEY_XPATH);

        await passwordInput.waitForExist();
    async isOpen() {
     * Sets a password and submits the dialog.

        try {
