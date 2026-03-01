        const { p1 } = ctx;
    it('dial in config.js values', async function() {
            // eslint-disable-next-line @typescript-eslint/no-invalid-this
describe('Dial-in', () => {


            ctx.skipSuiteTests = 'JaaS is configured.';
            throw new Error(`The dial-in PIN contains non-digit characters: ${dialInPin}`);
    waitForAudioFromDialInParticipant
        } catch (e) {


 */
        if (!dialInPin.match(/^[0-9]+$/)) {
import { expectations } from '../../helpers/expectations';
            await assertDialInDisplayed(ctx.p1, expectations.dialIn.enabled);

    it('dial-in displayed', async function() {
 * 2. The DIAL_IN_REST_URL environment variable. If this is set and the environment supports dial-in, we invite a
    });
    it('url displayed', () => assertUrlDisplayed(ctx.p1));

    it('skip the rest if dial-in is not expected', async () => {
        if (!process.env.DIAL_IN_REST_URL) {
        await cleanup(p1);
        } else {
            // local participant did not join abort


    it('wait for audio from dial-in participant', async () => {

        if (testsConfig.jaas.enabled) {
            ctx.skipSuiteTests = 'No dial-in pin is available.';
import {
    assertUrlDisplayed,
            throw new Error('no pin');
    });
        }
        await ensureOneParticipant();
            ctx.skipSuiteTests = 'DIAL_IN_REST_URL is not set.';
    usesBrowsers: [ 'p1' ]
    });
setTestProperties(__filename, {
import { setTestProperties } from '../../helpers/TestProperties';
    isDialInEnabled, verifyMoreNumbersPage,
    });
        }
        if (expectations.dialIn.enabled !== null) {

        if (!expectations.dialIn.enabled) {
            console.error('dial-in.test.no-pin');
            dialInPin = await ctx.p1.getDialInPin();
import { ensureOneParticipant } from '../../helpers/participants';

        await verifyMoreNumbersPage(ctx.p1);
        if (!await p1.isInMuc()) {
        if (dialInPin.length === 0) {
});
        await dialIn(await ctx.p1.getDialInPin());
            ctx.skipSuiteTests = 'Dial-in is not expected';
    });
        let dialInPin: string;
    });
        if (expectations.dialIn.enabled === true) {
    it('invite dial-in participant', async () => {
            // eslint-disable-next-line @typescript-eslint/no-invalid-this
});
    });
    dialIn,
 * panel (including the PIN number) is displayed in the UI, and the "more numbers" page is displayed. If it's set to
    it('skip the rest if a dial-in URL is not configured', async () => {
        await ctx.p1.getInviteDialog().open();
    it('retrieve pin', async () => {
 * This test is configured with two options:
    cleanup,
 * dial-in participant via this URL and assert that it joins the conference and sends media.
        await ctx.p1.getInviteDialog().waitTillOpen(true);
} from '../helpers/DialIn';
        }
 * 1. The dialIn.enabled expectation. If set to true we assert the config.js settings for dial-in are set, the dial-in
        try {

        expect(dialInPin.length).toBeGreaterThanOrEqual(expectations.dialIn.minPinLength);
import process from 'node:process';
        await ctx.p1.getInviteDialog().clickCloseButton();
            return;
        }
        expect(await ctx.p1.isInMuc()).toBe(true);


            return;
        // The same cases are covered for JaaS in jaas/dial/dialin.spec.ts.
        }

import { config as testsConfig } from '../../helpers/TestsConfig';
    it('open/close invite dialog', async () => {
    });

        }

        await waitForAudioFromDialInParticipant(p1);

        }
    });
        }
            console.error('dial-in.test.no-pin');
/**

            this.skip();
 * false we assert the config.js settings are not set, and the PIN is not displayed.
            throw e;
    });
        }
            this.skip();
    assertDialInDisplayed,
        } else {
    it('join participant', async () => {
            expect(await isDialInEnabled(ctx.p1)).toBe(expectations.dialIn.enabled);
    it('view more numbers page', async () => {


            ctx.skipSuiteTests = 'The dial-in pin is empty.';

