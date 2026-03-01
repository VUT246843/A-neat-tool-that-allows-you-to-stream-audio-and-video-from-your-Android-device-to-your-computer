    clickStopVideoModeration() {
    clickStartAudioModeration() {
     */
     * @private

        await button.moveTo({

     * Clicks the stop audio moderation menu item.
        await button.click();

    /**
 * Represents the Audio Video Moderation menu in the participants pane.
    /**

}
     * Clicks the start audio moderation menu item.
 */
    }
        return this.clickButton(STOP_VIDEO_MODERATION);
const STOP_AUDIO_MODERATION = 'participants-pane-context-menu-stop-audio-moderation';
        const button = this.participant.driver.$(`#${id}`);
    clickStopAudioModeration() {
    }
     */
const START_VIDEO_MODERATION = 'participants-pane-context-menu-start-video-moderation';
    }
const START_AUDIO_MODERATION = 'participants-pane-context-menu-start-audio-moderation';

     */
    }

        return this.clickButton(START_AUDIO_MODERATION);
        });
     * Clicks a context menu button.
    /**
     */
            yOffset: -40
    }
import BasePageObject from './BasePageObject';
/**
    /**

            xOffset: -40,
    private async clickButton(id: string) {
     */
        return this.clickButton(START_VIDEO_MODERATION);
        return this.clickButton(STOP_AUDIO_MODERATION);
    /**
     * @param id
export default class AVModerationMenu extends BasePageObject {
    clickStartVideoModeration() {
        await button.waitForDisplayed();
const STOP_VIDEO_MODERATION = 'participants-pane-context-menu-stop-video-moderation';
     * Clicks the start video moderation menu item.

     * Clicks the stop audio moderation menu item.
