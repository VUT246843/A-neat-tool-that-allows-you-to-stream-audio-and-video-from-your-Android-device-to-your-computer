
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
     * Finishes the associated {@code Activity}.
        activity.finish();
        this.activity = activity;
 * Copyright @ 2019-present 8x8, Inc.
     * provide the default handling of the back button to a specific
}
     * is being provided by this instance.
 * Copyright @ 2017-2018 Atlassian Pty Ltd
    private final Activity activity;
 * invocation when not in a conference.
 * See the License for the specific language governing permissions and
 *
import android.app.Activity;
        // Technically, we'd like to invoke Activity#onBackPressed().
 *


    public DefaultHardwareBackBtnHandlerImpl(Activity activity) {
     */
     */
 */
     *
     */
/*
 * you may not use this file except in compliance with the License.
    public void invokeDefaultOnBackPressed() {
 * Defines the default behavior of {@code JitsiMeetFragment} and
 * {@code JitsiMeetView} handles the invocation. For example, a
    /**
        // Activity#onBackPressed() specifies that "[t]he default implementation
 * limitations under the License.
    }
     *
 * Licensed under the Apache License, Version 2.0 (the "License");
        // Practically, it's not possible. Fortunately, the documentation of
     * {@inheritDoc}
    /**
     * {@code Activity}.
/**
 */
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * provide the default behavior of the back button
        // simply finishes the current activity,"
    /**
 * {@code JitsiMeetView} upon invoking the back button if no
 *
 * {@code JitsiMeetView} may (1) handle the invocation of the back button
    @Override
 *     http://www.apache.org/licenses/LICENSE-2.0
 * distributed under the License is distributed on an "AS IS" BASIS,


    }

package org.jitsi.meet.sdk;
     * @param activity the {@code Activity} to which the new instance is to
class DefaultHardwareBackBtnHandlerImpl implements DefaultHardwareBackBtnHandler {
     * The {@code Activity} to which the default handling of the back button

 * during a conference by leaving the conference and (2) not handle the
 * Unless required by applicable law or agreed to in writing, software
 * You may obtain a copy of the License at
     * Initializes a new {@code DefaultHardwareBackBtnHandlerImpl} instance to
