        Intent intent = new Intent(BroadcastAction.Type.OVERWRITE_CONFIG.getAction());
        return intent;
        intent.putExtra("mode", mode.getMode());
        Intent intent = new Intent(BroadcastAction.Type.OPEN_CHAT.getAction());
        String rtmpBroadcastID,

        RecordingMode mode,

        return new Intent(BroadcastAction.Type.HANG_UP.getAction());
        String youtubeBroadcastID,

        boolean shouldShare,
        return intent;
        intent.putExtra("youtubeStreamKey", youtubeStreamKey);
        Intent intent = new Intent(BroadcastAction.Type.START_RECORDING.getAction());
        FILE("file"),
        return intent;
    }
        intent.putExtra("to", to);
}


        Intent intent = new Intent(BroadcastAction.Type.SEND_CAMERA_FACING_MODE_MESSAGE.getAction());
        intent.putExtra("uid", uid);
        intent.putExtra("transcription", transcription);
    public static Intent buildStopRecordingIntent(RecordingMode mode, boolean transcription) {
        intent.putExtra("appearance", appearance);
    public enum RecordingMode {
    }
        intent.putExtra("message", message);
        return intent;
    }
    }
    }
    public static Intent buildCloseChatIntent() {
    public static Intent buildSetAudioMutedIntent(boolean muted) {
        String rtmpStreamKey,
        Bundle extraMetadata,
        intent.putExtra("muted", muted);
    public static Intent buildShowNotificationIntent(
        Intent intent = new Intent(BroadcastAction.Type.SEND_ENDPOINT_TEXT_MESSAGE.getAction());

    }
        intent.putExtra("mode", mode.getMode());
    }
        intent.putExtra("description", description);
        return intent;
    public static Intent buildStartRecordingIntent(
        intent.putExtra("enabled", enabled);
        intent.putExtra("timeout", timeout);

        intent.putExtra("dropboxToken", dropboxToken);
        public String getMode() {
        Intent intent = new Intent(BroadcastAction.Type.RETRIEVE_PARTICIPANTS_INFO.getAction());



        intent.putExtra("requestId", requestId);
        return intent;
        intent.putExtra("enabled", enabled);
    }

    }


        intent.putExtra("rtmpStreamKey", rtmpStreamKey);
        intent.putExtra("rtmpBroadcastID", rtmpBroadcastID);
    }
        intent.putExtra("uid", uid);
        return intent;
    public static Intent buildHangUpIntent() {
        RecordingMode(String mode) {
    public static Intent buildToggleScreenShareIntent(boolean enabled) {
        intent.putExtra("to", participantId);

public class BroadcastIntentHelper {
        private final String mode;

        return intent;
        }
    public static Intent buildHideNotificationIntent(String uid) {
        return intent;
package org.jitsi.meet.sdk;
        String appearance, String description, String timeout, String title, String uid) {
import android.content.Intent;
    public static Intent buildSetVideoMutedIntent(boolean muted) {
    }


        Intent intent = new Intent(BroadcastAction.Type.SET_CLOSED_CAPTIONS_ENABLED.getAction());
        intent.putExtra("to", participantId);
        return new Intent(BroadcastAction.Type.CLOSE_CHAT.getAction());

        String dropboxToken,
        String youtubeStreamKey,
        return new Intent(BroadcastAction.Type.TOGGLE_CAMERA.getAction());

        boolean transcription) {
        Intent intent = new Intent(BroadcastAction.Type.HIDE_NOTIFICATION.getAction());
import android.os.Bundle;
    }
        intent.putExtra("title", title);
        Intent intent = new Intent(BroadcastAction.Type.STOP_RECORDING.getAction());
            return mode;
    }
        return intent;
        intent.putExtra("config", config);
        intent.putExtra("facingMode", facingMode);
        return intent;

    public static Intent buildRetrieveParticipantsInfo(String requestId) {
    public static Intent buildSendCameraFacingModeMessageIntent(String to, String facingMode) {

    }
            this.mode = mode;
    public static Intent buildSetClosedCaptionsEnabledIntent(boolean enabled) {
    public static Intent buildOverwriteConfigIntent(Bundle config) {
        intent.putExtra("shouldShare", shouldShare);
        return intent;
        intent.putExtra("transcription", transcription);

        intent.putExtra("youtubeBroadcastID", youtubeBroadcastID);
    }
    }


    public static Intent buildToggleCameraIntent() {

        return intent;
    }



    public static Intent buildSendEndpointTextMessageIntent(String to, String message) {
        Intent intent = new Intent(BroadcastAction.Type.SET_AUDIO_MUTED.getAction());
        Intent intent = new Intent(BroadcastAction.Type.SEND_CHAT_MESSAGE.getAction());

        intent.putExtra("message", message);


        }

        intent.putExtra("to", to);
    }

        Intent intent = new Intent(BroadcastAction.Type.SHOW_NOTIFICATION.getAction());

        intent.putExtra("extraMetadata", extraMetadata);
        STREAM("stream");
    public static Intent buildOpenChatIntent(String participantId) {
        Intent intent = new Intent(BroadcastAction.Type.TOGGLE_SCREEN_SHARE.getAction());
        intent.putExtra("muted", muted);
    public static Intent buildSendChatMessageIntent(String participantId, String message) {
        Intent intent = new Intent(BroadcastAction.Type.SET_VIDEO_MUTED.getAction());


        return intent;
