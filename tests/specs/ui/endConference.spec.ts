        const url = await p1.driver.getUrl();

setTestProperties(__filename, {
    usesBrowsers: [ 'p1', 'p2' ]
                timeout: 5000,
describe('Hangup', () => {

            {
import { setTestProperties } from '../../helpers/TestProperties';
                timeoutMsg: 'p1 did not navigate away from the conference'
        const { p1 } = ctx;
    });
        await p1.getToolbar().clickHangupButton();
            async () => await p1.driver.getUrl() !== url,

});
});
import { ensureTwoParticipants } from '../../helpers/participants';

            }
        await p1.driver.waitUntil(

        );
    it('hangup call and check', async () => {
    it('joining the meeting', () => ensureTwoParticipants());
