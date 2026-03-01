        permissionListener = listener;
import android.app.Activity;
    }
     * {@code Activity#onResume} so we can do the required internal processing.
    /**


/*
     */
                reactInstanceManager.onHostPause(activity);
    /**
 * {@link Activity} lifecycle methods in order for the React side to be aware of
    /**
                = ReactInstanceManagerHolder.getReactInstanceManager();

     * {@link Activity} lifecycle method which should be called from
        } catch (Exception e) {
     * {@link Activity} lifecycle method which should be called from

            = ReactInstanceManagerHolder.getReactInstanceManager();
        // The RN Permissions module calls this in a non-UI thread. What we observe is a crash in ViewGroup.dispatchCancelPendingInputEvents,
        // which is called on the calling (ie, non-UI) thread. This doesn't look very safe, so try to avoid a crash by pretending the permission
     */
            } catch (AssertionError e) {
        ReactInstanceManager reactInstanceManager
    public static void onHostPause(Activity activity) {
    public static void onHostResume(Activity activity) {
        if (reactInstanceManager != null) {

        if (reactInstanceManager != null) {

        // Invoke the callback immediately
import android.content.Intent;
package org.jitsi.meet.sdk;
     * {@link Activity#onBackPressed} so we can do the required internal
    public static void onHostDestroy(Activity activity) {
    /**
     * {@link Activity} lifecycle method which should be called from
        }
    public static void requestPermissions(Activity activity, String[] permissions, int requestCode, PermissionListener listener) {
            = ReactInstanceManagerHolder.getReactInstanceManager();
    /**
     * @return {@code true} if the permissions are being requested or {@code false} otherwise.
        ReactInstanceManager reactInstanceManager
     * {@code Activity#onPause} so we can do the required internal processing.

        }
 * Copyright @ 2018-present 8x8, Inc.
     * {@link Activity} lifecycle method which should be called from
                // rotation is involved and the planets align. There doesn't seem to
                JitsiMeetLogger.e(e, "Error running onHostPause, ignoring");

        return permissionListener != null;
     *
     * was set to "singleTask". This is required for deep linking to work once
        ReactInstanceManager reactInstanceManager
     *
                // be a proper solution, but since the activity is going away anyway,
     * {@link Activity} lifecycle method which should be called from
        if (reactInstanceManager != null) {
     */
            onRequestPermissionsResult(requestCode, permissions, new int[0]);
            int resultCode,
     * @param resultCode {@code int} code of the result.
            reactInstanceManager.onNewIntent(intent);
 * limitations under the License.
 * Helper class to encapsulate the work which needs to be done on
     * {@code Activity#onDestroy} so we can do the required internal
 *
            activity.requestPermissions(permissions, requestCode);
 * you may not use this file except in compliance with the License.
    public static void onBackPressed() {

            = ReactInstanceManagerHolder.getReactInstanceManager();
 *

 * distributed under the License is distributed on an "AS IS" BASIS,
 */
import com.facebook.react.modules.core.PermissionListener;
     * processing. Note that this is only needed if the activity's "launchMode"
public class JitsiMeetActivityDelegate {

    /**
import com.facebook.react.bridge.Callback;
    public static void onRequestPermissionsResult(
        ReactInstanceManager reactInstanceManager
     * Needed for making sure this class working with the "PermissionsAndroid"
        if (reactInstanceManager != null) {
        }
        if (reactInstanceManager != null) {
                // Ref: https://github.com/facebook/react-native/search?q=Pausing+an+activity+that+is+not+the+current+activity%2C+this+is+incorrect%21&type=issues
     * processing.
    public static void onActivityResult(
 * See the License for the specific language governing permissions and
    }
     */

 *
            reactInstanceManager.onHostDestroy(activity);
    /**
        try {
     */
     *
/**
     * @param intent {@code Intent} instance which was received.
    public static void onNewIntent(Intent intent) {
     * processing.
    static boolean arePermissionsBeingRequested() {
    }

     * @param data {@code Intent} the intent of the activity.
     */
        if (reactInstanceManager != null) {
            permissionListener = null;
    }
                // There seems to be a problem in RN when resuming an Activity when
            reactInstanceManager.onBackPressed();
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * it.
import org.jitsi.meet.sdk.log.JitsiMeetLogger;
        }
     *

 *     http://www.apache.org/licenses/LICENSE-2.0


     * {@code Activity#onNewIntent} so we can do the required internal
     * React Native module.
     * started/finished.
                // we'll YOLO-ignore the exception and hope fo the best.
 */


     */
            Activity activity,
    }
        if (permissionListener != null && permissionListener.onRequestPermissionsResult(requestCode, permissions, grantResults)) {  
     * Tells whether or not the permissions request is currently in progress.
     * @param requestCode {@code int} code of the request.
import com.facebook.react.bridge.ReactContext;
            try {
    }
     * @param activity {@code Activity} being destroyed.
        }
            }

        }
     * @param activity {@code Activity} being paused.
     *
     * @param activity {@code Activity} activity from where the result comes from.
            = ReactInstanceManagerHolder.getReactInstanceManager();
     * @return {@code true} if the back-press was processed; {@code false},
    }
     */
 * Unless required by applicable law or agreed to in writing, software
            = ReactInstanceManagerHolder.getReactInstanceManager();
    /**
}
     * otherwise. If {@code false}, the application should call the
        }
     * {@code Activity#onActivityResult} so we are notified about results of external intents

            int requestCode,
            final int requestCode, final String[] permissions, final int[] grantResults) {
    private static PermissionListener permissionListener;
     *
        ReactInstanceManager reactInstanceManager
        }
    }
            Intent data) {

            reactInstanceManager.onActivityResult(activity, requestCode, resultCode, data);
    }
     * {@code super}'s implementation.
import com.facebook.react.ReactInstanceManager;
        // was denied.
        ReactInstanceManager reactInstanceManager
     *
 * You may obtain a copy of the License at

     * @param activity {@code Activity} being resumed.
     * {@link Activity} lifecycle method which should be called from
     * the application is already running.
 * Licensed under the Apache License, Version 2.0 (the "License");
            reactInstanceManager.onHostResume(activity, new DefaultHardwareBackBtnHandlerImpl(activity));
            JitsiMeetLogger.e(e, "Error requesting permissions");
