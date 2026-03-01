                window.jitsiAPI.executeCommand(commandName, ...commandArgs)
            }, event);

    /**
    /**
     * Returns the number of participants in the conference.

     * Invite the given participant to the meeting via sip (sip jibri).
                window.jitsiAPI.test[eventName] = undefined;
                const result = window.jitsiAPI.test[eventName];
    stopRecording(mode: string) {
    /**
     * @param event
    clearEventResults(event: string) {
     * Invite the given participant to the meeting via PSTN.
     * @param eventName The event name.
 */
                if (!result) {
     */
        return this.participant.execute(() => window.jitsiAPI.getNumberOfParticipants());
     * Removes the embedded Jitsi Meet conference.
    }
    }
                    console.log(
                });
     */
    startRecording(options: any) {

    getRoomsInfo() {
    getEventResult(event: string): Promise<any> {




    /**
            number: v
    }
     * Returns the live-streaming url.
        } ]), value);
        return this.participant.execute(v => window.jitsiAPI.invite([ {

        return this.participant.execute(
    }
    }
            eventName => {
            type: 'phone',
    }
export default class IframeAPI extends BasePageObject {
     * Clears the history of an event.
                    window.jitsiAPI.test[event] = evt;
     */
                console.log(`${new Date().toISOString()} ${prefix}iframeAPI - Adding listener for event: ${event}`);
     */

            }, eventName, LOG_PREFIX);

    }
    /**
    addEventListener(eventName: string) {
    async getLivestreamUrl() {
                    return;
    }
                // we want to add it once as we use static .test[event] to store the last event
    }
    }
        return this.participant.execute(
    }
     */
}
                window.jitsiAPI.addListener(event, evt => {
     * @param options
            (commandName, commandArgs) =>
    inviteSIP(value: string) {
                    return false;
    getNumberOfParticipants() {
     */
     */
     * Returns an array of available rooms and details of it.
import BasePageObject from './BasePageObject';
            address: v
     * Returns the json object from the iframeAPI helper.
     */
                }
        return this.participant.execute(o => window.jitsiAPI.startRecording(o), options);

     */
    /**
        return this.participant.execute(() => window.jitsiAPI.getLivestreamUrl());
     * Adds an event listener to the iframeAPI.
     * Stop a file recording or streaming session.
            (event, prefix) => {
     * Returns the current state of the participant's pane.
     */
    executeCommand(command: string, ...args: any[]) {
            eventName => {

            }, event);
                if (window.jitsiAPI.listenerCount(event) > 0) {
        return this.participant.execute(m => window.jitsiAPI.stopRecording(m), mode);
    /**
     * Starts a file recording or streaming session.
 * The Iframe API and helpers from iframeAPITest.html

                }
import { LOG_PREFIX } from '../helpers/browserLogger';
                return result;
/**

    /**
            type: 'sip',
    /**
    dispose() {
     */
    isParticipantsPaneOpen() {
    /**
     * Executes command using iframeAPI.
     * @param mode
        return this.participant.execute(() => window.jitsiAPI.dispose());
        return this.participant.execute(
    /**
        return this.participant.execute(v => window.jitsiAPI.invite([ {
        return this.participant.execute(
    }
            , command, args);
    /**
     * @param args The arguments.
                        `${new Date().toISOString()} ${prefix}iframeAPI - Received ${event} event: ${JSON.stringify(evt)}`);
     */
        } ]), value);
        return this.participant.execute(() => window.jitsiAPI.isParticipantsPaneOpen());

    }
     * @param command The command.
     */
     * @param event
        return this.participant.execute(() => window.jitsiAPI.getRoomsInfo());
    /**

    invitePhone(value: string) {
