     * Connection implementation for Jitsi Meet's {@link ConnectionService}.
                        "CREATE_OUTGOING_CALL_FAILED",
            // side the calls would be cleaned up by the system they would still
            PhoneAccountHandle accountHandle, ConnectionRequest request) {
            return String.format(
            // What ?! Android will still call this method even if we do not add
     * @param callState a map which carries the properties to be modified. See

         * Called when system wants to disconnect the call.
import android.content.ComponentName;
    }

     *

            this.onAbort();
    }
    }
            if (startCallPromise != null) {

        public String toString() {

            // Note that the connection is not removed from the list here, but
            }
import android.telecom.PhoneAccount;
        public void onCallAudioStateChanged(CallAudioState state) {
        Bundle moreExtras = new Bundle();
     * Registers a start call promise.

            // 'endCall', so the Connection must be removed immediately.
 * never be used directly.

    }
 * writing it implements only the outgoing call scenario.
        } else {
     */
        @Override

     * @return {@link PhoneAccountHandle} described by the given arguments.
        /**
import com.facebook.react.bridge.WritableNativeMap;
        PhoneAccountHandle theAccountHandle = request.getAccountHandle();
        }
            JitsiMeetLogger.d(TAG + " onCallAudioStateChanged: " + state);
                    getCallUUID(),
                    ConnectionService.EXTRA_PHONE_ACCOUNT_HANDLE);
            }
     * @return {@code true} if running a Samsung device.
import java.util.HashMap;


     *
                connection.setVideoState(
                        "The request has been denied by the system");
     */
            = new HashMap<>();
            request.getAddress(),

            RNConnectionService.getInstance().emitEvent(
        }

         * @param state - the new connection's state.
    /**
                    "org.jitsi.meet:features/connection_service#abort",
     * @param address the phone account's address. At the time of this writing
     */
                .setAddress(address)
            JitsiMeetLogger.e(TAG + " onCreateOutgoingConnectionFailed - no call UUID");
        telecomManager.registerPhoneAccount(account);
     * {@link android.telecom.Connection#STATE_ACTIVE}.
    }
    }
