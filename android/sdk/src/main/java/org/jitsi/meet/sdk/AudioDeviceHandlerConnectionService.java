        if (mode != AudioModeModule.DEFAULT) {
     * {@link AudioManager} instance used to interact with the Android audio subsystem.
import com.facebook.react.bridge.ReactContext;
                return CallAudioState.ROUTE_SPEAKER;
    @Override
     *
            rcs = null;
    public void start(AudioModeModule audioModeModule) {
        if ((supportedRouteMask & CallAudioState.ROUTE_WIRED_HEADSET) == CallAudioState.ROUTE_WIRED_HEADSET) {
 * {@link AudioModeModule.AudioDeviceHandlerInterface} module implementing device handling for
            JitsiMeetLogger.w(TAG + " Couldn't set call audio state listener, module is null");
        }
            case AudioModeModule.DEVICE_HEADPHONES:
import org.jitsi.meet.sdk.log.JitsiMeetLogger;

     * the {@code availableDevices} on each update.
                    module.replaceDevices(devices);

 * Android versions >= O when ConnectionService is enabled.
     * {@link android.telecom.CallAudioState#getSupportedRouteMask()}.


 *
            try {
                return CallAudioState.ROUTE_EARPIECE;
        if (rcs != null) {

                boolean audioDevicesChanged = supportedRouteMask != newSupportedRoutes;
     */
    }
                return CallAudioState.ROUTE_SPEAKER;
    public boolean setMode(int mode) {
    @Override
    private final static String TAG = AudioDeviceHandlerConnectionService.class.getSimpleName();
        return true;
            }
     */
    @Override
        }
            devices.add(AudioModeModule.DEVICE_BLUETOOTH);
            default:
    /**
                    = audioDeviceToRouteInt(module.getSelectedDevice()) != state.getRoute();
        rcs = module.getContext().getNativeModule(RNConnectionService.class);
        }
class AudioDeviceHandlerConnectionService implements

        }
            case AudioModeModule.DEVICE_BLUETOOTH:
            @Override
    /**

    private int supportedRouteMask = -1;

 * limitations under the License.
import android.media.AudioManager;
import android.telecom.CallAudioState;
    private static int audioDeviceToRouteInt(String audioDevice) {
            public void run() {
            case AudioModeModule.DEVICE_SPEAKER:
                return CallAudioState.ROUTE_BLUETOOTH;
        } else {
import android.content.Context;

        }
        if ((supportedRouteMask & CallAudioState.ROUTE_EARPIECE) == CallAudioState.ROUTE_EARPIECE) {
    }
        Set<String> devices = new HashSet<>();
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * Unless required by applicable law or agreed to in writing, software
     * no match is found.
                    Set<String> devices = routesToDeviceNames(supportedRouteMask);
    }
                int newSupportedRoutes = state.getSupportedRouteMask();
    }
    /**
                }
    public void onCallAudioStateChange(final CallAudioState state) {
            devices.add(AudioModeModule.DEVICE_SPEAKER);

                audioManager.setMicrophoneMute(false);
                if (audioDevicesChanged) {
 * You may obtain a copy of the License at
        return devices;
                JitsiMeetLogger.e(TAG + " Unsupported device name: " + audioDevice);
        });
    public void setAudioRoute(String audioDevice) {
            return CallAudioState.ROUTE_SPEAKER;
     */
     * @return a list of device names.
/**
 * See the License for the specific language governing permissions and
        }
     * Used to store the most recently reported audio devices.
            }
import java.util.Set;
            case AudioModeModule.DEVICE_EARPIECE:
     * @param audioDevice one of the "DEVICE_" constants.
package org.jitsi.meet.sdk;
    /**

    /**
     * @param supportedRouteMask an integer coming from
 * Copyright @ 2017-present 8x8, Inc.
            devices.add(AudioModeModule.DEVICE_HEADPHONES);
 * you may not use this file except in compliance with the License.

        switch (audioDevice) {
        JitsiMeetLogger.i("Using " + TAG + " as the audio device handler");
}
                    module.updateAudioRoute();
 */
    }
            // observed not doing it.
        if ((supportedRouteMask & CallAudioState.ROUTE_SPEAKER) == CallAudioState.ROUTE_SPEAKER) {
    private RNConnectionService rcs;
        }
 */
     * Makes it easier to compare for a change, because the devices are stored
 * Licensed under the Apache License, Version 2.0 (the "License");
     * Reference to the main {@code AudioModeModule}.


    private static Set<String> routesToDeviceNames(int supportedRouteMask) {
 * distributed under the License is distributed on an "AS IS" BASIS,
 *     http://www.apache.org/licenses/LICENSE-2.0
     * @return a route number {@link android.telecom.CallAudioState#ROUTE_EARPIECE} if
                }
        this.audioManager = audioManager;

            JitsiMeetLogger.w(TAG + " Couldn't set call audio state listener, module is null");
                return CallAudioState.ROUTE_WIRED_HEADSET;
        } else {
            devices.add(AudioModeModule.DEVICE_EARPIECE);
    }
 *
                    supportedRouteMask = newSupportedRoutes;
    private AudioModeModule module;

        if (rcs != null) {
            rcs.setCallAudioStateListener(this);


        int newAudioRoute = audioDeviceToRouteInt(audioDevice);
import androidx.annotation.RequiresApi;
     */
     *
        AudioModeModule.AudioDeviceHandlerInterface,

        if (audioDevice == null) {
     */
    public void stop() {
                    JitsiMeetLogger.i(TAG + " Available audio devices: " + devices.toString());
        RNConnectionService.setAudioRoute(newAudioRoute);
        if ((supportedRouteMask & CallAudioState.ROUTE_BLUETOOTH) == CallAudioState.ROUTE_BLUETOOTH) {
        RNConnectionService.CallAudioStateListener {
 *
    @Override
    public AudioDeviceHandlerConnectionService(AudioManager audioManager) {
        }
        }
                if (audioRouteChanged || audioDevicesChanged) {
     * Converts any of the "DEVICE_" constants into the corresponding
     * {@link android.telecom.CallAudioState} "ROUTE_" number.
                JitsiMeetLogger.w(tr, TAG + " Failed to unmute the microphone");
                boolean audioRouteChanged
        module.runInAudioThread(new Runnable() {
                    module.resetSelectedDevice();
    }
    private AudioManager audioManager;

    }
     * as a mask in the {@link android.telecom.CallAudioState}. The mask is populated into

        module = audioModeModule;
            } catch (Throwable tr) {
            // This shouldn't be needed when using ConnectionService, but some devices have been


import java.util.HashSet;


/*
            rcs.setCallAudioStateListener(null);
     * Populates given route mask into the "DEVICE_" list.
