            .build()
            audioManager.abandonAudioFocus(this);
                            module.resetAudioRoute();
                        devices.add(AudioModeModule.DEVICE_HEADPHONES);

     * @param enabled true if Bluetooth should use used, false otherwise.
    /**
                    }
    private static final int TYPE_HEARING_AID = 23;
    private void onAudioDeviceChange() {
import android.media.AudioDeviceInfo;
                        devices.add(AudioModeModule.DEVICE_BLUETOOTH);
    /**
    }
    public AudioDeviceHandlerGeneric(AudioManager audioManager) {
            @Override
            .setAudioAttributes(
    }
                        break;
    @Override
     *
                    .setContentType(AudioAttributes.CONTENT_TYPE_SPEECH)
                        break;
        // Turn speaker on / off
                    case AudioManager.AUDIOFOCUS_GAIN: {
                    case AudioManager.AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK: {
    private AudioManager audioManager;
import android.media.AudioManager;
            audioManager.setBluetoothScoOn(true);
        @Override
     * {@link AudioManager} instance used to interact with the Android audio

                }
            for (AudioDeviceInfo info: deviceInfos) {
        }
            public void onAudioDevicesAdded(
            JitsiMeetLogger.w(TAG + " Audio focus request failed");

 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        audioManager.setMicrophoneMute(false);
        }
        module = audioModeModule;
 * See the License for the specific language governing permissions and
                        }
            }
    @Override
     * subsystem.
        };
                        JitsiMeetLogger.d(TAG + " Audio focus lost");
        }
        );
                        audioFocusLost = false;
            audioManager.setMode(AudioManager.MODE_NORMAL);

                onAudioDeviceChange();
    /**
     * makes sure the operation is performed on the audio thread.
            setBluetoothAudioRoute(false);
     * Indicator that we have lost audio focus.
                        break;
            audioManager.startBluetoothSco();
                    case AudioManager.AUDIOFOCUS_LOSS:

        // Setup runtime device change detection.

        setBluetoothAudioRoute(device.equals(AudioModeModule.DEVICE_BLUETOOTH));
                AudioDeviceInfo[] addedDevices) {
import android.media.AudioFocusRequest;
        // Do an initial detection.
                        // Some other application potentially stole our audio focus
    private final static String TAG = AudioDeviceHandlerGeneric.class.getSimpleName();
                    case AudioDeviceInfo.TYPE_HDMI:
 *
                switch (info.getType()) {

    /**
     */


     */
                    case AudioManager.AUDIOFOCUS_LOSS_TRANSIENT:
 * You may obtain a copy of the License at
            public void run() {

                        break;
    @Override
import android.media.AudioAttributes;
/**
    public void stop() {

                onAudioDeviceChange();
    public boolean setMode(int mode) {

            Set<String> devices = new HashSet<>();
                        // temporarily. Restore our mode.
        AudioModeModule.AudioDeviceHandlerInterface,
            return true;
                    .build()
     */


    private final Runnable onAudioDeviceChangeRunner = new Runnable() {
                }
                    case AudioDeviceInfo.TYPE_WIRED_HEADPHONES:
 * you may not use this file except in compliance with the License.
        });
        }
        audioManager.setMode(AudioManager.MODE_IN_COMMUNICATION);
     */
 * Copyright @ 2017-present 8x8, Inc.
     */
            module.replaceDevices(devices);
