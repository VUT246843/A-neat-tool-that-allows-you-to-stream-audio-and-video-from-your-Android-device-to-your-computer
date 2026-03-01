     */
     *
const logger = Logger.getLogger('api:core');
        });
     * @returns {void}
                virtualSource: backgroundImage
import {
        });
                desktopSharingSources: desktopSharingSources ?? [ 'screen', 'window' ]
            }
            if (!conference) {
        },
        offsetY,
                        error = new Error('One or more invites failed!');
            roomName
    }
     * @param {string} id - User id.

    notifyFeedbackSubmitted(error) {
     */
     * Notify external application (if API is enabled) that message was sent.
     */
     * Notifies the external application (spot) that the local jitsi-participant
     *
        'password': password => {
                return;
     *
        clientX,
        });
            if (activeSession && activeSession.id) {
        },
            name: 'recording-consent-dialog-open',
        this.notifyBrowserSupport(isSupportedBrowser());
     * @param {string} link - The recording download link.
                if (!recordingService.enabled && !dropboxToken) {
            APP.store.dispatch(toggleDialog(SettingsDialog, {
     *
        }
    }

                return;
     *

            sendAnalytics(createApiEvent('largevideo.participant.set'));
        },
                return;

            logger.info(`Overwriting config with: ${JSON.stringify(whitelistedConfig)}`);
                break;
        clientY,
        this._sendEvent({
     * Notify external application ( if API is enabled) that a toolbar button was clicked.
    sendParticipantToRoom
        case 'rooms-info': {
     * @param {string} displayname - User nickname.
         * Shows a custom in-meeting notification.
    notifyFileUploaded(fileMetadata) {
    notifyP2pStatusChanged(isP2p) {
        },
            });
import { setTileView, toggleTileView } from '../../react/features/video-layout/actions.any';
     *
    notifyBrowserSupport(supported) {
        });
    }
 */
        'send-camera-facing-mode-message': (to, facingMode) => {
            const { desktopSharingSources } = APP.store.getState()['features/base/config'];
    /**
    }
    moveToRoom,

        });

        this._sendEvent({
                        result
            } else {
     * @param {boolean} isOpen - True if the chat panel is open.
            break;
} from '../../react/features/breakout-rooms/actions';

            APP.store.dispatch(resizeFilmStrip(options.width));
                    callback({
        'set-noise-suppression-enabled': (options = {}) => {
    /**
         * @param { boolean } arg.shouldShare - Whether the recording should be shared with the participants or not.
    }
        });
        'proxy-connection-event': event => {

     * @param {MouseEvent} event - The mousemove event.
                ? requestEnableVideoModeration : requestEnableAudioModeration;
 * The current audio availability.
    isParticipantModerator
                logger.error('Assumed bandwidth bps must be a number.');
     * be displayed or hidden.
     * @returns {void}
     * a text message through datachannels.
    }
            break;
                } else {
     * conference.
            preventExecution
    notifyEmailChanged(
                livestreamUrl
        if (name && commands[name]) {
/**
     */
            description,
        'toggle-e2ee': enabled => {
     */

    }
     * @param {Object} data - The event data.
            callback(getBreakoutRooms(APP.store.getState()));
         * Defaults to "normal" if not provided.
                    } else {

    } = event;

} from './constants';
    toggleChat
        });
            name: 'toolbar-visibility-changed',
        return transport.sendRequest({
        'initiate-private-chat': participantId => {
     * entered or exited.
     */
    notifyParticipantMuted(participantId, isMuted, mediaType) {
     * @returns {void}
    notifyMouseEnter(event) {
    notifyEndpointTextMessageReceived(data) {
     * Notify the external application (if API is enabled) if the connection type changed.
                return;
     * @param {MouseEvent} event - The mousemove event.
        },

         * Each object should have a `label` and a `uuid` property. It should be used along a listener
     * been joined.
    notifyLog(logLevel, args = []) {
                    if (!dataURL) {
            name: 'moderation-status-changed',
     * Notify the external application that a participant's mute status changed.
            muted
            const muteMediaType = mediaType ? mediaType : MEDIA_TYPE.AUDIO;
    /**
    /**
     * closed.
            APP.store.dispatch(toggleBlurredBackgroundEffect(videoTrack, blurType, muted));
            const participant = videoType === VIDEO_TYPE.DESKTOP
     * @returns {void}
        },
     * @returns {void}
            isOpen
         * Removes a notification given a unique identifier.
     * to join.

     *
            sendAnalytics(createApiEvent('set.audio.only'));
}
            id: participantId,
    transport.on('request', (request, callback) => {
import { startAudioScreenShareFlow, startScreenShareFlow } from '../../react/features/screen-share/actions';
                        dataURL
                    recorderOnly
            const { visible } = APP.store.getState()['features/filmstrip'];
     */
    notifyPictureInPictureLeft() {

            break;
                titleText }));
     * Will only fire if rtcstats is enabled.
        }
                // do something better for parsing the arguments. But since this option for stringify is part of the
            break;

     *
     * occurred.
import Logger from '@jitsi/logger';
        },

                }
            APP.store.dispatch(toggleWhiteboard());
        });
    notifySendingChatMessage(message, privateMessage) {
            }
            const exclude = [];
            }
            const type = mediaType || MEDIA_TYPE.AUDIO;
import { appendSuffix } from '../../react/features/display-name/functions';
        'set-subtitles': (enabled, displaySubtitles, language) => {
    /**
/**
            const state = APP.store.getState();
     * @param {string} key - The key of the toolbar button.
            if (!isLocalParticipantModerator(APP.store.getState())) {
         */
import {
 *
            }
     *
     */
    setFilmstripVisible,
 */
        },
 *
     * Notify external application (if API is enabled) that Picture-in-Picture was requested.
        });
        },
    notifyParticipantMenuButtonClicked(key, participantId, preventExecution) {

            name: 'p2p-status-changed',
     *

                    return;
     * @returns {void}
     * Notify external application (if API is enabled) that the display
    sendProxyConnectionEvent(event) {
     *

                } catch (error) {
            callback(isAudioMuteButtonDisabled(APP.store.getState()));
            sendAnalytics(createApiEvent('set.video.quality'));
     * problem establishing a link between the app and the JVB server or the remote peer in case of P2P.
     * @param {string} participantId - The ID of the participant that got approved.

        this._sendEvent({ name: 'data-channel-opened' });
    /**
     * @param {string} key - The key of the participant menu button.
     */
        },
     * Notify external application (if API is enabled) for video available
    }
     * @returns {void}
        },
     * @param {Object} props - The display name, the avatar URL of the local
        'toggle-chat': () => {
     *
     */
     * @param {Object} details - Additional information about the screen
 * Removes sensitive data from a mouse event.
            dropboxToken,
     * @returns {void}
        });
     * @returns {void}
        this._sendEvent({
            } else {
        });
            break;
            const enable = mediaType === MEDIA_TYPE.VIDEO
            if (!Array.isArray(invitees) || invitees.length === 0) {
                ? getVirtualScreenshareParticipantByOwnerId(state, participantId)
            records
import { getWhitelistedJSON } from '../../react/features/base/config/functions.any';

     * @param {string} email - The new email of the participant.
            APP.store.dispatch(toggleRequestingSubtitles());
     * Notify external application (if API is enabled) if whiteboard state is
            dispatch(selectParticipantInLargeVideo(participant.id));
                sendAnalytics(createApiEvent('submit.password'));


        },

import {

     * Notify the external application that a file has been deleted.
    togglePinStageParticipant
            const { conference, passwordRequired }
            enabled
        },
                APP.store.dispatch(setPrivateMessageRecipient());
    notifyModerationChanged(mediaType, enabled) {
    /**

        });
            { email }) {
 * The transport instance used for communication with external apps.
    }
        });
     */
                ? openParticipantsPane : closeParticipantsPane;
         * @type {boolean}
import { isEnabledFromState, isForceMuted } from '../../react/features/av-moderation/functions';
            break;
     * Notify external application (if API is enabled) that the conference
    /**
            const state = APP.store.getState();
     * @returns {void}
            callback(videoAvailable);
            APP.store.dispatch(answerKnockingParticipant(id, approved));

const transport = getJitsiMeetTransport();
        this._sendEvent({
     * @param {string} reason - The close reason.
            const validTypes = Object.values(NOTIFICATION_TYPE);
            const state = APP.store.getState();
    /**
    notifyUserRoleChanged(id, role) {

} from '../../react/features/base/tracks/functions';
    /**
     * @returns {void}
     * @param {string} id - The resource id of the sender.
/**
            APP.store.dispatch(closeBreakoutRoom(roomId));
                return;
                return;
    }
     * @returns {void}
     * has been submitted. Intended to be used in conjunction with the
    }
     *

            name: 'email-change',
            APP.store.dispatch(setPrivateMessageRecipient());
            name: 'tile-view-changed',
                });
     */
    }
            APP.store.dispatch(toggleChat());
        this._sendEvent({ name: 'video-ready-to-close' });
    notifySubjectChanged(subject) {
    notifyAudioAvailabilityChanged(available) {

    /**

                logger.error('Missing moderator rights to remove breakout rooms');
        /**
            if (isScreenshotCaptureEnabled(state, true, false)) {
            APP.store.dispatch(showPiP());
            APP.conference.onProxyConnectionEvent(event);
 */
        });
     */
     * @returns {void}
            const keys = customActions.map(({ label }) => label);
                conference.startRecording(recordingConfig);
            if (!conference) {
     */
            name: 'transcription-chunk-received',
            }
