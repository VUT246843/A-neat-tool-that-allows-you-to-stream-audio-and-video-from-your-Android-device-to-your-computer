     * take up some of the visible slots.
        const [ eveState, frankState, zoeState ] = states;
     * Note: This test verifies filmstrip ordering via Redux state
                });
}> {
            { participant: p4, name: 'Eve' },
    await p5.setLocalDisplayName('Frank');

 * @param {Participant} otherParticipant2 - Used only to print some debugging info.
}

     * Test dominant speaker in filmstrip with screensharing active.
    // Wait for display names to propagate
        await setAlphabeticalDisplayNames(p1, p2, p3, p4, p5, p6);
describe('Active speaker', () => {
     * the alphabetically sorted list would not appear when slots were limited.


        // Set display names
            // Make this participant the dominant speaker

 * Get the current filmstrip state from Redux.

            const eveAndFrankInEveState = eveOrder.filter(n => [ 'Eve', 'Frank' ].includes(n));
                }
    await p2.setLocalDisplayName('Bob');
        await muteAudioAndCheck(p3, p1);
            timeoutMsg: 'Active speaker not displayed on large video.'
            // Make this participant the dominant speaker by unmuting
        if (eveOrder.includes('Frank') && frankOrder.includes('Eve')) {
            await p1.log(`Testing ${name} (${participantId}) as dominant speaker`);
    await p4.setLocalDisplayName('Eve');
    await p3.setLocalDisplayName('Charlie');
        '//span[not(contains(@class, "tile-view"))]//span[contains(@class,"dominant-speaker")]').length).toBe(1);

 * @param {string} participantId - The endpoint ID of the expected dominant speaker.

        await testActiveSpeaker(p2, p1, p3);
        expect(eveOrder).toContain('Eve');
            configOverwrite: {

async function waitForDominantSpeaker(

        };
    expect(await participant.driver.$$(



     */
 * indicator displayed equals 1.
    });
        await p1.driver.setWindowSize(1024, 600);
            dominantSpeaker: participants.dominantSpeaker,
        // Helper function to get the relative order of Eve, Frank, and Zoe
            await participant.getToolbar().clickAudioUnmuteButton();
        await setAlphabeticalDisplayNames(p1, p2, p3, p4, p5, p6);
        // participant3 becomes active speaker - check from participant2's perspective

            { participant: p5, name: 'Frank' },
        }




            states.push({ name, id: participantId, state: filmstripState });
        expect(isAlphabeticallySorted(zoeOrder)).toBe(true);
            expect(filmstripState.visibleRemoteParticipants.length).toBeLessThan(filmstripState.remoteParticipants.length);
        async () => {
        const zoeVisibleNames = await getVisibleParticipantNames(zoeState.state.visibleRemoteParticipants);
    visibleRemoteParticipants: string[];

     * Test that filmstrip maintains stable ordering when multiple speakers alternate.
                const participants = APP.store.getState()['features/base/participants'];

            }
