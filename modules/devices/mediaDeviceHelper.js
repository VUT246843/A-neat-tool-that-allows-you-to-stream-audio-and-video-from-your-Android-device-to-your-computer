
        }
            return createAudioTrack();
                    micDeviceId
        if (newLabel) {
                // If we fail to do this, try to create them separately.
    }
            // If a Firefox user with manual permission prompt chose a different
        return preferredAudioOutputDeviceId;
                createLocalTracks({
        return true;
    getAudioOutputDeviceId
        return {
            // device from what we have stored as the preferred device we accept
     * Determines if currently selected media devices should be changed after
    const localVideoDevice = availableVideoInputDevices.find(
                userSelectedMicDeviceLabel: localAudioDevice.label
 * Determines if currently selected audio output device should be changed after
                userSelectedCameraDeviceLabel: localVideoDevice.label
            return selectedAudioInputDeviceId;
    // then it's connected OR new device was connected when previous
            return false;

            return createVideoTrack();
function getNewAudioOutputDevice(newDevices) {
                createLocalTracks({
                    if (videoTrackError) {
    const selectedVideoInputDevice = availableVideoInputDevices.find(
 * @returns {string|undefined} - ID of new audio output device to use, undefined
     * @param {JitsiLocalTrack} localAudio
 */
                .catch(() => Promise.all([
        } else {
    getUserSelectedCameraDeviceId,
            d.deviceId === selectedAudioOutputDeviceId)) {
    getUserSelectedOutputDeviceId
                    return [];
        && availableAudioOutputDevices.find(d => d.deviceId === preferredAudioOutputDeviceId)) {
     */
            && availableVideoInputDevices[0].label !== '') {
        /**
            audiooutput: getNewAudioOutputDevice(newDevices)

            APP.store.dispatch(updateSettings({
    newDeviceListAddedLabelsOnly(oldDevices, newDevices) {
         */

            }));
     */
    getNewMediaDevicesAfterDeviceListChanged( // eslint-disable-line max-params
    /**
                    createVideoTrack(false).then(([ stream ]) => stream)

    const localAudioDevice = availableAudioInputDevices.find(
    if (!JitsiMeetJS.mediaDevices.isDeviceChangeAvailable('output')) {
     * list changed. Shows error dialog in case of failures.
/**
    if (preferredAudioOutputDeviceId
    }
         *
            // device from what we have stored as the preferred device we accept
     * @returns {boolean}
                .catch(err => {
     * Tries to create new local tracks for new devices obtained after device

import {
    const localAudioDeviceId = localAudio?.getDeviceId();
        };
            return selectedVideoInputDeviceId;
            localVideo,
    // Switch to 'default' audio output device if we don't have the selected one

 * list of available devices has been changed.
     *  audiooutput: (string|undefined)
    // we want to use it as it was just added
            return (
            // and store that as the new preferred device.
 * Determines if currently selected audio input device should be changed after
    if (!localVideo || localVideo.disposed || localVideo.isEnded()) {
                    devices: [ 'video' ],
                }));
            // And here we handle case when we already have some device working,
     * @returns {Promise.<JitsiLocalTrack[]>}
                    }
        d => d.deviceId === localAudioDeviceId);
            if (oldDevice.label !== '') {


} from '../../react/features/base/settings/functions';

            return availableVideoInputDevices[0].deviceId;
                .then(tracks => {
    // but then device is connected OR new device was connected when
/* global APP, JitsiMeetJS */
                userSelectedMicDeviceId: localAudioDeviceId,

        } else if (videoRequested && !audioRequested) {
 * list of available devices has been changed.
        // (label is not an empty string), then we will try to use the first

            && selectedVideoInputDeviceId !== localVideoDeviceId) {
                    cameraDeviceId,
        } else if (audioRequested && !videoRequested) {
    const preferredAudioOutputDeviceId = getUserSelectedOutputDeviceId(APP.store.getState());
} from '../../react/features/base/devices/functions.web';

         *
 */
                    return tracks.filter(t => typeof t !== 'undefined');

}
            APP.store.dispatch(updateSettings({
     * @returns {{
    /**
                    cameraDeviceId,
        }
        /**
        const audioRequested = Boolean(micDeviceId);
        if (selectedVideoInputDevice && selectedVideoInputDeviceId) {
            videoinput: getNewVideoInputDevice(newDevices, localVideo, newLabels),
        }
        return 'default';
        } else if (availableAudioInputDevices.length
        d => d.kind === 'audioinput');
import { updateSettings } from '../../react/features/base/settings/actions';
            localAudio,
            const newDevice = newDevices.find(nd => nd.deviceId === oldDevice.deviceId);
            newDevices,
 * @param {boolean} newLabel
        } else if (availableVideoInputDevices.length
export default {
                }));
            return (
                    if (audioTrackError) {
         */
 * @param {MediaDeviceInfo[]} newDevices
 */
        d => d.deviceId === selectedAudioInputDeviceId);
        }

     *  }}
                return false;
        && preferredAudioOutputDeviceId !== selectedAudioOutputDeviceId
        function createVideoTrack(showError = true) {
    // Here we handle case when no video input device was initially plugged,
            if (!newDevice || newDevice.label === '') {
 *      if audio output device should not be changed.
            micDeviceId) {
     * @param {MediaDeviceInfo[]} newDevices
    }
    getUserSelectedMicDeviceId,
    const availableVideoInputDevices = newDevices.filter(
 * list of available devices has been changed.
        // If we have new video device and permission to use it was granted
function getNewVideoInputDevice(newDevices, localVideo, newLabel) {
            }));
    // available anymore.
     * @param {string} (micDeviceId)
 *      if video input device should not be changed.
        if (newLabel) {
    const availableAudioInputDevices = newDevices.filter(
            // And here we handle case when we already have some device working,
                    devices: [ 'audio', 'video' ],
        }
                userSelectedCameraDeviceId: localVideoDeviceId,
            }
 * @param {JitsiLocalTrack} localAudio
                })
function getNewAudioInputDevice(newDevices, localAudio, newLabel) {
            // If a Firefox user with manual permission prompt chose a different
    // previous track has ended.
                    createAudioTrack(false).then(([ stream ]) => stream),
    notifyCameraError,
            createLocalTracks,
    }
                    showError && APP.store.dispatch(notifyMicError(err));
        return;
 * @param {JitsiLocalTrack} localVideo

            && availableAudioInputDevices[0].label !== '') {
        }

        if (oldDevicesFlattend.length !== newDevices.length) {
     * @param {JitsiLocalTrack} localVideo
        const oldDevicesFlattend = flattenAvailableDevices(oldDevices);
            return availableAudioInputDevices[0].deviceId;
            }
    notifyMicError
                .catch(err => {
                }));
            // but we plug-in a "preferred" (previously selected in settings, stored
 * @param {boolean} newLabel
                        APP.store.dispatch(notifyCameraError(videoTrackError));
                    }
        const videoRequested = Boolean(cameraDeviceId);
    const selectedVideoInputDeviceId = getUserSelectedCameraDeviceId(APP.store.getState());
        // (label is not an empty string), then we will try to use the first
        if (audioRequested && videoRequested) {
                    showError && APP.store.dispatch(notifyCameraError(err));
        function createAudioTrack(showError = true) {
        d => d.deviceId === selectedVideoInputDeviceId);
        // If we have new audio device and permission to use it was granted
    } else if (selectedAudioInputDevice
        d => d.deviceId === localVideoDeviceId);
            cameraDeviceId,
     * @param {function} createLocalTracks
    flattenAvailableDevices,
        oldDevicesFlattend.forEach(oldDevice => {
 *      if audio input device should not be changed.

    },
    }
     * @param {MediaDeviceInfo[]} newDevices
        let audioTrackError;
                })
                ]))
                        APP.store.dispatch(notifyMicError(audioTrackError));
    // if the preferred one is not the selected and is available in the new devices
} from '../../react/features/base/devices/actions.web';
                    audioTrackError = err;
    const localVideoDeviceId = localVideo?.getDeviceId();
                    cameraDeviceId: null,
    const selectedAudioOutputDeviceId = getAudioOutputDeviceId();
