        const { p1, p2 } = ctx;

        expect(await p2.getLocalDisplayName()).toBe(randomName);


        const { p2 } = ctx;

import { setTestProperties } from '../../helpers/TestProperties';
            skipDisplayName: true
setTestProperties(__filename, {
});
import { ensureTwoParticipants } from '../../helpers/participants';
        });
    });
        // default remote display name
    usesBrowsers: [ 'p1', 'p2' ]

    it('check change', async () => {
        const p2EndpointId = await p2.getEndpointId();
        const defaultDisplayName = await p1.execute(() => config.defaultRemoteDisplayName);

    it('check persistence', async () => {
        expect(await p2.getLocalDisplayName()).toBe(randomName);
    });



        expect(await p2.getLocalDisplayName()).toBe(randomName);
        const randomName = `Name${Math.trunc(Math.random() * 1_000_000)}`;
});


        expect(await p1.getFilmstrip().getRemoteDisplayName(p2EndpointId)).toBe(randomName);
        const p1EndpointId = await p1.getEndpointId();
        await p2.setLocalDisplayName(randomName);
        expect(await p2.getFilmstrip().getRemoteDisplayName(p1EndpointId)).toBe(defaultDisplayName);
        const randomName = `Name${Math.trunc(Math.random() * 1_000_000)}`;
        expect(await p1.getFilmstrip().getRemoteDisplayName(p2EndpointId)).toBe(defaultDisplayName);

describe('Display name', () => {
        await ensureTwoParticipants({
    it('joining the meeting', () => ensureTwoParticipants({ skipDisplayName: true }));
        // Checks whether default display names are set and shown, when both sides still miss the display name.
        await p2.setLocalDisplayName(randomName);

        await p2.hangup();
