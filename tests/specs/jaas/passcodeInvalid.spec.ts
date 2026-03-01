    it('With an invalid passcode', async () => {
import { setTestProperties } from '../../helpers/TestProperties';
    useJaas: true
});

    });
        // configured to require a passcode.
            passcode: 'passcode-must-be-digits-only'
        };
        expect(await p.isInMuc()).toBe(true);
describe('Setting invalid passcode through settings provisioning', () => {
setTestProperties(__filename, {


import { joinJaasMuc, generateJaasToken as t } from '../../helpers/jaas';
    requireWebhookProxy: true,

// setup for the default room name.
        await p.waitToJoinMUC();
        const p = await joinJaasMuc({ token: t({ room: ctx.roomName }) }, { roomName: ctx.roomName });
// This test is separate from passcode.spec.ts, because it needs to use a different room name, and webhooksProxy is only
});
        ctx.webhooksProxy.defaultMeetingSettings = {
        expect(await p.getPasswordDialog().isOpen()).toBe(false);
        // The settings provisioning contains an invalid passcode, the expected result is that the room is not
