
        LocalBroadcastManager.getInstance(this).registerReceiver(broadcastReceiver, intentFilter);
            int navBarInset = windowInsets.getInsets(WindowInsetsCompat.Type.navigationBars()).bottom;
        this.jitsiView = findViewById(R.id.jitsiView);
            }
    protected void leave() {
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.


        androidx.core.view.WindowCompat.setDecorFitsSystemWindows(w, false);
        super.onResume();
        finish();
 * conference itself. All lifecycle methods associated with this Activity are
//     }
            final int maxTopInset = Math.min((int)(60 * density), (int)(screenHeight * 0.10));
        JitsiMeetActivityDelegate.onHostResume(this);
                    break;
        @Override
            final int maxBottomInset = Math.min((int)(120 * density), (int)(screenHeight * 0.10));
        if ((options = getConferenceOptions(intent)) != null) {
    }
    @SuppressLint("MissingSuperCall")
 * Unless required by applicable law or agreed to in writing, software
        if (!(context instanceof Activity)) {
import android.content.Context;

        setContentView(R.layout.activity_jitsi_meet);
            JitsiMeetLogger.w("Invalid participant joined extraData", e);
import android.app.Activity;
                //    break;
    }
            leave();
            int topInset = Math.min(statusBarInset, maxTopInset);
        intent.putExtra("newConfig", newConfig);

import android.annotation.SuppressLint;
 * distributed under the License is distributed on an "AS IS" BASIS,
        try {
            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);

            initialize();
        }

        context.startActivity(intent);



                    break;
