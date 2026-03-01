 */
        this.wakeLock = wakeLock;
import android.os.PowerManager.WakeLock;
 * Copyright @ 2017-present 8x8, Inc.
            }
}
    private final WakeLock wakeLock;
     * Initializes a new module instance. There shall be a single instance of
     *
        WakeLock wakeLock;
                } else if (wakeLock.isHeld()) {
     * this module throughout the lifetime of the application.
            @Override
 * is used with the conference audio-only mode.

                if (enabled) {
    }

     */
     */
     *
    /**
                        PowerManager.PROXIMITY_SCREEN_OFF_WAKE_LOCK,
        }
            public void run() {
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
import com.facebook.react.module.annotations.ReactModule;
/**
     * Gets the name of this module to be used in the React Native bridge.
     * is created.
     *
                    }

@ReactModule(name = ProximityModule.NAME)
 * Module implementing a simple API to enable a proximity sensor-controlled
 * you may not use this file except in compliance with the License.
package org.jitsi.meet.sdk;
                        wakeLock.acquire();
    public void setEnabled(final boolean enabled) {
        if (wakeLock == null) {
class ProximityModule extends ReactContextBaseJavaModule {
    /**
 *     http://www.apache.org/licenses/LICENSE-2.0
        super(reactContext);
            = (PowerManager)
import android.os.PowerManager;

            wakeLock
 * Unless required by applicable law or agreed to in writing, software

                        "jitsi:"+NAME);
    public ProximityModule(ReactApplicationContext reactContext) {
/*
 * You may obtain a copy of the License at
 * limitations under the License.
import com.facebook.react.bridge.UiThreadUtil;
    public static final String NAME = "Proximity";
import com.facebook.react.bridge.ReactContextBaseJavaModule;
    /**

     * @param reactContext The {@link ReactApplicationContext} where this module

        UiThreadUtil.runOnUiThread(new Runnable() {

     * {@code false}.
        });
    @ReactMethod
        }
     */
 * Licensed under the Apache License, Version 2.0 (the "License");
 * wake lock. When the lock is held, if the proximity sensor detects a nearby
    }
import android.content.Context;
    @Override
 * object it will dim the screen and disable touch controls. The functionality

import com.facebook.react.bridge.ReactMethod;

                reactContext.getSystemService(Context.POWER_SERVICE);
                = powerManager.newWakeLock(
     */
            wakeLock = null;
        } catch (Throwable ignored) {
 *
 */

        PowerManager powerManager
    public String getName() {
            return;

 *
     * {@link WakeLock} instance.
 *
     * @return The name of this module to be used in the React Native bridge.
    }
     * @param enabled {@code true} to enable the proximity sensor; otherwise,
                    wakeLock.release();
        try {
import com.facebook.react.bridge.ReactApplicationContext;

 * See the License for the specific language governing permissions and
                }
    /**
        return NAME;
 * distributed under the License is distributed on an "AS IS" BASIS,
     * Acquires / releases the proximity sensor wake lock.
                    if (!wakeLock.isHeld()) {
