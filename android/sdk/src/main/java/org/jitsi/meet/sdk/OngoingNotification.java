        builder.addAction(audioAction);
            return null;
            .setPriority(NotificationCompat.PRIORITY_DEFAULT)
        }
    private static long startingTime = 0;
        }

            = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);

        String title = context.getString(titleId);

        NotificationCompat.Builder builder = new NotificationCompat.Builder(context, ONGOING_CONFERENCE_CHANNEL_ID);
    }
        channel.setShowBadge(false);


 *
        if (context == null) {
        }
        int toggleAudioTitle = isMuted ? R.string.ongoing_notification_action_unmute : R.string.ongoing_notification_action_mute;
    private static NotificationCompat.Action createAction(Context context, JitsiMeetOngoingConferenceService.Action action, @StringRes int titleId) {
    }

 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            .setVisibility(NotificationCompat.VISIBILITY_PUBLIC)
            .setOnlyAlertOnce(true)
package org.jitsi.meet.sdk;
        if (channel != null) {
import android.app.NotificationManager;
            .setContentTitle(context.getString(R.string.ongoing_notification_title))
import androidx.core.app.NotificationCompat;
 * {@link JitsiMeetOngoingConferenceService}. It allows the user to easily get back to the app

 *     http://www.apache.org/licenses/LICENSE-2.0



        return new NotificationCompat.Action(0, title, pendingIntent);
            = notificationManager.getNotificationChannel(ONGOING_CONFERENCE_CHANNEL_ID);
        intent.setAction(action.getName());
 * Copyright @ 2019-present 8x8, Inc.
        notificationManager.createNotificationChannel(channel);
import android.app.PendingIntent;
 * you may not use this file except in compliance with the License.
 * and to hangup from within the notification itself.
import org.jitsi.meet.sdk.log.JitsiMeetLogger;
 * See the License for the specific language governing permissions and

    static void resetStartingtime() {
            .setAutoCancel(false)

            return;
            startingTime = System.currentTimeMillis();
        PendingIntent pendingIntent = PendingIntent.getActivity(context, 0, notificationIntent, PendingIntent.FLAG_IMMUTABLE);
 * limitations under the License.
        NotificationChannel channel


 * distributed under the License is distributed on an "AS IS" BASIS,
import android.app.NotificationChannel;

            return;
        return builder.build();

        JitsiMeetOngoingConferenceService.Action toggleAudioAction = isMuted
import androidx.annotation.StringRes;
        builder.addAction(hangupAction);
        NotificationCompat.Action audioAction = createAction(context, toggleAudioAction, toggleAudioTitle);
 * Helper class for creating the ongoing notification which is used with
 * Unless required by applicable law or agreed to in writing, software
        channel.enableLights(false);

    }

        builder
import android.content.Intent;
    }


            JitsiMeetLogger.w(TAG + " Cannot create notification: no current context");
class OngoingNotification {
        NotificationCompat.Action hangupAction = createAction(context, JitsiMeetOngoingConferenceService.Action.HANGUP, R.string.ongoing_notification_action_hang_up);
 * Licensed under the Apache License, Version 2.0 (the "License");
            = PendingIntent.getService(context, 0, intent, PendingIntent.FLAG_IMMUTABLE);
    static final String ONGOING_CONFERENCE_CHANNEL_ID = "JitsiOngoingConferenceChannel";
        NotificationManager notificationManager
            .setSmallIcon(context.getResources().getIdentifier("ic_notification", "drawable", context.getPackageName()));
        if (startingTime == 0) {
/*
            ? JitsiMeetOngoingConferenceService.Action.UNMUTE : JitsiMeetOngoingConferenceService.Action.MUTE;
            .setOngoing(true)

    static void createNotificationChannel(Activity context) {

        Intent intent = new Intent(context, JitsiMeetOngoingConferenceService.class);
import android.app.Activity;
        PendingIntent pendingIntent
 */
}
            .setUsesChronometer(true)
            .setWhen(startingTime)

 *

            .setContentText(context.getString(R.string.ongoing_notification_text))
            JitsiMeetLogger.w(TAG + " Cannot create notification channel: no current context");
        Intent notificationIntent = new Intent(context, tapBackActivity == null ? context.getClass() : tapBackActivity);
import android.app.Notification;
 */
            .setContentIntent(pendingIntent)
        startingTime = 0;
        if (context == null) {
        }

    private static final String TAG = OngoingNotification.class.getSimpleName();
            .setCategory(NotificationCompat.CATEGORY_CALL)
        channel.enableVibration(false);
        channel = new NotificationChannel(ONGOING_CONFERENCE_CHANNEL_ID, context.getString(R.string.ongoing_notification_channel_name), NotificationManager.IMPORTANCE_DEFAULT);
/**
 *
import android.content.Context;
    static Notification buildOngoingConferenceNotification(Boolean isMuted, Context context, Class tapBackActivity) {
            // The channel was already created, no need to do it again.
 * You may obtain a copy of the License at