import java.util.HashSet;
 * can be disabled.
        this.audioManager = audioManager;
            @Override
                        devices.add(AudioModeModule.DEVICE_SPEAKER);
     *
        AudioManager.OnAudioFocusChangeListener {
import java.util.Set;
            )
     */
        if (gotFocus == AudioManager.AUDIOFOCUS_REQUEST_FAILED) {
    @Override
    public void start(AudioModeModule audioModeModule) {
    private static final int TYPE_USB_HEADSET = 22;
            audioFocusLost = false;



    private AudioModeModule module;
     */
 *
     * {@link Runnable} for running audio device detection in the audio thread.
    private boolean audioFocusLost = false;
                    case AudioDeviceInfo.TYPE_BUILTIN_EARPIECE:
                JitsiMeetLogger.d(TAG + " Audio devices removed");
    /**
                new AudioAttributes.Builder()
 * {@link AudioModeModule.AudioDeviceHandlerInterface} module implementing device handling for


    private final android.media.AudioDeviceCallback audioDeviceCallback =
     * The value of: AudioDeviceInfo.TYPE_USB_HEADSET

package org.jitsi.meet.sdk;
     * The value of: AudioDeviceInfo.TYPE_HEARING_AID
            .setAcceptsDelayedFocusGain(true)
                        break;

    }
            }
    }
     * This is only used on Android >= M.
            audioManager.stopBluetoothSco();

    public void onAudioFocusChange(final int focusChange) {
        return true;
                        devices.add(AudioModeModule.DEVICE_EARPIECE);
}
    @Override
 *     http://www.apache.org/licenses/LICENSE-2.0
     * @param focusChange - The type of focus change.

                    .setUsage(AudioAttributes.USAGE_VOICE_COMMUNICATION)
        module.runInAudioThread(onAudioDeviceChangeRunner);
        public void run() {
            }
    }
            }
            .setOnAudioFocusChangeListener(this)
    private void setBluetoothAudioRoute(boolean enabled) {
            return false;
 * Unless required by applicable law or agreed to in writing, software
 * all post-M Android versions. This handler can be used on any Android versions >= M, but by

    /**
                        JitsiMeetLogger.d(TAG + " Audio focus gained");
        if (mode == AudioModeModule.DEFAULT) {
     * {@link AudioManager.OnAudioFocusChangeListener} interface method. Called

            JitsiMeetLogger.i(TAG + " Available audio devices: " + devices.toString());
                switch (focusChange) {


    }
        audioManager.registerAudioDeviceCallback(audioDeviceCallback, null);
 * limitations under the License.

    };
                AudioDeviceInfo[] removedDevices) {
    /**
        new android.media.AudioDeviceCallback() {
     * when the audio focus of the system is updated.
            audioManager.setSpeakerphoneOn(false);
 * Licensed under the Apache License, Version 2.0 (the "License");
    public void setAudioRoute(String device) {

 */
class AudioDeviceHandlerGeneric implements
    }
        audioManager.unregisterAudioDeviceCallback(audioDeviceCallback);
     */
     */
            module.updateAudioRoute();
                    case AudioDeviceInfo.TYPE_BLUETOOTH_SCO:
        // Turn bluetooth on / off
                    case TYPE_USB_HEADSET:
     * Constant defining a Hearing Aid. Only available on API level >= 28.
                JitsiMeetLogger.d(TAG + " Audio devices added");
        onAudioDeviceChange();
     * Constant defining a USB headset. Only available on API level >= 26.
 *
     * Helper method to set the output route to a Bluetooth device.

        audioManager.setSpeakerphoneOn(device.equals(AudioModeModule.DEVICE_SPEAKER));

/*
                    }

    }
     * Reference to the main {@code AudioModeModule}.

        int gotFocus = audioManager.requestAudioFocus(new AudioFocusRequest.Builder(AudioManager.AUDIOFOCUS_GAIN)
 */

        module.runInAudioThread(new Runnable() {
            @Override
                    case AudioDeviceInfo.TYPE_WIRED_HEADSET:

    /**
        } else {
                        audioFocusLost = true;
 * distributed under the License is distributed on an "AS IS" BASIS,
                    case TYPE_HEARING_AID:
import org.jitsi.meet.sdk.log.JitsiMeetLogger;
            AudioDeviceInfo[] deviceInfos = audioManager.getDevices(AudioManager.GET_DEVICES_ALL);
            audioManager.setBluetoothScoOn(false);

            public void onAudioDevicesRemoved(
                    case AudioDeviceInfo.TYPE_BUILTIN_SPEAKER:
    /**
     * Helper method to trigger an audio route update when devices change. It
        if (enabled) {
                        break;
 * default it's only used on versions < O, since versions >= O use ConnectionService, but it
                        if (audioFocusLost) {
        JitsiMeetLogger.i("Using " + TAG + " as the audio device handler");
