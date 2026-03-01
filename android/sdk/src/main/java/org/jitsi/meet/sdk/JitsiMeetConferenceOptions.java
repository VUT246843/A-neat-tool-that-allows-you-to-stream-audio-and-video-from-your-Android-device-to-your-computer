         * Sets the server URL.
            }


     */
        /**
    Bundle asProps() {
     */
         */
        urlProps.putBundle("config", config);
     */
    /**
 *
            return new JitsiMeetConferenceOptions(in);
 * you may not use this file except in compliance with the License.
 */

     */
            this.config.putStringArray(config, list);



/**
 * distributed under the License is distributed on an "AS IS" BASIS,

    private Bundle featureFlags;
 * instance by using {@link JitsiMeetConferenceOptions.Builder} and setting the desired options
        public Builder setRoom(String room) {
    public URL getServerURL() {

    // Parcelable interface


 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    };
         * @param room - Name of the room.
        public Builder setConfigOverride(String config, boolean value) {
    public static final Creator<JitsiMeetConferenceOptions> CREATOR = new Creator<JitsiMeetConferenceOptions>() {
import android.os.Parcel;
        public Builder setConfigOverride(String config, Bundle bundle) {

         * @param audioMuted - Muted indication.

            this.config.putString(config, value);
            return this;
 * This class represents the options when joining a Jitsi Meet conference. The user can create an
        dest.writeBundle(config);
    public void writeToParcel(Parcel dest, int flags) {
 * See the License for the specific language governing permissions and
            return this;


        public Builder setConfigOverride(String config, ArrayList<Bundle> arrayList) {
        /**
        }
        public Builder setFeatureFlag(String flag, boolean value) {
        }
            options.config = this.config;
    private JitsiMeetConferenceOptions(Parcel in) {
     * Server where the conference should take place.
                urlProps.putString("serverURL", serverURL.toString());

            return this;
        private JitsiMeetUserInfo userInfo;
        /**
/*
            if (serverURL != null) {
        return userInfo;
        }
            options.featureFlags = this.featureFlags;

    private JitsiMeetConferenceOptions() {
        }
        }
    }
            this.featureFlags.putInt(flag, value);
        }
            return this;
         * Indicates the conference will be joined in audio-only mode. In this mode no video is
            setConfigOverride("startAudioOnly", audioOnly);
        public Builder setFeatureFlag(String flag, String value) {
            this.config.putParcelableArrayList(config, arrayList);
            return this;
public class JitsiMeetConferenceOptions implements Parcelable {
        /**\
         * @return - The {@link Builder} object itself so the method calls can be chained.
         * @return - The {@link Builder} object itself so the method calls can be chained.
            return this;
            this.config.putBoolean(config, value);
         * Indicates the conference will be joined with the microphone muted.

         * @return - The {@link Builder} object itself so the method calls can be chained.
    /**
        config = in.readBundle();
            this.config.putBundle(config, bundle);
            setConfigOverride("startWithAudioMuted", audioMuted);
         * @param url - {@link URL} of the server where the conference should take place.
 * conference will be joined.
            return this;
}

            return this;
    public String getRoom() {
        } else {
         * @param videoMuted - Muted indication.
     * USer information, to be used when no token is specified.
    private String room;
    }
            options.serverURL = this.serverURL;
    private String token;
     */

    }
 * limitations under the License.
