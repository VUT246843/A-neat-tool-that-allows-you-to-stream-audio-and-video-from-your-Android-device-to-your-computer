    @NonNull
import android.util.Log;
    public List<Class<? extends Initializer<?>>> dependencies() {
        }
 * You may obtain a copy of the License at
 */


 *
import android.app.Application;
            SoLoader.init(context, OpenSourceMergedSoMapping.INSTANCE);
public class JitsiInitializer implements Initializer<Boolean> {
 *
        return true;
import android.content.Context;

            throw new RuntimeException(e);
 * Copyright @ 2021-present 8x8, Inc.

    @Override
import com.facebook.react.soloader.OpenSourceMergedSoMapping;

        try {

import org.wonday.orientation.OrientationActivityLifecycle;
 * you may not use this file except in compliance with the License.
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        return Collections.emptyList();
        Log.d(this.getClass().getCanonicalName(), "create");
    }
import androidx.annotation.NonNull;
    public Boolean create(@NonNull Context context) {
    @Override

        // Register activity lifecycle handler for the orientation locker module.
 * limitations under the License.
        // Initialize ReactInstanceManager during application startup

    @NonNull
 *

        } catch (IOException e) {
 *     http://www.apache.org/licenses/LICENSE-2.0
import java.util.Collections;
        // This ensures it's ready before any Activity onCreate is called

 * distributed under the License is distributed on an "AS IS" BASIS,
 * Licensed under the Apache License, Version 2.0 (the "License");
import java.util.List;

    }
/*
        JitsiMeetUncaughtExceptionHandler.register();
}import com.facebook.soloader.SoLoader;
 * Unless required by applicable law or agreed to in writing, software
import androidx.startup.Initializer;
 * See the License for the specific language governing permissions and
import java.io.IOException;

package org.jitsi.meet.sdk;
        ReactInstanceManagerHolder.initReactInstanceManager((Application) context);
        // Register our uncaught exception handler.
        ((Application) context).registerActivityLifecycleCallbacks(OrientationActivityLifecycle.getInstance());
