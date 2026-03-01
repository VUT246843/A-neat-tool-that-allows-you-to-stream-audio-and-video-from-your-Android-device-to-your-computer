
                        participantsInfoCallback.onReceived(participantInfoList);
import com.google.gson.reflect.TypeToken;
    }


import org.jitsi.meet.sdk.log.JitsiMeetLogger;
        localBroadcastManager.registerReceiver(this, intentFilter);
import androidx.localbroadcastmanager.content.LocalBroadcastManager;
                } catch (Exception e) {
        BroadcastEvent event = new BroadcastEvent(intent);
                }

                        }.getType());
    }
        switch (event.getType()) {

public class ParticipantsService extends android.content.BroadcastReceiver {


                    }


                    List<ParticipantInfo> participantInfoList = new Gson().fromJson(
                        event.getData().get("participantsInfo").toString(),
            case PARTICIPANTS_INFO_RETRIEVED:
    @Override

    private final Map<String, WeakReference<ParticipantsInfoCallback>> participantsInfoCallbackMap = new HashMap<>();
                        new TypeToken<ArrayList<ParticipantInfo>>() {
        instance = new ParticipantsService(context);
    }
        data.putString(REQUEST_ID, callbackKey);

import javax.annotation.Nullable;
import android.content.Intent;
                    JitsiMeetLogger.w(TAG + "error parsing participantsList", e);
    private static final String TAG = ParticipantsService.class.getSimpleName();
import android.content.IntentFilter;

    private ParticipantsService(Context context) {
    static void init(Context context) {

        intentFilter.addAction(BroadcastEvent.Type.PARTICIPANTS_INFO_RETRIEVED.getAction());

        this.participantsInfoCallbackMap.put(callbackKey, new WeakReference<>(participantsInfoCallback));
}

import java.util.UUID;
        return instance;
                try {
import java.util.ArrayList;
import java.lang.ref.WeakReference;
import android.content.Context;
    @Nullable
        String callbackKey = UUID.randomUUID().toString();
    private static final String REQUEST_ID = "requestId";
    public interface ParticipantsInfoCallback {
        IntentFilter intentFilter = new IntentFilter();
    public static ParticipantsService getInstance() {
import java.util.List;
                    ParticipantsInfoCallback participantsInfoCallback = this.participantsInfoCallbackMap.get(event.getData().get(REQUEST_ID).toString()).get();


        void onReceived(List<ParticipantInfo> participantInfoList);


import com.google.gson.Gson;
    }

        }
import com.facebook.react.bridge.Arguments;
    }
                        this.participantsInfoCallbackMap.remove(participantsInfoCallback);
        LocalBroadcastManager localBroadcastManager = LocalBroadcastManager.getInstance(context);


                    if (participantsInfoCallback != null) {
    public void onReceive(Context context, Intent intent) {
import java.util.Map;
import java.util.HashMap;
package org.jitsi.meet.sdk;
        WritableMap data = Arguments.createMap();
import com.facebook.react.bridge.WritableMap;
        String actionName = BroadcastAction.Type.RETRIEVE_PARTICIPANTS_INFO.getAction();
    private static ParticipantsService instance;
        ReactInstanceManagerHolder.emitEvent(actionName, data);
    }
    public void retrieveParticipantsInfo(ParticipantsInfoCallback participantsInfoCallback) {
                break;
