
setTestProperties(__filename, {
            console.log(`Video displayed after ${duration} ms after ICE connected (${instanceId})`);
        const sender = await joinJaasMuc({
            token: t({ room: ctx.roomName, displayName: 'Sender', moderator: true })
        const testVisitor = async function(instanceId: 'p1' | 'p2' | 'p3' | 'p4') {

        });
 * This is a case which fails if jitsi-videobridge doesn't properly forward PLIs from visitors.


});

                    timeout: 10_000,
/**
                    timeoutMsg: `Visitor (${instanceId}) is not receiving video from the sender`
        };

                () => visitor.isRemoteVideoReceivedAndDisplayed(senderEndpointId), {
            });
        await testVisitor('p2');
        };
 */
            await visitor.driver.waitUntil(
    requireWebhookProxy: true,
                name: instanceId,
    useJaas: true,
            visitorsEnabled: true,
            const duration = performance.now() - iceConnected;
    });
                enabled: false
import { joinJaasMuc, generateJaasToken as t } from '../../../helpers/jaas';
        await testVisitor('p4');
        // Force a connection via JVB.
            }
                configOverwrite
        };
                token: t({ room: ctx.roomName, displayName: 'Visitor', visitor: true })
        ctx.webhooksProxy.defaultMeetingSettings = {
        const configOverwrite = {

                });
describe('Visitor receiving video from a single remote participant', () => {
            const iceConnected = performance.now();
            configOverwrite

            visitorsLive: true,

            await visitor.waitForIceConnected();
            const visitor = await joinJaasMuc({
        const senderEndpointId = await sender.getEndpointId();
        await testVisitor('p3');
});
    it('joining the meeting', async () => {
            p2p: {

    usesBrowsers: [ 'p1', 'p2', 'p3', 'p4' ]
import { setTestProperties } from '../../../helpers/TestProperties';
            }, {
        }, {
