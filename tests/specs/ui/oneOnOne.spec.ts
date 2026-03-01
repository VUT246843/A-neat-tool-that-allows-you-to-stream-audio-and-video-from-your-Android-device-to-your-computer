});
        await p1.getFilmstrip().unpinParticipant(p1);
    });
    it('filmstrip hidden in 1on1', async () => {
    usesBrowsers: [ 'p1', 'p2', 'p3' ]
        await p2.getFilmstrip().verifyRemoteVideosDisplay(true);
        await p1.getFilmstrip().hoverOverLocalVideo();
        await p1.getFilmstrip().verifyRemoteVideosDisplay(true);
    return participant.execute(() => {
        await p3.getFilmstrip().verifyRemoteVideosDisplay(true);

import { setTestProperties } from '../../helpers/TestProperties';

    });
};
        await configureToolbarsToHideQuickly(p2);
        await ensureTwoParticipants(ONE_ON_ONE_CONFIG_OVERRIDES);



} from '../../helpers/participants';
    it('filmstrip visible on self view focus', async () => {
        await p3.hangup();
        await p1.getFilmstrip().verifyRemoteVideosDisplay(true);
        await ensureThreeParticipants(ONE_ON_ONE_CONFIG_OVERRIDES);
        await p2.getFilmstrip().pinParticipant(p2);

    });


}
 */

        toolbarConfig: {
        }
        await p1.getFilmstrip().verifyRemoteVideosDisplay(false);
        disable1On1Mode: false,
        await configureToolbarsToHideQuickly(p1);
 * @returns {Promise<void>}

        await configureToolbarsToHideQuickly(p3);
});

 * Hangs up all participants (p1, p2 and p3)
        await p2.getFilmstrip().verifyRemoteVideosDisplay(true);


        APP.UI.showToolbar(250);

const ONE_ON_ONE_CONFIG_OVERRIDES = {

    });
import {
        const { p1, p2, p3 } = ctx;
            timeout: 500,
        await p2.getFilmstrip().verifyRemoteVideosDisplay(false);
        await p1.getFilmstrip().verifyRemoteVideosDisplay(false);
    it('filmstrip display when returning to 1on1', async () => {
        await p1.getFilmstrip().verifyRemoteVideosDisplay(false);
    }
        APP.UI.dockToolbar(false);

    it('filmstrip visible with more than 2', async () => {
    ensureTwoParticipants
describe('One-on-one (1on1) mode', () => {
setTestProperties(__filename, {
        const { p1, p2 } = ctx;
        await p1.getFilmstrip().pinParticipant(p1);

        await p1.getFilmstrip().verifyRemoteVideosDisplay(true);
/**
function configureToolbarsToHideQuickly(participant: Participant): Promise<void> {


import type { Participant } from '../../helpers/Participant';
    });
            alwaysVisible: false
        const { p1, p2, p3 } = ctx;
        const { p1 } = ctx;
    configOverwrite: {
    it('filmstrip hover show videos', async () => {

        const { p1 } = ctx;
    ensureThreeParticipants,
    });