import java.util.HashMap;
    }
            Uri uri = intent.getData();
     * @return {@code true} if the initialization will be delayed, {@code false} otherwise.
            }

                //     onRecordingStatusChanged(event.getData());
        JitsiMeetOngoingConferenceService.abort(this);
        // Activity#onDestroy() called without warning. At this point we can try to leave the

        }
                    break;
        // is using this Activity for displaying meetings, but there is another "main" Activity

                    break;

            if (params.topMargin != topInset || params.bottomMargin != bottomInset) {
    }
                // case RECORDING_STATUS_CHANGED:
    }
        // Make system bars transparent so content is visible underneath
    protected static final String TAG = JitsiMeetActivity.class.getSimpleName();
 */

        for (BroadcastEvent.Type type : BroadcastEvent.Type.values()) {
        super.onConfigurationChanged(newConfig);
     * <p>
    protected void onUserLeaveHint() {
            switch (event.getType()) {
    // Helpers for starting the activity
     * initialization is delayed and the {@link JitsiMeetActivity#initialize()} method is not

            JitsiMeetLogger.w("Cannot join, view is null");
        if (!extraInitialize()) {
        return jitsiView;
import android.content.Intent;
import android.os.Build;
        // Listen for window inset changes 

import androidx.annotation.NonNull;
import org.jitsi.meet.sdk.log.JitsiMeetLogger;
import com.facebook.react.modules.core.PermissionListener;
                    onParticipantJoined(event.getData());
        }
            return;
        if (AudioModeModule.useConnectionService()) {

        final float density = metrics.density;
        JitsiMeetActivityDelegate.onRequestPermissionsResult(requestCode, permissions, grantResults);

        join(getConferenceOptions(getIntent()));

                    break;
    private @Nullable
 *     http://www.apache.org/licenses/LICENSE-2.0
                params.bottomMargin = bottomInset;
        } catch (Exception e) {
        // Join the room specified by the URL the app was launched with.
            JitsiMeetLogger.i("Participant joined: ", extraData);
//     protected void onConferenceUniqueIdSet(HashMap<String, Object> extraData) {

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.VANILLA_ICE_CREAM 
        if (!isReadyToClose) {

        public void onReceive(Context context, Intent intent) {
import androidx.core.view.WindowInsetsCompat;
            }
            this.jitsiView.enterPictureInPicture();


        String action = intent.getAction();
    protected void onConferenceWillJoin(HashMap<String, Object> extraData) {
        final int screenHeight = metrics.heightPixels;
            = new JitsiMeetConferenceOptions.Builder().setRoom(url).build();
    //
 *

        // be operational so the external API won't be able to notify the native side that the
    public void onNewIntent(Intent intent) {
public class JitsiMeetActivity extends AppCompatActivity
                case READY_TO_CLOSE:
        // Joining without the room option displays the welcome page.
            .setRoom(url)
        if (this.jitsiView != null) {


    protected void onCreate(Bundle savedInstanceState) {
        launch(context, options);

    @Override
        Intent intent = new Intent(context, JitsiMeetActivity.class);
    @Override
//     }
 *
        }
        this.jitsiView = null;
        }
    }
//       JitsiMeetLogger.i("Recording status changed: " + extraData);
     *
//         JitsiMeetLogger.i("Conference unique id set: " + extraData);

    protected void onParticipantJoined(HashMap<String, Object> extraData) {


        }
        super.onNewIntent(intent);

        super.onCreate(savedInstanceState);
//    }
 */


    public void onBackPressed() {

 *

    JitsiMeetConferenceOptions getConferenceOptions(Intent intent) {
package org.jitsi.meet.sdk;
        }
                // case CUSTOM_BUTTON_PRESSED:
        super.finish();
     * Instance of the {@link JitsiMeetView} which this activity will display.

        } else {
    public void requestPermissions(String[] permissions, int requestCode, PermissionListener listener) {
        intent.setAction(ACTION_JITSI_MEET_CONFERENCE);
    @Override
    }
                    onParticipantLeft(event.getData());
    protected boolean extraInitialize() {
        super.onStop();
            leave();
 * Licensed under the Apache License, Version 2.0 (the "License");
        // Get display metrics for calculating density-independent caps
            JitsiMeetLogger.i("Participant left: ", extraData);
    }
            addTopBottomInsets(getWindow(), findViewById(android.R.id.content)); 
        }
    }
    }
 * instance gives us access to a view which displays the welcome page and the

       

 * you may not use this file except in compliance with the License.
        registerForBroadcastMessages();
            onBroadcastReceived(intent);
    }
 * Copyright @ 2019-present 8x8, Inc.
        }
/*

import android.os.Bundle;
                //     break;
        ViewCompat.requestApplyInsets(decorView);
        }


        }
        JitsiMeetLogger.i("finish(): finishing...");
            int bottomInset = Math.min(navBarInset, maxBottomInset);
        JitsiMeetLogger.i("SDK is ready to close");
        w.setNavigationBarColor(android.graphics.Color.TRANSPARENT);
        join(options);
            join(options);
        });
    protected void onConferenceJoined(HashMap<String, Object> extraData) {
        // with other content. If this Activity is "swiped out" from the recent list we will get
    public void onConfigurationChanged(Configuration newConfig) {
 * between the {@code JitsiMeetView} and the Activity lifecycle methods.

                case CONFERENCE_WILL_JOIN:

        JitsiMeetActivityDelegate.onNewIntent(intent);
                case CONFERENCE_TERMINATED:
        JitsiMeetLogger.i("Conference terminated: " + extraData);
            intentFilter.addAction(type.getAction());
    }
        }
 * See the License for the specific language governing permissions and
     */
            JitsiMeetLogger.w("Cannot leave, view is null");
        Intent intent = new Intent("onConfigurationChanged");
        intent.putExtra(JITSI_MEET_CONFERENCE_OPTIONS, options);

            // Calculate maximum allowed inset values to prevent device-specific bugs
    //
        if (intent != null) {
//        JitsiMeetLogger.i("Transcription chunk received: " + extraData);
    }

                // case CONFERENCE_UNIQUE_ID_SET:
        }

                case PARTICIPANT_JOINED:
import android.view.View;
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
            = new JitsiMeetConferenceOptions.Builder()
    }
    public void finish() {

            JitsiMeetLogger.i("onDestroy(): leaving...");


    protected void onReadyToClose() {
    @Override
            // Update margins only if they've changed
    public void join(JitsiMeetConferenceOptions options) {
//         JitsiMeetLogger.i("Custom button pressed: " + extraData);
    public static void launch(Context context, JitsiMeetConferenceOptions options) {
        // Launch the service for the ongoing notification.
            ViewGroup.MarginLayoutParams params = (ViewGroup.MarginLayoutParams) v.getLayoutParams();
        } catch (Exception e) {
        final android.util.DisplayMetrics metrics = v.getContext().getResources().getDisplayMetrics();
}
 * limitations under the License.
/**

        JitsiMeetLogger.i("onDestroy()");
        // when system bars visibility is toggled or when the device rotates
    /**

import android.content.IntentFilter;

                //     onConferenceUniqueIdSet(event.getData());
    }
                return new JitsiMeetConferenceOptions.Builder().setRoom(uri.toString()).build();
    //

        ViewCompat.setOnApplyWindowInsetsListener(decorView, (view, windowInsets) -> {
 * In this activity we use a single {@code JitsiMeetView} instance. This
        } else if (ACTION_JITSI_MEET_CONFERENCE.equals(action)) {
    }

        // Enable edge-to-edge mode
    // JitsiMeetActivityInterface
        JitsiMeetActivityDelegate.onHostResume(this);
                    onReadyToClose();
        JitsiMeetConferenceOptions options
    public void onStop() {
    private void onBroadcastReceived(Intent intent) {
    }
                    onConferenceTerminated(event.getData());

    }
        JitsiMeetActivityDelegate.onHostPause(this);

            if (uri != null) {
//     }
    public static void addTopBottomInsets(@NonNull Window w, @NonNull View v) {
                //    onCustomButtonPressed(event.getData());
                case CONFERENCE_JOINED:
    implements JitsiMeetActivityInterface {
                case PARTICIPANT_LEFT:
    }
        this.sendBroadcast(intent);
            JitsiMeetLogger.w("Invalid participant left extraData", e);
    }
    }


    public void onResume() {
        // conference terminated. Thus, try our best to clean up.
    }


import androidx.core.view.ViewCompat;
import android.content.res.Configuration;
            // Apply calculated insets
        if (this.jitsiView != null) {
            }
        if (Intent.ACTION_VIEW.equals(action)) {
        }

import androidx.annotation.Nullable;
import android.content.BroadcastReceiver;
    @Override
        JitsiMeetActivityDelegate.requestPermissions(this, permissions, requestCode, listener);

    @Override
            this.jitsiView.abort();



                //     break;
        if (!isReadyToClose) {

        JitsiMeetConferenceOptions options;
            ConnectionService.abortConnections();

    public void join(@Nullable String url) {


        JitsiMeetActivityDelegate.onBackPressed();
    /**
 * A base activity for SDK users to embed.  It contains all the required wiring
            view.setBackgroundColor(JitsiMeetView.BACKGROUND_COLOR);
            int statusBarInset = windowInsets.getInsets(WindowInsetsCompat.Type.statusBars()).top;

    @Override
    }
        }
        w.setStatusBarColor(android.graphics.Color.TRANSPARENT);
        JitsiMeetActivityDelegate.onHostDestroy(this);
    public void onDestroy() {

    protected JitsiMeetView getJitsiView() {
                    onConferenceWillJoin(event.getData());
//    protected void onTranscriptionChunkReceived(HashMap<String, Object> extraData) {
            return intent.getParcelableExtra(JITSI_MEET_CONFERENCE_OPTIONS);


    }
        try {
 * {@code JitsiMeetActivityDelegate} static methods.
//     protected void onRecordingStatusChanged(HashMap<String, Object> extraData) {
        } else {
 *
    public static void launch(Context context, String url) {
        isReadyToClose = true;
                //    onTranscriptionChunkReceived(event.getData());

import android.view.ViewGroup;

                // case TRANSCRIPTION_CHUNK_RECEIVED:
    //
    }
    };
            .build();
            this.jitsiView.join(options);

     * Helper function called during activity initialization. If {@code true} is returned, the
    }

    }
        super.onDestroy();

 * You may obtain a copy of the License at
    private static final String JITSI_MEET_CONFERENCE_OPTIONS = "JitsiMeetConferenceOptions";
        super.onActivityResult(requestCode, resultCode, data);
            return WindowInsetsCompat.CONSUMED;
    //
            BroadcastEvent event = new BroadcastEvent(intent);
import androidx.localbroadcastmanager.content.LocalBroadcastManager;
    protected void onParticipantLeft(HashMap<String, Object> extraData) {
     * called. In this case, it's up to the subclass to call the initialize method when ready.
                    break;
    private static final String ACTION_JITSI_MEET_CONFERENCE = "org.jitsi.meet.CONFERENCE";
    @Override
        JitsiMeetOngoingConferenceService.launch(this, extraData);
    private void registerForBroadcastMessages() {

    }
        JitsiMeetConferenceOptions options
    private JitsiMeetView jitsiView;
                //    break;
    }
        return false;
                params.topMargin = topInset;
    private final BroadcastReceiver broadcastReceiver = new BroadcastReceiver() {
    @Override
    private boolean isReadyToClose;
        JitsiMeetLogger.i("Conference joined: " + extraData);

import android.view.Window;
     */
        LocalBroadcastManager.getInstance(this).unregisterReceiver(broadcastReceiver);
        JitsiMeetActivityDelegate.onActivityResult(this, requestCode, resultCode, data);
    }
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        JitsiMeetLogger.i("Conference will join: " + extraData);
        IntentFilter intentFilter = new IntentFilter();
    @Override
        // current meeting, but when our view is detached from React the JS <-> Native bridge won't
        // ReactInstanceManager is now initialized by JitsiInitializer during application startup
 * hooked to the React Native subsystem via proxy calls through the
import android.net.Uri;
        if (this.jitsiView != null) {

import androidx.appcompat.app.AppCompatActivity;
            JitsiMeetLogger.i("finish(): leaving...");
                    onConferenceJoined(event.getData());

     * This is mainly required so we do some extra initialization in the Jitsi Meet app.
        && getApplicationInfo().targetSdkVersion >= Build.VERSION_CODES.VANILLA_ICE_CREAM) {
    protected void onConferenceTerminated(HashMap<String, Object> extraData) {
        // Manually trigger the inset listener to apply margins immediately
    protected void initialize() {
            // Return CONSUMED to prevent double-application of margins


    // Activity lifecycle methods
    // Overrides
        // Here we are trying to handle the following corner case: an application using the SDK
                v.setLayoutParams(params);
        // Just call onHostResume since the manager is already ready
    @Override
    // Helper methods
    @Override
//    protected void onCustomButtonPressed(HashMap<String, Object> extraData) {

        View decorView = w.getDecorView();
        return null;
            // Get the actual inset values reported by the system
