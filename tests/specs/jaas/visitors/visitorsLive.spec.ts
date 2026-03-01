        await visitor.driver.waitUntil(() => vVisitors.hasVisitorsDialog(), {
import { joinJaasMuc, generateJaasToken as t } from '../../../helpers/jaas';

                throw new Error(`isVisitorsSupported() returned an error: ${e}.`);



    it('setup', async () => {
        await visitor.driver.waitUntil(async () => vVisitors.isVisitorsQueueUIShown(), {
                timeout: 2000
    });
        const mVisitors = moderator.getVisitors();
setTestProperties(__filename, {
        });
            timeoutMsg: 'Missing visitors dialog'
                === 'Viewers waiting in queue: 1', {
import { expect } from '@wdio/globals';
            timeoutMsg: 'Missing visitors queue UI'
            timeout: 5000,
import { setTestProperties } from '../../../helpers/TestProperties';
        }, {

        }
    let visitor: Participant, moderator: Participant;
            skipWaitToJoin: true
        await mVisitors.goLive();
        const vVisitors = visitor.getVisitors();
});

        ctx.webhooksProxy.defaultMeetingSettings = {
    });
            timeout: 5000,
describe('Visitors live', () => {
            }).catch(e => {
import { Participant } from '../../../helpers/Participant';
import { expectations } from '../../../helpers/expectations';

});
    it('go live', async () => {
            name: 'p1',
            visitorsLive: false

        moderator = await joinJaasMuc({
            visitorsEnabled: true,
        await moderator.driver.waitUntil(async () => await mVisitors.getWaitingVisitorsInQueue()

            timeoutMsg: 'Missing visitors queue count in UI'
        });
            name: 'p2',

            });

        if (expectations.jaas.visitors) {
        expect((await mVisitors.getVisitorsCount()).trim()).toBe('1');
        await visitor.waitToJoinMUC();
        };
        await visitor.waitForReceiveMedia(15000, 'Visitor is not receiving media');

        });
            token: t({ room: ctx.roomName, displayName: 'Mo de Rator', moderator: true })
        });
            token: t({ room: ctx.roomName, displayName: 'Visi Tor', visitor: true })
            timeout: 15000,

    requireWebhookProxy: true,


        visitor = await joinJaasMuc({
    useJaas: true,
        expect((await mVisitors.getVisitorsHeaderFromParticipantsPane()).trim()).toBe('Viewers 1');
            await moderator.driver.waitUntil(() => moderator.execute(() => APP.conference._room.isVisitorsSupported()), {
        await visitor.waitForRemoteStreams(1);
    usesBrowsers: [ 'p1', 'p2' ]
        });

