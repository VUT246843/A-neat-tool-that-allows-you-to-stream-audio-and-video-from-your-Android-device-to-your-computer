
 * Helper class to initialize Google related services and functionality.
import android.util.Log;
final class GoogleServicesHelper {
 * "Libre builds" (builds with the LIBRE_BUILD flag set) will not include this file.
        }
import android.net.Uri;
 */
    }
        if (BuildConfig.GOOGLE_SERVICES_ENABLED) {
import org.jitsi.meet.sdk.JitsiMeetActivity;

    public static void initialize(JitsiMeetActivity activity) {
 * This functionality is compiled conditionally and called via reflection, that's why it was
 *
/**

            Log.d(activity.getClass().getSimpleName(), "Initializing Google Services");
import org.jitsi.meet.sdk.JitsiMeet;
}
            FirebaseCrashlytics.getInstance().setCrashlyticsCollectionEnabled(!JitsiMeet.isCrashReportingDisabled(activity));

import com.google.firebase.crashlytics.FirebaseCrashlytics;
 * extracted here.

package org.jitsi.meet;
