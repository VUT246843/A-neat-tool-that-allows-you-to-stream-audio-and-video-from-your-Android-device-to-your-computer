            timeoutMsg: 'No leave reason dialog shown for p2'
        await ensureTwoParticipants({
    await kicker.waitForParticipants(0);
});
}
describe('Kick', () => {
        if (!expectations.moderation.allModerators) {
    await kicker.getFilmstrip().kickParticipant(await kickee.getEndpointId());
        }
        await kickAndCheck(p1, p2);

    it('setup', async () => {
    it('kick (p2p enabled)', async () => {
        await p1.hangup();
    let p1: Participant, p2: Participant;
            timeout: 2000,
            await p2.execute(


            expect(await p1.isInMuc()).toBe(true);
        p1 = ctx.p1;
        await p2.hangup();

            configOverwrite: {
 * Kicks the second participant and checks that the participant is removed from the conference and that dialogue is open.
                epId => APP.conference._room.kickParticipant(epId, 'for funzies'),

    await kickee.driver.waitUntil(
});
        });

    it('kick (p2p disabled)', () => kickAndCheck(p1, p2));
    usesBrowsers: [ 'p1', 'p2' ]

                }
    it('setup (p2p enabled)', async () => {
            p2 = ctx.p2;
            ctx.skipSuiteTests = 'the first participant is not a moderator';
                p2p: {
    });
            await ensureTwoParticipants();
import { expectations } from '../../helpers/expectations';
        if (!await p1.isModerator()) {
async function kickAndCheck(kicker: Participant, kickee: Participant) {
            await p1.driver.pause(3000);

/**
                await p1.getEndpointId()
            }

    // check that the kicked participant sees the kick reason dialog
        });
        p2 = ctx.p2;
setTestProperties(__filename, {
    });
                    enabled: true
import { setTestProperties } from '../../helpers/TestProperties';
import { ensureTwoParticipants } from '../../helpers/participants';
        // We verify elsewhere (moderation.spec.ts) that the first participant is a moderator.
        async () => kickee.isLeaveReasonDialogOpen(), {
    });
        p2 = ctx.p2;
        await ensureTwoParticipants();
            expect(await p2.isModerator()).toBe(false);
        }
    retry: true,


import { Participant } from '../../helpers/Participant';
    it('non-moderator cannot kick', async () => {
            );
        p1 = ctx.p1;
 */


    });
