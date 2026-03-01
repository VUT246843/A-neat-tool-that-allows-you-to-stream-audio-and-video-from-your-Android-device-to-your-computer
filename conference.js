            initialDevices.push(MEDIA_TYPE.VIDEO);
        logger.info(`Switching audio input device to ${selectedDeviceId}`);
            return localTracks;
     * Stops P2P (for tests only)
     * @param {boolean} doDisconnect - Whether leaving the room should also terminate the connection.
            dispatch(muteLocal(true, MEDIA_TYPE.VIDEO));
    /**

};
     * Initializes the UI and various other features.
                    return this.useVideoStream(null).then(() =>
        };
        });
                }
                        data,
                    APP.API.notifyEndpointTextMessageReceived({
        if (requestedInput.audio || requestedInput.video) {
    },
            oldAudioDevices = oldAudioDevices.concat(oldDevices.audioInput);
    sendLocalParticipant,
                            && this._untoggleScreenSharing();
    },
        })
     * Download logs, a function that can be called from console while
import { openLeaveReasonDialog } from './react/features/conference/actions.web';
        // so that the user can try unmute later on and add audio/video
    getMyUserId() {
            if (user.isHidden()) {
        if (!tracks.find(t => t.isVideoTrack())) {
                    initialGUMPromise.resolve({
            }
        }
    getNormalizedDisplayName,

    },
            this._handleConferenceJoined);
    /**


    /**
        }
    /**
        } catch (error) {
     */
     * @return {Promise} resolved after the screen sharing is turned off, or
                    : addLocalTrack(newTrack);
    e2eRttChanged,
            APP.store.dispatch(suspendDetected());
            // if audio was muted before changing the device, mute
        if (requestedInput.audio && localAudio) {

    sendEndpointMessage(to, payload) {
                APP.store.dispatch(participantSourcesUpdated(jitsiParticipant));
        }
        // want audio related features (noisy mic, talk while muted, etc.) to work even if the mic is muted.

            .filter(p => !p.isHidden() || !(config.iAmRecorder && p.isHiddenFromRecorder())).length + 1;
        this._stopProxyConnection();


        }
        // Spot uses the _desktopSharingSourceDevice config option to use an external video input device label as
    saveState(filename = 'meet-state.json') {

    DATA_CHANNEL_CLOSED_NOTIFICATION_ID,
        const isDefaultMicSelected = micDeviceId === 'default';
                    APP.store.dispatch(authStatusChanged(authEnabled, authLogin)));
} from './react/features/app/actions';
                        this._untoggleScreenSharing();
                const state = APP.store.getState();
                        }));
    },
            }
            }

                this.updateVideoIconEnabled();
        const newDevices
        }
        }
        downloadJSON(APP.store.getState(), filename);
    participantUpdated,
        // FIXME FOCUS_DISCONNECTED is a confusing event name.
     * @param {boolean} mute true for mute and false for unmute.
    localParticipantRoleChanged,
            APP.store.dispatch(updateSettings({
                        appendSuffix(
        const videoWasMuted = this.isLocalVideoMuted();
    if (!room) {
                },

                logger.error(`Track creation failed on device change, ${error}`);
     * null if not found.
        this._resolve();
            tryCreateLocalTracks = this._createDesktopTrack()
                    APP.store.dispatch(transcriberJoined(id));
     *
     * @returns {void}
            /**
}
     */
import {
        this._localTracksInitialized = false;

        logDevices(ignoredDevices, 'Ignored devices on device list changed:');
                 * stream to use as a local desktop stream.
     * used, before switching to screen sharing.
        // Disable noise suppression if it was enabled on the previous track.
                                hasDefaultMicChanged && (track._realDeviceId = track.deviceId = 'default');
                }
        });
        room.on(JitsiConferenceEvents.PARTICIPANT_SOURCE_UPDATED,
        // The second flow uses functionality from base/conference/middleware.web.js.

                    APP.store.dispatch(transcriberLeft(id, abruptly));
     */
    displayErrorsForCreateInitialLocalTracks,

     * Simulates toolbar button click for video mute. Used by shortcuts and API.
                APP.store.dispatch(localParticipantRoleChanged(role));

    },
            });



    },
    trackAdded,

     * Will be filled with values only when config.testing.testMode is true.
                logger.error(`_turnScreenSharingOff failed: ${error}`);
     * @private

            }
        .then(async stream => {
                        }
        APP.API.notifyConferenceLeft(APP.conference.roomName);
        this._createRoom(localTracks);
    /**
} from './react/features/base/media/actions';
                    () => {
    },
            this._desktopAudioStream = undefined;
                dispatch(gumPending(pendingGUMDevicesToRemove, IGUMPendingState.NONE));
import { disableReceiver, stopReceiver } from './react/features/remote-control/actions';
            if ((track.isAudioTrack() && this.isLocalAudioMuted())
     *
            tryCreateLocalTracks = APP.store.dispatch(createInitialAVTracks({
        }

     * and API.
                return;
            } else {
function disconnect() {

                // it was already established at the beginning of the call, show it sooner otherwise. This notification
                    .then(feedbackDialogClosed, feedbackDialogClosed);
        this._stopProxyConnection();
     *
        return room.getParticipants()

        }
            requestedInput.audio = false;
        // this can be called from console and will not have reference to this
        room.on(
    JitsiE2ePingEvents,
            startWithVideoMuted: getStartWithVideoMuted(state) || isUserInteractionRequiredForUnmute(state)
                return disconnect();
     * Download app state, a function that can be called from console while debugging.


            video: Boolean(newDevices.videoinput)
     *
        if (options.startScreenSharing && config._desktopSharingSourceDevice) {
        const audioMediaDevices = APP.store.getState()['features/base/devices'].availableDevices.audioInput;

        this._createRoom(tracks);
            JitsiConferenceEvents.DATA_CHANNEL_OPENED, () => {
                 */

                /**

            });
     * false otherwise.
                }
    },
     * @param {boolean} [showUI] when set to false will not display any error
    /**
    }

    },

    /**
    },
    },
        }
} from './react/features/base/tracks/actions';

            logger.error(`Failed to switch to selected camera:${cameraDeviceId}, error:${error}`);
            logger.info(`Switching the local video device to ${cameraDeviceId}.`);
        );


     *
import {
    /**
                const formattedDisplayName
        let promise;
            return desktopStreams;
        const user = room.getParticipantById(id);
    },
        // We also do not care about device change, which happens
        room.addCommandListener(this.commands.defaults.EMAIL, (data, from) => {
     * @returns {Promise}
                }
        APP.store.dispatch(conferenceWillInit());

                 * @returns {void}
     */



        room.on(JitsiConferenceEvents.USER_STATUS_CHANGED, (id, status) => {
            }
     *
                return this.useVideoStream(track);
            // The logic shared between RN and web.


    /**
                if (browser.isWebKitBased()) {
    }
     * passed to the {@code ProxyConnectionService}.
                return;

        // When the 'default' mic needs to be selected, we need to pass the real device id to gUM instead of
        room.on(
     */
            const { initialGUMPromise } = getState()['features/base/media'];
            await localAudio.setEffect(undefined);
            cameraDeviceId
import { jitsiLocalStorage } from '@jitsi/js-utils';
                    errors.screenSharingError = error;
                APP.store.dispatch(participantUpdated({
     * Changes the avatar url for the local user
        room.addCommandListener(this.commands.defaults.ETHERPAD,
        }
        }
     * @param {string} message - An optional message to attach to the feedback
         */
        return user && user.isModerator();
                    .then(resolve)

     */
 * @private
            }
    /**
        // we are deprecating this and at some point will get rid of it
    /**
        if (requestedInput.video) {
            // eslint-disable-next-line prefer-rest-params
        APP.store.dispatch(destroyLocalTracks());
        }

     * without any audio tracks.
        if (requestFeedback) {
        room.on(JitsiConferenceEvents.CONFERENCE_FAILED,
        });
    getConferenceOptions,
                        isScreenAudioShared(APP.store.getState())
        room.on(
     * @private
    /**
    flattenAvailableDevices,
     */
import { muteLocal } from './react/features/video-menu/actions.any';
            logger.warn('initial device list initialization failed', error);
    getP2PConnectionState() {
            } catch (error) {

                APP.API.notifyNonParticipantMessageReceived(id, data);

            break;
    JitsiConferenceErrors,
                desktopAudioStream.on(

            const localAudio = getLocalJitsiAudioTrack(APP.store.getState());
        } else {
        };
    participantRoleChanged,
        .then(([ stream ]) => {
                APP.store.dispatch(setVideoUnmutePermissions(disableVideoMuteChange));
    /**
                initPrejoin(tracks, errors, dispatch);
    addLocalTrack,
        let oldAudioDevices = [];
import { getJitsiMeetGlobalNSConnectionTimes } from './react/features/base/util/helpers';
                }
            await localAudioTrack.setEffect(this._mixerEffect);
        // check for video
                    isSilent

        .then(stream => {
    setGUMPendingStateOnFailedTracks,



 * A queue for the async replaceLocalTrack action so that multiple audio
    },
                 * @param {Object} data - The message that should be sent. For
    useAudioStream(newTrack) {
                this.deviceChangeListener);
    /**
        })
            if (this.isLocalId(id)) {
     *
            jitsiParticipant => {
 *
 * A task queue for replacement local video tracks. This separate queue exists
     *
                if (oldTrack === newTrack) {
        createLocalTracksF({
import {
            const feedbackDialogClosed = (feedbackResult = {}) => {
                timeout
                    .then(() => {
 * {@link _replaceLocalAudioTrackQueue}.
            room.addCommandListener(...arguments);
                 * @returns {void}
        // check for audio
        });
            };
    /**
     * rejected with some error (no idea what kind of error, possible GUM error)
        });
    /**
     * @param {boolean} options.startWithVideoMuted - will start the conference

        const localAudio = getLocalJitsiAudioTrack(state);
    /**
     * Creates desktop (screensharing) {@link JitsiLocalTrack}
        // When the 'default' mic needs to be selected, we need to pass the real device id to gUM instead of 'default'

        const options = getConferenceOptions(APP.store.getState());
        room.on(
     */
            for (const track of tracks) {

    },
        APP.store.dispatch(setVideoAvailable(available));
                })

/**
        }
        // user need to rejoin or close, while waking up we can detect
        this._unsubscribe();
            return APP.store.dispatch(notifyCameraError(error));
        }
            return room.leave(reason).then(() => maybeDisconnect())
                if (track.getVideoType() !== VIDEO_TYPE.DESKTOP) {
        this.roomName = roomName;
        if (localVideoTrack?.getDeviceId() === cameraDeviceId) {
    async _turnScreenSharingOff(didHaveVideo, ignoreDidHaveVideo) {
 * lib-jitsi-meet to detect and invoke.


                jitsiConnection: APP.connection,
const commands = {
        const mute = !this.isLocalVideoMuted();
            JitsiMeetJS.mediaDevices.removeEventListener(
     * Exposes a Command(s) API on this instance. It is necessitated by (1) the
                this.deviceChangeListener);


            const [ focus, retrySec ] = params;
            APP.store.dispatch(trackAdded(track));
     * in addition to the score.
 * call in hangup() to resolve when all operations are finished.

    onProxyConnectionEvent(event) {
    /**
     * This fields stores a handler which will create a Promise which turns off
            // the app. Both the errors above are unrecoverable from the library
        // The video functionality is considered available if there are any
            .then(() => {
        APP.store.dispatch(updateSettings({
    async _onDeviceListChanged(devices) {
                 * Callback invoked to pass messages from the local client back
    getStartWithVideoMuted,
        defaults: commands,
     * @param {boolean} options.startWithAudioMuted - will start the conference
     * Leaves the room.

    },
            }
                const timeout = typeof dataChannelOpen === 'undefined' ? 15000 : 60000;
        APP.store.dispatch(updateSettings({
            _replaceLocalVideoTrackQueue.enqueue(onFinish => {
            APP.store.dispatch(showErrorNotification({
                    requestedInput.audio ? realAudioDeviceId : null
                        to: peerJid
        // "Are you trying to speak?" ) even if the user joins the conference muted.

        if (requestedInput.audio && this.isLocalAudioMuted()) {
        room.on(JitsiConferenceEvents.KICKED, (participant, reason, isReplaced) => {

} from './react/features/base/conference/functions';
                /**
     *
                }, timeout);
                }));
     * @param {string} reason - reason for leaving the room.
                descriptionArguments: {


    EMAIL_COMMAND
            }
                APP.store.getState()['features/base/media'].audio.muted);
    },
    lockStateChanged,
        }

                const mediaType = track.getType();
            tracks = localTracks.filter(track => {
                                || defaultRemoteDisplayName)
     * Cleanups local conference on suspend.
        }));
import { setAudioSettings } from './react/features/settings/actions.web';
        const errors = {};

            }
        });
            return;
    nonParticipantMessageReceived,
            new ConferenceConnector(resolve, reject, this).connect();
     */
     * message. If "" - the message will be sent to all participants.
            APP.store.dispatch(notifyMicError(err));
            }
     * @param {JitsiLocalTrack[]} tracks=[]
    /**
        const replaceParticipant = getReplaceParticipant(APP.store.getState());
                }


            // Remove the track from the conference.
import {
     * @private
     * score.
            promises.push(setAudioOutputPromise);
            promise = this.useVideoStream(null);
    getConnectionState() {
            const mutedTrackTypes = [];
                APP.store.dispatch(localParticipantAudioLevelChanged(lvl));
        if (!browser.isWebKitBased()) {
window.JitsiMeetScreenObtainer = {
     */
     */
     */
     *
     * Handles video device changes.
     * Used by Jibri to detect when it's alone and the meeting should be terminated.
        // audio devices detected or if the local audio stream already exists.

        localTracks.forEach(track => {
        case JitsiConferenceErrors.FOCUS_LEFT:
import {
    getStartWithAudioMuted,

        })
            : Boolean(
     * This method is bound to the appropriate values, after switching to screen
        removeCommand() {

     */
                APP.store.dispatch(nonParticipantMessageReceived(id, data));
            logger.debug('Mixing new audio track with existing screen audio track.');
     * Returns whether local audio is muted or not.
    /**
            logger.log(`USER ${id} connected`);
            this._desktopAudioStream = undefined;
/**
     * @returns {Promise}
     */
    changeLocalEmail(email = '') {
        // XXX The API will take care of disconnecting from the XMPP
        room.on(
     * Verify if there is an ongoing system audio sharing session and apply to the provided track
                            && this._untoggleScreenSharing
                 * Callback invoked when the connection has been closed
            const settings = getLocalJitsiAudioTrackSettings(state);
                    .catch(reject)
                await this.useVideoStream(null);
     * reconnect attempts are in progress.

     */

     */
        if (config.startSilent) {
                sendAnalytics(
        room.on(
        // the local storage overrides here and in connection.js can be used by jibri
            JitsiConferenceEvents.CONFERENCE_UNIQUE_ID_SET,
                const { dataChannelOpen } = state['features/base/conference'];
                    if (!open) {

}
                const state = APP.store.getState();
    participantKicked,
                // Add the track to the conference if there is no existing track, replace it otherwise.


        });
        if (jwt?.user?.hiddenFromRecorder) {
        case JitsiConferenceErrors.RESERVATION_ERROR: {
     * Checks whether the participant identified by id is a moderator.
                    return;
        const handleInitialTracks = (options, tracks) => {
    /**
     * desire to keep room private to this instance and (2) the need of other
            localAudio.stopStream();
            devices: [ 'video' ],
            this._handleConferenceJoined.bind(this));

                    return createLocalTracksF(audioOptions)
                    .then(() => stream);
            commonUserLeftHandling(APP.store, room, user);
} from './react/features/base/participants/functions';
    filterIgnoredDevices,


                    errors.audioOnlyError = error;
     * @param {string} cameraDeviceId - The new device id.
     * {@link JitsiLocalTrack} for the screensharing or rejected with
                if (initialGUMPromise) {

    },
        // there will be dialog shown to user.


     */
    setAudioUnmutePermissions,
                    conference: room,

            (participant, data) => {
        /**
                // settings even when the real device id was passed to gUM because of the
    _stopP2P() {
    /**

            APP.store.dispatch(checkAndNotifyForNewDevice(newAvailDevices.videoInput, oldDevices.videoInput));
        APP.UI.initConference();
    _untoggleScreenSharing: null,
        }
        // on resume after suspending PC.
        await APP.store.dispatch(setAudioMuted(mute, true));
        room.on(
                 * out to the external client.
     *
    },
    setVideoAvailable,
    setAudioAvailable,
     *
     * created if missing.
    },
     * @param {boolean} [notifyOnConferenceTermination] whether to notify
                        screenshareParticipantDisplayNameChanged(virtualScreenshareParticipantId, formattedDisplayName)

     *
        switch (err) {
import { ENDPOINT_TEXT_MESSAGE_NAME } from './modules/API/constants';
     * Terminates any proxy screensharing connection that is active.
    CUSTOM_ROLE: 'custom-role',
                // as the server initiated it. We mark in store the local participant
                            descriptionKey,

    },
                = APP.store.dispatch(maybeOpenFeedbackDialog(room, hangupReason))

    async muteAudio(mute) {
    constructor(resolve, reject, conference) {
            // FIXME the conference should be stopped by the library and not by
    get membersCount() {
                        eventData: data
            }
            // 2. When in startSilent mode we want to start with audio muted
        const localVideo = getLocalJitsiVideoTrack(state);
                if (!feedbackResult.wasDialogShown && hangupReason && notifyOnConferenceTermination) {
    },
 */
        const newLabelsOnly = mediaDeviceHelper.newDeviceListAddedLabelsOnly(oldDevices, filteredDevices);
        APP.store.dispatch(conferenceWillLeave(room));
        }, error => {
                return;
         * @param name {String} the name of the command.
    return APP.connection.disconnect().then(onDisconnected, onDisconnected);
        // will return a stream using the old default device.
        this._setupListeners();
        if (this.deviceChangeListener) {
        // in order to get the correct MediaStreamTrack from chrome because of the following bug.
    isParticipantModerator(id) {
        try {
        this._reject(err);


    createInitialAVTracks,
        this._proxyConnection = null;
        room.on(
            const localAudio = getLocalJitsiAudioTrack(state);
                            errors.audioOnlyError = error;
                return Promise.reject(error);
            startAudioOnly: config.startAudioOnly,

        return promise.then(
            APP.store.dispatch(updateRemoteParticipantFeatures(user));
        }
    isAudioOnly() {
                }
     */
        // them at all, we mark corresponding toolbar buttons as muted,
            APP.UI.addUser(user);
    EMAIL: EMAIL_COMMAND,
                    return requestedAudio ? createLocalTracksF(audioOptions) : [];

            APP.store.dispatch(maybeRedirectToWelcomePage(feedback.value ?? {}));
    /**
                APP.store.dispatch(onStartMutedPolicyChanged(audio, video));

        case JitsiConferenceErrors.ICE_FAILED:

        }

    destroyLocalTracks,
            });
    async joinRoom(roomName, options) {

                localAudio,
     * @private
            }
            });
}
    getStats() {
                        });
                logger.debug('Clear the initialGUM promise! (prejoinVisible=true)');
        });
                        logger.error(`useVideoStream failed: ${error}`);
            conferenceTimestamp => {
                APP.UI.updateUserStatus(user, status);
    onSuspendDetected() {

     * @param {string} [hangupReason] the reason for leaving the meeting

    isLocalId(id) {
        room.on(JitsiConferenceEvents.CONFERENCE_JOINED,
    ETHERPAD: 'etherpad'

         */
                descriptionKey: 'dialog.gracefulShutdown',
        logger.debug(`Executed conference.init with roomName: ${roomName} (performance.now=${startTime})`);
                    APP.store.dispatch(

     *
                 *


            clearTimeout(this.reconnectTimeout);
    conferenceWillLeave,
            properties => APP.store.dispatch(conferencePropertiesChanged(properties)));



            }, recordTimeMetrics)).then(({ tracks, errors: pErrors }) => {
                    return true;

            () => APP.store.dispatch(conferenceJoinInProgress(room)));
        sendData(commands.AVATAR_URL, url);
                    conference: room,
            ({ value }) => {
import Recorder from './modules/recorder/Recorder';
        // and system audio sharing, the first is the legacy method using the functionality from conference.js

        // What really happens there is that the library is not ready yet,
            this._mixerEffect = new AudioMixerEffect(currentDesktopAudioTrack);
            (id, data) => {
                 * Pass the {@code JitsiConnection} instance which will be used
            startWithAudioMuted: getStartWithAudioMuted(state) || isUserInteractionRequiredForUnmute(state),
     * the tracks won't exist).
    // end used by torture
        room.on(JitsiConferenceEvents.USER_ROLE_CHANGED, (id, role) => {
                    JitsiMediaDevicesEvents.DEVICE_LIST_CHANGED,
            JitsiConferenceEvents.NON_PARTICIPANT_MESSAGE_RECEIVED,

     * @returns {Promise}
            // matching can be done in cases where the exact ID match is no longer available, such as -
                && !options.startWithVideoMuted
        // The audio functionality is considered available if there are any

        room.on(
            devices: [ 'audio' ],

         * @param values {Object} with keys and values that will be sent.
            new ConferenceConnector(resolve, reject, this).connect();
        logger.debug(`(TIME) createInitialLocalTracks: ${createLocalTracksStart} `);
        APP.store.dispatch(conferenceFailed(room, err, ...params));
     * Retrieve list of ids of conference participants (without local user).

        const { filteredDevices, ignoredDevices } = filterIgnoredDevices(devices);
            }
            // 1. When the camera device has switched USB ports.
    },
                            conference: room,
} from './react/features/base/media/functions';
                        errors
        APP.store.dispatch(disableReceiver());
                        senderInfo: {
                APP.store.dispatch(setAudioUnmutePermissions(disableAudioMuteChange));
        room.on(JitsiConferenceEvents.TRACK_REMOVED, track => {
            }
import {

     * Simulates toolbar button click for audio mute. Used by shortcuts
                && !options.startAudioOnly
            const realAudioDeviceId = hasDefaultMicChanged
                    })
} from './react/features/base/conference/constants';
        }
                APP.store.dispatch(dataChannelOpened());
                // resolve the initialGUMPromise in case connect have finished so that we can proceed to join.
             */
                onSendMessage: (peerJid, data) =>
                    conference: room,
            = videoMediaDevices ? videoMediaDevices.length : 0;
    /**
                        }, NOTIFICATION_TIMEOUT_TYPE.STICKY));


        const audioWasMuted = this.isLocalAudioMuted();
     */
     */
     * Eventually, this instance remains in control with respect to the
            APP.store.dispatch(showNotification({
            if (this.isLocalId(id)) {
        return this._localTracksInitialized
    localParticipantAudioLevelChanged,
     * only audio track will be created and the audio only mode will be turned
                    );
     */
                id: from,
        const tracks = APP.store.getState()['features/base/tracks'];
            (dominant, previous, silence) => {

    /**

        // When the local video is muted and a preferred device is connected, update the settings and remove the track
    getLocalVideoTrack,
    /**
     * Retrieve list of conference participants (without local user).
        let tracks = localTracks;
                newLvl = 0;
                APP.API.notifyReadyToClose();
            // with the new device
    commands: {
     * @param {boolean} options.startAudioOnly=false - if <tt>true</tt> then
            logger.debug(`(TIME) createInitialLocalTracks finished: ${createLocalTracksEnd} `);


        const available = audioDeviceCount > 0 || Boolean(localAudio);
            const state = APP.store.getState();

     */
                 * @param {JitsiLocalTrack} remoteProxyStream - The media
     */
                email: data.value

        };
 * multiple local tracks of the same type to be used.
     * @returns {boolean} true if the connection is in interrupted state or
    createStartSilentEvent,
        })
            logger.error('Start P2P failed', error);
import { createRnnoiseProcessor } from './react/features/stream-effects/rnnoise';
            APP.store.dispatch(showNotification({
                APP.store.dispatch(endpointMessageReceived(participant, data));
import { maybeSetLobbyChatMessageListener } from './react/features/lobby/actions.any';

            JitsiConferenceEvents.LAST_N_ENDPOINTS_CHANGED,
    },
                dispatch(gumPending([ MEDIA_TYPE.AUDIO, MEDIA_TYPE.VIDEO ], IGUMPendingState.NONE));
            const setAudioOutputPromise
            // if we are in audio only mode or video was muted before
                    APP.API.sendProxyConnectionEvent({

    setAudioMuted,
     */
            }
    _localTracksInitialized: false,
        room.on(JitsiConferenceEvents.TRACK_AUDIO_LEVEL_CHANGED, (id, lvl) => {

         * @param command {String} the name of the command
        try {
     */
                        .catch(error => {
    _handleConferenceFailed(err) {
        // from the conference. A new track will be created and replaced when the user unmutes their mic.
     * sharing and stored in {@link _untoggleScreenSharing}.
        APP.store.dispatch(stopReceiver());
            APP.store.dispatch(kickedOut(room, participant));
                        logger.debug('Local screensharing audio track stopped.');
        room.on(JitsiConferenceEvents.TRACK_MUTE_CHANGED, (track, participantThatMutedUs) => {
            }));
            APP.store.dispatch(updateRemoteParticipantFeatures(user));

} from './react/features/base/devices/actions.web';
                descriptionKey: 'notify.startSilentDescription',
                 * The proxy connection feature is currently tailored towards
        }
            .filter(p => p.getTracks().length > 0)
                    botType
                APP.API.notifyReadyToClose();
        })
                        if (track.getType() === MEDIA_TYPE.AUDIO) {
                setGUMPendingStateOnFailedTracks(tracks, APP.store.dispatch);
        const connectionTimes = getJitsiMeetGlobalNSConnectionTimes();
                    resolve();


        );
                APP.store.dispatch(conferenceTimestampChanged(conferenceTimestamp));
        dispatch(conferenceJoined(room));
        room.on(
                });
     */

     */
            && isUserInteractionRequiredForUnmute(state)) {
    // used by torture currently
} from './react/features/notifications/constants';
     * Flag used to prevent the creation of another local video track in this.muteVideo if one is already in progress.
            (leavingIds, enteringIds) =>
        // because Jicofo is not available, but it is going to give it another
     * @param mute true for mute and false for unmute.
        const videoMediaDevices
     *
            // eslint-disable-next-line prefer-rest-params
        return Promise.all(promises)
     * Returns an object containing a promise which resolves with the created tracks &
                 */


     *          returned for the participant using getMyUserId() method)
        let requestedVideo = false;
} from './react/features/base/conference/actions';
            requestedInput.video = false;
                    }
    toggleAudioMuted(showUI = true) {

            requestedVideo = true;
    isJoined() {
                        tracks,
     * dialogs in case of media permissions error.
 */
            if (pendingGUMDevicesToRemove.length > 0) {
 */
            break;
    leaveRoom(doDisconnect = true, reason = '') {

    updateDeviceList
                        desktopStream.dispose();
     *
 * @param {string} value new value
        );
            });
     */

            break;
            JitsiConferenceEvents.CONFERENCE_FAILED,
                    mutedTrackTypes.push(track.getType());
        APP.store.dispatch(setAudioAvailable(available));
        /**
                const trackAction = oldTrack
     * Handles audio device changes.
            });
        if (score === -1 || (score >= 1 && score <= 5)) {
        });
                if (track.isAudioTrack()) {
} from './react/features/base/devices/functions.web';
    getParticipantByIdOrUndefined,
        if (typeof newDevices.audiooutput === 'undefined') {
        // https://bugs.chromium.org/p/chromium/issues/detail?id=997689.
     * should start with screensharing instead of camera video.
            }
            if (this.isAudioOnly() || videoWasMuted) {



        });
 */
     * @returns {Promise}

            JitsiConferenceEvents.SILENT_STATUS_CHANGED,
                        return [ desktopStream ];


        case JitsiConferenceErrors.INCOMPATIBLE_SERVER_VERSIONS:
                titleKey: 'dialog.serviceUnavailable'
        }
        this._unsubscribe();
        if (!config.disableInitialGUM
        }
     */

    /**

        const promises = tracks.map(track => {
            APP.store.dispatch(conferenceWillLeave(room));

            if (isPrejoinPageVisible(getState())) {
} from './react/features/notifications/actions';
        this._reject = reject;
                /**
    room.removeCommand(command);
     */
    getLocalJitsiAudioTrack,
        // to the conference
            }));
     * Callback invoked when the conference has been successfully joined.
     * @param {string} cameraDeviceId - The new device id.

                if (status === JitsiMeetJS.constants.transcriptionStatus.ON) {
                    if (this._untoggleScreenSharing) {
                if (virtualScreenshareParticipantId) {
import { initPrejoin, isPrejoinPageVisible } from './react/features/prejoin/functions';

    isVideoMutedByUser
            APP.store.dispatch(showErrorNotification({

            const tracks = handleInitialTracks(initialOptions, tr);
    endpointMessageReceived,
                    requestedInput.video ? newDevices.videoinput : null,
        APP.store.dispatch(displayErrorsForCreateInitialLocalTracks(errors));
                    logger.debug(`_turnScreenSharingOff using ${stream} for useVideoStream`);
        // from the conference. A new track will be created and replaced when the user unmutes their camera.
    showWarningNotification
        if (currentDesktopAudioTrack) {
        }
        const { desktopAudioTrack } = APP.store.getState()['features/screen-share'];
        room.off(
     * @returns {boolean}
    },
            timeout
        }
                descriptionKey: focus,
     *
} from './react/features/base/participants/actions';


            await room.replaceTrack(this._desktopAudioStream, null);
                });


            logger.error('Unmuting video requires user interaction');
    trackRemoved
        if (!areDevicesDifferent(flattenAvailableDevices(oldDevices), filteredDevices)) {
     * @param {boolean} ignoreDidHaveVideo indicates if the camera video should be

        });
        }
        APP.store.dispatch(_conferenceWillJoin(room));
     */
     * Dispatches the passed in feedback for submission. The submitted score
                    id,


    /**

     * @param {boolean} didHaveVideo indicates if there was a camera video being

        room.off(
            this._desktopAudioStream.dispose();
            });
            JitsiConferenceEvents.DATA_CHANNEL_CLOSED, ev => {


        this._room = room; // FIXME do not use this
                    = getNormalizedDisplayName(displayName);
            if (localVideo) {
                    })
                        // Still fail with the original err

        APP.API.notifyVideoAvailabilityChanged(available);



                } else {
    /**
    isLocalAudioMuted() {
                    return;
        });
            (...args) => {
                        APP.store.dispatch(dataChannelClosed(ev.code, ev.reason));

            return Promise.resolve();
    },
        sendLocalParticipant(APP.store, room);
                // embedding app can choose to dispose the iframe API on the handler.
        this._resolve = resolve;
        return room ? room.getParticipantById(id) : null;
            }
                    promises.push(
            logger.log(`Initialized with ${tracks.length} local tracks`);
            disableAudioMuteChange => {

        const requestedAudio = !config.disableInitialGUM;
    hideNotification,
 * @returns resolved Promise. We need this in order to make the Promise.all
        });
                conference: room,
            }));
    /**

    createLocalTracksF,
                // via initPrejoin
import {

            this._onConferenceFailed);
 */
    getDefaultDeviceId,

                            }));
    setVideoUnmutePermissions
                 *
                connectionTimes['conference.init.end'] = window.performance.now();
                && isUserInteractionRequiredForUnmute(state)) {
     *
    openDesktopPicker(options, onSourceChoose) {
import { IGUMPendingState } from './react/features/base/media/types';
                if (!participant?.avatarURL) {
            disableVideoMuteChange => {
        room.sendEndpointMessage(to, payload);
     */
    submitFeedback(score = -1, message = '') {
     * @returns {string[]}
    muteVideo(mute) {
 * @type {Object}
    _createDesktopTrack() {
    _onConferenceFailed(err, ...params) {
     * @return {Promise.<JitsiLocalTrack>} - A Promise resolved with

        // focus. However, audio track will always be created even though it is not added to the conference since we
        );
            }
    /**
        case JitsiConferenceErrors.VIDEOBRIDGE_NOT_AVAILABLE:
                }
                    this.updateVideoIconEnabled();

        APP.UI.setVideoMuted(this.getMyUserId());

            APP.store.dispatch(updateSettings({
        await APP.store.dispatch(setNoiseSuppressionEnabled(false));
            room.sendCommandOnce(...arguments);
     * @private
                convertVideoToDesktop: true,
            });
    updateTrackMuteState
                            titleKey,
        if (didHaveVideo && !ignoreDidHaveVideo) {

            if (config.iAmRecorder && user.isHiddenFromRecorder()) {

    /**
                        return true;
        this._setLocalAudioVideoStreams(tracks);
            startScreenSharing: config.startScreenSharing,
import {
     * @returns {Promise}
            }
            room && room.stopP2PSession();
            logger.log(`USER ${id} LEFT:`, user);
     * least one track.
                logger.debug('_onDeviceListChanged: Removed the current audio track.');
            }
             * and let the page take care of sending the message, since there will be
                    logger.debug('Resolving the initialGUM promise!');

     * Determines whether or not the audio button should be enabled.
                        logger.warn('Received a non-desktop stream to proxy.');
    },
            logger.info('Dispatching connect from init since prejoin is not visible.');
            this._mixerEffect = undefined;
            return stream;
        APP.store.dispatch(updateDeviceList(filteredDevices));
            APP.store.dispatch(participantUpdated({
        createLocalTracksF({

                    createTrackMutedEvent(mediaType, 'initial mute'));
    getLocalParticipant,
     * @private
     *


         * Removes command.

                APP.store.dispatch(dominantSpeakerChanged(dominant, previous, Boolean(silence), room));
                    })
        };
                 * of the message.
     */
            APP.store.dispatch(participantKicked(kicker, kicked));
        return this.getMyUserId() === id;
        if (room && room.isJoined()) {
        // config).
                micDeviceId: newDevices.audioinput

     * fails.
    },

                pendingGUMDevicesToRemove.push(MEDIA_TYPE.VIDEO);
                APP.store.dispatch(participantUpdated({
                    .catch(error => {
        }
            JitsiConferenceEvents.CONFERENCE_JOINED,
/*
    isConnectionInterrupted() {
    /**
    async init({ roomName, shouldDispatchConnect }) {
     * in case it fails.
    checkAndNotifyForNewDevice,
     * @param filename (optional) specify target filename
     * @param url {string} the new url
            (...args) => APP.store.dispatch(lockStateChanged(room, ...args)));
                 */
    gumPending,
            oldAudioDevices = oldDevices.audioOutput;
            if (config.testing?.testMode) {
            const desktopAudioStream = desktopStreams.find(stream => stream.getType() === MEDIA_TYPE.AUDIO);
     */
                logger.log(`${mediaType} mute: initially muted.`);
        // screenshare and calls getUserMedia instead of getDisplayMedia for capturing the media.
        const createLocalTracksStart = window.performance.now();
const _replaceLocalVideoTrackQueue = createTaskQueue();


            micDeviceId: selectedDeviceId
                updateTrackMuteState(state, APP.store.dispatch, false);
     * @type {Function|null}
        if (!config.tokenAuthUrl) {
     * @param {*} localAudioTrack - track to which system audio track will be applied as an effect, most likely
        }
            break;

import { handleToggleVideoMuted } from './react/features/toolbox/actions.any';
        return room && room.getP2PConnectionState();
    dominantSpeakerChanged,
        /**
         * @param values {Object} with keys and values that will be sent.
     * @param {boolean} [showUI] when set to false will not display any error
    _initDeviceList(setDeviceListChangeHandler = false) {
     */
import { createTaskQueue } from './modules/util/helpers';
        const leavePromise = this.leaveRoom().catch(() => Promise.resolve());
        });

            let tracks = [];
        sendData(commands.EMAIL, formattedEmail);
        const formattedEmail = String(email).trim();
    browser
        })
                await this.useAudioStream(null);
        return Promise.allSettled(promises).then(() => {
                        participantUpdated({
        connectionTimes['conference.init.createLocalTracks.start'] = createLocalTracksStart;
    },
                return stream.mute()
        },

            newAudioDevices = newAvailDevices.audioOutput;
        if (!tracks.find(t => t.isAudioTrack())) {
import {
                    duration === 0 ? null : duration));

     * Returns whether or not the conference is currently in audio only mode.
                newLabelsOnly);



        default:
        tracks.forEach(track => {
        // our settings.

            room.sendCommand(...arguments);
     * the errors resulting from that process.
                if (participant.isHiddenFromRecorder()) {
        // for the second by checking 'features/screen-share' state.
            this._proxyConnection = new JitsiMeetJS.ProxyConnectionService({
                onConnectionClosed: () => {
        const initialDevices = config.startSilent || config.disableInitialGUM ? [] : [ MEDIA_TYPE.AUDIO ];
        room.on(JitsiConferenceEvents.PARTCIPANT_FEATURES_CHANGED, user => {
     * @id id to search for participant
            this._onConferenceFailed.bind(this));
     * @returns {Promise}
     */

    },
                        .then(([ audioStream ]) =>
import { connect } from './react/features/base/connection/actions.web';
        });
const logger = Logger.getLogger('app:conference-web');
                localVideo,

     * decision whether the Command(s) API of room (i.e. lib-jitsi-meet's
                return false;
                    APP.store.dispatch(

    conferencePropertiesChanged,
        try {
    conferenceSubjectChanged,
    screenshareParticipantDisplayNameChanged,
                    isReplaced
     * Changes the email for the local user
        if (!this._proxyConnection) {
            JitsiConferenceEvents.P2P_STATUS,
            throw error;
     * @returns {Promise[]}

        options.createVADProcessor = createRnnoiseProcessor;
    if (!APP.connection) {


        return maybeDisconnect();
    async onAudioDeviceChanged(micDeviceId) {

        room.on(
import Logger from '@jitsi/logger';
            APP.store.dispatch(checkAndNotifyForNewDevice(newAudioDevices, oldAudioDevices));
            }
        const jwt = APP.store.getState()['features/base/jwt'];
        const { tryCreateLocalTracks, errors } = this.createInitialLocalTracks(initialOptions, true);
                }));
                    });
            APP.UI.updateLargeVideo(displayedUserId, true);
};
            const user = room.getParticipantById(id);
     *
     * @return {string|null} ICE connection state or <tt>null</tt> if there's no
     * Starts P2P (for tests only)
            (id, botType) => {
    startConference(tracks) {

            try {
     * as a AudioMixer effect.
            JitsiE2ePingEvents.E2E_RTT_CHANGED,
import { MEDIA_TYPE, VIDEO_MUTISM_AUTHORITY, VIDEO_TYPE } from './react/features/base/media/constants';
 */
            logger.error('Unmuting audio requires user interaction');
                const state = APP.store.getState();
     */

            await this._initDeviceList();
 * Known custom conference commands.
     * Checks whether or not our connection is currently in interrupted and
            if (setDeviceListChangeHandler) {


            = APP.store.getState()['features/base/devices'].availableDevices.videoInput;
 *

let room;
                        return;
                }
    },
    commonUserJoinedHandling,
        room.on(
        room.on(

} from './react/features/base/tracks/functions';
     * Sets local video and audio streams.

            room = undefined;
     * @param email {string} the new email
                    .catch(err => {

     * the user on conference termination
    _setupListeners() {
        });
        // Restore initial state.
    }
            }
                // as being replaced based on jwt.
import { showDesktopPicker } from './react/features/desktop-picker/actions';


    },
                        // Handle case where screen share was stopped from  the browsers 'screen share in progress'
        return room.getParticipants();
        return onDisconnected();
    },
                },
            if (this.isLocalId(id) && localAudio?.isMuted()) {
     * Callback invoked by the external api create or update a direct connection
        };
    },
            if (user) {
            newAudioDevices = newAudioDevices.concat(newAvailDevices.audioInput);

        const requestedInput = {
     * any video, before switching to screen sharing ? was it muted ?).
            }
            throw error;

            }
                            id: participant.getId()
                APP.store.dispatch(participantRoleChanged(id, role));
     * Creates a Promise which turns off the screen sharing and restores
     * the screen sharing and restores the previous video state (was there
     * @param id the id for the user audio level to return (the id value is
                    return APP.store.dispatch(
            if (config.iAmRecorder) {

    showNotification,
    toggleScreensharing as toggleScreensharingA,
                filteredDevices,
        this._localTracksInitialized = false;
     * Returns the stored audio level (stored only if config.debug is enabled)
        Promise.allSettled([ feedbackResultPromise, leavePromise ]).then(([ feedback, _ ]) => {

                    const { dataChannelOpen: open } = APP.store.getState()['features/base/conference'];
                // this event triggers when the local participant is kicked, `participant`
                            jid: participant.getJid(),
    areDevicesDifferent,
     * Simulates toolbar button click for video mute. Used by shortcuts and API.

                } = state['features/base/config'];
    listMembersIds() {
                this.deviceChangeListener = devices =>
            dispatch(connect());
        const getDesktopStreamPromise = createLocalTracksF({
    /**
            JitsiConferenceEvents.TRANSCRIPTION_STATUS_CHANGED,
                            id: from,
        APP.store.dispatch(setScreenAudioShareState(false));
import { toggleScreenshotCaptureSummary } from './react/features/screenshot-capture/actions';
            let localTracks = tracks;

            feedbackResultPromise
    /**
            }

export default {
        const formattedUrl = String(url).trim();
    JitsiConferenceEvents,

                APP.store.dispatch(trackAction)
        APP.store.dispatch(showDesktopPicker(options, onSourceChoose));
    participantPresenceChanged,
        // try.


                        Promise.reject(error)
    JitsiMediaDevicesEvents,
                    }
            _replaceLocalAudioTrackQueue.enqueue(onFinish => {
                    });

            }, NOTIFICATION_TIMEOUT_TYPE.SHORT));
        return Promise.resolve();

    createInitialLocalTracks(options = {}, recordTimeMetrics = false) {
    /**
                // workaround for the default device to be shown as selected in the
            this._initDeviceList(true);
                 * has provided a video stream, intended to be used as a local

            dispatch(setVideoUnmutePermissions(true, true));
                return stream.mute()

        room = APP.connection.initJitsiConference(APP.conference.roomName, this._getConferenceOptions());
        // if user didn't give access to mic or camera or doesn't have
            });
                return this.useAudioStream(track);
                    }


         */
        const { dispatch } = APP.store;
     * @param {boolean} setDeviceListChangeHandler - Whether to add the deviceList change handlers.

                && !options.startScreenSharing) {
     */
            } else {
        return room.isConnectionInterrupted();
     */
    },
                });
        /**
     * @param {string} to the id of the endpoint that should receive the
             * Don't call {@code notifyReadyToClose} if the promotional page flag is set
    participantSourcesUpdated,
        const displayedUserId = APP.UI.getLargeVideoID();

                    promises.push(
            APP.store.dispatch(setAudioSettings(settings));
     * dialogs in case of media permissions error.

                    .then(onFinish);
        );
     */
        room.on(JitsiConferenceEvents.TRACK_UNMUTE_REJECTED, track => APP.store.dispatch(destroyLocalTracks(track)));
                            avatarURL: data.value
    }

        logger.debug(`useVideoStream: ${newTrack}`);
        .then(() => {
        APP.store.dispatch(handleToggleVideoMuted(mute, showUI, ensureTrack));
        const { tryCreateLocalTracks, errors } = this.createInitialLocalTracks(options);
                logger.info(`My role changed, new role: ${role}`);
     */
                track.mute();
    _onConferenceJoined() {
    _unsubscribe() {
        }
            JitsiConferenceEvents.DISPLAY_NAME_CHANGED,
                            track.stopStream();
                    logger.error('Failed to obtain desktop stream', error);
        });
import { getLocalJitsiAudioTrackSettings } from './react/features/base/tracks/functions.web';
                        this.updateAudioIconEnabled();
        room.on(JitsiConferenceEvents.USER_LEFT, (id, user) => {
     * @private
     * Event listener for JitsiMediaDevicesEvents.DEVICE_LIST_CHANGED to

     * @param {boolean} ensureTrack - True if we want to ensure that a new track is
                const participant = getParticipantByIdOrUndefined(APP.store, from);
    getNumberOfParticipantsWithTracks() {
     */
    /**
                .catch(error => {
        // If the tracks are not ready, read from base/media state
        /**
        return room && room.myUserId();
import {
            this.setVideoMuteStatus();
        // created before the permissions were rejected (through browser
import mediaDeviceHelper from './modules/devices/mediaDeviceHelper';
 * Disconnects the connection.
        if (config.iAmRecorder) {
                pendingGUMDevicesToRemove.push(MEDIA_TYPE.AUDIO);
        }
    },
    room.sendCommand(command, { value });
import {


import { maybeOpenFeedbackDialog, submitFeedback } from './react/features/feedback/actions';
    /**
    reloadWithStoredParams
/**
                    });
     * the previous state described by the arguments.
        // null will take care of the desktop audio stream cleanup.
     * @private
        const promises = [];
    maybeRedirectToWelcomePage,
import {
                connectionTimes['conference.init.end'] = window.performance.now();
            const { dispatch } = APP.store;
        const state = APP.store.getState();
    /**
                    code,
        this.reconnectTimeout = null;
        return room.getParticipants().map(p => p.getId());
        case JitsiConferenceErrors.FOCUS_DISCONNECTED: {
            (jitsiConference, p2p) =>
    NOTIFICATION_TIMEOUT_TYPE
        // spend much time displaying the overlay screen. If GUM is not resolved within 15 seconds it will

        // server (and, thus, leaving the room) on unload.
        // https://bugs.chromium.org/p/chromium/issues/detail?id=997689
    /**
            .length;
                APP.store.dispatch(conferenceUniqueIdSet(room, ...args));
                // is the kicker. In replace participant case, kicker is undefined,
            return;

    async _maybeApplyAudioMixerEffect(localAudioTrack) {
                        reject(error);

     */
        sendAnalytics(createDeviceChangedEvent('audio', 'input'));

    getPeerSSRCAudioLevel(id) {
        // we want to ignore this event in case of tokenAuthUrl config
    /**
                    localTracks = localTracks.filter(track => {

    /**
                descriptionKey: 'dialog.reservationErrorMsg',
                APP.API.notifyDisplayNameChanged(id, {
 * so video replacement is not blocked by audio replacement tasks in the queue
                    JitsiTrackEvents.LOCAL_TRACK_STOPPED,
    /**

    },
     * API of this instance.
    /**
    conferenceUniqueIdSet,
        return options;
                logger.debug(`_setLocalAudioVideoStreams is calling useVideoStream with track: ${track}`);
            return this.useVideoStream(stream);
    }
        room.on(

                });
        if (this.deviceChangeListener) {
    },
};
                        this.useVideoStream(track));
        const { dispatch } = APP.store;
                // which will guarantee us that the local tracks are added to redux before we proceed.
            return;
     * Setup interaction between conference and UI.
        this._conference = conference;
                    conference: room,
        const initialOptions = {
            // changing device, then mute
        const oldDevices = state['features/base/devices'].availableDevices;
        }));

        this._proxyConnection.processMessage(event);
                    if (desktopStream.videoType !== 'desktop') {
         * Receives notifications from other participants about commands aka
    /**
                        const descriptionKey = getSsrcRewritingFeatureFlag(state)

                sendAnalytics(createScreenSharingEvent('stopped',
            }

    },
        downloadJSON(logs, filename);
    },

                 *
                    });
            ({ audio, video }) => {
            (...args) => APP.store.dispatch(e2eRttChanged(...args)));
     * and create local tracks.
        return room && room.isJoined();

    },
            }
                    this.deviceChangeListener);
            } else if (track.isVideoTrack()) {
     *
     * @returns {JitsiParticipant|null} participant instance for given id or

        // add local streams when joined to the conference
     * Updates the list of current devices.
        return;
        })
                APP.store.dispatch(conferenceLeft(room, ...args));
        const hasDefaultMicChanged = newDevices.audioinput === 'default';
            JitsiConferenceEvents.CONFERENCE_CREATED_TIMESTAMP,
                return maybeDisconnect();
     * from the local client to an external client.
        } else if (requestedAudio || requestedVideo) {
        // We check if system audio sharing was done using the first flow by verifying this._desktopAudioStream and
import { suspendDetected } from './react/features/power-monitor/actions';
        },
    conferenceWillInit,

                        },

                    window.setTimeout(() => this._onDeviceListChanged(devices), 0);
    /**

            sendAnalytics(createStartSilentEvent());
                const state = APP.store.getState();
        // that's why we reference the global var
     * Tells whether the local video is muted or not.
     */
        room.on(
                // Since the conference is not yet created in redux this function will execute synchronous
            APP.store.dispatch(submitFeedback(score, message, room));

                (authEnabled, authLogin) =>
} from './react/features/analytics/AnalyticsEvents';

    _stopProxyConnection() {
     * dialogs in case of media permissions error.
        this.roomName = roomName;

            // there any video before and whether was it muted.
     * ignored when switching screen sharing off.
     *
                const oldTrack = getLocalJitsiVideoTrack(state);

    },
     * Determines whether or not the video button should be enabled.
                 * @returns {void}
        );
                }
        });
            // Stores the "untoggle" handler which remembers whether was
    }
    /**
                track.mute();
            this.commands.defaults.AVATAR_URL,
    conferenceJoinInProgress,
                }
        room.addCommandListener(

            }
        const didHaveVideo = !this.isLocalVideoMuted();
            JitsiConferenceEvents.CONFERENCE_JOIN_IN_PROGRESS,
     * Open new connection and join the conference when prejoin page is not enabled.
            (id, isSilent) => {
        // Always get a handle on the audio input device so that we have statistics (such as "No audio input" or
            });
                return;
        if (this._proxyConnection) {
        return room.getSpeakerStats();
            logger.error('Ignored not an audio nor a video track: ', track);
        room.on(
                    createLocalTracksF,

                    );

    isUserInteractionRequiredForUnmute
        return {
    getParticipantById(id) {
            if (user.isHidden()) {
                    .then(onFinish);
        const state = APP.store.getState();
     * @throws NetworkError or InvalidStateError or Error if the operation
        // the second is used when both sendMultipleVideoStreams and sourceNameSignaling flags are set to true.

                    if (!requestedAudio) {
                APP.store.dispatch(displayErrorsForCreateInitialLocalTracks(errors));
            }));
                this.audioLevelsMap[id] = newLvl;
                 */
        const available = videoDeviceCount > 0 || Boolean(localVideo);
        return getDesktopStreamPromise.then(desktopStreams => {
                }
    }
                APP.store.dispatch(conferenceTimestampChanged(0));
    commonUserLeftHandling,
        if (requestedInput.video && this.isLocalVideoMuted()) {
            if (doDisconnect) {
        return new Promise((resolve, reject) => {
        }


                    }),



                return tracks;
                }
    _startP2P() {
            }, NOTIFICATION_TIMEOUT_TYPE.LONG));
     * should be a number inclusively between 1 through 5, or -1 for no score.
        const startTime = window.performance.now();
                    msg
    isSharingScreen: false,
     * until those are created (or not, but at that point it's certain that
        room.join(jitsiLocalStorage.getItem('xmpp_conference_password_override'), replaceParticipant);
     * @param {boolean} [requestFeedback=false] if user feedback should be
     * Check if id is id of the local user.
     */
                 * to fetch TURN credentials.
                /**

        });
        const logs = APP.connection.getLogs();
            APP.store.dispatch(participantPresenceChanged(id, status));
        );

                // if already set from presence(jwt), skip the command processing
     *
                    onFinish();
     * modules to send and receive commands to and from participants.
                APP.store.getState()['features/base/tracks'],

                        openLeaveReasonDialog(hangupReason)).then(() => feedbackResult);
        const videoDeviceCount
    /**
    _setLocalAudioVideoStreams(tracks = []) {
     * @param {JitsiLocalTrack} newTrack - new track to use or null
        if (displayedUserId) {

    conferenceJoined,
            ? isLocalTrackMuted(APP.store.getState()['features/base/tracks'], MEDIA_TYPE.VIDEO)
     */
         */
                 * desktop screen.
                devices: initialDevices,

            return dispatch(getAvailableDevices())
                return Promise.resolve(feedbackResult);
        // camera wakeup as a problem with device.
            this._untoggleScreenSharing

     * Its used by torture to check audio levels.
        const localTracks = await tryCreateLocalTracks;
     * @private

/**
            JitsiConferenceEvents.BOT_TYPE_CHANGED,

    conferenceTimestampChanged,
                    ? replaceLocalTrack(oldTrack, newTrack, room)
    onStartMutedPolicyChanged,
                            return false;

            desktopSharingSourceDevice: config._desktopSharingSourceDevice,
        APP.store.dispatch(toggleScreenshotCaptureSummary(false));
            : isVideoMutedByUser(APP.store);
        return new Promise((resolve, reject) => {
            JitsiConferenceEvents.DOMINANT_SPEAKER_CHANGED,
    connect() {
        // probably never resolve.
    /**
import { downloadJSON } from './react/features/base/util/downloadJSON';
            // eslint-disable-next-line prefer-rest-params
     * @return {boolean} whether the participant is moderator
        if (this.reconnectTimeout !== null) {
                // Always add the track on Safari because of a known issue where audio playout doesn't happen
    setVideoMuteStatus() {

     * @returns {boolean}
    showErrorNotification,

            tryCreateLocalTracks,

            devices: [ MEDIA_TYPE.AUDIO ],

        }

            JitsiConferenceEvents.VIDEO_UNMUTE_PERMISSIONS_CHANGED,
    conferenceLeft,
    isLocalTrackMuted,
                            formattedDisplayName
        });
    notifyMicError,
        }
    authStatusChanged,
     * @param {boolean} options.startScreenSharing=false - if <tt>true</tt>
        const state = APP.store.getState();
                    name: formattedDisplayName
     */
        const timeout = browser.isElectron() ? 15000 : 60000;

     */
            let newLvl = lvl;
                mediaDevices.addEventListener(
            }
        // Filter out the local tracks based on various config options, i.e., when user joins muted or is muted by
        return new Promise((resolve, reject) => {
        sendAnalytics(createDeviceChangedEvent('video', 'input'));
    updateVideoIconEnabled() {
    const onDisconnected = () => {

                 * @param {string} peerJid - The jid of the intended recipient
                // if the the reconnect happens immediately.
     * {@link JitsiTrackError}.
} from './react/features/base/lib-jitsi-meet';
     * handle change of available media devices.
            (id, displayName) => {
            if (track.isAudioTrack()) {
                    return [];

                );
                cameraDeviceId: newDevices.videoinput
        // 'default' in order to get the correct MediaStreamTrack from chrome because of the following bug.
                    return;
        if (!requestedInput.audio) {
    getSpeakerStats() {
        }
            () => {
            }
         */
                    .then(() => {
                APP.API.notifyConferenceCreatedTimestamp(conferenceTimestamp);
     * @param {string} id participant's identifier(MUC nickname).
        // After wake up, we will be in a state where conference is left
     * Get speaker stats that track total dominant speaker time.
                if (data?.name === ENDPOINT_TEXT_MESSAGE_NAME) {
 */
     * @param {JitsiLocalTrack} newTrack - new track to use or null

                }));
                logger.info('Screen sharing stopped.');
     */
                    logger.log(`AudioLevel:${id}/${newLvl}`);
        const { dispatch, getState } = APP.store;
            devices: [ 'desktop' ]
                    }
     * speaker.
                // can be confusing and alarming to users even when there is no significant impact to user experience
        });
        // At the time of writing this comment there were two separate flows for toggling screen-sharing
                updateTrackMuteState(state, APP.store.dispatch, true);
 * Logic to open a desktop picker put on the window global for
    listMembers() {
                if (config.testing?.debugAudioLevels) {
    createScreenSharingEvent,

            return stream;

                }
    /**
            logger.error(`Failed to switch to selected audio input device ${selectedDeviceId}, error=${err}`);
            });
     */
    /**
    },
            if (audioWasMuted) {
                }));
import { isScreenAudioShared } from './react/features/screen-share/functions';
const _replaceLocalAudioTrackQueue = createTaskQueue();

        logger.error('CONFERENCE FAILED:', err, ...params);

        // If the tracks are not ready, read from base/media state
                    id: localParticipant.id,
    useVideoStream(newTrack) {
 *
                titleKey: 'notify.startSilentTitle'
     *
     * @param {number} score - a number between 1 and 5 (inclusive) or -1 for no
import { updateSettings } from './react/features/base/settings/actions';

function sendData(command, value) {
                }
    },
            await this._desktopAudioStream.dispose();

    },
     * P2P connection
        return Promise.resolve();
            : micDeviceId;
    createDeviceChangedEvent,
            this.recorder = new Recorder();
    _createRoom(localTracks) {
                localAudio._realDeviceId = localAudio.deviceId = 'default';
     */
    _conferenceWillJoin,
    setAudioOutputDeviceId
                MEDIA_TYPE.AUDIO)

        return room && room.getConnectionState();
         * custom events (sent by sendCommand or sendCommandOnce methods).
class ConferenceConnector {
        // Handles the use case when the default device is changed (we are always stopping the streams because it's
     * @returns {void}
    onVideoDeviceChanged(cameraDeviceId) {
import { getReplaceParticipant, getSsrcRewritingFeatureFlag } from './react/features/base/config/functions';
        // Create the tracks and replace them only if the user is unmuted.
     * @returns {void}

        this._untoggleScreenSharing = null;
    },
                        errors
                || (track.isVideoTrack() && this.isLocalVideoMuted())) {
        }

                    logger.error('failed to switch back to local video', error);
    conferenceFailed,
import { setNoiseSuppressionEnabled } from './react/features/noise-suppression/actions';
 * @type {Object}
import {
    participantMutedUs,
            APP.UI.setAudioLevel(id, newLvl);





     *
        sendCommandOnce() {
    /**
                // Preserve the sessionId so that the value is accessible even after room
            room && room.startP2PSession();

            commonUserJoinedHandling(APP.store, room, user);
            // Initialize the device list first. This way, when creating tracks based on preferred devices, loose label
        sendCommand() {
    isCreatingLocalTrack: false,
            JitsiConferenceEvents.START_MUTED_POLICY_CHANGED,

            }
     * Stops previous video stream.
            APP.store.dispatch(trackRemoved(track));
            logger.error('Stop P2P failed', error);
        });

            this._localTracksInitialized = true;
            if (isReplaced) {
            }

import { setScreenAudioShareState } from './react/features/screen-share/actions.web';
        }
                logger.debug(`useVideoStream: Replacing ${oldTrack} with ${newTrack}`);
    /**

    AVATAR_URL: AVATAR_URL_COMMAND,
        // simpler):
            // perspective.
        // Immediately update the UI by having remote videos and the large video update themselves.

                JitsiMediaDevicesEvents.DEVICE_LIST_CHANGED,

        }
    getLocalJitsiVideoTrack,
        room.on(
    p2pStatusChanged
    dataChannelOpened,
                    }
    updateRemoteParticipantFeatures
     * Flag used to delay modification of the muted status of local media tracks
                 * screensharing this is an iq.
            delete newDevices.audioinput;

            this._handleConferenceFailed(err, ...params);
            promise = createLocalTracksF({ devices: [ 'video' ] })
        const state = APP.store.getState();
 * Share data to other users.
        }
                    APP.store.dispatch(maybeSetLobbyChatMessageListener());
     * @param {Object} event - The object containing information that should be
            const { dispatch } = APP.store;


            });
    getAvailableDevices,
                APP.UI.handleLastNEndpoints(leavingIds, enteringIds));
        );
     * Finds JitsiParticipant for given id.
            const localAudio = getLocalJitsiAudioTrack(APP.store.getState());
                    });
            }
     * dialogs in case of media permissions error.

/* global APP, JitsiMeetJS, config, interfaceConfig */
                if (role === 'moderator') {
                    return this.useVideoStream(stream);
                );
            (status, id, abruptly) => {
    hangup(requestFeedback = false, hangupReason, notifyOnConferenceTermination) {
        room.on(
    audioLevelsMap: {},
     *

        const audioDeviceCount = audioMediaDevices ? audioMediaDevices.length : 0;
            JitsiConferenceEvents.PROPERTIES_CHANGED,


        room.on(JitsiConferenceEvents.SUSPEND_DETECTED, () => {

     * @param {string} id id to check
         * Sends command one time.
            localVideo.stopStream();
                        // be reached.
        });
     * @returns {object} A hash with keys being user ids and values being the
                APP.store.dispatch(hideNotification(DATA_CHANNEL_CLOSED_NOTIFICATION_ID));
    setVideoMuted,
            },
            break;
        const pendingGUMDevicesToRemove = [];
        });
        if (requestedInput.video && localVideo) {
        room.on(JitsiConferenceEvents.CONFERENCE_JOINED, () => {
    kickedOut,
        const localAudio = getLocalJitsiAudioTrack(APP.store.getState());
        }
                setTimeout(() => {
                 * desktop stream.
     */
            APP.store.dispatch(reloadWithStoredParams());
     * If prejoin page is enabled open an new connection in the background
                = this._turnScreenSharingOff.bind(this, didHaveVideo);
        case JitsiConferenceErrors.GRACEFUL_SHUTDOWN:
            await this._maybeApplyAudioMixerEffect(stream);
            this._room = undefined;

    },

import { transcriberJoined, transcriberLeft } from './react/features/transcribing/actions';
         * Known custom conference commands.

                            uid: DATA_CHANNEL_CLOSED_NOTIFICATION_ID
            }
     */

    /**

                            ? 'notify.dataChannelClosedWithAudio' : 'notify.dataChannelClosed';
        // video devices detected or if there is local video stream already
            audio: Boolean(newDevices.audioinput),

        addCommandListener() {

                 * Callback invoked when the remote peer of the proxy connection
                            [ desktopStream, audioStream ])
            JitsiConferenceEvents.CONFERENCE_LEFT,
            return Promise.resolve();
        });
                            ? 'notify.dataChannelClosedDescriptionWithAudio' : 'notify.dataChannelClosedDescription';
                APP.store.dispatch(participantUpdated({
        }
            errors
                if (oldTrack === newTrack || (!oldTrack && !newTrack)) {
                // For prejoin we don't need the initial GUM promise since the tracks are already added to the store
        room.on(
                    .then(resolve)
        }
    /**
                    resolve();
     * requested
    }
                        logger.error(`Failed to set the audio output device to ${newDevices.audiooutput} - ${err}`);
        connectionTimes['conference.init.start'] = startTime;
    },

                    APP.store.dispatch(toggleScreensharingA(undefined, false, { desktopStream }));
        room.on(JitsiConferenceEvents.TRACK_ADDED, track => {
        let tryCreateLocalTracks = Promise.resolve([]);
            });
 * @private
                onRemoteStream: desktopStream => {
        if (shouldDispatchConnect) {
                if (initialGUMPromise) {
     * without any video tracks.
 * replacements cannot happen simultaneously. This solves the issue where
    JitsiTrackEvents,
            room.removeCommand(...arguments);
                // we send readyToClose when kicked participant is replace so that


            if (!interfaceConfig.SHOW_PROMOTIONAL_CLOSE_PAGE) {
                // above mentioned chrome bug.

     */
                            .then(() => {
            delete newDevices.videoinput;
     * @returns {Promise<JitsiLocalTrack[]>, Object}
        const maybeDisconnect = () => {
            avatarURL: formattedUrl
            });
     * @return {number} the number of participants in the conference with at
                    displayName: formattedDisplayName,
                dispatch(setInitialGUMPromise());
     * Once called this fields is cleared to <tt>null</tt>.
        if (mediaDevices.isDeviceChangeAvailable()) {
    toggleVideoMuted(showUI = true, ensureTrack = false) {
        });
                 * taking a proxied video stream and showing it as a local
    saveLogs(filename = 'meetlog.json') {

        const localVideoTrack = getLocalJitsiVideoTrack(APP.store.getState());

        if (!mute
         * Sends command.
            if (participantThatMutedUs) {
            }
                })

        // Remove unnecessary event listeners from firing callbacks.

                    initialGUMPromise.resolve({
            JitsiConferenceEvents.AUDIO_UNMUTE_PERMISSIONS_CHANGED,
     */
                const participant = room.getParticipantById(track.getParticipantId());
    updateAudioIconEnabled() {
        return room.getParticipants()
                    formattedDisplayName:
        const localVideo = getLocalJitsiVideoTrack(APP.store.getState());
            // In case system audio sharing was done in the absence of an initial mic audio track, there is no

                    id,


 * replaceLocalTrack is called multiple times with an oldTrack of null, causing
        room.on(
    /**
import {
    setInitialGUMPromise,

     * @returns {Promise}
    _handleConferenceJoined() {
        room.on(JitsiConferenceEvents.PARTICIPANT_KICKED, (kicker, kicked) => {

     * @param {boolean} recordTimeMetrics - If true time metrics will be recorded.
                room.sessionId = room.getMeetingUniqueId();
        room.on(
                    this.muteAudio(true, true);
                APP.store.dispatch(p2pStatusChanged(p2p)));
        APP.store.dispatch(setVideoMuted(mute, VIDEO_MUTISM_AUTHORITY.USER, true));
                logger.debug('_onDeviceListChanged: Removed the current video track.');
            .catch(e => {
        }
        if (this._mixerEffect) {
            return this.useAudioStream(stream);
        const newAvailDevices = APP.store.getState()['features/base/devices'].availableDevices;
            dispatch(setAudioUnmutePermissions(true, true));

     * Stops previous audio stream.
    },
            connectionTimes['conference.init.createLocalTracks.end'] = createLocalTracksEnd;
    },
    onToggleAudioOnly() {
        }
     */
                throw error;
            const createLocalTracksEnd = window.performance.now();
         * @param name {String} the name of the command.

            email: formattedEmail
        };
                // Show the notification only when the data channel connection doesn't get re-established in 60 secs if
                        tracks,
    /**
     * NOTE: Used by jitsi-meet-torture!
            // AudioMixerEffect so we have to remove system audio track from the room before setting it as an effect.
        return this.audioLevelsMap[id];
                JitsiConferenceEvents.AUTH_STATUS_CHANGED,
                /**
                tracks = await mediaDeviceHelper.createLocalTracksAfterDeviceListChanged(
                Object.assign(errors, pErrors);
            if (options.startWithAudioMuted) {
        }
            (data, from) => {
                const virtualScreenshareParticipantId = getVirtualScreenshareParticipantByOwnerId(state, id)?.id;
/**

     */

     * Used by the Breakout Rooms feature to join a breakout room or go back to the main room.
            }
            ? isLocalTrackMuted(

            if (localAudio && isDefaultMicSelected) {
                APP.store.dispatch(participantUpdated({
     * @returns {JitsiParticipant[]}
    AVATAR_URL_COMMAND,
        } catch (error) {

     * @param {object} options
             * a redirect to the page anyway.
                            return [ desktopStream ];
            this._onConferenceJoined();
    };
        let feedbackResultPromise = Promise.resolve({});
            });
        .then(([ stream ]) => {
            }
            // Remove the track from the conference.
        },
                APP.UI.initEtherpad(value);
    /**
            = mediaDeviceHelper.getNewMediaDevicesAfterDeviceListChanged(
                const localParticipant = getLocalParticipant(APP.store.getState());
                    defaultRemoteDisplayName
        // In case there was no local audio when screen sharing was started the fact that we set the audio stream to
     * Simulates toolbar button click for audio mute. Used by shortcuts and API.
     * Sets the video muted status.
     * on.
            dispatch(muteLocal(true, MEDIA_TYPE.AUDIO));
     *
        let newAudioDevices = [];
    },
            });
    /**
            JitsiMeetJS.mediaDevices.removeEventListener(
        });
            if (!track || track.isLocal()) {
                        APP.store.dispatch(showWarningNotification({
                APP.store.dispatch(replaceLocalTrack(oldTrack, newTrack, room))
     * @param {object} payload the payload of the message.
     * Start using provided video stream.
import { AudioMixerEffect } from './react/features/stream-effects/audio-mixer/AudioMixerEffect';
        room.on(JitsiConferenceEvents.USER_JOINED, (id, user) => {

     * library's SpeakerStats model used for calculating time as dominant
        if (newAudioDevices.length > 0) {
/**
            const [ code, msg ] = params;
                return;
            error => {
     * @param {MediaDeviceInfo[]} devices
import { appendSuffix } from './react/features/display-name/functions';
                })
        this.muteAudio(!this.isLocalAudioMuted(), showUI);

    changeLocalAvatarUrl(url = '') {
        tryCreateLocalTracks.then(tr => {
    logDevices,
                    this.updateAudioIconEnabled();
                this.updateAudioIconEnabled();
     * @param filename (optional) specify target filename
        case JitsiConferenceErrors.OFFER_ANSWER_FAILED:

    },
                titleKey: 'dialog.reservationError'
    CONFERENCE_LEAVE_REASONS,
            }));
     * Start using provided audio stream.
     * @returns {void}
        const currentDesktopAudioTrack = this._desktopAudioStream || desktopAudioTrack;

        const audioOptions = {
import { sendAnalytics } from './react/features/analytics/functions';
                        this.setVideoMuteStatus();
                } else {
        // Let's handle unknown/non-preferred devices
        return Boolean(APP.store.getState()['features/base/audio-only'].enabled);
            JitsiConferenceEvents.LOCK_STATE_CHANGED,
        if (!mute
 * TODO: remove once the Electron SDK supporting gDM has been out for a while.
                logger.error(e);
    },
    isLocalVideoMuted() {
            });

                }
     * Handles audio only changes.
        });
            // The logic shared between RN and web.
     * debugging.
                .catch(error => {
        return room.connectionQuality.getStats();
                APP.store.dispatch(participantMutedUs(participantThatMutedUs, track));
            (...args) => {
            JitsiConferenceEvents.ENDPOINT_MESSAGE_RECEIVED,
    replaceLocalTrack,
        .catch(error => {
                 * automatically. Triggers cleanup of screensharing if active.
        .catch(err => {

            });
                        // window. If audio screen sharing is stopped via the normal UX flow this point shouldn't
     */
    createTrackMutedEvent
     */
        // we should respect that and not attempt to switch to the preferred device from
        // Filter out the tracks that are muted (except on Safari).
                .then(() => {
        // We do not want video/audio as we show an overlay and after it
            ? getDefaultDeviceId(APP.store.getState(), 'audioInput')
    getVirtualScreenshareParticipantByOwnerId
                if (!track.isMuted()) {


                } else if (status === JitsiMeetJS.constants.transcriptionStatus.OFF) {
 *

    /**
     * Obtains current P2P ICE connection state.
    /**
     * Sends a message via the data channel.
    },

        } catch (error) {
    }
        const selectedDeviceId = isDefaultMicSelected
                 */
                .then(([ desktopStream ]) => {
 * @param command the command

         * @param name {String} the name of the command.
                const oldTrack = getLocalJitsiAudioTrack(APP.store.getState());
     */
                // if the user joins audio and video muted, i.e., if there is no local media capture.

            }
            this._proxyConnection.stop();
    notifyCameraError,
     */
    }

         * @param handler {Function} handler for the command
     * microphone local audio track.
            if (desktopAudioStream) {

        // If system audio was also shared stop the AudioMixerEffect and dispose of the desktop audio track.
                    onFinish();
     * @returns {void}
        return this._localTracksInitialized
                .catch(error => {
        room.on(JitsiConferenceEvents.SUBJECT_CHANGED,
import {


                        const titleKey = getSsrcRewritingFeatureFlag(state)

                JitsiMediaDevicesEvents.DEVICE_LIST_CHANGED,
     */
     * JitsiConference) is to be used in the implementation of the Command(s)
                    id,
            room.on(
     * @returns {boolean}

    },
            throw error;
            // eslint-disable-next-line prefer-rest-params
        return new Promise((resolve, reject) => {
        const duration = getLocalVideoTrack(tracks)?.jitsiTrack.getDuration() ?? 0;
        // Firefox users can choose their preferred device in the gUM prompt. In that case
    /**
import {
                titleKey: retrySec
                .then(([ stream ]) => {
        const { mediaDevices } = JitsiMeetJS;
        // When the local audio is muted and a preferred device is connected, update the settings and remove the track
        // If system audio is already being sent, mix it with the provided audio track.

                ? getDefaultDeviceId(APP.store.getState(), 'audioInput') : newDevices.audioinput;
            subject => APP.store.dispatch(conferenceSubjectChanged(subject)));

        // On Electron there is no permission prompt for granting permissions. That's why we don't need to

        } else if (this._desktopAudioStream) {
     * @returns {Promise}
    dataChannelClosed,

                // is disconnected.
                    .then(() => stream);
            room.leave(CONFERENCE_LEAVE_REASONS.UNRECOVERABLE_ERROR).then(() => APP.connection.disconnect());
                = setAudioOutputDeviceId(newDevices.audiooutput, dispatch)
            this.updateAudioIconEnabled();
        if (typeof newDevices.audiooutput !== 'undefined') {

            APP.store.dispatch(gumPending(mutedTrackTypes, IGUMPendingState.NONE));
    },
        // If the default device is changed we need to first stop the local streams and then call GUM. Otherwise GUM
     * @return {boolean}
    },
                const {
                || (track.isVideoTrack() && this.isLocalVideoMuted())) {
     * @param {{ roomName: string, shouldDispatchConnect }} options
            if (!track || track.isLocal()) {
                }

     * Returns the stats.
     * Disconnect from the conference and optionally request user feedback.
        }
                        this.useAudioStream(track)
        // active which could be either screensharing stream or a video track
    _getConferenceOptions() {
                    logger.debug('Resolving the initialGUM promise! (prejoinVisible=true)');
            if (localAudio) {
            await room.replaceTrack(currentDesktopAudioTrack, null);
            if ((track.isAudioTrack() && this.isLocalAudioMuted())
    },
