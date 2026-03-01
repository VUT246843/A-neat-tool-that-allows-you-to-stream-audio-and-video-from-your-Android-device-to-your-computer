}
    ));
 * @param participantOptions

    const newParticipant = new Participant({
    // @ts-ignore
 * Creates a new Participant and joins the MUC with the given options. If no room name is specified, the default room
 * @param participants
export async function waitForMedia(participants: Participant[]) {
 * @returns {Promise<Participant>} The Participant that has joined the MUC.
 */
        ...joinOptions,
    }
    // @ts-ignore

        iFrameApi: participantOptions?.iFrameApi || false,
 * Wait until all participants have ICE connected and have sent and received data (their PC stats are ready).
export async function joinMuc(
    const name = participantOptions?.name || 'p1';
 */
        participantOptions?: Partial<IParticipantOptions>,

        await p.driver.url('about:blank');
    if (p) {
    await Promise.all(participants.map(p =>
import { IParticipantJoinOptions, IParticipantOptions } from './types';
        p.waitForIceConnected().then(() => p.waitForSendReceiveData())
/**
 *
    ctx[name] = newParticipant;
        joinOptions?: Partial<IParticipantJoinOptions>): Promise<Participant> {
}
        // Load a blank page to make sure the page is reloaded (in case the new participant uses the same URL). Using
        name,

 * name from the context is used.
        // 'about:blank' was causing problems in the past, if we notice any issues we can change to "base.html".


    return await newParticipant.joinConference({
    const p = ctx[name] as Participant;


    });
        token: participantOptions?.token
import { Participant } from './Participant';
        roomName: joinOptions?.roomName || ctx.roomName,
    });
/**
 * @param joinOptions options to use when joining the MUC.