import java.util.Map;
    static PhoneAccountHandle registerPhoneAccount(
            data.putString("callUUID", getCallUUID());
        public void onAbort() {
         */
         * The constant which defines the key for the "has video" property.
                .setCapabilities(PhoneAccount.CAPABILITY_SELF_MANAGED |
     * be freed on the system in case of fatal error.
         */
import android.telecom.ConnectionRequest;
    static void abortConnections() {
        TelecomManager telecom = getSystemService(TelecomManager.class);
import android.telecom.DisconnectCause;
        connection.setAddress(
                    new DisconnectCause(DisconnectCause.CANCELED));
     *        "KEY_*" constants in {@link ConnectionImpl} for the list of keys.
         *
        }
                module.onCallAudioStateChange(state);
        PhoneAccount.Builder builder
        Promise startCallPromise
     */
import com.facebook.react.bridge.Promise;
    /**
            startCallPromise.resolve(null);
        }
        /**
        return connection;
         * Called when there's change to the call audio state. Either by
        if (connection != null) {
            if (isSamsungDevice()) {
        connection.putExtras(moreExtras);
import androidx.annotation.RequiresApi;

     *        It will be used as the account's id.
import java.util.List;
    }


     *
         *
        JitsiMeetLogger.e(TAG + " onCreateOutgoingConnectionFailed " + callUUID);
 * NOTE the class needs to be public, but is not part of the SDK API and should
        connection.setVideoState(request.getVideoState());

                removeConnection(this);
            JitsiMeetLogger.e(TAG + " endCall no connection for UUID: " + callUUID);
     * {@link android.telecom.Connection#STATE_DISCONNECTED}.
            EXTRA_PHONE_ACCOUNT_HANDLE,

                JitsiMeetLogger.i(" %s updateCall: %s hasVideo: %s", TAG, callUUID, hasVideo);
         *
            setConnectionDisconnected(
        moreExtras.putParcelable(

            JitsiMeetLogger.i(TAG + " onAbort " + getCallUUID());
        }
        /**
    /**
            = new HashMap<>();

                    getCallUUID(),

        @Override
    class ConnectionImpl extends Connection {
    }
    /**
 */
                    new ComponentName(context, ConnectionService.class),
    static void setConnectionDisconnected(String callUUID, DisconnectCause cause) {
        }
     * Registers new {@link PhoneAccountHandle}.
        ConnectionImpl connection = connections.get(callUUID);
         * Unregisters the account when the call is disconnected.
 * Jitsi Meet implementation of {@link ConnectionService}. At the time of this
            if (module != null) {
            // The JavaScript side will not go back to the native with
            RNConnectionService.getInstance().emitEvent(
                        = callState.getBoolean(ConnectionImpl.KEY_HAS_VIDEO);
import android.telecom.CallAudioState;
        if (connection != null) {
        } else {
    public void onCreateIncomingConnectionFailed(
     * Returns all {@link ConnectionImpl} instances held in this list.
     */
        @Override

        /**

        /**

            }
            return getExtras().getParcelable(
         * {@inheritDoc}
    public void onCreateOutgoingConnectionFailed(
                    callUUID);

        = "org.jitsi.meet.sdk.connection_service.PHONE_ACCOUNT_HANDLE";
import android.telecom.TelecomManager;
         *

     * @param connection - {@link ConnectionImpl}
        connections.put(connection.getCallUUID(), connection);
            // The JavaScript side will not go back to the native with

    @Override


            Promise startCallPromise = unregisterStartCallPromise(callUUID);
     */
         * {@inheritDoc}
            connection.setDisconnected(cause);
         * Retrieves the UUID of the call associated with this connection.
    static void removeConnection(ConnectionImpl connection) {
            JitsiMeetLogger.w("%s setConnectionActive - no connection for UUID: %s", TAG, callUUID);
         */
                JitsiMeetLogger.e(TAG + " unregisterPhoneAccount - account handle is null");
                    data);
                        hasVideo
        TelecomManager telecomManager
                                : VideoProfile.STATE_AUDIO_ONLY);
            if (callState.hasKey(ConnectionImpl.KEY_HAS_VIDEO)) {
            }
     * {@link ConnectionRequest} which stores the {@link PhoneAccountHandle}
     * @param uuid the call UUID which identifies the call to which the promise
         * @param state the new {@link CallAudioState}
public class ConnectionService extends android.telecom.ConnectionService {

     * created for the call.
import android.telecom.VideoProfile;
    }
import org.jitsi.meet.sdk.log.JitsiMeetLogger;
import android.telecom.Connection;
            // approach, because in case the app would crash on the JavaScript
        PhoneAccount account = builder.build();
                        PhoneAccount.CAPABILITY_VIDEO_CALLING |
     *
    static final String TAG = "JitsiConnectionService";
 *
    static final String EXTRA_PHONE_ACCOUNT_HANDLE
        }
import android.content.Context;
        ConnectionImpl connection = connections.get(callUUID);
     * @param callUUID the call UUID which identifies the connection.
            return true;
     */
     * @param connection - {@link ConnectionImpl}
                    getAddress(), getCallUUID(), hashCode());
            if (phoneAccountHandle != null) {
     * @return Whether the connection was set as active or not.
/**
        // NOTE there's a time gap between the placeCall and this callback when
         * the system after the connection is initialized or in response to
            = new PhoneAccountHandle(

}
                // Required to release the audio focus correctly.
import android.os.Bundle;
            JitsiMeetLogger.e(TAG + " unregisterPhoneAccount - telecom is null");
    }
            }
    static void updateCall(String callUUID, ReadableMap callState) {
    /**
        static final String KEY_HAS_VIDEO = "hasVideo";
        /**

        }
    /**
        connection.setConnectionProperties(Connection.PROPERTY_SELF_MANAGED);

        public void onHold() {
        String callUUID = theAccountHandle.getId();
            } else {
    @Override

            JitsiMeetLogger.d(TAG + " onCreateOutgoingConnection " + connection.getCallUUID());

            // the HOLD capability, so do the same thing as on abort.

import java.util.ArrayList;

        addConnection(connection);

     * Tag used for logging.
     * Removes {@link ConnectionImpl} from the list.
        connections.remove(connection.getCallUUID());
        @Override
     * rejected or resolved.
     *
    public Connection onCreateOutgoingConnection(
                    "ConnectionImpl[address=%s, uuid=%s]@%d",
package org.jitsi.meet.sdk;
     */
    /**
            // 'endCall', so the Connection must be removed immediately.
                                ? VideoProfile.STATE_BIDIRECTIONAL
            JitsiMeetLogger.w(TAG + " onHold %s - HOLD is not supported, aborting the call...", getCallUUID());

    }
            WritableNativeMap data = new WritableNativeMap();
    @Override
    }
            PhoneAccountHandle accountHandle, ConnectionRequest request) {
     *
     * @param callUUID the call's UUID for which the account is to be created.
     *
        } else {
        unregisterPhoneAccount(theAccountHandle);
     * Used to adjusts the connection's state to
     * The extra added to the {@link ConnectionImpl} and
    static void registerStartCallPromise(String uuid, Promise promise) {
        return phoneAccountHandle;
        String getCallUUID() {

            PhoneAccountHandle accountHandle, ConnectionRequest request) {
            JitsiMeetLogger.e(
     *
        private PhoneAccountHandle getPhoneAccountHandle() {

        connection.setExtras(request.getExtras());
     */

     * Aborts all ongoing connections. This is a last resort mechanism which forces all resources to
        }
     * The start call Promises mapped by call UUID.
     * @param cause disconnection reason.
        // the JavaScript side there's a logic to sync up in .then() callback.

                telecom.unregisterPhoneAccount(phoneAccountHandle);
        return startCallPromises.remove(uuid);
    static List<ConnectionImpl> getConnections() {
     */
                    data);
        ConnectionImpl connection = connections.get(callUUID);
import java.util.Objects;

            = unregisterStartCallPromise(connection.getCallUUID());
                unregisterPhoneAccount(getPhoneAccountHandle());
    }
            PhoneAccountHandle accountHandle, ConnectionRequest request) {
            // TODO implement HOLD
         */
        return android.os.Build.MANUFACTURER.toLowerCase().contains("samsung");
            JitsiMeetLogger.d(
     */

     * Used to adjusts the connection's state to
    /**
    /**
     * @param context the current Android context.
        PhoneAccountHandle phoneAccountHandle
    /**
    /**
         */
    }
        ConnectionImpl connection = new ConnectionImpl();
    }
            connection.setActive();
     */
            Context context, Uri address, String callUUID) {
        if (telecom != null) {
     * @author Pawel Domas
                    new DisconnectCause(DisconnectCause.LOCAL));
         *
            data.putString("callUUID", getCallUUID());
        for (ConnectionImpl connection: getConnections()) {

            RNConnectionService module = RNConnectionService.getInstance();
    /**
     */
                    "org.jitsi.meet:features/connection_service#disconnect",
     * Used to adjusts the call's state.

            TelecomManager.PRESENTATION_UNKNOWN);
         * @return call UUID
    /**
     * @param callUUID the call UUID which identifies the connection.
         * Called when system wants to abort the call.
            JitsiMeetLogger.e(TAG + " updateCall no connection for UUID: " + callUUID);

     * Connections mapped by call UUID.
    /**

        if (connection != null) {
     *
     * @return the unregistered Promise instance or <tt>null</tt> if there
                TAG + " onCreateOutgoingConnection: no start call Promise for " + connection.getCallUUID());
            }
    /**
        } else {
    static boolean isSamsungDevice() {
         * the argument of the {@link RNConnectionService#updateCall} method.
                        | Connection.PROPERTY_IS_EXTERNAL_CALL);
     *         wasn't any for the given call UUID.
                connection.setOnHold();
                boolean hasVideo
        if (callUUID != null) {
            JitsiMeetLogger.i(TAG + " onDisconnect " + getCallUUID());

         */
        public void onStateChanged(int state) {
        }
     *
            WritableNativeMap data = new WritableNativeMap();
        }
     * @param uuid - the call UUID to which the start call promise belongs to.
                        PhoneAccount.CAPABILITY_SUPPORTS_VIDEO_CALLING)
                .addSupportedUriScheme(PhoneAccount.SCHEME_SIP);
