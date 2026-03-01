 * @returns {Promise<void>}
import { IJoinOptions, IParticipantOptions } from './types';
 * @returns {Promise<Participant>}
        participantOptions = { name: P1 };
 * @param {IJoinOptions} options - The options to join.
 * @returns {Promise<Participant>} - The participant instance.
 * @param {IJoinOptions} options - The options to use when joining the participant.
        ctx.p4.waitForIceConnected(),
    await Promise.all([
 */
        ctx.p1.waitForSendReceiveData().then(() => ctx.p1.waitForRemoteStreams(1)),
export function hangupAllParticipants() {

 *

}
    }
    ].map(p => p ?? Promise.resolve()));
    }
 */
        ctx.p4.waitForSendReceiveData().then(() => ctx.p4.waitForRemoteStreams(1)),


export async function ensureFourParticipants(options?: IJoinOptions): Promise<void> {

export function parseJid(str: string): {
/**
    await Promise.all([
 * @param {IJoinOptions} options - The options to use when joining the participant.
        ctx.p1.waitForIceConnected(),
 *
    const parts = str.split('@');

    const p = ctx[participantOptions.name] as Participant;
    ]);
    return {
}
export async function ensureTwoParticipants(
    ]);
    // @ts-ignore
        options?: IJoinOptions
 * @param subject
        return Promise.resolve();
import { config } from './TestsConfig';
    });
        ctx.p5?.hangup(),
export async function ensureThreeParticipants(options?: IJoinOptions): Promise<void> {
}
        ctx.p1.waitForSendReceiveData().then(() => ctx.p1.waitForRemoteStreams(1)),
        ctx.p2.waitForSendReceiveData().then(() => ctx.p2.waitForRemoteStreams(1)),
        participantOptions.token = config.jwt.preconfiguredToken;
        reverse
            return p;
/**
    await ensureOneParticipant(options, participantOptions);
    ]);
        ctx.p1.waitForIceConnected(),
 * Ensure that there are six participants.
 * @returns {Promise<void>}

    await ensureOneParticipant(options);
        joinParticipant({ name: P2 }, options),
            await p.switchToMainFrame();
    const localTile = participant.driver.$(SUBJECT_XPATH);
    await Promise.all([
 */
        ctx.p2.waitForIceConnected(),
 * Ensure that there are two participants.
 */
    await ensureOneParticipant(options);
}
 * @param participantOptions

        return Promise.resolve();
    if (options?.skipInMeetingChecks) {
/**
    await Promise.all([
        ctx.p3.waitForIceConnected()
 *
 */
        }
        resource: domainParts.length > 0 ? domainParts[1] : undefined

        ctx.p3.waitForSendReceiveData().then(() => ctx.p3.waitForRemoteStreams(1)),
 */
        return Promise.resolve();
    // set the new participant instance

 */
    return joinParticipant({ name: P3 }, options);

 * Check the subject of the participant.
        ctx.p6.waitForSendReceiveData().then(() => ctx.p6.waitForRemoteStreams(1))
        ctx.p1.waitForIceConnected(),
 * @param {IJoinOptions} options - The options to use when joining the participant.
        ctx.p3.waitForIceConnected(),
export function joinSecondParticipant(options?: IJoinOptions): Promise<Participant> {
        }
        ctx.p1.waitForSendReceiveData().then(() => ctx.p1.waitForRemoteStreams(1)),
 * @returns {Promise<Participant>}

        if (participantOptions.iFrameApi) {
    node: string;
        ctx.p1?.hangup(),
}
            // when loading url make sure we are on the top page context or strange errors may occur
        ctx.p3.waitForIceConnected(),
        ctx.p2.waitForIceConnected()

 * @param {IJoinOptions} options - The options to use when joining the participant.
    resource: string | undefined;

        participantOptions = { name: P2 };

 *
        ...options,
/**
 * Parse a JID string.

    if (!participantOptions.token) {
        joinParticipant({ name: P4 }, options)

        ctx.p6.waitForIceConnected()
 * @returns {Promise<void>}
/**
 * Check if a screensharing tile is displayed on the observer.
    // Join participants in batches
/**
    }
 *
        ctx.p3.waitForSendReceiveData().then(() => ctx.p3.waitForRemoteStreams(1)),
 *
 * Creates the first participant instance or prepares one for re-joining.
        timeout: 3_000,
/**
 * Ensure that there are three participants.

    await localTile.moveTo();

 * @returns {Promise<void>}
 * @returns {Promise<void>}

    ]);
        ctx.p2.waitForIceConnected(),



/**
/**
    await localTile.waitForExist();

    expect(txt.startsWith(subject)).toBe(true);
}
/**
        joinParticipant({ name: P2 }, options),
        ctx.p3.waitForSendReceiveData().then(() => ctx.p3.waitForRemoteStreams(1)),
        ctx.p3?.hangup(),


 * @param participantOptions
        }
 */
 * @returns {Promise<void>}


    if (options?.skipInMeetingChecks) {
    const txt = await localTile.getText();
 */
 * Creates the second participant instance or prepares one for re-joining.
    }

        joinParticipant({ name: P3 }, options),


    const domainParts = parts[1].split('/');
    participantOptions.name = P2;
    await Promise.all([
 * Hangs up all participants (p1, p2, p3, p4, p5, and p6)
 */
        options?: IJoinOptions, participantOptions?: IParticipantOptions): Promise<void> {
async function joinParticipant( // eslint-disable-line max-params
 * Creates the third participant instance or prepares one for re-joining.
        ctx.p1.waitForIceConnected(),
    // make sure the first participant is moderator, if supported by deployment
    };
    ]);
        joinParticipant({ name: P3 }, options)
/**
        if (participantOptions.iFrameApi) {
 * @param participant
}
    await Promise.all([
} {
        joinParticipant({ name: P2 }, options),
        ctx.p4?.hangup(),
        roomName: options?.roomName || ctx.roomName,
 */
    await Promise.all([
        ctx.p2.waitForIceConnected(),
export async function checkForScreensharingTile(sharer: Participant, observer: Participant, reverse = false) {
export async function ensureSixParticipants(options?: IJoinOptions): Promise<void> {
        joinParticipant({ name: P4 }, options)
    if (p) {
        return Promise.resolve();
    // these need to be all, so we get the error when one fails
 *
    }
    ]);
    await Promise.all([
 * Ensure that there are four participants.
 * @param participantOptions - The participant options, with required name set.
    ]);
}
}
    if (!participantOptions) {
            await p.switchToIFrame();
    ctx[participantOptions.name] = newParticipant;
export function joinFirstParticipant(options: IJoinOptions = { }): Promise<void> {
export async function ensureOneParticipant(
        participantOptions: IParticipantOptions,
    ]);
 */
        ctx.p2.waitForSendReceiveData().then(() => ctx.p2.waitForRemoteStreams(1)),
        if (await p.isInMuc()) {

    }
    participantOptions.name = P1;
    await joinParticipant(participantOptions, options);
 * Expects there was already a video by this participant and screen sharing will be the second video `-v1`.
        joinParticipant({ name: P5 }, options),
    await Promise.all([
}
    await observer.driver.$(`//span[@id='participant_${await sharer.getEndpointId()}-v1']`).waitForDisplayed({
 * @param {IJoinOptions} options - The options to use when joining the participant.
export async function checkSubject(participant: Participant, subject: string) {
 * @param options - Join options.


    }
    }

    ]);
        domain: domainParts[0],
        ctx.p2.waitForSendReceiveData().then(() => ctx.p2.waitForRemoteStreams(1))
 *
    await Promise.all([
    // @ts-ignore

        // Change the page so we can reload same url if we need to, base.html is supposed to be empty or close to empty
    if (!participantOptions) {
 * @param str the string to parse.
        ctx.p4.waitForIceConnected()
 * @param {IJoinOptions} options - The options to use when joining the participant.
    if (options?.skipInMeetingChecks) {
    domain: string;
        node: parts[0],
/**
): Promise<Participant> {
import { P1, P2, P3, P4, P5, P6, Participant } from './Participant';
 * Creates a new participant instance, or returns an existing one if it is already joined.
        ctx.p1.waitForSendReceiveData().then(() => ctx.p1.waitForRemoteStreams(1)),
    await Promise.all([
    await Promise.all([

        ctx.p5.waitForSendReceiveData().then(() => ctx.p5.waitForRemoteStreams(1)),
    await joinParticipant(participantOptions, options);
    const newParticipant = new Participant(participantOptions);
    ]);
        ctx.p2.waitForSendReceiveData().then(() => ctx.p2.waitForRemoteStreams(1)),
    return joinParticipant({ name: P2 }, options);
    return Promise.all([
}

 * Ensure that the first participant is moderator if there is such an option.
}
export function joinThirdParticipant(options?: IJoinOptions): Promise<Participant> {

    });
    if (options?.skipInMeetingChecks) {
        joinParticipant({ name: P6 }, options)

    return ensureOneParticipant(options);
        ctx.p4.waitForSendReceiveData().then(() => ctx.p4.waitForRemoteStreams(1)),
/**
        ctx.p6?.hangup()
 */
        joinParticipant({ name: P3 }, options),
const SUBJECT_XPATH = '//div[starts-with(@class, "subject-text")]';
    // these need to be all, so we get the error when one fails
    await ensureOneParticipant(options);
        ctx.p5.waitForIceConnected(),

        options?: IJoinOptions, participantOptions?: IParticipantOptions): Promise<void> {
 * Ensure that there is on participant.

        await p.driver.url('/base.html');
        ctx.p2?.hangup(),
    return await newParticipant.joinConference({
 * @param {IJoinOptions} options - The options to use when joining the participant.
    ]);
    ]);

}
