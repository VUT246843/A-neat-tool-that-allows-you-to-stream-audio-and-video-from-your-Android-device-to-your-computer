
import android.net.Uri;
import com.facebook.react.bridge.Promise;

package org.jitsi.meet.sdk;
class AndroidSettingsModule
    @ReactMethod

        return NAME;
import android.content.ActivityNotFoundException;
        } catch (ActivityNotFoundException e) {
import android.provider.Settings;
        promise.resolve(null);
    public AndroidSettingsModule(ReactApplicationContext reactContext) {
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
}
import com.facebook.react.bridge.ReactContextBaseJavaModule;
            promise.reject(e);
        super(reactContext);

    extends ReactContextBaseJavaModule {
        Context context = getReactApplicationContext();
    }

    public static final String NAME = "AndroidSettings";
            // https://developer.android.com/reference/android/provider/Settings.html#ACTION_APPLICATION_DETAILS_SETTINGS

            return;
    public String getName() {

        Intent intent = new Intent();
    public void open(Promise promise) {
    }
 * Adapted from

            // Some devices may give an error here.
 * {@link https://github.com/Aleksandern/react-native-android-settings-library}.
import android.content.Context;
        intent.setData(
import android.content.Intent;
import com.facebook.react.module.annotations.ReactModule;
            Uri.fromParts("package", context.getPackageName(), null));
 */
/**
            context.startActivity(intent);
        try {
import com.facebook.react.bridge.ReactApplicationContext;
    @Override

import com.facebook.react.bridge.ReactMethod;
        intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);

@ReactModule(name = AndroidSettingsModule.NAME)
    }
        }

