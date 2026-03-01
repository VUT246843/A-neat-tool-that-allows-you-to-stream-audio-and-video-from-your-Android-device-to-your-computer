#import "JMCallKitListener.h"
 * See the License for the specific language governing permissions and
 */
- (void)addListener:(id<JMCallKitListener>)listener;

NS_ASSUME_NONNULL_END
 * Unless required by applicable law or agreed to in writing, software
/*
 *

- (void)removeListener:(id<JMCallKitListener>)listener;

 * you may not use this file except in compliance with the License.
@interface JMCallKitEmitter : NSObject <CXProviderDelegate>

- (void)addMuteAction:(NSUUID *)actionUUID;
 * Copyright @ 2018-present Atlassian Pty Ltd
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * You may obtain a copy of the License at


 * limitations under the License.
 * Copyright @ 2022-present 8x8, Inc.
#import <Foundation/Foundation.h>
#pragma mark Add/Remove listeners
NS_ASSUME_NONNULL_BEGIN
#pragma mark Add mute action
 * Licensed under the Apache License, Version 2.0 (the "License");
#import <CallKit/CallKit.h>

@end
 *
 * distributed under the License is distributed on an "AS IS" BASIS,
 *     http://www.apache.org/licenses/LICENSE-2.0
