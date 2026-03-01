
    /**

    }
        if (!await this.isOpen()) {

        });

        await participantItem.waitForStable();
            .$(`[data-testid="unmute-video-${participantId}"]`);

        await this.participant.driver.$(`button[data-testid="mute-audio-${participantId}"]`).click();
     * otherwise, it will assert its presence.

            .substring('participant-item-'.length);
        await this.selectParticipant(participantToUnmute);
            await this.openParticipantContextMenu(participantToUnmute);
    }
 */
    async assertVideoMuteIconIsDisplayed(testee: Participant, reverse = false): Promise<void> {


        const admitButton = this.participant.driver

            .$(`[data-testid="participant-more-options-${participantId}"]`);
                this.participant.name} side.`
import { ChainablePromiseElement } from 'webdriverio';
            .$(`[data-testid="reject-${participantIdToReject}"]`);
        const participantItem = this.participant.driver.$(`#participant-item-${participantId}`);
        const moreOptionsButton
     * @returns {Promise<void>}
        await inviteButton.waitForDisplayed();
     * identified by {@code testee}.
    async clickInvite() {
            timeout: 2000,
        }
    }
        const participantIdToAdmit = (await participantToAdmit.getAttribute('id'))
    getAVModerationMenu() {
     * @param participantToUnmute
    async close() {
        if (!await this.isOpen()) {

const PARTICIPANTS_PANE = 'participants-pane';

        await this.participant.getToolbar().clickCloseParticipantsPaneButton();
     */
     *

        await admitButton.waitForExist();
        const meetingParticipantMoreOptions = this.participant.driver
        await this.participant.driver.$(mutedIconXPath).waitForDisplayed({
    async allowVideo(participantToUnmute: Participant) {

     * @param participantToUnmute

            reverse,
     * @param fromContextMenu
        await this.participant.driver.$(`#participant-item-${participantId}`).moveTo();
     * @param {Participant} testee - The {@code Participant} for whom we're checking the status of audio muted icon.
     */
     * @param participantNameToReject - the name of the participant for this {@link ParticipantsPane} to reject.
        await meetingParticipantMoreOptions.waitForDisplayed();
        const participantToReject

        const participantId = await participant.getEndpointId();
 * ID of the closed/hidden participants pane
    async clickContextMenuButton() {

        await participantToAdmit.moveTo();
    async openParticipantContextMenu(participant: Participant) {
     * @param participant

        await moreOptionsButton.click();
        if (!await this.isOpen()) {
        }
        if (fromContextMenu) {
    /**
        await this.openParticipantContextMenu(participantToUnmute);



    /**
/**
        await meetingParticipantMoreOptions.click();
 * Represents the participants pane from the UI.


        await unmuteButton.click();
        await this.selectParticipant(participantToUnmute);
            await this.open();
        const mutedIconXPath
    }
     * @param {boolean} reverse - If {@code true}, the method will assert the absence of the "mute" icon;
     * Find the participant by name.
    isOpen() {

    }


     */
     */
    }
        await meetingParticipantMoreOptions.waitForExist();
        const menu = this.participant.driver.$('#participants-pane-context-menu');
        await meetingParticipantMoreOptions.moveTo();
        if (!isOpen) {
    private async findLobbyParticipantByName(name: string): Promise<ChainablePromiseElement> {
            .$(`[data-testid="unmute-audio-${participantId}"]`);

     * Tries to click on the reject button and fails if it cannot be clicked.
     * Asserts that {@code participant} shows or doesn't show the video mute icon for the conference participant
        });
     * Clicks the "participants" toolbar button to open the participants pane.
        const mutedIconXPath

        }
     * otherwise, it will assert its presence.
    }
    }
            await this.close();
    /**
    /**
     * Open context menu for given participant.
        await participantItem.moveTo();
     * @private
        }
        await rejectButton.click();

     * @returns {Promise<void>}


        const id = `participant-item-${await testee.getEndpointId()}`;
import AVModerationMenu from './AVModerationMenu';
            = `//div[@id='${id}']//div[contains(@class, 'indicators')]//*[local-name()='svg' and @id='videoMuted']`;
import { Participant } from '../helpers/Participant';
     * Clicks the context menu button in the participants pane.

    }
    /**
    async muteAudio(participant: Participant) {
            timeoutMsg: `Video mute icon is${reverse ? '' : ' not'} displayed for ${testee.name} at ${
        const unmuteButton = this.participant.driver
            .find(async participant => (await participant.getText()).includes(name));
        await menu.click();
    /**
        await inviteButton.click();
     * Clicks the "participants" toolbar button to close the participants pane.

        const participantId = await participantToUnmute.getEndpointId();
            timeoutMsg: `Audio mute icon is${reverse ? '' : ' not'} displayed for ${testee.name} at ${
     */
    async assertAudioMuteIconIsDisplayed(testee: Participant, reverse = false): Promise<void> {
            = `//div[@id='${id}']//div[contains(@class, 'indicators')]//*[local-name()='svg' and @id='audioMuted']`;
    }

        const participantId = await participant.getEndpointId();
        const participantId = await participantToUnmute.getEndpointId();
        await pane.waitForExist();

     * Tries to click on the approve button and fails if it cannot be clicked.
        await meetingParticipantMoreOptions.waitForStable();

        if (!isOpen) {
            reverse,


        await participantItem.waitForDisplayed();
     */
        await unmuteButton.click();
     * @param name - The name to look for.
        const pane = this.participant.driver.$(`#${PARTICIPANTS_PANE}`);
            = this.participant.driver.$(`button[title="More moderation options ${participantNameToReject}"]`);
    async selectParticipant(participant: Participant) {

        await participantToReject.moveTo();

        const inviteButton = this.participant.driver.$(`button=${INVITE}`);
        if (!await this.isOpen()) {
    /**
        }
            await this.open();

        await this.participant.getToolbar().clickParticipantsPaneButton();
        await rejectButton.waitForExist();

    }


     * Mutes the audio of a participant.
        await unmuteButton.waitForExist();

        }
    }
     * Checks if the pane is open.
     * Open context menu for given participant.
    async rejectLobbyParticipant(participantNameToReject: string) {

    async admitLobbyParticipant(participantNameToAdmit: string) {

import BasePageObject from './BasePageObject';
        await this.participant.getNotifications().dismissAnyJoinNotification();
     * Trys to click ask to unmute button.
     */
    /**
    /**
    /**

            await this.open();
    async open() {
        if (!isOpen) {
        const isOpen = await this.isOpen();
        await participantItem.waitForExist();
    }

    /**
     */
     */
        const id = `participant-item-${await testee.getEndpointId()}`;
     * Clicks the invite button.
        await this.participant.driver.$(`#${PARTICIPANTS_PANE}`).waitForDisplayed({ reverse: true });
    /**
        const participantId = await participant.getEndpointId();
/**

        const participantToAdmit = await this.findLobbyParticipantByName(participantNameToAdmit);
        const unmuteButton = this.participant.driver
            await this.open();
    }
                this.participant.name} side.`
}
     * Trys to click allow video button.
        return this.participant.driver.$$('//div[@id="lobby-list"]//div[starts-with(@id, "participant-item-")]')

    /**


        if (!isOpen) {
     *
            = await this.findLobbyParticipantByName(participantNameToReject);
     */
    /**
    async askToUnmute(participantToUnmute: Participant, fromContextMenu: boolean) {
            timeout: 2000,

     */
        return this.participant.driver.$(`#${PARTICIPANTS_PANE}`).isExisting();
            .substring('participant-item-'.length);
        const rejectButton = this.participant.driver
        const isOpen = await this.isOpen();
        await admitButton.click();
 */
        await unmuteButton.waitForExist();
        }
            await this.close();
            await this.open();
     */
     * @param {boolean} reverse - If {@code true}, the method will assert the absence of the "mute" icon;
     * Gets the audio video moderation menu.
     * @param participantNameToAdmit - the name of the participant to admit.
     */

        const participantIdToReject = (await participantToReject.getAttribute('id'))
    }
    /**
        await this.participant.driver.$(mutedIconXPath).waitForDisplayed({

     */
     * Asserts that {@code participant} shows or doesn't show the video mute icon for the conference participant
     */
export default class ParticipantsPane extends BasePageObject {
        await pane.waitForDisplayed();
        await pane.waitForStable();
            await this.open();

     */
    }

     * identified by {@code testee}.
        await menu.waitForDisplayed();
     * @param {Participant} testee - The {@code Participant} for whom we're checking the status of audio muted icon.
const INVITE = 'Invite someone';
            .$(`[data-testid="admit-${participantIdToAdmit}"]`);
        }
        }

        return new AVModerationMenu(this.participant);
