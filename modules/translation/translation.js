
    documentElement.lang = i18next.language;
        return `<span data-i18n="${key}"${optAttr}>${text}</span>`;
/**
     *
 */
 *
    generateTranslationHTML(key, options) {
 */

import i18next from '../../react/features/base/i18n/i18next';
 * Notifies that the {@link i18next} instance has finished its initialization.

     */
    constructor() {
    }


            _onI18nInitialized();
        selector.localize(options ? options : undefined);
    /**
        // XXX i18next expects undefined if options are missing.
        // XXX i18next expects undefined if options are missing.
    }
import jqueryI18next from 'jquery-i18next';
 *
    }

    $('[data-i18n]').localize();
        } else {
        if (i18next.isInitialized) {

    translateElement(selector, options) {
 * @returns {void}
    /**
import $ from 'jquery';
    const documentElement
}
        i18next.on('languageChanged', _onI18nInitialized);
        jqueryI18next.init(i18next, $, { useOptionsAttr: true });
    /**
function _onI18nInitialized() {
        const text = i18next.t(key, options ? options : undefined);



     *
     */
            i18next.on('initialized', _onI18nInitialized);
        = document.documentElement || {};
            = options ? ` data-i18n-options='${JSON.stringify(options)}'` : '';
 * @private
export default new Translation();
     *

class Translation {
}
/**

        }
        const optAttr
     */
