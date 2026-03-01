        super(reactContext);

        return NAME;
    }

import com.facebook.react.bridge.ReactContextBaseJavaModule;

        JitsiMeetLogger.d(message);
        JitsiMeetLogger.e(message);
    public LogBridgeModule(@Nonnull ReactApplicationContext reactContext) {
 * Copyright @ 2019-present 8x8, Inc.
    public void trace(final String message) {
    public void info(final String message) {

    }
    }

import org.jitsi.meet.sdk.log.JitsiMeetLogger;
    @ReactMethod
 */
 * Module implementing a "bridge" between the JS loggers and the native one.
 *
 * you may not use this file except in compliance with the License.
        JitsiMeetLogger.i(message);
import javax.annotation.Nonnull;
    @ReactMethod
/**
    public void warn(final String message) {
 *
        JitsiMeetLogger.v(message);
 */
 * limitations under the License.
        JitsiMeetLogger.i(message);

 * Licensed under the Apache License, Version 2.0 (the "License");

}
    public static final String NAME = "LogBridge";

 * Unless required by applicable law or agreed to in writing, software
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;
    }
@ReactModule(name = LogBridgeModule.NAME)
    }
import com.facebook.react.bridge.ReactMethod;

 *     http://www.apache.org/licenses/LICENSE-2.0
 * distributed under the License is distributed on an "AS IS" BASIS,
    }
    @Override
    }


 * You may obtain a copy of the License at
    @ReactMethod
    public void debug(final String message) {
    @ReactMethod
    @ReactMethod
        JitsiMeetLogger.w(message);
    @ReactMethod
    public void error(final String message) {
 *
/*
package org.jitsi.meet.sdk;
    }

    public String getName() {
 * See the License for the specific language governing permissions and

class LogBridgeModule extends ReactContextBaseJavaModule {
    public void log(final String message) {