async function setAlphabeticalDisplayNames(
            // Mute this participant back before testing the next one
});
        // participant1 becomes active speaker - check from participant2's perspective
            { participant: p6, name: 'Zoe' }
): Promise<void> {
    /**
                timeout: 5_000,
        }
 * active speaker.
 */
        {
            expect(filmstripState.visibleRemoteParticipants).toContain(participantId);
/**
            // Verify we have slot limitation even with screensharing
    usesBrowsers: [ 'p1', 'p2', 'p3', 'p4', 'p5', 'p6' ]
        // Helper function to get participant names in the order they appear
        // Start screensharing from p2
        await ensureSixParticipants({

    await observer.driver.pause(1000);
    await otherParticipant2.log(`Participant muted in testActiveSpeaker ${speakerEndpoint}`);

            await participant.getToolbar().clickAudioUnmuteButton();
        // Resize p1's window to limit filmstrip slots
        const isAlphabeticallySorted = (names: string[]) => {
    // just a debug print to go in logs
        await p1.driver.pause(1000); // Wait for layout to adjust
                timeoutMsg: `${name} dominant speaker thumbnail not visible in filmstrip`
        // Test with multiple speakers: Eve (p4), Frank (p5), and Zoe (p6)
            // Mute back

    await activeSpeaker.getFilmstrip().assertAudioMuteIconIsDisplayed(activeSpeaker, true);
 *
/**
     * Verifies that the alphabetical sorting prevents visual reordering when the same
            });
setTestProperties(__filename, {
            await p1.log(`Testing ${name} (${participantId}) as dominant speaker with screensharing`);
import { setTestProperties } from '../../helpers/TestProperties';
    await activeSpeaker.log('Muting in testActiveSpeaker');
        // Set display names


        });

    await p6.setLocalDisplayName('Zoe');
        const eveOrder = getSpeakersOrder(eveVisibleNames);
        // check the displayed speakers, there should be only one speaker
        };
            // Wait for the dominant speaker to be detected
import type { Participant } from '../../helpers/Participant';

    await observer.driver.waitUntil(
        // This creates the condition where not all participants fit in the filmstrip
        });
    await otherParticipant1.getFilmstrip().assertAudioMuteIconIsDisplayed(activeSpeaker);
    await activeSpeaker.log('Unmuting in testActiveSpeaker');
}
            await waitForDominantSpeaker(p1, participantId, name);
        // Resize p1's window to limit filmstrip slots to 2-3 tiles
     * (visibleRemoteParticipants), not large video behavior.
 * Wait for a participant to be detected as the dominant speaker.

        // their relative order should be the same
                return ids.map(id => {
): Promise<void> {
        await setAlphabeticalDisplayNames(p1, p2, p3, p4, p5, p6);
            const participantId = await participant.getEndpointId();
        await ensureSixParticipants({
        await p2.getToolbar().clickDesktopSharingButton();
            timeoutMsg: `${participantName} (${participantId}) was not detected as dominant speaker within 10 seconds`
        p4: Participant,
    // Wait a bit more for filmstrip state to update after dominant speaker changes

            const participantId = await participant.getEndpointId();
            await participant.getToolbar().clickAudioMuteButton();
        const { p1, p2, p3, p4, p5, p6 } = ctx;

    ensureSixParticipants,
    remoteParticipants: string[];
        // This is the key test - when the same speakers alternate, visible speakers stay in alphabetical order
            await p1.log(`Total remote: ${filmstripState.remoteParticipants.length}, Visible: ${filmstripState.visibleRemoteParticipants.length}`);
            await p1.log(`Total remote: ${filmstripState.remoteParticipants.length}, Visible: ${filmstripState.visibleRemoteParticipants.length}`);
        await ensureThreeParticipants();
            // Wait for the dominant speaker to be detected
    checkForScreensharingTile,
    // Verify that the user is now an active speaker from otherParticipant1's perspective
        ];
     * even when alphabetically last with limited visible slots.

    const otherParticipant1Driver = otherParticipant1.driver;
 * @param {Participant} otherParticipant1 - <tt>Participant</tt> of the participant who will be observing and verifying

        await hangupAllParticipants();

        await muteAudioAndCheck(p1, p2);

}
            await p1.driver.pause(1000);
        await p1.log(`Visible participants when Eve is dominant: ${JSON.stringify(eveVisibleNames)}`);


 * @param {Participant} activeSpeaker - <tt>Participant</tt> instance of the participant who will be tested as an
        return {




        }
 * Tries to make given participant an active speaker by unmuting it.
        // Test with multiple speakers while screensharing is active
    it.skip('testDominantSpeakerInFilmstripWithLimitedSlots', async () => {
            return true;
        await p1.driver.pause(1000); // Wait for layout to adjust
            configOverwrite: {
        {
     * Test that the dominant speaker appears in the filmstrip in stage view
        // Verify that each dominant speaker appears in visible participants
    await otherParticipant1.log(`Participant muted in testActiveSpeaker ${speakerEndpoint}`);
        observer: Participant,

        const state = APP.store.getState();
        await p2.getToolbar().clickStopDesktopSharingButton();
            const participantId = await participant.getEndpointId();
        await p1.log(`Zoe visible count: ${zoeState.state.visibleRemoteParticipants.length}, total remote: ${zoeState.state.remoteParticipants.length}`);
        await p1.log(`Frank visible count: ${frankState.state.visibleRemoteParticipants.length}, total remote: ${frankState.state.remoteParticipants.length}`);
        await p1.log('Initial round: getting all three speakers into active speakers list');
        await assertOneDominantSpeaker(p1);
        await ensureSixParticipants({

        const speakersToTest = [
 * @param {string} participantName - The name of the participant for logging.
    // just a debug print to go in logs
        const eveVisibleNames = await getVisibleParticipantNames(eveState.state.visibleRemoteParticipants);
        expect(zoeOrder).toContain('Zoe');

        const filmstrip = state['features/filmstrip'];
    await p1.driver.pause(2000);
        // Clean up - stop screensharing

        const frankOrder = getSpeakersOrder(frankVisibleNames);
            // Verify the dominant speaker thumbnail is visible in the filmstrip
        }
 * @returns {Promise<FilmstripState>} The filmstrip state.

            remoteParticipants: filmstrip.remoteParticipants,
        // For example, if Eve and Frank are both visible when Zoe speaks, they should be [Eve, Frank]
        };

        await p1.driver.pause(1000); // Wait for layout to adjust
 * Verifies from {@code participant2}'s perspective that the active speaker
        async () => await otherParticipant1.getLargeVideo().getResource() === speakerEndpoint,
            await p1.log(`${name} endpoint ID: ${participantId}`);
 */

            const participantId = await participant.getEndpointId();
            expect(eveAndFrankInEveState).toEqual(eveAndFrankInFrankState);
        const frankVisibleNames = await getVisibleParticipantNames(frankState.state.visibleRemoteParticipants);
        await hangupAllParticipants();
            const eveAndFrankInFrankState = frankOrder.filter(n => [ 'Eve', 'Frank' ].includes(n));
async function assertOneDominantSpeaker(participant: Participant) {
    await activeSpeaker.getToolbar().clickAudioUnmuteButton();
 *
     * Verifies that dominant speaker is still visible when screen shares

        await p1.log(`Eve visible count: ${eveState.state.visibleRemoteParticipants.length}, total remote: ${eveState.state.remoteParticipants.length}`);
 * has been displayed on the large video area. Mutes him back.
            { participant: p6, name: 'Zoe' }
        for (const { participant, name } of speakersToTest) {
        await muteAudioAndCheck(p2, p1);
        p5: Participant,
});
 *

        const { p1, p2, p3, p4, p5, p6 } = ctx;
            await p1.log(`Dominant speaker (with screenshare): ${filmstripState.dominantSpeaker}`);
            // Mute this participant back before testing the next one

    await activeSpeaker.log(`Start testActiveSpeaker for participant: ${activeSpeaker.name}`);
            return names.filter(n => [ 'Eve', 'Frank', 'Zoe' ].includes(n));
            expect(filmstripState.visibleRemoteParticipants.length).toBeLessThan(filmstripState.remoteParticipants.length);

    it.skip('testDominantSpeakerWithScreensharing', async () => {
        for (const { participant, name } of speakersToTest) {
            { participant: p6, name: 'Zoe' }
        // Verify that whatever speakers ARE visible maintain alphabetical order
                timeoutMsg: `${name} not visible with screensharing active`
    it('testActiveSpeaker', async () => {
            await p1.log(`${name} (${participantId}) speaking for the first time`);
                startWithAudioMuted: true
import {
        // Resize p1's window to limit filmstrip slots

            });

            // Make this participant the dominant speaker by unmuting

    hangupAllParticipants

    /**
    // just a debug print to go in logs

            // Assert that the dominant speaker is in the visible participants

            await p1.driver.pause(2000);

/**

        await hangupAllParticipants();
            // Verify dominant speaker is still visible in filmstrip despite screenshare
        await assertOneDominantSpeaker(p3);
    await otherParticipant1Driver.waitUntil(
    await otherParticipant2.log(`Participant unmuted in testActiveSpeaker ${speakerEndpoint}`);
            await p1.driver.$(`//span[@id='participant_${participantId}']`).waitForDisplayed({
        expect(frankState.state.visibleRemoteParticipants).toContain(frankState.id);
            }, visibleIds);
 * @param {Participant} participant - The participant to check.
            await p1.log(`Dominant speaker: ${filmstripState.dominantSpeaker}`);
            await waitForDominantSpeaker(p1, participantId, name);
     *
 * active speaker change.


            await p1.log(`${name} endpoint ID: ${participantId}`);
 */

     * This tests the fix for the bug where dominant speakers at the bottom of
    it.skip('testFilmstripStableOrderingWithMultipleSpeakers', async () => {



    ensureThreeParticipants,
            await participant.getToolbar().clickAudioMuteButton();
            expect(filmstripState.visibleRemoteParticipants).toContain(participantId);
        // Verify that the dominant speaker is always in the visible list (this tests the bug fix)
                startWithAudioMuted: true
                return participants.dominantSpeaker;
            // Both Eve and Frank visible in both states

import { muteAudioAndCheck } from '../helpers/mute';
        const getVisibleParticipantNames = async (visibleIds: string[]) => {
        await testActiveSpeaker(p1, p2, p3);

        });
        // This verifies the fix works for different alphabetical positions
                const participants = state['features/base/participants'];
 *
        // First, have Eve, Frank, and Zoe all speak to get them into the active speakers list
}


            timeout: 30_000, // 30 seconds
}
        // Names chosen so p6 ("Zoe") is alphabetically last: Alice, Bob, Charlie, Eve, Frank, Zoe
        // Now cycle through them again and verify they maintain alphabetical order (Eve, Frank, Zoe)
    await activeSpeaker.getToolbar().clickAudioMuteButton();
                const state = APP.store.getState();
            await waitForDominantSpeaker(p1, participantId, name);
        expect(frankOrder).toContain('Frank');
            { participant: p5, name: 'Frank' },
    // Mute back again
            // Verify that the participant appears in the visible remote participants
        const getSpeakersOrder = (names: string[]) => {
        // Additionally verify order consistency: if multiple speakers are visible in multiple states,
            }
            { participant: p5, name: 'Frank' },
        }
        expect(eveState.state.visibleRemoteParticipants).toContain(eveState.id);
            // Verify thumbnail visibility
    });
    });

 */
        // Helper to check if array is alphabetically sorted
        }
            { participant: p4, name: 'Eve' },

            await participant.getToolbar().clickAudioMuteButton();
        // participant2 becomes active speaker - check from participant1's perspective
    });
            await participant.getToolbar().clickAudioUnmuteButton();

        activeSpeaker: Participant, otherParticipant1: Participant, otherParticipant2: Participant) {
            await participant.getToolbar().clickAudioUnmuteButton();
        const speakersToTest = [
    await p1.setLocalDisplayName('Alice');
async function testActiveSpeaker(
        ];
        p6: Participant

 * Asserts that the number of small videos with the dominant speaker
            const filmstripState = await getFilmstripState(p1);
        });



     */


        };
