
        }
    isScreenShareParticipantById
        const isScreenShare = isScreenShareParticipantById(state, id);

    },
        largeVideo && largeVideo.removeContainer(type);
            const currentStreamId = currentContainer.getStreamID();
     */
        const { localFlipX } = store.getState()['features/base/settings'];

                videoStream,
     */
    }
    /**
    /**
        if (!largeVideo) {
        // if we are hiding a container and there is focusedVideo
    },
        const state = APP.store.getState();
    getLargeVideoID() {

    onLastNEndpointsChanged(endpointsLeavingLastN, endpointsEnteringLastN) {
     * @private
        VideoLayout.resizeVideoArea();
            largeVideo.updateLargeVideoAudioLevel(lvl);

    },
        if (isScreenShare) {
        // if not then use default type - large video
        if (participant && !participant.getTracksByMediaType('video').length) {
     *
     * @param id the video identifier in the form it comes from the library
    },
     * @return {LargeContainer} the currently displayed container on large
            largeVideo.updateLargeVideo(
    updateLargeVideo(id, forceUpdate, forceStreamToReattach = false) {
     *
     * Handler for local flip X changed event.
            ).catch(() => {
    /**
            return VIDEO_TYPE.CAMERA;
        if (endpointsEnteringLastN) {
        const state = APP.store.getState();
        const participant = APP.conference.getParticipantById(participantId);
     */
        if (!show) {
    /**

        }
     */
    },
    /**
    showLargeVideoContainer(type, show) {
    updateVideoMutedForNoTracks(participantId) {
        return this.isLargeContainerTypeVisible(VIDEO_CONTAINER_TYPE);
                logger.debug('Enforcing large video update for stream change');
    /**
                // do nothing

     */
        if (this.isCurrentlyOnLarge(participantId)) {
     */
/* global APP  */

     */
            const pinnedId = this.getPinnedId();
    getTrackByMediaTypeAndParticipant,
        this._resetLargeVideo();
    refreshLayout() {
        const currentContainer = largeVideo.getCurrentContainer();
     * Returns the wrapper jquery selector for the largeVideo
        if (largeVideo) {
    isLargeVideoVisible() {
    _resetLargeVideo() {
            VideoLayout._updateLargeVideoIfDisplayed(participantId, true);
    _updateLargeVideoIfDisplayed(participantId, force = false) {
const VideoLayout = {
     * endpoints
        }
    getPinnedParticipant,
        return videoTrack?.videoType;
        if (largeVideo && id === largeVideo.id) {
        }
     * @returns {String} the video type video or screen.
        }
     * Cleans up any existing largeVideo instance.
    onLocalFlipXChanged(localFlipX) {

            largeVideo.destroy();
        }
    },
     */
     * @param {boolean} force - Whether or not the large video update should
    },
                videoType || VIDEO_TYPE.CAMERA
        // (pinned remote video) use its video type,
            const videoType = this.getRemoteVideoType(id);
     * Handles window resizes.


    getVideoTrackByParticipant

     * Currently used by tests (torture).


    getRemoteVideoType(id) {
     */
     *
    },
    /**
        return id || null;

     * have to be re-arranged and resized.
        return largeVideo && largeVideo.state === type;
        }
     * @param endpointsLeavingLastN the list currently leaving last N
                && videoStream) {
import LargeVideoManager from './LargeVideoManager';


            largeVideo.onLocalFlipXChange(localFlipX);
        const videoTrack = getVideoTrackByParticipant(state, participant);
    },
            largeVideo.updateContainerSize();

     * Returns the the current video shown on large.
            endpointsLeavingLastN.forEach(this._updateLargeVideoIfDisplayed, this);
    getParticipantById,
    /**
     * @param lvl the new audio level to update to

    /**
     * @returns Promise
        }
import { MEDIA_TYPE, VIDEO_TYPE } from '../../../react/features/base/media/constants';
    addLargeVideoContainer(type, container) {

        if (participant?.fakeParticipant && !isScreenShare) {
        }
        }
        largeVideo && largeVideo.addContainer(type, container);

        return largeVideo && largeVideo.id;
    },
import { VIDEO_CONTAINER_TYPE } from './VideoContainer';
     * @param id the id for the remote video
    },

        largeVideo = null;
            });
     */
        return largeVideo.showContainer(containerTypeToShow);
     * Helper method to invoke when the video layout has changed and elements
     */
        if (isOnLarge && !forceUpdate
        }
            logger.debug(`Ignoring large video update with user id ${id}: large video not initialized yet!`);

        const isVisible = this.isLargeContainerTypeVisible(type);
    },

     * endpoints
            }
} from '../../../react/features/base/participants/functions';


