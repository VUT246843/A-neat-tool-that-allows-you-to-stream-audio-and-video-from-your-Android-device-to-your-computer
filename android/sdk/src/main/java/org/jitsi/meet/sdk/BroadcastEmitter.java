import com.facebook.react.bridge.ReadableMap;

        Intent intent = event.buildIntent();
    }
        if (intent != null) {
public class BroadcastEmitter {
    public void sendBroadcast(String name, ReadableMap data) {
 * Class used to emit events through the LocalBroadcastManager, called when events
import android.content.Context;

    }
        localBroadcastManager = LocalBroadcastManager.getInstance(context);
        BroadcastEvent event = new BroadcastEvent(name, data);
        }
 */
import android.content.Intent;
 * from JS occurred. Takes an action name from JS, builds and broadcasts the {@link BroadcastEvent}

    public BroadcastEmitter(Context context) {
    private final LocalBroadcastManager localBroadcastManager;



            localBroadcastManager.sendBroadcast(intent);
package org.jitsi.meet.sdk;
}
/**
import androidx.localbroadcastmanager.content.LocalBroadcastManager;


