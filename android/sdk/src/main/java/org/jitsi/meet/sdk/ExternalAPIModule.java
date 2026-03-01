import com.facebook.react.bridge.ReactMethod;
        // Keep track of the current ongoing conference.
        constants.put("OPEN_CHAT", BroadcastAction.Type.OPEN_CHAT.getAction());
        constants.put("OVERWRITE_CONFIG", BroadcastAction.Type.OVERWRITE_CONFIG.getAction());
     * @return The name of this module to be used in the React Native bridge.
package org.jitsi.meet.sdk;
    public ExternalAPIModule(ReactApplicationContext reactContext) {
     *
 *     http://www.apache.org/licenses/LICENSE-2.0
        broadcastEmitter = new BroadcastEmitter(reactContext);
     */
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

     * is created.
    }

        constants.put("SEND_CAMERA_FACING_MODE_MESSAGE", BroadcastAction.Type.SEND_CAMERA_FACING_MODE_MESSAGE.getAction());
 * distributed under the License is distributed on an "AS IS" BASIS,
        constants.put("TOGGLE_SCREEN_SHARE", BroadcastAction.Type.TOGGLE_SCREEN_SHARE.getAction());

}
        constants.put("RETRIEVE_PARTICIPANTS_INFO", BroadcastAction.Type.RETRIEVE_PARTICIPANTS_INFO.getAction());
     */

     * Initializes a new module instance. There shall be a single instance of
    @ReactMethod
     *
        constants.put("CLOSE_CHAT", BroadcastAction.Type.CLOSE_CHAT.getAction());
 *
    public static final String NAME = "ExternalAPI";
    @Override
@ReactModule(name = ExternalAPIModule.NAME)
     * @return a {@link Map} mapping the constants to be exported with their
import com.facebook.react.bridge.ReadableMap;

    public String getName() {
import com.facebook.react.module.annotations.ReactModule;
 *
 * Unless required by applicable law or agreed to in writing, software


     * this module throughout the lifetime of the app.
        constants.put("HIDE_NOTIFICATION", BroadcastAction.Type.HIDE_NOTIFICATION.getAction());
        JitsiMeetLogger.d(TAG + " Sending event: " + name + " with data: " + data);

    }
     */
    @Override
     * Dispatches an event that occurred on the JavaScript side of the SDK to

    public void sendEvent(String name, ReadableMap data) {
     * Gets a mapping with the constants this module is exporting.
     * @param reactContext the {@link ReactApplicationContext} where this module
 */
 *

        broadcastEmitter.sendBroadcast(name, data);

/*

 * you may not use this file except in compliance with the License.
    }
/**
        OngoingConferenceTracker.getInstance().onExternalAPIEvent(name, data);
    /**
    private final BroadcastReceiver broadcastReceiver;
 * Module implementing an API for sending events from JavaScript to native code.
import com.facebook.react.bridge.ReactApplicationContext;

        constants.put("SHOW_NOTIFICATION", BroadcastAction.Type.SHOW_NOTIFICATION.getAction());
    public Map<String, Object> getConstants() {
        constants.put("SET_VIDEO_MUTED", BroadcastAction.Type.SET_VIDEO_MUTED.getAction());
import com.facebook.react.bridge.ReactContextBaseJavaModule;
        return constants;
        constants.put("START_RECORDING", BroadcastAction.Type.START_RECORDING.getAction());

        constants.put("HANG_UP", BroadcastAction.Type.HANG_UP.getAction());
    private static final String TAG = NAME;
 * See the License for the specific language governing permissions and
    @ReactMethod
 * Licensed under the Apache License, Version 2.0 (the "License");

        // Keep: Required for RN built in Event Emitter Calls.
     *
     * @param name The name of the event.
     * Gets the name of this module to be used in the React Native bridge.
     * the native side.

    @ReactMethod
 * You may obtain a copy of the License at
    }
        constants.put("SET_CLOSED_CAPTIONS_ENABLED", BroadcastAction.Type.SET_CLOSED_CAPTIONS_ENABLED.getAction());
     *
     */
        broadcastReceiver = new BroadcastReceiver(reactContext);
        super(reactContext);
     * @param data The details/specifics of the event to send determined
class ExternalAPIModule extends ReactContextBaseJavaModule {
        constants.put("TOGGLE_CAMERA", BroadcastAction.Type.TOGGLE_CAMERA.getAction());
import java.util.Map;
    /**

    private final BroadcastEmitter broadcastEmitter;
        ParticipantsService.init(reactContext);
        constants.put("SEND_ENDPOINT_TEXT_MESSAGE", BroadcastAction.Type.SEND_ENDPOINT_TEXT_MESSAGE.getAction());
    }
    /**
     * values.
        constants.put("STOP_RECORDING", BroadcastAction.Type.STOP_RECORDING.getAction());
        return NAME;
    /**
 * Copyright @ 2017-present 8x8, Inc.

import java.util.HashMap;

 */
        constants.put("SEND_CHAT_MESSAGE", BroadcastAction.Type.SEND_CHAT_MESSAGE.getAction());
        // Keep: Required for RN built in Event Emitter Calls.
import org.jitsi.meet.sdk.log.JitsiMeetLogger;
     * by/associated with the specified {@code name}.
        constants.put("SET_AUDIO_MUTED", BroadcastAction.Type.SET_AUDIO_MUTED.getAction());
    }
 * limitations under the License.
    public void addListener(String eventName) {
        Map<String, Object> constants = new HashMap<>();
    public void removeListeners(Integer count) {
