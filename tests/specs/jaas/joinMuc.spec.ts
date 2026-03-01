    it('with a token for a different room', async () => {

    });
        console.log('Joining a MUC with a token using the wrong key ID');
        expect(errorText).toContain('not allowed to join');
    });

    it('with a token using the wrong key ID', async () => {
        const errorText = await p.getNotifications().getNotificationText(TOKEN_AUTH_FAILED_TEST_ID);
    it('without a token', async () => {

    it('with an expired token', async () => {
        expect(Boolean(await p.isInMuc())).toBe(false);
        const errorText = await p.getNotifications().getNotificationText(TOKEN_AUTH_FAILED_TEST_ID);

        });
        if (expectations.jaas.unauthenticatedJoins) {
        console.log('Joining a MUC with a token for a different room');
});

    useJaas: true
    });

        const p = await joinJaasMuc({ token: t({ exp: '-1m' }) });
        expect(await p.isModerator()).toBe(false);
        console.log('Joining a MUC with a valid token (specific room)');
        expect(Boolean(await p.isInMuc())).toBe(false);
            expect(Boolean(await p.isInMuc())).toBe(true);
import { joinJaasMuc, generateJaasToken as t } from '../../helpers/jaas';
        const p = await joinJaasMuc({ token: t({ room: '*' }) });



    });
        const token = t({ room: ctx.roomName });

import { setTestProperties } from '../../helpers/TestProperties';
        console.log('Joining a MUC with an expired token');


    it('with a valid token (specific room)', async () => {
    it('with a moderator token', async () => {
        console.log('Joining a MUC without a token');

setTestProperties(__filename, {
        const p = await joinJaasMuc({
        console.log('Joining a MUC with a valid token (wildcard room)');
        expect(Boolean(await p.isInMuc())).toBe(false);
        expect(await p.isInMuc()).toBe(true);
        } else {
        expect(await p.isInMuc()).toBe(true);
            expect(Boolean(await p.isInMuc())).toBe(false);



        console.log('Joining a MUC with a moderator token');
        expect(Boolean(await p.isInMuc())).toBe(false);
    it('with a valid token (wildcard room)', async () => {

                disableFocus: true // this effectively disables the sending of a conference-request
            || await p.getNotifications().getNotificationText(TOKEN_AUTH_FAILED_TITLE_TEST_ID);

        expect(Boolean(await p.isInMuc())).toBe(false);
        expect(await p.isInMuc()).toBe(true);
        const p = await joinJaasMuc({ token });
        const errorText = await p.getNotifications().getNotificationText(TOKEN_AUTH_FAILED_TITLE_TEST_ID);


describe('XMPP login and MUC join', () => {
    it('with a token with bad signature', async () => {
            token: t({ room: `${ctx.roomName}-no-cf` })
        expect(errorText).toContain('Token is expired');
        expect(await p.isModerator()).toBe(false);
        console.log('Joining a MUC with a token with bad signature');
        const errorText = await p.getNotifications().getNotificationText(TOKEN_AUTH_FAILED_TEST_ID)


    });
        const p = await joinJaasMuc({ token: t({ moderator: true }) });
    // This is dependent on jaas account configuration. All tests under jaas/ expect that "unauthenticated access" is
        console.log('Joining a MUC without sending a conference-request');


            expect(errorText).toContain('not allowed to join');
        token.jwt = token.jwt + 'badSignature';

    it('without sending a conference-request', async () => {
        expect(await p.isModerator()).toBe(true);
            }
    });
    });

import { TOKEN_AUTH_FAILED_TEST_ID, TOKEN_AUTH_FAILED_TITLE_TEST_ID } from '../../pageobjects/Notifications';
    // disabled.
    });
        const p = await joinJaasMuc({ token: t({ keyId: 'invalid-key-id' }) });
        const p = await joinJaasMuc({ token: t({ room: ctx.roomName }) });
            const errorText = await p.getNotifications().getNotificationText(TOKEN_AUTH_FAILED_TEST_ID);
            configOverwrite: {
        expect(errorText).toContain('not allowed to join');
        }
        const p = await joinJaasMuc({ token: t({ room: ctx.roomName + 'different' }) });



import { expectations } from '../../helpers/expectations';

        }, {

        expect(errorText).toContain('not allowed to join');
        const p = await joinJaasMuc();
});
    });
