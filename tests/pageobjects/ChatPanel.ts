                timeoutMsg: `Answer input ${index} not created`
    /**
     * Fills in the poll question.
        const input = await this.participant.driver.$('#polls-create-input');
    }
     * Waits for the option input to be visible.

     * @param index
    async clickSendPollButton() {
    /**

     * Clicks the "Save" button.
     */
    async pressShortcut() {
    }
        }
                timeoutMsg: `Answer input ${index} still exists`
        const inputField = this.participant.driver.$('#chat-input');
     */
    /**
    async openPollsTab() {
        await this.participant.driver.execute(
     * Fills in the poll option.
                reverse: true,
     * Checks whether the given poll is visible.
    }
     */
    }
            throw new Error('Chat panel failed to open');
     * @param pollId
        await this.participant.driver.$('button=Add option').click();
    }

    async waitForOptionInputNonExisting(index: number) {
    }
        await input.click();
     */
        await this.participant.driver.keys(`${message}\n`);
    /**
        await this.participant.driver.keys(option);

    }
     * Opens the polls tab in the chat panel.
     * Checks whether the polls tab is visible.
            });

        if (!await this.isOpen()) {
        });
    async getOption(index: number) {
                timeout: 2000,
 */
     * @param pollId
    }
    /**
     */
        await this.participant.driver.$('#polls-tab').click();
export default class ChatPanel extends BasePageObject {
    /**

        await this.participant.driver.$('button=Save').click();
    }
        await input.click();
        await this.participant.driver.keys(question);
        await this.participant.driver.$(
     * Presses the "chat" keyboard shortcut which opens or closes the chat

     */
        await this.participant.driver.$('button=Send').waitForExist({

    /**
     * Votes for the given option in the given poll.
    async clickRemoveOptionButton(index: number) {
            timeout: 1000,
    }
        if (!await this.isOpen()) {
     * @param index
    }

            `#polls-answer-input-${index}`)
    isOpen() {
    async waitForSendButton() {
     */
     */

    async clickSavePollButton() {
     * Waits for the new poll input to be visible.
     */


    }
            '#polls-create-input')
            await this.pressShortcut();
        await inputField.click();
            .waitForExist({
        return await this.participant.driver.$(`#poll-result-${pollId}-${optionIndex}`).getText();
     * @param question
    /**
        await this.participant.driver.$('button=Skip').click();

     * Gets the result text for the given option in the given poll.
    }
    /**
    async sendMessage(message: string) {
    }
    /**
     * Clicks the "Remove option" button.
     * panel.
    }
        await this.participant.driver.$('button=Send').click();
            timeoutMsg: 'Send button not visible'
     * @param optionIndex
    async isPollsTabVisible() {
    /**
            pollId, index);

        await this.participant.driver.$('button=Edit').click();
    /**
     */
     * @param index
    }
     * Clicks the "Send" button.
        await this.participant.driver.$('button=Create a poll').click();
        await this.participant.driver.$('button=Submit').click();
        }
    async clickEditPollButton() {
    }
     * @param index
     * Waits for the "Send" button to be visible.
     * Waits for the option input to be non-existing.

     */
        return this.participant.driver.$('#polls-tab-panel').isDisplayed();
    async fillPollQuestion(question: string) {
import BasePageObject from './BasePageObject';


     * @param option
    async clickAddOptionButton() {
    }

    /**
        const input = await this.participant.driver.$(`#polls-answer-input-${index}`);
     */
    /**
            });
     * Gets the poll option.

     */
     * @param pollId
     */
        await this.participant.driver.$(
    /**
    async waitForOptionInput(index: number) {
    async waitForNewPollInput() {
     */
    }
     */
    async clickCreatePollButton() {


    /**
        await this.participant.driver.keys([ 'c' ]);
        return this.participant.driver.$(`#poll-${pollId}`).isDisplayed();



        await this.participant.driver.$('body').click();
/**
     * Clicks the "Skip" button.
     * @param index
     * Clicks the "Edit" button.

            `#polls-answer-input-${index}`)
            .waitForExist({
                timeout: 2000,
        await this.participant.driver.$(`[data-testid="remove-polls-answer-input-${index}"]`).click();
     */
     */
}
            .waitForExist({
     * Is chat panel open.
 * Chat panel elements.
     */
    /**
                timeout: 1000,
        return this.participant.driver.$('#sideToolbarContainer').isExisting();
    /**
    /**
    async isPollVisible(pollId: string) {
    }
            (id, ix) => document.getElementById(`poll-answer-checkbox-${id}-${ix}`)?.click(),
    async clickSkipPollButton() {

            });
        return this.participant.driver.$(`#polls-answer-input-${index}`).getValue();
     */
                timeoutMsg: 'New poll not created'
     * Clicks the "Add option" button.
    async voteForOption(pollId: string, index: number) {
    }
    async getResult(pollId: string, optionIndex: number) {
    /**
        await this.participant.driver.$(
     * @param index

    async fillPollOption(index: number, option: string) {
    }
