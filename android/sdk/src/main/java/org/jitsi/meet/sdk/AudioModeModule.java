    }
        promise.resolve(null);
    }
        }
        /**
    static final String TAG = NAME;
import java.util.HashSet;
            selectedDevice = null;
    private static final ExecutorService executor = Executors.newSingleThreadExecutor();
        constants.put("DEVICE_CHANGE_EVENT", DEVICE_CHANGE_EVENT);

     * @return a string with the module name.
    interface AudioDeviceHandlerInterface {
    }
@ReactModule(name = AudioModeModule.NAME)
     * The {@code Log} tag {@code AudioModeModule} is to log messages with.
                }
 * {@code AudioModeModule.DEFAULT} mode should be used.
     *


    /**
            return false;
     *
    private void setAudioDeviceHandler() {
     * values.
import android.media.AudioManager;
     */
import com.facebook.react.bridge.Arguments;
 * Unless required by applicable law or agreed to in writing, software

                useConnectionService_ = use;

        }
            audioDevice = DEVICE_HEADPHONES;

    static final String DEVICE_HEADPHONES = "HEADPHONES";
     * mode.

     * Currently selected device.
     */
        } else {
import com.facebook.react.bridge.ReactContextBaseJavaModule;
        if (audioDisabled) {
                boolean success;

                    promise.resolve(null);
                if (!availableDevices.contains(device)) {
        runInAudioThread(new Runnable() {
}
     */
     */
    /**
     * Sets the user selected audio device as the active audio device.
         * Stop audio device detection.
        if (useConnectionService()) {

        if (mode == DEFAULT) {
            promise.resolve(null);

    /**
 */

                    deviceInfo.putString("type", device);

 * Licensed under the Apache License, Version 2.0 (the "License");
import com.facebook.react.bridge.ReactContext;
    }
            public void run() {
     * Device change event.
        JitsiMeetLogger.i(TAG + " Update audio route for mode: " + mode);
    }

    public AudioModeModule(ReactApplicationContext reactContext) {
     */
        }
     * @param device The old device to the removed.
     */
    /**
                        // Skip earpiece when headphones are plugged in.
    public void initialize() {
    public ReactContext getContext(){
     * Updates the audio route for the given mode.
import android.app.Activity;
        }
        constants.put("VIDEO_CALL", VIDEO_CALL);
     * Interface for the modules implementing the actual audio device management.
        void stop();
        });
     *   default, unless a wired or Bluetooth headset is connected.
     * Audio device types.

        void start(AudioModeModule audioModeModule);
     * @param mode the desired audio mode.
    private String selectedDevice;
     */
            audioDevice = DEVICE_SPEAKER;
            return;
                final boolean hasHeadphones = availableDevices.contains(DEVICE_HEADPHONES);
    void updateAudioRoute() {
     * Helper function to run operations on a dedicated thread.
    private boolean audioDisabled;
                    userSelectedDevice = device;

 * You may obtain a copy of the License at

        runInAudioThread(new Runnable() {
     *
    private Set<String> availableDevices = new HashSet<>();
    /**
    @ReactMethod
     * @return a {@link Map} mapping the constants to be exported with their
 * Before a call has started and after it has ended the

                JitsiMeetLogger.i(TAG + " Updating audio device list");

    String getSelectedDevice() {

        if (mode != -1) {

    private static final String DEVICE_CHANGE_EVENT = "org.jitsi.meet:features/audio-mode#devices-update";
 *     http://www.apache.org/licenses/LICENSE-2.0
        runInAudioThread(new Runnable() {
    }
                currentActivity.setVolumeControlStream(AudioManager.STREAM_VOICE_CALL);
     */
        return true;
    public String getName() {


        // Consider the user's selection
     * needs access to another Catalyst module, so doing this in the constructor would be too early.
            audioDeviceHandler.stop();
            return true;
    private AudioDeviceHandlerInterface audioDeviceHandler;
    /**
/*
        Activity currentActivity = getCurrentActivity();
import com.facebook.react.bridge.ReactMethod;
            public void run() {
            userSelectedDevice = null;
                if (success) {
     * modules have been created, and that's why we use it, because {@link AudioDeviceHandlerConnectionService}
    }
            return;

    private static boolean useConnectionService_ = true;


 */

        userSelectedDevice = null;
    void addDevice(String device) {
        availableDevices.add(device);
     *
                    data.pushMap(deviceInfo);
    void removeDevice(String device) {
    /**
 * conference call.
        boolean setMode(int mode);

     * Initializes a new module instance. There shall be a single instance of

import java.util.Set;
        audioDeviceHandler.setAudioRoute(audioDevice);
     * @param devices The new devices list.
     */
     * Initializes the audio device handler module. This function is called *after* all Catalyst
        audioDeviceHandler = null;
        Map<String, Object> constants = new HashMap<>();
        } else if (headsetAvailable) {
                    AudioModeModule.this.mode = mode;
import com.facebook.react.bridge.WritableArray;
                    success = false;
            resetSelectedDevice();
            public void run() {
     * @param use Boolean indicator of where it should be used or not.

    public void setAudioDevice(final String device) {
                } catch (Throwable e) {
    }
 * limitations under the License.

     * {@link ExecutorService} for running all audio operations on a dedicated
                }
     * User selected device. When null the default is used depending on the
    /**
     * - DEFAULT: Used before and after every call. It represents the default
            return true;
    static final int DEFAULT    = 0;
        }
     * Re-sets the current audio route. Needed when devices changes have happened.
        if (mode < DEFAULT || mode > VIDEO_CALL) {
    void resetSelectedDevice() {

    static boolean useConnectionService() {
    /**
                if (mode != -1) {
         * Set the given audio mode.
    /**
     *   audio routing scheme.
    }
         * Start detecting audio device changes.
        setAudioDeviceHandler();
     * {@code false}, otherwise.
package org.jitsi.meet.sdk;
            updateAudioRoute(mode, false);
     * @return The selected audio device.
                } else {
                    userSelectedDevice = null;
     */
            return;
 * builtin earpiece, wired headset or bluetooth headset. The builtin earpiece is
    public void setUseConnectionService(final boolean use) {
        if (currentActivity != null) {
import java.util.HashMap;
        if (mode != -1) {
        return constants;
    private void notifyDevicesChanged() {
    }
         *

        if (audioDisabled) {
    @Override
     */
 *
            public void run() {
    /**
            }
        }
    /**

        return this.getReactApplicationContext();
    /**
     */
                    JitsiMeetLogger.e(e, TAG + " Failed to update audio route for mode: " + mode);
        resetSelectedDevice();
        audioDeviceHandler.start(this);
    public void addListener(String eventName) {
    }
            audioDeviceHandler = new AudioDeviceHandlerConnectionService(audioManager);
class AudioModeModule extends ReactContextBaseJavaModule {
    }
     */
    private String userSelectedDevice;
     * Gets the name for this module to be used in the React Native bridge.
 * Module implementing a simple API to select the appropriate audio device for a
        if (!audioDeviceHandler.setMode(mode)) {
        audioDisabled = disabled;
    }
     * Re-sets the current audio route. Needed when focus is lost and regained.
    @Override
        }
            }
                    updateAudioRoute(mode, false);
                    JitsiMeetLogger.w(TAG + " Audio device not available: " + device);

         * @param mode The new audio mode to be used.

    private boolean updateAudioRoute(int mode, boolean force) {
            @Override

                    JitsiMeetLogger.i(TAG + " User selected device set to: " + device);
         * @param audioModeModule Reference to the main {@link AudioModeModule}.
 * the builtin speaker, earpiece, wired headset or bluetooth headset. The
     *
import java.util.concurrent.ExecutorService;
import android.content.Context;
         */
        return useConnectionService_;
        /**
import com.facebook.react.bridge.WritableMap;
     * @return {@code true} if the audio route was updated successfully;
            notifyDevicesChanged();

        // Keep: Required for RN built in Event Emitter Calls.

     */
            mode = -1;
     */

        executor.execute(runnable);
        // Keep: Required for RN built in Event Emitter Calls.
     * @param runnable
        return NAME;
        JitsiMeetLogger.i(TAG + " Selected audio device: " + audioDevice);
        selectedDevice = null;
            }
    void resetAudioRoute() {
    void replaceDevices(Set<String> devices) {
import com.facebook.react.module.annotations.ReactModule;
    /**
     */
    static final String DEVICE_SPEAKER    = "SPEAKER";
         *
     * this module throughout the lifetime of the application.
     * Resets the current device selection.
         * Set the appropriate route for the given audio device.
        /**

     */
     * Sets whether ConnectionService should be used (if available) for setting the audio mode
     * Removes a device from the list of available devices.
        JitsiMeetLogger.i(TAG + "  audio disabled: " + disabled);
     */
    static final int VIDEO_CALL = 2;
     * Adds a new device to the list of available devices.
    /**
            }

     * @param mode the audio mode to be used when computing the audio route.
    }
import com.facebook.react.bridge.ReactApplicationContext;
        });
                WritableArray data = Arguments.createArray();
 * See the License for the specific language governing permissions and
     */
            availableDevices.clear();

        if (userSelectedDevice != null && availableDevices.contains(userSelectedDevice)) {
     */
            audioDevice = DEVICE_BLUETOOTH;

        }
        }
            promise.reject("setMode", "Invalid audio mode " + mode);
import java.util.Map;
 * the default audio device.
    /**
    /**
        if (audioDeviceHandler != null) {


        }
     *
    /**
         * @return Whether the operation was successful or not.
            return;
    public static final String NAME = "AudioMode";

    }
        runInAudioThread(new Runnable() {
        // If the previously selected device and the current default one

     */
 * builtin speaker is the default audio device.
         * @param device Audio device for which the route must be set.
     * Replaces the current list of available devices with a new one.
    /**
        // match, do nothing.
 *

     * could be updated successfully, and it will be rejected otherwise.
        });

import com.facebook.react.bridge.Promise;
    /**

 *
        }
        selectedDevice = audioDevice;

     * - AUDIO_CALL: Used for audio only calls. It will use the earpiece by
     * Audio mode currently in use.
                    }
                }


        resetSelectedDevice();
     */
        }
            promise.resolve(null);
    public void setMode(final int mode, final Promise promise) {
    @ReactMethod


                    if (hasHeadphones && device.equals(DEVICE_EARPIECE)) {

                    promise.reject("setMode", "Failed to set audio mode to " + mode);
         */
        });
         */
        super(reactContext);
                    success = updateAudioRoute(mode, false);
 * distributed under the License is distributed on an "AS IS" BASIS,
     *
     */
            @Override
        });
     * @param device the desired device which will become active.
     *   unless a wired or Bluetooth headset is connected.


    @ReactMethod
     * Whether or not the ConnectionService is used for selecting audio devices.
    }
                }
                currentActivity.setVolumeControlStream(AudioManager.USE_DEFAULT_STREAM_TYPE);
    @ReactMethod
    /**
    /**
import java.util.concurrent.Executors;
        runInAudioThread(new Runnable() {
     *
            @Override
     * @param promise a {@link Promise} which will be resolved if the audio mode
                    return;
     * Gets the currently selected audio device.
                        continue;
/**

 *

    @Override
    @ReactMethod

        boolean headsetAvailable = availableDevices.contains(DEVICE_HEADPHONES);

        }

    /**
     *
            @Override
    /**
    }

     *
     * is created.
                try {
                setAudioDeviceHandler();
                setAudioDeviceHandler();
 * Video calls should should use {@code AudioModeModule.VIDEO_CALL}, which uses
        boolean bluetoothAvailable = availableDevices.contains(DEVICE_BLUETOOTH);
     */
     * Whether or not audio is disabled.


            if (mode == DEFAULT) {
     *
     * - VIDEO_CALL: Used for video calls. It will use the speaker by default,
    private int mode = -1;

    }
     * Constants representing the audio mode.
    @ReactMethod
    public void removeListeners(Integer count) {
                getContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(DEVICE_CHANGE_EVENT, data);
     * Notifies JS land that the devices list has changed.
 *

        constants.put("AUDIO_CALL", AUDIO_CALL);
         */
    }
 * you may not use this file except in compliance with the License.
            } else {
            }
        // Pick the desired device based on what's available and the mode.
    /**
    }
            updateAudioRoute(mode, true);
    /**
     */
import com.facebook.react.modules.core.DeviceEventManagerModule;
        } else {
    static final String DEVICE_EARPIECE   = "EARPIECE";
    }
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        }
            }
        notifyDevicesChanged();

            audioDevice = userSelectedDevice;
     * thread.
                    deviceInfo.putBoolean("selected", device.equals(selectedDevice));
     * @param reactContext the {@link ReactApplicationContext} where this module
        /**
        audioManager = (AudioManager)reactContext.getSystemService(Context.AUDIO_SERVICE);
        resetSelectedDevice();
     * subsystem.
        availableDevices.remove(device);
import org.jitsi.meet.sdk.log.JitsiMeetLogger;
        }
    /**
    void runInAudioThread(Runnable runnable) {
     * @param device The new device.
import android.annotation.SuppressLint;
     */
        if (bluetoothAvailable) {

        if (!force && selectedDevice != null && selectedDevice.equals(audioDevice)) {
        return selectedDevice;
                    WritableMap deviceInfo = Arguments.createMap();
     */
    }
 *
        String audioDevice;
     * or not.
     */
     */
        constants.put("DEFAULT", DEFAULT);
            public void run() {


     * List of currently available audio devices.
        void setAudioRoute(String device);
        availableDevices = devices;
    /**
            @Override
    /**
                }
     */
    }
    static final String DEVICE_BLUETOOTH  = "BLUETOOTH";
 * Audio calls should use {@code AudioModeModule.AUDIO_CALL}, which uses the
    public void setDisabled(final boolean disabled, final Promise promise) {
    /**
        if (disabled) {
 * Copyright @ 2017-present 8x8, Inc.
    private AudioManager audioManager;
        if (audioDisabled == disabled) {
    public Map<String, Object> getConstants() {
                for (String device : availableDevices) {
     * {@link AudioManager} instance used to interact with the Android audio
     * Public method to set the current audio mode.
    static final int AUDIO_CALL = 1;
     * Gets a mapping with the constants this module is exporting.
    }
            audioDeviceHandler = new AudioDeviceHandlerGeneric(audioManager);

