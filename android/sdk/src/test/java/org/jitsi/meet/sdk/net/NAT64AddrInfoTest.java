        String ipv4String = NAT64AddrInfo.bytesToHexString(ipv4Bytes);
/*
        try {
 * See the License for the specific language governing permissions and
 * You may obtain a copy of the License at

    /**
import org.junit.Test;
            = NAT64AddrInfo.figureOutNAT64AddrInfo(
    @Test
        } catch (IllegalArgumentException exc) {
                newIPv6);
 */

        String ipv6Str = buildIPv6Addr(prefix, suffix, ipv4String);
import static org.junit.Assert.*;
}
/**
     * Test case for the 48 prefix length.

    public void test56Prefix() {
        testPrefixSuffix(
        byte[] ipv4Bytes = NAT64AddrInfo.ipv4AddressStringToBytes(ipv4);
        String suffix = "BB87C8";

 * Copyright @ 2017-present Atlassian Pty Ltd
    }
    @Test
    }
 * Unless required by applicable law or agreed to in writing, software

    /**
    }

        String ipv6Str = prefix + ipv4Hex + suffix;


 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        BigInteger ipv6Address = new BigInteger(ipv6Str, 16);
    }
     * Test case for the 32 prefix length.
        testPrefixSuffix(prefix, suffix, "97.54.3.23", "77.49.0.33");

     * Test case for the 40 prefix length.
 *
    @Test
     */
     */
 *
    }


                NAT64AddrInfo.hexStringToIPv6String(
            /* OK */
        return ipv6Str;
        testPrefixSuffix(prefix, suffix, "34.72.234.255", "1.235.3.65");
                NAT64AddrInfo.hexStringToIPv6String(ipv6Address.toString(16)),
    }
            String prefix, String suffix, String ipv4Hex) {
 *
     * Test case for the 96 prefix length.
 * limitations under the License.
    /**


        if (suffix.length() > 0) {
        newIPv6 = nat64AddrInfo.getIPv6Address(otherIPv4);

        testPrefixSuffix(prefix, suffix, "10.23.56.121", "97.65.32.21");
        String prefix = "1FF2A227B3AAF3";
        String newIPv6 = nat64AddrInfo.getIPv6Address(ipv4);
     * Test case for the 64 prefix length.



        assertEquals(
    @Test
        throws UnknownHostException {
        String suffix = "D972A2BB87C8";

 * distributed under the License is distributed on an "AS IS" BASIS,

     */
        assertEquals(

        String suffix = "20D972A2BB87C8";
public class NAT64AddrInfoTest {
    public void test96Prefix() {
 * Tests for {@link NAT64AddrInfo} class.
 * Licensed under the Apache License, Version 2.0 (the "License");
            fail("Did not throw IllegalArgumentException");
    }
    private static String buildIPv6Addr(
    /**

        String prefix = "1FF2A227B3AAF3D2";
    public void test48Prefix() {
                        buildIPv6Addr(prefix, suffix, ipv4Addr2Hex)),
    /**

    public void testInvalidIPv4Format() {
        String prefix = "1FF2A227B3";
            ipv6Str = new StringBuilder(ipv6Str).insert(16, "00").toString();
        testInvalidIPv4Format("256.1.2.3");
 * you may not use this file except in compliance with the License.


     */
        testPrefixSuffix(prefix, suffix, "48.46.87.34", "23.87.145.4");
        assertNotNull("Failed to figure out NAT64 info", nat64AddrInfo);
 *     http://www.apache.org/licenses/LICENSE-2.0
     */
        String suffix = "A2BB87C8";
    private void testPrefixSuffix(
package org.jitsi.meet.sdk.net;
import java.net.UnknownHostException;

 */
    }
    public void test40Prefix() {
        testInvalidIPv4Format("FE80:CD00:0000:0CDA:1357:0000:212F:749C");
    @Test
            String prefix, String suffix, String ipv4, String otherIPv4) {
    @Test
        }
    public void test64Prefix() {
        byte[] ipv4Addr2 = NAT64AddrInfo.ipv4AddressStringToBytes(otherIPv4);
    }

    }
        String prefix = "1FF2A227B3AA";
        String prefix = "1FF2A227";
        }
import java.math.BigInteger;
    public void test32Prefix()
     */
                newIPv6);
        NAT64AddrInfo nat64AddrInfo
    /**
        String ipv4Addr2Hex = NAT64AddrInfo.bytesToHexString(ipv4Addr2);
        testPrefixSuffix(prefix, suffix, "162.63.65.189", "135.222.84.206");
     * Test case for the 56 prefix length.
                    ipv4Bytes, ipv6Address.toByteArray());
        String suffix = "72A2BB87C8";

            NAT64AddrInfo.ipv4AddressStringToBytes(ipv4Str);
    private void testInvalidIPv4Format(String ipv4Str) {
    @Test

                "260777000000000400000000", "", "203.0.113.1", "23.17.23.3");
