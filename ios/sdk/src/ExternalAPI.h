- (void)toggleScreenShare:(BOOL)enabled;
- (void)hideNotification:(NSString*)uid;
/* Copyright @ 2021-present 8x8, Inc.
*     http://www.apache.org/licenses/LICENSE-2.0

* See the License for the specific language governing permissions and

#import <React/RCTEventEmitter.h>
- (void)retrieveParticipantsInfo:(void (^)(NSArray*))completion;
- (void)sendSetAudioMuted:(BOOL)muted;
- (void)sendChatMessage:(NSString*)message :(NSString*)to;
*
* You may obtain a copy of the License at

#import <React/RCTBridgeModule.h>
* Unless required by applicable law or agreed to in writing, software
- (void)stopRecording:(NSString*)mode :(BOOL)transcription;
- (void)overwriteConfig:(NSDictionary*)config;
- (void)sendHangUp;
- (void)startRecording:(NSString*)mode :(NSString*)dropboxToken :(BOOL)shouldShare :(NSString*)rtmpStreamKey :(NSString*)rtmpBroadcastID :(NSString*)youtubeStreamKey :(NSString*)youtubeBroadcastID :(NSDictionary*)extraMetadata :(BOOL)transcription;
- (void)sendCameraFacingModeMessage:(NSString*)to :(NSString*)facingMode;
@interface ExternalAPI : RCTEventEmitter<RCTBridgeModule>
- (void)sendSetClosedCaptionsEnabled:(BOOL)enabled;
- (void)openChat:(NSString*)to;
*/
static NSString * const sendEventNotificationName = @"org.jitsi.meet.SendEvent";
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
@end
* Licensed under the Apache License, Version 2.0 (the "License");
- (void)toggleCamera;
* you may not use this file except in compliance with the License.
* distributed under the License is distributed on an "AS IS" BASIS,


* limitations under the License.
*
- (void)sendSetVideoMuted:(BOOL)muted;
- (void)showNotification:(NSString*)appearance :(NSString*)description :(NSString*)timeout :(NSString*)title :(NSString*)uid;
- (void)sendEndpointTextMessage:(NSString*)message :(NSString*)to;
*
- (void)closeChat;
