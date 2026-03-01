 */
        const { p1 } = ctx;
    await settings.waitForDisplay();

import { ensureTwoParticipants } from '../../helpers/participants';
import { setTestProperties } from '../../helpers/TestProperties';


        await toggleSelfViewFromSettings(p1, true);
}
    it('hide from settings', async () => {
    await participant.getFilmstrip().assertSelfViewIsHidden(hidden);
        await checkSelfViewHidden(p1, true, true);
});
        await checkSelfViewHidden(p1, true);
    });


    await settings.setHideSelfView(hide);
        await checkSelfViewHidden(p1, true, true);
    it('hide from menu', async () => {
        await checkSelfViewHidden(p1, true);
        const { p1, p2 } = ctx;
async function toggleSelfViewFromSettings(participant: Participant, hide: boolean) {

        await p2.hangup();

    it('show from settings', async () => {

    it('check in alone meeting', async () => {
async function checkSelfViewHidden(participant: Participant, hidden: boolean, checkNotification = false) {
setTestProperties(__filename, {
    if (checkNotification) {
    await participant.getToolbar().clickSettingsButton();
});
    it('joining the meeting', () => ensureTwoParticipants());
 * Toggles the self view option from the settings dialog.
        await checkSelfViewHidden(p1, false);
        await participant.getNotifications().closeReEnableSelfViewNotification();
        const { p1 } = ctx;
    usesBrowsers: [ 'p1', 'p2' ]

    await settings.submit();

    }

        await p1.getFilmstrip().hideSelfView();


 * Checks whether the local self view is displayed or not.
    const settings = participant.getSettingsDialog();

        const { p1 } = ctx;

        await checkSelfViewHidden(p1, true);
import type { Participant } from '../../helpers/Participant';

        await p1.getToolbar().clickEnterTileViewButton();
 */
        await toggleSelfViewFromSettings(p1, false);


describe('Self view', () => {
/**
    });

/**

        await checkSelfViewHidden(p1, false);
    });
    });
}
        await participant.getNotifications().waitForReEnableSelfViewNotification();
