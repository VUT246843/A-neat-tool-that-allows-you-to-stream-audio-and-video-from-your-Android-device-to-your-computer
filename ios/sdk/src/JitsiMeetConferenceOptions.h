

 */
@end
/**
@property (nonatomic, readonly, nonnull) NSDictionary *featureFlags;
- (void)setConfigOverride:(NSString *_Nonnull)config withValue:(id _Nonnull)value;
- (void)setCallUUID:(NSUUID *_Nonnull)callUUID;
@property (nonatomic, copy, nullable, readonly) NSString *room;

@interface JitsiMeetConferenceOptionsBuilder : NSObject
@property (nonatomic, copy, nullable) NSString *room;

/**
- (instancetype _Nonnull)init NS_UNAVAILABLE;

- (void)setSubject:(NSString *_Nonnull)subject;


/**
 * distributed under the License is distributed on an "AS IS" BASIS,

 * Unless required by applicable law or agreed to in writing, software
 * Feature flags. See: https://github.com/jitsi/jitsi-meet/blob/master/react/features/base/flags/constants.js
- (void)setFeatureFlag:(NSString *_Nonnull)flag withValue:(id _Nonnull)value;

 *
- (void)setConfigOverride:(NSString *_Nonnull)config withDictionary:(NSDictionary * _Nonnull)dictionary;
- (void)setVideoMuted:(BOOL)videoMuted;
- (void)setConfigOverride:(NSString *_Nonnull)config withArray:( NSArray * _Nonnull)array;
/*
 * limitations under the License.
/**
@property (nonatomic, nullable) JitsiMeetUserInfo *userInfo;
 */
- (void)setFeatureFlag:(NSString *_Nonnull)flag withBoolean:(BOOL)value;
@property (nonatomic, nullable) JitsiMeetUserInfo *userInfo;
 *

/**
- (void)setConfigOverride:(NSString *_Nonnull)config withBoolean:(BOOL)value;
@property (nonatomic, readonly, nonnull) NSDictionary *config;
@property (nonatomic, copy, nullable, readonly) NSURL *serverURL;
@property (nonatomic, readonly, nonnull) NSDictionary *featureFlags;
 * JWT token used for authentication.

 * you may not use this file except in compliance with the License.
 * Information about the local user. It will be used in absence of a token.

 */
 */

@property (nonatomic, copy, nullable) NSString *token;
- (void)setCallHandle:(NSString *_Nonnull)callHandle;
@end
 * Licensed under the Apache License, Version 2.0 (the "License");
- (void)setAudioMuted:(BOOL)audioMuted;

 * See the License for the specific language governing permissions and
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
@property (nonatomic, copy, nullable, readonly) NSString *token;
@interface JitsiMeetConferenceOptions : NSObject

 *     http://www.apache.org/licenses/LICENSE-2.0

#import <Foundation/Foundation.h>
 * Server where the conference should take place.
- (void)setAudioOnly:(BOOL)audioOnly;
 */
 * Room name.
 *
 */

#import "JitsiMeetUserInfo.h"

@property (nonatomic, copy, nullable) NSURL *serverURL;
+ (instancetype _Nonnull)fromBuilder:(void (^_Nonnull)(JitsiMeetConferenceOptionsBuilder *_Nonnull))initBlock;
 * You may obtain a copy of the License at
 * Copyright @ 2019-present 8x8, Inc.

