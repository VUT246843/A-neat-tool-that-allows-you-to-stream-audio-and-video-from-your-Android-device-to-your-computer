 */
        await this.participant.getToolbar().clickVideoQualityButton();
    async setVideoQuality(audioOnly: boolean) {
import { Key } from 'webdriverio';


            await this.participant.driver.keys(keyDirection);
        // Close the video quality dialog.


const VIDEO_QUALITY_SLIDER_CLASS = 'custom-slider';

    }
}
        await videoQualitySlider.click();
        const maxDefinitionSliderValue = parseInt(await videoQualitySlider.getAttribute('max'), 10);

     * Opens the video quality dialog and sets the video quality to the minimum or maximum definition.
        // Move the slider to the target value.

     */
        }


/**
        // we need to click the element to activate it so it will receive the keys
     * @param audioOnly - Whether to set the video quality to audio only (minimum).
    /**
        const keyDirection = distanceToTargetValue > 0 ? Key.ArrowRight : Key.ArrowLeft;
        await this.clickCloseButton();

        for (let i = 0; i < Math.abs(distanceToTargetValue); i++) {
export default class VideoQualityDialog extends BaseDialog {
import BaseDialog from './BaseDialog';
        const targetValue = audioOnly ? audioOnlySliderValue : maxDefinitionSliderValue;
     * @private
 * The video quality dialog.
        const distanceToTargetValue = targetValue - activeValue;
        const audioOnlySliderValue = parseInt(await videoQualitySlider.getAttribute('min'), 10);

        const videoQualitySlider = this.participant.driver.$(`.${VIDEO_QUALITY_SLIDER_CLASS}`);
        const activeValue = parseInt(await videoQualitySlider.getAttribute('value'), 10);