import {
        return largeVideo;
    /**
     *
    isLargeContainerTypeVisible(type) {
    },

                containerTypeToShow = this.getRemoteVideoType(pinnedId);

     * Sets the audio level of the video elements associated to the given id.

        return largeVideo && largeVideo.id === id;
                forceUpdate = true; // eslint-disable-line no-param-reassign
    getCurrentlyOnLargeContainer() {

        largeVideo = new LargeVideoManager();
        if (isVisible === show) {
    getPinnedId() {
        this._resetLargeVideo();
            this.updateLargeVideo(participantId, force, false);
            videoStream.forceStreamToReattach = forceStreamToReattach;
    /**
        if (largeVideo) {
     * On last N change event.
        const videoStream = videoTrack?.jitsiTrack;

    /**
     * @returns {void}
            return;

     * currently displayed on large video.

        }
     * Currently used by tests (torture).
     * @returns {void}

        largeVideo.updateContainerSize();

        const isOnLarge = this.isCurrentlyOnLarge(id);
        if (largeVideo) {
     * @returns {void}

    },
    /**
        if (typeof localFlipX === 'boolean') {
     * Returns the id of the current video shown on large.
     */
        let containerTypeToShow = type;
            return VIDEO_TYPE.DESKTOP;

     */



     * @param {string} participantId
     * @returns {JQuerySelector} the wrapper jquery selector for the largeVideo

        if (videoStream && forceStreamToReattach) {
let largeVideo;

    },
        const { store } = APP;
import Logger from '@jitsi/logger';
    reset() {
     * video.
                id,
export default VideoLayout;
    isCurrentlyOnLarge(id) {
        return largeVideo.getCurrentContainer();
     * Resizes the video area.
     *
     *
    onResize() {
     * Cleans up state of this singleton {@code VideoLayout}.
} from '../../../react/features/base/tracks/functions.any';

     */
    },
        const videoTrack = getTrackByMediaTypeAndParticipant(state['features/base/tracks'], MEDIA_TYPE.VIDEO, id);
                && LargeVideoManager.isVideoContainer(currentContainerType)
};

        const { id } = getPinnedParticipant(APP.store.getState()) || {};

     * update of large video if displayed.
    },

        }
    },
     */
        if (!isOnLarge || forceUpdate) {
     * happen no matter what.
            if (pinnedId) {
        VideoLayout.resizeVideoArea();
            if (currentStreamId !== newStreamId) {
            return Promise.resolve();
        }
    },
    /**
     * If participant has no tracks will make the UI display muted status.
    },
        }
     */
            } else {
import {

const logger = Logger.getLogger('ui:VideoLayout');
    /**
            largeVideo.resize(false);


     * FIXME get rid of this method once muted indicator are reactified (by
            const newStreamId = videoStream?.getId() || null;
            // FIXME it might be possible to get rid of 'forceUpdate' argument
    getLargeVideo() {
                containerTypeToShow = VIDEO_CONTAINER_TYPE;
    },
        if (endpointsLeavingLastN) {
    getLargeVideoWrapper() {
            largeVideo.onLocalFlipXChange(localFlipX);
    },
        const participant = getParticipantById(state, id);
            return Promise.reject();
        }

     * @returns {void}
    },
     * making sure that user with no tracks is displayed as muted )
    resizeVideoArea() {
        if (!largeVideo) {
            endpointsEnteringLastN.forEach(this._updateLargeVideoIfDisplayed, this);

        const currentContainerType = largeVideo.getCurrentContainerType();
        const participant = getParticipantById(state, id);
        return this.getCurrentlyOnLargeContainer().$wrapper;

     * @param endpointsEnteringLastN the list currently entering last N
    removeLargeVideoContainer(type) {
        }
    setAudioLevel(id, lvl) {
    /**
        }

     * Return the type of the remote video.
     * @param {string} participantId - The participant ID that should trigger an
     * Triggers an update of large video if the passed in participant is
    initLargeVideo() {
            }
     *
