            promise.reject(e);

        try {
    }
     * Generate a client identifier for the dropbox sdk.
    public void onHostPause() {}
        PackageManager packageManager = context.getPackageManager();
        DbxRequestConfig config = DbxRequestConfig.newBuilder(clientId).build();
            }
     * Resolves the current user space usage.

     *
    @Override
    /**
        } else {
import com.facebook.react.bridge.Arguments;
        super(reactContext);
import com.dropbox.core.DbxException;
@ReactModule(name = DropboxModule.NAME)
    private String clientId;
class DropboxModule
    private String generateClientId() {
                this.promise.resolve(result);
     *
 */
    @Override
            = applicationInfo == null
     */
import com.facebook.react.bridge.ReactContextBaseJavaModule;

    private String appKey;
     * Resolves the current user dropbox display name.
            SpaceAllocation allocation = spaceUsage.getAllocation();
        }
import android.text.TextUtils;
import android.content.pm.PackageManager;
        extends ReactContextBaseJavaModule


     * @returns a client identifier for the dropbox sdk.
                this.promise.reject("Invalid dropbox credentials");

import com.facebook.react.module.annotations.ReactModule;
                new Exception("Dropbox integration isn't configured."));
        try {
            promise.resolve(map);
    public void onHostResume() {
            }
        } catch (DbxException e) {

        return applicationLabel + "/" + version;
    private Promise promise;

        }
    public DropboxModule(ReactApplicationContext reactContext) {
    public void getSpaceUsage(final String token, final Promise promise) {
}
            promise.reject(
    @Override
            if (allocation.isIndividual()) {
     * @param promise The promise used to return the result of the auth flow.
        Context context = getReactApplicationContext();
import com.dropbox.core.v2.users.SpaceUsage;


        }
import com.dropbox.core.v2.DbxClientV2;
    }
    /**
        DbxCredential credential = Auth.getDbxCredential();
            packageInfo = packageManager.getPackageInfo(packageName, 0);
        if (isEnabled) {
     * @param token A dropbox access token.
        PackageInfo packageInfo = null;
            if (allocation.isTeam()) {
        clientId = generateClientId();

import com.facebook.react.bridge.WritableMap;

            map.putString("allocated", String.valueOf(allocated));
            long allocated = 0;
            this.promise = null;
            WritableMap map = Arguments.createMap();
/**
        }
    /**
        return constants;

 * Implements the react-native module for the dropbox integration.


        } catch (DbxException e) {
    /**
                allocated += allocation.getTeamValue().getAllocated();

            FullAccount account = client.users().getCurrentAccount();

            } else {
import com.facebook.react.bridge.ReactApplicationContext;
                result.putString("rToken", credential.getRefreshToken());
                : packageManager.getApplicationLabel(applicationInfo).toString()
    public String getName() {
    }

            map.putString("used", String.valueOf(spaceUsage.getUsed()));
    @ReactMethod
    }
        String version = packageInfo == null ? "dev" : packageInfo.versionName;
        // Get current account info
     */
                WritableMap result = Arguments.createMap();

        try {


     * @param token A dropbox access token.
    }
import android.content.Context;

        isEnabled = !TextUtils.isEmpty(appKey);
            .getIdentifier("dropbox_app_key", "string", pkg);
        String pkg = reactContext.getApplicationContext().getPackageName();

    private final boolean isEnabled;


            promise.reject(e);
                    .replaceAll("\\s", "");
    @Override
    public Map<String, Object> getConstants() {
    @ReactMethod
     * Executes the dropbox auth flow.

        constants.put("ENABLED", isEnabled);
        reactContext.addLifecycleEventListener(this);
package org.jitsi.meet.sdk;
import com.dropbox.core.DbxRequestConfig;
                this.promise = null;
import android.content.pm.ApplicationInfo;
        return NAME;
    @Override

import com.facebook.react.bridge.ReactMethod;
import com.dropbox.core.android.Auth;
            this.promise = promise;
import com.dropbox.core.v2.users.SpaceAllocation;
import android.content.pm.PackageInfo;
     * @param promise The promise used to return the result of the auth flow.
        String applicationLabel
            applicationInfo = packageManager.getApplicationInfo(packageName, 0);
        int resId = reactContext.getResources()
        DbxClientV2 client = new DbxClientV2(config, token);
     *
    public static final String NAME = "Dropbox";
            if (credential != null) {



        ApplicationInfo applicationInfo = null;
    }
     */
        if (this.promise != null ) {
            Auth.startOAuth2PKCE(this.getCurrentActivity(), appKey, DbxRequestConfig.newBuilder(clientId).build());


        DbxClientV2 client = new DbxClientV2(config, token);
    public void onHostDestroy() {}
    public void authorize(final Promise promise) {
    }
                result.putDouble("expireDate", credential.getExpiresAt());
import com.facebook.react.bridge.Promise;
                allocated += allocation.getIndividualValue().getAllocated();
import com.dropbox.core.v2.users.FullAccount;
            = reactContext.getString(resId);
import java.util.Map;
import java.util.HashMap;
     * @see {https://dropbox.github.io/dropbox-sdk-java/api-docs/v3.0.x/com/dropbox/core/DbxRequestConfig.html#getClientIdentifier--}
        implements LifecycleEventListener {
                result.putString("token", credential.getAccessToken());
     *
        appKey


            String packageName = context.getPackageName();
        DbxRequestConfig config = DbxRequestConfig.newBuilder(clientId).build();
     * @param promise The promise used to return the result of the auth flow.
    }
                ? "JitsiMeet"
            }
        } catch (PackageManager.NameNotFoundException e) {

            SpaceUsage spaceUsage = client.users().getSpaceUsage();

        }
        Map<String, Object> constants = new HashMap<>();

            promise.resolve(account.getName().getDisplayName());
import com.facebook.react.bridge.LifecycleEventListener;
import com.dropbox.core.oauth.DbxCredential;
     */

    @ReactMethod
    public void getDisplayName(final String token, final Promise promise) {

