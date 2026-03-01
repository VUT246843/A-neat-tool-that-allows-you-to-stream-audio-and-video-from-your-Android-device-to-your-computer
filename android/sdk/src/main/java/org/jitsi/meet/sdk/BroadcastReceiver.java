
import android.os.Bundle;
package org.jitsi.meet.sdk;
        Bundle data = action.getData();
        }
    public void onReceive(Context context, Intent intent) {
    }
    public BroadcastReceiver(Context context) {
 * it emits it to JS.
            ReactInstanceManagerHolder.emitEvent(actionName, Arguments.fromBundle(data));

        IntentFilter intentFilter = new IntentFilter();

import android.content.Context;
        for (BroadcastAction.Type type : BroadcastAction.Type.values()) {
        LocalBroadcastManager localBroadcastManager = LocalBroadcastManager.getInstance(context);
        } else {
        // For actions without data bundle (like hangup), we create an empty map
            ReactInstanceManagerHolder.emitEvent(actionName, Arguments.createMap());
        }
        if (data != null) {
        localBroadcastManager.registerReceiver(this, intentFilter);

            
public class BroadcastReceiver extends android.content.BroadcastReceiver {
 * Listens for {@link BroadcastAction}s on LocalBroadcastManager. When one occurs,
    @Override

        String actionName = action.getType().getAction();
            intentFilter.addAction(type.getAction());
/**

        // instead of attempting to convert a null bundle to avoid crashes.


        BroadcastAction action = new BroadcastAction(intent);
import android.content.Intent;
import com.facebook.react.bridge.Arguments;
import android.content.IntentFilter;
    }

 */
}
import androidx.localbroadcastmanager.content.LocalBroadcastManager;
