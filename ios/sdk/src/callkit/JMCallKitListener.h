@optional
@protocol JMCallKitListener <NSObject>


 * Copyright @ 2018-present Atlassian Pty Ltd
@end
 * Licensed under the Apache License, Version 2.0 (the "License");
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

- (void)performStartCallWithUUID:(nonnull NSUUID *)UUID isVideo:(BOOL)isVideo;
- (void)providerDidActivateAudioSessionWithSession:(nonnull AVAudioSession *)session;
 * Unless required by applicable law or agreed to in writing, software
- (void)performAnswerCallWithUUID:(nonnull NSUUID *)UUID;
 *
 *
- (void)providerTimedOutPerformingActionWithAction:(nonnull CXAction *)action;

 * distributed under the License is distributed on an "AS IS" BASIS,
#import <AVKit/AVKit.h>
 * See the License for the specific language governing permissions and
 */
 *     http://www.apache.org/licenses/LICENSE-2.0
- (void)providerDidDeactivateAudioSessionWithSession:(nonnull AVAudioSession *)session;
#import <Foundation/Foundation.h>
- (void)providerDidReset;
#import <CallKit/CallKit.h>
 * you may not use this file except in compliance with the License.
 * limitations under the License.
- (void)performSetMutedCallWithUUID:(nonnull NSUUID *)UUID isMuted:(BOOL)isMuted;
 * You may obtain a copy of the License at
/*
 *
 * Copyright @ 2022-present 8x8, Inc.
- (void)performEndCallWithUUID:(nonnull NSUUID *)UUID;
