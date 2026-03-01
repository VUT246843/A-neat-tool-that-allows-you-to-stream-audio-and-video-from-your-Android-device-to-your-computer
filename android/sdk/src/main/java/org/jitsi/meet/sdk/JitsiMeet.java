    }
        return new Bundle();
    public static boolean isCrashReportingDisabled(Context context) {
     * @return the current conference URL.
    public static String getCurrentConference() {

        if (options != null && options.getRoom() != null) {
    }
 * Licensed under the Apache License, Version 2.0 (the "License");

    }
    private static JitsiMeetConferenceOptions defaultConferenceOptions;
public class JitsiMeet {
            throw new RuntimeException("'room' must be null in the default conference options");
     * Default {@link JitsiMeetConferenceOptions} which will be used for all conferences. When

    }
    /**
        if (defaultConferenceOptions != null) {
        try {
    /**
 *
     * @return a {@link Bundle} with the default conference options.
        }

            JitsiMeetLogger.e(e, "Failed to show splash screen");
            return defaultConferenceOptions.asProps();
     * joining a conference these options will be merged with the ones passed to
 * distributed under the License is distributed on an "AS IS" BASIS,


     *

 *
    public static JitsiMeetConferenceOptions getDefaultConferenceOptions() {
import com.facebook.react.ReactInstanceManager;
import android.app.Activity;
package org.jitsi.meet.sdk;
     */
    public static void showSplashScreen(Activity activity) {

 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     */
     * Helper to get the default conference options as a {@link Bundle}.
            reactInstanceManager.showDevOptionsDialog();
        String value = preferences.getString("isCrashReportingDisabled", "");
        }
     *
        } catch (Exception e) {
 * Copyright @ 2017-present 8x8, Inc.
     * @param activity - The activity on which to show the SplashScreen {@link Activity}.
import android.content.Context;
     * {@link JitsiMeetView} join().

        }

            SplashView.INSTANCE.showSplashView(activity);
        if (reactInstanceManager != null) {

            = ReactInstanceManagerHolder.getReactInstanceManager();
        return defaultConferenceOptions;
    static Bundle getDefaultProps() {
    /**
     * Returns the current conference URL as a string.
import org.jitsi.meet.sdk.log.JitsiMeetLogger;
        return Boolean.parseBoolean(value);
import android.content.SharedPreferences;

        ReactInstanceManager reactInstanceManager
        return OngoingConferenceTracker.getInstance().getCurrentConference();

    public static void setDefaultConferenceOptions(JitsiMeetConferenceOptions options) {
    /**
     */
} *
    public static void showDevOptions() {
    }
import android.os.Bundle;
    /**
    }
import com.splashview.SplashView;
 * limitations under the License.
 * You may obtain a copy of the License at
     */
 * Unless required by applicable law or agreed to in writing, software
 * See the License for the specific language governing permissions and
 *     http://www.apache.org/licenses/LICENSE-2.0
    }
        defaultConferenceOptions = options;

     * Helper method to show the SplashScreen.
     *
     */
 */
        SharedPreferences preferences = context.getSharedPreferences("jitsi-default-preferences", Context.MODE_PRIVATE);
     * Used in development mode. It displays the React Native development menu.
/*
 * you may not use this file except in compliance with the License.
        }
