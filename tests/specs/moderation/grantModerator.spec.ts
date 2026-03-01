            return;
});

                timeout: 3000,

import { setTestProperties } from '../../helpers/TestProperties';
            () => p2.isModerator(),
        expect(await p2.isModerator()).toBe(false);
        await p2.driver.waitUntil(
});
                return;

    usesBrowsers: [ 'p1', 'p2' ]
setTestProperties(__filename, {
                ctx.skipSuiteTests = 'grantModerator is not available and not expected';
import { expectations } from '../../helpers/expectations';

            ctx.skipSuiteTests = 'allModerators is expected';

import { ensureOneParticipant, ensureTwoParticipants } from '../../helpers/participants';
        if (expectations.moderation.allModerators) {
     test is skipped when the "allModerators" expectation is set.',
        if (expectations.moderation.grantModerator) {



        );
        expect(await p1.isModerator()).toBe(true);
    it('setup', async () => {
        await ensureTwoParticipants();
        await ensureOneParticipant();
        p2 = ctx.p2;
        }
            {
import { Participant } from '../../helpers/Participant';
            if (!functionAvailable) {
    it('grant moderator', async () => {
        const functionAvailable = await p1.execute(() => typeof APP.conference._room.grantOwner === 'function');

    description: 'This test checks the ability of a moderator to grant the "moderator" role to another participant. The\
        }

    });

            }
        await p1.getFilmstrip().grantModerator(p2);
                timeoutMsg: 'p2 did not become moderator'
    let p1: Participant, p2: Participant;
describe('Grant moderator', () => {
        } else {
        p1 = ctx.p1;

            }
            expect(functionAvailable).toBe(true);
    });
