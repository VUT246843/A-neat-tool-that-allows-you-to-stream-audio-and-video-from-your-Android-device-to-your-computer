    }

     * @returns {Promise<void>}

    private async isOverflowMenuOpen() {
    }
     * Clicks video unmute button.
     * The audio mute button.

        return this.getButton(DESKTOP).click();
    }
    /**

     */

const RAISE_HAND = 'Raise your hand';
     */
     *

        await this.participant.log('Clicking on: Audio Unmute Button');

     * Ensure the overflow menu is displayed.
    clickProfileButton(): Promise<void> {
    }
    }
export default class Toolbar extends BasePageObject {
        await this.openOverflowMenu();
const OVERFLOW_MENU = 'More actions menu';
        await this.participant.log('Clicking on: Video Mute Button');
    /**
    /**
        // sometimes the overflow button tooltip is over the last entry in the menu,
     */
    private waitForOverFlowMenu(visible: boolean) {
        });
    /**

     * Clicks Participants pane button.
        return this.getButton(STOP_DESKTOP).click();
    async clickAudioMuteButton(): Promise<void> {
        if (!await this.isOverflowMenuOpen()) {
     * Checks if the overflow menu is open and visible.
     */
        return this.getButton(CLOSE_PARTICIPANTS_PANE).click();
        // not directly clicking the button to avoid issues of UI notifications preventing it
    /**
    async closeOverflowMenu() {
    private clickOverflowButton(): Promise<void> {
     * The video mute button.
    async clickVideoUnmuteButton(): Promise<void> {
    /**
    /**
        await this.getButton(accessibilityLabel).click();

    }
    clickSecurityButton() {
    clickVideoQualityButton(): Promise<void> {
        // Special case for participants pane button, as it contains the number of participants and its label
        await this.participant.log('Clicking on: Close Chat Button');
    }
            timeout: 2000, timeoutMsg: 'Video mute button not found'

    }
     * Clicks audio mute button.

        // not directly clicking the button to avoid issues of UI notifications preventing it

            return;
        return this.getButton(ENTER_TILE_VIEW_BUTTON).click();
    get audioUnMuteBtn() {
     * Clicks on the security toolbar button which opens the security panel.
        const elem = this.participant.driver.$(`[aria-label^="${PROFILE}"] img`);
    }
     * Clicks on the overflow toolbar button which opens or closes the overflow menu.
const PROFILE = 'Edit your profile';
     * Clicks on the desktop sharing button to stop it.
    }

     * Clicks on the tile view button which exits tile layout.
     * Clicks on the profile toolbar button which opens or closes the profile panel.
        return this.clickButtonInOverflowMenu(VIDEO_QUALITY);

    private async openOverflowMenu() {
 * The toolbar elements.

     * @private
        });
     */
        return await this.participant.driver.$$(`[aria-label="${OVERFLOW_MENU}"]`).length > 0;
            timeout: 2000, timeoutMsg: 'Audio unmute button not found'

        return this.participant.execute(() => JitsiMeetJS.app.testing.audioMute());
        return await elem.isExisting() ? await elem.getAttribute('src') : null;
     * @private
     * Clicks on the video quality toolbar button which opens the

    /**
const ENTER_TILE_VIEW_BUTTON = 'Enter tile view';
const DESKTOP = 'Start sharing your screen';

/**
    async clickAudioUnmuteButton(): Promise<void> {
    /**
     *
     * The audio unmute button.
const VIDEO_UNMUTE = 'Start camera';
     */
        return this.getButton(OVERFLOW).click();

    /**
     * Clicks on the hangup button that ends the conference.

     * Clicks audio unmute button.
        await this.clickOverflowButton();
     * Returns the button.

        });

    /**
 */
        // so let's move focus away before clicking the button
     * @private
     */
        return this.participant.driver.$(`[aria-label^="${PARTICIPANTS}"]`).click();
