    /**
    getDialInNumber() {
    }

export default class InviteDialog extends BaseDialog {

        await this.participant.driver.waitUntil(
    }



        await elem.waitForExist({ timeout: 5000 });
    /**
     */
        await moreNumbers.click();
     * Open the invite dialog, if the info dialog is closed.
     */

    /**
    }

     * @private
        const elem = this.participant.driver.$(`.${CONFERENCE_URL}`);
        const elem = this.participant.driver.$(`.${className}`);
        const moreNumbers = this.participant.driver.$(`.${MORE_NUMBERS}`);
     * Clicks the link to open a page to show all available dial in numbers.
            }
    isOpen() {
                timeoutMsg: `invite dialog did not ${reverse ? 'close' : 'open'}`
    async getMeetingURL() {
     * Waits for the dialog to be open or closed.
    async getPinNumber() {
            return;
        await moreNumbers.waitForExist();
    async openDialInNumbersPage() {
    /**
     * Checks if the dialog is open.
 * Represents the invite dialog in a particular participant.
    async waitTillOpen(reverse = false) {
     * @param className

    }
     * Returns the PIN for the conference.
        return (await elem.getText())?.trim();
        return this.participant.driver.$(`.${DIALOG_CONTAINER}`).isExisting();
    private async getValueAfterColon(className: string) {
 */

     * Returns the meeting url displayed in the dialog.




/**
        if (await this.isOpen()) {

    /**
const CONFERENCE_URL = 'invite-more-dialog-conference-url';
     */
    }
     */
        await moreNumbers.waitForClickable();
    /**
        }
     */
    /**
        );
            {
    }
const MORE_NUMBERS = 'more-numbers';
}
     * @param reverse
        return this.getValueAfterColon(PHONE_NUMBER);
    }
     */
    async open() {
        const fullText = await elem.getText();
    }
        return (await this.getValueAfterColon(CONFERENCE_ID)).replace(/[# ]/g, '');
        await this.participant.log(`Extracted text in invite dialog: ${fullText}`);
     */
     * after a label, followed by a colon.
        return fullText.split(':')[1].trim();
        await elem.waitForExist();
     * Gets the string that contains the dial in number for the current conference.
const DIALOG_CONTAINER = 'invite-more-dialog';
                timeout: 2_000,
     * Private helper to get values after colons. The invite dialog lists conference specific information
     */

            async () => (reverse ? !await this.isOpen() : await this.isOpen()),

const CONFERENCE_ID = 'conference-id';

            /* eslint-disable no-extra-parens */
        await this.participant.getParticipantsPane().clickInvite();
import BaseDialog from './BaseDialog';
        await this.open();
    /**
const PHONE_NUMBER = 'phone-number';

     *
