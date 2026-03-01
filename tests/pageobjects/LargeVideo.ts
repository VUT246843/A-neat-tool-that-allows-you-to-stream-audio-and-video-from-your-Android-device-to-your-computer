     */
    async getAvatar() {
            if (currentTime > lastTime) {
     */
            lastTime = currentTime;
        return this.participant.driver.waitUntil(async () => {
        });
    /**
    }
     * Returns the source of the large video currently shown.

     * Returns the elapsed time at which video has been playing.
            timeout: 5_000,
    /**
    /**
     */
}


    async getPlaytime() {
     *
                `Expected large video for participant ${this.participant.name} to play but it didn't for more than 5s`
    }
        return this.participant.execute(() => APP?.UI?.getLargeVideoID());

            timeoutMsg:
     * Waits 5s for the large video to switch to passed endpoint id.
     */
    }
            timeoutMsg: `expected large video to switch to ${endpointId} for 5s`
            return false;
    assertPlaying() {
     *
        return this.participant.driver.waitUntil(async () => endpointId === await this.getResource(), {


     * @return {number} - The current play time of the video element.
     */
    /**
    /**
                lastTime = currentTime;

 */
        return this.participant.execute(() => document.getElementById('largeVideo')?.srcObject?.id);
    }
            interval: 500,
    }
        return await avatar.isExisting() ? await avatar.getAttribute('src') : null;
            }
    getResource() {
     *
        return this.participant.driver.$('#largeVideo').getProperty('currentTime');
     * Checks if the large video is playing or not.
     * Gets avatar SRC attribute for the one displayed on large video.
 * The large video.
    /**
    }

        }, {
                return true;
     */
     * @param {string} endpointId - The endpoint.
            }

        let lastTime: number;
    getId() {
            if (typeof lastTime === 'undefined') {

     * Returns resource part of the JID of the user who is currently displayed in the large video area.
     * @returns {Promise<void>}
import BasePageObject from './BasePageObject';
export default class LargeVideo extends BasePageObject {
            const currentTime = parseFloat(await this.getPlaytime());
        const avatar = this.participant.driver.$('//img[@id="dominantSpeakerAvatar"]');
        });
    waitForSwitchTo(endpointId: string): Promise<void> {
/**
     * @returns {Promise<void>}
            timeout: 5_500,

