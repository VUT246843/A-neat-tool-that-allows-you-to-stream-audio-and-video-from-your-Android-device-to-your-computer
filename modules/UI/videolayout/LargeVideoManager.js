        this.containers[type] = container;
     */

    resizeContainer(type, animate = false) {
     * @param {string} id the id of remote participant(MUC nickname)
            this.preferredHeight = height;
     * @returns {void}

} from '../../../react/features/connection-indicator/functions';
            // change the avatar url on large

    updateLargeVideo(userID, stream, videoType) {
     * the user's connection is either interrupted or inactive.


     */
    destroy() {
            this._videoAspectRatio = currentAspectRatio;
                .attr('data-i18n-options', JSON.stringify(msgOptions));
            // with the same source name. In order to add the streaming status listener we need to check if the isP2P


            this.updateAvatar();
         */
                        }));

                if (this.videoTrack && !this.videoTrack.local) {
     */
            el.style.visibility = show ? 'visible' : 'hidden';
            const shouldHideSelfView = getHideSelfView(state);
            // eslint-disable-next-line no-param-reassign
        this.state = type;
            this.updateInProcess = false;
     */
        let widthToUse = this.preferredWidth || window.innerWidth;
    getParticipantDisplayName,
        const resizableFilmstrip = isFilmstripResizable(state);

        if (this.videoTrack && !this.videoTrack.local) {
     * obtained form "APP.conference" and the message will be displayed if


                // If the intention of this switch is to show the avatar
        if (!container) {
        }

        if (resizableFilmstrip && visible && filmstripWidth.current >= FILMSTRIP_BREAKPOINT) {
                this.showWatermark(true);
            this.showWatermark(false);
        this.preferredHeight = undefined;
                isVideoRenderable}, showAvatar=${showAvatar}`);
                messageKey,
            return this.newStreamData.id;
    }
    removePresenceLabel() {
            || containerType === DESKTOP_CONTAINER_TYPE;
     * Removes any listeners registered on child components, including
        }
     * @param {string} type container type.
     * @param {string|null} messageKey the i18n key of the message which will be
    /**
            return;
        this.removePresenceLabel();

     * Removes the messages about the displayed participant's presence status.
    constructor() {
         */
import { VIDEO_TYPE } from '../../../react/features/base/media/constants';
     */
         */

     * Show or hide watermark.
        }

                }
    getContainer(type) {
const DESKTOP_CONTAINER_TYPE = 'desktop';

        }
     * mixed up with container type.
                            source: 'large-video',
         *
    updateKnownLargeVideoResolution
        const isUserSwitch = container.id !== this.newStreamData.id
        const { width: filmstripWidth, visible } = state['features/filmstrip'];

    getLocalParticipant,
        this.containers = {};
    /**
                    }


        });
     * Switches to large video even if previously other container was visible.
            // but we still should show watermark
     * @param {string} containerType
     * Show Large container of specified type.


            const overrideAndHide = APP.conference.isAudioOnly();

                    !overrideAndHide && messageKey);

        if (this.state === type) {

        this.resizeContainer(type);
        // Include hide()/fadeOut if we're switching between users or between different sources of the same user.
                        this.videoTrack.jitsiTrack.getTrackStreamingStatus()));
     * @param {string} id - The participant ID whose associated user's presence
        const watermark = document.querySelectorAll('.watermark');

        this.videoContainer = new VideoContainer(() => this.resizeContainer(VIDEO_CONTAINER_TYPE));
        }
    /**
         * The video track in effect.
        const container = this.getContainer(type);
        this._onVideoResolutionUpdate
                // enabled yet when we auto pin the participant.
            this._dominantSpeakerAvatarContainer
        // use a custom hook to update a local track streaming status.
                    <I18nextProvider i18n = { i18next }>
        // resize all containers

                return container.hide();
     * Updates the src of the dominant speaker avatar
            // show the avatar on large if needed

            // Clean up audio level after previous speaker.

        const isConnectionMessageVisible = getComputedStyle(
            ReactDOM.render(
     * @returns {LargeContainer}
    isTrackStreamingStatusInterrupted
     *
            // Remove track streaming status listener from the old track and add it to the new track,
     * @throws an <tt>Error</tt> if there is no container for the current
     * Updates the text which describes that the remote user is having
        /**
    /**
     */
        );
                    APP.store.dispatch(trackStreamingStatusChanged(this.videoTrack.jitsiTrack,
        if (typeof show !== 'boolean') {
            // (camera or desktop) is a completely different thing than
         * The preferred width passed as an argument to {@link updateContainerSize}.
    /**

                    || streamingStatusActive


    scheduleLargeVideoUpdate() {
                this.showWatermark(true);
                LargeVideoManager.isVideoContainer(this.state));
        this.width = widthToUse;
     * @private

        this.videoTrack = undefined;
    removeContainer(type) {
     * Does nothing if such container is already visible.
     * @returns {void}
                    || isLocalScreenshareParticipant(participant)
     * {@link state}.
                            className = 'presence-label' />
     * @param {JitsiTrack?} stream new stream

    }

     * resolution changes.


                || this.videoTrack?.jitsiTrack?.isP2P !== videoTrack?.jitsiTrack?.isP2P) {
            const isVideoMuted = !stream || stream.isMuted();
            const legacyScreenshare = videoType === VIDEO_TYPE.DESKTOP && !isScreenShareParticipant(participant);
        /**
            = document.getElementById('dominantSpeakerAvatarContainer');
     *
            = this._onVideoResolutionUpdate.bind(this);

    static isVideoContainer(containerType) {
     * Handle track streaming status change event by


         */
     * @param userID the userID of the participant associated with the stream


     * @return {string}
        if (!this.containers[type]) {
    }
            }
import { JitsiTrackEvents } from '../../../react/features/base/lib-jitsi-meet';
        this.container.style.display = 'none';
import ReactDOM from 'react-dom';
            // FIXME this does not really make sense, because the videoType
import { I18nextProvider } from 'react-i18next';
    }
     * @param {boolean} show
            // in order to stop updating track streaming status for the old track and start it for the new track.
            // consistent and an avatar is displayed on the original participant thumbnail as long as screenshare is in
            const videoTrack = getVideoTrackByParticipant(state, participant);
     * Add container of specified type.
import { getParticipantsPaneOpen } from '../../../react/features/participants-pane/functions';
    showWatermark(show) {
            logger.debug(`Scheduled large video update for ${id}`);

         * This is used to add and remove listeners on track streaming status change.
            return promise;
        this.preferredWidth = undefined;

            this.videoContainer.positionRemoteStatusMessages();
        ReactDOM.unmountComponentAtNode(this._dominantSpeakerAvatarContainer);
         *
            // Change the participant id the presence label is listening to.
        }
        return container;
    /**
     */
                    const isScreenSharing = track?.videoType === 'desktop';
        if (this.updateInProcess
     */
                // we need to make sure that the video is hidden
     * the middle of the screen or below the avatar image.
            // Multi-stream is not supported on plan-b endpoints even if its is enabled via config.js. A virtual

import AudioLevels from '../audio_levels/AudioLevels';
    getCurrentContainerType() {
        }
    }

        const container = this.getCurrentContainer();
        this.container.addEventListener('mouseenter', e => this.onHoverIn(e));
     *
                // is a bigger refactoring
const logger = Logger.getLogger('ui:videolayout');
        const container = this.getCurrentContainer();
    isTrackStreamingStatusActive,
        // If a user switch for large video is in progress then provide what
     *
            document.getElementById('remoteConnectionMessage')).display !== 'none';
            widthToUse -= getVerticalViewMaxWidth(state);
            const { id, stream, videoType, resolve } = this.newStreamData;

        const state = APP.store.getState();
     */
        return container.id;
/* eslint-disable no-unused-vars */
        if (this._videoAspectRatio !== currentAspectRatio) {
            this.removePresenceLabel();
    /**
            // after everything is done check again if there are any pending
            }
     * the message text.
            // because it's based on the video playback status.
                        this.videoTrack.jitsiTrack.getTrackStreamingStatus()));
                    </I18nextProvider>
     * @return {boolean}
            const state = APP.store.getState();
        }
        }
        const container = this.getCurrentContainer();

     * @param {boolean|undefined} [show=undefined] <tt>true</tt> to show
    }
     * Remove Large container of specified type.
            // do not show stream if video is muted

    /**

        if (presenceLabelContainer) {
                <Provider store = { APP.store }>
         * @type {number}
     */
     */
        // Container.resize. Probably there's better way to implement this.
            // progress.
                    participantId = { this.id }
        if (!this.state) {

    }
                        this.handleTrackStreamingStatusChanged);
        this.videoContainer.setLocalFlipX(val);
        return this.newStreamData.promise;
     */

    updateAvatar() {
     * status should be displayed.
     * @param {boolean} [animate=false] if resize process should be animated.
     */

            this.updateParticipantConnStatusIndication(
     * Dispatches an action to update the known resolution state of the large video and adjusts container sizes when the
        }
                    id,
        if (show) {
    /**
        }
import {
     * Changes the flipX state of the local video.
     *

        const presenceLabelContainer = document.getElementById('remotePresenceMessage');
                .attr('data-i18n', msgKey)
     *
     * @param {string} type type of container which should be resized.
    }
import { createDeferred } from '../../util/helpers';
            }
import { shouldDisplayTileView } from '../../../react/features/video-layout/functions.any';
            // In the case where we switch from jvb to p2p when we need to switch the p2p and jvb track, they will be
        // FIXME: We are passing resizeContainer as parameter which is calling
import theme from '../../../react/features/base/components/themes/participantsPaneTheme.json';
                        sendAnalytics(createScreenSharingIssueEvent({
            throw new Error(`container of type ${type} doesn't exist`);
            this.resize();
            this.showRemoteConnectionMessage(

                presenceLabelContainer);
     * @returns {Promise}

     */
            promise.then(resolve);
/**

        } else {
            this.showRemoteConnectionMessage(false);
            || container.stream?.getSourceName() !== this.newStreamData.stream?.getSourceName();



        // companion icons/messages. It would be best if the container would
         *
     * @param {string?} videoType new video type
import Logger from '@jitsi/logger';
    resize(animate) {
                            participantID = { id }
            const videoTrack = getVideoTrackByParticipant(state, participant);
            // TODO: when this class is converted to a function react component,
    /**
     *
            && this.newStreamData

    getParticipantById,
        this.newStreamData.videoType = videoType;
     * Shows hides the "avatar" message which is to be displayed either in
        // will be the end result of the update.
                    this.videoTrack.jitsiTrack.on(JitsiTrackEvents.TRACK_STREAMING_STATUS_CHANGED,
                            isAudioOnly,
     * @param {object} msgOptions translation options object.
    _setRemoteConnectionMessage(msgKey, msgOptions) {
     */

        APP.store.dispatch(trackStreamingStatusChanged(jitsiTrack, streamingStatus));
                $('#remoteConnectionMessage'), msgOptions);
    }

