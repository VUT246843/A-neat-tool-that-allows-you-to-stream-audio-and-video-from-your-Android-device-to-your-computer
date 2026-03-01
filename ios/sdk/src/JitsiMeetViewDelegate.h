/**
 * The `data` dictionary contains an `error` key with the error and a `url` key

/**
 */
 * with the conference URL. If the conference finished gracefully no `error`
 */
 * The `data` dictionary contains a `senderId` key with the participantId of the sender and a 'message' key with the content.
 *

 */
/**
/**
 * Called when the SDK is ready to be closed. No meeting is happening at this point.
 * The `data` dictionary contains a `messageID`, `language`, `participant` key.
- (void)enterPictureInPicture:(NSDictionary *)data;
 * key will be present. The possible values for "error" are described here:


 * you may not use this file except in compliance with the License.
- (void)conferenceWillJoin:(NSDictionary *)data;
 * Called when a conference was joined.

 * distributed under the License is distributed on an "AS IS" BASIS,
 *

 * Called when entering Picture-in-Picture is requested by the user. The app
 * limitations under the License.
 */
 */
/**
 * The `data` dictionary contains a `url` key with the conference URL.
 * should now activate its Picture-in-Picture implementation (and resize the
 *
 * The `data` dictionary contains a `isOpen` key.
 *

 *
/**
- (void)chatMessageReceived:(NSDictionary *)data;
 * The `data` dictionary contains a `sessionId` key.

- (void)conferenceUniqueIdSet:(NSDictionary *)data;
 */
 * See the License for the specific language governing permissions and
 * The `data` dictionary contains a `participantId` key with the id of the participant  and a 'sharing' key with boolean value.
@optional
 * Called when a chat message is received.

 * Called when the chat dialog is displayed/hidden.
 */
 */


 *

/**
 */
 * Licensed under the Apache License, Version 2.0 (the "License");
/**
 */
 *
/**
 */
 */
 * https://github.com/jitsi/lib-jitsi-meet/blob/master/JitsiConnectionErrors.js
 *

- (void)conferenceTerminated:(NSDictionary *)data;

 * https://github.com/jitsi/lib-jitsi-meet/blob/master/JitsiConferenceErrors.js
 *
 * Called when a participant toggled shared screen.
 *
 *
- (void)audioMutedChanged:(NSDictionary *)data;
 * Called when videoMuted state changed.
- (void)videoMutedChanged:(NSDictionary *)data;
 * The `data` dictionary contains a `participantId` key with the id of the participant that has left.
@protocol JitsiMeetViewDelegate <NSObject>
- (void)screenShareToggled:(NSDictionary *)data;
/**
/**
 * The `data` dictionary contains a `muted` key with state of the videoMuted for the localParticipant.
 * Called when the transcription chunk was received.
/**
 *     http://www.apache.org/licenses/LICENSE-2.0
 * The `data` dictionary contains `message`, `senderId` and  `isPrivate` keys.
 * Called when the active conference ends, be it because of user choice or
 *

 * You may obtain a copy of the License at
 * The `data` dictionary contains a `participantId` key with the id of the participant that has joined.
 * Called before a conference is joined.
 */
 *
 * Called when audioMuted state changed.
/*
 * Called when the custom overflow menu button is pressed.
 * The `data` dictionary contains a `sessionData` key.
 * Called when a participant has left the conference.
 * associated `JitsiMeetView`. The latter will automatically detect its new size
 */
 *
- (void)customButtonPressed:(NSDictionary *)data;
 */
- (void)participantLeft:(NSDictionary *)data;
/**
/**
 * ordinarily associated with Picture-in-Picture.)
 *
- (void)transcriptionChunkReceived:(NSDictionary *)data;
 */
/**
 *
/**
 * Called when the unique identifier for conference has been set.
 * The `data` dictionary contains a `muted` key with state of the audioMuted for the localParticipant.
 * The `data` dictionary contains a `id`, `text` key.
 * Called when a participant has joined the conference.
 *

 */
 * because of a failure.

 * Copyright @ 2017-present 8x8, Inc.
 * The `data` dictionary is empty.

 * The `data` dictionary contains a `url` key with the conference URL.
 * and adjust its user interface to a variant appropriate for the small size
- (void)conferenceJoined:(NSDictionary *)data;
 */
 *
 * Unless required by applicable law or agreed to in writing, software
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * Called when an endpoint text message is received.
@end
- (void)participantJoined:(NSDictionary *)data;
/**
- (void)chatToggled:(NSDictionary *)data;
 * Called when the recording status has changed.
- (void)endpointTextMessageReceived:(NSDictionary *)data;


- (void)recordingStatusChanged:(NSDictionary *)data;
- (void)readyToClose:(NSDictionary *)data;
