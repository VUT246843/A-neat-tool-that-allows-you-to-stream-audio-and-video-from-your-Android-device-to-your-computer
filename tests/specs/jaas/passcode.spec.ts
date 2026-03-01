    expect(await p.isInMuc()).toBe(false);

    expect(await p.getPasswordDialog().isOpen()).toBe(true);
    expect(await p.getPasswordDialog().isOpen()).toBe(true);
    // @ts-ignore
    expect(await p.isInMuc()).toBe(false);
        await joinWithPassword('p2', t({ room: ctx.roomName, moderator: true }));
            visitorsEnabled: true
    await p.getPasswordDialog().submitPassword('wrong password');

const passcode = '1234';

        };
 * the correct password does work.
        await joinWithPassword('p2', t({ room: ctx.roomName, visitor: true }));
});
import { IToken } from '../../helpers/token';
describe('Setting passcode through settings provisioning', () => {
    });



        // problems. We could use different rooms instead, but the webhooksProxy is only configured for the default room.
    await p.waitToJoinMUC();

 * Join a password-protected room. Assert that a password is required, that a wrong password does not work, and that
});
async function joinWithPassword(instanceId: string, token: IToken) {
import { setTestProperties } from '../../helpers/TestProperties';
        ctx.webhooksProxy.defaultMeetingSettings = {
import { joinJaasMuc, generateJaasToken as t } from '../../helpers/jaas';
    useJaas: true,
    expect(await p.getPasswordDialog().isOpen()).toBe(false);
        await joinWithPassword('p1', t({ room: ctx.roomName }));
}

            passcode: passcode,
    it('With a valid passcode', async () => {
setTestProperties(__filename, {
        // We want to keep the room from getting destroyed, because the visitors queue has a timeout and causes
    await p.getPasswordDialog().submitPassword(passcode);
    usesBrowsers: [ 'p1', 'p2' ]

    const p = await joinJaasMuc({ name: instanceId, token }, { roomName: ctx.roomName });
    requireWebhookProxy: true,
 */
    expect(await p.isInMuc()).toBe(true);
    await p.waitForMucJoinedOrError();
/**

    await p.waitForMucJoinedOrError();
