    public void endCall(String callUUID) {
            }
        }
                            callUUID,

class RNConnectionService extends ReactContextBaseJavaModule {
                    // UnsupportedOperationException: System does not support feature android.software.connectionservice
            return;

package org.jitsi.meet.sdk;
        ConnectionService.setConnectionDisconnected(
     * be handled as part of the Exception try catch block and the Promise will
        for (ConnectionService.ConnectionImpl c
import com.facebook.react.modules.core.DeviceEventManagerModule;
    public void updateCall(String callUUID, ReadableMap callState) {
     */
            Promise promise) {
                } catch (Throwable tr1) {
import android.net.Uri;
            if (tm != null) {
    public void startCall(
    }
    static void setAudioRoute(int audioRoute) {
        PhoneAccountHandle accountHandle;
        return callAudioStateListener;
    /**
     */
        return sRNConnectionServiceInstance;
     */
            JitsiMeetLogger.e(tr, TAG + " error in startCall");
    }
     * Called by the JS side of things to mark the call as disconnected.
    /**
import com.facebook.react.bridge.ReactApplicationContext;
    public static final String NAME = "ConnectionService";
            promise.reject(tr);
    public void removeListeners(Integer count) {
import com.facebook.react.bridge.NativeModule;
import org.jitsi.meet.sdk.log.JitsiMeetLogger;
    RNConnectionService(ReactApplicationContext reactContext) {
    @ReactMethod
     *        a conference call.
            promise.reject("CONNECTION_NOT_FOUND_ERROR", "Connection wasn't found.");
    }
     * Called by the JS side of things to mark the call as failed.

     *
            hasVideo
        if (ConnectionService.setConnectionActive(callUUID)) {
    }

        }
     *        so that this method returns a Promise on the JS side.
 * @author Pawel Domas
    private CallAudioStateListener callAudioStateListener;

     *
    void emitEvent(


                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, data);
     * @param callUUID - the call's UUID.
                            TAG,
            String callUUID,
import android.os.Bundle;
            TelecomManager.EXTRA_START_CALL_WITH_VIDEO_STATE,
        sRNConnectionServiceInstance = this;
import com.facebook.react.bridge.Promise;

    public CallAudioStateListener getCallAudioStateListener() {
import android.content.Context;
        ConnectionService.registerStartCallPromise(callUUID, promise);
import androidx.annotation.Nullable;
                callUUID,
        } catch (Throwable tr) {
     */
        }
        Uri address = Uri.fromParts(PhoneAccount.SCHEME_SIP, handle, null);
        }
        if (callAudioStateListener != null) {

     */
import com.facebook.react.bridge.ReactContextBaseJavaModule;
    }
    @ReactMethod
    }
     * state. See static fields in {@link ConnectionService.ConnectionImpl}
                ? VideoProfile.STATE_BIDIRECTIONAL
    public void reportCallFailed(String callUUID) {
     * @param data {@code Object} optional ancillary data for the event.
        ConnectionService.setConnectionDisconnected(
                accountHandle);
     *
 * the Java Script API.
     * Called by the JS side of things to mark the call as active.
 */
     */
import android.telecom.PhoneAccountHandle;
        try {
@ReactModule(name = RNConnectionService.NAME)
    @ReactMethod
    /**




}
 * The react-native side of Jitsi Meet's {@link ConnectionService}. Exposes
            tm = (TelecomManager) ctx.getSystemService(Context.TELECOM_SERVICE);
                }

    public void reportConnectedOutgoingCall(String callUUID, Promise promise) {

                    // was observed here. Ignore.
import android.telecom.PhoneAccount;
                new DisconnectCause(DisconnectCause.ERROR));
        Bundle extras = new Bundle();
import android.telecom.TelecomManager;
    @Override

    }
        JitsiMeetLogger.d(TAG + " reportCallFailed " + callUUID);
        ReactApplicationContext ctx = getReactApplicationContext();

     * @param hasVideo - whether or not user starts with the video turned on.
        try {
                try {
     */
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
    }
        ReactContext reactContext = getReactApplicationContext();
import android.telecom.DisconnectCause;
     */
    public String getName() {

    static RNConnectionService getInstance() {
    }
                            handle,
            boolean hasVideo,
     * @param audioRoute the new audio route to be set. See
    }
    public void setCallAudioStateListener(CallAudioStateListener callAudioStateListener) {
    @SuppressLint("MissingPermission")
    }
                : VideoProfile.STATE_AUDIO_ONLY);
     *
        @Nullable Object data) {
    /**
import com.facebook.react.module.annotations.ReactModule;
    @ReactMethod
    void onCallAudioStateChange(android.telecom.CallAudioState callAudioState) {
        } catch (Throwable tr) {
     * and other modules such as {@link AudioModeModule}.
    interface CallAudioStateListener {
    }

    public void addListener(String eventName) {

     * implementation.
    }
     * Handler for dealing with call state changes. We are acting as a proxy between ConnectionService
import android.annotation.SuppressLint;

     * @param eventName {@code String} containing the event name.

    /**
                TelecomManager.EXTRA_PHONE_ACCOUNT_HANDLE,
     * Helper function to send an event to JavaScript.
    /**
        }
        ConnectionService.updateCall(callUUID, callState);

     * Starts a new outgoing call.
        this.callAudioStateListener = callAudioStateListener;

            callAudioStateListener.onCallAudioStateChange(callAudioState);
            ConnectionService.unregisterStartCallPromise(callUUID);
                callUUID,
        JitsiMeetLogger.d("%s startCall UUID=%s, h=%s, v=%s",
    @ReactMethod
     * @param callUUID - the call's UUID.
        extras.putInt(

            accountHandle
            reactContext
     */
     *
                            hasVideo);
        void onCallAudioStateChange(android.telecom.CallAudioState callAudioState);
import com.facebook.react.bridge.ReactContext;
     * call audio state changes.
        extras.putParcelable(
 *
     * Called by the JS side to update the call's state.
    /**
        String eventName,
     *
            String handle,
        return NAME;
            tm.placeCall(address, extras);
        }
     * NOTE regarding the "missingPermission" suppress - SecurityException will
            promise.resolve(null);
    @ReactMethod
     * prefixed with "KEY_" for the values supported by the Android
     * @param handle - a call handle which by default is Jitsi Meet room's URL.
    private static final String TAG = ConnectionService.TAG;

     * @param promise - the Promise instance passed by the React-native bridge,
                new DisconnectCause(DisconnectCause.LOCAL));
        // Keep: Required for RN built in Event Emitter Calls.

     * @param callUUID - the call's UUID.
import android.telecom.VideoProfile;
    @ReactMethod
     * Handler for call state changes. {@code ConnectionServiceImpl} will call this handler when the
    }
     * Sets the audio route on all existing {@link android.telecom.Connection}s
     * be rejected.
                : ConnectionService.getConnections()) {
        JitsiMeetLogger.d(TAG + " reportConnectedOutgoingCall " + callUUID);
        TelecomManager tm = null;
     *
/**
     * @param callAudioState The current call's audio state.
    /**
                    tm.unregisterPhoneAccount(accountHandle);
    /**
     *
    }
     * @param callUUID - unique call identifier assigned by Jitsi Meet to
    private static RNConnectionService sRNConnectionServiceInstance;
        } else {
            JitsiMeetLogger.e(tr, TAG + " error in startCall");
        // Keep: Required for RN built in Event Emitter Calls.
        if (reactContext != null) {
import androidx.annotation.RequiresApi;

            promise.reject(tr);

        super(reactContext);


            c.setAudioRoute(audioRoute);

     *
                = ConnectionService.registerPhoneAccount(getReactApplicationContext(), address, callUUID);
        JitsiMeetLogger.d(TAG + " endCall " + callUUID);
     * @param callState - the map which carries info about the current call's

     * {@link android.telecom.CallAudioState} constants prefixed with "ROUTE_".
     * @param callUUID - the call's UUID.
    }