import android.os.Build;

        return new ArrayList<>(connections.values());
    @Override
        } else {
                // Prevents from including in the native phone calls history

    static boolean setConnectionActive(String callUUID) {
    static void addConnection(ConnectionImpl connection) {
     * @return a list of {@link ConnectionImpl}.
                startCallPromise.reject(
            return getPhoneAccountHandle().getId();

        throw new RuntimeException("Not implemented");
                    Connection.PROPERTY_SELF_MANAGED

     * @param callUUID the call UUID which identifies the connection.
            connection.destroy();

import android.telecom.PhoneAccountHandle;
            if (state == STATE_DISCONNECTED) {
        public void onDisconnect() {
    }
        @Override
        } else {
         * The key is used in the map which carries the call's state passed as
            // be removed from the ConnectionList.

            // in ConnectionImpl's state changed callback. It's a safer
        startCallPromises.put(uuid, promise);
     * Adds {@link ConnectionImpl} to the list.
    private void unregisterPhoneAccount(PhoneAccountHandle phoneAccountHandle) {
 * @author Pawel Domas

    static private final Map<String, ConnectionImpl> connections
    public Connection onCreateIncomingConnection(
                connection.setConnectionProperties(
        // things could get out of sync, but they are put back in sync once
     *        belongs to.
     */
        if (startCallPromise != null) {
        // the startCall Promise is resolved below. That's because on
                "%s onStateChanged: %s %s", TAG, Connection.stateToString(state), getCallUUID());
        throw new RuntimeException("Not implemented");
     *        it's the call handle passed from the Java Script side.
    static private final HashMap<String, Promise> startCallPromises
            setConnectionDisconnected(
        }
    /**
    static Promise unregisterStartCallPromise(String uuid) {
import com.facebook.react.bridge.ReadableMap;
        }
        connection.setAudioModeIsVoip(true);
    }
            return false;
     */
                JitsiMeetLogger.e(TAG + " startCallFailed - no start call Promise for UUID: " + callUUID);
     * Unregisters a start call promise. Must be called after the Promise is
import android.net.Uri;
        }
        }
         * {@link #setAudioRoute(int)}.
     * @param promise - the Promise instance to be stored for later use.
        @Override
            = context.getSystemService(TelecomManager.class);
     */
            } else {
 *
            = PhoneAccount.builder(phoneAccountHandle, address.toString())
            connection.onAbort();


            Objects.requireNonNull(request.getAccountHandle(), "accountHandle"));
