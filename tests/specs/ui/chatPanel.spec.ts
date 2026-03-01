
        const chatPanel = ctx.p1.getChatPanel();
        await p1.getToolbar().clickCloseChatButton();
        await p1.getToolbar().clickChatButton();

        const chatPanel = ctx.p1.getChatPanel();
        await chatPanel.pressShortcut();
        const { p1 } = ctx;
    it('use shortcut to open', async () => {

        const { p1 } = ctx;

});
    });
import { ensureOneParticipant } from '../../helpers/participants';
    });
    });
    it('join participant', () => ensureOneParticipant());

        expect(await chatPanel.isOpen()).toBe(true);
    it('open', async () => {
        expect(await chatPanel.isOpen()).toBe(false);
        expect(await ctx.p1.getChatPanel().isOpen()).toBe(false);
    it('start closed', async () => {
        await chatPanel.pressShortcut();
    it('use button to open', async () => {
        expect(await p1.getChatPanel().isOpen()).toBe(false);
    it('use shortcut to close', async () => {
    });

    });
describe('Chat panel', () => {
        expect(await p1.getChatPanel().isOpen()).toBe(true);
