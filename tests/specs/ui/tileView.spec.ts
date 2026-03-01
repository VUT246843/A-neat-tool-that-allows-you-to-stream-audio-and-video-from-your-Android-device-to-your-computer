describe('Tile view', () => {
 */
    it('local video is displayed in tile view', async () => {
 * at the end of all the other remote videos, as the last tile.
    usesBrowsers: [ 'p1', 'p2' ]
/**
});
import { config as testsConfig } from '../../helpers/TestsConfig';
            timeout: 3000,
        await p1.driver.$(TILE_VIEW_LOCAL_VIDEO_CSS_SELECTOR).waitForDisplayed({
    });
import { Participant } from '../../helpers/Participant';
        await p1.getFilmstrip().pinParticipant(p2);
    });
        await p1.waitForTileViewDisplayed(true);
        await p1.waitForTileViewDisplayed(true);
    it('local video display independently from remote', async () => {
        await p1.waitForTileViewDisplayed();

    it('exit tile view by clicking "exit tile view"', async () => {
 * be in a container separate from remote videos so remote videos can
        p1 = await joinMuc({ name: 'p1', token: testsConfig.jwt.preconfiguredToken });
const FILMSTRIP_VIEW_LOCAL_VIDEO_CSS_SELECTOR = '#filmstripLocalVideo #localVideoContainer';
        await p1.getToolbar().clickEnterTileViewButton();
    });
});
setTestProperties(__filename, {
    let p1: Participant, p2: Participant;
    it('entering tile view', async () => {
import { joinMuc } from '../../helpers/joinMuc';

        await p1.driver.$(FILMSTRIP_VIEW_LOCAL_VIDEO_CSS_SELECTOR).waitForDisplayed({ timeout: 3000 });
 * scroll while local video stays docked.
        });
 */
    });
            timeout: 3000,

            reverse: true
        await p1.waitForTileViewDisplayed();
        await p1.driver.$(TILE_VIEW_LOCAL_VIDEO_CSS_SELECTOR).waitForDisplayed({ timeout: 3000 });
const TILE_VIEW_LOCAL_VIDEO_CSS_SELECTOR = '.remote-videos #localVideoContainer';
        });
/**
    });

    before('join the meeting', async () => {
    it('exit tile view by pinning', async () => {
 * The CSS selector for local video when outside of tile view. It should

        p2 = await joinMuc({ name: 'p2' });
import { setTestProperties } from '../../helpers/TestProperties';
            reverse: true
        await p1.getToolbar().clickEnterTileViewButton();
        await p1.getToolbar().clickExitTileViewButton();
        await p1.driver.$(FILMSTRIP_VIEW_LOCAL_VIDEO_CSS_SELECTOR).waitForDisplayed({
 * The CSS selector for local video tile view is enabled. It should display
    });