/**
            // First we try to create both audio and video tracks together.
 * @returns {string|undefined} - ID of new microphone device to use, undefined
    // track has ended.
    /**
        let videoTrackError;
     * Checks if the only difference between an object of known devices compared
     * @param {string} (cameraDeviceId)
 * @param {MediaDeviceInfo[]} newDevices
        && selectedAudioInputDeviceId !== localAudioDeviceId) {

     * to an array of new devices are only the labels for the devices.
/**
        // available device.
                    return [];
            // in local storage) device.


            return (
 * Determines if currently selected video input device should be changed after
    if (selectedAudioOutputDeviceId !== 'default'
            // but we plug-in a "preferred" (previously selected in settings, stored

        } else {
        }
        && !availableAudioOutputDevices.find(d =>
                    videoTrackError = err;
    const selectedAudioInputDevice = availableAudioInputDevices.find(
        });
    createLocalTracksAfterDeviceListChanged(
            // and store that as the new preferred device.
    // Here we handle case when no device was initially plugged, but
}

            newLabels) {
    if (!localAudio || localAudio.disposed || localAudio.isEnded()) {
            return selectedVideoInputDeviceId;
    },
            return selectedAudioInputDeviceId;
                })
            // in local storage) device.
import {
        }
        d => d.kind === 'videoinput');

    } else if (selectedVideoInputDevice
 * @param {MediaDeviceInfo[]} newDevices

 * @returns {string|undefined} - ID of new camera device to use, undefined

    }
     */
                    micDeviceId: null
     * @param {Object} oldDevices
        if (selectedAudioInputDevice && selectedAudioInputDeviceId) {
    const selectedAudioInputDeviceId = getUserSelectedMicDeviceId(APP.store.getState());
     *  videoinput: (string|undefined),
     *  audioinput: (string|undefined),
}
     * list of available devices has been changed.
        return Promise.resolve([]);
                createLocalTracks({
    const availableAudioOutputDevices = newDevices.filter(
        d => d.kind === 'audiooutput');
            audioinput: getNewAudioInputDevice(newDevices, localAudio, newLabels),
};
                    micDeviceId
                    devices: [ 'audio' ],

        // available device.
                return false;
import {
