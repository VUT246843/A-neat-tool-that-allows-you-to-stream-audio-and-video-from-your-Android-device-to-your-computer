        // Check of p1 and p2 have switched to VP9.
        expect(await p2.execute(() => JitsiMeetJS.app.testing.isLargeVideoReceived())).toBe(true);
import {
    });
import { Participant } from '../../helpers/Participant';
        if (p1.driver.isFirefox) {
                }
        const { p1, p2 } = ctx;
            waitForCodec(p2, VP8)
                videoQuality: {
                }
                videoQuality: {
            return;

        // Check if p1 is encoding in VP9, p2 in VP8 and p3 in AV1 as per their codec preferences.
    });
            waitForCodec(p1, p1ExpectedCodec),
        await Promise.all([

        // Except on Firefox because it doesn't support VP9 encode.
        // Except on Firefox because it doesn't support VP9 encode.
        await hangupAllParticipants();
        ]);
            configOverwrite: {

        });
} from '../../helpers/participants';
    ensureTwoParticipants,
        });
        expect(await p3.execute(() => JitsiMeetJS.app.testing.isLargeVideoReceived())).toBe(true);
    it('asymmetric codecs', async () => {
        const majorVersion = parseInt(p1.driver.capabilities.browserVersion || '0', 10);
        () => p.execute(c => JitsiMeetJS.app.testing.getLocalCameraEncoding() === c, codec),
    hangupAllParticipants

                videoQuality: {
                }
    ensureThreeParticipants,

}


setTestProperties(__filename, {


        ]);
describe('Codec selection', () => {
            configOverwrite: {
        expect(await p1.execute(() => JitsiMeetJS.app.testing.isLargeVideoReceived())).toBe(true);
        await Promise.all([
        ]);

        // Check if p1 and p2 are encoding in VP9 which is the default codec.
                }

                    codecPreferenceOrder: [ 'AV1', 'VP9', 'VP8' ]
            waitForCodec(p2, VP9)
        await ensureTwoParticipants({
            waitForCodec(p2, VP9)
import { setTestProperties } from '../../helpers/TestProperties';
            }
        {
                    codecPreferenceOrder: [ 'VP8' ]
            waitForCodec(p1, p1ExpectedCodec),
import { VIDEO_CODEC } from '../../../react/features/video-quality/constants';
            waitForCodec(p3, VP8)
            }
            waitForCodec(p3, p3ExpectedCodec)
        // Check if media is playing on both endpoints.
    });
    );
        await Promise.all([

        await ensureTwoParticipants({
    it('asymmetric codecs with AV1', async () => {
const { VP8, VP9, AV1 } = VIDEO_CODEC;
        await ensureThreeParticipants({
                    codecPreferenceOrder: [ 'VP9', 'VP8', 'AV1' ]

        const p1ExpectedCodec = p1.driver.isFirefox ? VP8 : VP9;
        ]);
        });
        const { p1, p2, p3 } = ctx;
        ]);
    ensureOneParticipant,
                videoQuality: {
    it('codec switch over', async () => {
        // Disable this test on Firefox because it doesn't support VP9 encode.
                    codecPreferenceOrder: [ 'VP9', 'VP8', 'AV1' ]
        });
            waitForCodec(p2, VP8),
        }
            }
        const p3ExpectedCodec = (p1.driver.isFirefox && majorVersion < 136) ? VP9 : AV1;
            configOverwrite: {
        // Check if media is playing on p3.
        await p3.hangup();
        const p1ExpectedCodec = p1.driver.isFirefox ? VP8 : VP9;
        // Check if p1 is sending VP9 and p2 is sending VP8 as per their codec preferences.
    await p.driver.waitUntil(
            timeout: 10000,
            waitForCodec(p1, VP9),
        await ensureThreeParticipants({
            waitForCodec(p1, VP9),
    usesBrowsers: [ 'p1', 'p2', 'p3' ]

            waitForCodec(p1, VP8),
        await Promise.all([

        });

            configOverwrite: {
            }
                videoQuality: {
            timeoutMsg: `${p.name} failed to use VP8`
                    codecPreferenceOrder: [ 'VP8', 'VP9', 'AV1' ]
            }
            configOverwrite: {

        }
        await Promise.all([
        await ensureOneParticipant({
        const { p3 } = ctx;
});


});
        const { p1, p2 } = ctx;
            waitForCodec(p2, VP8),
async function waitForCodec(p: Participant, codec: string) {

                }
