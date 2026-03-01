    /**
        const hasGaps = await this.hasGapsInFilmstrip();
    /**
const LOCAL_VIDEO_XPATH = '//span[@id="localVideoContainer"]';
    }

    }
            async () =>
                ? Math.abs(positions[1].top - positions[0].top) !== 0
        return this.participant.driver.$('//div[contains(@class, "remote-videos")]/div').waitForDisplayed({
     * @param participant
import { Participant } from '../helpers/Participant';
            timeout: 5000,
     * Mutes the audio of a participant.
     * Checks whether the local self view is displayed or not.
                for (let i = 0; i < positions.length - 1; i++) {

                    }
            throw new Error(
    /**
     * @param dialogConfirm
    assertSelfViewIsHidden(hidden: boolean) {
        } else {
     */
    assertRemoteVideosHidden(reverse = false) {
    }
        await this.clickOnRemoteMenuLink(await participant.getEndpointId(), 'mutelink', false);
/**
        return this.participant.execute(
                // Check if element is visible and has dimensions
     * Returns the remote video id of a participant with endpointID.
        }
        }
            const positions = thumbnails.map((thumb: any) => {
     * Clicks on the link in the remote participant actions menu.
            id = `participant_${await testee.getEndpointId()}`;
        return this.clickOnRemoteMenuLink(participantId, 'kicklink', true);
    /**
                    marginRight: parseFloat(style.marginRight) || 0
                    // Flag if gap is more than 2x the expected spacing
    /**

     *
                        return true;
        await popoverElement.click();

            `//span[@id='participant_${endpointId}']//img[contains(@class,'userAvatar')]`);
        const epId = await participant.getEndpointId();
     * Check if remote videos in filmstrip are visible.
            `//span[@id='participant_${participantId


        }
            timeout: 5_000,
        await hideSelfViewButton.waitForClickable();
        await hideSelfViewButton.click();
     */

     */
     */

    getLocalVideoId() {
     * Asserts that {@code participant} shows or doesn't show the audio
                const style = window.getComputedStyle(thumb);
     * @param participantId
            await this.participant.driver.$(`//span[@id="participant_${epId}"]`).click();
                return {

        });
                timeoutMsg: `Timeout waiting fore remote videos to be hidden: ${!reverse}.`
        const endpointID = await participant.getEndpointId();
        await this.participant.waitForParticipantOnLargeVideo(endpointID);
    async assertNoGapsInFilmstrip(reverse = false): Promise<void> {
    }

        return this.participant.driver.$(LOCAL_VIDEO_MENU_TRIGGER).moveTo();
        return await this.participant.execute(() => {
import BasePageObject from './BasePageObject';
    async pinParticipant(participant: Participant) {
        await hideSelfViewButton.waitForExist();
        );
    async unpinParticipant(participant: Participant) {
    }
        const elem = this.participant.driver.$(
            return false;
    /**

            // Calculate expected spacing between thumbnails based on first two
     * Unpins a participant by clicking on their thumbnail.

            const epId = await participant.getEndpointId();

            }']//span[@id='remotevideomenu']//div[@id='remote-video-menu-trigger']`).moveTo();
    }
        await popoverElement.waitForDisplayed();
                    // Flag if gap is more than 2x the expected spacing
                    && rect.height > 0;

        if (hasGaps !== expectedResult) {

 */
    /**
        if (participant === this.participant) {
     * @param {boolean} reverse - If {@code true}, the method will assert the absence of the "mute" icon;
     * @returns Returns true if gaps are detected, false otherwise.
     */
    verifyRemoteVideosDisplay(isDisplayed: boolean) {

    async countVisibleThumbnails() {
        const hideSelfViewButton = this.participant.driver.$(HIDE_SELF_VIEW_BUTTON_XPATH);
                    left: rect.left,
                document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue?.srcObject?.id, endpointId);
                const rect = thumb.getBoundingClientRect();
            // when looking up the element and clicking it, it doesn't work if we do it twice in a row (oneOnOne.spec)
                };
                    const gap = next.left - current.right;
            timeoutMsg: `Local video thumbnail is${hidden ? '' : ' not'} displayed for ${this.participant.name}`
     * {@code testee}.
                    const current = positions[i];
     * Gets avatar SRC attribute for the one displayed on small video thumbnail.

                    top: rect.top,
                }`

            const isVertical = Math.abs(positions[1].top - positions[0].top) > Math.abs(positions[1].left - positions[0].left);
     * Kicks a participant.
                        return true;

     * @param linkClassname
    async hasGapsInFilmstrip(): Promise<boolean> {
        });
            await this.participant.execute(() => document?.getElementById('localVideoContainer')?.click());
            }
    /**
    }
        const remoteDisplayName = this.participant.driver.$(`span[id="participant_${endpointId}"]`);
                    : positions[1].left - positions[0].right // horizontal
     * @param participantId
        }
        return this.participant.driver.waitUntil(
            // Get positions and calculated margins of all visible thumbnails

                }
}

                    // Compare against the first gap with some tolerance
        await this.participant.driver.$(`//div[ @id="pin-indicator-${epId}" ]`).waitForDisplayed({
        await popoverElement.waitForExist();
    /**
            'return document.getElementById("localVideo_container").srcObject.id');
     */

    /**

        if (testee === this.participant) {
     */
     * @param {Participant} testee - The {@code Participant} for whom we're checking the status of audio muted icon.
        await this.participant.driver.$(mutedIconXPath).waitForDisplayed({
     * @param participant

                // For vertical filmstrip, check vertical spacing consistency
    async muteAudio(participant: Participant) {
        return await remoteDisplayName.getText();
     * Asserts that there are no gaps in the filmstrip.
     */
    }
            });
            timeoutMsg: `Audio mute icon is${reverse ? '' : ' not'} displayed for ${testee.name}`
                `Expected filmstrip to ${reverse ? 'have' : 'not have'} gaps, but ${

        await toggleButton.waitForDisplayed();
        await this.participant.driver.$(

     * This detects if there are any missing thumbnails or excessive spacing between consecutive visible thumbnails.

                timeout: 10_000, // 10 seconds

                    const next = positions[i + 1];
                document.querySelectorAll('#remoteVideos span.videocontainer')
     */
     * @param endpointId

    async getRemoteDisplayName(endpointId: string) {
     * @returns {Promise<void>}
    }
            await new BaseDialog(this.participant).clickOkButton();
            await this.participant.driver.$(`//span[@id="participant_${epId}"]`).click();
    async muteVideo(participant: Participant) {
    }
        await this.participant.driver.$(`//span[@id='participant_${participantId}']`).moveTo();
     */
     *
                    && style.visibility !== 'hidden'
            // Check if filmstrip is vertical or horizontal
    /**
     */
            const thumbnails = Array.from(
                    bottom: rect.bottom,
        await remoteDisplayName.moveTo();
     */
            );
    async getAvatar(endpointId: string) {
        const popoverElement = this.participant.driver.$(
                    const gap = next.top - current.bottom;
     */
            document.evaluate(`//span[@id="participant_${eId}"]//video`,
                    const next = positions[i + 1];
                    hasGaps ? 'gaps were detected' : 'no gaps were found'
     * This is useful for detecting layout issues where thumbnails might be missing or mispositioned.
     * Pins a participant by clicking on their thumbnail.
                // For horizontal filmstrip, check horizontal spacing consistency
            await this.participant.execute(() => document?.getElementById('localVideoContainer')?.click());
    /**

    }
     * Grants moderator rights to a participant.
import BaseDialog from './BaseDialog';
const LOCAL_VIDEO_MENU_TRIGGER = '#local-video-menu-trigger';
                    marginTop: parseFloat(style.marginTop) || 0,
        await remoteDisplayName.moveTo();
        return this.participant.driver.$(LOCAL_VIDEO_XPATH).waitForDisplayed({
    hoverOverLocalVideo() {
        await this.participant.driver.$(LOCAL_USER_CONTROLS).moveTo();
            timeout: 5_000,
            if (isVertical) {

                for (let i = 0; i < positions.length - 1; i++) {
                    && rect.width > 0
     *
     * Hover over local video.
    }
     */

        const expectedResult = reverse ? true : false;


        await toggleButton.moveTo();

        await toggleButton.click();
                // Can't have gaps with less than 2 thumbnails
        await this.clickOnRemoteMenuLink(await participant.getEndpointId(), 'grantmoderatorlink', true);
     * Clicks on the hide self view button from local video.
    /**
            {

                    ? positions[1].top - positions[0].bottom // vertical
            `//div[contains(@class, 'popover')]//div[contains(@class, '${linkClassname}')]`);
            } else {
                    height: rect.height,


                }
    }
        });
 * Filmstrip elements.
                    if (gap > Math.max(firstGap * 2, current.height * 0.3)) {
        const remoteDisplayName = this.participant.driver.$(`span[id="participant_${endpointId}_name"]`);
            }
    /**
    }
     * mute icon for the conference participant identified by
            const firstGap = positions.length >= 2
     * @private
        } else {
    /**
        let id;
                const rect = thumb.getBoundingClientRect();
    async grantModerator(participant: Participant) {
    }
     * Returns the local video id.
                    }
     */
            timeout: 2_000,
            reverse,
        });
     *
                    // Compare against the first gap with some tolerance
            });
     */
                    right: rect.right,
            ).filter((thumb: any) => {
     * Counts the displayed remote video thumbnails.
    }
                    marginBottom: parseFloat(style.marginBottom) || 0,
     * Checks for visible gaps in the filmstrip thumbnails.
    async hideSelfView() {
                    marginLeft: parseFloat(style.marginLeft) || 0,
            }
    /**
        });
    async assertAudioMuteIconIsDisplayed(testee: Participant, reverse = false): Promise<void> {
            reverse: hidden,
        await this.hoverOverLocalVideo();

        return await elem.isExisting() ? await elem.getAttribute('src') : null;
    }

     * @param participant
            // Get all visible thumbnail containers in the filmstrip
            reverse: true
    async toggle() {
export default class Filmstrip extends BasePageObject {
    }

            reverse: !isDisplayed,
     */


                    const current = positions[i];
        return await this.participant.execute(eId =>
    /**

        const mutedIconXPath
    }
                    if (gap > Math.max(firstGap * 2, current.width * 0.3)) {
     */
     * @param reverse
     */
        if (dialogConfirm) {

     */
                : 0;
        // click Hide self view button
    async getRemoteVideoId(endpointId: string) {
     * Toggles the filmstrip.

     */
            .filter(thumbnail => thumbnail.isDisplayed())).length;
        if (participant === this.participant) {
    /**
     * @param participant
        } else {



     * @param isDisplayed whether or not filmstrip remote videos should be visible

     * otherwise, it will assert its presence.
                return false;
            if (thumbnails.length < 2) {
     * Mutes the video of a participant.
const HIDE_SELF_VIEW_BUTTON_XPATH = '//div[contains(@class, "popover")]//div[@id="hideselfviewButton"]';
        // open local video menu
        await this.clickOnRemoteMenuLink(await participant.getEndpointId(), 'mutevideolink', true);

    /**
    kickParticipant(participantId: string) {
     * @param participant The participant.

     * @param endpointId
    }
                await this.participant.driver.$$('//div[@id="remoteVideos" and contains(@class, "hidden")]').length > 0,
    private async clickOnRemoteMenuLink(participantId: string, linkClassname: string, dialogConfirm: boolean) {
    }
            = `//span[@id='${id}']//span[contains(@id, 'audioMuted')]//*[local-name()='svg' and @id='mic-disabled']`;
                const style = window.getComputedStyle(thumb);
            timeoutMsg: `${this.participant.name} did not unpin ${participant.name}`,
     * Returns the remote display name for an endpoint.
            id = 'localVideoContainer';
                return style.display !== 'none'
        }

const LOCAL_USER_CONTROLS = 'button[title="Local user controls"]';
    /**
        const toggleButton = this.participant.driver.$('#toggleFilmstripButton');
        return (await this.participant.driver.$$('//div[@id="remoteVideos"]//span[contains(@class,"videocontainer")]')
    /**
     * @param endpointId The endpoint id.
                    width: rect.width,
     * Asserts that the remote videos are hidden or not.
     * @param reverse - If true, asserts that gaps should exist. Default false.
