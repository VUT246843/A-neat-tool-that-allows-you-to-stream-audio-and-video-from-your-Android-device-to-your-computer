import { joinMuc, waitForMedia } from '../../helpers/joinMuc';
 * @param participant

        expect(Number.isInteger(port1)).toBe(true);
    const data = await participant.execute(() => APP?.conference?.getStats()?.transport[0]?.type);
    let p1: Participant, p2: Participant;
        await waitForMedia([ p1, p2 ]);
    it('setup', async () => {



        expect(await getProtocol(p1)).toBe('udp');
async function getRemotePort(participant: Participant) {

 * @param participant
        p1 = await joinMuc({ name: 'p1', token: testsConfig.jwt.preconfiguredToken });

}
 * Get the remote port of the participant.
 */
/**
import { setTestProperties } from '../../helpers/TestProperties';

        const port2 = await getRemotePort(p2);
async function getProtocol(participant: Participant) {
    });
        expect(await getProtocol(p2)).toBe('udp');
import type { Participant } from '../../helpers/Participant';
 * Get the remote port of the participant.
        expect(Number.isInteger(port2)).toBe(true);

    });
    it('protocol', async () => {
        expect(port1).toBe(port2);
    description: 'This test asserts that the connection to JVB is over UDP and using the same remote port. ',
});
    const data = await participant.execute(() => APP?.conference?.getStats()?.transport[0]?.ip);
}
    return data.toLowerCase();
});
 */

    });
describe('Connectivity', () => {
    it('port', async () => {
        p2 = await joinMuc({ name: 'p2', token: testsConfig.jwt.preconfiguredToken });
    const parts = data.split(':');

/**
    usesBrowsers: [ 'p1', 'p2' ]
    return parts.length > 1 ? parseInt(parts[1], 10) : '';
setTestProperties(__filename, {
import { config as testsConfig } from '../../helpers/TestsConfig';
        const port1 = await getRemotePort(p1);
