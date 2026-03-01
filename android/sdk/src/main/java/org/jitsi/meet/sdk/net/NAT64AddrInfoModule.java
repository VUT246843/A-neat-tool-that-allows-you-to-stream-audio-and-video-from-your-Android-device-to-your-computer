        // Reset if cached for too long.
        }
package org.jitsi.meet.sdk.net;
 */
        }
     * address for given IPv4 address or with {@code null} if no
import com.facebook.react.bridge.Promise;
     * How long is the {@link NAT64AddrInfo} instance valid.
 * You may obtain a copy of the License at
 * distributed under the License is distributed on an "AS IS" BASIS,
     * The host for which the module wil try to resolve both IPv4 and IPv6
import com.facebook.react.bridge.ReactContextBaseJavaModule;

import java.net.UnknownHostException;
 * See[1] and [2] for more info on what NAT64 is.

    private NAT64AddrInfo info;
/**
 * Unless required by applicable law or agreed to in writing, software
    /**

     * @param ipv4Address IPv4 address string.
            info = null;
        try {
}

    /**

     * The {@code Log} tag {@code NAT64AddrInfoModule} is to log messages with.
     */
    extends ReactContextBaseJavaModule {
    }

        } catch (IllegalArgumentException exc) {
        String result;
     * instance.

            result = info == null ? null : info.getIPv6Address(ipv4Address);
 *
 *
    private final static String HOST = "ipv4only.arpa";

 *     http://www.apache.org/licenses/LICENSE-2.0

 * See the License for the specific language governing permissions and
     *
     * {@link NAT64AddrInfo} was resolved for the current network. Will be

     */
    /**
 * limitations under the License.
/*
        if (info == null) {

     * Creates new {@link NAT64AddrInfoModule}.
import org.jitsi.meet.sdk.log.JitsiMeetLogger;
import com.facebook.react.module.annotations.ReactModule;
            JitsiMeetLogger.e(exc, TAG + " Failed to get IPv6 address for: " + ipv4Address);
 * you may not use this file except in compliance with the License.
                info = NAT64AddrInfo.discover(host);
    /**
 *
     * Tries to obtain IPv6 address for given IPv4 address in NAT64 environment.
            // address resolved.
    private final static long INFO_LIFETIME = 60 * 1000;
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     */
     */
            } catch (UnknownHostException e) {
        }
    public void getIPv6Address(String ipv4Address, final Promise promise) {
        super(reactContext);
        if (System.currentTimeMillis() - infoTimestamp > INFO_LIFETIME) {
            String host = HOST;
    @Override
    /**
     */


    public NAT64AddrInfoModule(ReactApplicationContext reactContext) {


     */
    public final static String NAME = "NAT64AddrInfo";
            result = null;


 * [1]: https://tools.ietf.org/html/rfc6146
            // We don't want to reject. It's not a big deal if there's no IPv6
     * rejected if given {@code ipv4Address} is not a valid IPv4 address.
     */
        promise.resolve(result);
public class NAT64AddrInfoModule
import com.facebook.react.bridge.ReactApplicationContext;
     * @param promise a {@link Promise} which will be resolved either with IPv6
     * @param reactContext the react context to be used by the new module
    private final static String TAG = NAME;
    /**
    private long infoTimestamp;
        return NAME;
 * [2]: https://tools.ietf.org/html/rfc6052
     * When {@link #info} was created.
     * The {@link NAT64AddrInfo} instance which holds NAT64 prefix/suffix.
    @ReactMethod
            try {
 * This module exposes the functionality of creating an IPv6 representation

     *
            infoTimestamp = System.currentTimeMillis();
    public String getName() {
    }
 * Copyright @ 2018-present Atlassian Pty Ltd
    }
            }
                JitsiMeetLogger.e(e, TAG + " NAT64AddrInfo.discover: " + host);
 */
 *
import com.facebook.react.bridge.ReactMethod;
     * addresses in order to figure out the NAT64 prefix.
 * of IPv4 addresses in NAT64 environment.
@ReactModule(name = NAT64AddrInfoModule.NAME)
    /**
 * Licensed under the Apache License, Version 2.0 (the "License");
