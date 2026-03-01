    public void onCurrentConferenceChanged(String conferenceUrl) {
    private static final String EXTRA_DATA_KEY = "extraDataKey";
            } else {
        if (action != null) {
        LocalBroadcastManager.getInstance(getApplicationContext()).unregisterReceiver(broadcastReceiver);
    public int onStartCommand(Intent intent, int flags, int startId) {
            doLaunch(context, extraData);
            JitsiMeetLogger.i(TAG + "Service stopped");

        super.onDestroy();
import androidx.localbroadcastmanager.content.LocalBroadcastManager;
            stopSelf();
        HANGUP(TAG + ":HANGUP"),

 *
        if (conferenceUrl == null) {
 * Unless required by applicable law or agreed to in writing, software

                this.isAudioMuted = Boolean.parseBoolean(intent.getStringExtra("muted"));
    }


 * Licensed under the Apache License, Version 2.0 (the "License");
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
    }
import com.facebook.react.modules.core.PermissionListener;

    private static final String ACTIVITY_DATA_KEY = "activityDataKey";
        return START_NOT_STICKY;
 * distributed under the License is distributed on an "AS IS" BASIS,
                // See: https://developer.android.com/develop/background-work/services/fgs/restrictions-bg-start#wiu-restrictions
}
                        JitsiMeetLogger.w(TAG + " Couldn't launch service, permissions were not granted");
    static final int NOTIFICATION_ID = new Random().nextInt(99999) + 10000;

                    }
                    break;
                }
public class JitsiMeetOngoingConferenceService extends Service implements OngoingConferenceTracker.OngoingConferenceListener {
    public static void launch(Context context, HashMap<String, Object> extraData) {
        } else {


                    JitsiMeetLogger.i(TAG + " Hangup requested");
        final Action action = Action.fromName(actionName);
                    startForeground(NOTIFICATION_ID, notification);
        if (componentName == null) {

    }
                String targetActivityName = intent.getExtras().getString(ACTIVITY_DATA_KEY);
    @Override
            try {
            if (isAudioMuted != null) {
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

                return true;

            permissionsList.add(RECORD_AUDIO);
            JitsiMeetActivityDelegate.requestPermissions(
        Activity activity = (Activity) context;

    @Override

        private final String name;

import android.os.Build;
    public enum Action {
                    if (counter == results.length){
                    return action;
import java.util.List;

        Action(String name) {
 *
            }
import android.app.Activity;
        } catch (Exception ignored) {
                    } else {
            if (notification == null) {
    }
        intent.putExtra(EXTRA_DATA_BUNDLE_KEY, extraDataBundle);
        if (permissionsArray.length > 0) {
                stopSelf();
    }
    public static void abort(Context context) {
                } else {
    @Override

import java.util.ArrayList;
                JitsiMeetLogger.w(TAG + " Couldn't start service, notification is null");
        return null;
            permissionsList.add(POST_NOTIFICATIONS);
        context.stopService(intent);
 */
    private static final String IS_AUDIO_MUTED_KEY = "isAudioMuted";
    }
        }
            return name;
import android.content.IntentFilter;
 * responsible for presenting an ongoing notification when a conference is in progress.
    }
    @Override
            JitsiMeetLogger.w(TAG + " Ongoing conference service not started", e);
            JitsiMeetLogger.w(TAG + " Couldn't start service, notification is null");
        ComponentName componentName;
        return null;
import java.util.HashMap;
    private static final String EXTRA_DATA_BUNDLE_KEY = "extraDataBundleKey";
import java.util.Random;
    private final BroadcastReceiver broadcastReceiver = new BroadcastReceiver();
            // See: https://developer.android.com/guide/components/foreground-services#background-start-restrictions


        IntentFilter intentFilter = new IntentFilter();
                    JitsiMeetLogger.w(TAG + " Could not find target Activity: " + targetActivityName);

 * you may not use this file except in compliance with the License.

        }
import android.os.IBinder;
                    tapBackActivity = targetActivity;
                stopSelf();
            HashMap<String, Object> extraData = (HashMap<String, Object>) intent.getBundleExtra(EXTRA_DATA_BUNDLE_KEY).getSerializable(EXTRA_DATA_KEY);

        if (notification == null) {

                case MUTE:
            if (tapBackActivity == null) {

        public void onReceive(Context context, Intent intent) {
                    break;
                NotificationManager notificationManager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);

                        JitsiMeetLogger.w(TAG + " Service launched, permissions were granted");
        Bundle extraDataBundle = new Bundle();
    private static final int PERMISSIONS_REQUEST_CODE = (int) (Math.random() * Short.MAX_VALUE);
 * The service will help keep the app running while in the background.
        try {
        }
                    startForeground(NOTIFICATION_ID, notification, ServiceInfo.FOREGROUND_SERVICE_TYPE_MEDIA_PLAYBACK);
                PERMISSIONS_REQUEST_CODE,
            return Boolean.parseBoolean((String) extraData.get(IS_AUDIO_MUTED_KEY));
                        doLaunch(context, extraData);
import android.os.Bundle;
            for (Action action : Action.values()) {
                    stopSelf();

            this.name = name;
            }
import android.content.pm.PackageManager;
            return null;
            );
                    LocalBroadcastManager.getInstance(getApplicationContext()).sendBroadcast(hangupBroadcastIntent);
        }
        }
            } catch (Exception e) {
                JitsiMeetLogger.i(TAG + " audio muted changed");
                    for (int result : results) {

                if (results.length > 0) {
        String[] permissionsArray = new String[ permissionsList.size() ];
                } catch (ClassNotFoundException e) {
        List<String> permissionsList = new ArrayList<>();
                if (action.name.equalsIgnoreCase(name)) {
        };
 *
    }
            stopSelf();

                JitsiMeetLogger.w(TAG + " Couldn't update service, notification is null");
                default:

    private Class tapBackActivity;
        }
                    startForeground(NOTIFICATION_ID, notification, ServiceInfo.FOREGROUND_SERVICE_TYPE_MEDIA_PLAYBACK | ServiceInfo.FOREGROUND_SERVICE_TYPE_MICROPHONE);
        @Override
 * limitations under the License.

        extraDataBundle.putSerializable(EXTRA_DATA_KEY, extraData);

import android.app.Service;
            Notification notification = OngoingNotification.buildOngoingConferenceNotification(isAudioMuted, context, tapBackActivity);
        }

        OngoingConferenceTracker.getInstance().addListener(this);
            JitsiMeetLogger.w(TAG + " Service launched");
                // Handle ForegroundServiceStartNotAllowedException when app is in background and cannot start foreground service.

                case HANGUP:
            Boolean isAudioMuted = tryParseIsAudioMuted(intent);
                    Intent muteBroadcastIntent = BroadcastIntentHelper.buildSetAudioMutedIntent(action == Action.MUTE);
        public static Action fromName(String name) {

        intent.putExtra(ACTIVITY_DATA_KEY, activity.getClass().getCanonicalName());
        }
                Class<? extends Activity> targetActivity = null;
            }

