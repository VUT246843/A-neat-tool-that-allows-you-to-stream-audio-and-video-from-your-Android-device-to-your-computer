import android.util.Log;
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Copyright @ 2019-present 8x8, Inc.
    }
package org.jitsi.meet.sdk.log;
    @Override
 *
    protected String getDefaultTag() {
 * logs using the Android util.Log module.
}
 * Unless required by applicable law or agreed to in writing, software
    @Override
 *

 * Licensed under the Apache License, Version 2.0 (the "License");
 * You may obtain a copy of the License at
 *
 * Default implementation of a {@link JitsiMeetBaseLogHandler}. This is the main SDK logger, which
 * limitations under the License.

 */
 * distributed under the License is distributed on an "AS IS" BASIS,

        return TAG;
 * See the License for the specific language governing permissions and
    protected void doLog(int priority, @NotNull String tag, @NotNull String msg) {
/*
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
import org.jetbrains.annotations.NotNull;
/**
    private static final String TAG = "JitsiMeetSDK";

 */
 * you may not use this file except in compliance with the License.
        Log.println(priority, tag, msg);
    }
public class JitsiMeetDefaultLogHandler extends JitsiMeetBaseLogHandler {


