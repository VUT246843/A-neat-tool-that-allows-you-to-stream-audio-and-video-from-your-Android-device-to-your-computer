 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 */
        if (errmsg.isEmpty()) {

 * See {@link JitsiMeetDefaultLogHandler} for an example.
 * Copyright @ 2019-present 8x8, Inc.
 * with which to tag all logs coming into this logger.

 */
    }

 * limitations under the License.
            doLog(priority, getDefaultTag(), msg);
 * See the License for the specific language governing permissions and
 *     http://www.apache.org/licenses/LICENSE-2.0
}
    protected void log(int priority, @Nullable String tag, @NotNull String msg, @Nullable Throwable t) {
        }
 * Licensed under the Apache License, Version 2.0 (the "License");
/*
 *
 * You may obtain a copy of the License at
import org.jetbrains.annotations.NotNull;
        } else {

    protected abstract String getDefaultTag();
import timber.log.Timber;
 *

import org.jetbrains.annotations.Nullable;
 * you may not use this file except in compliance with the License.
 * Base class for all custom log handlers. Implementations must inherit from this class and

package org.jitsi.meet.sdk.log;
    protected abstract void doLog(int priority, @NotNull String tag, @NotNull String msg);
        String errmsg = Log.getStackTraceString(t);
public abstract class JitsiMeetBaseLogHandler extends Timber.Tree {
    @Override

 * Unless required by applicable law or agreed to in writing, software

 *
 * implement a `doLog` method which does the actual logging, in addition with a `getTag` method
import android.util.Log;
 *
import java.text.MessageFormat;
 * distributed under the License is distributed on an "AS IS" BASIS,
            doLog(priority, getDefaultTag(), MessageFormat.format("{0}\n{1}", msg, errmsg));
/**
