
     */

    getVerticalFilmstripWidth() {

     * Returns the height of filmstrip
            return document.querySelector('.filmstrip')?.offsetHeight ?? 0;
     * @returns {number} height
        return isFilmstripVisible(APP.store) ? getVerticalFilmstripVisibleAreaWidth() : 0;
    getVerticalFilmstripVisibleAreaWidth,
    /**
import {
     *
/* global APP, interfaceConfig */
        if (isFilmstripVisible(APP.store) && !interfaceConfig.VERTICAL_FILMSTRIP) {
    /**
        // horizontal film strip mode for calculating how tall large video
} from '../../../react/features/filmstrip/functions';
     * Returns the width of the vertical filmstrip if the filmstrip is visible and 0 otherwise.
};
const Filmstrip = {
export default Filmstrip;
    isFilmstripVisible

        // FIXME Make it more clear the getFilmstripHeight check is used in
    },
     * @returns {number} - The width of the vertical filmstrip if the filmstrip is visible and 0 otherwise.
     */
    getFilmstripHeight() {
        return 0;
    }
        }

        // display should be.
