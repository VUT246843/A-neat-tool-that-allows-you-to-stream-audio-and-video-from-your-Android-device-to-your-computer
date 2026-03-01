            || document.mozFullScreenElement
     */
        return result;
 */
            || document.webkitFullscreenElement

        return $('<div/>').text(unsafeText)

        let result;
    prependChild(container, newChild) {
     *
    /**
     */
    /**
     */
import $ from 'jquery';

     * parent containers is set to "none". This method will NOT check the
            .html();
     */
const UIUtil = {
        const firstChild = container.childNodes[0];
 * Created by hristo on 12/22/14.
/**

        if (firstChild) {
        return el.offsetParent !== null;
     * Inserts given child element as the first one into the container.
     * Indicates if we're currently in full screen mode.
        }

    /**

    isFullScreen() {
    },
            result = container.appendChild(newChild);
     * @return {boolean} {true} to indicate that we're currently in full screen
            || document.msFullscreenElement);
    isVisible(el) {
    /**
export default UIUtil;
     * Checks if the given DOM element is currently visible. The offsetParent
    },
    escapeHtml(unsafeText) {
        } else {
     * Escapes the given text.
    },
     * @param container the container to which new child element will be added
     * @param newChild the new element that will be inserted into the container

     * mode, {false} otherwise
    }
};

     * @param {el} The DOM element we'd like to check for visibility
        return Boolean(document.fullscreenElement
            result = container.insertBefore(newChild, firstChild);
     * will be null if the "display" property of the element or any of its
     * visibility property though.
