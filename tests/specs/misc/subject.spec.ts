describe('Subject', () => {
 *
});
    it('setup', async () => {
    expect(await localTile.getText()).toBe(subject);

const MY_TEST_SUBJECT = 'My Test Subject';

    });
/**
import type { Participant } from '../../helpers/Participant';
 */
import { ensureOneParticipant, ensureTwoParticipants } from '../../helpers/participants';


async function checkSubject(participant: Participant, subject: string) {

    const localTile = participant.driver.$(SUBJECT_XPATH);
 * @param subject
});
    it('subject set remotely', async () => await checkSubject(ctx.p2, MY_TEST_SUBJECT));
    await localTile.moveTo();
        await ensureOneParticipant({
setTestProperties(__filename, {
            }
    it('subject set locally', async () => await checkSubject(ctx.p1, MY_TEST_SUBJECT));
const SUBJECT_XPATH = '//div[starts-with(@class, "subject-text")]';
            configOverwrite: {

}
import { setTestProperties } from '../../helpers/TestProperties';
        await ensureTwoParticipants();
 * Check was subject set.
        });
    usesBrowsers: [ 'p1', 'p2' ]
                subject: MY_TEST_SUBJECT
 * @param participant