import java.net.URL;
         * @return - The built {@link JitsiMeetConferenceOptions} object.
        dest.writeBundle(featureFlags);

        /**

     * Config. See: https://github.com/jitsi/jitsi-meet/blob/master/config.js
         * Sets the JWT token to be used for authentication when joining a conference.

     * Room name.
            return this;
 * You may obtain a copy of the License at
        }

    @Override
            }
    public static class Builder {

    @Override
    /**
import java.util.ArrayList;
        }

    /**
        dest.writeBundle(userInfo != null ? userInfo.asBundle() : new Bundle());

            this.config.putInt(config, value);
            return new JitsiMeetConferenceOptions[size];

        dest.writeSerializable(serverURL);
            this.userInfo = userInfo;


        if (room != null && room.contains("://")) {
        userInfo = new JitsiMeetUserInfo(in.readBundle());
        private String token;
        public Builder setToken(String token) {

        }
        private URL serverURL;
         * @param subject - Subject for the conference.
            return this;
        // The room is fully qualified
        /**
 */
        public Builder setFeatureFlag(String flag, int value) {
        /**
            urlProps.putString("jwt", token);
        }
            return this;

            if (room != null) {

        public Builder setAudioOnly(boolean audioOnly) {

        public JitsiMeetConferenceOptions createFromParcel(Parcel in) {
            return options;
        return featureFlags;
         * @param token - The JWT token to be used for authentication.
            return this;
        public Builder() {
            return this;
        public Builder setConfigOverride(String config, String value) {
package org.jitsi.meet.sdk;
        return serverURL;
            options.token = this.token;
            setConfigOverride("startWithVideoMuted", videoMuted);
     * Feature flags. See: https://github.com/jitsi/jitsi-meet/blob/master/react/features/base/flags/constants.js
    }
         * @param audioOnly - Audio-mode indicator.
        @Override
            this.featureFlags.putString(flag, value);
            return this;
        props.putBundle("flags", featureFlags);
         */
        private Bundle config;

    /**

        }
        }
        public JitsiMeetConferenceOptions[] newArray(int size) {
            this.serverURL = url;
        public Builder setConfigOverride(String config, String[] list) {
    }
            urlProps.putString("url", room);
        return token;
        }
         */
        }
        }
        @Override


            this.room = room;
            featureFlags = new Bundle();

         */
        public Builder setConfigOverride(String config, int value) {
        }
 *     http://www.apache.org/licenses/LICENSE-2.0
    }
 *
         * sent or received.
        token = in.readString();
        }
        if (userInfo != null) {
        featureFlags = in.readBundle();
    private JitsiMeetUserInfo userInfo;
    private URL serverURL;
            props.putBundle("userInfo", userInfo.asBundle());

        public Builder setUserInfo(JitsiMeetUserInfo userInfo) {
        Bundle urlProps = new Bundle();

        }
            options.userInfo = this.userInfo;


         * @return - The {@link Builder} object itself so the method calls can be chained.
         */
            setConfigOverride("subject", subject);
        return room;
        Bundle props = new Bundle();
            this.featureFlags.putBoolean(flag, value);
     */
        }
 * there.

    }
        room = in.readString();

            JitsiMeetConferenceOptions options = new JitsiMeetConferenceOptions();
    }
        public JitsiMeetConferenceOptions build() {
         */
        serverURL = (URL) in.readSerializable();
import android.os.Parcelable;
    public String getToken() {
     * JWT token used for authentication.


            config = new Bundle();

            return this;
import android.os.Bundle;
     */


        private String room;
        public Builder setServerURL(URL url) {


    /**
        }
         * Sets the conference subject.
         * Builds the immutable {@link JitsiMeetConferenceOptions} object with the configuration
    }
    //
            return this;
        /**

    public JitsiMeetUserInfo getUserInfo() {
    public Bundle getFeatureFlags() {

         */
        return props;
    public int describeContents() {
         * Sets the room where the conference will take place.
        dest.writeString(token);
 *

        return 0;
    }
     * Class used to build the immutable {@link JitsiMeetConferenceOptions} object.
         */

         * Indicates the conference will be joined with the camera muted.




    private Bundle config;

         * @return - The {@link Builder} object itself so the method calls can be chained.
 * Copyright @ 2019-present 8x8, Inc.
        }
         * @return - The {@link Builder} object itself so the method calls can be chained.
         * @return - The {@link Builder} object itself so the method calls can be chained.
        }
        }
        public Builder setAudioMuted(boolean audioMuted) {
        }
        dest.writeString(room);


        props.putBundle("url", urlProps);

 * The resulting {@link JitsiMeetConferenceOptions} object is immutable and represents how the
 *

            this.token = token;


    /**
    }
        public Builder setSubject(String subject) {
            options.room = this.room;
        if (token != null) {

 * Unless required by applicable law or agreed to in writing, software
        public Builder setVideoMuted(boolean videoMuted) {
 * Licensed under the Apache License, Version 2.0 (the "License");
                urlProps.putString("room", room);
        private Bundle featureFlags;
         * that this {@link Builder} instance specified.
            return this;

