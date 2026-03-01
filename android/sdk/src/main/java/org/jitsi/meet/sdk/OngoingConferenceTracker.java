
 * Copyright @ 2019-present 8x8, Inc.
                currentConference = url;
package org.jitsi.meet.sdk;
 *
        if (!data.hasKey("url")) {
        }
    synchronized String getCurrentConference() {

 * you may not use this file except in compliance with the License.
        void onCurrentConferenceChanged(String conferenceUrl);
 *     http://www.apache.org/licenses/LICENSE-2.0
            for (OngoingConferenceListener listener : listeners) {

    }
                listener.onCurrentConferenceChanged(currentConference);

import java.util.Collections;
        if (url == null) {
     * Gets the current active conference URL.
 * See the License for the specific language governing permissions and
                }

 * Unless required by applicable law or agreed to in writing, software
            case CONFERENCE_WILL_JOIN:

 * Helper class to keep track of what the current conference is.
    }
    void removeListener(OngoingConferenceListener listener) {
            return;
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    private static final String CONFERENCE_TERMINATED = "CONFERENCE_TERMINATED";
        return currentConference;
                    updateListeners();
class OngoingConferenceTracker {
    private final Collection<OngoingConferenceListener> listeners =

 */
                if (url.equals(currentConference)) {
    private void updateListeners() {
        return instance;
     */
import com.facebook.react.bridge.ReadableMap;
    private String currentConference;
    }
            return;
/*
    private static final String CONFERENCE_WILL_JOIN = "CONFERENCE_WILL_JOIN";
        synchronized (listeners) {

                break;
    }
    public static OngoingConferenceTracker getInstance() {
    void addListener(OngoingConferenceListener listener) {

        listeners.add(listener);
    /**


            }
                updateListeners();
    public interface OngoingConferenceListener {
 * Licensed under the Apache License, Version 2.0 (the "License");
 *
 * limitations under the License.
     *

/**
import java.util.Collection;
 *
 * You may obtain a copy of the License at
                break;


        }
import java.util.HashSet;
                    currentConference = null;
            case CONFERENCE_TERMINATED:
        String url = data.getString("url");

    private static final OngoingConferenceTracker instance = new OngoingConferenceTracker();
        listeners.remove(listener);
    synchronized void onExternalAPIEvent(String name, ReadableMap data) {
 * distributed under the License is distributed on an "AS IS" BASIS,

    }
        }
        }
    }
    }
        switch(name) {
    }
     * @return - The current conference URL as a String.


 */
}
    public OngoingConferenceTracker() {
        Collections.synchronizedSet(new HashSet<OngoingConferenceListener>());
