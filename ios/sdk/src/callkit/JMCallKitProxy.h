 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                             ringtoneSound:(nullable NSString *)ringtoneSound
 */
+ (BOOL)isProviderConfigured;
#import <Foundation/Foundation.h>

 * you may not use this file except in compliance with the License.
NS_SWIFT_NAME(reportNewIncomingCall(UUID:handle:displayName:hasVideo:completion:));

- (void)reportCallWithUUID:(NSUUID *)uuid updated:(CXCallUpdate *)update;
@protocol CXCallControllerProtocol <NSObject>
+ (void)configureProviderWithLocalizedName:(nonnull NSString *)localizedName
+ (void)request:(nonnull CXTransaction *)transaction completion:(nonnull void (^)(NSError *_Nullable))completion;

// NOTE: The methods this class exposes are meant to be called in the UI thread.

               endedAt:(nullable NSDate *)dateEnded
- (void)invalidate;
+ (BOOL)hasActiveCallForUUID:(nonnull NSString *)callUUID NS_SWIFT_NAME(hasActiveCallForUUID(_:));
@property (class) BOOL enabled;
                    iconTemplateImageData:(nullable NSData*)imageData
NS_SWIFT_NAME(configureProvider(localizedName:ringtoneSound:iconTemplateImageData:));

 * limitations under the License.

- (void)requestTransaction:(CXTransaction *)transaction completion:(void (^)(NSError *_Nullable))completion;
+ (void)reportOutgoingCallWith:(nonnull NSUUID *)uuid startedConnectingAt:(nullable NSDate *)dateStartedConnecting;
+ (void)reportOutgoingCallWith:(nonnull NSUUID *)uuid connectedAt:(nullable NSDate *)dateConnected;
 * Copyright @ 2018-present Atlassian Pty Ltd
@end
/// Enables the proxy in between CallKit and the consumers of the SDK.
NS_ASSUME_NONNULL_BEGIN
NS_ASSUME_NONNULL_END
- (void)reportOutgoingCallWithUUID:(NSUUID *)uuid connectedAtDate:(NSDate *)dateConnected;
                 displayName:(nullable NSString *)displayName
 *     http://www.apache.org/licenses/LICENSE-2.0
@property (nonatomic, readwrite, copy) CXProviderConfiguration* configuration;
 *
+ (void)removeListener:(nonnull id<JMCallKitListener>)listener NS_SWIFT_NAME(removeListener(_:));
@interface JMCallKitProxy : NSObject
#import "JMCallKitListener.h"

@end
- (void)reportNewIncomingCallWithUUID:(NSUUID *)uuid update:(CXCallUpdate *)update completion:(void (^)(NSError *))completion;


// All delegate methods called by JMCallKitEmitter will be called in the UI thread.
@property (nonatomic, readonly) NSArray<CXCall*> *calls;
                             hasVideo:(BOOL)hasVideo
                      handle:(nullable NSString *)handle
/*
@property (class) id<CXProviderProtocol> callKitProvider;
@end
#import <CallKit/CallKit.h>
 * distributed under the License is distributed on an "AS IS" BASIS,
+ (void)addListener:(nonnull id<JMCallKitListener>)listener NS_SWIFT_NAME(addListener(_:));
+ (void)reportCallUpdateWith:(nonnull NSUUID *)uuid
#pragma mark -
 * See the License for the specific language governing permissions and
                    hasVideo:(BOOL)hasVideo;
/// Defaults to disabled. Set to true when you want to use CallKit.
- (void)reportOutgoingCallWithUUID:(NSUUID *)uuid startedConnectingAtDate:(NSDate *)dateStartedConnecting;
#pragma mark -
                          displayName:(nullable NSString*)displayName
+ (void)reportNewIncomingCallWithUUID:(nonnull NSUUID *)uuid
 * Licensed under the Apache License, Version 2.0 (the "License");
 *
                reason:(CXCallEndedReason)endedReason;




 *
- (void)reportCallWithUUID:(NSUUID *)uuid endedAtDate:(NSDate *)dateEnded reason:(CXCallEndedReason)endedReason;

                               handle:(nullable NSString*)handle
@protocol CXProviderProtocol <NSObject>
@property (class) id<CXCallControllerProtocol> callKitCallController;
 * Copyright @ 2022-present 8x8, Inc.
/// JitsiMeet CallKit proxy
+ (void)reportCallWith:(nonnull NSUUID *)uuid


                           completion:(nonnull void (^)(NSError *_Nullable))completion
 * Unless required by applicable law or agreed to in writing, software
- (void)setDelegate:(nullable id<CXProviderDelegate>)delegate queue:(nullable dispatch_queue_t)queue;
 * You may obtain a copy of the License at
