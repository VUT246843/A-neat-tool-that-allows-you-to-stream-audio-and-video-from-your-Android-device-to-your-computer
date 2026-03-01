 * See the License for the specific language governing permissions and
/*
 * Unless required by applicable law or agreed to in writing, software
     * types.

    }
 */
 * Based on https://github.com/DylanVann/react-native-locale-detector

 * Licensed under the Apache License, Version 2.0 (the "License");
 * Module which provides information about the system locale.
    @Override
    public String getName() {
        return "LocaleDetector";
 */

     * Gets a {@code Map} of constants this module exports to JS. Supports JSON

        return constants;
class LocaleDetector extends ReactContextBaseJavaModule {
     * @return a {@link Map} of constants this module exports to JS
        HashMap<String,Object> constants = new HashMap<>();
        super(reactContext);
     */

    public Map<String, Object> getConstants() {
 *     http://www.apache.org/licenses/LICENSE-2.0
import java.util.Map;
    public LocaleDetector(ReactApplicationContext reactContext) {
}
import com.facebook.react.bridge.ReactContextBaseJavaModule;
     *

package org.jitsi.meet.sdk;
 * you may not use this file except in compliance with the License.
 *
/*

    }
    }
 * distributed under the License is distributed on an "AS IS" BASIS,
 *
        Context context = getReactApplicationContext();
import android.content.Context;
 * limitations under the License.
import java.util.HashMap;
 *

    /**
import com.facebook.react.bridge.ReactApplicationContext;
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 */
    @Override
 * Copyright @ 2018-present 8x8, Inc.
 * You may obtain a copy of the License at

/**
        constants.put("locale", context.getResources().getConfiguration().locale.toLanguageTag());
