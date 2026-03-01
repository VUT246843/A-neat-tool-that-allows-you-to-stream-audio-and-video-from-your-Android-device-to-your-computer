/**
  supportedInterfaceOrientationsForWindow:(UIWindow *_Nullable)window;
 */
@import UIKit;
@property (copy, nonatomic, nullable) NSArray<NSString *> *universalLinkDomains;
// Matches RTCLoggingSeverity from RTCLogging.h
/**
  WebRTCLoggingSeverityNone,
 * Copyright @ 2017-present 8x8, Inc.
 *
@interface JitsiMeet : NSObject
 */
#import <JitsiMeetSDK/JitsiMeetConferenceOptions.h>

 * See the License for the specific language governing permissions and
 * https://github.com/jitsi/webrtc/blob/M124/sdk/objc/components/audio/RTCAudioDevice.h

 */
  didFinishLaunchingWithOptions:(NSDictionary *_Nonnull)launchOptions;
- (UIInterfaceOrientationMask)application:(UIApplication *_Nonnull)application
 */
/**
/**
  WebRTCLoggingSeverityWarning,
/**
/**
@property (copy, nonatomic, nullable) NSString *customUrlScheme;

 */
 */


#pragma mark - Utility methods
- (void)showSplashScreen;

/*


};
 * Helper method to destroy the react native bridge, cleaning up resources in the process. Once the react native bridge is destroyed you are responsible for reinstantiating it back using `instantiateReactNativeBridge` method.

    restorationHandler:(void (^_Nullable)(NSArray<id<UIUserActivityRestoring>> *_Nonnull))restorationHandler;

#pragma mark - Methods that the App delegate must call
 * Licensed under the Apache License, Version 2.0 (the "License");

 * Custom RTCAudioDevice implementation.
 * https://github.com/mstyura/RTCAudioDevice
- (BOOL)application:(UIApplication *_Nonnull)app
 * Custom URL scheme used for deep-linking.



- (void)instantiateReactNativeBridge;
  continueUserActivity:(NSUserActivity *_Nonnull)userActivity

 * Specify WebRTC logging severity.

  WebRTCLoggingSeverityInfo,
 * List of domains used for universal linking.
#pragma mark - This class is a singleton

 * Unless required by applicable law or agreed to in writing, software
            options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *_Nonnull)options;
@property (nonatomic, nullable) JitsiMeetConferenceOptions *defaultConferenceOptions;
 *
/**
-             (BOOL)application:(UIApplication *_Nonnull)application
/**
- (JitsiMeetConferenceOptions *_Nonnull)getInitialConferenceOptions;
 * distributed under the License is distributed on an "AS IS" BASIS,
 *     http://www.apache.org/licenses/LICENSE-2.0
 */
 */
 */
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            openURL:(NSURL *_Nonnull)url
@end
 * Shows the splash screen.
-    (BOOL)application:(UIApplication *_Nonnull)application
@property (copy, nonatomic, nullable) NSString *conferenceActivityType;
 * Once  the react native bridge is destroyed you are responsible for reinstantiating it back. Use this method to do so.
 * You may obtain a copy of the License at


- (void)destroyReactNativeBridge;
 * Name for the conference NSUserActivity type. This is used when integrating with
 *
 * limitations under the License.
 * Default conference options used for all conferences. These options will be merged
 * you may not use this file except in compliance with the License.
@property (nonatomic, assign) WebRTCLoggingSeverity webRtcLoggingSeverity;
@property (nonatomic, strong, nullable) id rtcAudioDevice;
+ (instancetype _Nonnull)sharedInstance;
  WebRTCLoggingSeverityVerbose,
 * with those passed to JitsiMeetView.join when joining a conference.
  WebRTCLoggingSeverityError,

/**

 */
@import Foundation;
- (BOOL)isCrashReportingDisabled;
typedef NS_ENUM(NSInteger, WebRTCLoggingSeverity) {



 * SiriKit or Handoff, for example.
