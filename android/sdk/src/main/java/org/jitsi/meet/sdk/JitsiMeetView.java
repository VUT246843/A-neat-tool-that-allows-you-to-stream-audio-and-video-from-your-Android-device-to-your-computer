        super.onDetachedFromWindow();
 * limitations under the License.
            }
        if (pipModule != null

                && !JitsiMeetActivityDelegate.arePermissionsBeingRequested()) {
     * page.
    private ReactRootView reactRootView;
import android.content.Context;
                pipModule.enterPictureInPicture();
    /**
     * Enters Picture-In-Picture mode, if possible. This method is designed to

     * be called from the {@code Activity.onUserLeaveHint} method.
        initialize(context);
        // "imperativeness" in React Component props by defining a unique value
 *
        // the respective conference again if the first invocation was followed

        }
            reactRootView = null;

/*
     * @param appName - The name of the "app" (in React Native terms) to load.
import android.widget.FrameLayout;
    public static final int BACKGROUND_COLOR = 0xFF040404;

            if (valueType.contentEquals("Boolean")) {
 * Licensed under the Apache License, Version 2.0 (the "License");
     * MUST be called when the {@link Activity} holding this view is destroyed,
                result.putInt(key, (int)bValue);
        setProps(options != null ? options.asProps() : new Bundle());
    public void abort() {
 * Unless required by applicable law or agreed to in writing, software



     * already an active conference, it will be left and the new one will be joined.
    @Override
            }

import android.util.AttributeSet;
    public void dispose() {
        PictureInPictureModule pipModule
        // appProperties/initialProperties are declarative expressions i.e. one
    protected void onDetachedFromWindow() {
        if (!(context instanceof JitsiMeetActivityInterface)) {

    public void join(@Nullable JitsiMeetConferenceOptions options) {
    /**
                result.putStringArrayList(key, new ArrayList<>(Arrays.asList(stringArray)));

import java.util.Arrays;
        if (a == null) {
                result.putString(key, (String)bValue);
 *
    public JitsiMeetView(Context context, AttributeSet attrs) {
    private void initialize(@NonNull Context context) {
     * @return The merged {@link Bundle} object.
        // Check if the parent Activity implements JitsiMeetActivityInterface,
            } else if (valueType.contentEquals("Integer")) {
    public JitsiMeetView(Context context, AttributeSet attrs, int defStyle) {
    }

}
            throw new RuntimeException("Enclosing Activity must implement JitsiMeetActivityInterface");
import android.app.Application;
    }
            Object aValue = a.get(key);

    }
        }
     */
    /**
    /**

     *
        initialize(context);

import androidx.annotation.Nullable;
        // and the same URL will not trigger an automatic re-render in the


 */
     * typically in the {@code onDestroy} method.
     * @param options - Description of what conference must be joined and what options will be used
     * will be probably the most useful in case the app is using the welcome
     */
    }
            } catch (RuntimeException re) {
                PictureInPictureModule.class);
                throw new RuntimeException("Unsupported type: " + valueType);
import com.facebook.react.ReactRootView;

     */
        dispose();
    }
        createReactRootView("App", props);
    /**
        result.putAll(a);
                appName,
     * @param props - The React Component props to pass to the app.
     */
        }
import androidx.annotation.NonNull;
            if (b != null) {


        }
        for (String key : b.keySet()) {
     * Releases the React resources (specifically the {@link ReactRootView})
 * Copyright @ 2017-present 8x8, Inc.
            } else {
    }
            props = new Bundle();
        if (reactRootView != null) {
     */
 * distributed under the License is distributed on an "AS IS" BASIS,


        Bundle props = mergeProps(JitsiMeet.getDefaultProps(), newProps);
            return result;
                ReactInstanceManagerHolder.getReactInstanceManager(),
     * @param a - The first {@link Bundle}.

     * Helper method to set the React Native props.
    /**
                && pipModule.isPictureInPictureSupported()
    private static Bundle mergeProps(@Nullable Bundle a, @Nullable Bundle b) {
            result.putAll(a);
     *

        }
 *     http://www.apache.org/licenses/LICENSE-2.0
import org.jitsi.meet.sdk.log.JitsiMeetLogger;
     * Creates the {@code ReactRootView} for the given app name with the given
     * @param b - The second {@link Bundle}.
        Bundle result = new Bundle();
            String valueType = bValue.getClass().getSimpleName();
            Object bValue = b.get(key);

        } else {
 * See the License for the specific language governing permissions and
        // XXX The setProps() method is supposed to be imperative i.e.
    }
        }
        super(context, attrs, defStyle);
import android.app.Activity;
            reactRootView.setBackgroundColor(BACKGROUND_COLOR);
     *

     */
     */

        props.putLong("timestamp", System.currentTimeMillis());
            }
        if (reactRootView == null) {
     */
     */

            reactRootView.unmountReactApplication();
     * Internal method which aborts running RN by passing empty props.

        }
     * Background color. Should match the background color set in JS.
            } else if (valueType.contentEquals("Bundle")) {
    /**
                props);
    public void enterPictureInPicture() {
                // Convert String[] to ArrayList<String> for React Native bridge compatibility
     * This is currently not mandatory, but if used will provide automatic

public class JitsiMeetView extends FrameLayout {
     * props. Once created it's set as the view of this {@code FrameLayout}.
        setProps(new Bundle());
    public JitsiMeetView(@NonNull Context context) {

                String[] stringArray = (String[]) bValue;
     *
     * @param newProps - New props to be set on the React Native view.
            reactRootView.setAppProperties(props);
            } else if (valueType.contentEquals("String[]")) {
 * You may obtain a copy of the License at
    private void createReactRootView(String appName, @Nullable Bundle props) {
     * associated with this view.
    }
        return result;
    /**
import android.os.Bundle;
        super(context);
        // otherwise things may go wrong.
        setBackgroundColor(BACKGROUND_COLOR);
                JitsiMeetLogger.e(re, "Failed to enter PiP mode");
                result.putAll(b);
        if (b == null) {
     * Helper method to recursively merge 2 {@link Bundle} objects representing React Native props.
            return result;
            reactRootView.startReactApplication(
        initialize(context);
    }
        }
     * handling of the picture in picture mode when user minimizes the app. It
            reactRootView = new ReactRootView(getContext());
package org.jitsi.meet.sdk;
                result.putBoolean(key, (Boolean)bValue);
            removeView(reactRootView);
        super(context, attrs);
        // a second invocation with one and the same URL is expected to join
     * This is only meant to be used from the enclosing Activity's onDestroy.
        // Iterate over each key in b and override if appropriate.
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            = ReactInstanceManagerHolder.getNativeModule(
     * React Native root view.
        // Merge the default options with the newly provided ones.
    }
            } else if (valueType.contentEquals("String")) {
    /**
        // Start by putting all of a in the result.
            try {
                result.putBundle(key, mergeProps((Bundle)aValue, (Bundle)bValue));
        // JavaScript source code. The workaround implemented below introduces
import java.util.ArrayList;
    }
     *                when doing so.
        // by leaving the conference. However, React and, respectively,

 *

    }
 * you may not use this file except in compliance with the License.
     * Joins the conference specified by the given {@link JitsiMeetConferenceOptions}. If there is

        // per setProps() invocation.
    private void setProps(@NonNull Bundle newProps) {
            addView(reactRootView);
        if (props == null) {