import { CAMERA_FACING_MODE_MESSAGE } from '../../react/features/base/tracks/constants';
            if (enabled) {
        });
     *
        'hide-notification': uid => {
        pageX,
     * Notify the external app that a notification has been triggered.
            });
 * @type {boolean}
            transcription
        },

     * changed their subject.
        },
     */
        'toggle-camera-mirror': () => {
            APP.store.dispatch(overwriteConfig(whitelistedConfig));
     * @param {string} type - The type of the mic error.
                backgroundEffectEnabled: enabled,
    notifyLargeVideoVisibilityChanged(isHidden) {
        'toggle-virtual-background': () => {
            logger.debug('Set assumed bandwidth bps command received', value);
import { parseJWTFromURLParams } from '../../react/features/base/jwt/functions';
    /**
        },
                APP.store.dispatch(toggleScreenshotCaptureSummary(true));
            available
        });
     * @param {string} participantId - The ID of the participant.
            callback({
     * @param {string} actionUuid - The UUID of the action that has been triggered.
            sendAnalytics(createApiEvent('tile-view.toggled'));
     * Notify external application (if API is enabled) that conference feedback
            sendAnalytics(createApiEvent('muted-everyone'));
            this._enabled = false;
        const { defaultLocalDisplayName } = state['features/base/config'];
                transport.sendEvent(event);
                logger.error('No participant found for the given participantId');
                logger.error('Missing moderator rights to send participants to rooms');
     * @returns {void}
    rejectParticipantAudio,
import { toggleWhiteboard } from '../../react/features/whiteboard/actions.web';
    /**
            // if id not provided, unpin everybody.
            name: 'mouse-move',
        this._enabled = true;
import {

        this._sendEvent({
            }
     * @param {boolean} transcription - True if a transcription is being recorded, false otherwise.
            console.warn('Using command avatarUrl is deprecated. Use context.user.avatar in the jwt.');
                return;
            break;
            timestamp
    notifyMouseLeave(event) {

        }
        case 'get-livestream-url': {
        });
            sendAnalytics(createApiEvent('submit.feedback'));
     */


            if (!isLocalParticipantModerator(APP.store.getState())) {
     * @param {Object} data - The event data.

        });
 * @returns {void}
    notifySuspendDetected() {
            id,
                    error: new Error('Unexpected format of invitees')
                    };
    /**
                logger.error(`Invalid notification timeout "${timeout}". Expecting one of ${validTimeouts}`);
    }
    /**
        this._sendEvent({
            // the location/URL because then it is very likely that the Jitsi
        this._sendEvent({
     *
            status
        }
                const { isOpen: isChatOpen } = state['features/chat'];
            APP.store.dispatch(setVolume(participantId, volume));
                    let result;
            name: 'transcribing-status-changed',
                return;
     * @param {Object} participant - Participant data such as id and name.
                    name: ENDPOINT_TEXT_MESSAGE_NAME,
     * @returns {void}
        screenX,
            APP.store.dispatch(updateSettings({ localFlipX: !currentFlipX }));
     *
        return true;
        // Let the embedder know we are ready.
    sendMessage,
        'toggle-lobby': isLobbyEnabled => {
                return;
            return;
        this._sendEvent({
         */
     * @returns {void}
        movementX,
    notifyBreakoutRoomsUpdated(rooms) {
    notifyFeedbackPromptDisplayed() {
            mediaType

} from '../../react/features/av-moderation/actions';
     * @param {number} ttl - The recording download link time to live.
         * Defaults to "short" if not provided.
        'close-breakout-room': roomId => {
     * @param {boolean} isP2P - Type of PC.
                    if (failedInvitees.length) {
                sharingParticipantIds
            }
     *
            supported
            });
     * otherwise.
                logger.error('Conference is not defined');
     * @param {Object} kicker - The participant that removed the
     * changed.

     * Notify external application of an unexpected camera-related error having
                defaultTab: SETTINGS_TABS.VIRTUAL_BACKGROUND }));
                return;
    closeBreakoutRoom,
                    conference,
            callback(Boolean(APP.conference.isSharingScreen));
     * @param {boolean} preventExecution - Whether execution of the button click was prevented or not.

                }
            }
    /**
        this._sendEvent({
            // and, consequently, the latter will need to communicate with the
            const conference = getCurrentConference(state);
     *
            id
    setLocalSubject,
         */
    notifyError(error) {
     * @returns {void}
            APP.store.dispatch(raiseHand(!raisedHand));
        });
            on
            kicker
                APP.store.dispatch(disable());
            APP.store.dispatch(setTileView(enabled));
            reason
        });
            callback(isEnabledFromState(type, APP.store.getState()));
     * Notify external application (if API is enabled) that local user has left the conference.
            const raisedHand = hasRaisedHand(localParticipant);
                    let error;
        this._sendEvent({
        });

        this._sendEvent({

            APP.store.dispatch(toggleBackgroundEffect({

     * @returns {void}
    approveParticipantVideo,
        },
    }
            if (localParticipant && isParticipantModerator(localParticipant)) {
            const toggleParticipantsPane = enabled
     * @returns {void}
            participantId,
    isLocalTrackMuted
    /**
     */
     */
        },

     * Notify the external application that the audio or video is being shared by a participant.
            }
            if (participant) {
                return;
     * received.
            name: 'on-prejoin-video-changed',
        const state = APP.store.getState();
        this._sendEvent({
     */
    notifyAvatarChanged(id, avatarURL) {
        this._sendEvent({

        if (!Array.isArray(args)) {
    notifySharingParticipantsChanged(data) {
     * @param {number} timestamp - Timestamp conference was created.
                // JSON.stringify. For example Map instance will be translated to '{}'. So I think we have to eventually
            const localParticipant = getLocalParticipant(APP.store.getState());

         * For dropbox recording, recording `mode` should be `file` and a dropbox oauth2 token must be provided.
            name: 'participant-joined',
                }));
            const type = mediaType || MEDIA_TYPE.AUDIO;
     *
            }
     *
            if (!validTimeouts.includes(timeout)) {
import SettingsDialog from '../../react/features/settings/components/web/SettingsDialog';
import { setRequestingSubtitles, toggleRequestingSubtitles } from '../../react/features/subtitles/actions';
        },
    };
     * @param {boolean} privateMessage - True if the message was a private message.
         * @param { string } arg.timeout - Timeout type, either `short`, `medium`, `long` or `sticky`.
        this._sendEvent({
            open
     * Notify external application that the breakout rooms changed.
            APP.store.dispatch(toggleParticipantsPane());
        'add-breakout-room': name => {
                return;
                exclude.push(localParticipant.id);
            formattedArguments.push(formattedArgument);
    /**
                logger.error('This feature is only supported on mobile');
        this._sendEvent({
     * Notify external application (if API is enabled) that the mouse has entered inside the iframe.
        this._sendEvent({
        this._sendEvent({
                    return;
     * @param {boolean} visible - Whether or not the filmstrip has been set to
    pinParticipant,


            description,
        },
            }
            if (!isLocalParticipantModerator(APP.store.getState())) {
     */
     *
                logger.error('Conference is not defined');
     * @param {boolean} visible - True if the toolbox is visible, false otherwise.
    API_ID,
            name: 'file-deleted',
                };

        },

            callback({ error: new Error('UnknownRequestError') });
import { setVideoQuality } from '../../react/features/video-quality/actions';
    /**
            const onSourceChoose = (_streamId, _type, screenShareAudio, source) => {
     * Notify the external application that a file has been uploaded.
                    pinnedParticipants?.forEach(p => {
            || parseJWTFromURLParams());
 * Initializes supported commands.
            }, jitsiTrack));
            participantId
        });
     * configuration of the filmstrip has been changed.

        },
        },
import { isVideoMutedByUser } from '../../react/features/base/media/functions';
     * @param {string} value - Whether the sharing is playing, pause or stop (on audio there is only playing and stop).
            privateMessage
        this._sendEvent({
        },
    /**
     * @param {string} participantId - Participant id of the participant which started or ended
        },
        this._sendEvent({

        }
                enabled, displaySubtitles, language ? `translation-languages:${language}` : null));
        }
    /**
                    }
     * @returns {void}
        screenX,
    createBreakoutRoom,
     *
    notifyWhiteboardStatusChanged(status) {
     * Notify external application (if API is enabled) that user joined the
 * Check whether the API should be enabled or not.
    }
                        mode: JitsiRecordingConstants.mode.FILE,
         * @param {boolean} transcription - Whether the transcription needs to be stopped.
import { openChat } from '../../react/features/chat/actions.web';
    notifyParticipantApproved(participantId, mediaType) {
    notifyRecordingConsentDialogOpen(open) {
            APP.store.dispatch(sendParticipantToRoom(participantId, roomId));

                logger.error('Conference not yet available');

     * Notify external application (if API is enabled) that the user role
    }
            APP.conference.hangup(showFeedbackDialog);
                return;
     * status changed.

     *
                return;
     * Notify external application (if API is enabled) that message was
     * has been displayed.


            logger.info(`API command received: ${name}`);
     * @param {boolean} isP2p - Whether the new connection is P2P.

            }
     * Notify the external application that a participant was approved on moderation.
            callback(APP.store.getState()['features/base/config'].deploymentInfo);
import { showDesktopPicker } from '../../react/features/desktop-picker/actions';
            if (![ JitsiRecordingConstants.mode.FILE, JitsiRecordingConstants.mode.STREAM ].includes(mode)) {

            APP.store.dispatch(reject(participantId));
            name: 'pip-left'
                dispatch(selectParticipantInLargeVideo());
                APP.store.dispatch(setRequestingSubtitles(false, false, null, true));


     *
import { invite } from '../../react/features/invite/actions.any';

    }
            const activeSession = getActiveSession(state, mode);
            if (arg instanceof Error) {
            error
                .then(dataURL => {
        x,
    processExternalDeviceRequest
     * @returns {void}
     */
            name: 'recording-status-changed',
            }
        case 'is-audio-muted':
        case 'is-sharing-screen':
                    APP.store.dispatch(startLocalVideoRecording(onlySelf));
     * Notify the external application that the state of the participants pane changed.

            value,
        case 'capture-largevideo-screenshot' :
                return;
            if (!localParticipant) {
import {
    getVirtualScreenshareParticipantByOwnerId,
            if (transcription) {
     * nickname.
     * a PC `failed` but connectivity to the rtcstats server is still maintained signaling that there is a
    /**
    /**
        }
     */
            sendAnalytics(createApiEvent('participant.pinned'));

        'grant-recording-consent': unmute => {
        'set-large-video-participant': (participantId, videoType) => {
    notifyParticipantsPaneToggled(open) {
} from '../../react/features/filmstrip/actions.web';

     * @param {string} mediaType - Media type for which the participant was approved.

     * screen was loaded.
            options
            name: 'log',
     * @param {string} mode - Stream or file or local.
    /**
     * @param {string} roomName - The room name.
     * @param {boolean} open - True if the dialog is open, false otherwise.

        });
            if (conference) {
        this._sendEvent({ name: 'ready' });
        'reject-participant': (participantId, mediaType) => {
            sendAnalytics(createApiEvent('video.hangup'));
     *
    }
    getLocalParticipant,
                APP.store.dispatch(pinParticipant(participantId));
                APP.store.dispatch(setRequestingSubtitles(true, false, null, true));
     * Notify external application (if API is enabled) that the mouse has entered inside the iframe.

 * interface to access Jitsi Meet features by external applications that embed
                    screenShareAudio,
        'toggle-tile-view': () => {
                    APP.store.dispatch(setPrivateMessageRecipient(participant));
         * @private

        },
import { getDisplayName } from '../../react/features/base/settings/functions.web';
     *
                        result = true;
            }
    /**
         *

     *
            devices
     * @returns {void}
     * @returns {void}
            name: 'mic-error',
    }
            name: 'large-video-visibility-changed',
        }
    /**
                ? getVirtualScreenshareParticipantByOwnerId(state, id) : getParticipantById(state, id);
    /**
     *
    }
                    logger.error('Failed starting recording: local recording is either disabled or not supported');
            break;
     * @returns {void}
 * @param {MouseEvent} event - The mouse event to sanitize.
        const formattedArguments = [];
                livestreamUrl = activeSession?.liveStreamViewURL;
     * participant has changed.
        'show-pip': () => {
     */
     * Notify the external application that a participant was rejected on moderation.
            } else {
            message,
     * @returns {void}
    /**
        const { name } = request;
        movementY,
            }
                    mode: JitsiRecordingConstants.mode.STREAM,
        },
        this._sendEvent({
         * @param {Object} options - Additional details of how to perform
    setVolume,

     *
     * @param {Array<string>} args - Array of strings composing the log message.
     *
        });
            role
     */
    /**
 * The current video availability.
        'kick-participant': participantId => {
                                'upload_credentials': {
 */
        }


            const state = APP.store.getState();
            roomName,

        this._sendEvent({
                id: actionUuid
        });
     */
    /**
    notifyReceivedChatMessage(
                logger.warn('Trying to select a non-existing participant with set-large-video-participant command.');

     * @param {boolean} on - True if recording is on, false otherwise.
     *
         * @param { string } arg.title - Notification title.
            name: '_request-desktop-sources',
        });
    }
    notifyNonParticipantMessageReceived(id, json) {
import { getParticipantsPaneOpen } from '../../react/features/participants-pane/functions';
            logger.error('Audio screen sharing is not supported by the current platform!');
        this._sendEvent({
            dispatch(showDesktopPicker(options, onSourceChoose));
 *
    }
            sendAnalytics(createApiEvent('largevideo.resized'));
     *
     * Notify external application (if API is enabled) that user received
            break;
     */

        this._sendEvent({

        'hide-pip': () => {
            logLevel,
                    logger.error('Failed starting recording: the recording service is not enabled');
            APP.store.dispatch(moveToRoom(roomId));
            if (!isLocalParticipantModerator(APP.store.getState())) {

     * Notify external application of an unexpected mic-related error having
        'toggle-video': () => {
    notifyTileViewChanged(enabled) {
    /**
        this._sendEvent({
        y,
 */
    resizeFilmStrip,
            APP.store.dispatch(toggleLobbyMode(isLobbyEnabled));
        });

                } else if (muteMediaType === MEDIA_TYPE.VIDEO) {
    notifyFilmstripDisplayChanged(visible) {
     */
            onlySelf,

                            }
     * @param {string} role - The new user role.
     * @param {MouseEvent} event - The mousemove event.
import { setCameraFacingMode } from '../../react/features/base/tracks/actions.web';
            wasConnected
        'set-participant-volume': (participantId, volume) => {
        this._sendEvent({
} from '../../react/features/large-video/actions.any';
            sendAnalytics(createApiEvent('chat.toggled'));
         * For local recording, recording `mode` should be `local` and optionally `onlySelf` could be passed on.
     * @returns {void}
            }
    /**
            break;
        },
            // The store should be already available because API.init is called
    }
            sendAnalytics(createApiEvent('toggle-video'));
    /**
            APP.store.dispatch(hideNotification(uid));
                appearance: type
            APP.store.dispatch(openCameraCaptureDialog(callback, { cameraFacingMode,
        this._sendEvent({
        'overwrite-config': config => {
     *
     * Notify external application (if API is enabled) that the prejoin
            const state = getState();
        'set-media-encryption-key': keyInfo => {
     */
            APP.store.dispatch(hidePiP());
        }
     */
     *


     * @param {string} logLevel - The message log level.
            { displayName, formattedDisplayName }) {
        this._sendEvent({
                APP.API.notifyCustomNotificationActionTriggered(uuid);
     */
     * @param {string} mediaType - Whether the content which is being shared is audio or video.
        },
     * sharing.
                            'file_recording_metadata': {
     * Notify external application (if API is enabled) for video muted status
     * @returns {void}
                avatarBackgrounds: APP.store.getState()['features/dynamic-branding'].avatarBackgrounds
            // Check if targeting the local participant
            name: 'filmstrip-display-changed',


     */
     */

        this._sendEvent({
            name: 'display-name-change',
        'stop-recording': (mode, transcription) => {
            name: 'video-mute-status-changed',

     */

    /**
         * @param { string } arg.mode - Recording mode, either `local`, `file` or `stream`.
                });
            id
     *

            visible

     * @returns {void}
            name: 'mouse-leave',
     * has changed.

                sendAnalytics(createApiEvent('follow.me.unset', {
                        })
     * @param {string} message - Additional information about the error.

        this._sendEvent({
     * @param {boolean} preventExecution - Whether execution of the button click was prevented or not.
     * Notify external application of the current meeting requiring a password
            name: 'video-conference-joined',
} from '../../react/features/base/conference/actions';
                APP.store.dispatch(enable());


            name: 'audio-or-video-sharing-toggled',
 */
         * @param { string } arg.youtubeBroadcastID - The youtube broadcast ID.
                    let error;
    }
    /**
     * Notify external application (if API is enabled) that the prejoin video
    }
            }

            }
     *
            const whitelistedConfig = getWhitelistedJSON('config', config);
            sendAnalytics(createApiEvent('audio.screen.sharing.toggled'));
            name: 'screen-sharing-status-changed',

     */
        case 'is-video-available':
    /**
            name: 'toolbar-button-clicked',
        this._sendEvent({
            name: 'chat-updated',
 */
            name: 'content-sharing-participants-changed',

            APP.store.dispatch(recorderOnly ? setFollowMeRecorder(value) : setFollowMe(value));

                    APP.store.dispatch(toggleChat());
            const state = APP.store.getState();
         * Only applies to certain jitsi meet deploys.

    requestDisableVideoModeration,
     * @param {boolean} isVisible - Whether the prejoin video is visible.
    notifyFileDeleted(fileId) {
     */
        });
     * @returns {void}
 */

    close as closeParticipantsPane,
     * @returns {void}
            }
     * Notify external application (if API is enabled) that Picture-in-Picture mode was entered.
            });
     * changed.
            const conference = getCurrentConference(state);
     *
                                ...extraMetadata,
            name: 'moderation-participant-rejected',
            mediaType
                APP.store.dispatch(setPassword(

            }

            if (to) {
            name: 'moderation-participant-approved',
     * @returns {void}
     */
                : APP.store.dispatch(grantRecordingConsent());
        'pin-participant': (id, videoType) => {
    notifyVideoMutedStatusChanged(muted) {
                logger.error(' End Conference not supported');
            const sharingParticipantIds = getScreenshareParticipantIds(APP.store.getState());
            name: 'proxy-connection-event',
    }
        },
     * Notify external application (if API is enabled) that the chat state has been updated.
            id,
            APP.store.dispatch(muteAllParticipants(exclude, muteMediaType));
     * @returns {void}
                });
    raiseHand
        this._sendEvent({
 * Implements API class that communicates with external API class and provides
            if (isScreenAudioSupported()) {
        });
} from '../../react/features/base/participants/functions';
        switch (name) {
            faceBox,

    notifyOnStageParticipantChanged(id) {
    notifyPictureInPictureEntered() {
                return;
            type = NOTIFICATION_TYPE.NORMAL,
     */

        /**
                // public interface and I think it could be useful in some cases I will it for now.
            APP.store.dispatch(toggleTileView());
                customActionHandler: handlers,
    notifyVideoQualityChanged(videoQuality) {
        offsetX,
        'send-tones': (options = {}) => {
    /**
        },


            message: json

import { RECORDING_TYPES } from '../../react/features/recording/constants';
        this._sendEvent({
            type,
        },
            // on appWillMount action.
                                ...extraMetadata,
     *
    notifyConferenceCreatedTimestamp(timestamp) {

            callback({
    notifyConferenceJoined(roomName, id, props) {
    /**
            const muteMediaType = mediaType ? mediaType : MEDIA_TYPE.AUDIO;
            const participantId = participant.id;

     * Notify external application (if API is enabled) that recording has started or stopped.
        },
            APP.store.dispatch(removeBreakoutRoom(breakoutRoomJid));
            code,
                name: CAMERA_FACING_MODE_MESSAGE,
            data
            APP.store.dispatch(setAssumedBandwidthBps(value));
    overwriteParticipantsNames,
    }
    /**
            APP.store.dispatch(approveParticipantAudio(participantId));
         *

    }
        const { dispatch, getState } = APP.store;
            if (value) {
            id,

            if (transcription) {
        offsetX,
        movementY,
            id,

     * Notify external application (if API is enabled) that the recording consent dialog open state has changed.
     */
     * @param {string} id - User id.
        },
         * @returns {void}
 * Jitsi Meet.
     */
        }
     * @returns {void}
        this._sendEvent({
            APP.store.dispatch(updateSettings({ displayName: getNormalizedDisplayName(displayName) }));
    /**
            sendAnalytics(createApiEvent('toggle-audio'));
import { answerKnockingParticipant, toggleLobbyMode } from '../../react/features/lobby/actions';
        });
         * sharing or to turn it off.
 * explicitly setting desired screensharing state.
    notifyTranscribingStatusChanged(on) {
     * @param {boolean} open - Whether the panel is open or not.

     * avatar.
    kickParticipant,
            name: 'camera-error',

     * Notify external application (if API is enabled) that the user received
            videoQuality
                    APP.store.dispatch(pinParticipant());

            rtmpBroadcastID,
        },
     *
     * Initializes the API. Setups message event listeners that will receive
} from '../../react/features/large-video/actions.web';
import { setFollowMe, setFollowMeRecorder } from '../../react/features/follow-me/actions';

                title,
            name: 'peer-connection-failure',
                logger.error('Conference is not defined');
    /**
            if (!isLocalParticipantModerator(APP.store.getState())) {
                logger.error('Failed sending endpoint text message', err);
     * Notify external application (if API is enabled) that user changed their
         * @param { Object } arg.extraMetadata - Any extra metadata params for file recording.
                        appData: JSON.stringify({
        });
     *
            break;
        'resize-film-strip': (options = {}) => {
     * Notify external application (if API is enabled) for audio availability
    }
     */
     * @param {string} mediaType - Media type for which the moderation changed.
        });
     * @param {Object} error - The error.

            return;
import {
    selectParticipantInLargeVideo

                    const pinnedParticipants = getPinnedActiveParticipants(state);
     *
            } else if (conference.isEndConferenceSupported()) {
            APP.store.dispatch(captureLargeVideoScreenshot())
         */
            name: 'video-quality-changed',
            const conference = getCurrentConference(state);

        x,
        },
            const reject = mediaType === MEDIA_TYPE.VIDEO ? rejectParticipantVideo : rejectParticipantAudio;
import { getPinnedActiveParticipants, isStageFilmstripAvailable } from '../../react/features/filmstrip/functions.web';
     *
     *
        });
     * Used by Electron to handle PiP requests with proper user gesture context.
            const { invitees } = request;
                        APP.store.dispatch(togglePinStageParticipant(p.participantId));
            name: 'error-occurred',
import {
    }
        });
        'overwrite-names': participantList => {
            timeout = NOTIFICATION_TIMEOUT_TYPE.SHORT
     * Disposes the allocated resources.
        case 'deployment-info':
        });
                ));
            name: 'data-channel-closed',
    }
            break;
/**
        });
     * that connectivity was disrupted, if not it most likely means that the app could not reach
     * Notify the external application (if API is enabled) when the compute pressure changed.
            if (!participant) {
            APP.store.dispatch(sendMessage(message, ignorePrivacy));
        'toggle-raise-hand': () => {
    }
        'toggle-participants-pane': enabled => {
     */
            const options = {
                sendAnalytics(createApiEvent('password.changed'));
            try {


            name: 'outgoing-message',
            } else {
import { muteAllParticipants, muteRemote } from '../../react/features/video-menu/actions';
     */
            formattedDisplayName,
        clientY,
     *  the video or audio sharing.
    requestDesktopSources(options) {
     */
                ));
            isP2p
                    }
        });
                return;
            sendAnalytics(createApiEvent('avatar.url.changed'));
            isVisible

        case 'invite': {
import {
     * @returns {void}
     * Notify the external application that the moderation status has changed.


     * removed from the conference by another participant.
        });

     * Notify external application ( if API is enabled) that a participant menu button was clicked.
        'grant-moderator': participantId => {
     * @param {Object} options - Object with the options for desktop sources.
import { toggleDialog } from '../../react/features/base/dialog/actions';
     * @param {Object} devices - The new device list.
                APP.store.dispatch(playSharedVideo(id));
     * @param {string} id - User id.
            available
            name: 'audio-only-changed',
    /**
    /**
     * @param {number} videoQuality - The video quality. The number represents the maximum height of the video streams.
            try {
            APP.store.dispatch(overwriteParticipantsNames(participantList));
            name: 'incoming-message',
            rtmpStreamKey,
            if (!isMobileBrowser()) {
            mode,
                invite(invitees, true))
            mediaType,

    /**
     * Notify external application (if API is enabled) that user changed their
        });

    getParticipantById,
            // former. (The described logic is merely a heuristic though.)

         */
     * @param {Object} data - The event data.
     */
    commands = {
        });
        });
import { VIRTUAL_BACKGROUND_TYPE } from '../../react/features/virtual-background/constants';
            formattedDisplayName: appendSuffix(displayName, defaultLocalDisplayName)
            sendAnalytics(createApiEvent('share.video.stop'));
 * @type {boolean}
     * Notify external application (if API is enabled) that the dominant speaker
        'email': email => {
        }
            }
     * @returns {void}
            if (!isLocalParticipantModerator(state)) {
     */
     *
     * @returns {void}
        'set-audio-only': enable => {
            const { cameraFacingMode, descriptionText, titleText } = request;
        },
     * @param {Array} rooms - Array containing the breakout rooms and main room.
        'toggle-audio': () => {
            from,
         *
                if (muteMediaType === MEDIA_TYPE.AUDIO) {
                callback({
            event: sanitizeMouseEvent(event)
     * occurred.
     * Notify external application of a participant, remote or local, being
     * Notify external application (if API is enabled) that the feedback prompt
     * @param {string} message - Additional information about the error.
        });
                return;
     *
                        })
    notifyScreenSharingStatusChanged(on, details) {
    /**

    notifyKickedOut(kicked, kicker) {
        'subject': subject => {
     *
     */
        }
    notifyPeerConnectionFailure(isP2P, wasConnected) {
     * @returns {void}
            APP.store.dispatch(setVideoQuality(frameHeight));
    }
import { isMobileBrowser } from '../../react/features/base/environment/utils';
     *
                }
                backgroundType: VIRTUAL_BACKGROUND_TYPE.IMAGE,
    /**
     * meet's UI for the user.
        this._sendEvent({
    }
        });

        pageY,
import { createApiEvent } from '../../react/features/analytics/AnalyticsEvents';

        });
        });
     * @param {string} error - A failure message, if any.

     */
                return;
    setPrivateMessageRecipient,

import {
            faceExpression
                customActionNameKey: keys,
        },
        'set-virtual-background': (enabled, backgroundImage) => {
    return {
     */
    notifyRecordingLinkAvailable(link, ttl) {
            break;
                .then(failedInvitees => {
/**
            // Meet (Web) app is being used by an external/wrapping (Web) app
            } else {
        this._sendEvent({
import { grantRecordingConsent, grantRecordingConsentAndUnmute } from '../../react/features/recording/actions.web';
     */
                ? requestDisableVideoModeration : requestDisableAudioModeration;
            link,
                = APP.store.getState()['features/base/conference'];
        },
} from '../../react/features/participants-pane/actions';
     * @param {boolean} wasConnected - Was this connection previously connected. If it was it could mean
         * For RTMP streams, `rtmpStreamKey` must be passed on. `rtmpBroadcastID` is optional.
        });
     * @param {string} id - The id of the local user.

     * Notify external application (if API is enabled) that transcribing has started or stopped.
    /**
            APP.conference.changeLocalAvatarUrl(avatarUrl);
                    });
                descriptionText,
            const participant = getParticipantById(state, participantId);
         * @returns {void}
import { isScreenAudioSupported } from '../../react/features/screen-share/functions';
     * @param {boolean} enabled - Whether or not the new moderation status is enabled.
                        mode: JitsiRecordingConstants.mode.FILE,
     */
     * @param {string} id - User id of the new on stage participant.
         * @param { string } arg.uid - Optional unique identifier for the notification.
class API {
            uid,
            const { conference } = APP.store.getState()['features/base/conference'];
import { updateSettings } from '../../react/features/base/settings/actions';
            error

    }
            }
                return;
        this._sendEvent({
import { getActiveSession, supportsLocalRecording } from '../../react/features/recording/functions';
     * @returns {void}
            email,
            }
    }
            callback(getParticipantsPaneOpen(APP.store.getState()));
     * Notify the external application (if API is enabled) when the audio only enabled status changed.
     * Sends event to the external application.
            callback(APP.conference.isLocalAudioMuted());
    isLocalParticipantModerator,

    dispose() {
                callback({
    notifyLocalStorageChanged(localStorageContent) {
        this._sendEvent({
     * @param {boolean} available - True if available and false otherwise.

            if (mode === JitsiRecordingConstants.mode.STREAM && !(youtubeStreamKey || rtmpStreamKey)) {
                logger.error('Missing moderator rights to close breakout rooms');
         * @param { string } arg.dropboxToken - Dropbox oauth2 token.
     *

    /**
function toggleScreenSharing(enable) {
import { isEnabled as isDropboxEnabled } from '../../react/features/dropbox/functions';
    requestEnableVideoModeration

        },
     * @returns {void}
                    APP.conference.toggleAudioMuted(false);
        'toggle-camera': facingMode => {
    notifyChatUpdated(unreadCount, isOpen) {
            sendAnalytics(createApiEvent('raise-hand.toggled'));
/**
        });
        });
                }
                }
        'resize-large-video': (width, height) => {
        'start-recording': ({
     * Notify external application (if API is enabled) that the an error has been logged.
        'toggle-share-screen': (options = {}) => {
import { getBreakoutRooms, getRoomsInfo } from '../../react/features/breakout-rooms/functions';
    /**

        this._sendEvent({ name: 'suspend-detected' });
        }
    }
                return;
        },
function sanitizeMouseEvent(event) {
     *
    getScreenshareParticipantIds,
        'set-video-quality': frameHeight => {
                logger.error('Missing moderator rights to auto-assign participants to breakout rooms');
            break;
            name: 'audio-availability-changed',
     * otherwise.

    setSubject

     * @param {string} participantId - The ID of the participant for whom the participant menu button was clicked.
 * @returns {boolean}
            const jitsiTrack = getLocalVideoTrack(tracks)?.jitsiTrack;
            const { localFlipX: currentFlipX } = state['features/base/settings'];
            name: 'raise-hand-updated',
                APP.store.dispatch(addStageParticipant(participantId, true));
     */
    }
     *

        this._sendEvent({
        case 'is-audio-disabled':
            }
     * Notify external application (if API is enabled) that the localStorage has changed.
            } else {
     */
            }, timeout));
                    };
        this._sendEvent({
            name: 'face-landmark-detected',
        case 'is-audio-available':
    notifyFaceLandmarkDetected(faceBox, faceExpression) {
            };
import { hidePiP, showPiP } from '../../react/features/pip/actions';
            mediaType,
         * @returns {void}
            callback(APP.conference.isLocalVideoMuted());
    /**
    endConference,
            { body, from, nick, privateMessage, ts } = {}) {
    notifyParticipantRejected(participantId, mediaType) {
        this._sendEvent({
    _enabled;
                APP.conference.sendEndpointMessage(to, {
         * @param { string } uid - Unique identifier for the notification to be removed.
    notifyPictureInPictureRequested() {
     * Notify external application (if API is enabled) that user updated their hand raised.
     * @returns {void}
        });
        case 'is-participants-pane-open': {
     * Notify external application (if API is enabled) that user left the
            name: 'on-stage-participant-changed',
    }
            stamp: ts
            participant
                formattedArgument += arg;
            open
            APP.store.dispatch(setFilmstripVisible(!visible));
            }
    notifyUserLeft(id) {
     * @param {number} code - The close code.
    }
     *
        case 'capture-camera-picture' : {
     * @param {Object} json - The json carried by the message.
         * For youtube streams, `youtubeStreamKey` must be passed on. `youtubeBroadcastID` is optional.
            break;
    /**
        pageX,
                    logger.error(`Participant with id ${to} not found!`);
        });
                recordingConfig = {
    /**

            const { duration, tones, pause } = options;
     * Notify external application (if API is enabled) whether the used browser is supported or not.
            }
            data
    notifyDominantSpeakerChanged(id) {
            data: {
        pageY,
     * @param {Object} options - Optional parameters.
        }
     * user and the type of the room.
        },
            let formattedArgument = '';
            APP.store.dispatch(showNotification({
        });

 */
            if (!to) {
            }
    }
    notifyNotificationTriggered(title, description) {
     * @returns {void}
        });
        'ask-to-unmute': participantId => {
     * Notify external application that the data channel has been opened.
        });
     * the JVB server, or the other peer in case of P2P.
            APP.conference.toggleVideoMuted(false /* no UI */, true /* ensure track */);
                                    'token': dropboxToken
            customActions = [],
            const { getState, dispatch } = APP.store;
        'set-blurred-background': blurType => {
            let recordingConfig;
     * @returns {void}
            }
            name: 'recording-link-available',
    if (JitsiMeetJS.isDesktopSharingEnabled()) {
     * @returns {void}
            commands[name](...data);
     *

     *
        this._sendEvent({
     * has a status update.
                : getParticipantById(state, participantId);
        });
            const state = APP.store.getState();
            isVisible: !isHidden
            }
            APP.store.dispatch(
            APP.store.dispatch(setLocalSubject(localSubject));
                } else {
            shouldShare,
        'toggle-whiteboard': () => {
            subject
     * @param {string} enabled - True if tile view is currently displayed, false
     * @param {string} error - Error type or null if success.
     * @returns {void}
        },
    /**
    /**
     * @param {Object} kicked - The participant removed from the
            extraMetadata = {},



            ttl
            if (typeof recordingConfig !== 'undefined') {
            }
        typeof API_ID === 'number'
import { MEDIA_TYPE, VIDEO_TYPE } from '../../react/features/base/media/constants';
     * Notify external application (if API is enabled) that tile view has been
        },
        this._sendEvent({
    open as openParticipantsPane
                        error,
import { isSupportedBrowser } from '../../react/features/base/environment/environment';
            const { etherpad } = APP.store.getState()['features/etherpad'];
            error,
/**
            const localParticipant = getLocalParticipant(state);
                if (dropboxToken) {

     * @returns {void}

        'show-notification': ({
    /**
         * @param {boolean} options.enable - Whether trying to enable screen
            return false;
            const videoTrack = getLocalVideoTrack(tracks)?.jitsiTrack;
        'local-subject': localSubject => {
    }
            id
        });
        // with JSON.stringify which can throw an error because of circular objects and we will lose the whole log.
            }
     * Notify external application (if API is enabled) that the device list has
         * @param {string} mode - `local`, `file` or `stream`.
    notifyDataChannelClosed(code, reason) {
            break;
    /**
        });
     *
    notifyCustomNotificationActionTriggered(actionUuid) {
         *
    rejectParticipantVideo,
        },
     *
     * @returns {void}
     * @returns {void}
     * @param {Object} props - The display name of the user.
import { getJitsiMeetTransport } from '../transport';

    notifyRecordingStatusChanged(on, mode, error, transcription) {

            id
            APP.conference.changeLocalEmail(email);
    }
            key,
                    recordingConfig = {
}
    /**
 *
            sendAnalytics(createApiEvent('local.subject.changed'));
            message
            name: 'prejoin-screen-loaded',
            callback(getRoomsInfo(APP.store.getState()));
            id,
            logger.error('notifyLog received wrong argument types!');
        y,
            if (id) {
     * @param {Object} event - The message to pass onto spot.
     * @returns {void}

    setPassword,
                    callback({
        'display-name': displayName => {
            name: 'conference-created-timestamp',
     *
            id

            message
            name: 'compute-pressure-changed',
            return;
            const id = extractYoutubeIdOrURL(url);
            name: 'browser-support',
        this._sendEvent({


    /**
     * Notify the external application that a PeerConnection lost connectivity. This event is fired only if

     * @param {string} participantId - The ID of the participant that got rejected.

            mediaType
import { toggleBackgroundEffect, toggleBlurredBackgroundEffect } from '../../react/features/virtual-background/actions';
     * Notify external application (if API is enabled) that an error occurred.
            break;
         * @param {number} options.width - width value for film strip.
        },
                    conference.lock,

        const displayName = getDisplayName(state);
                return;
    }
            APP.conference.sendEndpointMessage(to, {
import { SETTINGS_TABS } from '../../react/features/settings/constants';
         * @param { string } arg.description - Notification description.
            const tracks = APP.store.getState()['features/base/tracks'];
        },
            preventExecution
     * @returns {void}
    /**
    /**

     * @param {string} mediaType - Media type for which the participant was rejected.
        'remove-breakout-room': breakoutRoomJid => {
     * @returns {void}
    notifyToolbarButtonClicked(key, preventExecution) {
                }
                    streamId: youtubeStreamKey || rtmpStreamKey
        case 'get-content-sharing-participants': {
        });

                facingMode
    requestDisableAudioModeration,
     */
     * @returns {void}
                    formattedArgument += JSON.stringify(arg);
     * Notify external application (if API is enabled) that the large video

        case '_new_electron_screensharing_supported': {
     */
}
        },
     * a transcription chunk.
            sendAnalytics(createApiEvent('share.video.start'));
        this._sendEvent({
            name: 'whiteboard-status-changed',
            displayname: displayName,
        },
                logger.error('Invalid recording mode provided!');
            APP.conference.submitFeedback(feedback.score, feedback.message);
                    recordingConfig = {
        });
        this._sendEvent({
        this._sendEvent({
            }
            if (isStageFilmstripAvailable(state)) {

                    password
     */
     */
    notifyPrejoinLoaded() {
     * @returns {void}
     */
                    });
     * Notify external application (if API is enabled) that the mouse has moved inside the iframe.
    return (
     * @param {boolean} on - True if screen sharing is enabled.
                logger.warn('Participant id not set');
            } else {
 *
     * @param {boolean} available - True if available and false otherwise.
        'cancel-private-chat': () => {
            event: sanitizeMouseEvent(event)
        });
        },
    });
            if (!conference) {
     * @param {boolean} handRaised - Whether user has raised hand.
        },
            APP.store.dispatch(resizeLargeVideo(width, height));
         * Stops a recording or streaming in progress.
import { hideNotification, showNotification } from '../../react/features/notifications/actions';
     *
                    });
            name: 'custom-notification-action-triggered',
        this._sendEvent({
                const participant = getParticipantById(APP.store.getState(), to);
    captureLargeVideoScreenshot,
     * Notify external application (if API is enabled) that a participant is knocking in the lobby.
        case 'is-moderation-on': {
            APP.store.dispatch(createBreakoutRoom(name));


            youtubeStreamKey,
            if (passwordRequired) {
     *
            message: body,
        case 'list-breakout-rooms': {

     * @param {Array} records - The new pressure records.
        },
     *
        case 'get-p2p-status': {
    /**
 * disable screensharing. If not defined, the application will automatically
            }
            if (typeof value !== 'number' || isNaN(value)) {
    /**
        });
            kicked,
            // XXX Enable the API when a JSON Web Token (JWT) is specified in

    openCameraCaptureDialog,
} from '../../react/features/screenshot-capture/actions';
                    password
                            }
                try {
            const state = APP.store.getState();
            }
     * Notify external application that the data channel has been closed.
            details
import { playSharedVideo, stopSharedVideo } from '../../react/features/shared-video/actions';
        });

     */
    }
        if (!shouldBeEnabled()) {
import JitsiMeetJS, { JitsiRecordingConstants } from '../../react/features/base/lib-jitsi-meet';
                        error,
                }
            name: 'feedback-submitted',
        case 'is-participant-force-muted': {
            }
                return;
            const disable = mediaType === MEDIA_TYPE.VIDEO

                }
            return true;
     */
     */
        },
            }
            id
        'mute-everyone': mediaType => {
         * @param { Array<Object> } arg.customActions - An array of custom actions to be displayed in the notification.
            callback(isForceMuted(participant, type, state));
     * @param {string} localStorageContent - The new localStorageContent.
     */
            }
            APP.store.dispatch(setCameraFacingMode(facingMode));

     *
     * @returns {void}
            if (participantId === localParticipant?.id) {
     * @param {Object} event - The event to be sent.
        });
        },
        'set-follow-me': (value, recorderOnly) => {
            name: 'dominant-speaker-changed',
/**
     * @param {string} type - The type of the camera error.
                    text
            name: 'mouse-enter',
        },
        'send-endpoint-text-message': (to, text) => {

        screenY
     * Notify external application (if API is enabled) that the in-page toolbox
     * changed.
     * Notify external application (if API is enabled) that user changed their
                } else {
            } else if (mode === JitsiRecordingConstants.mode.STREAM) {
    approveParticipantAudio,
                sendAnalytics(createApiEvent('follow.me.set', {
     * @param {Object | undefined} faceBox - Detected face(s) bounding box (left, right, width).
            const handlers = customActions.map(({ uuid }) => () => {
            }
} from '../../react/features/chat/actions';
    };

            APP.store.dispatch(autoAssignToBreakoutRooms());
         * @param { boolean } arg.transcription - Whether a transcription should be started or not.
     */
     * @returns {void}
        this._sendEvent({
     * @param {string} avatarURL - The new avatar URL of the participant.
                APP.store.dispatch(toggleScreenshotCaptureSummary(false));
        default:
            name: 'notification-triggered',
    /**
     * @param {string} title - The notification title.
            displayName,
        offsetY,

    transport.on('event', ({ data, name }) => {
            callback(conference?.getMeetingUniqueId() || '');
     * @returns {void}
        });
            APP.store.dispatch(setSubject(subject));
     */
     * @param {string} formattedDisplayName - The display name shown in Jitsi
    notifyAudioMutedStatusChanged(muted) {
    /**
                    broadcastId: youtubeBroadcastID || rtmpBroadcastID,
    }
            name: 'avatar-changed',
            } else {
                APP.store.dispatch(endConference());
                return;
     * conference.
            type,
        }
        this._sendEvent({
        });
     *

     */
                    passwordRequired,
    /**
    }
                return;
            const state = APP.store.getState();
            const state = APP.store.getState();


    notifyToolbarVisibilityChanged(visible) {
    notifyComputePressureChanged(records) {
     */
            sendAnalytics(createApiEvent('film.strip.resize'));
        videoAvailable = available;
     *
         * Starts a file recording or streaming session depending on the passed on params.
            sendAnalytics(createApiEvent('email.changed'));
            if (mode === 'local') {
     */
                return;
            if (!validTypes.includes(type)) {
     */
            } catch (error) {
                logger.error(`Invalid notification type "${type}". Expecting one of ${validTypes}`);

        'toggle-moderation': (enabled, mediaType) => {
     * @param {boolean} on - True if transcribing is on, false otherwise.
     * @returns {void}
                if (isStageFilmstripAvailable(state)) {
                if (!localRecording?.disable && supportsLocalRecording()) {

        this._sendEvent({
let audioAvailable = true;
        }
        });
    notifyPrejoinVideoVisibilityChanged(isVisible) {
         */
            isP2P,
                const { recordingService } = state['features/base/config'];
            APP.store.dispatch(grantModerator(participantId));
    }

        /*
     *
        },
    }
        'toggle-share-audio': () => {
            if (!isLocalParticipantModerator(APP.store.getState())) {

     * Notify request desktop sources.
     * @param {boolean} isMuted - True if muted, false if unmuted.
        /**
            const { mediaType } = request;
        });

         * @param {Object} options - Additional details of how to perform
    }
        /**
            name: 'knocking-participant',
     *




        'send-chat-message': (message, to, ignorePrivacy = false) => {
 * @param {boolean} [enable] - Whether this toggle is to explicitly enable or
 *

        this._sendEvent({
            APP.store.dispatch(setMediaEncryptionKey(JSON.parse(keyInfo)));
     *
            args: formattedArguments
     * @param {string} mediaType - Media type that was muted ('audio' or 'video').
     * Notify external application (if API is enabled) that the list of sharing participants changed.

            name: 'file-uploaded',
            return true;
    });
        });
                    passwordRequired.join,
            }
     * @param {boolean} isHidden - True if the large video is hidden and false
     * @returns {void}
            const participant = videoType === VIDEO_TYPE.DESKTOP
     *
    _sendEvent(event = {}) {

            callback(audioAvailable);
                conference.stopRecording(activeSession.id);
                        error = new Error('No large video found!');
            dispatch(setTileView(false));
         * the action. Note this parameter is undocumented and experimental.
    }
            }
    }
    }

        this._sendEvent({
            on,
     *
                if (participant) {
     */
     * Notify external application (if API is enabled) for audio muted status

        return false;
        this._sendEvent({
            name: '_pip-requested'
        });
    /**
     * changed.

         * @param { string } arg.youtubeStreamKey - The youtube stream key.
     * @param {string} faceExpression - Detected face expression.
     * @param {string} id - User id.
            }
     *
                                    'service_name': RECORDING_TYPES.DROPBOX,
    notifyOnCameraError(type, message) {

            ...event
            APP.store.dispatch(approveParticipantVideo(participantId));
            name: 'participant-menu-button-clicked',
         * No other params should be passed.
     * @param {boolean} enabled - Whether the audio only is enabled or not.
        'mute-remote-participant': (participantId, mediaType) => {
    removeBreakoutRoom,
     */
     * @returns {void}
let commands = {};
                }));


     *
            sendAnalytics(createApiEvent('screen.sharing.toggled'));
     * @param {Object} options - Object with the message properties.
        }

            mode,
     * submit-feedback command to get notified if feedback was submitted.
        'join-breakout-room': roomId => {
            name: 'audio-mute-status-changed',

            if (!id) {
                logger.error('No recording or streaming session found');
    }
     * @returns {void}
     *
        this._sendEvent({
            const validTimeouts = Object.values(NOTIFICATION_TIMEOUT_TYPE);
        });
        },
                APP.store.dispatch(setPassword(

        this._sendEvent({
    }
    }
    }
        movementX,
            name: 'video-availability-changed',
} from '../../react/features/device-selection/functions';
            on,
    /**
            youtubeBroadcastID,
    addStageParticipant,
        this._sendEvent({
                logger.warn('Trying to pin a non-existing participant with pin-participant command.');
    toggleScreenshotCaptureSummary
                return;
        this._sendEvent({
        this._sendEvent({
            APP.store.dispatch(setAudioOnly(enable));

        });
                logger.error('Missing moderator rights to add breakout rooms');
         * Current status (enabled/disabled) of API.
     * @returns {void}
    /**
            callback(Boolean(APP.store.getState()['features/base/config'].startSilent));
     * Notify external application (if API is enabled) that a suspend event in host computer.

     */
            break;
        this._sendEvent({
        },
            const localParticipant = getLocalParticipant(APP.store.getState());
        case 'get-shared-document-url': {
            }
     *
            break;
    sendTones,
            data
            callback({
     * @param {string} details.sourceType - Type of device or window the screen
     * is received.
            const { participantId, mediaType } = request;
        APP.store.dispatch(startScreenShareFlow(enable));
    autoAssignToBreakoutRooms,
            if (!participantId) {
     */
    notifyDisplayNameChanged(
        'end-conference': () => {
        audioAvailable = available;
        }) => {
export default new API();
     * has been turned on/off.
import {
                                }
     *
     * email.

function initCommands() {
        'approve-video': participantId => {
    }
     * @returns {void}
            enabled
            sendAnalytics(createApiEvent('display.name.changed'));
    notifyKnockingParticipant(participant) {
                        appData: JSON.stringify({
    /**
    /**
    /**

            name: 'device-list-changed',
            if (!participant) {
        }
            break;

        case 'is-video-muted':
     */
            localStorageContent
                if (!isChatOpen) {
        },
            if (!isLocalParticipantModerator(state)) {
            APP.store.dispatch(setRequestingSubtitles(
            enabled
                    source
        this._sendEvent({
import {
     */
    notifyTranscriptionChunkReceived(data) {
         * @returns {void}
        this._sendEvent({
                    formattedArgument += arg;
     *

            APP.store.dispatch(toggleE2EE(enabled));
        'auto-assign-to-breakout-rooms': () => {
    notifyRaiseHandUpdated(id, handRaised) {
            const state = APP.store.getState();
            toggleScreenSharing(options.enable);
     * @param {boolean} muted - The new muted status.
    }
    /**
import { sendAnalytics } from '../../react/features/analytics/functions';
        this._sendEvent({ name: 'feedback-prompt-displayed' });
    }
            } else {
            }

    /**
        'toggle-subtitles': () => {
                });

     * @param {string} description - The notification description.
                const activeSession = getActiveSession(state, JitsiRecordingConstants.mode.STREAM);
     * @returns {void}
            }
     * has been turned on/off.
            name: 'non-participant-message-received',
     *
     * @returns {void}
    notifyDataChannelOpened() {
    getNormalizedDisplayName,
        'submit-feedback': feedback => {
            const conference = getCurrentConference(state);


    }

     * @param {boolean} supported - If browser is supported or not.
     * @returns {void}
        'toggle-film-strip': () => {
                return;
            }
     * @param {boolean} muted - The new muted status.
                });
     * available.
            const participant = getParticipantById(state, participantId);
            APP.store.dispatch(endConference());
        },
        'answer-knocking-participant': (id, approved) => {
            }
     * @param {Object} fileMetadata - The file metadata.
        this._sendEvent({
        case 'session-id': {
            title,
    notifyMouseMove(event) {
     * Notify external application (if API is enabled) if non participant message
            if (mode === 'local') {
            APP.store.dispatch(setNoiseSuppressionEnabled(options.enabled));
    }
     *
            id: participantId,
    }
            name: 'participant-muted',
            } catch (err) {
    }
                sendAnalytics(createApiEvent('largevideo.participant.set'));
     * @returns {void}
        },
     * Notify external application (if API is enabled) the conference
                                'share': shouldShare
        'send-participant-to-room': (participantId, roomId) => {
            name: 'participant-left',
        this._sendEvent({
    notifyOnPasswordRequired() {

         *
            id: participantId,

    notifyUserJoined(id, props) {
import { NOTIFICATION_TIMEOUT_TYPE, NOTIFICATION_TYPE } from '../../react/features/notifications/constants';
        if (processExternalDeviceRequest(dispatch, getState, request, callback)) {
    grantModerator,
     * @returns {void}

        },
} from '../../react/features/base/participants/actions';
     * @returns {void}
let videoAvailable = true;
     * Notify external application that the video quality setting has changed.
     * @returns {void}
     * other participant.
        'set-tile-view': enabled => {
import { extractYoutubeIdOrURL } from '../../react/features/shared-video/functions';
            const tracks = APP.store.getState()['features/base/tracks'];
    }
     * visibility had changed.
 * @type {Transport}
    }
    notifyDeviceListChanged(devices) {
         * @param { string } arg.rtmpStreamKey - The RTMP stream key.
     */
        this._sendEvent({
            } else if (typeof arg === 'object') {
     * sends a message to the external application that API is initialized.
 * List of the available commands.
        },
 *
            if (!isLocalParticipantModerator(APP.store.getState())) {
        }
    }
            name: 'pip-entered'
    notifyReadyToClose() {
        initCommands();
                    recorderOnly
/* global APP */
     * conference.
}

     */
            }
            fileId
            if (!isLocalParticipantModerator(APP.store.getState())) {

    */
import { isScreenshotCaptureEnabled } from '../../react/features/screenshot-capture/functions';
            avatarURL,


        });
            if (!isLocalParticipantModerator(APP.store.getState())) {
        'video-hangup': (showFeedbackDialog = true) => {
            };

     * @returns {void}

     * Notify external application (if API is enabled) that Picture-in-Picture mode was exited.
     *
    }
                logger.error('Missing moderator rights to mute remote participant');
     * @param {string} id - User id.
        },
     * @param {string} roomName - User id.
                logger.error('Missing moderator rights to grant moderator right to another participant');

     * @returns {void}


function shouldBeEnabled() {
            name: 'breakout-rooms-updated',
    ENDPOINT_TEXT_MESSAGE_NAME
     *
            }
        // Trying to convert arguments to strings. Otherwise in order to send the event the arguments will be formatted
         * @param { boolean } arg.onlySelf - Whether to only record the local streams.
     * information from external applications that embed Jitsi Meet. It also
            title
        'set-assumed-bandwidth-bps': value => {
    }
     * changed.
        this._sendEvent({ name: 'password-required' });
         * the action.
    }
     *
        'stop-share-video': () => {
            ...props
         * @param { string } arg.type - Notification type, either `error`, `normal`, `success` or `warning`.
import { LOCAL_PARTICIPANT_DEFAULT_ID } from '../../react/features/base/participants/constants';
    }
     * @returns {void}
        },
 * @returns {Object}
    }
        case 'get-custom-avatar-backgrounds' : {
     * @returns {void}
     * share is capturing.
import {
                logger.error('Failed to send and IFrame API event', error);
            break;
            name: 'video-conference-left',
            // Start audio / video recording, if requested.

        }


     * @param {string} id - User id.
            id: LOCAL_PARTICIPANT_DEFAULT_ID,
            id
    }
         */
     * @returns {void}
     * visibility changed.
     * @param {string} message - Message body.
        });
        this._sendEvent({
import {

            unmute ? APP.store.dispatch(grantRecordingConsentAndUnmute())

            } else {
    /**
    setAssumedBandwidthBps,
     *


            sendAnalytics(createApiEvent('subject.changed'));
import {
     * @returns {void}
                description,
            key,
            }
            isMuted,
        }
        case 'open-desktop-picker': {
            APP.store.dispatch(sendTones(tones, duration, pause));
        this._sendEvent({
        },
            visible

        },
            rooms
}
    }


            sendAnalytics(createApiEvent('film.strip.toggled'));
            APP.store.dispatch(stopSharedVideo());
    /**

     */
        if (this._enabled) {
import { getCurrentConference, isP2pActive } from '../../react/features/base/conference/functions';
            name: 'participant-kicked-out',
        },
     * @returns {void}
                return;
        }
    }
         * @returns {void}
    }
    notifyAudioOnlyChanged(enabled) {
            nick,
            break;
            name: 'participants-pane-toggled',
        }
        this._sendEvent({
            event: sanitizeMouseEvent(event)

import { overwriteConfig } from '../../react/features/base/config/actions';
                logger.error('Failed starting recording: dropbox is not enabled on this deployment');
import { startLocalVideoRecording, stopLocalVideoRecording } from '../../react/features/recording/actions.any';
     * visibility changed.
 * @returns {void}
        },
     * Notify external application (if API is enabled) that the on stage
            APP.store.dispatch(muteRemote(participantId, muteMediaType));
    /**
    /**
                            'file_recording_metadata': {

            muted
            callback(true);
     * @param {string} id - User id.
     * Notify external application (if API is enabled) that the screen sharing
    /**
                } else {
     * @returns {void}
     * @returns {void}
/**
         * Callback to invoke when the "toggle-share-screen" command is received.
                APP.store.dispatch(startAudioScreenShareFlow());
        /**
     */
    hasRaisedHand,
        this._sendEvent({
            name: 'participant-role-changed',
         * For file recording, recording `mode` should be `file` and optionally `shouldShare` could be passed on.
            handRaised,
     * Notify external application (if API is enabled) that we are ready to be
            privateMessage,
        'avatar-url': avatarUrl => { // @deprecated
        }) => {
     * Notify external application (if API is enabled) that the conference has
        this._sendEvent({
                APP.store.dispatch(openChat(participant));

    /**

                const { localRecording } = state['features/base/config'];
    init() {
 * Executes on toggle-share-screen command.
     * @param {string} fileId - The ID of the deleted file.
     * @param {WhiteboardStatus} status - The new whiteboard status.
        if (this._enabled) {
    }
            let livestreamUrl;
    /**
            callback(isP2pActive(APP.store.getState()));
     *
     * @returns {void}
        args.forEach(arg => {
     * @returns {void}

     * start time.

         * for the `customNotificationActionTriggered` event to handle the custom action.
     *
                logger.error('Failed starting recording: missing youtube or RTMP stream key');
        clientX,
            transcription
        });
                return;
        if (APP.conference.isLocalId(from)) {
                APP.store.dispatch(stopLocalVideoRecording());
     * @param {string} subject - Conference subject.
     * @returns {void}
            if (dropboxToken && !isDropboxEnabled(state)) {
            file: fileMetadata
            break;
    getLocalVideoTrack,
        this._sendEvent({
            }
            id,
    }
        });
import { isAudioMuteButtonDisabled } from '../../react/features/toolbox/functions';
            const muted = tracks ? isLocalTrackMuted(tracks, MEDIA_TYPE.VIDEO) : isVideoMutedByUser(APP.store);
import { setMediaEncryptionKey, toggleE2EE } from '../../react/features/e2ee/actions';
    }
         *
    notifyVideoAvailabilityChanged(available) {
     *
     * @param {number} unreadCount - The unread messages counter.
     * @returns {void}
            unreadCount,
import { setNoiseSuppressionEnabled } from '../../react/features/noise-suppression/actions';
     */
        },

    notifyOnMicError(type, message) {
    /**
        this._sendEvent({
    /**
        this._sendEvent({
 * attempt to toggle between enabled and disabled. This boolean is useful for
    notifyConferenceLeft(roomName) {
        screenY
     * @param {string} id - Id of the dominant participant.
        });
     */
        'start-share-video': url => {
            if (mode === JitsiRecordingConstants.mode.FILE) {
     * @returns {void}
        /**
    }
            break;
    }
import { setAudioOnly } from '../../react/features/base/audio-only/actions';
                    APP.conference.toggleVideoMuted(false, true);

            name: 'endpoint-text-message-received',
         * @param { string } arg.rtmpBroadcastID - The RTMP broadcast ID.
     *

    resizeLargeVideo

     * Notify external application (if API is enabled) that a custom notification action has been triggered.
            name: 'subject-change',
            ...props
     * Notify external application (if API is enabled) that some face landmark data is available.
        },

    const {

            APP.conference.toggleAudioMuted(false /* no UI */);
     */
     */
    requestEnableAudioModeration,
        },
                uid,
                // NOTE: The non-enumerable properties of the objects wouldn't be included in the string after
    notifyAudioOrVideoSharingToggled(mediaType, value, participantId) {
                formattedArgument += `${arg.toString()}: ${arg.stack}`;
     * Notify external application (if API is enabled) that the current recording link is
            }
            });
            name: 'local-storage-changed',

    }
     *
            APP.store.dispatch(kickParticipant(participantId));

        case 'is-start-silent':
            callback(etherpad?.documentUrl || '');
        this._sendEvent({
    }

     *
