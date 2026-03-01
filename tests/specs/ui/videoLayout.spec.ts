
        const largeVideo = p1.driver.$('//div[@id="largeVideoContainer"]');
        expect((largeVideoSize.width === (innerWidth - filmstripWidth)) || (largeVideoSize.height === innerHeight))
            filmstripWidth = 0;
        const innerWidth = parseInt(await p1.execute('return window.innerWidth'), 10);
    it('check', async () => {
        const innerHeight = parseInt(await p1.execute('return window.innerHeight'), 10);

        const largeVideoSize = await largeVideo.getSize();
    it('join participant', () => ensureOneParticipant());

        const filmstrip = p1.driver.$('//div[contains(@class, "filmstrip")]');

        const { p1 } = ctx;
        let filmstripWidth;
import { ensureOneParticipant } from '../../helpers/participants';
        }

        if (!await filmstrip.isExisting() || !await filmstrip.isDisplayed()) {
            .toBe(true);
describe('Video layout', () => {
            filmstripWidth = await filmstrip.getSize('width');
});

    });

        } else {
