    return transport.sendRequest({
 * @param {Transport} transport - The @code{Transport} instance responsible for
export function setVideoInputDevice(transport, label, id) {
 * the external communication.
 * @returns {Promise}
 * @param {string} [deviceType] - Values - 'output', 'input' or undefined.
        device
 * the external communication.
        label
    return transport.sendRequest({
 * the external communication.
    });

 */
    return _setDevice(transport, {
 *
}
/**
    return transport.sendRequest({
    }).catch(e => {
        name: 'setDevice',
 * @param {string} id - The id of the new device.
/**
    });
 * and with false if not.
 * @returns {Promise}
        kind: 'audioinput',
}
export function isMultipleAudioInputSupported(transport) {
 * @returns {Promise}
        name: 'isMultipleAudioInputSupported'
 */

 * @returns {Promise}
        type: 'devices',

export function isDeviceChangeAvailable(transport, deviceType) {

        type: 'devices',
        return {};
        name: 'getAvailableDevices'
}
 */
        kind: 'videoinput',
/**
 * @param {Transport} transport - The @code{Transport} instance responsible for
}
export function setAudioInputDevice(transport, label, id) {
const logger = Logger.getLogger('api:external');

 */
 * @returns {Promise}
/**
 * @param {Transport} transport - The @code{Transport} instance responsible for
 */
    return transport.sendRequest({
 * @param {string} id - The id of the new device.
        label

export function getCurrentDevices(transport) {
 * @param {Object} device - The new device to be used.
 *
 *
 */
 * @returns {Promise}
        kind: 'audiooutput',
}
 */
        type: 'devices',
 * @param {string} label - The label of the new device.
function _setDevice(transport, device) {

 * @param {Transport} transport - The @code{Transport} instance responsible for
 * @param {Transport} transport - The @code{Transport} instance responsible for
        logger.error(e);
 * the external communication.
        logger.error(e);
 *
 * @param {Transport} transport - The @code{Transport} instance responsible for
 * Default - 'input'.
        type: 'devices',
 * @param {string} id - The id of the new device.
 * the external communication.
/**
    return transport.sendRequest({
 * Returns Promise that resolves with true if the device change is available
export function getAvailableDevices(transport) {

    });
 *


        return {};
        id,
export function setAudioOutputDevice(transport, label, id) {
 * Returns Promise that resolves with result an list of available devices.
 * @param {string} label - The label of the new device.
/**
import Logger from '@jitsi/logger';
 * @returns {Promise}
        name: 'isDeviceChangeAvailable'
 * Returns Promise that resolves with true if multiple audio input is supported
 * @param {Transport} transport - The @code{Transport} instance responsible for
    });
        name: 'getCurrentDevices'
 * Sets the audio output device to the one with the label or id that is passed.
    });

        type: 'devices',
    return _setDevice(transport, {
    }).catch(e => {
        deviceType,
 * @returns {Promise}
 * Returns Promise that resolves with current selected devices.
 * @param {string} label - The label of the new device.
 * the external communication.
 */
    });
    return _setDevice(transport, {
/**
    });
        id,
 * and with false if not.
 * the external communication.
 *
        label
        id,
 *
}
 * @param {Transport} transport - The @code{Transport} instance responsible for
}
 *
 * Sets the audio input device to the one with the label or id that is passed.
 * Sets the currently used device to the one that is passed.
 * Sets the video input device to the one with the label or id that is passed.
 * the external communication.
/**
}
    });
