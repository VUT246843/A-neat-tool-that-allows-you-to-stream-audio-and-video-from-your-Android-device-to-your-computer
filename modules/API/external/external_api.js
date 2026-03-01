        }
     * be used.
    /**
    'participant-joined': 'participantJoined',
            'autoplay',
     *
        });
    }
        this.executeCommand('pinParticipant', participantId, videoType);
};

        if (this._intersectionObserver) {
     *
     *

    'mouse-move': 'mouseMove',
     * Returns arrays with the all resources for the always on top feature.
     * {{

     * values are the arguments for the command.
    subject: 'subject',
    setAudioOutputDevice,
     */
     * {{


     * failure.
    /**
    toggleVirtualBackgroundDialog: 'toggle-virtual-background',
            this.addEventListener(event, listeners[event]);
            })
     * Returns the current livestream url.

            name: 'invite',
    captureLargeVideoScreenshot() {
                }
     * @param {string} event - The name of the event.
 * Maps the names of the events expected by the API with the name of the
        const { displayName } = this._participants[participantId] || {};
     * @returns {void}
    let parsedValue;
     * passed.
    /**
     * Passes an event along to the local conference participant to establish
        this.executeCommand('setLargeVideoParticipant', participantId, videoType);
            onload,
    /**
    resizeLargeVideo(width, height) {
    'data-channel-opened': 'dataChannelOpened',
            }

     *
    /**
    }
    toggleParticipantsPane: 'toggle-participants-pane',
import { isPiPEnabled } from '../../../react/features/pip/external-api.shared';
     */
     * @returns {string} The avatar URL.
function parseSizeParam(value) {
     * {@code suspendDetected} - receives event notifications about detecting suspend event in host computer.
    setVirtualBackground(enabled, backgroundImage) {
     * be used.
     *
     * Sets the size of the iframe element.
     * and with false if not.
     * local user has successfully joined the video conference.
            }
            this._frame.style.width = parsedWidth;
     * @param {Array<Object>} [options.invitees] - Array of objects containing
                    this.executeCommand('setMediaEncryptionKey', JSON.stringify({
    'password-required': 'passwordRequired',
     */
    }
        });
        const iframe = this.getIFrame();
        return this._numberOfParticipants;

    }
};

    toggleWhiteboard: 'toggle-whiteboard',
    }
    // Values like 100 or 100px are handled outside of the regex, and
}
     */
            this.hidePiP();
    }
        if (this._intersectionObserver) {
     * Captures the screenshot of the large video.
        if (!rooms || !Object.keys(rooms).length) {
    'whiteboard-status-changed': 'whiteboardStatusChanged'
            }
            name: 'get-livestream-url'

     * @param {string} event - The name of the event.
     * @returns {void}
    _setupListeners() {
     * Removes event listener.
     *
     * Returns the Shared Document Url of the conference.
     *
    }
     * @param {number|string} width - The with of the iframe. Check
     * Returns the number of participants in the conference from all rooms. The local
                this._myUserID = userID;
     */
     *

     * The listener will receive object with the following structure:

     */
        }
     * local user has left the video conference.
     *
    getRoomsInfo() {
     * @returns {void}
    const re = /([0-9]*\.?[0-9]+)(em|pt|px|((d|l|s)?v)(h|w)|%)$/;
            e2eeKey,
    toggleE2EE(enabled) {

            name: 'is-moderation-on',
                // Fake the iframe onload event because it's not reliable.
     * {@code log} - receives event notifications whenever information has
     * @param {string} domain - The domain name of the server that hosts the
        });
     * Pins a participant's video on to the stage view.
     * @param { string } options.dropboxToken - Dropbox oauth2 token.
    'knocking-participant': 'knockingParticipant',
                ...request,

    hangup: 'video-hangup',
