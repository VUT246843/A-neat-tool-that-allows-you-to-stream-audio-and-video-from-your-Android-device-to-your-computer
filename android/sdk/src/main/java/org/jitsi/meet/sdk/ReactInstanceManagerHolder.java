            }));
     * Helper function to send an event to JavaScript.
     *
            if (options.videoDecoderFactory == null) {
import com.facebook.react.ReactPackage;
     * is to be retrieved from the {@link #reactInstanceManager}.
            new com.swmansion.gesturehandler.RNGestureHandlerPackage(),
import com.oney.WebRTCModule.EglUtils;
 *
    }
     * @param eventName {@code String} containing the event name.
            JitsiMeetLogger.d(TAG, "Not loading RNGoogleSignInPackage");

    private static List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {

 */


import com.facebook.react.bridge.NativeModule;
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
import android.app.Application;
                new AppInfoModule(reactContext),
            = ReactInstanceManagerHolder.getReactInstanceManager();
        try {
    /**
    private static List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
            new com.sayem.keepawake.KCKeepAwakePackage(),
            Class<?> amplitudePackageClass = Class.forName("com.amplitude.reactnative.AmplitudeReactNativePackage");
            new com.reactnativecommunity.clipboard.ClipboardPackage(),
        JitsiMeetLogger.d(TAG, "initializing RN");


            = ReactInstanceManager.builder()
     * also breaks Instant Run).
        try {
        }
        return reactInstanceManager;
     * time. All {@code ReactRootView} instances will be tied to the one and
     *
import com.facebook.react.uimanager.ViewManager;
        }
        // GiphyReactNativeSdkPackage
                .setJSMainModulePath("index.android")
        return reactContext != null
            JitsiMeetLogger.d(TAG, "Not loading AmplitudeReactNativePackage");
                new org.jitsi.meet.sdk.net.NAT64AddrInfoModule(reactContext)));

        return Collections.emptyList();
            new com.calendarevents.RNCalendarEventsPackage(),
            new com.swmansion.rnscreens.RNScreensPackage(),


            = new ArrayList<>(Arrays.asList(
     * Finds a native React module for given class.

    /**
            new com.kevinresol.react_native_default_preference.RNDefaultPreferencePackage(),
                .setJavaScriptExecutorFactory(new HermesExecutorFactory())
    }
            @Nullable Object data) {
    static void initReactInstanceManager(Application app) {
 *
                .setBundleAssetName("index.android.bundle")
                .setInitialLifecycleState(LifecycleState.BEFORE_CREATE)

            }
import java.util.List;
        reactInstanceManager
 * See the License for the specific language governing permissions and
                = reactInstanceManager.getCurrentReactContext();
                .setCurrentActivity(null)
     */
                new AndroidSettingsModule(reactContext),
        }
            // Ignore any error, the module is not compiled when LIBRE_BUILD is enabled.
            @SuppressLint("VisibleForTests") ReactContext reactContext
                .addPackages(getReactNativePackages())
            Class<?> googlePackageClass = Class.forName("com.reactnativegooglesignin.RNGoogleSigninPackage");
     * create a single instance in order to load the JavaScript bundle a single
            new com.brentvatne.react.ReactVideoPackage(),

                public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
            Constructor<?> constructor = giphyPackageClass.getConstructor();
            new com.oney.WebRTCModule.WebRTCModulePackage(),
import com.facebook.react.bridge.ReactApplicationContext;

        ReactInstanceManager reactInstanceManager
            = reactInstanceManager != null
    }
        }
 * Copyright @ 2017-present 8x8, Inc.
        List<ReactPackage> packages
            packages.add((ReactPackage)constructor.newInstance());
import org.webrtc.EglBase;
        WebRTCModuleOptions options = WebRTCModuleOptions.getInstance();
            new com.reactnativecommunity.slider.ReactSliderPackage(),


import java.lang.reflect.Constructor;
            new org.linusu.RNGetRandomValuesPackage(),
     * fields (static reference to ReactInstanceManager which has field
/*
import com.facebook.hermes.reactexecutor.HermesExecutorFactory;
            new com.oblador.performance.PerformancePackage(),
    static void emitEvent(
                ? reactInstanceManager.getCurrentReactContext() : null;
        } catch (Exception e) {
     * Internal method to initialize the React Native instance manager. We
        } catch (Exception e) {
        return packages;
                public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
 * Licensed under the Apache License, Version 2.0 (the "License");
     */
        @SuppressLint("VisibleForTests") ReactContext reactContext
            new com.worklets.WorkletsCorePackage(),
            nativeModules.add(new RNConnectionService(reactContext));
 *     http://www.apache.org/licenses/LICENSE-2.0
                new LocaleDetector(reactContext),
import org.jitsi.meet.sdk.log.JitsiMeetLogger;
            new com.zmxv.RNSound.RNSoundPackage(),
        if (reactInstanceManager != null) {
                options.videoDecoderFactory = new JitsiVideoDecoderFactory(eglContext);
                }

}
            new com.ocetnik.timer.BackgroundTimerPackage(),
     *
                .build();
                    return ReactInstanceManagerHolder.createViewManagers(reactContext);
                reactContext
 * Unless required by applicable law or agreed to in writing, software


