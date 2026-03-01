 */
    PostMessageTransportBackend,
 *
/**

const postisOptions = {};
import { API_ID } from '../API/constants';
 * @returns {Transport}


        transport = new Transport({ backend: new PostMessageTransportBackend({ postisOptions }) });
};

    Transport
// FIXME: change to '../API' when we update to webpack2. If we do this now all
 * The instance of Transport class that will be used by Jitsi Meet.
    transport.setBackend(externalTransportBackend);
 * Returns the instance of Transport class that will be used by Jitsi Meet.
 * @param {Object} externalTransportBackend - The new transport.
import { getJitsiMeetGlobalNS } from '../../react/features/base/util/helpers';
}
if (typeof API_ID === 'number') {
 * @returns {void}
 */
    if (!transport) {

 */
getJitsiMeetGlobalNS().setExternalTransportBackend = externalTransportBackend =>
import { PostMessageTransportBackend, Transport } from '@jitsi/js-utils/transport';
}
 *
let transport;
 *
 *
/**
// files from API modules will be included in external_api.js.
/**

/**


 * @type {Object}
    postisOptions.scope = `jitsi_meet_external_api_${API_ID}`;
 * Option for the default low level transport.
export function getJitsiMeetTransport() {
 * @type {Transport}
 * Sets the transport to passed transport.
export {
    return transport;
    }
 */

