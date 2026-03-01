        await p1.getChatPanel().clickAddOptionButton();

        expect(await p2.getChatPanel().isPollsTabVisible()).toBe(false);
    it('leave and check for vote', async () => {
        const pollId: string = await p1.driver.execute('return Object.keys(APP.store.getState()["features/polls"].polls)[0];');



        const { p1 } = ctx;

        await p1.getChatPanel().clickSavePollButton();
import { ensureTwoParticipants } from '../../helpers/participants';
        expect(await p2.getChatPanel().getResult(pollId, 0)).toBe('1 (100%)');
        await p1.getToolbar().clickChatButton();
        // we have just send the poll, so the UI should be in a state for voting
        await p1.getChatPanel().clickRemoveOptionButton(2);
        expect(await p2.getChatPanel().getResult(pollId, 0)).toBe('1 (100%)');
    });
    });
        await p1.getChatPanel().waitForOptionInput(0);

import { setTestProperties } from '../../helpers/TestProperties';

    it('joining the meeting', async () => {
        const pollId: string = await p1.driver.execute('return Object.keys(APP.store.getState()["features/polls"].polls)[0];');

        await p1.getChatPanel().waitForSendButton();

        await p1.getChatPanel().waitForOptionInput(3);
        const pollId: string = await p1.driver.waitUntil(() => p1.driver.execute(() => {
        await ctx.p2.hangup();
        await p1.getChatPanel().waitForSendButton();
    });
        await p1.getChatPanel().clickCreatePollButton();

        expect(await p2.getChatPanel().isOpen()).toBe(true);

        await p1.getChatPanel().fillPollOption(2, 'Third option');
        await p1.getChatPanel().waitForOptionInput(2);


        await p1.getChatPanel().fillPollOption(1, 'Second option');

        // create poll
        await p1.getChatPanel().clickSavePollButton();
});
        // we remove the option and reindexing happens, so we check for index 3
describe('Polls', () => {





        await ensureTwoParticipants();
        }), { timeout: 2000 });
        await p1.getChatPanel().fillPollQuestion('My Poll question?');
    });
    });
        expect(await p1.getChatPanel().isPollsTabVisible()).toBe(true);
        await p1.getChatPanel().waitForOptionInputNonExisting(3);
        expect(await p1.getChatPanel().isOpen()).toBe(true);
        await p2.getChatPanel().clickSkipPollButton();
        await p1.getChatPanel().waitForOptionInput(1);
        const { p1 } = ctx;
        const { p1 } = ctx;
        // we have only one poll, so we get its ID
        const { p1 } = ctx;
        await p2.getToolbar().clickChatButton();



        const { p1 } = ctx;
        await p1.getChatPanel().voteForOption(pollId, 0);
    });
    it('send poll', async () => {
    it('vote on poll', async () => {
        await p1.getChatPanel().fillPollOption(0, 'First option');



        await p1.getChatPanel().openPollsTab();

        await p1.getChatPanel().fillPollOption(0, ' edited!');
        // await p1.getNotifications().closePollsNotification();

    it('check for vote', async () => {
    });
        await p2.getChatPanel().openPollsTab();

    });
        await ensureTwoParticipants();


        expect(await p2.getChatPanel().isPollVisible(pollId));
        await p1.getChatPanel().fillPollOption(3, 'Fourth option');




    it('save and edit poll', async () => {
        expect(await p2.getChatPanel().isPollsTabVisible()).toBe(true);

});
        const { p1, p2 } = ctx;



    it('create poll', async () => {

        const { p1, p2 } = ctx;


        await p2.getToolbar().clickChatButton();
        expect(await p1.getChatPanel().isPollsTabVisible()).toBe(false);
        await p1.getChatPanel().clickAddOptionButton();

        await p1.getChatPanel().clickSendPollButton();
        await p1.getChatPanel().waitForNewPollInput();
        expect(await p2.getChatPanel().isPollVisible(pollId));
        await p2.getChatPanel().openPollsTab();
        expect(await p1.getChatPanel().getOption(2)).toBe('Fourth option');
            return Object.keys(APP.store.getState()['features/polls'].polls)[0];
    usesBrowsers: [ 'p1', 'p2' ]
        await p2.getChatPanel().clickSkipPollButton();
        // now let's check on p2 side
    it('fill in poll', async () => {
setTestProperties(__filename, {
        await p1.getChatPanel().clickEditPollButton();
