            `0 0 ${ext.blur}px ${ext.level}px ${ext.color}`
    /**
        level = isNaN(level) ? 0 : level;

        };
const AudioLevels = {
            `0 0 ${int.blur}px ${int.level}px ${int.color}`,


     * Updates the large video shadow effect.
    updateLargeVideoAudioLevel(elementId, audioLevel) {
import UIUtil from '../util/UIUtil';
        // External blur.
        return [
            level: parseFloat(
        let shadowElement = element.getElementsByClassName('dynamic-shadow');
        };

        shadowElement.style.boxShadow = this._updateLargeVideoShadow(level);
        const int = {
        int.blur = int.level ? 2 : 0;
        ].join(', ');
        if (shadowElement && shadowElement.length > 0) {
     */

     * @param audioLevel the new audio level to set.
     * Updates the audio level of the large video.
};
        ext.blur = ext.level ? 6 : 0;
        // External circle audio level.
 * Responsible for drawing audio levels.

            color: interfaceConfig.AUDIO_LEVEL_PRIMARY_COLOR
 */
    },
        if (!UIUtil.isVisible(element)) {

        // Internal blur.
            return;

            color: interfaceConfig.AUDIO_LEVEL_SECONDARY_COLOR
        const scale = 2;

/**
        }

        let level = parseFloat(audioLevel);
    }

        const element = document.getElementById(elementId);

            level: level > 0.15 ? 20 : 0,

        // Internal circle audio level.
    /**

    _updateLargeVideoShadow(level) {
export default AudioLevels;
     *

                ((int.level * scale * level) + int.level).toFixed(0)),
        const ext = {
        }
/* global interfaceConfig */
            shadowElement = shadowElement[0];
     */
