import { setTestProperties } from '../../helpers/TestProperties';
});
    it('stop video on participant and check', () => muteVideoAndCheck(ctx.p2, ctx.p1));


        const largeVideoId = await ctx.p1.getLargeVideo().getId();

    });

        // check if video stream from second participant is still on large video

import { ensureTwoParticipants } from '../../helpers/participants';
describe('Stop video', () => {
    it('start video and check stream', async () => {
    it('stop video on before second joins', async () => {
setTestProperties(__filename, {


});
        await ctx.p2.hangup();
    it('joining the meeting', () => ensureTwoParticipants());
    it('stop video and check', () => muteVideoAndCheck(ctx.p1, ctx.p2));

        await p1.getToolbar().clickVideoMuteButton();


        const { p1 } = ctx;
import { muteVideoAndCheck, unmuteVideoAndCheck } from '../helpers/mute';
        expect(largeVideoId).toBe(await ctx.p1.getLargeVideo().getId());



        await unmuteVideoAndCheck(ctx.p1, ctx.p2);
        // now participant2 should be on large video
        await unmuteVideoAndCheck(p1, p2);

        const { p2 } = ctx;
    usesBrowsers: [ 'p1', 'p2' ]
    it('start video on participant and check', () => unmuteVideoAndCheck(ctx.p2, ctx.p1));


    });
        await ensureTwoParticipants();
        await p2.getParticipantsPane().assertVideoMuteIconIsDisplayed(p1);
        await muteVideoAndCheck(ctx.p1, ctx.p2);
    it('start video and check', () => unmuteVideoAndCheck(ctx.p1, ctx.p2));