            componentName = context.startForegroundService(intent);
            Notification notification = OngoingNotification.buildOngoingConferenceNotification(this.isAudioMuted, this, tapBackActivity);
                activity,

                listener
                }
        } catch (RuntimeException e) {

                int counter = 0;

                case UNMUTE:
import static android.Manifest.permission.POST_NOTIFICATIONS;
        }
            }

        }

            }
/**
        public String getName() {
                } else if (Build.VERSION.SDK_INT == Build.VERSION_CODES.Q) {
import android.app.Notification;

        Intent intent = new Intent(context, JitsiMeetOngoingConferenceService.class);
package org.jitsi.meet.sdk;
    }
        OngoingConferenceTracker.getInstance().removeListener(this);
import static android.Manifest.permission.RECORD_AUDIO;
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            isAudioMuted = Boolean.parseBoolean(intent.getStringExtra("muted"));
 *
                            counter++;
            JitsiMeetLogger.w(TAG + " Ongoing conference service not started");
 * You may obtain a copy of the License at
                permissionsArray,
        Intent intent = new Intent(context, JitsiMeetOngoingConferenceService.class);
            } else {
        super.onCreate();

    private static void doLaunch(Context context, HashMap<String, Object> extraData) {
    public IBinder onBind(Intent intent) {
        UNMUTE(TAG + ":UNMUTE");
                    Intent hangupBroadcastIntent = BroadcastIntentHelper.buildHangUpIntent();
                stopSelf();
                notificationManager.notify(NOTIFICATION_ID, notification);

    private class BroadcastReceiver extends android.content.BroadcastReceiver {
        if (action != Action.HANGUP) {
import org.jitsi.meet.sdk.log.JitsiMeetLogger;
    }
    public void onDestroy() {
/*
 */
                    LocalBroadcastManager.getInstance(getApplicationContext()).sendBroadcast(muteBroadcastIntent);
        }



                notificationManager.notify(NOTIFICATION_ID, notification);

        Notification notification = OngoingNotification.buildOngoingConferenceNotification(isAudioMuted, this, tapBackActivity);

    private boolean isAudioMuted;
 * See the License for the specific language governing permissions and
            return;

    private static final String TAG = JitsiMeetOngoingConferenceService.class.getSimpleName();
        intentFilter.addAction(BroadcastEvent.Type.AUDIO_MUTED_CHANGED.getAction());
            @Override
                        }
            switch (action) {
    public void onCreate() {
        LocalBroadcastManager.getInstance(getApplicationContext()).registerReceiver(broadcastReceiver, intentFilter);
 * Copyright @ 2019-present 8x8, Inc.

import android.content.ComponentName;
import android.app.NotificationManager;

        MUTE(TAG + ":MUTE"),
import android.content.Intent;
 * This class implements an Android {@link Service}, a foreground one specifically, and it's
 *     http://www.apache.org/licenses/LICENSE-2.0
                    JitsiMeetLogger.w(TAG + " Unknown action received: " + action);
                NotificationManager notificationManager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
    @Override
            }

    }
                return;
        }

        Activity activity = (Activity) context;
                    break;
        OngoingNotification.createNotificationChannel(activity);
                }
            OngoingNotification.resetStartingtime();
            }
            Class tapBackActivity = JitsiMeetOngoingConferenceService.this.tapBackActivity;
            // Avoid crashing due to ForegroundServiceStartNotAllowedException (API level 31).
    private Boolean tryParseIsAudioMuted(Intent intent) {

            if (notification == null) {
        final String actionName = intent.getAction();

                    }
import android.content.pm.ServiceInfo;

        // When starting the service, there is no action passed in the intent
        }
                        if (result == PackageManager.PERMISSION_GRANTED) {
        } else {
 * See: https://developer.android.com/guide/components/services
                }
            public boolean onRequestPermissionsResult(int i, String[] strings, int[] results) {
                try {
import android.content.Context;
        permissionsArray = permissionsList.toArray( permissionsArray );
        try {
                JitsiMeetLogger.w(TAG + " Failed to start foreground service", e);
            }
        PermissionListener listener = new PermissionListener() {
                    targetActivity = Class.forName(targetActivityName).asSubclass(Activity.class);
