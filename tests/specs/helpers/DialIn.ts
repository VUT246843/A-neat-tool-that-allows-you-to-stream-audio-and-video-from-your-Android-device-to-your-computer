export async function cleanup(participant: Participant) {
 * @param participant
    });
    const meetingWindow = windows[0];

        }).on('error', err => {
    const newWindow = (await p.driver.getWindowHandles()).filter(w => w !== meetingWindow);
import process from 'node:process';

    }
        });
 */
import https from 'node:https';
}
export async function dialIn(pin: string) {
}

    const displayedNumber = await inviteDialog.getDialInNumber();
 */


    // waits 15 seconds for the participant to join


    const inviteDialog = p.getInviteDialog();
    // we have already checked in the first test that DIAL_IN_REST_URL exist so restUrl cannot be ''
    expect(driverUrl.includes(await inviteDialog.getMeetingURL())).toBe(true);
export async function verifyMoreNumbersPage(p: Participant) {
    const joinedTS = performance.now();
    await inviteDialog.open();
/**



            console.error('dial-in.test.restAPI.request.fail');
 * @param pin the pin to use when dialing in
export async function waitForAudioFromDialInParticipant(participant: Participant) {
    console.log(`API response:${responseData}`);

    await participant.waitForSendReceiveData(20_000, 'dial-in.test.jigasi.participant.no.audio.after.join');
        async el => (await el.getText()).trim() === displayedNumber);
            reject(err);
    console.log(`dial-in.test.call_session_history_id:${JSON.parse(responseData).call_session_history_id}`);
    await inviteDialog.waitTillOpen(true);
                data += chunk;
    if (await participant.isModerator()) {
    await inviteDialog.open();
    const displayedPin = await inviteDialog.getPinNumber();


    await inviteDialog.clickCloseButton();
    expect((await inviteDialog.getPinNumber()).length > 0).toBe(displayed);

    console.log(`dial-in.test.jigasi.participant.received.audio.after.join:${performance.now() - joinedTS} ms.`);
    expect((await conferenceIdMessage.getText()).replace(/ /g, '').includes(displayedPin)).toBe(true);
 * @param participant


    await inviteDialog.waitTillOpen();
export async function isDialInEnabled(participant: Participant) {
}
    return await participant.execute(() => Boolean(
            });
    const inviteDialog = p.getInviteDialog();
    const windows = await p.driver.getWindowHandles();

export async function assertUrlDisplayed(p: Participant) {


        const jigasiEndpointId = await participant.execute(() => APP?.conference?.listMembers()[0].getId());
    await inviteDialog.open();

    await inviteDialog.waitTillOpen();

 * Helper functions for dial-in related operations.
 * Waits for the audio from the dial-in participant.


 * Cleans up the dial-in participant by kicking it if the local participant is a moderator.
    await p.driver.switchWindow(meetingWindow);
    await p.driver.switchWindow(moreNumbersWindow);
}

            });

}

        config.dialInConfCodeUrl && config.dialInNumbersUrl && config.hosts?.muc));


    console.log(`dial-in.test.jigasi.participant.join.after:${joinedTS - ctx.times.restAPIExecutionTS}`);
                ctx.times.restAPIExecutionTS = performance.now();
            let data = '';
    expect(newWindow.length).toBe(1);

    // cleanup
export async function assertDialInDisplayed(p: Participant, displayed: boolean = false) {
/**
    await inviteDialog.openDialInNumbersPage();

            res.on('end', () => {
    await browser.pause(10000);

/**

    const moreNumbersWindow = newWindow[0];
    const numbers = p.driver.$$('.dial-in-number');

/**
        ctx.times.restAPIExecutionTS + 15_000} ms.`);
 */
    const responseData: string = await new Promise((resolve, reject) => {
            res.on('data', chunk => {
 * Sends a request to the REST API to dial in the participant using the provided pin.
    const restUrl = process.env.DIAL_IN_REST_URL?.replace('{0}', pin);
    expect(windows.length).toBe(1);
            console.error(err);
 * Checks if the dial-in is enabled.
        await participant.getFilmstrip().kickParticipant(jigasiEndpointId);

    await inviteDialog.waitTillOpen();
    await participant.waitForParticipants(1, `dial-in.test.jigasi.participant.no.join.for:${
    const inviteDialog = p.getInviteDialog();
    const nums = await numbers.filter(
 * To be able to create a fake dial-in test that will run most of the logic for the real dial-in test.

 */
    expect(nums.length).toBe(1);

 */
    await participant.waitForIceConnected();
    const driverUrl = await p.driver.getUrl();
    await participant.waitForRemoteStreams(1);
 * @param participant
                resolve(data);
/**
}
}
    const conferenceIdMessage = p.driver.$('//div[contains(@class, "pinLabel")]');
        https.get(restUrl || '', res => {
    expect((await inviteDialog.getDialInNumber()).length > 0).toBe(displayed);



import type { Participant } from '../../helpers/Participant';
    await p.driver.$('.dial-in-numbers-list').waitForExist();
