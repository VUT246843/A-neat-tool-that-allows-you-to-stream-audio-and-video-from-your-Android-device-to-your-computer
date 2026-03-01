 * You may obtain a copy of the License at

 * Unless required by applicable law or agreed to in writing, software
- (void)invalidate;
 *     http://www.apache.org/licenses/LICENSE-2.0
@interface RCTBridgeWrapper : NSObject<RCTBridgeDelegate>
 * limitations under the License.
 * In addition, we will create a single bridge and then create all root views

 * singleton, however, so it's possible for us to create multiple instances of
 * See the License for the specific language governing permissions and
 * A wrapper around the `RCTBridge` which implements the delegate methods
#import <Foundation/Foundation.h>
/**
 * that allow us to serve the JS bundle from within the framework's resources
/*
@property (nonatomic, readonly, strong)  RCTBridge *bridge;
 *
 *

 * directory. This is the recommended way for those cases where the builtin API
 */
 * you may not use this file except in compliance with the License.

 */
 * Copyright @ 2017-present Atlassian Pty Ltd
#import <React/RCTBridgeDelegate.h>
 * it, though that's not currently used.
 * distributed under the License is distributed on an "AS IS" BASIS,

 * Licensed under the Apache License, Version 2.0 (the "License");
 * doesn't cut it, as is the case.

 *
#import <React/RCTBridge.h>
 * off it, thus only loading the JS bundle a single time. This class is not a
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
@end
 *
