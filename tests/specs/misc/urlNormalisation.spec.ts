        });
            tenantUrl: 'tenantexample.com',


            tenantJid: '%d0%be%d0%b1%d0%b8%d1%82%d0%b0%d1%82%d0%b5%d0%bb',
import { config as testsConfig } from '../../helpers/TestsConfig';
                tenant: tenant,

            // Tenant as normalized in the URL
            const domain = mucJid[1];
            tenantJid: 'tenantexample_com'

    const tests = [
        {
            const mucJid = (await p.execute(() => APP.conference._room.room.roomjid)).split('@');
            const fullRoom = `${test.room}${ctx.roomName}`;
    ];
        },
            tenant: 'tenant@example.com',
            // The tenant part of the MUC JID
});
            if (useTenant) {
            const roomJid = mucJid[0];
            // Room as normalized in the URL
        }
            hint: 'Dashes',
            room: '@example.com',
            }
            roomJid: 'example.com',
            roomJid: 'foo-bar',
            room: 'foo-bar',
                token: testsConfig.jwt.preconfiguredToken,
            });
            expect(parts[2]).toBe(fullRoomUrl);
setTestProperties(__filename, {
            hint: '@ sign and .',
});
    }
            if (useTenant) {
            const fullRoomUrl = `${test.roomUrl}${ctx.roomName}`;
            tenant: 'tenant-example.com',
            roomUrl: 'example.com',
    // If we're not able to create conferences with a custom tenant, we'll only test the room name.
            tenantJid: 'tenant-example_com'
        it(test.hint, async () => {
            hint: 'Cyrillic',
            }
import { expectations } from '../../helpers/expectations';

    for (const test of tests) {
            // Tenant as entered in the URL

        {
            const parts = path.split('/');
            tenantUrl: 'tenant-example.com',
            }, {
                name: 'p1',
            roomUrl: '%D1%84%D0%BE%D0%BE-%D0%B1%D0%B0%D1%80',
        {
describe('URL normalisation', () => {

            roomJid: '%d1%84%d0%be%d0%be-%d0%b1%d0%b0%d1%80',
    usesBrowsers: [ 'p1' ]
                expect(parts[1]).toBe(test.tenantUrl);

            tenant: 'обитател',
            tenantUrl: '%D0%BE%D0%B1%D0%B8%D1%82%D0%B0%D1%82%D0%B5%D0%BB',
import { setTestProperties } from '../../helpers/TestProperties';
        },
            roomUrl: 'foo-bar',
                expect(domain.startsWith(`conference.${test.tenantJid}.`)).toBe(true);

            const path = currentUrl.pathname;
    const useTenant = expectations.useTenant;
            const currentUrlStr = await p.driver.getUrl();
                roomName: fullRoom
            const tenant = useTenant ? test.tenant : undefined;
            expect(roomJid).toBe(`${test.roomJid}${ctx.roomName}`);
            room: 'фоо-бар',
            const currentUrl = new URL(currentUrlStr);
import { joinMuc } from '../../helpers/joinMuc';
            // Room as entered in the URL
            const p = await joinMuc({
            // The room part of the MUC JID
