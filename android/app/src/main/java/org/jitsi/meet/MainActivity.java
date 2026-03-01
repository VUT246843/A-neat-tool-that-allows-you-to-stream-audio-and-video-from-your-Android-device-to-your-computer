        } catch (Exception e) {
import android.content.BroadcastReceiver;
import android.os.Bundle;
    @Override
        RestrictionsManager manager =
    /**

import android.content.IntentFilter;
     */
        for (RestrictionEntry restrictionEntry : entries) {

                    Uri.parse("package:" + getPackageName()));
                return true;


        Log.d(TAG, "Is in picture-in-picture mode: " + isInPictureInPictureMode);
     */
 * launched will result in {@link MainActivity#onNewIntent(Intent)} being called.
        // Setup Crashlytics and Firebase Dynamic Links


        try {
            }


    @Override

 *
    private String defaultURL;
public class MainActivity extends JitsiMeetActivity {
     */
            return true;
                leave();
     * Broadcast receiver for restrictions handling
 *
     */
 * Licensed under the Apache License, Version 2.0 (the "License");
        = (int) (Math.random() * Short.MAX_VALUE);
 * You may obtain a copy of the License at
package org.jitsi.meet;


    protected void onCreate(Bundle savedInstanceState) {
    public boolean onKeyUp(int keyCode, KeyEvent event) {
    }
        Log.d(this.getClass().getSimpleName(), "LIBRE_BUILD="+BuildConfig.LIBRE_BUILD);

     * Default URL as could be obtained from RestrictionManager
                recreate();
        // order to display the warning and error overlays.
            if (!Settings.canDrawOverlays(this)) {
    @Override
            @Override
        try {
    // Activity lifecycle method overrides
 * See the License for the specific language governing permissions and
    private boolean configurationByRestrictions = false;
import android.content.RestrictionsManager;

        options.loggingSeverity = Logging.Severity.LS_ERROR;
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        if (BuildConfig.DEBUG) {

        Collection<RestrictionEntry> entries = manager.getManifestRestrictions(


    /**
import org.jitsi.meet.sdk.JitsiMeetConferenceOptions;

                Intent intent
    // ReactAndroid/src/main/java/com/facebook/react/ReactActivity.java

            broadcastReceiver = null;
}

        return super.onKeyUp(keyCode, event);
        JitsiMeet.setDefaultConferenceOptions(defaultOptions);
import java.util.Collection;
import java.net.URL;
        return false;
                    configurationByRestrictions = true;

import androidx.annotation.Nullable;
        if (broadcastReceiver != null) {
                if (restrictions != null &&
    protected void initialize() {
        Bundle restrictions = manager.getApplicationRestrictions();
    // JitsiMeetActivity overrides
                startActivityForResult(intent, OVERLAY_PERMISSION_REQUEST_CODE);
    }
        }
        JitsiMeet.showSplashScreen(this);
        setJitsiMeetConferenceDefaultOptions();
     * Flag if configuration is provided by RestrictionManager
    private @Nullable URL buildURL(String urlStr) {

     * of other apps. The value must be 16-bit and is arbitrarily chosen here.
                // Otherwise use default URL from app-restrictions.xml.
        }
            = new JitsiMeetConferenceOptions.Builder()
    @Override
                initialize();
    public static final String RESTRICTION_SERVER_URL = "SERVER_URL";
            }
    private static final int OVERLAY_PERMISSION_REQUEST_CODE
    //
    private BroadcastReceiver broadcastReceiver;
            }
        resolveRestrictions();
    }
    }
import org.jitsi.meet.sdk.JitsiMeetActivity;
        super.onDestroy();
                } else {
    /**

            Method m = cls.getMethod("initialize", JitsiMeetActivity.class);
    }
import android.view.KeyEvent;
    // Helper methods
import android.util.Log;
import android.content.Intent;
        registerReceiver(broadcastReceiver,
        broadcastReceiver = new BroadcastReceiver() {
import java.lang.reflect.Method;



        super.onCreate(null);
                    = new Intent(
        super.onPictureInPictureModeChanged(isInPictureInPictureMode);
        if (BuildConfig.DEBUG && keyCode == KeyEvent.KEYCODE_MENU) {
            // Ignore any error, the module is not compiled when LIBRE_BUILD is enabled.

    @Override
                // If restrictions are passed to the application.
                    restrictions.containsKey(RESTRICTION_SERVER_URL)) {
import org.jitsi.meet.sdk.JitsiMeet;
            m.invoke(null, this);
    }
    }
        } catch (Exception e) {
import android.provider.Settings;
    //

import org.webrtc.Logging;
                    Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
            JitsiMeet.showDevOptions();
            .build();
 * you may not use this file except in compliance with the License.
import android.net.Uri;
    private void resolveRestrictions() {
     * ServerURL configuration key for restriction configuration using {@link android.content.RestrictionsManager}

            .setServerURL(buildURL(defaultURL))
            unregisterReceiver(broadcastReceiver);
 * The one and only Activity that the Jitsi Meet app needs. The
                    configurationByRestrictions = false;
        }
 *
            getApplicationContext().getPackageName());
        WebRTCModuleOptions options = WebRTCModuleOptions.getInstance();
 * of it. Further attempts at launching the application once it was already
            public void onReceive(Context context, Intent intent) {
     */
    public void onPictureInPictureModeChanged(boolean isInPictureInPictureMode) {
    /**
    @Override


            if (Settings.canDrawOverlays(this)) {
        // Here we are using reflection since it may have been disabled at compile time.


    }
 * Unless required by applicable law or agreed to in writing, software
            return null;
        }
        };
 * limitations under the License.
        super.onActivityResult(requestCode, resultCode, data);
 * distributed under the License is distributed on an "AS IS" BASIS,
                return;
        super.initialize();
import com.oney.WebRTCModule.WebRTCModuleOptions;
            Class<?> cls = Class.forName("org.jitsi.meet.GoogleServicesHelper");
                // conference should be restarted with new configuration.

    /**
 */
 */
        if (requestCode == OVERLAY_PERMISSION_REQUEST_CODE) {
            throw new RuntimeException("Overlay permission is required when running in Debug mode.");
            if (RESTRICTION_SERVER_URL.equals(key)) {
     * The request code identifying requests for the permission to draw on top
 * created upon application initialization and there will be a single instance
 * {@code Activity} is launched in {@code singleTask} mode, so it will be
            (RestrictionsManager) getSystemService(Context.RESTRICTIONS_SERVICE);
    @Override
    protected boolean extraInitialize() {
        JitsiMeetConferenceOptions defaultOptions
    }
            .setFeatureFlag("welcomepage.enabled", true)
/*
/**
import android.content.Context;
            String key = restrictionEntry.getKey();
        }

    private void setJitsiMeetConferenceDefaultOptions() {
            }

                }

        // In Debug builds React needs permission to write over other apps in
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        // Set default options
    public void onDestroy() {
    //
 * Copyright @ 2017-present 8x8, Inc.
        }
            return new URL(urlStr);
    }
 *     http://www.apache.org/licenses/LICENSE-2.0

                    defaultURL = restrictionEntry.getSelectedString();
            new IntentFilter(Intent.ACTION_APPLICATION_RESTRICTIONS_CHANGED));
                    defaultURL = restrictions.getString(RESTRICTION_SERVER_URL);

                // As new restrictions including server URL are received,
import android.content.RestrictionEntry;
        }
            .setFeatureFlag("server-url-change.enabled", !configurationByRestrictions)
