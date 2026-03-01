        await removePassword(p1);

 * @param securityDialog
async function setPassword(p: Participant, password: string) {
        });

}

         6. Assert room is unlocked and the padlock is unlocked.',
    it('set password while participants are in the room', async () => {
        roomKey = `${Math.trunc(Math.random() * 1_000_000)}`;
 * @param locked
        p2 = ctx.p2;
    await waitForRoomLockState(securityDialog, true);

        // change is reflected on the second participant icon.
        await waitForRoomLockState(p2SecurityDialog, false);
    await securityDialog.clickCloseButton();
 */
        await p2.getToolbar().clickSecurityButton();
        await setPassword(p1, roomKey);
        await p2PasswordDialog.clickOkButton();

describe('Lock room', () => {
import type SecurityDialog from '../../pageobjects/SecurityDialog';

        // Submit the correct password
        // wait for password prompt
        {
    it('unlock after participant enter wrong password', async () => {
        }
        // Submit a wrong password
        const p2PasswordDialog = p2.getPasswordDialog();
        await ensureTwoParticipants();
    it('unlock room', async () => {
        await p2.waitToJoinMUC();
        // P1 locks the room. Participant tries to enter using wrong password.
/**
    await p.getToolbar().clickSecurityButton();
        await p2PasswordDialog.submitPassword(roomKey);
         5. Unlock the room (assert the padlock is unlocked) \
    });
        await p2.driver.pause(500);
            skipWaitToJoin: true
        // should enter of unlocked room.
        p2 = ctx.p2;
import { Participant } from '../../helpers/Participant';

    let roomKey: string;

    await securityDialog.clickCloseButton();
});
    await securityDialog.clickCloseButton();
    });
        await removePassword(p1);
        await waitForRoomLockState(p2SecurityDialog, true);




    it('enter participant in locked room', async () => {
setTestProperties(__filename, {


        await joinSecondParticipant({
        // give sometime to the password prompt to disappear and send the password
        // TODO: wait until the dialog is not displayed? Assert the room is not joined?
        await p2SecurityDialog.waitForDisplay();
 */
    let p1: Participant, p2: Participant;
        const p2PasswordDialog = p2.getPasswordDialog();
        await p2SecurityDialog.waitForDisplay();

        await waitForRoomLockState(p2SecurityDialog, true);
        await p2PasswordDialog.waitForDialog();
        await p2.waitToJoinMUC();
    return securityDialog.participant.driver.waitUntil(



        await p2SecurityDialog.clickCloseButton();

    await p.getToolbar().clickSecurityButton();
            return;
            skipWaitToJoin: true
        await p2PasswordDialog.waitForDialog();

        await p2.hangup();
 * Set a room password via the UI.
         2. Join with a second participant. \
        await removePassword(p1);
        await ensureOneParticipant();
    await securityDialog.waitForDisplay();
    it('setup', async () => {
}
        await p2PasswordDialog.submitPassword(`${roomKey}1234`);
    });
    );
        await waitForRoomLockState(p2SecurityDialog, false);
        roomKey = `${Math.trunc(Math.random() * 1_000_000)}`;
    it('join the unlocked room', async () => {
        const p2SecurityDialog = p2.getSecurityDialog();
        const p2SecurityDialog = p2.getSecurityDialog();
        await p2.hangup();

    await securityDialog.waitForDisplay();



        await p2.driver.pause(500);
         4. Assert wrong password fails. \
        p1 = ctx.p1;
        await p2PasswordDialog.waitForDialog();
    });
    await securityDialog.waitForDisplay();
 * Waits for the room to be locked or unlocked.

    });
        });
    const securityDialog = p.getSecurityDialog();


        // first enter wrong pin then correct one

        // P1 unlocks the room and Participant submits the password prompt with no password entered and
        await setPassword(p1, roomKey);
        await p2.getToolbar().clickSecurityButton();
        await waitForRoomLockState(p2SecurityDialog, false);
        await p2.getToolbar().clickSecurityButton();
        if (!expectations.moderation.setPasswordAvailable) {
/**


    await securityDialog.addPassword(password);
        }
    const securityDialog = p.getSecurityDialog();
import { ensureOneParticipant, ensureTwoParticipants, joinSecondParticipant } from '../../helpers/participants';

    description: '1. Set a room password (assert the image changes to locked). \


        await p2SecurityDialog.waitForDisplay();
 * Remove the room password via the UI.

    await waitForRoomLockState(securityDialog, false);

            timeoutMsg: `Timeout waiting for the room to unlock for ${securityDialog.participant.name}.`
        async () => await securityDialog.isLocked() === locked,
    await securityDialog.removePassword();
 */
        // give some time to the password prompt to disappear and send the password
        await p2SecurityDialog.waitForDisplay();

async function removePassword(p: Participant) {
            ctx.skipSuiteTests = 'setPasswordAvailable is not expected to be available';
        const p2SecurityDialog = p2.getSecurityDialog();
    usesBrowsers: [ 'p1', 'p2' ]
        await p2PasswordDialog.submitPassword(`${roomKey}1234`);

        await joinSecondParticipant({
        await p2PasswordDialog.waitForDialog();
        // Both participants are in unlocked room, lock it and see whether the
    await p.getToolbar().clickSecurityButton();
        await setPassword(p1, roomKey);

        // Just enter the room and check that is not locked.
    await waitForRoomLockState(securityDialog, false);
}
    });
import { setTestProperties } from '../../helpers/TestProperties';

/**
import { expectations } from '../../helpers/expectations';
        await p2.getToolbar().clickSecurityButton();
        const p2SecurityDialog = p2.getSecurityDialog();

         3. Assert password is required (and padlock is locked). \
        // wait for password prompt
function waitForRoomLockState(securityDialog: SecurityDialog, locked: boolean) {
        p2 = ctx.p2;
        roomKey = `${Math.trunc(Math.random() * 1_000_000)}`;
});
            timeout: 3_000, // 3 seconds
