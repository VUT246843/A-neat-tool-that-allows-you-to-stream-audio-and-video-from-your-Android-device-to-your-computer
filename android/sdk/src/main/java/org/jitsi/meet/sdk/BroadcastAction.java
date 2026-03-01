    public BroadcastAction(Intent intent) {
    public Bundle getData() {
package org.jitsi.meet.sdk;
        TOGGLE_SCREEN_SHARE("org.jitsi.meet.TOGGLE_SCREEN_SHARE"),
        return this.type;
            return action;
import android.os.Bundle;
        RETRIEVE_PARTICIPANTS_INFO("org.jitsi.meet.RETRIEVE_PARTICIPANTS_INFO"),
        this.type = Type.buildTypeFromAction(intent.getAction());
        HIDE_NOTIFICATION("org.jitsi.meet.HIDE_NOTIFICATION"),
            for (Type type : Type.values()) {
        SEND_CAMERA_FACING_MODE_MESSAGE("org.jitsi.meet.SEND_CAMERA_FACING_MODE_MESSAGE");
                if (type.action.equalsIgnoreCase(action)) {
    private final Type type;
        TOGGLE_CAMERA("org.jitsi.meet.TOGGLE_CAMERA"),
        OVERWRITE_CONFIG("org.jitsi.meet.OVERWRITE_CONFIG"),
    }
    private static final String TAG = BroadcastAction.class.getSimpleName();

        return this.data;


        }

            }
        Type(String action) {
        HANG_UP("org.jitsi.meet.HANG_UP"),
        SEND_CHAT_MESSAGE("org.jitsi.meet.SEND_CHAT_MESSAGE"),


    }
/**
        private static Type buildTypeFromAction(String action) {
        }
        }
        SEND_ENDPOINT_TEXT_MESSAGE("org.jitsi.meet.SEND_ENDPOINT_TEXT_MESSAGE"),


 */
            return null;
public class BroadcastAction {
        CLOSE_CHAT("org.jitsi.meet.CLOSE_CHAT"),
        this.data = intent.getExtras();
}
        private final String action;
    }
                    return type;
    public Type getType() {
    private final Bundle data;
        START_RECORDING("org.jitsi.meet.START_RECORDING"),

 * Wraps the name and extra data for events that were broadcasted locally.
import android.content.Intent;
            this.action = action;
        SET_VIDEO_MUTED("org.jitsi.meet.SET_VIDEO_MUTED"),
                }
        SET_AUDIO_MUTED("org.jitsi.meet.SET_AUDIO_MUTED"),
    }
        SET_CLOSED_CAPTIONS_ENABLED("org.jitsi.meet.SET_CLOSED_CAPTIONS_ENABLED"),
        OPEN_CHAT("org.jitsi.meet.OPEN_CHAT"),

    enum Type {
        SHOW_NOTIFICATION("org.jitsi.meet.SHOW_NOTIFICATION"),
        public String getAction() {

        STOP_RECORDING("org.jitsi.meet.STOP_RECORDING"),
