        await p1.getToolbar().clickExitTileViewButton();
                timeout: 5_000,
    it('joining the meeting', async () => {
            p1.waitForTileViewDisplayed(),
                timeoutMsg: 'The pinned participant is not displayed on stage for p3'
        if (!await p2.isModerator()) {
    it('follow me checkbox visible only for moderators', async () => {
        const { p1 } = ctx;
        await p1.getToolbar().clickSettingsButton();
            async () => p2VideoIdOnp3 === await p3.getLargeVideo().getId(),
            p2.waitForTileViewDisplayed(true),
        const localVideoId = await p2Filmstrip.getLocalVideoId();

    usesBrowsers: [ 'p1', 'p2', 'p3' ]
            await settings.waitForDisplay();
            async () => await localVideoId === await p2.getLargeVideo().getId(),

        await Promise.all([
    });


            await p2.getToolbar().clickSettingsButton();

        await p1Filmstrip.assertRemoteVideosHidden();
        ]);
    it('filmstrip commands', async () => {


setTestProperties(__filename, {

    it('next on stage', async () => {
        await settings.submit();
        await settings.setFollowMe(true);
        }
            p3.waitForTileViewDisplayed(true)
                timeout: 5_000,
        await p1Filmstrip.toggle();

        await ensureTwoParticipants();

        const p1Filmstrip = p1.getFilmstrip();


        await p1.getFilmstrip().pinParticipant(p2);
            const settings = p2.getSettingsDialog();
        const p2Filmstrip = p2.getFilmstrip();
describe('Follow me', () => {
        await p1.waitForTileViewDisplayed();
        await p3.driver.waitUntil(

        await Promise.all([
            await settings.clickCloseButton();
    });
import { ensureThreeParticipants, ensureTwoParticipants } from '../../helpers/participants';
import { setTestProperties } from '../../helpers/TestProperties';
            expect(await settings.isFollowMeDisplayed()).toBe(false);
    });
        const p2VideoIdOnp3 = await p3.getFilmstrip().getRemoteVideoId(await p2.getEndpointId());
        const p2Filmstrip = p2.getFilmstrip();

            p1.waitForTileViewDisplayed(true),
        const settings = p1.getSettingsDialog();
            });
            p2.waitForTileViewDisplayed(),
    });




    });
        await ensureThreeParticipants();
        await p2.driver.waitUntil(
            });

        const { p1, p2, p3 } = ctx;
        const { p1, p2 } = ctx;
            {


    it('tile view', async () => {


});

        await p1.getToolbar().clickEnterTileViewButton();
        const { p2 } = ctx;
                timeoutMsg: 'The pinned participant is not displayed on stage for p2'
        await p2Filmstrip.assertRemoteVideosHidden();

        await settings.waitForDisplay();
});

            p3.waitForTileViewDisplayed()
        const { p1, p2, p3 } = ctx;

            {
        ]);

