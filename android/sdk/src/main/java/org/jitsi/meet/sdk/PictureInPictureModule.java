 *
    }
     * Enters Picture-in-Picture (mode) for the current {@link Activity}.
     * screen is locked or if the user has an activity pinned.
        return isSupported;
    /**
    @Override
 * distributed under the License is distributed on an "AS IS" BASIS,
    @Override
     *
        if (!isSupported) {
 * limitations under the License.
 *
import static android.content.Context.ACTIVITY_SERVICE;
        // The system may disallow entering picture-in-picture in various cases,
}
        ActivityManager am = (ActivityManager) reactContext.getSystemService(ACTIVITY_SERVICE);
        }
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            return;

 * Licensed under the Apache License, Version 2.0 (the "License");
    /**
        PictureInPictureParams.Builder builder
        }
     * That method can also throw a {@link RuntimeException} in various cases,
import java.util.HashMap;
     * Supported on Android API >= 26 (Oreo) only.
        isSupported = !am.isLowRamDevice();


     */
        this.isEnabled = enabled;
    private static final String TAG = NAME;
    public Map<String, Object> getConstants() {
import com.facebook.react.bridge.Promise;
    public void enterPictureInPicture(Promise promise) {
    private static boolean isSupported;
        // including when the activity is not visible, if the screen is locked
     * {@code null}.
        return NAME;
        return constants;
            enterPictureInPicture();
        JitsiMeetLogger.i(TAG + " Entering Picture-in-Picture");


     * @throws RuntimeException if
        // to use ActivityManager.isLowRamDevice().
    @ReactMethod
    private boolean isEnabled;
import android.app.PictureInPictureParams;
class PictureInPictureModule extends ReactContextBaseJavaModule {
import com.facebook.react.module.annotations.ReactModule;
 *
import android.annotation.TargetApi;

import android.app.ActivityManager;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
     * Enters Picture-in-Picture (mode) for the current {@link Activity}.

        if (!currentActivity.enterPictureInPictureMode(builder.build())) {
        if (!isEnabled) {
    /**
    }


        Map<String, Object> constants = new HashMap<>();
    }
     */
            promise.resolve(null);
    public void enterPictureInPicture() {


    @ReactMethod
/*
import org.jitsi.meet.sdk.log.JitsiMeetLogger;
        //
     * @param promise a {@code Promise} which will resolve with a {@code null}
    public void setPictureInPictureEnabled(Boolean enabled) {
 * you may not use this file except in compliance with the License.
     * Gets a {@code Map} of constants this module exports to JS. Supports JSON
@ReactModule(name = PictureInPictureModule.NAME)
        }
 */
     */
     * {@link Activity#enterPictureInPictureMode(PictureInPictureParams)} fails.
            = new PictureInPictureParams.Builder()


        Activity currentActivity = getCurrentActivity();
package org.jitsi.meet.sdk;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
     *
        }
    }
        super(reactContext);
 * Copyright @ 2017-present 8x8, Inc.

                .setAspectRatio(new Rational(1, 1));
     * value upon success, and an {@link Exception} otherwise.



        try {
     * returns {@code false} or if {@link #getCurrentActivity()} returns


        // or if the user has an activity pinned.
        // https://developer.android.com/reference/android/app/Activity.html#enterPictureInPictureMode(android.app.PictureInPictureParams)
import android.app.Activity;
        constants.put("SUPPORTED", isSupported);
        } catch (RuntimeException re) {
import com.facebook.react.bridge.ReactApplicationContext;
     *
            throw new RuntimeException("Failed to enter Picture-in-Picture");
        // https://stackoverflow.com/questions/58340558/how-to-detect-android-go
    }
     * @throws IllegalStateException if {@link #isPictureInPictureSupported()}

 * You may obtain a copy of the License at
     * types.
 * Unless required by applicable law or agreed to in writing, software
 * See the License for the specific language governing permissions and
    }
 *     http://www.apache.org/licenses/LICENSE-2.0
        // Android Go devices don't support PiP. There doesn't seem to be a better way to detect it than
    public boolean isPictureInPictureSupported() {


        }

            throw new IllegalStateException("Picture-in-Picture not supported");
     * including when the activity is not visible (paused or stopped), if the
    public String getName() {
import android.util.Rational;
     * Supported on Android API >= 26 (Oreo) only.
    }
            promise.reject(re);
        if (currentActivity == null) {
    public PictureInPictureModule(ReactApplicationContext reactContext) {

            throw new IllegalStateException("No current Activity!");
     * @return a {@link Map} of constants this module exports to JS
    public static final String NAME = "PictureInPicture";
