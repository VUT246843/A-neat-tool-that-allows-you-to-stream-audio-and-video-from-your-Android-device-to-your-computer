/**



/**
 * Indicates if we're currently in full screen mode.


/**

 */
};

UI.getSharedDocumentManager = () => etherpadManager;
 */

    etherpadManager && etherpadManager.toggleEtherpad();
    dockToolbox,
    }
    if (isMobileBrowser()) {
    }

    window.removeEventListener('resize', onResize);

/**
/**
    }
 * Setup some DOM event listeners.

    window.addEventListener('resize', onResize);
        return;
export default UI;
    const etherpadBaseUrl = sanitizeUrl(configState.etherpad_base);
const logger = Logger.getLogger('ui:core');
    document.removeEventListener('fullscreenchange', onResize);
import {

 * Update audio level visualization for specified user.
    UI.showToolbar();

}
 */
UI.bindEvents = () => {
import { joinLeaveNotificationsDisabled } from '../../react/features/notifications/functions';
};
    showNotification
UI.isFullScreen = function() {
    document.addEventListener('mozfullscreenchange', onResize);

 */
function onResize() {
UI.setVideoMuted = function(id) {


};
};
 * @param {string} name etherpad id
        // FIXME: move updateUserStatus in participantPresenceChanged action

import { NOTIFICATION_TIMEOUT_TYPE } from '../../react/features/notifications/constants';
 * Sets muted video state for participant
import VideoLayout from './videolayout/VideoLayout';
        titleKey: `${displayName} connected`,
    }

 * Currently used by tests (torture).
 */
};
UI.unbindEvents = () => {
/**
UI.showToolbar = timeout => APP.store.dispatch(showToolbox(timeout));
/**
UI.initEtherpad = name => {
import { sanitizeUrl } from '../../react/features/base/util/uri';
 * Currently used by tests (torture).
 * mode, {false} otherwise
 * Show user on UI.
        document.body.style.backgroundColor = alphaColor;

 * @return {boolean} {true} to indicate that we're currently in full screen

    document.addEventListener('fullscreenchange', onResize);
 * @param {number} lvl audio level
 */
    const { getState, dispatch } = APP.store;



        const alphaColor = setColorAlpha(backgroundColor, config.backgroundAlpha);

        APP.conference.updateVideoIconEnabled();
    if (config.backgroundAlpha !== undefined) {

import {
 */
} from '../../react/features/notifications/actions';
    const configState = getState()['features/base/config'];
};
    // We hide status updates when join/leave notifications are disabled,

 * Returns the id of the current video shown on large.
    APP.store.dispatch(conferenceWillInit());

    dispatch(setDocumentUrl(url.toString()));
    conferenceWillInit

// Used by torture.
 */
UI.getLargeVideo = function() {
    setToolboxEnabled,
};
 * @param {JitsiParticipant} user
 */
 * @param {string} status - The new status.
            APP.store.dispatch(setNotificationsEnabled(false));

 * Handles etherpad click.
UI.onEtherpadClicked = function() {
UI.handleLastNEndpoints = function(leavingIds, enteringIds) {
import { isMobileBrowser } from '../../react/features/base/environment/utils';
        document.body.classList.add('desktop-browser');
    etherpadManager = new EtherpadManager();
    showToolbox
UI.initConference = function() {
UI.start = function() {
    const status = user.getStatus();
import {
        }
 */

 */
 */
UI.updateLargeVideo = (id, forceUpdate) => VideoLayout.updateLargeVideo(id, forceUpdate);
    // Resize and reposition videos in full screen mode.
 * Updates the user status.
};
import EtherpadManager from './etherpad/Etherpad';
    return VideoLayout.getLargeVideoID();
import { setColorAlpha } from '../../react/features/base/util/helpers';
    if (etherpadManager || !etherpadBaseUrl || !name) {




};
UI.dockToolbar = dock => APP.store.dispatch(dockToolbox(dock));
import UIUtil from './util/UIUtil';
    const displayName = user.getDisplayName();
    return UIUtil.isFullScreen();
        if (!config.iAmSipGateway) {
        // in case of iAmSipGateway keep local video visible

 * Setup and show Etherpad.
    }
 */
} from '../../react/features/toolbox/actions.web';
    if (status) {
} from '../../react/features/base/conference/actions';
import { setDocumentUrl } from '../../react/features/etherpad/actions';
/**
        etherpadManager.toggleEtherpad();
/**
    document.addEventListener('webkitfullscreenchange', onResize);
    document.removeEventListener('webkitfullscreenchange', onResize);
 *
/**
 * @param {string} id user id
        descriptionKey: 'dialOut.statusMessage'
UI.setAudioLevel = (id, lvl) => VideoLayout.setAudioLevel(id, lvl);
// Used by torture.
UI.updateUserStatus = (user, status) => {

};
    } else {
 * Starts the UI module and initializes all related components.

    APP.store.dispatch(showNotification({

    }, NOTIFICATION_TIMEOUT_TYPE.SHORT));



};
/**
 * Returns the current video shown on large.
/**
        APP.store.dispatch(setToolboxEnabled(false));
 *
};
        document.body.classList.add('mobile-browser');
 */
// TODO: Export every function separately. For now there is no point of doing
        return;
/* global APP, config */
        UI.updateUserStatus(user, status);
/**
};
    VideoLayout.onResize();
// this because we are importing everything.
    const url = new URL(name, etherpadBaseUrl);
    VideoLayout.onLastNEndpointsChanged(leavingIds, enteringIds);
    if (!status || calleeInfoVisible || joinLeaveNotificationsDisabled()) {
 * @param {JitsiParticipant} user - The user which status we need to update.
 * @return {EtherpadManager} the shared document manager object
 * Initialize conference UI.
const UI = {};
    const reduxState = APP.store.getState() || {};
let etherpadManager;
    const { calleeInfoVisible } = reduxState['features/invite'] || {};
/**
    }
    document.removeEventListener('mozfullscreenchange', onResize);
    }
 * Returns the shared document manager object.
    VideoLayout._updateLargeVideoIfDisplayed(id, true);
        const backgroundColor = getComputedStyle(document.body).getPropertyValue('background-color');
    return VideoLayout.getLargeVideo();

    if (config.iAmRecorder) {
    // as jigasi is the component with statuses and they are seen as join/leave notifications.
UI.addUser = function(user) {
    }
import Logger from '@jitsi/logger';
 *
    logger.log('Etherpad is enabled');
 */

    if (APP.conference.isLocalId(id)) {
/**

    setNotificationsEnabled,
UI.getLargeVideoID = function() {
 * Unbind some DOM event listeners.
    if (configState.openSharedDocumentOnJoin) {
