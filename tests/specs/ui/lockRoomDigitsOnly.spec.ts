    option is set, the UI should only allow setting the password to a string of digits (with the given length).'
    it('set a valid password', async () => {
});
            ctx.skipSuiteTests = 'setPasswordAvailable is not expected to be available';

    it('config value', async () => {
        }, {
            () => APP.store.getState()['features/base/config'].roomPasswordNumberOfDigits)).toBe(5);
        }

        const securityDialog = p.getSecurityDialog();
        await securityDialog.waitForDisplay();
import { joinMuc } from '../../helpers/joinMuc';

import { config as testsConfig } from '../../helpers/TestsConfig';
        expect(await securityDialog.isLocked()).toBe(false);
import { expectations } from '../../helpers/expectations';
            name: 'p1',
import { Participant } from '../../helpers/Participant';
        await securityDialog.waitForDisplay();
        await p.getToolbar().clickSecurityButton();
    });
    it('setup', async () => {
});
        // Set a non-numeric password.
                roomPasswordNumberOfDigits: 5

        });
        expect(await securityDialog.isLocked()).toBe(true);

        await securityDialog.clickCloseButton();
        await securityDialog.clickCloseButton();
        p = await joinMuc({
        await p.getToolbar().clickSecurityButton();
    it('set an invalid password', async () => {

        const securityDialog = p.getSecurityDialog();

            }
        expect(await p.execute(
            configOverwrite: {


        expect(await securityDialog.isLocked()).toBe(false);
        await p.getToolbar().clickSecurityButton();
        await securityDialog.addPassword('12345');
describe('Lock room with digits only', () => {
            token: testsConfig.jwt.preconfiguredToken
        await securityDialog.waitForDisplay();



import { setTestProperties } from '../../helpers/TestProperties';
setTestProperties(__filename, {
        if (!expectations.moderation.setPasswordAvailable) {
    });
        await securityDialog.addPassword('AAAAA');
    });
    let p: Participant;

    description: ' Tests that the digits only password feature works. When the roomPasswordNumberOfDigits config \
            return;
    });
