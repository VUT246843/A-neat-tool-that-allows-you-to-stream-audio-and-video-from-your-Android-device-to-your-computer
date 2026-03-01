        newIPv6Str.append(bytesToHexString(ipv4AddressBytes));
    }
    /**
        byte[] ipv4AddressBytes = ipv4AddressStringToBytes(ipv4Address);
     *
        String suffix = null;
     */
     */
     * @param host the host for which the code will try to discover IPv4 and
                    prefix = ipv6Str.substring(0, prefixLength / 4);
 *
    }
    /**
        // +--+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
/**
import java.net.InetAddress;
     * An overload for {@link #hexStringToIPv6String(StringBuilder)}.
        for (int i = 32 - 4; i > 0; i -= 4) {
        }
    /**
 * See the License for the specific language governing permissions and
            throw new IllegalArgumentException(
     * string which includes the ':' signs.
                ipv6 = addr;
     */
     * address.
 * You may obtain a copy of the License at
        return str.toString().toUpperCase();
        try {
     * of the current NAT64 network or {@code null} if the prefix could not be
        return hexStringToIPv6String(newIPv6Str);
    private final String prefix;
     * @return byte representation of given IPv4 address string.
     * @throws IllegalArgumentException if given string is not a valid IPv4
        // +--+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+

     *
        }
     * @return eg. FE80:CD00:0000:0CDA:1357:0000:212F:749C
            newIPv6Str.append(suffix);
        return prefix != null ? new NAT64AddrInfo(prefix, suffix) : null;
        }
     * @param ipv4Address eg. '192.34.2.3'
        // +--+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
     * The NAT64 suffix (if any) used to construct IPv6 from an IPv4 address.

 * both IPv6 and IPv4 addresses of a host and then trying to find a place where
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    }
 * Unless required by applicable law or agreed to in writing, software
        // |32|     prefix    |v4(32)         | u | suffix                    |
        // |48|     prefix            |v4(16) | u | (16)  | suffix            |
        if (suffix != null) {
                    suffix = ipv6Str.substring(ipv6Str.length() - suffixLength);

            byte[] ipv4AddrBytes,
 * suffix configured by the administrator. Those are figured out by discovering
    /**
            hexStr.append(String.format("%02X", b));
        String prefix = null;

     * @return an IPv6 address string.
        // +--+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
     * Based on the NAT64 prefix and suffix will create an IPv6 representation
            address = InetAddress.getByName(ipv4Address);
     * @throws UnknownHostException thrown by {@link InetAddress#getAllByName}.
 * distributed under the License is distributed on an "AS IS" BASIS,
    /**

package org.jitsi.meet.sdk.net;
        if (ipv4 != null && ipv6 != null) {
        byte[] bytes = address.getAddress();
 *     http://www.apache.org/licenses/LICENSE-2.0
     * as returned by {@link InetAddress#getAddress()}.
    public static NAT64AddrInfo discover(String host)
            if (bytes.length == 4) {
     * @return {@link NAT64AddrInfo} instance which contains the prefix/suffix
     * addresses resolved for given {@code host}.
                    break;
    /**
    }
                        ipv6Str.substring(
        }
     *

     * Parses an IPv4 address string and returns it's byte array representation.
     * IPv6 addresses which then will be used to figure out the NAT64 prefix.

                                prefixLength / 4, prefixLength / 4 + 8))) {
            prefix = ipv6Str.substring(0, prefixLength / 4);
        InetAddress ipv6 = null;
        // +--+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
            newIPv6Str.insert(16, "00");
 * Constructs IPv6 addresses for IPv4 addresses in the NAT64 environment.
        if (bytes.length != 4) {

    static byte[] ipv4AddressStringToBytes(String ipv4Address) {
        }
        return hexStringToIPv6String(new StringBuilder(hexStr));
    /**
     * @param ipv4Address eg. '192.168.3.23'
            byte[] bytes = addr.getAddress();
}
            str.insert(i, ":");

        StringBuilder newIPv6Str = new StringBuilder();
            throws UnknownHostException {
     * The NAT64 prefix added to construct IPv6 from an IPv4 address.

        // |40|     prefix        |v4(24)     | u |(8)| suffix                |
     * an attempt to figure out what are the NAT64 prefix and suffix.
        return bytes;
                ipv4 = addr;
     * successfully discovered or {@code null} if it failed for any reason.
     * Creates new instance of {@link NAT64AddrInfo}.
    }
 * NAT64 translates IPv4 to IPv6 addresses by adding "well known" prefix and
    }
            byte[] ipv6AddrBytes) {
     */
     *
        // NAT64 address format:
    static String hexStringToIPv6String(String hexStr) {
        // +--+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
        for(InetAddress addr : InetAddress.getAllByName(host)) {

    /**
 * the IPv4 address fits into the format described here:
     * @param suffix the NAT64 suffix.
 *
    /**

     * found.
    public String getIPv6Address(String ipv4Address) {
        return null;
 */
    private final String suffix;


        // |96|     prefix                                    |    v4(32)     |
        InetAddress address;
     * of the given IPv4 address.

     */

                if (ipv4Str.equalsIgnoreCase(
     * @param ipv6AddrBytes the IPv6 address of the same host in NAT64 network,

        String ipv6Str = bytesToHexString(ipv6AddrBytes);
            // Cut out the 'u' octet
     * @return {@link NAT64AddrInfo} instance if the NAT64 prefix/suffix was
 * Copyright @ 2018-present Atlassian Pty Ltd
        }
            for (prefixLength = 64, suffixLength = 6; prefixLength >= 32; ) {
                    "Invalid IP address: " + ipv4Address, e);
 * you may not use this file except in compliance with the License.
     */


 * Licensed under the Apache License, Version 2.0 (the "License");
                suffixLength += 2;

    /**
     *
 *
     * Tries to discover the NAT64 prefix/suffix based on the IPv4 and IPv6
                }
    private NAT64AddrInfo(String prefix, String suffix) {
     * @param prefix the NAT64 prefix.

        if (ipv4Str.equalsIgnoreCase(ipv6Str.substring(prefixLength / 4))) {
        } catch (UnknownHostException e) {
     * @return IPv6 address string eg. FE80:CD00:0000:0CDA:1357:0000:212F:749C
     * Based on IPv4 and IPv6 addresses of the same host, the method will make
                    "Not an IPv4 address: " + ipv4Address);
        // +--+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+

        return hexStr.toString();

     *
     * Coverts bytes array to upper case HEX string.
        int prefixLength = 96;
    static String hexStringToIPv6String(StringBuilder str) {
        for (byte b : bytes) {


            return figureOutNAT64AddrInfo(ipv4.getAddress(), ipv6.getAddress());
     * as returned by {@link InetAddress#getAddress()}.
        InetAddress ipv4 = null;
     */
 * https://tools.ietf.org/html/rfc6052#section-2.2
     */
        this.suffix = suffix;
            // Insert the 'u' octet.
    }
 */
     */
     * @param bytes an array of bytes to be converted
            }
        }
        StringBuilder hexStr = new StringBuilder();
/*
            }
     *
        // +--+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
     * @return ex. "010AFF" for an array of {1, 10, 255}.
            } else if (bytes.length == 16) {
     * @param str a hex representation of IPv6 address bytes.
     *

        }
import java.net.UnknownHostException;
        } else {
            ipv6Str = ipv6Str.substring(0, 16) + ipv6Str.substring(18);
 * limitations under the License.
        // |64|     prefix                    | u |   v4(32)      | suffix    |
    static NAT64AddrInfo figureOutNAT64AddrInfo(
        newIPv6Str.append(prefix);
        this.prefix = prefix;
     */
     * @param hexStr a hex representation of IPv6 address bytes.

     * @param ipv4AddrBytes the IPv4 address of the same host in NAT64 network,
    }
    static String bytesToHexString(byte[] bytes) {
        String ipv4Str = bytesToHexString(ipv4AddrBytes);
     * Converts from HEX representation of IPv6 address bytes into IPv6 address
        // |PL| 0-------------32--40--48--56--64--72--80--88--96--104---------|
        int suffixLength = 0;
        // |56|     prefix                |(8)| u |  v4(24)   | suffix        |
public class NAT64AddrInfo {

            throw new IllegalArgumentException(

                prefixLength -= 8;

 *
     * @throws IllegalArgumentException if the address is not in valid format.
