                    enabled: false

            configOverwrite: {

async function checkEveryoneMuted({ p1, p2 }: { p1: Participant; p2: Participant; }) {

    await p1.getParticipantsPane().assertAudioMuteIconIsDisplayed(p2);
        await checkEveryoneMuted(ctx);
setTestProperties(__filename, {
import { setTestProperties } from '../../helpers/TestProperties';
    it('joining with no prejoin - direct url param ', async () => {
    });
import { ensureTwoParticipants, hangupAllParticipants } from '../../helpers/participants';
    await p1.getParticipantsPane().assertAudioMuteIconIsDisplayed(p1);
        });
});
    await p2.getFilmstrip().assertAudioMuteIconIsDisplayed(p1);
    await p1.getFilmstrip().assertAudioMuteIconIsDisplayed(p2);

            skipInMeetingChecks: true,
    await p2.getParticipantsPane().assertAudioMuteIconIsDisplayed(p1);

                prejoinConfig: {

    await p2.getParticipantsPane().assertAudioMuteIconIsDisplayed(p2);
    usesBrowsers: [ 'p1', 'p2' ]
    });
    it('joining with no prejoin - nested object', async () => {
        await checkEveryoneMuted(ctx);
    await p2.getFilmstrip().assertAudioMuteIconIsDisplayed(p2);
                }

    await p1.getFilmstrip().assertAudioMuteIconIsDisplayed(p1);
        });
        await ensureTwoParticipants({
});
}
            skipInMeetingChecks: true,
        await ensureTwoParticipants({
            urlAppendString: '&config.prejoinConfig.enabled=false'
import type { Participant } from '../../helpers/Participant';
describe('Prejoin disabled', () => {
        await hangupAllParticipants();
            },
