            token: t({ room: ctx.roomName, displayName: 'Visi Tor' })
        console.log('Participant joined');
        console.log('Visitor joined');
            token: t({ room: ctx.roomName, displayName: 'Parti Cipant' })
setTestProperties(__filename, {
        expect(await v.isModerator()).toBe(false);
    it('test participantsSoftLimit', async () => {
        ctx.webhooksProxy.defaultMeetingSettings = {
        expect(await v.isInMuc()).toBe(true);
describe('Visitors triggered by reaching participantsSoftLimit', () => {

        });
        console.log('Moderator joined');
        };
        // Joining with a participant token after participantSoftLimit has been reached



        });
        });
        expect(await m.isVisitor()).toBe(false);
            visitorsEnabled: true
        expect(await m.isInMuc()).toBe(true);
        // Joining with a participant token before participantSoftLimit has been reached
            participantsSoftLimit: 2,
            name: 'p2',
    });
});
    useJaas: true,
    useWebhookProxy: true,
        const v = await joinJaasMuc({

        const p = await joinJaasMuc({
        const m = await joinJaasMuc({
        /// XXX the "name" of the participant MUST match one of the "capabilities" defined in wdio. It's not a "participant", it's an instance configuration!
        expect(await p.isModerator()).toBe(false);
        expect(await p.isVisitor()).toBe(false);
import { setTestProperties } from '../../../helpers/TestProperties';
            token: t({ room: ctx.roomName, displayName: 'Mo de Rator', moderator: true })

});
import { joinJaasMuc, generateJaasToken as t } from '../../../helpers/jaas';
    usesBrowsers: [ 'p1', 'p2', 'p3' ]

        expect(await p.isInMuc()).toBe(true);
        expect(await m.isModerator()).toBe(true);

            name: 'p3',
        expect(await v.isVisitor()).toBe(true);