const STOP_DESKTOP = 'Stop sharing your screen';
            return;
     * Clicks on the chat button that closes chat panel.
        await this.participant.log(`Clicking on: ${accessibilityLabel}`);
    }
     */

     * @private
        await this.participant.log('Clicking on: Participants pane Button');
        if (await this.isOverflowMenuOpen()) {
const CLOSE_PARTICIPANTS_PANE = 'Close participants pane';

     */

    /**
     */

     */
    async clickVideoMuteButton(): Promise<void> {
     */

        await this.participant.log('Clicking on: Raise hand Button');
        return this.getButton(OVERFLOW_MENU).waitForDisplayed({
     * @private
const CLOSE_CHAT = 'Close chat';

     * Waits for the overflow menu to be visible or hidden.

    }
    /**
        return this.participant.execute(() => JitsiMeetJS.app.testing.videoUnmute());
        await this.videoUnMuteBtn.waitForExist({
     * dialog for adjusting max-received video quality.
        // not directly clicking the button to avoid issues of UI notifications preventing it

    /**
const AUDIO_UNMUTE = 'Unmute microphone';
        return this.getButton(VIDEO_UNMUTE);

    }
}
    }
    /**
        // is changing
    /**
     * @returns {Promise<void>}
     */
    /**
    private async clickButtonInOverflowMenu(accessibilityLabel: string) {

        }
    /**
     */
     *
    }
     * @returns {Promise<void>}
        await this.participant.log('Clicking on: Hangup Button');

     *
    async clickCloseParticipantsPaneButton(): Promise<void> {

     * @param {string} accessibilityCSSSelector - The selector to find the button.
    /**
        await this.participant.log('Clicking on: Video Unmute Button');
    clickDesktopSharingButton() {
const SETTINGS = 'Open settings';
    /**
    /**


        }
        // not directly clicking the button to avoid issues of UI notifications preventing it
     * @returns {Promise<void>}
const CHAT = 'Open chat';
        await this.participant.driver.$('#overflow-context-menu').moveTo();
     *
const AUDIO_MUTE = 'Mute microphone';
            timeout: 2000, timeoutMsg: 'Audio mute button not found'
        await this.participant.log('Clicking on: Chat Button');
        return this.clickButtonInOverflowMenu(SETTINGS);
     */
    /**
     */
     * Clicks on the desktop sharing button that starts desktop sharing.
    async getProfileImage() {
     * @param accessibilityLabel The accessibility label of the button to be clicked.
        await this.waitForOverFlowMenu(false);
    }
     * @private
        });
const PARTICIPANTS = 'Open participants pane';
        return this.getButton(CHAT).click();
    }
    }
const VIDEO_QUALITY = 'Manage video quality';
        return this.participant.execute(() => JitsiMeetJS.app.testing.videoMute());
    get audioMuteBtn() {
import BasePageObject from './BasePageObject';
     */
    }
const EXIT_TILE_VIEW_BUTTON = 'Exit tile view';
     */
    get videoUnMuteBtn() {
    }
     * @param visible
    private getButton(accessibilityCSSSelector: string) {


    /**
        await this.participant.log('Clicking on: Close Participants pane Button');
        return this.participant.driver.$(`[aria-label="${accessibilityCSSSelector}"]`);
        return this.getButton(CLOSE_CHAT).click();
     */
     * Ensure the overflow menu is open and clicks on a specified button.
    }
        await this.audioUnMuteBtn.waitForExist({
const OVERFLOW = 'More actions';
        });
    async clickCloseChatButton(): Promise<void> {

    async clickChatButton(): Promise<void> {
     * Clicks on the settings toolbar button which opens or closes the settings panel.

     * Clicks on the tile view button which enables tile layout.
        return this.participant.execute(() => JitsiMeetJS.app.testing.audioUnmute());
        await this.waitForOverFlowMenu(true);
     */

    }
    }
    async clickParticipantsPaneButton(): Promise<void> {

    }
     * Clicks video mute button.
     */
        return this.getButton(VIDEO_MUTE);
        return this.clickButtonInOverflowMenu(SECURITY);
        return this.getButton(HANGUP).click();
            reverse: !visible,

    /**
    /**
        return this.clickButtonInOverflowMenu(PROFILE);
     */
     * Ensures the overflow menu is not displayed.
    /**
    /**

        await this.closeOverflowMenu();
    get videoMuteBtn() {
        return this.getButton(AUDIO_UNMUTE);
     * @returns {Promise<void>}
        await this.openOverflowMenu();
     */
     */
        await this.clickOverflowButton();
     */
        return this.getButton(AUDIO_MUTE);

     */
    /**
    /**

     */

    clickEnterTileViewButton() {
    }
    async clickRaiseHandButton(): Promise<void> {

            timeout: 3000,
     */
    /**
    clickSettingsButton() {
    }
    clickExitTileViewButton() {
     * Clicks Participants pane button.
     * @returns {Promise<void>}
     * @returns {WebdriverIO.Element} The button.

    }

     * Clicks on the chat button that opens chat panel.
        return this.getButton(EXIT_TILE_VIEW_BUTTON).click();
    }
const VIDEO_MUTE = 'Stop camera';
     */
     * Clicks on the raise hand button that enables participants will to speak.
const SECURITY = 'Security options';
    }
     *
const HANGUP = 'Leave the meeting';

        await this.participant.log('Clicking on: Audio Mute Button');
     * @private
    async clickHangupButton(): Promise<void> {
     *

            timeout: 2000, timeoutMsg: 'Video unmute button not found'

        return this.getButton(RAISE_HAND).click();
    }
     */

        await this.videoMuteBtn.waitForExist({
     * The video unmute button.
            timeoutMsg: `Overflow menu is not ${visible ? 'visible' : 'hidden'}`
        await this.audioMuteBtn.waitForExist({
     * Gets the participant's avatar image element located in the toolbar.
    clickStopDesktopSharingButton() {
