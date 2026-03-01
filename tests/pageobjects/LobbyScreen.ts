    }
    }

        return this.participant.driver.$(`[data-testid="${DISPLAY_NAME_TEST_ID}"]`);
     * Waits for lobby screen to load.
    /**

/**
        return this.participant.driver.$('.lobby-screen').waitForDisplayed({ timeout: 6000 });

    getJoinButton(): ChainablePromiseElement {
     * Returns the join button element.
     */
    /**
 * Page object for the Lobby screen.
const DISPLAY_NAME_TEST_ID = 'lobby.nameField';
    /**
const JOIN_BUTTON_TEST_ID = 'lobby.knockButton';
    getDisplayNameInput(): ChainablePromiseElement {
}

     * Returns the display name input element.
import PreMeetingScreen from './PreMeetingScreen';
        return this.participant.driver.$(`[data-testid="${JOIN_BUTTON_TEST_ID}"]`);
    waitForLoading(): Promise<void> {
    }
     */
     */
export default class LobbyScreen extends PreMeetingScreen {
 */
