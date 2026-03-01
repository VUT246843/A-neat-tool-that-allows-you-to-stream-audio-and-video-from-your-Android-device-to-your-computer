    usesBrowsers: [ 'p1' ]
    });
                config
        });
        });
describe('XMPP Conference Request', () => {

        const { p1 } = ctx;
setTestProperties(__filename, {
                prejoinConfig: {
            skipWaitToJoin: true,
        await p1.driver.execute(async () => {
            });
            config.conferenceRequestUrl = '';
            configOverwrite: {

                type: 'OVERWRITE_CONFIG',

    it('join with conferenceRequestUrl disabled', async () => {
            skipPrejoinButtonClick: true,
        expect(await p1.isInMuc()).toBe(true);
            }
});
import { ensureOneParticipant } from '../../helpers/participants';
                }
        await ensureOneParticipant({
});
                    enabled: true
    description: 'Test that conference requests work over XMPP',
        await p1.waitForMucJoinedOrError();
        await p1.getPreJoinScreen().getJoinButton().click();
import { setTestProperties } from '../../helpers/TestProperties';


            APP.store.dispatch({
        // Update config before joining, because this option cannot be overridden with URL params.
