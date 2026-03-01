    private static final String BUILD_CONFIG = "org.jitsi.meet.sdk.BuildConfig";
    public String getName() {
        ApplicationInfo applicationInfo;
        super(reactContext);
     */

    public Map<String, Object> getConstants() {
            "version",
        try {
    public static final boolean GOOGLE_SERVICES_ENABLED = getGoogleServicesEnabled();
        } catch (PackageManager.NameNotFoundException e) {

    /**
    }
        constants.put("sdkVersion", SDK_VERSION);
import android.content.pm.PackageManager;
            applicationInfo == null
}
     * Checks if libre build field is null based on build configuration.
 *
            e.printStackTrace();
     * @return a {@link Map} of constants this module exports to JS
        return false;
     */

    }
 * See the License for the specific language governing permissions and
     * @param fieldName Field from build config.
    /**
        constants.put("GOOGLE_SERVICES_ENABLED", GOOGLE_SERVICES_ENABLED);
import com.facebook.react.bridge.ReactContextBaseJavaModule;
             applicationInfo = null;
import android.content.Context;
 *
            return (Boolean) googleServicesEnabled;
            f.setAccessible(true);
import java.lang.reflect.Field;


    }
     * Gets build config value of a certain field.
import com.facebook.react.bridge.ReactApplicationContext;
        constants.put("LIBRE_BUILD", LIBRE_BUILD);
    @Override
     */

             applicationInfo
        }
import com.facebook.react.module.annotations.ReactModule;

    }

        constants.put(

            return (Boolean) libreBuild;
 *
            return f.get(null);


 */
        return NAME;
        PackageInfo packageInfo;
     */
     * Checks if libre google services object is null based on build configuration.
        if (libreBuild !=null) {

             String packageName = context.getPackageName();
    /**
        Context context = getReactApplicationContext();
            Class<?> c = Class.forName(BUILD_CONFIG);

 * Unless required by applicable law or agreed to in writing, software
            return null;
                 = packageManager.getApplicationInfo(packageName, 0);
    extends ReactContextBaseJavaModule {
        } catch (Exception e) {
 * You may obtain a copy of the License at


        constants.put(
        }
    public static final String SDK_VERSION = getSdkVersion();
class AppInfoModule
    /**
     * Gets a {@code Map} of constants this module exports to JS. Supports JSON
 * you may not use this file except in compliance with the License.
     * Gets the SDK version.
                : packageManager.getApplicationLabel(applicationInfo));
    }
        Map<String, Object> constants = new HashMap<>();
import android.content.pm.PackageInfo;
    public AppInfoModule(ReactApplicationContext reactContext) {
    public static final boolean LIBRE_BUILD = getLibreBuild();
            return (String) sdkVersion;
    private static boolean getLibreBuild() {
     *
 * limitations under the License.
 * Licensed under the Apache License, Version 2.0 (the "License");

    private static String getSdkVersion() {


        return false;
        return constants;
        Object sdkVersion = getBuildConfigValue("SDK_VERSION");
    public static final String NAME = "AppInfo";
        PackageManager packageManager = context.getPackageManager();
        if (sdkVersion !=null) {
             packageInfo = null;
 * Copyright @ 2017-present 8x8, Inc.
import android.content.pm.ApplicationInfo;
    private static Object getBuildConfigValue(String fieldName) {
                ? ""
 * distributed under the License is distributed on an "AS IS" BASIS,

        return "";
        Object libreBuild = getBuildConfigValue("LIBRE_BUILD");

        constants.put(

 *     http://www.apache.org/licenses/LICENSE-2.0
    private static boolean getGoogleServicesEnabled() {
    /**
    }


     */
     *
        try {
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        }
package org.jitsi.meet.sdk;
    @Override
     * types.
        }
        if (googleServicesEnabled !=null) {
            "buildNumber",
/*

        Object googleServicesEnabled = getBuildConfigValue("GOOGLE_SERVICES_ENABLED");
import java.util.HashMap;
        }
            packageInfo == null ? "" : String.valueOf(packageInfo.versionCode));
            "name",
            packageInfo == null ? "" : packageInfo.versionName);
             packageInfo = packageManager.getPackageInfo(packageName, 0);
@ReactModule(name = AppInfoModule.NAME)
import java.util.Map;
            Field f  = c.getDeclaredField(fieldName);
    }
