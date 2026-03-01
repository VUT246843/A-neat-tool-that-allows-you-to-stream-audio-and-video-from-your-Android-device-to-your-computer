            maxOccupants: 2
import { joinJaasMuc, generateJaasToken as t } from '../../helpers/jaas';
    });
        expect(await p1.isInMuc()).toBe(true);

});

        await p1.hangup();

});
        p3 = await joinJaasMuc({ name: 'p3', token: t({ room: ctx.roomName }) });
    it('test maxOccupants limit', async () => {
        // Third participant should be rejected (exceeding maxOccupants), even if it's a moderator
        let p3 = await joinJaasMuc({ name: 'p3', token: t({ room: ctx.roomName, moderator: true }) });
    useJaas: true,
        const p2 = await joinJaasMuc({ name: 'p2', token: t({ room: ctx.roomName }) });

        };
        const p1 = await joinJaasMuc({ token: t({ room: ctx.roomName }) });
import { setTestProperties } from '../../helpers/TestProperties';

        expect(Boolean(await p3.isInMuc())).toBe(false);
    usesBrowsers: [ 'p1', 'p2', 'p3' ]

describe('MaxOccupants', () => {

        expect(await p3.isInMuc()).toBe(true);
        ctx.webhooksProxy.defaultMeetingSettings = {
    requireWebhookProxy: true,
        expect(await p2.isInMuc()).toBe(true);
setTestProperties(__filename, {