/**

    getCurrentDevices() {
    setVideoInputDevice(label, deviceId) {
     * @returns {HTMLElement|undefined} - The large video.
     *
    'pip-entered': 'pipEntered',
    }
     */
     * @param {Object} options - An object with config options to pass along.
                    = data.formattedDisplayName;

     *
    /**
     *
     * @param {CryptoKey} [keyInfo.encryptionKey] - The encryption key.
     * @returns {Promise} - Resolves with the list of custom avatar backgrounds.
     * @param {number} width - Width that needs to be applied on the large video container.
            const exportedKey = await crypto.subtle.exportKey('raw', key);
     * @returns {void}
    isMultipleAudioInputSupported,
                delete this._participants[this._myUserID];
            case 'on-stage-participant-changed':
            name: 'capture-largevideo-screenshot'
 */
                || !iframe.contentWindow
            parentNode = document.body,
                this._participants[userID] = {
     * is ready to be disposed.
     */
     */

     * jid: jid //the jid of the participant
    'browser-support': 'browserSupport',
        if (parsedWidth !== undefined) {
                this.emit('prejoinVideoChanged');
     * Sets the video input device to the one with the label or id that is
 */
     */
     * iframe.
    }
     * @param {string} backgroundImage - The base64 image.
            case 'email-change': {
            const { protocol, host } = iframeWindow.location;
     * Returns the conference participants information.
     * NOTE: This method is not removed for backward compatibility purposes.
 * percentage, it's used as is.
    ) {

                }
    /**

        return isMultipleAudioInputSupported(this._transport);
        this._teardownIntersectionObserver();
        return this._transport.sendRequest({
        }
     * @param {Object} rooms - Rooms available rooms in the conference.
     *
        return getAvailableDevices(this._transport);
     * messages. The listener will receive object with the following structure:
     */


     * information like participant id, display name, avatar URL and email.
     * Returns the id of the on stage participant.
    /**
            case 'participant-joined': {
            configOverwrite,
                        index: 0
            width = '100%',
     * @returns {Promise} - Resolves with the audio mute status and rejects on

     * been logged and has a log level specified within {@code config.apiLogLevels}.
    }
     */
    setMediaEncryptionKey: 'set-media-encryption-key',
                this._onload?.();
    _getOnStageParticipant() {

            if (rooms[roomItemKey]?.participants) {
    /**
        this._frame.id = frameName;
                exportedKey: Array.from(new Uint8Array(exportedKey)),
     * Starts a file recording or streaming session depending on the passed on params.
            invitees

     */
    isVisitor() {
    'peer-connection-failure': 'peerConnectionFailure',
    dispose() {
    'camera-error': 'cameraError',
    /**
    pinParticipant(participantId, videoType) {

    cancelPrivateChat: 'cancel-private-chat',
     * @param {number|string} [options.height] - Height of the iframe. Check
    'error-occurred': 'errorOccurred',
                this.updateNumberOfParticipants(data.rooms);

     * Returns the audio mute status.
     * @param {Object} event.data - The payload of the event.
     * @returns {void}
            this.executeCommand('setMediaEncryptionKey', JSON.stringify({
    if (typeof value === 'string' && String(value).match(re) !== null) {
     * @param {string} [options.sandbox] - Sandbox directive for the created iframe, if desired.
     * Check if the audio is available.
            jwt,
            // Hide any open PiP window.
            cameraFacingMode,
                    user.email = data.email;

        return this._transport.sendRequest({
 * sizes through the style property. If invalid value is passed the method
    endConference: 'end-conference',
                changeParticipantNumber(this, 1);
        this._frame.src = this._url;
 * Adds given number to the numberOfParticipants property of given APIInstance.
     * THIS IS EXPERIMENTAL.
    'audio-mute-status-changed': 'audioMuteStatusChanged',
     * Adds event listener to Meet Jitsi.
    /**
    setVideoInputDevice
     * {@code toggleChat} - Hides / shows chat. No arguments.
     *

     * @returns {void}
    'prejoin-screen-loaded': 'prejoinScreenLoaded',
    getDeploymentInfo() {
} from './functions';
    getAvailableDevices,
     * @param {string} participantId - Jid of the participant to be displayed on the large video.
    constructor(domain, options = {}) {
            this.executeCommand(key, commandList[key]);
                delete this._participants[userID];
                changeParticipantNumber(this, -1);
 * @returns {void}
    grantRecordingConsent: 'grant-recording-consent',
    /**
        if (!iframe
     * @param {Object} [options.interfaceConfigOverwrite] - Object containing
    addEventListener(event, listener) {
    setLargeVideoParticipant: 'set-large-video-participant',
        const frameName = `jitsiConferenceFrame${id}`;
            return;
    joinBreakoutRoom: 'join-breakout-room',
    toggleVideo: 'toggle-video',
    listBreakoutRooms() {
     * {@code subject} - Sets the subject of the conference, the value passed
    }
     * configuration options defined in interface_config.js to be overridden.
            name: 'is-video-available'
     */
    submitFeedback: 'submit-feedback',
            name: 'proxy-connection-event'

    'moderation-participant-rejected': 'moderationParticipantRejected',
    getSupportedCommands() {
        return this._transport.sendRequest({
export default class JitsiMeetExternalAPI extends EventEmitter {

     * @returns {Promise}
     *
        const allParticipants = Object.keys(rooms).reduce((prev, roomItemKey) => {
        }
            name: 'is-start-silent'
                        }
 */
        const participantIds = Object.keys(this._participants);
    startShareVideo: 'start-share-video',
                || !iframe
    }
            };
     *
     *  'isOpen': isOpen, // whether the chat panel is open or not
    hidePiP() {
     * failure.

     *
    }

     * id: participantId //participantId of the new dominant speaker
    setBlurredBackground: 'set-blurred-background',
 * @type {number}
            name: 'is-audio-disabled'
            const wasEnabled = isPiPEnabled(this._pipConfig);
     * @param {Object } options.extraMetadata - Any extra metadata params for file recording.
import { urlObjectToString } from '../../../react/features/base/util/uri';
     */
    }
        return avatarURL;
     *
     * and with false if not.
    }
    kickParticipant: 'kick-participant',
     * structure:
     *
     *
     *
     * @returns {Promise}
     * @returns {Promise}
     * @returns {void}
     * {@code participantLeft} - receives event notifications about the

     * @returns {void}
            }
    'content-sharing-participants-changed': 'contentSharingParticipantsChanged',
            };


     *
     * {{
    'screen-sharing-status-changed': 'screenSharingStatusChanged',
    getNumberOfParticipants() {
     * @deprecated
     *
        });

        // We update local state, send command to iframe, then handle PiP show/hide
     * Returns whether the participants pane is open.
    Transport
}
     *
    'filmstrip-display-changed': 'filmstripDisplayChanged',
     * @param {string}  [options.release] - The key used for specifying release if enabled on the backend.
     * @returns {Promise}
     *
        this._transport.dispose();
     * parseSizeParam for format details.
    'custom-notification-action-triggered': 'customNotificationActionTriggered',
    addBreakoutRoom: 'add-breakout-room',
     * updated. The listener will receive object with the following structure:
     * @param {Object} [options.userInfo] - Object containing information about
        } else if (pipTransition === 'disabled') {
        });
    _openDesktopPicker() {
     * {@code dominantSpeakerChanged} - receives event notifications about
                jitsiLocalStorage.setItem('jitsiLocalStorage', data.localStorageContent);
     * Returns whether we have joined as visitor in a meeting.
            url: `https://${domain}/#jitsi_meet_external_api_id=${id}`
     * {@code screenSharingStatusChanged} - receives event notifications about
     * @returns {void}
     * to empty array or it may be omitted.
     */
     * @returns {Promise}
        return this._transport.sendRequest({
     * that needs to be pinned on the stage view.
    _setSize(height, width) {
     *
                }
    }
 *
            case 'on-prejoin-video-changed':
        this._setupIntersectionObserver();
    removeBreakoutRoom: 'remove-breakout-room',
     * @param {string} mode - `file` or `stream`.
     */

     *
     * parseSizeParam for format details.

    toggleCameraMirror: 'toggle-camera-mirror',

    isMultipleAudioInputSupported() {

    }
 * numberOfParticipants should be decreased).
     * @param {string} [options.lang] - The meeting's default language.
    'suspend-detected': 'suspendDetected',
    getContentSharingParticipants() {
     * @param {boolean} transcription - Whether the transcription needs to be stopped.
     */
                };
                    formattedDisplayName: data.formattedDisplayName
     * {@code toggleFilmStrip} - Hides / shows the filmstrip with no arguments.

     * {@code toggleShareScreen} - Starts / stops screen sharing. No arguments.
     * The listener will receive object with the following structure:
    }
                    window: this._frame.contentWindow
        return this._transport.sendRequest({
    /**
     *
     * @returns {Promise} - Resolves with the force muted status and rejects on
     *

    }
    _isNewElectronScreensharingSupported() {
     * The keys of the object are the commands that will be executed and the
                break;
            name: '_new_electron_screensharing_supported'
                break;
    getCurrentDevices,
    }
    'moderation-status-changed': 'moderationStatusChanged',
    /**

    /**
    getAvailableDevices() {
            return;
    localSubject: 'local-subject',


     */
     * Accepts "camera" or "desktop" values. Default is "camera". Any invalid values will be ignored and default will
     * }}
        });
     * jid: jid //the jid of the participant

        return this._transport.sendRequest({
    getIFrame() {
            roomName = '',
 */

    */
/**
    }
        }
        if (key) {
        return this._transport.sendRequest({
    }
    }
        if (!this._isLargeVideoVisible
        });
            userInfo,
            name: 'is-audio-muted'
        return this._transport.sendRequest({
    /**
     * @returns {void}
     * Returns Promise that resolves with current selected devices.
    muteEveryone: 'mute-everyone',
     * @returns {void}
     * Returns the display name of a participant.
            configOverwrite = {},
    stopRecording: 'stop-recording',
    'non-participant-message-received': 'nonParticipantMessageReceived',
                if (typeof this._tmpE2EEKey !== 'undefined') {
};
    /**


                    const hexToBytes = hex => {
     * and with false if not.
        });
        if (!Array.isArray(invitees) || invitees.length === 0) {
     * @returns {HTMLElement} The iframe.
     * Update number of participants based on all rooms.
                this._videoQuality = data.videoQuality;
        const localStorageContent = jitsiLocalStorage.getItem('jitsiLocalStorage');

    }
     * Gets a list of the currently sharing participant id's.
        if (typeof participantId === 'undefined' || participantId === this._myUserID) {
    hideNotification: 'hide-notification',
    PostMessageTransportBackend,
        return iframe.contentWindow.document.querySelector(`#participant_${participantId} video`);
        this._frame = this._parentNode.appendChild(this._frame);
    executeCommand(name, ...args) {
     * use as its api may change.
     * Returns whether meeting is started silent.
     * after with the legacy SS support was removed from the electron SDK. If we remove it now the SS for Electron
    // This regex parses values of the form 100px, 100em, 100pt, 100vh, 100vw or 100%.
    isDeviceListAvailable() {
        // Handle PiP state after command is sent so iframe config is updated.
                }
        return Object.keys(commands);
     * Returns the iframe that loads Jitsi Meet.
    }
     * the large video participant.
                    email: data.email,
    toggleRaiseHand: 'toggle-raise-hand',
    initiatePrivateChat: 'initiate-private-chat',
     * @returns {Promise} - Resolves with true if the video available, with
    }
            this._frame.sandbox = sandbox;
        return iframe.contentWindow.document.getElementById('largeVideo');
     */

     * @param {number|string} height - The height of the iframe.
     * Shows Picture-in-Picture window.
        let pipTransition = null;
    invite(invitees) {
            case 'video-conference-joined': {
     * @returns {Promise<string>} - Resolves with a base64 encoded image data of the screenshot.
        });
     *

     * }}
    'proxy-connection-event': 'proxyConnectionEvent',
     * @private
     * @returns {Promise} - Resolves with screensharing status and rejects on failure.
     * @param {Object} [options] - Optional arguments.
     * roomName: room //the room name of the conference
     * Calls showPiP/hidePiP based on visibility.
        return this._transport.sendRequest({
    _teardownIntersectionObserver() {
        return this._transport.sendRequest({
            switch (name) {
                this._iAmvisitor = data.visitor;
     * @param { string } options.rtmpBroadcastID - The RTMP broadcast ID.
     *
     *

    showPiP() {
     * For file recording, recording `mode` should be `file` and optionally `shouldShare` could be passed on.
     * }}
        const parsedWidth = parseSizeParam(width);
     * Enable or disable the virtual background with a custom base64 image.
    /**
     * ice server configuration.
        this._numberOfParticipants = allParticipants;

     * For youtube streams, `youtubeStreamKey` must be passed on. `youtubeBroadcastID` is optional.

    grantModerator: 'grant-moderator',
    'compute-pressure-changed': 'computePressureChanged',
    'chat-updated': 'chatUpdated',
        this._participants = {};
    'conference-created-timestamp': 'conferenceCreatedTimestamp',
     */
        }
        });
    'participant-kicked-out': 'participantKickedOut',
    startRecording: 'start-recording',
        }
            'hid',
     * turning on/off the local user screen sharing.
    'video-ready-to-close': 'readyToClose',
            this._frame.style.height = parsedHeight;
    getSharedDocumentUrl() {
                return true;
    toggleSubtitles: 'toggle-subtitles',
     * @param {Function} listener - The listener.

    isSharingScreen() {
    /**
            name: 'is-sharing-screen'
    email: 'email',

        return iframe.contentWindow.document.getElementById('prejoinVideo');
    isStartSilent() {

     * Getter for participant specific video element in Jitsi Meet.
 * @returns {string|undefined} The parsed value that can be used for setting
        this._onload = onload;
    }
            this._width = width;
        this._transport.sendEvent({
     * {{
     *
            name: 'get-content-sharing-participants'
     * @returns {Array<string>} Array of commands.
            mediaType
 * events expected by jitsi-meet.
     * Returns the state of availability electron share screen via external api.
     *  'nick': nick,//the nickname of the user that sent the message
    toggleNoiseSuppression: 'toggle-noise-suppression',
     * @returns {string} The formatted display name.
     * @deprecated
        this._onStageParticipant = undefined;
     * Returns the email of a participant.
    'recording-link-available': 'recordingLinkAvailable',

    /**
    'subject-change': 'subjectChange',
     * {@code toggleAudio} - Mutes / unmutes audio. No arguments.
        });
        });
     * jid: jid,//the JID of the participant that changed his display name
    return parsedValue;
     */
        }
                break;

     */
     * @param {number} [keyInfo.index] - The index of the encryption key.
     * @private
            titleText

    'notification-triggered': 'notificationTriggered',
     * @param {string} titleText - The OS camera facing mode (environment/user).
            if (requestName) {
     */
    sendEndpointTextMessage: 'send-endpoint-text-message',
/**
     * wireless screensharing with room integration and it is advised against to
    autoAssignToBreakoutRooms: 'auto-assign-to-breakout-rooms',
    }
    isModerationOn(mediaType) {
    pinParticipant: 'pin-participant',
     * @returns {void}
    'participant-role-changed': 'participantRoleChanged',
     * @returns {void}
     *
     * @param {string} [options.onload] - The onload function that will listen
     */
    }
            name: commands[name]
        const iframeDocument = iframeWindow.document;
import {
            name: 'open-desktop-picker'

     * Getter for the large video element in Jitsi Meet.

     * Returns array of events supported by addEventListener().
        const { email } = this._participants[participantId] || {};
            userInfo,
     */

            baseURL = base.href;
     *


    }

                break;
     * @param {string} label - The label of the new device.
 * numberOfParticipants property (this parameter can be negative number if the
     */
    }
        eventList.forEach(event => this.removeEventListener(event));
            case 'large-video-visibility-changed':
            }

    removeEventListener(event) {
     * failure.
        }
    /**

                break;
        return displayName;
     * @returns {Promise} Resolves with the list of breakout rooms.
     * }}
     * @param {number} height - Height that needs to be applied on the large video container.
    '_request-desktop-sources': '_requestDesktopSources'

        return this._transport.sendRequest({
                    avatarURL: data.avatarURL
     *
            const isEnabled = isPiPEnabled(this._pipConfig);
            descriptionText,

     * @deprecated
import {
        if (parsedHeight !== undefined) {
    overwriteNames: 'overwrite-names',
 *

    'device-list-changed': 'deviceListChanged',
        const participantsInfo = Object.values(this._participants);
     * @returns {string} - The id of the on stage participant.
     * @param {string} [options.roomName] - The name of the room to join.

            this._intersectionObserver = null;
     * The listener will receive object with the following structure:
     * @param {Object} event - An object with information to pass along.
     */
    setSubtitles: 'set-subtitles',
    isDeviceChangeAvailable(deviceType) {
     * @returns {Promise}
 * Maps the names of the commands expected by the API with the name of the
                break;
    /**
     */
        if (!this._isPrejoinVideoVisible
    /**
     * if large video is detected, an error otherwise.
            }
            name: 'get-shared-document-url'
     * @returns {number}
                changeParticipantNumber(this, -1);
                this.emit(eventName, data);
     * change in the dominant speaker.
/**
     * Returns the avatar URL of a participant.
                const user = this._participants[userID];
                this.emit('largeVideoChanged');
        return this._transport.sendRequest({
    /**
    }
    /**
     * parseSizeParam for format details.
        this._intersectionObserver.observe(this._frame);
        this._frame = document.createElement('iframe');
     *
     * Returns the list of breakout rooms.

            name: 'is-participants-pane-open'
     * participant is included.
            interfaceConfigOverwrite,
     *
     * @returns {Object} Rooms info.
     * failure.
     */
    /**
     *
     * @returns {void}
    updateNumberOfParticipants(rooms) {
            participant.participantId = participantIds[idx];
    /**
     * The listener will receive object with the following structure:
     * @param {boolean} enabled - The new value for e2ee enabled.
    stopRecording(mode, transcription) {


     * @returns {int} The number of participants in the conference.
    'participants-pane-toggled': 'participantsPaneToggled',
    'data-channel-closed': 'dataChannelClosed',
     * Returns the current video quality setting.
                || !iframe.contentWindow
    setVirtualBackground: 'set-virtual-background',
    /**
    captureCameraPicture(
    }
     * NOTE: This method is not removed for backward compatibility purposes.
    /**
     * passed.
            height = '100%',
     */
    'pip-left': 'pipLeft',
            mediaType
     * @param {string|undefined} participantId - Id of participant to return the video for.

    toggleLobby: 'toggle-lobby',
        });
    'mic-error': 'micError',

        }, 0);
 * Compute valid values for height and width. If a number is specified it's

            this.invite(invitees);
    }
            } else if (wasEnabled && !isEnabled) {
     * {@code toggleAudio} - Mutes / unmutes audio with no arguments.
     *
    /**

                     + 'It always returns true');
            case 'prejoin-screen-loaded':
    APIInstance._numberOfParticipants += number;
     * Returns the audio mute status.
     * @returns {void}
     * If the command doesn't require any arguments the parameter should be set
     */
    getVideoQuality() {

                    };
        if (Array.isArray(invitees) && invitees.length > 0) {
     * @returns {HTMLElement|undefined} - The requested video. Will return the local video
     * No other params should be passed.
            case 'ready': {
            'compute-pressure',
     * @returns {Promise}
    getSessionId() {
        });
    'incoming-message': 'incomingMessage',
            if (eventName) {
    /**
        const base = iframeDocument.querySelector('base');
    _createIFrame(height, width, sandbox) {
     * {@code displayName} - Sets the display name of the local participant to
     */
    removeEventListeners(eventList) {
                this.emit(requestName, data, callback);

/**
     * {@code outgoingMessage} - receives event notifications about outgoing

        );
     *
     *
            sandbox
     */
     * Removes the listeners and removes the Jitsi Meet frame.
     */
            release,
            devices,
    getLivestreamUrl() {
     * {@code displayNameChanged} - receives event notifications about display
    /**

        this.removeAllListeners(event);
        }
    /**
    getCustomAvatarBackgrounds() {
     * {@code chatUpdated} - receives event notifications about chat state being
                this.emit('largeVideoChanged');
    toggleAudio: 'toggle-audio',

    /**
    'audio-only-changed': 'audioOnlyChanged',
     * @param {string} mediaType - The media type for which to check.
    password: 'password',
     * information about the initial devices that will be used in the call.
     * {{
        super();
     * Returns Promise that resolves with a list of available devices.
     * false if not and rejects on failure.

     */

    }

     *
            participantId,
            return;
                    allowedOrigin: new URL(this._url).origin,
            devices,
        }
     */
            iceServers,
    'display-name-change': 'displayNameChange',
     * @deprecated
     * Check if the video is available.
        parsedValue = `${value}px`;
        this._myUserID = undefined;
            case 'breakout-rooms-updated':
        // Send command to iframe first.
    }
        this._parentNode = parentNode;
    '_pip-requested': '_pipRequested',
        for (const key in commandList) { // eslint-disable-line guard-for-in
            case 'video-conference-left':
        return participantsInfo;
     * {@code readyToClose} - all hangup operations are completed and Jitsi Meet
     * @param {string} participantId - The id of the participant.
            // eslint-disable-next-line no-fallthrough


    }
     * Returns array of commands supported by executeCommand().
        this._isLargeVideoVisible = false;
        this._transport.sendEvent({
            return;
    /**

     * Sets e2ee enabled/disabled.
                    user.formattedDisplayName = data.formattedDisplayName;
    }
                this._teardownIntersectionObserver();

     */
     * Returns the rooms info in the conference.

     * participant that left the room.
    _getAlwaysOnTopResources() {
     * Returns Promise that resolves with true if multiple audio input is supported
 */
            return Promise.reject(new TypeError('Invalid Argument'));
     * {{
     *
     * Returns the formatted display name of a participant.
        if (pipTransition === 'enabled') {
     * }}
    'participant-muted': 'participantMuted',
                this._participants[userID] = this._participants[userID] || {};
     * @param {string} participantId - Participant id (JID) of the participant
     */

    }
        if (width <= this._width && height <= this._height) {
     */
            const requestName = requests[request.name];
            }
    /**
                        return bytes;
     * Sets up IntersectionObserver to monitor iframe visibility.

     * @returns {Promise} - Resolves with true if the audio available, with
        } else {
        this.executeCommand('stopRecording', mode, transcription);
    approveVideo: 'approve-video',
     */
            console.error('Not supported command name.');
     */
     * on: on //whether screen sharing is on

    }
    'video-availability-changed': 'videoAvailabilityChanged',
    setParticipantVolume: 'set-participant-volume',
     * @returns {Promise} - Resolves with the audio disabled status and rejects on
        ].join('; ');
     *
        return this._transport.sendRequest({
     * {{
     * @param { string } options.rtmpStreamKey - The RTMP stream key.
     * Constructs new API instance. Creates iframe and loads Jitsi Meet in it.
     *
    /**
     * {@code videoConferenceLeft} - receives event notifications about the
     * events:
     * Default - 'input'.
     * @param {Array<Object>} invitees - The invitees.

    }
        let baseURL = '';
        } else {
    closeBreakoutRoom: 'close-breakout-room',
     * @private
    // invalid values will be ignored and the minimum will be used.
     *  'unreadCount': unreadCounter, // the unread message(s) counter,
/**
     * Captures a picture through OS camera.
            const data = {
     *
     * {@code toggleVideo} - Mutes / unmutes video. No arguments.
    toggleTileView: 'toggle-tile-view',
                }
    }
    /**

            } else if (entry.isIntersecting && !wasIntersecting) {

        });
     * The listener will receive object with the following structure:
     * {{
                index }));
     * the value passed in the arguments array.
     */
                postisOptions: {
     * @returns {Promise} - Resolves with the moderation on status and rejects on
            return iframe.contentWindow.document.getElementById('localVideo_container');
     * authentication.
    /**
     * @returns {Promise} - Resolves with the deployment info object.
        const iframe = this.getIFrame();
        return ALWAYS_ON_TOP_FILENAMES.map(
     * the value passed in the arguments array.
     * when a reply is to be sent regarding the event.
     */
     * name change. The listener will receive object with the following
            cameraFacingMode,
     *
    }
    getEmail(participantId) {
        });

                pipTransition = 'enabled';
                this._setupIntersectionObserver();
    /**
     * NOTE: This method is not removed for backward compatibility purposes.
                || !iframe.contentWindow
        return setVideoInputDevice(this._transport, label, deviceId);
     * arguments: an array of strings that compose the actual log message
            backend: new PostMessageTransportBackend({
    toggleShareScreen: 'toggle-share-screen',
    /**
     * @returns {Array<string>}
        }
    resizeFilmStrip: 'resize-film-strip',
    sendProxyConnectionEvent(event) {

    answerKnockingParticipant: 'answer-knocking-participant',
     */
     * or update a direct peer connection. This is currently used for developing

        }
            name: 'deployment-info'
                break;
     *
     * @returns {Promise} - Resolves with the conference`s sessionId.
     *  'message': txt//the text of the message
     * dominant and pinned speakers will be taken into consideration while selecting the

    /**
const requests = {
    /**
 */
    /**
    /**
     * Adds event listeners to Meet Jitsi.
            return false;
            appData: {
    /**
    async setMediaEncryptionKey(keyInfo) {
        return this._transport.sendRequest({
     */
    askToUnmute: 'ask-to-unmute',
    'tile-view-changed': 'tileViewChanged',

     * false if not and rejects on failure.
     * configuration options defined in config.js to be overridden.

            case 'display-name-change': {
        });
    'face-landmark-detected': 'faceLandmarkDetected',
        }
     * @param { boolean } arg.transcription - Whether a transcription should be started or not.
            }
            name: 'list-breakout-rooms'
     *
     *
        if (this._frame && this._frame.parentNode) {
        if (!(name in commands)) {
    'toolbar-button-clicked': 'toolbarButtonClicked',
        for (const event in listeners) { // eslint-disable-line guard-for-in
            name: 'is-video-muted'
     * Only applies to certain jitsi meet deploys.
     * @param {Object} [options.configOverwrite] - Object containing
    getAvatarURL(participantId) {
     */
     */
            this._intersectionObserver.disconnect();

    }
        return setAudioOutputDevice(this._transport, label, deviceId);

     * Executes commands. The available commands are:
            this.executeCommand('setMediaEncryptionKey', JSON.stringify({
    toggleModeration: 'toggle-moderation',
     */
const commands = {
    /**
    }
        console.warn('isDeviceListAvailable is deprecated and will be removed in the future. '
    setNoiseSuppressionEnabled: 'set-noise-suppression-enabled',
     * The listener will receive object with the following structure:
     * For dropbox recording, recording `mode` should be `file` and a dropbox oauth2 token must be provided.
     * @returns {Object} Rooms info.
    isVideoAvailable() {
    toggleChat: 'toggle-chat',
     * Resizes the large video container as per the dimensions provided.
    sendCameraFacingMode: 'send-camera-facing-mode-message',

        this._frame.style.border = 0;
    }
    setFollowMe: 'set-follow-me',
     * Opens the desktop picker. This is invoked by the Electron SDK when gDM is used.
    /**
                this.showPiP();
            'microphone',
    }
     * Returns any custom avatars backgrounds.
    'recording-consent-dialog-open': 'recordingConsentDialogOpen',
    'video-conference-left': 'videoConferenceLeft',
    _getPrejoinVideo() {
     * Executes command. The available commands are:
 *
    'ready': 'ready',
    'dominant-speaker-changed': 'dominantSpeakerChanged',
     * {@code incomingMessage} - receives event notifications about incoming
     * @param {string} [videoType] - Indicates the type of thumbnail to be pinned when multistream support is enabled.
        return this._transport.sendRequest({
        this._frame.allow = [
        return this._transport.sendRequest({
            = this._participants[participantId] || {};
     *
    sendTones: 'send-tones',
     * Stops a recording or streaming session that is in progress.
            const wasIntersecting = this._isIntersecting;
     *
     *
        const { key, index } = keyInfo;
     * Setups listeners that are used internally for JitsiMeetExternalAPI.
     * @param {string} deviceId - The id of the new device.

     * @param {string} label - The label of the new device.
        // so the iframe config is updated before we try to show PiP.
    _getParticipantVideo(participantId) {
                    user.avatarURL = data.avatarURL;
     * Displays the given participant on the large video. If no participant id is specified,
     * for iframe onload event.
                this.hidePiP();
    isAudioAvailable() {
        this._tmpE2EEKey = e2eeKey;
     * Getter for the prejoin video element in Jitsi Meet.
     * Returns Promise that resolves with true if the device change is available
    }
     * @param { string } options.youtubeStreamKey - The youtube stream key.

    isVideoMuted() {
        this._frame.setAttribute('allowFullScreen', 'true');
    toggleCamera: 'toggle-camera',
     * Returns whether the conference is P2P.
    }
     * @returns {Promise} - Resolves on success and rejects on failure.

     */
     * conference.
        // Handle pip config changes locally.

     * @param {Array<string>} eventList - Array with the names of the events.
     * Sets the key and keyIndex for e2ee.
    /**
            filename => new URL(filename, baseURL).href
            release,
        this._isPrejoinVideoVisible = false;
                this._participants[userID].displayName = data.displayName;
            'screen-wake-lock',
        return this._transport.sendRequest({
            }
        return this._transport.sendRequest({
            lang,
     *
     */
    /**
                break;
     * Removes event listeners.
                || !iframe
    }
     * information about new participants that will be invited in the call.
                        exportedKey: hexToBytes(this._tmpE2EEKey),
        this._createIFrame(height, width, sandbox);
     * Returns the audio disabled status.

    /**
     * Returns force muted status of the given participant id for the given media type.
     */
                pipTransition = 'disabled';
     * TODO: should be removed after we make sure that all Electron clients use only versions
            if (!this._isIntersecting) {
     *
                    }));
    } else if (typeof value === 'number') {
     * @param {number|string} [options.width] - Width of the iframe. Check
     */
     * and with false if not.
            lang,
     * undefined if not and rejects on failure.
        });
        });
     * @param {string} mediaType - The media type for which to check moderation.

        if (sandbox) {
     * @returns {string} The display name.
    isDeviceChangeAvailable,

     * @param {number|string} width - The with of the iframe.
function changeParticipantNumber(APIInstance, number) {
                exportedKey: false,
     * {{
        return email;

        }
    'moderation-participant-approved': 'moderationParticipantApproved',
                || !iframe.contentWindow.document) {
    'video-quality-changed': 'videoQualityChanged',
     * @returns {HTMLElement|undefined} - The prejoin video.
     */
        });
            if (!entry.isIntersecting && wasIntersecting) {
     * {@code toggleVideo} - Mutes / unmutes video with no arguments.
     */
            data: [ event ],
    /**
     * @param {string} deviceId - The id of the new device.
        participantsInfo.forEach((participant, idx) => {
        return this._transport.sendRequest({
    setTileView: 'set-tile-view',
                    scope: `jitsi_meet_external_api_${id}`,
        return this._transport.sendRequest({
    }
     */
     * }}
    /**
 * Last id of api object.
    }
        id++;

        this._frame.name = frameName;
     * @returns {boolean} - Returns true if we have joined as visitor.
    setVideoQuality: 'set-video-quality',
        this._setupListeners();
 * returns undefined.
     * by default if participantId is undefined.
     */
    /**
        return getCurrentDevices(this._transport);

        const parsedHeight = parseSizeParam(height);
    /**
        return this._frame;
                return Object.keys(rooms[roomItemKey].participants).length + prev;
    displayName: 'display-name',

    _setupIntersectionObserver() {
     * @param {Object} keyInfo - Json containing key information.
    sendChatMessage: 'send-chat-message',
     * @param {IIceServers} [options.iceServers] - Object with rules that will be used to modify/remove the existing

                break;
     *  'from': from,//JID of the user that sent the message
     *
 * @param {JitsiMeetExternalAPI} APIInstance - The instance of the API.
    }
    stopShareVideo: 'stop-share-video',
     * @private
            const entry = entries[entries.length - 1];
     * Tears down IntersectionObserver.

            // Show PiP if iframe is currently not visible.
    setAudioInputDevice,
     */
        });
        this._intersectionObserver = new IntersectionObserver(entries => {
];
     * @param { string } options.mode - Recording mode, either `file` or `stream`.
        this._numberOfParticipants = 0;
    sendParticipantToRoom: 'send-participant-to-room',
            name: 'get-custom-avatar-backgrounds'
    }
     * messages. The listener will receive object with the following structure:

     *
        this.removeAllListeners();
                // Since this is internal event we don't need to emit it to the consumer of the API.
        });
            'display-capture',
        this._transport = new Transport({



        return this._transport.sendRequest({
    }
        return this._iAmvisitor;
                this._participants[userID] = {

     * @param {number|string} height - The height of the iframe. Check
     * Accepts "camera" or "desktop" values. Default is "camera". Any invalid values will be ignored and default will
     */
                const user = this._participants[userID];
        }
     * @returns {Promise<string>} - Resolves with a base64 encoded image data of the screenshot

     *
    }
     * @param { boolean } options.shouldShare - Whether the recording should be shared with the participants or not.
        });
        });
     *
        const { formattedDisplayName }
    }
     * @returns {void}
     * @returns {void}
        });
            'clipboard-write',
     * displayname: displayName //the new display name
    executeCommands(commandList) {
        }
     */

            invitees,
    'outgoing-message': 'outgoingMessage',
     * @returns {Promise} - Resolves with the list of participant id's currently sharing.
    }
            case 'avatar-changed': {
            },
     * logLevel: the message log level

     * passed.
     *
let id = 0;

            case 'video-quality-changed':
     * @returns {Promise} - Resolves with the audio mute status and rejects on
    /**
 * treated as pixel units. If the value is expressed in px, em, pt or
            }
     * @returns {void}
     * @returns {void}
        return setAudioInputDevice(this._transport, label, deviceId);
     * @returns {void}

        if (!isPiPEnabled(this._pipConfig)) {
        return Promise.resolve(true);
    'audio-or-video-sharing-toggled': 'audioOrVideoSharingToggled',
            'speaker-selection'
            return prev;
    setAssumedBandwidthBps: 'set-assumed-bandwidth-bps',
    'mouse-enter': 'mouseEnter',
    }
}
    }
            'camera',
        return this._videoQuality;
     * @param {string} sandbox - Sandbox directive for the created iframe, if desired.

        });
    setAudioOnly: 'set-audio-only',
     * @param {DOMElement} [options.parentNode] - The node that will contain the
        const iframe = this.getIFrame();
    }
     * @returns {Promise}
     * }}
                || !iframe.contentWindow.document) {
     * {@code displayName} - Sets the display name of the local participant to
     * failure.
            name: 'rooms-info'
     * @returns {void}
        }
                ...args[0].pip
            name: 'is-participant-force-muted',
    getDisplayName(participantId) {
    /**
                            bytes.push(parseInt(hex.substring(c, c + 2), 16));
        // Don't create duplicate observers.
    }
     *
     *
            data: args,
     * roomName: room //the room name of the conference
 * commands expected by jitsi-meet.
    'css/all.css', 'libs/alwaysontop.min.js'
                this._isLargeVideoVisible = data.isVisible;
     */
        return this._transport.sendRequest({
                    displayName: data.displayName,
        });
            baseURL = `${protocol}//${host}`;
    muteRemoteParticipant: 'mute-remote-participant',
    /**
        return Object.values(events);
     * @returns {Promise}
     *
     * @private


    /**
    /**
    'avatar-changed': 'avatarChanged',
    'video-mute-status-changed': 'videoMuteStatusChanged',
            this._pipConfig = {
    }
     * Return the conference`s sessionId.
                };


     *
    /**
    startRecording(options) {
     * Hides Picture-in-Picture window.
     * }}

     */
        if (base && base.href) {
     *
     * the participant opening the meeting.
    isAudioDisabled() {
     *
            }
        this.executeCommand('toggleE2EE', enabled);
     * @param {boolean} enabled - The boolean value to enable or disable.

     *
        this._isIntersecting = true;
        });
     */

     *
     * {{
    }
    setLargeVideoParticipant(participantId, videoType) {
import EventEmitter from 'events';
    }
     * in the arguments array. Note: Available only for moderator.
     * @param {string} [videoType] - Indicates the type of video to be set when multistream support is enabled.
     * @param {string} [deviceType] - Values - 'output', 'input' or undefined.
     * {@code toggleFilmStrip} - Hides / shows the filmstrip. No arguments.
    isAudioMuted() {
    isParticipantsPaneOpen() {
        const iframeWindow = this._frame.contentWindow;
     *

    'email-change': 'emailChange',
 * The IFrame API interface class.
            this._height = height;
    /**
    isP2pActive() {
const ALWAYS_ON_TOP_FILENAMES = [
        this._transport.on('event', ({ name, ...data }) => {
    'endpoint-text-message-received': 'endpointTextMessageReceived',

} from '../../transport';
            titleText
                || !iframe.contentWindow.document) {
            const eventName = events[name];
    /**
        });
        });

     *
     *
     * NOTE: This method is not removed for backward compatibility purposes.
     */
     * @param {string}  [options.e2eeKey] - The key used for End-to-End encryption.
     *
        return this._transport.sendRequest({
     * @param {string} participantId - The id of the participant.
    hidePiP: 'hide-pip'

    _getFormattedDisplayName(participantId) {
     */
    /**
     */

        parsedValue = value;
    addEventListeners(listeners) {
        this._url = urlObjectToString({
     * @param {string} event.from - The jid of the sender of the event. Needed
        }
    overwriteConfig: 'overwrite-config',
     * {{
     * @returns {Array<string>} Array of events.
     * @param {string} deviceId - The id of the new device.
     * @returns {string} The email.
     * Currently we support the following
            name: 'capture-camera-picture',
                break;
        if (name === 'overwriteConfig' && args[0]?.pip !== undefined) {
     * Returns the moderation on status on the given mediaType.
            interfaceConfigOverwrite = {},
                if (user) {


                this._onStageParticipant = userID;
     *
                index }));
    /**
     * @param {string} name - The name of the command.

            return;
                    user.displayName = data.displayname;
     */
        });
            this._frame.parentNode.removeChild(this._frame);
        return isDeviceChangeAvailable(this._transport, deviceType);
     * clients with older versions wont work.
     * @returns {Promise}
    toggleE2EE: 'toggle-e2ee',
        this.executeCommand('showPiP');
    'audio-availability-changed': 'audioAvailabilityChanged',
            case 'participant-left':
     * @returns {void}
    /**
     *
                if (user) {
     * @param {string} label - The label of the new device.
    isParticipantForceMuted(participantId, mediaType) {
     * Invite people to the call.
        this.emit('_willDispose');
     *
     * Sets the audio output device to the one with the label or id that is
    }
    'participant-menu-button-clicked': 'participantMenuButtonClick',
            return;
     *
    setAudioInputDevice(label, deviceId) {
    }
        this._setSize(height, width);
     *
    _getLargeVideo() {
     *  'message': txt//the text of the message
     * @param {string} [options.jwt] - The JWT token if needed by jitsi-meet for
     * @param {string} participantId - The id of the participant.
     *
     * participant.
            this._isIntersecting = entry.isIntersecting;
    }
        return formattedDisplayName;
import { jitsiLocalStorage } from '@jitsi/js-utils/jitsi-local-storage';
     * @param {string} participantId - The id of the participant.
     * @returns {void}
     */

    'mouse-leave': 'mouseLeave',
        }
    showPiP: 'show-pip',
     * Gets the deployment info.
    'feedback-submitted': 'feedbackSubmitted',
    /**
     * @returns {Array<Object>} - Returns an array containing participants
     * The listener will receive object with the following structure:
     * @returns {Promise}
            name: 'is-audio-available'
     * Returns Promise that resolves with true if the device list is available
     */
    'p2p-status-changed': 'p2pStatusChanged',
            return;
     * }}
    'transcribing-status-changed': 'transcribingStatusChanged',
    'recording-status-changed': 'recordingStatusChanged',
            }
     * parseSizeParam for format details.
                this._participants[userID].formattedDisplayName
     *
                break;
    }
        this._transport.on('request', (request, callback) => {
     * @returns {Promise} - Resolves with true if the participants pane is open
     * @param {string} descriptionText - The OS camera facing mode (environment/user).

        });
    /**
        }
     * }}
                name: requestName
    'breakout-rooms-updated': 'breakoutRoomsUpdated',
    setAudioOutputDevice(label, deviceId) {
        this.executeCommand('hidePiP');
     *
    }
     * @param { string } options.youtubeBroadcastID - The youtube broadcast ID.
    'file-uploaded': 'fileUploaded',
    /**
    'video-conference-joined': 'videoConferenceJoined',
                localStorageContent
            case 'local-storage-changed':
     * Sets the audio input device to the one with the label or id that is
     * {@code videoConferenceJoined} - receives event notifications about the
        const { avatarURL } = this._participants[participantId] || {};
                        for (let c = 0; c < hex.length; c += 2) {
                    this._tmpE2EEKey = undefined;
    rejectParticipant: 'reject-participant',
        }
            this.executeCommand('resizeLargeVideo', width, height);
        this.on(event, listener);
     * Creates the iframe element.
    'raise-hand-updated': 'raiseHandUpdated',
                break;
        } = options;

        this._iAmvisitor = undefined;
        this.executeCommand('setVirtualBackground', enabled, backgroundImage);
    'log': 'log',
                this._isPrejoinVideoVisible = data.isVisible;

        return this._onStageParticipant;
            const userID = data.id;
    'transcription-chunk-received': 'transcriptionChunkReceived',
    }
            roomName,
    }
     * @returns {Promise} - Resolves with the current livestream URL if exists, with
    }
const events = {
     * the event and value - the listener.
     */
            if (!wasEnabled && isEnabled) {
     * For RTMP streams, `rtmpStreamKey` must be passed on. `rtmpBroadcastID` is optional.

    resizeLargeVideo: 'resize-large-video',
 * @param {any} value - The value to be parsed.
                return true;
     *
     * @param {Object} commandList - The object with commands to be executed.
            }
    toggleFilmStrip: 'toggle-film-strip',

    'toolbar-visibility-changed': 'toolbarVisibilityChanged',
     * Returns screen sharing status.
     */
     * @param {Array<Object>} [options.devices] - Array of objects containing
    /**
        this.executeCommand('startRecording', options);
            jwt,
    showNotification: 'show-notification',
    }
     * @returns {void}
        const {
     * {@code participantJoined} - receives event notifications about new
     * @deprecated
    avatarUrl: 'avatar-url',
     *
        return this._transport.sendRequest({
    'file-deleted': 'fileDeleted',
     * }}
     * @param {string} cameraFacingMode - The OS camera facing mode (environment/user).
    getParticipantsInfo() {
     * @param {string} participantId - The id of the participant to check.
                break;
    'participant-left': 'participantLeft',
     * @returns {Promise} - Resolves with start silent status.

     *
     * NOTE: This property is currently experimental and may be removed in the future!
    getSupportedEvents() {
                        const bytes = [];


    /**
                this.showPiP();
    /**
            name: 'session-id'
            iceServers,
                const user = this._participants[userID];
                if (user) {
            descriptionText,
    'feedback-prompt-displayed': 'feedbackPromptDisplayed',
 * @param {int} number - The number of participants to be added to
            name: 'get-p2p-status'
        this._pipConfig = configOverwrite?.pip;
     * @param {Object} listeners - The object key should be the name of

     */
     *
    /**
                ...this._pipConfig,
