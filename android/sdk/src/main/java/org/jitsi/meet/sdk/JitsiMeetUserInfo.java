                avatar = new URL(avatarURL);
        return email;
 * you may not use this file except in compliance with the License.


 *

    /**
        if (avatar != null) {
 */
        }
    }
     * User's avatar URL.
        this.avatar = avatar;
        this.displayName = displayName;
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Licensed under the Apache License, Version 2.0 (the "License");
     */
     * User's email address.
    }
    }

        if (b.containsKey("avatarURL")) {
/*

 *

    }


            b.putString("avatarURL", avatar.toString());
        this.email = email;
    public JitsiMeetUserInfo() {}
            b.putString("displayName", displayName);
 * Unless required by applicable law or agreed to in writing, software
 * Copyright @ 2019-present 8x8, Inc.
    public JitsiMeetUserInfo(Bundle b) {
        Bundle b = new Bundle();
        if (b.containsKey("displayName")) {
    Bundle asBundle() {
 * You may obtain a copy of the License at

            try {
        }
 */
    }
    }
        }

        }
        if (email != null) {
     */
 * This class represents user information to be passed to {@link JitsiMeetConferenceOptions} for
            } catch (MalformedURLException e) {
    private URL avatar;
        return b;
package org.jitsi.meet.sdk;
    private String displayName;

     * User's display name.


    private String email;
            displayName = b.getString("displayName");
    public URL getAvatar() {
        }
        if (b.containsKey("email")) {

            email = b.getString("email");
            }
 * distributed under the License is distributed on an "AS IS" BASIS,




     */
    }

    public String getDisplayName() {
        return displayName;
    /**
        super();
            String avatarURL = b.getString("avatarURL");
import android.os.Bundle;
    }
    public void setDisplayName(String displayName) {
public class JitsiMeetUserInfo {
        return avatar;
    public String getEmail() {


 *
/**
import java.net.MalformedURLException;
 * identifying a user.
    public void setAvatar(URL avatar) {
        if (displayName != null) {

    public void setEmail(String email) {
            b.putString("email", email);
    /**
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
import java.net.URL;
 * limitations under the License.
        }
 * See the License for the specific language governing permissions and
}
