        super();
        this.container.appendChild(iframe);
import VideoLayout from '../videolayout/VideoLayout';
    }
     * @return {boolean} do not switch on dominant speaker event if on stage.
     *
        iframe.id = 'etherpadIFrame';
}
        $(this.iframe)

     *


const ETHERPAD_CONTAINER_TYPE = 'etherpad';
                self.bodyBackground = document.body.style.background;
            height = containerHeight - getToolboxHeight();
     */
        iframe.width = DEFAULT_WIDTH;
        const $container = $(this.container);
                resolve();
    }

        this.iframe = iframe;
export default class EtherpadManager {
        return true;

        return Boolean(this.etherpad);
            $iframe.fadeOut(300, () => {
        } else {

            ETHERPAD_CONTAINER_TYPE, !isVisible);
 */
    /**
    }


     *
    /**
    }
    }
 * Manager of the Etherpad frame.
        const $container = $(this.container);

     */
    openEtherpad() {

 * Container for Etherpad iframe.

}
                APP.store.dispatch(setDocumentEditingState(true));

        VideoLayout.showLargeVideoContainer(
     *
            });
        this.etherpad = null;

    /**

                $container.css({ zIndex: 2 });
    get isOpen() {
     */
    }
        iframe.style.border = 0;
    /**
import Filmstrip from '../videolayout/Filmstrip';
     */
/**
        return new Promise(resolve => {
        const iframe = document.createElement('iframe');

     */
                resolve();
    toggleEtherpad() {
     */
import { getSharedDocumentUrl } from '../../../react/features/etherpad/functions';
        }
class Etherpad extends LargeContainer {
        this.etherpad = new Etherpad(getSharedDocumentUrl(APP.store.getState));
    /**
        return VideoLayout.isLargeContainerTypeVisible(ETHERPAD_CONTAINER_TYPE);

        });
const DEFAULT_WIDTH = 640;
        });
     *


        iframe.src = url;
        );
        VideoLayout.addLargeVideoContainer(
            $iframe.fadeIn(300, () => {
 * Default Etherpad frame height.
import { getToolboxHeight } from '../../../react/features/toolbox/functions.web';
    /**

    }
/**
                $iframe.css({ visibility: 'visible' });
    hide() {

    }
        if (interfaceConfig.VERTICAL_FILMSTRIP) {
import { setDocumentEditingState } from '../../../react/features/etherpad/actions';
/**
    constructor() {
    }
    show() {
     *
        return new Promise(resolve => {
     *
        iframe.height = DEFAULT_HEIGHT;
 */

     * Open new Etherpad frame if there is no Etherpad frame yet.
        const self = this;
    /**
const DEFAULT_HEIGHT = 480;
        return document.getElementById('etherpad');
            this.openEtherpad();
    }
    /**




     * Create new Etherpad frame.
        return Boolean(this.iframe);
            ETHERPAD_CONTAINER_TYPE,
    get container() {

    isVisible() {
        APP.store.dispatch(setDocumentEditingState(!isVisible));

     */
        let height, width;
    /**



    /**
            .height(height);
import $ from 'jquery';
 */
     */
    constructor(url) {
        }
        document.body.style.background = this.bodyBackground;
     */

                APP.store.dispatch(setDocumentEditingState(false));
import LargeContainer from '../videolayout/LargeContainer';
     */
                $iframe.css({ visibility: 'hidden' });


    /**
     * Toggle Etherpad frame visibility.
/**
        const isVisible = this.isVisible();
     */
 * Default Etherpad frame width.
 */
        if (!this.isOpen) {
     *
/* global APP, interfaceConfig */

    resize(containerWidth, containerHeight) {
            this.etherpad
            .width(width)
            height = containerHeight - Filmstrip.getFilmstripHeight();
    }
    stayOnStage() {
     * Creates new Etherpad object
            });
    /**
                $container.css({ zIndex: 0 });
        const $iframe = $(this.iframe);
    }
     */
            width = containerWidth;
                document.body.style.background = '#eeeeee';
        const $iframe = $(this.iframe);
        iframe.scrolling = 'no';
            width = containerWidth - Filmstrip.getVerticalFilmstripWidth();
    get isOpen() {
        iframe.setAttribute('style', 'visibility: hidden;');
