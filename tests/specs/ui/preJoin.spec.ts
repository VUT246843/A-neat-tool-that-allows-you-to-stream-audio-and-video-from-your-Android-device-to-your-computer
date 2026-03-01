    it('without lobby', async () => {

        await p1SecurityDialog.waitForDisplay();
        const p1PreJoinScreen = ctx.p1.getPreJoinScreen();
        await ensureOneParticipant();
                }
        const { p1 } = ctx;

        await p1PreJoinScreen.waitForLoading();
    it('without audio', async () => {

            skipWaitToJoin: true,
            configOverwrite: {


            .waitForDisplayed();
        });
                    enabled: true,
        await error.waitForDisplayed();
                prejoinConfig: {
        });
        await joinFirstParticipant({
    });

        expect(await p1SecurityDialog.isLobbyEnabled()).toBe(false);
        await p1SecurityDialog.waitForLobbyEnabled();
            },
        await p1PreJoinScreen.waitForLoading();

            },
        await joinWithoutAudioBtn.waitForClickable();
            skipWaitToJoin: true,


    });
            skipDisplayName: true,
                prejoinConfig: {

    });
        await joinButton.waitForDisplayed();
                requireDisplayName: true
import { setTestProperties } from '../../helpers/TestProperties';
describe('Pre-join screen', () => {
            skipDisplayName: true,
                }
                prejoinConfig: {
        await joinFirstParticipant({
        await joinButton.waitForDisplayed();
    it('display name required', async () => {
        const p1SecurityDialog = p1.getSecurityDialog();


        await p1PreJoinScreen.waitForLoading();

        await ctx.p1.hangup();


            skipPrejoinButtonClick: true
            skipWaitToJoin: true,
        await joinButton.waitForDisplayed();
            },
            skipPrejoinButtonClick: true

        await p1SecurityDialog.toggleLobby();

        const p1PreJoinScreen = p1.getPreJoinScreen();
                    enabled: true,

        await ctx.p1.hangup();

                }
            skipPrejoinButtonClick: true
                    enabled: true,
        const error = p1PreJoinScreen.getErrorOnJoin();

            },
        const joinWithoutAudioBtn = p1PreJoinScreen.getJoinWithoutAudioButton();
        const p1PreJoinScreen = ctx.p1.getPreJoinScreen();
        const joinButton = p1PreJoinScreen.getJoinButton();
        await ctx.p1.hangup();
        });
            skipWaitToJoin: true,
                },
        await p1PreJoinScreen.waitForLoading();

            skipDisplayName: true,



        await p1.waitToJoinMUC();
setTestProperties(__filename, {
        await p1.driver.$('//div[contains(@class, "audio-preview")]//div[contains(@class, "toolbox-icon") '
            configOverwrite: {

import { ensureOneParticipant, joinFirstParticipant, joinSecondParticipant } from '../../helpers/participants';
            configOverwrite: {



            skipDisplayName: true,
        await joinWithoutAudioBtn.click();


            + 'and contains(@class, "toggled") and contains(@class, "disabled")]')
    usesBrowsers: [ 'p1', 'p2' ]
});
        await joinSecondParticipant({
        const p1PreJoinScreen = ctx.p2.getPreJoinScreen();


        const joinButton = p1PreJoinScreen.getJoinButton();


                    enabled: true,
        await joinButton.click();
        const joinButton = p1PreJoinScreen.getJoinButton();
        await joinFirstParticipant({
                prejoinConfig: {
        await p1.getToolbar().clickSecurityButton();
        const { p1 } = ctx;


    it('with lobby', async () => {
    });
        });
});

        await p1PreJoinScreen.getJoinOptions().click();
            configOverwrite: {
            skipPrejoinButtonClick: true
