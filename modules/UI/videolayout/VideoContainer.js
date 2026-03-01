    return [ availableWidth, availableHeight ];
     *
import Logger from '@jitsi/logger';
     * @param resizeContainer {Function} function that takes care of the size
         */
const containerEvents = [ 'abort', 'canplaythrough', 'ended', 'error', 'stalled', 'suspend', 'waiting' ];
        }
import { FILMSTRIP_BREAKPOINT } from '../../../react/features/filmstrip/constants';
     * @param {number} verticalFilmstripWidth current width of the vertical filmstrip

        videoSpaceWidth,

         * @type {HTMLElement}
 * @param videoHeight the height of the video to position

 *
    }
        this.resizeContainer = resizeContainer;
import { getCurrentLayout } from '../../../react/features/video-layout/functions.any';
     *
    /**

            = this.getVideoPosition(width, height, containerWidth, containerHeight, verticalFilmstripWidth);
        });
        return [ videoSpaceWidth, videoSpaceWidth / aspectRatio ];
        this._resizeListeners = new Set();
     */
            const parentHeight = element.parentElement.getBoundingClientRect().height;
                || browser.isFirefox()
    }
        availableHeight = availableWidth / aspectRatio;
        videoSpaceHeight,
            // stream has been played. But setting width/height to 0 will prevent the video from playing.

    resize(containerWidth, containerHeight, animate = false) {
     * Removes a function from the known subscribers of video element resize
        return document.getElementById('largeVideo');
        this.stream = stream;
     * @param {number} containerWidth container width
     * Adds a function to the known subscribers of video element resize
                this._isHidden = true;
    getStreamID() {

            return computeDesktopVideoSize(width,
            queue: false,
        const maxHeight = videoSpaceHeight * maxZoomCoefficient;
     */


            videoHeight,
     */
    /**

            width = height * aspectRatio;

        } else {
        videoHeight,
        return [ 0, 0 ];
const FADE_DURATION_MS = 300;

                resizeContainer(event);
        availableWidth = availableHeight * aspectRatio;
     * Show or hide user avatar.
            logger.debug(`SetStream on the large video for user ${userID} ignored: the stream is not changed!`);
            }, FADE_DURATION_MS);

    }
    getStreamSize() {
    }
            // stream won't be played. Normally if we attach a new stream we won't resize the video element until the
        return computeCameraVideoSize(width,
            width: video.videoWidth,
     */
 */
    case 'height':
        const maxZoomCoefficient = interfaceConfig.MAXIMUM_ZOOMING_COEFFICIENT
function computeCameraVideoSize( // eslint-disable-line max-params
import { setLargeVideoDimensions } from '../../../react/features/large-video/actions.any';

     * @return {string|null}
        this.userId = userID;
        this.userId = null;
     * Changes the flipX state of the local video.
    }

import { LAYOUTS } from '../../../react/features/video-layout/constants';
    }
                }
     * Obtains media stream ID of the underlying {@link JitsiTrack}.
        if (this.stream && this.video) {
        // eslint-disable-next-line no-param-reassign
        }
            this._hideBackground = true;
        return new Promise(resolve => {
            if (this.videoType !== videoType) {
 * @param videoSpaceWidth the width of the available space
        if (this.stream && this.isScreenSharing()) {

     * @returns {{availableWidth, availableHeight}}
            return;
     * @returns {void}
        if (!this.video || !this.stream || !this.stream.isLocal() || this.isScreenSharing()) {
                logger.debug(`${event} handler was called for the large video.`);
    }
                userID} because no large video element was found!`);
 * so that if fits its parent.
         * Whether the background should fit the height of the container
                } else {

     * @param {number} containerHeight container height
        return [ videoWidth, videoHeight ];
        });
     * in the middle of the video container or below the avatar.
         * (portrait) or fit the width of the container (landscape).
        };
        return {
import Filmstrip from './Filmstrip';
        // browser does not support WebRTC (yet).

        return new Promise(resolve => {
    const verticalIndent = (videoSpaceHeight - videoHeight) / 2;
        this.showAvatar(false);
 * Container for user video.
            const flipX = stream.isLocal() && this.localFlipX && !this.isScreenSharing();

        );
    if (interfaceConfig.VERTICAL_FILMSTRIP) {
        let containerWidthToUse = containerWidth;
            this.video.style.transform = flipX ? 'scaleX(-1)' : 'none';

    get id() {

        this.video.style.transform = this.localFlipX ? 'scaleX(-1)' : 'none';


            videoWidth,
import UIUtil from '../util/UIUtil';
            videoHeight,


     * @param {Function} callback - The subscriber to notify when the video
            });
    showAvatar(show) {

 * VIDEO_LAYOUT_FIT config, to fit the video to the screen, by hiding some parts
        /**
    /**
        if ((containerWidth > width) || (containerHeight > height)) {
    const aspectRatio = videoWidth / videoHeight;
    }
     */
    if (availableWidth / aspectRatio >= videoSpaceHeight) {
        this._resizeListeners.delete(callback);
    }
        /**
            });


        }
    if (videoWidth === 0 || videoHeight === 0 || videoSpaceWidth === 0 || videoSpaceHeight === 0) {
    }
         * @private

    }
    _play(retries = 0) {
            videoWidth,
        }
 * Returns an array of the video dimensions. It respects the
        this._updateBackground();
/**
            logger.debug('SetStream on the large video is called without a stream argument!');
        }
 * @param videoWidth the width of the video to position
     */
        return this.userId;
     */
        this._resizeListeners.forEach(callback => callback());

     * @param {number} containerWidth container width
         * If the background will not be visible then it is hidden to save
            .catch(e => {
     * @returns {{horizontalIndent, verticalIndent}}

        // hide its avatar
     */

            return;
 */
                this._updateBackground();
            })
     */

        } else {
                height,
 * @return an array with 2 elements, the video width and the video height
         * Flag indicates whether or not the background should be rendered.
        /**

            return;
        this.avatarDisplayed = false;

     * @private
     */
    /**

    }
            this.wrapperParent.style.visibility = 'visible';
                logger.debug(`Successfully played large video after ${retries + 1} retries!`);
    }
        }
 * @param videoSpaceHeight the height of the available space
        return this.videoType === 'desktop';
 *
        return [ 0, 0 ];

     * Callback invoked when the video element changes dimensions.
/**
    }
            const height = element.getBoundingClientRect().height;


            }, FADE_DURATION_MS);
    _updateBackground() {
 * @return an array with 2 elements, the video width and the video height
        this.remoteConnectionMessage = document.getElementById('remoteConnectionMessage');
     * Hide video container.
            // on the largeVideoElementsContainer. Also if the width/height of the video element is 0 the attached
    isScreenSharing() {
     * @param {Function} callback - The callback to remove from known
                videoElement = { this.video }
    if (videoWidth === 0 || videoHeight === 0 || videoSpaceWidth === 0 || videoSpaceHeight === 0) {
            this.wrapperParent.classList.remove('animatedFadeOut');
            }

            const avatarImage = document.getElementById('dominantSpeakerAvatarContainer').getBoundingClientRect();
     * @returns {boolean}
                    window.setTimeout(() => {

    /**
 * @param subtractFilmstrip whether to subtract the filmstrip or not
                containerHeight,
     * the large video, to display blurred video and fill up empty space not

    }
        if (videoSpaceRatio === aspectRatio) {
// Corresponds to animation duration from the animatedFadeIn and animatedFadeOut CSS classes.
     * @param val {boolean} true if flipped.

            this.stream.detach(this.video);
            this.wrapperParent.classList.remove('animatedFadeIn');
                || browser.isWebKitBased()) {
            || Infinity;
            logger.debug(`SetStream on the large video won't attach a track for ${
        videoWidth,
        // explicitly disabled.
                }
        } else {
        this.$wrapper.animate({
}
 * @param videoHeight the original video height


        containerEvents.forEach(event => {

            height = maxHeight;
     *
    }
    }
            this._hideBackground = false;
    /**
            this._play();
            this.wrapperParent.classList.add('animatedFadeOut');
                containerHeight);
         * The HTMLElements of the remote connection message.
     * Updates the positioning of the remote connection presence message and the
            <LargeVideoBackground

            });

            if (interfaceConfig.VERTICAL_FILMSTRIP && verticalFilmstripWidth < FILMSTRIP_BREAKPOINT) {
     * Creates new VideoContainer instance.
/**
        return [ videoSpaceHeight * aspectRatio, videoSpaceHeight ];
        const [ width, height ] = this._getVideoSize(containerWidth, containerHeight, verticalFilmstripWidth);
    default:
            logger.debug('Large video is playing!');
}

     * @returns {void}


        }
    }
    }

    let availableWidth = Math.max(videoWidth, videoSpaceWidth);
    // Parent height isn't completely calculated when we position the video in
                containerWidthToUse -= Filmstrip.getVerticalFilmstripWidth();
}
        if (this.stream && this.isScreenSharing()) {
        videoLayoutFit) {
 * Returns an array of the video horizontal and vertical indents,
    _onResize() {
        if (interfaceConfig.DISABLE_VIDEO_BACKGROUND
     */
import LargeContainer from './LargeContainer';
        videoHeight,
        // eslint-disable-next-line no-param-reassign

     *
            videoSpaceRatio < aspectRatio ? 'width' : 'height');
                containerWidthToUse,
            .then(() => {
        this._updateBackground();

            stream.attach(this.video).catch(error => {
         */
        const state = APP.store.getState();

    hide() {
     * @returns {void}
 */
            duration: animate ? 500 : 0
    }
            // eslint-disable-next-line no-param-reassign
        videoSpaceWidth,
        this.avatar = document.getElementById('dominantSpeaker');
            videoSpaceHeight,
    positionRemoteStatusMessages() {

    getVideoPosition(width, height, containerWidth, containerHeight, verticalFilmstripWidth) {

                resolve();
        this.avatar.style.visibility = show ? 'visible' : 'hidden';
     *
        if (currentLayout === LAYOUTS.TILE_VIEW || currentLayout === LAYOUTS.STAGE_FILMSTRIP_VIEW) {
    const aspectRatio = videoWidth / videoHeight;
        });

 * ratio and fits available area with it's larger dimension. This method
    case 'both': {

    }
        videoSpaceHeight = window.innerHeight;
         *
        }
    /**
 * ensures that whole video will be visible and can leave empty areas.
                containerWidthToUse,
                this._isHidden = false;
    }
     * @returns {void}
        if (this.avatarDisplayed) {
     * taken up by the large video.
        ReactDOM.render(

     */
        this.avatarHeight = document.getElementById('dominantSpeakerAvatarContainer').getBoundingClientRect().height;
        this._positionParticipantStatus(this.remoteConnectionMessage);
        videoSpaceHeight) {

     * @returns {void}

        return computeCameraVideoSize(
         * @type {string|null}
        if (width === 0 || height === 0) {
        videoWidth,
        this.$wrapper = $('#largeVideoWrapper');
        }
                orientationFit = { this._backgroundOrientation }
    show() {
            return;
     * @param {number} retries - Number of retries to play the large video if play fails.
     * @param {number} containerHeight container height
        availableWidth = videoSpaceWidth;
            top: verticalIndent,
                logger.error(`Attaching the remote track ${stream} to large video has failed with `, error);
         */
     * Plays the large video element.

        }
            return;

    }
        videoSpaceHeight,
     * @param {JitsiTrack?} stream new stream
// FIXME should be 'video'
        const maxWidth = videoSpaceWidth * maxZoomCoefficient;
    /**
     */
            logger.debug(`Attaching a remote track to the large video for user ${userID}`);
        return false;
     * Check if current video stream is screen sharing.
        if (stream?.forceStreamToReattach) {
    _getVideoSize(containerWidth, containerHeight, verticalFilmstripWidth) {
     * Calculate optimal video position (offset for top left corner)
     * @param {string} videoType video type
     * @param {boolean} show
    /**

    _positionParticipantStatus(element) {
 *
        this.avatarDisplayed = show;
    /**
import { LargeVideoBackground, ORIENTATION } from '../../../react/features/large-video/components/LargeVideoBackground';
    case 'nocrop':
            right: horizontalIndent
            this._backgroundOrientation = containerWidth > width ? ORIENTATION.LANDSCAPE : ORIENTATION.PORTRAIT;
                this.wrapperParent.style.visibility = 'hidden';
     */
    /**
    }


            return;
     *
            element.style.top = avatarImage.top + avatarImage.height + 10;

            delete stream.forceStreamToReattach;


    /**
        this.positionRemoteStatusMessages();
        this._play = this._play.bind(this);

                resolve();
        let [ width, height ] = computeCameraVideoSize(
        /**
     * Show video container.
        videoSpaceHeight -= Filmstrip.getFilmstripHeight();

            document.getElementById('largeVideoBackgroundContainer')
     * @returns {void}
        // as the container is hidden/replaced by another container
                    && this.stream.isLocal()
        verticalIndent };
                    this.stream
 */
        super();
        const verticalFilmstripWidth = state['features/filmstrip'].width?.current;
    // full screen mode and this is why we use the screen height in this case.
        APP.API.notifyLargeVideoVisibilityChanged(show);
export class VideoContainer extends LargeContainer {
    if (availableHeight * aspectRatio >= videoSpaceWidth) {
function getCameraVideoPosition( // eslint-disable-line max-params
        this.video.play()

    /**
        // Do not the background display on browsers that might experience
    }
 * Returns an array of the video dimensions, so that it keeps it's aspect
     *

            containerWidth,
    setLocalFlipX(val) {
                if (retries < 3) {
        // Avoid NaN values caused by division by 0.
                    logger.debug(`Error while trying to playing the large video. Will retry after 1s. Retries: ${
     */
    /**
 */
        return [ width, height ];
    addResizeListener(callback) {
            interfaceConfig.VIDEO_LAYOUT_FIT);
                        retries}. Error: ${e}`);
     * @returns {void}
    /**
        const { horizontalIndent, verticalIndent }
     */
    // Need to think it further at some point and implement it properly.
            width = maxWidth;
        });

         * on performance.
    constructor(resizeContainer) {
    }

            // Ensure large video gets play() called on it when a new stream is attached to it.
        if (width > maxWidth) {
        if (!stream) {

     *
        }
    return { horizontalIndent,

        this.videoType = videoType;
     * Update video stream.
     * @param {number} height video height

    /**
     * @returns {{width, height}}
export const VIDEO_CONTAINER_TYPE = 'camera';
    /* eslint-disable max-params */
        const { width, height } = this.getStreamSize();
     * for specified video size and container size.
            width,
         * @private
            element.style.top = (parentHeight / 2) - (height / 2);
            setTimeout(() => {
            bottom: verticalIndent,

            height: video.videoHeight
            videoSpaceWidth,
     * of the video container.
        this.localFlipX = true;
     */
    /**
        const currentLayout = getCurrentLayout(state);
         * @type {boolean}
        videoHeight,
        this.videoType = null;
            return;
    let availableHeight = Math.max(videoHeight, videoSpaceHeight);
        APP.store.dispatch(setLargeVideoDimensions(height, width));
    const horizontalIndent = (videoSpaceWidth - videoWidth) / 2;
            videoSpaceRatio < aspectRatio ? 'height' : 'width');
     * @private
        }, {
import $ from 'jquery';
            height,
                        this._play(retries + 1);
    }
                height,
            videoSpaceHeight,

 * indent
        }
                containerWidth,
     * subscribers of video resize events.
 * of it, or to fit it to the height or width.
}
         * @type {boolean}
        this.localFlipX = val;
        this.remotePresenceMessage = document.getElementById('remotePresenceMessage');
    case 'width':
import React from 'react';
/**
/* eslint-disable no-unused-vars */
        /**
        // XXX Prevent TypeError: undefined is not an object when the Web
        const video = this.video;
import ReactDOM from 'react-dom';
     * element resizes.
         *
                this.resizeContainer();
            this.video.addEventListener(event, () => {

        this.stream = null;
        // Avoid NaN values caused by division by 0.


        return getCameraVideoPosition(width,
     * Attaches and/or updates a React Component to be used as a background for

        this._positionParticipantStatus(this.remotePresenceMessage);
                this._updateBackground();
            }
                verticalFilmstripWidth < FILMSTRIP_BREAKPOINT);
        if (this.userId === userID && this.stream === stream && !stream?.forceStreamToReattach) {
     * @param {string} userID


import { browser } from '../../../react/features/base/lib-jitsi-meet';
    /**
                this.videoType = videoType;
 * List of container events that we are going to process for the large video.
            // Handles the use case for the remote participants when the

        if (this.video) {
                height,
    get video() {
        this.wrapperParent = document.getElementById('largeVideoElementsContainer');
            // We don't need to resize the large video since it won't be displayed and we'll resize when returning back
            // desktop sharing.
        };
     */
/* eslint-enable no-unused-vars */
            // We don't need to set 0 for width or height since the visibility is controlled by the visibility css prop
        }
     * Modifies the position of the passed in jQuery object so it displays
     * Get size of video element.
        this.video.onresize = this._onResize.bind(this);
        this._hideBackground = true;
     * @param {number} verticalFilmstripWidth current width of the vertical filmstrip
         */
        videoSpaceWidth,
                    && this.localFlipX
 * @param videoSpaceHeight the height of the video space
     * events.
        }
            this._updateBackground();
            containerHeight,
     */
     * Calculate optimal video size for specified container size.

     * connection status message which escribes that the remote user is having
/**
                hidden = { this._hideBackground || this._isHidden }
            left: horizontalIndent,

     * @return {boolean} switch on dominant speaker event if on stage.
        if (!this.video) {
     * @private
     * @param {number} width video width
            height,
                containerHeight);
     *

function computeDesktopVideoSize( // eslint-disable-line max-params
         */
 * NOTE: Currently used only for logging for debug purposes.
        /* eslint-enable max-params */
            // videoType is received with delay after turning on/off the
            if (typeof resizeContainer === 'function') {
        }
    }
        return this.stream ? this.stream.getId() : null;
        if (subtractFilmstrip) {
    /**
     * connectivity issues.
    setStream(userID, stream, videoType) {
     */
        this.video.onplaying = function(event) {
    if (UIUtil.isFullScreen()) {
    /**
    } else {
 * @param videoWidth the original video width
        this._resizeListeners.add(callback);
        this._isHidden = false;
            videoSpaceWidth,

const logger = Logger.getLogger('ui:VideoContainer');
    /**


        // performance issues from the presence of the background or if
    switch (videoLayoutFit) {
     *
                videoTrack = { this.stream } />,
                    }, 1000);
        }
 * @param videoSpaceWidth the width of the video space
            // to stage view.
    /**
     * events.
                mirror = {
        videoWidth,
            return getCameraVideoPosition(width,

        this._backgroundOrientation = null;
    }
     */
        subtractFilmstrip) {
 *
        // detach old stream

/* global APP, interfaceConfig */
            this.wrapperParent.classList.add('animatedFadeIn');
    }
    stayOnStage() {
        availableHeight = videoSpaceHeight;
 * @return an array with 2 elements, the horizontal indent and the vertical
    removeResizeListener(callback) {
                    logger.error(`Error while trying to playing the large video after 3 retries: ${e}`);
            videoSpaceWidth -= Filmstrip.getVerticalFilmstripWidth();
            setTimeout(() => {
        }
            }

     */
         * A Set of functions to invoke when the video element resizes.
            return [ videoSpaceWidth, videoSpaceHeight ];
        } else if (height > maxHeight) {
    const videoSpaceRatio = videoSpaceWidth / videoSpaceHeight;
            height = width / aspectRatio;
         * Flag indicates whether or not the avatar is currently displayed.
