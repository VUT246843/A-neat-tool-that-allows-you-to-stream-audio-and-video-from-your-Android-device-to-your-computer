     * 3 seconds for the expected status to appear.
        // depending on "muted" argument
     *
     * @param {number} number - The number of remote streams to wait for.

     * @returns {Filmstrip}
                    max: 360,
        return await this.driver.waitUntil(async () => await this.execute(
     * Waits to join the muc.

            },
        return await this.execute(() => typeof APP !== 'undefined'

    }
            timeoutMsg: `expected P2P ICE to be connected for 15s for ${this.name}`
                    timeout: 5_000,
    private _token?: IToken;
            console.error('An error occurred while trying to execute a script: ', error);
                    .appendTo(document.head);
     */
    /**
    }


            timeoutMsg: `Video is ${reverse ? 'not' : ''} displayed in the local thumbnail for ${participant.name}`
            enabled: false,
     * @param p
            participant: Participant, reverse = false, defaultAvatar = false, image = false): Promise<void> {
     */
            && APP.store?.getState()['features/base/conference'].conference?.getBreakoutRooms()?.isBreakoutRoom());

            {
     * @param {string | ((...innerArgs: InnerArguments) => ReturnValue)} script - The script that will be executed.
        }
import { multiremotebrowser } from '@wdio/globals';
                console.log(`${new Date().toISOString()} document.readyState: ${document.readyState}`);

    /**
            .catch(_ => {}); // eslint-disable-line @typescript-eslint/no-empty-function
    getInviteDialog(): InviteDialog {
        if (!this._iFrameApi || this._inMainFrame) {

    /**
        disableModeratorIndicator: true,

import ParticipantsPane from '../pageobjects/ParticipantsPane';


    }
    private _inMainFrame: boolean = true;
     *

     */
    async isBreakoutRoomsSupported() {
    }

        return new PasswordDialog(this);
    /**
            // For the iFrame API the tenant is passed in a different way.
import assert from 'assert';
            await this.switchToIFrame();
     * Returns participant endpoint ID.
            throw error;


                timeoutMsg: `Timeout waiting for Page Load Request to complete for ${this.name}.`
            {
    /**
            .waitForExist({

            // disable the blur effect in firefox as it has some performance issues
            // @ts-ignore
        }
     *

    /**
     * Waits for the page to load.
     * @returns {SettingsDialog}
                if (muted) {
import Notifications, {
     * Returns the BreakoutRooms for this participant.
import PasswordDialog from '../pageobjects/PasswordDialog';
     * Checks if the meeting supports breakout rooms.
        pcStatsInterval: 1500,
            = this.driver.$('//span[@id="localVideoContainer"]//img[contains(@class,"userAvatar")]');
     * @param {string} expectedEndpointId - The endpoint ID of the participant expected on large video.
     * Returns the invite dialog for this participant.
     * the audio muted status is different than the expected one. We wait up to
            timeout: 15_000,
    }
        return this._token;

import Visitors from '../pageobjects/Visitors';

            timeoutMsg = `expected to receive media in ${timeout / 1000}s for ${this.name}`): Promise<boolean> {
    }

     *
     *
    }
            await this.switchToIFrame();

     * @param testee - instance of the participant for whom we're checking the audio muted status.
            const baseUrl = new URL(this.driver.options.baseUrl || '');
    async assertDisplayNameVisibleOnStage(value: string) {
    }

    /**

            // if prejoin is enabled we want to click the join button
                return document.readyState === 'complete';
     * The token that this participant was initialized with.
        }
        try {
        await this.driver.setTimeout({ 'pageLoad': 30000 });
     */
    /**
                }
                // When testing for unmuted we wait for first sound
        }
     * Waits until the number of remote participants is exactly the given number.
        const localDisplayName = await this.getLocalDisplayNameElement();
        await this.driver.$('//div[@id="videoconference_page" and contains(@class, "tile-view")]').waitForDisplayed({

     * Checks if the participant is in breakout room.
    async waitForPageToLoad(): Promise<boolean> {
        return this.driver.waitUntil(() =>
        let url = urlObjectToString(config) || '';
                timeoutMsg: `expected remote video for ${endpointId} to be received 15s by ${this.name}`

    }
     * @returns {Promise<void>}
    async asserLocalThumbnailShowsVideo(): Promise<void> {
        expect(await displayNameEl.isDisplayed()).toBe(true);
     * Gets avatar SRC attribute for the one displayed on local video thumbnail.
     */
     *
        },

        await this.driver.waitUntil(async () => {
     * @returns {void}
    }
        await this.driver.keys(displayName);
        return this.driver.waitUntil(() =>
    }
     */
        return this.execute(() => typeof APP !== 'undefined' && APP.conference?.isJoined());
        } else {
            ? `//span[@id='${id}']//div[contains(@class,'userAvatar') and contains(@class, 'defaultAvatar')]`
        return new SecurityDialog(this);
            };
     * @param muted - <tt>true</tt> to wait for audio muted status or <tt>false</tt> to wait for the participant to
     */
                    min: 320
     */
     *
            const blur = document.querySelector('.video_blurred_container');
        // Wait until _room is unset, which is one of the last things hangup() does.
    async waitForParticipantOnLargeVideo(
            await this.getInviteDialog().clickCloseButton();
        }), {
            room: options.roomName,
                SHOW_CHROME_EXTENSION_BANNER: false
                assert.fail(`There was some sound coming from muted: '${this.name}'`);
        return await avatar.isExisting() ? await avatar.getAttribute('src') : null;
     *
    }
     * Returns the participants pane.
     * Make sure a display name is visible on the stage.
            await joinButton.waitForDisplayed();

     * The driver it uses.
     * @returns {Promise<void>}
            timeoutMsg = `expected to send media in ${timeout / 1000}s for ${this.name}`): Promise<boolean> {
     */
     */
            timeoutMsg?: string,
                !await this.isRemoteVideoReceived(endpointId) && !await this.isRemoteVideoDisplayed(endpointId), {


            timeoutMsg
        if (options.tenant && !this._iFrameApi) {
        return new VideoQualityDialog(this);
                // @ts-ignore
     *
        }
     * @param value
                .waitForDisplayed({
     *
    }
    /**
            }
        console.log(`Hanging up (${this.name})`);
     * @returns {InviteDialog}
            });
    /**
        }
                    return true;
            this._endpointId = await this.execute(() => { // eslint-disable-line arrow-body-style
     * Waits until the conference stats show positive upload bitrate.
     * The current context.
        await logInfo(this.driver, message);
                } catch (e) {
    }
     */
        // @ts-ignore
     * The default config to use when joining.
     */
        return this.driver.waitUntil(

        return await this.execute(() => typeof APP !== 'undefined'
    async log(message: string): Promise<void> {
    /**

        });
     * @private
        }
    /**
            await this.driver.waitUntil(async () =>
import VideoQualityDialog from '../pageobjects/VideoQualityDialog';
    async isRemoteVideoReceived(endpointId: string): Promise<boolean> {
                timeout: 15_000,

        if (options.urlAppendString) {

    }
     */
        const localVideoContainer = this.driver.$('span[id="localVideoContainer"]');
     * @returns {LargeVideo}
     * Waits for the tile view to display.
    async hangup() {
        return new Notifications(this);

                });
    async waitForNinjaIcon(endpointId?: string) {
    /**

     * and it's streaming status according to the connection-indicator is active).
                .waitForDisplayed({
     */
export const P4 = 'p4';

            url = `${this.driver.iframePageBase}${url}&domain="${baseUrl.host}"&room="${options.roomName}"`;
    private _dialInPin?: string;
        // just click somewhere to lose focus, to make sure editing has ended
                displayName: this._name
    }
} from '../pageobjects/Notifications';

                },

            }),
    /**
            timeout: 2000,
     * @param {any[]} args - The rest of the arguments.
        }
    async getEndpointId(): Promise<string> {
                timeoutMsg: `Timeout waiting to join muc for ${this.name}`
    /**
     */
            await this.waitForMucJoinedOrError();
            const joinButton = p1PreJoinScreen.getJoinButton();
            } // else we're good for unmuted participant
     * @param endpointId the endpoint ID of the participant whose dominant speaker icon status will be checked.
     */

                timeoutMsg: `${this.name} failed to hang up`
     */
        return this._endpointId;
        if (reverse) {

     */

     * Checks if the participant is in the meeting.

     *
     *
        }, this._name, driver.sessionId, LOG_PREFIX));
    async joinConference(options: IParticipantJoinOptions): Promise<Participant> {
        return this.driver.waitUntil(
                timeoutMsg: `expected remote video for ${endpointId} to not be received 15s by ${this.name}`
import InviteDialog from '../pageobjects/InviteDialog';
            timeoutMsg: 'Timeout waiting for MUC joined or error.'
        gatherStats: true,

        await localVideoContainer.click();

            if (!muted) {

        },

                    min: 180
    /**
     */
        return await this.execute(() => APP?.store?.getState()['features/visitors']?.iAmVisitor || false);
    async getDialInPin(): Promise<string> {
    /**
     * Returns the videoQuality Dialog.
    }
            const p1PreJoinScreen = this.getPreJoinScreen();
                timeout: 2000,
     */
                const audioLevel = await this.getRemoteAudioLevel(testee);
/* global APP $ */
        );
     *

            const level = APP?.conference?.getPeerSSRCAudioLevel(id);

            return;
        }

    /**
     * @param endpointId When no endpoint id is passed we check for any ninja icon.
    }
        await this.driver.url(url);
     */
    }
     * Returns the Visitors page object.
                timeout: 8000,
        ]);
                });
                    timeoutMsg: `expected ninja icon to be displayed in 5s by ${this.name}`
     * Checks if the remove video is displayed for the given remote endpoint ID.
     * notification is displayed, or max users notification is displayed.
     * Waits for a specific participant to be displayed on large video.
                url = `${url}&tenant="${options.tenant}"`;
            await this.driver.$('//span[contains(@class,"videocontainer")]//span[contains(@class,"connection_ninja")]')
     * @returns {SecurityDialog}
     */
            : `//span[@id="${id}"]//${image ? 'img' : 'div'}[contains(@class,"userAvatar")]`;
    private async getLocalDisplayNameElement() {
     */
     * @returns {Toolbar}
    }
     *
        if (!this._dialInPin) {
        try {
import { LOG_PREFIX, logInfo } from './browserLogger';

            script: string | ((...innerArgs: InnerArguments) => ReturnValue),

        await localDisplayName.click();
            // When testing for muted we don't want to have
    }

    getSettingsDialog(): SettingsDialog {
     * Waits for ICE to get connected on the p2p connection.
    }
    getParticipantsPane(): ParticipantsPane {
    /**
     *
     * Returns the toolbar for this participant.
    async isInBreakoutRoom() {
        await this.waitForPageToLoad();

            return;
     * Returns the password dialog.
            if (options.tenant) {
        return new PreJoinScreen(this);
            reverse,
     * Makes sure that the local video is displayed in the local thumbnail and that the avatar is not displayed.
    }
            timeoutMsg: `expected ICE to be connected for 15s for ${this.name}`
            async () => await this.getLargeVideo().getResource() === expectedEndpointId,
     */


     * Returns the notifications.
            }
                    if (audioLevel !== null && audioLevel > 0.1) {
                // @ts-ignore
     */
     * Creates a participant with given options.
     *  - defaultAvatar: true - the default avatar (with grey figure) is used
    }
        constraints: process.env.VIDEO_CAPTURE_FILE ? undefined : {
            timeoutMsg: `Tile view did not display in 10s for ${this.name}`
     * @param {string} message - The message to log.

            config.room = 'iframeAPITest.html';
     * @returns {Promise<boolean>}
     */

    TOKEN_AUTH_FAILED_TITLE_TEST_ID
     *
                + 'animation-duration: 0s !important; -webkit-animation-duration: 0s !important; transition:none; '
        if (!options.skipPrejoinButtonClick
            await joinButton.click();
    }
    getLargeVideo(): LargeVideo {
        requireDisplayName: false,
    }
                timeoutMsg: timeoutMsg || `Expected ${expectedEndpointId} on large video for ${this.name}`
import { IParticipantJoinOptions, IParticipantOptions } from './types';
            await this.driver.$(`//span[@id='participant_${endpointId}']//span[@class='connection_ninja']`)
    getChatPanel(): ChatPanel {

            await this.waitForSendMedia(timeout, msg ? `${msg} (send)` : undefined),
export const P6 = 'p6';
    constructor(options: IParticipantOptions) {
    }
    }
    /**
        if (this._token?.jwt) {
            });
        await Promise.all(parallel);
    async assertDefaultAvatarExist(participant: Participant): Promise<void> {
    /**
     * Gets the dial in pin for the conference. Reads it from the invite dialog if the pin hasn't been cached yet.
            } else if (baseUrl.pathname.length > 1) {
            timeout,
import SecurityDialog from '../pageobjects/SecurityDialog';
            reverse: !reverse,
     *  - image: true - the avatar is an image set in the settings
                    return false;
        return localVideoContainer.$('span[id="localDisplayName"]');

                document.querySelector('.video_blurred_container').style.display = 'none';
        return new InviteDialog(this);
     */
        return this._dialInPin;
    async switchToMainFrame() {
    /**
    }
            await this.waitForReceiveMedia(timeout, msg ? `${msg} (receive)` : undefined)

    /**
    }
export const P1 = 'p1';
        await localVideoContainer.moveTo();
        // Waits for the correct icon
export const P3 = 'p3';
     */
    /**
     * @returns {ReturnValue} - The result of the script.
    MAX_USERS_TEST_ID,


import LobbyScreen from '../pageobjects/LobbyScreen';
        const iframe = this.driver.$('iframe');
     * Adds a log to the participants log file.
    get driver() {
                await this.switchToMainFrame();
     * @returns {Promise<boolean>}

    async setLocalDisplayName(displayName: string) {
    }
     * Sets the display name of the local participant.
    waitForParticipants(number: number, msg?: string): Promise<boolean> {
     */
     */
     *
        return await this.execute(id => {
    }
     * @param timeoutMsg the message to log if the timeout is reached
                    return false;
        }, {
        return new BreakoutRooms(this);
    async waitForRemoteStreams(number: number): Promise<boolean> {
        },
     * Waits until the conference stats show positive upload bitrate.
 */

     * Waits until either the MUC is joined, or a password prompt is displayed, or an authentication failure
    async isLeaveReasonDialogOpen() {
import ChatPanel from '../pageobjects/ChatPanel';
                    // might fail with a Bidi error. Retry.
        await this.driver.$(`//span[@id="${id}"]//video`).waitForDisplayed({
        await localVideoContainer.moveTo();
                timeout: 30_000, // 30 seconds
    /**
    waitForDominantSpeaker(endpointId: string) {

                assert.fail(`There was no sound from unmuted: '${this.name}'`);
    } as IConfig;
        return (await this.getLocalDisplayNameElement()).getText();
            // @ts-ignore
                    // There seems to be a race condition with hangup() causing the page to change, and execute()
     * @returns {Promise<boolean>}
     * A wrapper for <tt>this.driver.execute</tt> that would catch errors, print them and throw them again.
        });
        );

                timeout,
            () => this.execute(count => (window.APP?.conference?.listMembers()?.length ?? -1) === count, number),
            }
     * Returns the audio level for a participant.

            }
    }
                timeout: 15_000,

    /**
     * Loads stuff after the page loads.
            },
    /**
    waitForP2PIceConnected(): Promise<boolean> {
     * @param {string} timeoutMsg - Optional custom timeout message.
        if (this._iFrameApi) {
            `//span[@id='${id}']//div[contains(@class,'userAvatar') and contains(@class, 'defaultAvatar')]`)
    }
        return this._name;
    }
        return await this.isRemoteVideoReceived(endpointId) && await this.isRemoteVideoDisplayed(endpointId);
    async waitForAudioMuted(testee: Participant, muted: boolean): Promise<void> {
            APP?.UI?.dockToolbar(true);
    TOKEN_AUTH_FAILED_TEST_ID,

        await this.assertThumbnailShowsAvatar(this, true);
    /**
        testing: {
    }
        const config = {
        this._token = options.token;
     *

        const displayNameEl = this.driver.$('div[data-testid="stage-display-name"]');
    /**
    private _name: string;
     * @param timeout max time to wait in ms

    }
     * Returns the chat panel for this participant.


        });

     * For the participant to have his audio muted/unmuted from given observer's
    async getRoomMetadata() {

        await this.driver.waitUntil(
        }
        return this;
    /**
    }
     *
            timeout: number = 30_000): Promise<void> {
        const values = await Promise.all([


        this._inMainFrame = false;

     * Checks if video is currently received for the given remote endpoint ID (there is a track, it's not muted,
    }
    getSecurityDialog(): SecurityDialog {
     * Waits for remote video state - receiving and displayed.
            expectedEndpointId: string,
    /**
            }
     * There are 3 options for avatar:
     * Returns the lobby screen.
                        return true;
    /**
    }
     * Switches to the main frame context (outside the iFrame; where the Jitsi Meet iFrame API is available).

                timeout: 15_000,

            },
    /**
            timeout: 2000,
        parallel.push(this.execute((name, sessionId, prefix) => {
    /**
    getVisitors(): Visitors {
            && !Boolean(await this.execute(() => config.prejoinConfig?.enabled === false))) {
     * @param timeoutMsg the message to log if the timeout is reached
    private _endpointId: string;
            // @ts-ignore
     */
     * Check if remote video for a specific remote endpoint is both received and displayed.
        this._inMainFrame = true;
                    // @ts-ignore
                timeoutMsg: msg || `not the expected participants ${number} in 15s for ${this.name}`
                    max: 30
    async isRemoteVideoReceivedAndDisplayed(endpointId: string): Promise<boolean> {

    /**
                        console.log(`muted exiting on: ${audioLevel}`);
     *
        console.log(`Hung up (${this.name})`);
    /**
            () => this.isInMuc(),
     *
        expect(await displayNameEl.getText()).toBe(value);
     */


            timeout,
    /**
     * perspective. The method will fail the test if something goes wrong or
     */

            this.execute(() => APP?.conference?.getP2PConnectionState() === 'connected'), {
     * @returns {VideoQualityDialog}
    }
     */
            {
            config.userInfo = {


        if (!this._iFrameApi || !this._inMainFrame) {
            // disable keyframe animations (.fadeIn and .fadeOut classes)
        await this.getFilmstrip().assertAudioMuteIconIsDisplayed(testee, !muted);
    getToolbar(): Toolbar {
     * Whether the current frame is the main frame. This could coincide with the Jitsi Meet frame (when it's loaded

            });
     * Returns the local display name.
    private config = {
    async waitForSendMedia(
        if (endpointId) {
            return await this.isInMuc() || await this.getPasswordDialog().isOpen()
        }

        ), {
     * @returns {Promise<boolean>}
     * @return
    }
    async waitForRemoteVideo(endpointId: string, reverse = false) {
export class Participant {
     * Returns the iframe API for this participant.

     *
        });
     * @private
                if (audioLevel !== null && audioLevel > 0.1) {
     * @returns {Promise<void>}

            await this.driver.waitUntil(async () => {
    /**
    getPasswordDialog(): PasswordDialog {
    private _iFrameApi: boolean = false;
    /**
    /**
    /**
    async waitForSendReceiveData(timeout = 15_000, msg?: string): Promise<boolean> {
        return new Visitors(this);
    getBreakoutRooms(): BreakoutRooms {
        });
    async execute<ReturnValue, InnerArguments extends any[]>(
        await this.driver.$(xpath).waitForDisplayed({
        },
    /**
        const avatar

import { IToken } from './token';

     *

            // @ts-ignore
                || await this.getNotifications().getNotificationText(MAX_USERS_TEST_ID)
        }
        return this.driver.$(
        } catch (_timeoutE) {
        });
                // remove leading slash
            timeout: 10_000,
                }
    /**
        }


        return new Toolbar(this);


    /**
     */
     */
import BreakoutRooms from '../pageobjects/BreakoutRooms';
                timeout: 10_000, // 10 seconds
                },
            async () => {
        } else {
            timeout: 15_000,
     * Checks if the leave reason dialog is open.
     * Returns the large video page object.
    /**
 * Participant.
    async waitForReceiveMedia(
                    }

    getFilmstrip(): Filmstrip {
    }
        });
        return new ChatPanel(this);
        return this.execute(e => JitsiMeetJS.app.testing.isRemoteVideoReceived(e), endpointId);
            ? 'localVideoContainer' : `participant_${await participant.getEndpointId()}`;
     * @param {IParticipantJoinOptions} options - Options for joining.
            // This was fixed in wdio v9.9.1, we can drop once we update to that version
            timeout: 10_000,
                await this.isRemoteVideoReceivedAndDisplayed(endpointId), {
    private async postLoadProcess(): Promise<void> {
            alwaysVisible: true
        if ((await this.driver.getUrl()).endsWith('/base.html')) {

                + '} </style>') // @ts-ignore
                    ideal: 640,
     * Waits for dominant speaker icon to appear in remote video of a participant.
                ...this.config,
            return APP?.conference?.getStats()?.bitrate?.upload > 0;
    /**

        enableTalkWhileMuted: false,

    }
     * @returns {Promise<void>}
     * @returns {BreakoutRooms}
            this.execute(() => APP?.conference?.getConnectionState() === 'connected'), {
    /**

        p2p: {
        return this.driver.waitUntil(() => this.execute(() => {
     */
     */

            if (blur) {
            const dialInPin = await this.getInviteDialog().getPinNumber();
     * @param {number} timeout - Optional timeout in milliseconds (default: 30000).
            if (wasInMainFrame) {

    /**
    /**
    }
    }
     * Checks if the participant is a moderator in the meeting.
            useStunTurn: false
            testMode: true
            document.title = `${name}`;
     * @returns {Promise<boolean>}
     */
        const timeout = muted ? 3_000 : 6_000;
    }

     */
     * @param endpointId
        // otherwise use lower resolution to avoid high CPU usage
     */
        toolbarConfig: {

     */
     */
     * @returns {ParticipantsPane}
            { timeout });
            this._dialInPin = dialInPin;
            return level ? level.toFixed(2) : null;

    /**
     */
            interfaceConfigOverwrite: {
     * Waits until there are at least [number] participants that have at least one track.



            .waitForDisplayed({ timeout: 5_000 });
    }
    }
     *
            return;
            () => this.execute(() => {
    get name() {
    isInMuc() {

    /**
        await this.execute(() => window.APP?.conference?.hangup());
            timeoutMsg: `expected number of remote streams:${number} in 15s for ${this.name}`
        return values[0] && values[1];
            url = `/${options.tenant}/${url}`;
    /**
            // the condition succeeded
    }
        await this.driver.waitUntil(
            video: {
    getPreJoinScreen(): PreJoinScreen {
     * unmute.
            {
        return new IframeAPI(this);
        return this.driver.$('div[data-testid="dialog.leaveReason"]').isDisplayed();
    }
    /**
    /**
                url = `${url}&tenant="${baseUrl.pathname.substring(1)}"`;

        // unexpected glitches.
        // Give it 3 seconds to not get any audio or to receive some
        if (!options.skipWaitToJoin) {
        await this.postLoadProcess();
        };
     * @returns {Promise<boolean>}
            url = `${url}${options.urlAppendString}`;

import { Key } from 'webdriverio';

     * Returns the security Dialog.
        }), {

        if (this._iFrameApi) {
        resolution: process.env.VIDEO_CAPTURE_FILE ? undefined : 360,
            }
     * If this Participant was initialized with iFrameApi=false this is a no-op.
    /**
     */
import LargeVideo from '../pageobjects/LargeVideo';
        // if there is a video file to play, use deployment config,
        return new LargeVideo(this);


                height: {
                    timeoutMsg: `expected ninja icon for ${endpointId} to be displayed in 15s by ${this.name}`
            timeout: 15_000,

            configOverwrite: {
    /**

import Toolbar from '../pageobjects/Toolbar';
                || await this.getNotifications().getNotificationText(TOKEN_AUTH_FAILED_TITLE_TEST_ID);
     * If this Participant was initialized with iFrameApi=false this is a no-op.
    getNotifications(): Notifications {
     */
     */
    }
        }
            }
            });
        this._name = options.name;
        // Extended timeout for 'unmuted' to make tests more resilient to
     * Makes sure that the avatar is displayed in the local thumbnail and that the video is not displayed.
    async waitToJoinMUC(): Promise<void> {
        const id = participant === this
    /**
     * Waits for ninja icon to be displayed.

            number
        }
    }

    /**
                try {
     * Cache the dial in pin code so that it doesn't have to be read from the UI.
            {
     * @param endpointId
     * Waits until the conference stats show positive upload and download bitrate (independently).
     *
        await this.driver.keys(Key.Return);
    }
                    max: 640,
     */
            timeoutMsg
            return APP?.conference?.getStats()?.bitrate?.download > 0;
            timeout = 15_000,

                    timeout: 15_000,
import IframeAPI from '../pageobjects/IframeAPI';
     * @returns {Promise<string>} The endpoint ID.
        return multiremotebrowser.getInstance(this._name);

    }
    getToken(): IToken | undefined {
        const localVideoContainer = this.driver.$('span[id="localVideoContainer"]');

            } // else we're good for muted participant

        }
            timeoutMsg: `Avatar is ${reverse ? '' : 'not'} displayed in the local thumbnail for ${participant.name}`
export const P5 = 'p5';
            url = `${url}&jwt="${this._token.jwt}"`;

import SettingsDialog from '../pageobjects/SettingsDialog';
        });

        disable1On1Mode: true,
}
    }
                || await this.getNotifications().getNotificationText(TOKEN_AUTH_FAILED_TEST_ID)
     */
    async getLocalDisplayName() {
     * @param {number} number - The number of participant to wait for.

     * @param endpointId
     */
    async isVisitor() {
    async isModerator() {
                }
        const jid = await p.getEndpointId();
            }


            });
    }
        return new Filmstrip(this);
     *
     */
     */
     *

     *
    /**
     */
     * Waits for ICE to get connected.
     * Returns the prejoin screen.
            reverse,
                width: {
     *
    }

        }
        }


        const driver = this.driver;
    }
        return new ParticipantsPane(this);
            ...args: InnerArguments): Promise<ReturnValue> {
    /**
            $('body').toggleClass('notransition');
    }
    }
        const parallel = [];
     */
    /**
        });
            return await this.driver.execute(script, ...args);
     * Returns the local display name element.
        if (!options.skipDisplayName) {
        url = url.startsWith('/') ? url.substring(1) : url;
    async waitForTileViewDisplayed(reverse = false) {
            `//span[@id="participant_${endpointId}" and contains(@class, "display-video")]`).isExisting();
    getVideoQualityDialog(): VideoQualityDialog {
     */
            count => (APP?.conference?.getNumberOfParticipantsWithTracks() ?? -1) >= count,
    async assertThumbnailShowsAvatar(
            await this.driver.waitUntil(async () =>

import { urlObjectToString } from '../../react/features/base/util/uri';
            $('<style>.notransition * { '
        );
        if (this._iFrameApi) {
        }
        const xpath = defaultAvatar
    /**
            await p1PreJoinScreen.waitForLoading();
     */
        // drop the leading '/' so we can use the tenant if any
     * @private
     * @private
    }
     * The name.
        return this.driver.waitUntil(() => this.execute(() => {
        } catch (error) {
     */
     * Makes sure that the default avatar is used.



     * Hangups the participant by leaving the page. base.html is an empty page on all deployments.


        const id = participant === this
     * Returns the settings Dialog.
                }
        return this.driver.waitUntil(
        return await this.execute(() => typeof APP !== 'undefined'
     */
                return APP?.conference?.getMyUserId();

    /**
import PreJoinScreen from '../pageobjects/PreJoinScreen';
    /**
    getIframeAPI() {
     * @param timeout max time to wait in ms
                timeoutMsg: `Default avatar does not exist for ${participant.name}`
    async getRemoteAudioLevel(p: Participant) {
                    ideal: 360,
/**
export const P2 = 'p2';
     * directly), or not (when it's loaded in an iframe).
    /**
        await this.driver.url('/base.html')
    waitForIceConnected(): Promise<boolean> {
     */
     * @param {string} msg - A custom message to use.
                    console.log(`unmuted exiting on: ${audioLevel}`);
        await this.driver.$(
            if (muted) {
     * @returns {Visitors}
        this._iFrameApi = options.iFrameApi || false;

     *  - defaultAvatar: false, image: false - the avatar is produced from the initials of the display name
     */
            timeout = 15_000,
     * Returns the filmstrip for this participant.
import Filmstrip from '../pageobjects/Filmstrip';
            && APP.store?.getState()['features/base/conference'].conference?.getBreakoutRooms()?.isSupported());
            console.log(`Already hung up (${this.name})`);
    getLobbyScreen(): LobbyScreen {

            console.log(`${new Date().toISOString()} ${prefix} sessionId: ${sessionId}`);
    async waitForMucJoinedOrError(): Promise<void> {

    }
            // @ts-ignore
        await this.driver.switchFrame(iframe);
        analytics: {
     */


     */
        disableAP: true,
     * Returns the token that this participant was initialized with.

                ...options.configOverwrite || {}
        }, jid);
        return this.driver.$(`//span[@id="participant_${endpointId}" and contains(@class, "dominant-speaker")]`)
            });
        return new LobbyScreen(this);
            disabled: true
     */
        return this.execute(() => window.APP?.conference?._room?.getMetadataHandler()?.getMetadata());
    }
        if (!this._endpointId) {
    async getLocalVideoAvatar() {
            ? 'localVideoContainer' : `participant_${await participant.getEndpointId()}`;
import { IConfig } from '../../react/features/base/config/configType';
    async isRemoteVideoDisplayed(endpointId: string): Promise<boolean> {
     * @param reverse if true, waits for the remote video to NOT be received AND NOT displayed.
     */
     */
                frameRate: {
        await this.driver.switchFrame(null);
    /**
     * Joins conference.
        return new SettingsDialog(this);
     * Switches to the iFrame context (inside the iFrame; where the Jitsi Meet application runs).
                return false;
    async switchToIFrame() {
            const wasInMainFrame = this._inMainFrame;
    /**
     */
                    return await this.driver.execute(() => window.APP?.conference?._room === undefined);
     */
            && APP.store?.getState()['features/base/participants']?.local?.role === 'moderator');
