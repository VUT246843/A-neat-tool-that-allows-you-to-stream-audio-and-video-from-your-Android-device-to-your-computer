            ConnectionService.abortConnections();
    public static void register() {

        this.defaultUncaughtExceptionHandler = defaultUncaughtExceptionHandler;
 * distributed under the License is distributed on an "AS IS" BASIS,
    }
    private final Thread.UncaughtExceptionHandler defaultUncaughtExceptionHandler;
 * See the License for the specific language governing permissions and

 *
    @Override
 */
        JitsiMeetUncaughtExceptionHandler uncaughtExceptionHandler


        }
 * Copyright @ 2017-2018 Atlassian Pty Ltd
    private JitsiMeetUncaughtExceptionHandler(Thread.UncaughtExceptionHandler defaultUncaughtExceptionHandler) {
    }
            defaultUncaughtExceptionHandler.uncaughtException(t, e);
 * Unless required by applicable law or agreed to in writing, software
}
class JitsiMeetUncaughtExceptionHandler implements Thread.UncaughtExceptionHandler {
 * you may not use this file except in compliance with the License.
 *
        JitsiMeetLogger.e(e, this.getClass().getSimpleName() + " FATAL ERROR");
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * Copyright @ 2018-present 8x8, Inc.
 *
import org.jitsi.meet.sdk.log.JitsiMeetLogger;

        if (AudioModeModule.useConnectionService()) {

        Thread.UncaughtExceptionHandler defaultUncaughtExceptionHandler = Thread.getDefaultUncaughtExceptionHandler();

        }
        Thread.setDefaultUncaughtExceptionHandler(uncaughtExceptionHandler);
/*


    }
 * You may obtain a copy of the License at
    public void uncaughtException(Thread t, Throwable e) {
            = new JitsiMeetUncaughtExceptionHandler(defaultUncaughtExceptionHandler);
        if (defaultUncaughtExceptionHandler != null) {
package org.jitsi.meet.sdk;
 * Licensed under the Apache License, Version 2.0 (the "License");
        // Abort all ConnectionService ongoing calls
 * limitations under the License.

 *     http://www.apache.org/licenses/LICENSE-2.0