import java.util.Collections;
     * only {@code ReactInstanceManager}.
            new com.th3rdwave.safeareacontext.SafeAreaContextPackage(),
            new com.learnium.RNDeviceInfo.RNDeviceInfo(),
        List<NativeModule> nativeModules
 * You may obtain a copy of the License at
                @Override
     * @param app {@code Application}
        if (options.videoDecoderFactory == null || options.videoEncoderFactory == null) {
import java.util.Arrays;
 * limitations under the License.
                    .emit(eventName, data);
     * {@code null} if no instance for this interface is available, or if
            Constructor<?> constructor = googlePackageClass.getConstructor();

import com.facebook.react.bridge.ReactContext;
     * @param nativeModuleClass the native module's class for which an instance
            // Ignore any error, the module is not compiled when LIBRE_BUILD is enabled.
        }
     * FIXME (from linter): Do not place Android context classes in static
        // AmplitudeReactNativePackage
    /**
class ReactInstanceManagerHolder {
            if (options.videoEncoderFactory == null) {

 *
 * you may not use this file except in compliance with the License.
     * @return {@link NativeModule} instance for given interface type or
            }
            JitsiMeetLogger.d(TAG, "Not loading GiphyReactNativeSdkPackage");

            Constructor<?> constructor = amplitudePackageClass.getConstructor();
     * @param <T> the module's type.
            new com.facebook.react.shell.MainReactPackage(),
                .setApplication(app)
        // Initialize the WebRTC module options.

     * to create multiple root views off the same JavaScript bundle.
 * distributed under the License is distributed on an "AS IS" BASIS,
            new com.reactnativecommunity.asyncstorage.AsyncStoragePackage(),
    }
            // Ignore any error, the module is not compiled when LIBRE_BUILD is enabled.
    /**
            EglBase.Context eglContext = EglUtils.getRootEglBaseContext();
            packages.add((ReactPackage)constructor.newInstance());
            new com.splashview.SplashViewPackage(),
     * mApplicationContext pointing to Context); this is a memory leak (and
            return;
        options.enableMediaProjectionService = true;
import com.facebook.react.ReactInstanceManager;
            new com.reactnativecommunity.netinfo.NetInfoPackage(),

            }
                new DropboxModule(reactContext),
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.oney.WebRTCModule.WebRTCModuleOptions;
                new LogBridgeModule(reactContext),
            String eventName,
        if (AudioModeModule.useConnectionService()) {
            Class<T> nativeModuleClass) {
import java.util.ArrayList;
    static List<ReactPackage> getReactNativePackages() {
package org.jitsi.meet.sdk;
            new org.wonday.orientation.OrientationPackage(),
            packages.add((ReactPackage)constructor.newInstance());
                new ProximityModule(reactContext),

     * @param data {@code Object} optional ancillary data for the event.
                options.videoEncoderFactory = new JitsiVideoEncoderFactory(eglContext);
            new com.horcrux.svg.SvgPackage(),

                    return ReactInstanceManagerHolder.createNativeModules(reactContext);
    }
                }
                new ExternalAPIModule(reactContext),
import android.annotation.SuppressLint;
                new PictureInPictureModule(reactContext),
                new AudioModeModule(reactContext),
     */
        }
            new com.reactnativecommunity.webview.RNCWebViewPackage(),
        return nativeModules;
        // RNGoogleSignInPackage

            if (reactContext != null) {
    }
        if (reactInstanceManager != null) {
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)

     * {@link #reactInstanceManager} has not been initialized yet.
     *
    private static final String TAG = ReactInstanceManagerHolder.class.getSimpleName();
                ? reactContext.getNativeModule(nativeModuleClass) : null;
            = new ArrayList<>(Arrays.<NativeModule>asList(
            new com.reactnativepagerview.PagerViewPackage(),
                @Override
            new ReactPackageAdapter() {
    static ReactInstanceManager getReactInstanceManager() {
        } catch (Exception e) {
    }
    static <T extends NativeModule> T getNativeModule(
        try {
import androidx.annotation.Nullable;
    private static ReactInstanceManager reactInstanceManager;
        }
import com.facebook.react.common.LifecycleState;
                .setUseDeveloperSupport(BuildConfig.DEBUG)
     */
            Class<?> giphyPackageClass = Class.forName("com.giphyreactnativesdk.RTNGiphySdkPackage");
     * React Native bridge. The instance manager allows embedding applications