import { CHAT_SIZE } from '../../../react/features/chat/constants';
            show = !APP.conference.isLocalId(this.id)
        if (messageKey) {
    }
        const container = this.containers[type];

                { displayName });
        this._videoAspectRatio = 0;
     */

        this._dominantSpeakerAvatarContainer
     * Resize Large container of specified type.
    isLocalScreenshareParticipant,
        const container = this.getContainer(type);
        if (isConnectionMessageVisible) {
     *
                            videoType
                    && ((isAudioOnly && videoType !== VIDEO_TYPE.DESKTOP) || !isVideoRenderable || legacyScreenshare);
            const isAudioOnly = APP.conference.isAudioOnly();
            <Provider store = { APP.store }>
            // the video because of the old track inactive streaming status.
        if (LargeVideoManager.isVideoContainer(this.state)) {
export default class LargeVideoManager {
        if (isOpen && window.innerWidth > 580) {
            this._setRemoteConnectionMessage(
        delete this.containers[type];
     * React Components.
        if (msgKey) {
            } else {
                = getParticipantDisplayName(state, id);
        if (this.newStreamData) {

        const currentAspectRatio = height === 0 ? 0 : width / height;
     * @param {string} type container type.
                // at the same time, but the latter is of higher priority and it
     */
    }
         * @type {number}
    isScreenShareParticipant
            widthToUse -= chatWidth;
            const participant = getParticipantById(state, id);
     * @private
     */
         * @type {Object}

     * Resize all Large containers.
        }
            // and this may mask the problem. But if for some reason the update from the Thumbnail and
        return container.show().then(() => {

    }
        watermark.forEach(el => {

    updateParticipantConnStatusIndication(id, messageKey) {
     * Update container size.
        this.addContainer(DESKTOP_CONTAINER_TYPE, this.videoContainer);


import { createScreenSharingIssueEvent } from '../../../react/features/analytics/AnalyticsEvents';
            logger.debug(`scheduleLargeVideoUpdate: Remote track ${videoTrack?.jitsiTrack}, isVideoMuted=${
     * Update large video.
     *
        /**
 * Manager for all Large containers.
     * @private

     * Displays a message of the passed in participant id's presence status. The
        } else {
     * @param {JitsiTrack} jitsiTrack the track with streaming status updated

                    // remote participant only
    }
            // Hide the message
            if (shouldHideSelfView && localId === id) {
    }
     *
        if (typeof height === 'number') {
     * @param {LargeContainer} container container to add.
     * the avatar message or <tt>false</tt> to hide it. If not provided then
        preUpdate.then(() => {
        this.newStreamData.stream = stream;
    /**

        });
                if ((!shouldDisplayTileView(state) || participant?.pinned) // In theory the tile view may not be

            const container = this.getCurrentContainer();
    }
         *
        // TODO: when this class is converted to a function react component,
     */
            this.preferredWidth = width;

        this.width = 0;
        this.newStreamData = createDeferred();

     * FIXME currently this is a workaround for the problem where video type is
            .forEach(type => this.resizeContainer(type, animate));
        /**
        this.height = this.preferredHeight || window.innerHeight;
        this.container.addEventListener('mouseleave', e => this.onHoverOut(e));

                // the container would be taking care of it by itself, but that
            const isVideoRenderable = !isVideoMuted
            // flag is different. Without this check we won't have the correct stream status listener for the track.
        container.resize(this.width, this.height, animate);
            const chatWidth = state['features/chat'].width?.current ?? CHAT_SIZE;
     * by dispatching an action to update track streaming status for the given track in app state.

            const isVideoContainer = LargeVideoManager.isVideoContainer(videoType);
        if (isParticipantsPaneOpen) {
        const preUpdate = isUserSwitch ? container.hide() : Promise.resolve();
            ReactDOM.unmountComponentAtNode(presenceLabelContainer);
        const { height, width } = this.videoContainer.getStreamSize();
        this.addContainer(VIDEO_CONTAINER_TYPE, this.videoContainer);

    }
        this.state = VIDEO_CONTAINER_TYPE;
     * @param {string} type container type.

            const participant = getParticipantById(APP.store.getState(), this.id);
    /**
            const showAvatar
import $ from 'jquery';
        this.container = document.getElementById('largeVideoContainer');
     */
     *
            this.updatePresenceLabel(id);
import { getVerticalViewMaxWidth, isFilmstripResizable } from '../../../react/features/filmstrip/functions';
            // Get user's display name
         */
     *
        container.onHoverOut(e);
     */
        oldContainer.hide();

     * @returns {void}
        if (typeof width === 'number') {
        }
}
            // ConnectionIndicator components don't happen this may lead to showing the avatar instead of
        }
     * Checks whether given container is a {@link VIDEO_CONTAINER_TYPE}.
         */

            this.newStreamData.reject();
                this.videoTrack = videoTrack;

    updateContainerSize(width, height) {
        // Remove track streaming status listener.
         * container type.
     */
        Object.keys(this.containers)
            // Show it now only if the VideoContainer is on top
    onHoverIn(e) {



     * connectivity issues.
                        this.handleTrackStreamingStatusChanged);
            // screenshare tile is still created when a remote endpoint starts screenshare to keep the behavior

     */
            APP.store.dispatch(updateKnownLargeVideoResolution(height));
                    if (isScreenSharing) {
            return Promise.resolve();
    /**
     * Get Large container of specified type.
            if (this.videoTrack?.jitsiTrack?.getSourceName() !== videoTrack?.jitsiTrack?.getSourceName()
        const { resolution } = APP.store.getState()['features/large-video'];
            return;
/* global APP */
import {
     *
            if (showAvatar) {

         * @type {number|undefined}
    }
     * @private
     */
    getCurrentContainer() {
                    id = "dominantSpeakerAvatar"

                isVideoMuted}, streamingStatusActive=${streamingStatusActive}, isVideoRenderable=${
        return containerType === VIDEO_CONTAINER_TYPE
                && (isTrackStreamingStatusInterrupted(videoTrack) || isTrackStreamingStatusInactive(videoTrack));
import { FILMSTRIP_BREAKPOINT } from '../../../react/features/filmstrip/constants';
    /**

            // resolve updateLargeVideo promise after everything is done
            widthToUse -= theme.participantsPaneWidth;
    }
import Avatar from '../../../react/features/base/avatar/components/Avatar';
     * shown on the large video area.
     */
    get id() {
                <Avatar
        this.newStreamData.id = userID;
    updateLargeVideoAudioLevel(lvl) {
    }
    updatePresenceLabel(id) {
     */

        this.height = 0;
        }
        /**
    /**
        const state = APP.store.getState();
                this.handleTrackStreamingStatusChanged);
     * @param {JitsiTrackStreamingStatus} streamingStatus the updated track streaming status
     * @param {string} type container type
    /**

     * @returns {Promise}

            this.videoTrack.jitsiTrack.off(JitsiTrackEvents.TRACK_STREAMING_STATUS_CHANGED,
    _onVideoResolutionUpdate() {
     * @returns {void}
    }
import { VIDEO_CONTAINER_TYPE, VideoContainer } from './VideoContainer';
} from '../../../react/features/base/participants/functions';
            this.showRemoteConnectionMessage(false);
                        // send the event
    }
        // be taking care of it by itself, but that is a bigger refactoring
                if (this.videoTrack && !this.videoTrack.local) {
             * If chat state is open, we re-compute the container width
     * @param val {boolean} true if flipped.
            // use a custom hook to update a local track streaming status.
        this.container.style.display = 'inline-block';
import { trackStreamingStatusChanged } from '../../../react/features/base/tracks/actions.any';
    addContainer(type, container) {
        container.onHoverIn(e);

    /**
    handleTrackStreamingStatusChanged(jitsiTrack, streamingStatus) {
            const displayName
            container.setStream(id, stream, videoType);
} from '../../../react/features/large-video/actions';
import { getSsrcRewritingFeatureFlag } from '../../../react/features/base/config/functions.any';
            throw new Error(`container of type ${type} already exist`);
import {
    }
    /**
        if (!this.state) {
                );
                promise = container.hide();
     * the connection status of the user currently on the large video will be

    /**

    }
        /**
     * displayed on the large video or <tt>null</tt> to hide it.

            this.state = videoType;
        this.videoContainer.addResizeListener(this._onVideoResolutionUpdate);
     *
    /**
     *
                    const track = getVideoTrackByParticipant(state, participant);

        // Bind event handler so it is only bound once for every instance.
         * Cache the aspect ratio of the video displayed to detect changes to
            return;
    }
            && this.newStreamData.id !== container.id) {
    /**

                promise = container.show();
     *
        }
                    size = { 200 } />
    showRemoteConnectionMessage(show) {
        // use the same video container to handle desktop tracks



        ReactDOM.render(


import i18next from '../../../react/features/base/i18n/i18next';
                // FIXME when video appears on top of other content we need to

    }
     *
         * the aspect ratio on video resize events.
                </Provider>,
        return this.getContainer(this.state);
         * The preferred height passed as an argument to {@link updateContainerSize}.
     * @param {boolean} animate if resize process should be animated.
                        <PresenceLabel
    }
    }
            let promise;
            return;
    /**

            // Normally the Thumbnail and ConnectionIndicator components will update the streaming status the same way
        this.scheduleLargeVideoUpdate();
        if (this.containers[type]) {
                // will hide the avatar one if will be displayed.
         * The calculated width that will be used for the large video.
        if (height !== resolution) {
        this.updateInProcess = true;
                this.updateLargeVideoAudioLevel(0);
        }
     *
        const container = this.getCurrentContainer();
            APP.translation.translateElement(
            throw new Error(`container of type ${type} doesn't exist`);
        const isParticipantsPaneOpen = getParticipantsPaneOpen(state);
        }
    showContainer(type) {
                        && participant && !participant.local && !participant.fakeParticipant) {
 */

    /**
import { getVideoTrackByParticipant } from '../../../react/features/base/tracks/functions.any';
    /**
import { getHideSelfView } from '../../../react/features/base/settings/functions.any';
                }

            }
     * @param lvl the new audio level to set
    /**
         * @type {number|undefined}
        this.videoContainer.removeResizeListener(this._onVideoResolutionUpdate);
            // new streams.
        const oldContainer = this.containers[this.state];
            const state = APP.store.getState();
            document.getElementById('remoteConnectionMessage').style.display = 'block';
     */

    /**
     * message will not display if the remote connection message is displayed.
            }
        const presenceLabelContainer = document.getElementById('remotePresenceMessage');
        });
            container.showAvatar(showAvatar);

         * @type {number}

            const localId = getLocalParticipant(state)?.id;
                // "avatar" and "video connection" can not be displayed both
        // FIXME when video is being replaced with other content we need to hide

        if (presenceLabelContainer) {
    onLocalFlipXChange(val) {
         */

                this.showRemoteConnectionMessage(/* fetch the current state */);


        /**

     * @param {string} msgKey the translation key which will be used to get
            // Do not show connection status message in the audio only mode,
import React from 'react';
                    APP.store.dispatch(trackStreamingStatusChanged(this.videoTrack.jitsiTrack,

    /**
        }
     * Updates the audio level indicator of the large video.
        }



     * Returns type of the current {@link LargeContainer}
        }
/* eslint-enable no-unused-vars */
             */

            this.scheduleLargeVideoUpdate();
        }
            if (LargeVideoManager.isVideoContainer(type)) {
     * Returns {@link LargeContainer} for the current {@link state}
        AudioLevels.updateLargeVideoAudioLevel('dominantSpeaker', lvl);
            const messageKey = isTrackStreamingStatusInactive(videoTrack) ? 'connection.LOW_BANDWIDTH' : null;
            // the video container type (Etherpad, SharedVideo, VideoContainer).

        }
    }
    /**

                            isVideoContainer,
            APP.store.dispatch(trackStreamingStatusChanged(this.videoTrack.jitsiTrack,
     *
            this.newStreamData = null;
import { Provider } from 'react-redux';

import PresenceLabel from '../../../react/features/presence-status/components/PresenceLabel';

    isTrackStreamingStatusInactive,
import { sendAnalytics } from '../../../react/features/analytics/functions';
                // show companion icons/messages. It would be best if
        }
                    this.videoTrack.jitsiTrack.off(JitsiTrackEvents.TRACK_STREAMING_STATUS_CHANGED,

     */
         * The calculated height that will be used for the large video.
    onHoverOut(e) {
                this.videoTrack.jitsiTrack.getTrackStreamingStatus()));

                = isVideoContainer
             * by subtracting the chat width, which may be resized by the user.
     * Shows/hides notification about participant's connectivity issues to be
                            isVideoMuted,
                && (APP.conference.isLocalId(id)
            </Provider>,
            $('#remoteConnectionMessage')
                }
        }).then(() => {
         * @type {Object.<string, LargeContainer>}
            /**
        const { isOpen } = state['features/chat'];
         * The map of <tt>LargeContainer</tt>s where the key is the video
            const streamingStatusActive = isTrackStreamingStatusActive(videoTrack);
            document.getElementById('remoteConnectionMessage').style.display = 'none';
            // eslint-disable-next-line no-shadow
     * @return {LargeContainer}
        if (this.updateInProcess || !this.newStreamData) {
        }
        return this.state;
            if (showAvatar) {