/**



        const zoeOrder = getSpeakersOrder(zoeVisibleNames);
        const participants = state['features/base/participants'];
            return state === participantId;
        // Set display names to create alphabetical ordering
        await p1.log('Second round: verifying stable alphabetical ordering when speakers alternate');
    /**
        const states = [];
            const filmstripState = await getFilmstripState(p1);

    // just a debug print to go in logs
            await waitForDominantSpeaker(p1, participantId, name);
        p3: Participant,

    const speakerEndpoint = await activeSpeaker.getEndpointId();
} from '../../helpers/participants';
                    const participant = participants.remote.get(id);

            // This is the key test - even though they may be alphabetically late and slots are limited,
        await p1.log(`Speakers order when Zoe is dominant: ${JSON.stringify(zoeOrder)}`);
        expect(isAlphabeticallySorted(eveOrder)).toBe(true);

            await p1.driver.pause(1000);
            await p1.driver.pause(1000);
            }

        await p1.log('Filmstrip maintains alphabetical ordering of visible speakers when dominant speaker changes');
        await hangupAllParticipants();
            await p1.log(`Visible remote participants: ${JSON.stringify(filmstripState.visibleRemoteParticipants)}`);

    });
        ];
        await p1.driver.setWindowSize(1024, 600);
        await p1.driver.setWindowSize(1024, 600);
        expect(isAlphabeticallySorted(frankOrder)).toBe(true);

    );
        await p1.log(`Speakers order when Frank is dominant: ${JSON.stringify(frankOrder)}`);
                startWithAudioMuted: true
        for (const { participant, name } of speakersToTest) {
        const speakersToTest = [
                if (names[i].localeCompare(names[i + 1]) > 0) {
/**

    await otherParticipant1.log(`Participant unmuted in testActiveSpeaker ${speakerEndpoint}`);
            });
            // Capture filmstrip state
            const state = await observer.execute(() => {
        const { p1, p2, p3, p4, p5, p6 } = ctx;
            timeout: 10000,

    dominantSpeaker: string | null;
     */



            return await p1.execute(ids => {
    return await participant.execute(() => {
            configOverwrite: {
            // Wait for the dominant speaker to be detected
        await checkForScreensharingTile(p2, p1);
async function getFilmstripState(participant: Participant): Promise<{
                timeout: 5_000,
        await assertOneDominantSpeaker(p2);
        participantId: string,
     * set of speakers take turns speaking.

                    return false;

        expect(zoeState.state.visibleRemoteParticipants).toContain(zoeState.id);
        await p1.log(`Visible participants when Zoe is dominant: ${JSON.stringify(zoeVisibleNames)}`);
            // they should still be visible because the fix reserves a slot for dominant speaker
 * @param {Participant} participant - The participant to query.
        },
 * Set display names for all 6 participants to create alphabetical ordering.
            await p1.log(`Testing ${name} (${participantId}) for stable ordering`);
            // Verify we actually have slot limitation (fewer visible than total)
        await p1.log(`Speakers order when Eve is dominant: ${JSON.stringify(eveOrder)}`);
        await p1.log(`Visible participants when Frank is dominant: ${JSON.stringify(frankVisibleNames)}`);
            // The dominant speaker should still be in the visible participants despite screenshare taking slots
            }
            await p1.driver.$(`//span[@id='participant_${participantId}']`).waitForDisplayed({
    // Unmute
            const filmstripState = await getFilmstripState(p1);
        const { p1, p2, p3 } = ctx;
            { participant: p4, name: 'Eve' },
            await p1.log(`Visible remote participants with screenshare: ${JSON.stringify(filmstripState.visibleRemoteParticipants)}`);
            for (let i = 0; i < names.length - 1; i++) {
        // Get the names of visible participants for each state
        participantName: string
        p2: Participant,
        p1: Participant,

            await participant.getToolbar().clickAudioMuteButton();
 */
        for (const { participant, name } of speakersToTest) {
        await testActiveSpeaker(p3, p2, p1);
 * @param {Participant} observer - The participant observing the dominant speaker state.
                    return participant?.name || 'Unknown';
            visibleRemoteParticipants: Array.from(filmstrip.visibleRemoteParticipants)
