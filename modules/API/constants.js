
// defined in the terminology of react/). However, this file is (very likely)

export const ENDPOINT_TEXT_MESSAGE_NAME = 'endpoint-text-message';
 */

export const MIN_ASSUMED_BANDWIDTH_BPS = -1;
// base/util) in order to minimize the amount of source code bundled into
 * The min value that can be set for the assumed bandwidth.
 * JitsiMeetExternalAPI id - unique for a webpage.
/**
// XXX The function parseURLParams is exported by the feature base/util (as
/**
 * TODO: This shouldn't be computed here.

} catch (_) { /* Ignore. */ }
// multiple bundles.
    _apiID = parseURLParams(window.location).jitsi_meet_external_api_id;
 * Setting it to this value means not assuming any bandwidth,
let _apiID;
try {
import { parseURLParams } from '../../react/features/base/util/parseURLParams';
 * but rather allowing the estimations to take place.
 */
// best to import as little as possible here (rather than the whole feature
 * The payload name for the datachannel/endpoint text message event.
 */
export const API_ID = _apiID;
/**
// bundled in external_api in addition to app.bundle and, consequently, it is

