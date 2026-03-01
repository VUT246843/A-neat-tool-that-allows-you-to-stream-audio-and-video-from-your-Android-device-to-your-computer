        } else {
    description: 'This test asserts that participants have the expected role ("moderator" or not). Failures here\
        p1 = await joinMuc({ name: 'p1', token: testsConfig.jwt.preconfiguredToken });
            expect(await p1.isModerator()).toBe(true);
            await p2.driver.waitUntil(async () => (await p2.isModerator()));
            expect(await p1.isModerator()).toBe(false);


        }
    });
        if (expectations.moderation.firstModerator) {
    usesBrowsers: [ 'p1', 'p2' ]
        }
    it('all moderators', async () => {
describe('Moderation', () => {
        if (expectations.moderation.autoModerator && !expectations.moderation.allModerators) {
import { joinMuc } from '../../helpers/joinMuc';
            await p1.hangup();
        if (expectations.moderation.allModerators) {

import { setTestProperties } from '../../helpers/TestProperties';
        most likely indicate that the environment or test framework is misconfigured.',
            expect(await p1.isModerator()).toBe(true);
});
    });
    });
        p2 = await joinMuc({ name: 'p2', token: testsConfig.jwt.preconfiguredToken });
            expect(await p1.isModerator()).toBe(true);
    });
    it('auto moderator promotion', async () => {
setTestProperties(__filename, {
});
import { expectations } from '../../helpers/expectations';
    it('first moderator', async () => {
            expect(await p2.isModerator()).toBe(false);
    it('setup', async () => {
        }
            expect(await p2.isModerator()).toBe(true);
import { config as testsConfig } from '../../helpers/TestsConfig';
// Just make sure that users are given moderator rights as specified in the expectations config.
    let p1: Participant, p2: Participant;
import { Participant } from '../../helpers/Participant';
