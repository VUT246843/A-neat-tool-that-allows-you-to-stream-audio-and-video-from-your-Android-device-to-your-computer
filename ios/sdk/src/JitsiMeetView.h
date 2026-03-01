 * be merged with the defaultConferenceOptions (if set) in JitsiMeet. If there
- (void)stopRecording:(RecordingMode)mode :(BOOL)transcription;
- (void)openChat:(NSString * _Nullable)to;
- (void)join:(JitsiMeetConferenceOptions *_Nullable)options;
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
- (void)setAudioMuted:(BOOL)muted;
@property (nonatomic, nullable, weak) id<JitsiMeetViewDelegate> delegate;
#import "JitsiMeetConferenceOptions.h"
- (void)startRecording:(RecordingMode)mode :(NSString * _Nullable)dropboxToken :(BOOL)shouldShare :(NSString * _Nullable)rtmpStreamKey :(NSString * _Nullable)rtmpBroadcastID :(NSString * _Nullable)youtubeStreamKey :(NSString * _Nullable)youtubeBroadcastID :(NSDictionary * _Nullable)extraMetadata :(BOOL)transcription;

 */
- (void)showNotification:(NSString * _Nonnull)appearance :(NSString * _Nullable)description :(NSString * _Nullable)timeout :(NSString * _Nullable)title :(NSString * _Nullable)uid;
typedef NS_ENUM(NSInteger, RecordingMode) {
 * limitations under the License.
@end
};
 * See the License for the specific language governing permissions and
- (void)sendCameraFacingModeMessage:(NSString * _Nonnull)to :(NSString * _Nullable)facingMode;
#import <Foundation/Foundation.h>
 * Leaves the currently active conference.
    RecordingModeStream
 * Copyright @ 2017-2018 Atlassian Pty Ltd
 */
/*
 * Joins the conference specified by the given options. The given options will
 * joining the new one.
 * You may obtain a copy of the License at
 * Unless required by applicable law or agreed to in writing, software
- (void)setClosedCaptionsEnabled:(BOOL)enabled;
 *
 *

- (void)hangUp;
- (void)retrieveParticipantsInfo:(void (^ _Nonnull)(NSArray * _Nullable))completionHandler;
 * is an already active conference it will be automatically left prior to

- (void)closeChat;
@interface JitsiMeetView : UIView
- (void)overwriteConfig:(NSDictionary * _Nonnull)config;


/**
 *     http://www.apache.org/licenses/LICENSE-2.0

- (void)toggleCamera;
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
- (void)hideNotification:(NSString * _Nullable)uid;
    RecordingModeFile,
- (void)sendEndpointTextMessage:(NSString * _Nonnull)message :(NSString * _Nullable)to;
 * distributed under the License is distributed on an "AS IS" BASIS,
- (void)setVideoMuted:(BOOL)muted;
 * Copyright @ 2018-present 8x8, Inc.
- (void)leave;
- (void)sendChatMessage:(NSString * _Nonnull)message :(NSString * _Nullable)to;
#import "JitsiMeetViewDelegate.h"
#import <UIKit/UIKit.h>
/**
 * you may not use this file except in compliance with the License.
- (void)toggleScreenShare:(BOOL)enabled;
 */
