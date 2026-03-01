}
    /**
    getJoinWithoutAudioButton() {

    getJoinOptions() {
    /**
    }
     */
     */
    }
        return this.participant.driver.$(`[data-testid="${JOIN_WITHOUT_AUDIO}"]`);
     */
     */
     * Returns the error message displayed on the prejoin screen.
     * Returns the display name input element.
 */
    waitForLoading(): Promise<void> {
    }

        return this.participant.driver.$(`[data-testid="${ERROR_ON_JOIN}"]`);
    /**
const DISPLAY_NAME_ID = 'premeeting-name-input';
     * Waits for pre join screen to load.
const JOIN_WITHOUT_AUDIO = 'prejoin.joinWithoutAudio';
const ERROR_ON_JOIN = 'prejoin.errorMessage';
 * Page object for the PreJoin screen.

    getDisplayNameInput(): ChainablePromiseElement {
        return this.participant.driver.$(`[data-testid="${OPTIONS_BUTTON}"]`);
    /**
        return this.participant.driver.$(`[data-testid="${JOIN_BUTTON_TEST_ID}"]`);
        return this.participant.driver.$('[data-testid="prejoin.screen"]')
    /**
     * Returns the join options button element.

const JOIN_BUTTON_TEST_ID = 'prejoin.joinMeeting';
    }
     * Returns the join without audio button element.
/**
     * Returns the join button element.
const OPTIONS_BUTTON = 'prejoin.joinOptions';
export default class PreJoinScreen extends PreMeetingScreen {
        return this.participant.driver.$(`#${DISPLAY_NAME_ID}`);
    getJoinButton(): ChainablePromiseElement {
import PreMeetingScreen from './PreMeetingScreen';
     */


    /**
    }
     */

    getErrorOnJoin() {
            .waitForDisplayed({ timeout: 3000 });
    }
