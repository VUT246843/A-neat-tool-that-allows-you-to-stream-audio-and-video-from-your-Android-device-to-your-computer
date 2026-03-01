
#import <Foundation/Foundation.h>
 *
 * See the License for the specific language governing permissions and
@interface JitsiMeetBaseLogHandler : NSObject
 * Licensed under the Apache License, Version 2.0 (the "License");

 * limitations under the License.
/*
@end
 * distributed under the License is distributed on an "AS IS" BASIS,
- (void)logDebug:(NSString *)msg;
 *
 * Unless required by applicable law or agreed to in writing, software
- (void)logVerbose:(NSString *)msg;
 *

- (void)logInfo:(NSString *)msg;
 *     http://www.apache.org/licenses/LICENSE-2.0
 * you may not use this file except in compliance with the License.
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
- (void)logError:(NSString *)msg;
 */
 * You may obtain a copy of the License at
// These are "abstract".
 * Copyright @ 2019-present 8x8, Inc.

- (void)logWarn:(NSString *)msg;
