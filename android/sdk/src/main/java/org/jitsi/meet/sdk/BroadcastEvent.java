        private static final String CONFERENCE_JOINED_NAME = "CONFERENCE_JOINED";

    }
        }
        ENDPOINT_TEXT_MESSAGE_RECEIVED("org.jitsi.meet.ENDPOINT_TEXT_MESSAGE_RECEIVED"),
                case CUSTOM_BUTTON_PRESSED_NAME:
                for (String key : bundle.keySet()) {
                    return CONFERENCE_JOINED;

        TRANSCRIPTION_CHUNK_RECEIVED("org.jitsi.meet.TRANSCRIPTION_CHUNK_RECEIVED"),
                try {
        private static Type buildTypeFromName(String name) {

        private static final String RECORDING_STATUS_CHANGED_NAME = "RECORDING_STATUS_CHANGED";
                    map.put(key, bundle.get(key));

                case RECORDING_STATUS_CHANGED_NAME:

    public Intent buildIntent() {
        }
        CUSTOM_BUTTON_PRESSED("org.jitsi.meet.CUSTOM_BUTTON_PRESSED"),
        }
        CONFERENCE_BLURRED("org.jitsi.meet.CONFERENCE_BLURRED"),
        CONFERENCE_UNIQUE_ID_SET("org.jitsi.meet.CONFERENCE_UNIQUE_ID_SET"),
        Type(String action) {
        RECORDING_STATUS_CHANGED("org.jitsi.meet.RECORDING_STATUS_CHANGED");
    }
import android.os.Bundle;
}
    private final HashMap<String, Object> data;
            return action;
            }
    }
            try {
                    return CHAT_TOGGLED;

                    return CUSTOM_BUTTON_PRESSED;
                case AUDIO_MUTED_CHANGED_NAME:
                case CONFERENCE_FOCUSED_NAME:
    private final Type type;
        if (bundle != null) {
                HashMap<String, Object> map = new HashMap<>();
                case CONFERENCE_UNIQUE_ID_SET_NAME:
                case CONFERENCE_BLURRED_NAME:
        CONFERENCE_TERMINATED("org.jitsi.meet.CONFERENCE_TERMINATED"),
        private static final String VIDEO_MUTED_CHANGED_NAME = "VIDEO_MUTED_CHANGED";
                    return CONFERENCE_BLURRED;
            return null;
        private static final String PARTICIPANTS_INFO_RETRIEVED_NAME = "PARTICIPANTS_INFO_RETRIEVED";
        VIDEO_MUTED_CHANGED("org.jitsi.meet.VIDEO_MUTED_CHANGED"),
            }
 * to be broadcasted.
            return null;
    public Type getType() {
        private static final String PARTICIPANT_LEFT_NAME = "PARTICIPANT_LEFT";

                case CHAT_TOGGLED_NAME:
            return intent;
                    return READY_TO_CLOSE;

    }
        private static final String CHAT_TOGGLED_NAME = "CHAT_TOGGLED";

        }
        return null;
                }
        private final String action;

        this.type = Type.buildTypeFromName(name);
