import { ensureTwoParticipants } from '../../helpers/participants';
    it('joining the meeting', () => ensureTwoParticipants());


setTestProperties(__filename, {
        await closeToolbarMenu();

    it('p2 click on remote', async () => {
    });
    it('p1 click on remote', async () => {

async function closeToolbarMenu() {
    usesBrowsers: [ 'p1', 'p2' ]

    });
        const { p1, p2 } = ctx;

/**

});
    it('p2 click on local', () => ctx.p2.getFilmstrip().pinParticipant(ctx.p2));
    await ctx.p2.getToolbar().closeOverflowMenu();
        const { p1, p2 } = ctx;
    it('p1 unpin remote', () => ctx.p1.getFilmstrip().unpinParticipant(ctx.p2));
describe('Pinning', () => {
import { setTestProperties } from '../../helpers/TestProperties';

    await ctx.p1.getToolbar().closeOverflowMenu();
 */
});
        await p2.getFilmstrip().pinParticipant(p1);
}


        await p1.getFilmstrip().pinParticipant(p2);
 * Closes the overflow menu on both participants.


    it('p2 pin remote', () => ctx.p2.getFilmstrip().pinParticipant(ctx.p1));
    it('p1 click on local', () => ctx.p1.getFilmstrip().pinParticipant(ctx.p1));

    it('p2 unpin remote', () => ctx.p2.getFilmstrip().unpinParticipant(ctx.p1));

        await closeToolbarMenu();