import com.facebook.react.bridge.ReadableMap;

            this.action = action;
                case CHAT_MESSAGE_RECEIVED_NAME:

        return null;

        if (type != null && type.action != null) {
                    return RECORDING_STATUS_CHANGED;
        SCREEN_SHARE_TOGGLED("org.jitsi.meet.SCREEN_SHARE_TOGGLED"),
        this.type = Type.buildTypeFromAction(intent.getAction());
                } catch (Exception e) {
        private static final String SCREEN_SHARE_TOGGLED_NAME = "SCREEN_SHARE_TOGGLED";

        PARTICIPANT_JOINED("org.jitsi.meet.PARTICIPANT_JOINED"),
        private static final String CONFERENCE_WILL_JOIN_NAME = "CONFERENCE_WILL_JOIN";

                    return TRANSCRIPTION_CHUNK_RECEIVED;
                case CONFERENCE_WILL_JOIN_NAME:
                }
            switch (name) {
                    return CHAT_MESSAGE_RECEIVED;
import android.content.Intent;
                case PARTICIPANT_JOINED_NAME:
    public HashMap<String, Object> getData() {
package org.jitsi.meet.sdk;
                    return CONFERENCE_TERMINATED;
            for (String key : this.data.keySet()) {
            }
public class BroadcastEvent {
        }
        private static final String CONFERENCE_BLURRED_NAME = "CONFERENCE_BLURRED";

                    return VIDEO_MUTED_CHANGED;
        private static Type buildTypeFromAction(String action) {
                case READY_TO_CLOSE_NAME:
    public BroadcastEvent(Intent intent) {
        PARTICIPANT_LEFT("org.jitsi.meet.PARTICIPANT_LEFT"),
        public String getAction() {
                case ENDPOINT_TEXT_MESSAGE_RECEIVED_NAME:
import org.jitsi.meet.sdk.log.JitsiMeetLogger;
        private static final String CHAT_MESSAGE_RECEIVED_NAME = "CHAT_MESSAGE_RECEIVED";
                if (type.action.equalsIgnoreCase(action)) {
        private static final String PARTICIPANT_JOINED_NAME = "PARTICIPANT_JOINED";
        return this.data;
                    return CONFERENCE_FOCUSED;
                case PARTICIPANTS_INFO_RETRIEVED_NAME:
    }

/**
    public enum Type {
 */
            } catch (Exception e) {
                    return PARTICIPANT_LEFT;
        CHAT_TOGGLED("org.jitsi.meet.CHAT_TOGGLED"),
        private static final String CUSTOM_BUTTON_PRESSED_NAME = "CUSTOM_BUTTON_PRESSED";

        READY_TO_CLOSE("org.jitsi.meet.READY_TO_CLOSE"),
        private static final String AUDIO_MUTED_CHANGED_NAME = "AUDIO_MUTED_CHANGED";


    private static HashMap<String, Object> buildDataFromBundle(Bundle bundle) {
                JitsiMeetLogger.w(TAG + " invalid extra data", e);
                    intent.putExtra(key, this.data.get(key).toString());
        private static final String ENDPOINT_TEXT_MESSAGE_RECEIVED_NAME = "ENDPOINT_TEXT_MESSAGE_RECEIVED";
                case CONFERENCE_JOINED_NAME:
import java.util.HashMap;

                case TRANSCRIPTION_CHUNK_RECEIVED_NAME:
        private static final String READY_TO_CLOSE_NAME = "READY_TO_CLOSE";
        this.data = data.toHashMap();
        private static final String TRANSCRIPTION_CHUNK_RECEIVED_NAME = "TRANSCRIPTION_CHUNK_RECEIVED";
        private static final String CONFERENCE_FOCUSED_NAME = "CONFERENCE_FOCUSED";

        private static final String CONFERENCE_UNIQUE_ID_SET_NAME = "CONFERENCE_UNIQUE_ID_SET";
    }
 * Wraps the name and extra data for the events that occur on the JS side and are
    }
                    return PARTICIPANTS_INFO_RETRIEVED;


        return this.type;
                case VIDEO_MUTED_CHANGED_NAME:
        CONFERENCE_WILL_JOIN("org.jitsi.meet.CONFERENCE_WILL_JOIN"),
            for (Type type : Type.values()) {
                case CONFERENCE_TERMINATED_NAME:
                    return CONFERENCE_UNIQUE_ID_SET;
                    return CONFERENCE_WILL_JOIN;
                    JitsiMeetLogger.w(TAG + " invalid extra data in event", e);
                    return AUDIO_MUTED_CHANGED;

    private static final String TAG = BroadcastEvent.class.getSimpleName();

                    return PARTICIPANT_JOINED;
        private static final String CONFERENCE_TERMINATED_NAME = "CONFERENCE_TERMINATED";
        PARTICIPANTS_INFO_RETRIEVED("org.jitsi.meet.PARTICIPANTS_INFO_RETRIEVED"),
        CONFERENCE_FOCUSED("org.jitsi.meet.CONFERENCE_FOCUSED"),
                return map;
                    return ENDPOINT_TEXT_MESSAGE_RECEIVED;
        CONFERENCE_JOINED("org.jitsi.meet.CONFERENCE_JOINED"),
            Intent intent = new Intent(type.action);
        CHAT_MESSAGE_RECEIVED("org.jitsi.meet.CHAT_MESSAGE_RECEIVED"),
                }
                case PARTICIPANT_LEFT_NAME:
        AUDIO_MUTED_CHANGED("org.jitsi.meet.AUDIO_MUTED_CHANGED"),
    public BroadcastEvent(String name, ReadableMap data) {
            }

                case SCREEN_SHARE_TOGGLED_NAME:
        this.data = buildDataFromBundle(intent.getExtras());
                    return type;
                    return SCREEN_SHARE_TOGGLED;
        }
