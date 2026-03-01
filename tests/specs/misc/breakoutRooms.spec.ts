    });
            async () => {
                async () => {


                        return false;
                            return false;

const MAIN_ROOM_NAME = 'Main room';
            });
                    return false;

                    return false;
                return list[0].participantCount === 0;
                timeout: 5000,
        await (await p1BreakoutRooms.getRooms())[0].closeRoom();


        // there should be one room with one participant
        await p2.driver.waitUntil(

        const p1BreakoutRooms = p1.getBreakoutRooms();
        const { p1, p2 } = ctx;

            }, {
                if (await p1BreakoutRooms.getRoomsCount() !== 2) {
        await p1BreakoutRooms.autoAssignToBreakoutRooms();
                timeout: 5000,


        // let's rename breakout room and see it in local and remote
        const p1BreakoutRooms = p1.getBreakoutRooms();
                if (list?.length !== 1) {
                timeout: 5000,

        // there should be two rooms and first one should be empty
        await ensureTwoParticipants();
        const { p1 } = ctx;
            }, {
            async () => {
                    return false;
            });
                    if (list?.length !== 2) {

    it('send participants to breakout room', async () => {
        await p1.driver.waitUntil(
                }
                return list[0].participantCount === 1 && list[1].participantCount === 1
        // join the room


                timeout: 5000,
                timeout: 5000,

                if (list?.length !== 1) {

                timeoutMsg: 'P2 is seeing p1 in the breakout room'
        await checkSubject(p2, myNewRoomName);
        // leave room



                    const isInBreakoutRoom = await p.isInBreakoutRoom();
        const p1BreakoutRooms = p1.getBreakoutRooms();

        if (!await ctx.p1.isBreakoutRoomsSupported()) {
                }
        // so the previous breakout rooms would still be there.

                        if (await breakoutRooms.getRoomsCount() !== 2) {
                    return false;
        // there should be one breakout room
            async () => {

                timeoutMsg: 'P1 is not seeing two breakout rooms'

                }
        await ensureTwoParticipants();
        await p1.driver.waitUntil(
                }
        const p1BreakoutRooms = p1.getBreakoutRooms();
                timeoutMsg: 'P1 did not auto assigned participants to breakout rooms'
        // remove the room
            });
                return list[0].participantCount === 1 && list[1].participantCount === 1;
        // the participant should see the main room as the only breakout room
    });
        await p2.driver.waitUntil(
            });
            });
                        }
                if (list?.length !== 1) {
setTestProperties(__filename, {
            p.driver.waitUntil(
        expect((await p2BreakoutRooms.getRooms())[0].name).toBe(myNewRoomName);
            async () => {
                if (list?.length !== 1) {


            }, {
        const breakoutList = p1.driver.$(`#${BREAKOUT_ROOMS_LIST_ID}`);
            });
        await p1BreakoutRooms.sendParticipantToBreakoutRoom(p2, (await p1BreakoutRooms.getRooms())[0].name);


        // add one breakout room



        await p1.driver.waitUntil(
import type { ChainablePromiseElement } from 'webdriverio';

                    const breakoutRooms = p.getBreakoutRooms();
                return list[0].participantCount === 0;
        await p2.driver.waitUntil(

        await p1.driver.waitUntil(
});
            async () => {
                timeout: 5000,
        // second participant should also see one breakout room
                    return false;
    it('check support', async () => {
                        return false;
                }
                    return false;
                }

        await checkParticipants(p2);
                    return list[0].participantCount + list[1].participantCount === 1;
        await p1BreakoutRooms.addBreakoutRoom();

                if (list?.length !== 2) {
                const list = await p2.getBreakoutRooms().getRooms();

                const list = await p1BreakoutRooms.getRooms();
        const p1BreakoutRooms = p1.getBreakoutRooms();
        // create two rooms
        const breakoutRoomItem = await breakoutList.$$(`.${LIST_ITEM_CONTAINER}`).find(
        await p1BreakoutRooms.sendParticipantToBreakoutRoom(p2, myNewRoomName);
                const list = await p1BreakoutRooms.getRooms();
        const { p1, p2 } = ctx;
        // leave room
                            return false;
        const p2BreakoutRooms = p2.getBreakoutRooms();
        expect((await p1BreakoutRooms.getRooms())[0].participantCount).toBe(1);
        const { p1, p2 } = ctx;
                return list[0].participantCount === 1;
        await hangupAllParticipants();
        await roomsList[0].joinRoom();

        ctx.roomName += `new-${ctx.roomName}`;
        await p1.driver.waitUntil(
const LIST_ITEM_CONTAINER = 'list-item-container';

        // there should be two breakout rooms
        // collapse the first
        await checkSubject(p2, myNewRoomName);
        // there should be no breakout rooms

                if (await p1BreakoutRooms.getRoomsCount() !== 2) {
            async () => await p1BreakoutRooms.getRoomsCount() === 1, {
                        });
    it('auto assign', async () => {
                return list[0].participantCount === 0 || list[1].participantCount === 0;
                return id !== '' && id !== null;
    it('add breakout room', async () => {


        // add one breakout room
        expect(await breakoutParticipant.isDisplayed()).toBe(false);
import { setTestProperties } from '../../helpers/TestProperties';
        await (await p1BreakoutRooms.getRooms())[0].renameRoom(myNewRoomName);
            async () => await p1BreakoutRooms.getRoomsCount() === 2, {
                timeoutMsg: 'P1 is not seeing p2 in the breakout room'
                timeout: 5000,
            });
                timeout: 5000,
                timeout: 5000,
                    return false;
        await p1.driver.waitUntil(

        expect(roomsList.length).toBe(1);

        // there should be no breakout rooms initially, list is sent with a small delay
    it('join breakout room', async () => {
                const list = await p1BreakoutRooms.getRooms();
        await checkParticipants(p3);


                    return false;
import type { Participant } from '../../helpers/Participant';
            async () => await p2.getBreakoutRooms().getRoomsCount() === 0, {

        // the participant should not be visible
                timeout: 5000,
            });

                timeout: 5000,
                timeoutMsg: 'No breakout room seen by p2'
            async () => {
                }
        await p1.driver.waitUntil(
                if (list?.length !== 1) {
                    return false;
            });

        await (await p1BreakoutRooms.getRooms())[0].removeRoom();

    });
            async () => {

                }
        // close the first room

describe('Breakout rooms', () => {
                }
                }
        const { p1, p2 } = ctx;

    checkSubject,


            }, {
        // the second participant should see one participant in the breakout room
                timeoutMsg: 'P1 is not seeing an empty breakout room'
    usesBrowsers: [ 'p1', 'p2', 'p3' ]
                timeout: 5000,


        const myNewRoomName = `breakout-${crypto.randomUUID()}`;
                timeoutMsg: 'The breakout room not found or not empty for p1'
        // auto assign participants to rooms
                const list = await p2BreakoutRooms.getRooms();
        await p1.driver.waitUntil(
        const pId = await breakoutRoomItem.getAttribute('id');
                return list?.length === 1;
        await p1.driver.pause(2000);


            });
                && (await p1BreakoutRooms.getRooms())[0].participantCount === 0, {

            }, {
            async () => {
        const p1BreakoutRooms = p1.getBreakoutRooms();

                }

                    return false;
                if (await p1BreakoutRooms.getRoomsCount() !== 1) {
        await p1.driver.waitUntil(

        const p1BreakoutRooms = p1.getBreakoutRooms();
        // Respect room name suffix as it is important in multi-shard testing
                if (list?.length !== 1) {
                timeoutMsg: 'The breakout room was not rename for p1'
        // there should be one breakout room and that should not be the main room
                    return false;
                    if (isInBreakoutRoom) {
        // send the second participant to the first breakout room
                }
            }, {
});
    ensureTwoParticipants,
        expect(await p1BreakoutRooms.getRoomsCount()).toBe(0);
                return list[0].participantCount === 1;

    retry: true,
                return list[0].name === MAIN_ROOM_NAME;
                }
    hangupAllParticipants
                timeout: 5000,
                    if (await breakoutRooms.getRoomsCount() !== 2) {

        const p1BreakoutRooms = p1.getBreakoutRooms();
            });
                    return false;


                const list = await p1BreakoutRooms.getRooms();

                    }
            async () => await p1BreakoutRooms.getRoomsCount() === 0, {

                        }
                if (await p1BreakoutRooms.getRoomsCount() !== 2) {
                    return false;
                });
        const p2BreakoutRooms = p2.getBreakoutRooms();
                }
                        return list.every(r => { // eslint-disable-line arrow-body-style
    it('remove breakout room', async () => {
            async () => await p2.getBreakoutRooms().getRoomsCount() === 1, {
        // the collapsed room should still have one participant
                return list[0].name !== MAIN_ROOM_NAME;
                const list = await p1BreakoutRooms.getRooms();
                timeoutMsg: 'The breakout room not seen by p2'
                }

        await p1.driver.waitUntil(

    });

        await p1.driver.waitUntil(
            }, {
        const checkParticipants = (p: Participant) =>
        expect(await p1BreakoutRooms.getRoomsCount()).toBe(0);
                return list[0].name === myNewRoomName;

            });
        await p1.driver.waitUntil(

            async () => {
        await p1BreakoutRooms.addBreakoutRoom();
            }, {
        await p1BreakoutRooms.addBreakoutRoom();
                            return r.name === MAIN_ROOM_NAME ? r.participantCount === 2 : r.participantCount === 0;
        await p2BreakoutRooms.leaveBreakoutRoom();
            });
import {

                timeoutMsg: 'No breakout room added for p1'
                }

                timeoutMsg: 'The breakout room was not renamed for p1'
                }
                    timeoutMsg: `${p.name} is not seeing an empty breakout room and one with one participant`
        // each room should have one participant
                if (await p1BreakoutRooms.getRoomsCount() !== 1) {
                        if (list?.length !== 2) {
                }, {
                const list = await p1BreakoutRooms.getRooms();
        // the second participant should also see no breakout rooms
            async () => await p1BreakoutRooms.getRoomsCount() === 1
                timeoutMsg: 'P1 did not join breakout room'
            async () => {
        expect(await breakoutParticipant.isDisplayed()).toBe(true);
                if (list?.length !== 1) {
        // get id of the breakout room participant
    });
            });

        const { p1, p2 } = ctx;

        // there should be one empty room
            });
                timeoutMsg: 'No breakout room seen by p1'
        // there should be one room with one participant
                timeoutMsg: 'Breakout room was not created by p1'
        await p2.driver.waitUntil(
    });
                }
                timeout: 5000,
                const id = await el.getAttribute('id');
                if (list?.length !== 2) {
            async () => {
        // To avoid this issue we use a different meeting
                if (await p2BreakoutRooms.getRoomsCount() !== 2) {
                const list = await p1BreakoutRooms.getRooms();
        await p1.driver.waitUntil(
                timeout: 5000,

                }
        // there should be one empty room
        const breakoutParticipant = p1.driver.$(`//div[@id="${pId}"]`);
                    return false;
                timeout: 5000,
            }, {
                const list = await p2BreakoutRooms.getRooms();
            });
        const { p1, p2 } = ctx;
        // the second participant should see no participants in the breakout room

        await p1.driver.waitUntil(
            }, {

const BREAKOUT_ROOMS_LIST_ID = 'breakout-rooms-list';
                timeout: 5000,
        await p1BreakoutRooms.addBreakoutRoom();
    it('close breakout room', async () => {
                timeoutMsg: 'Breakout room was not removed for p1'
    it('collapse breakout room', async () => {
                timeoutMsg: 'P1 did not leave breakout room'

                timeout: 5000,


        // because the participants rejoin so fast, the meeting is not properly ended,
            ctx.skipSuiteTests = 'The environment does not support breakout rooms.';
} from '../../helpers/participants';
                return list[0].participantCount === 1 && list[1].participantCount === 1;
                timeout: 5000,
            async () => {
            });
                    }
        await ensureThreeParticipants();
                    }
        await p1.driver.waitUntil(
        // the second participant should see one participant in the main room
        // there should be two participants in the main room, either p2 or p3 got moved to the main room
                timeoutMsg: 'P2 is not seeing p1 in the breakout room'
        await (await p1BreakoutRooms.getRooms())[0].collapse();
        const { p1, p2, p3 } = ctx;
                return list[0].participantCount === 1;
            });
        const p1BreakoutRooms = p1.getBreakoutRooms();

        // there should be no breakout rooms

                if (list?.length !== 1) {
    });
        await p2.driver.waitUntil(




                    return false;

                if (list?.length !== 2) {

                const list = await p1BreakoutRooms.getRooms();
            async () => {
    });


            }) as ChainablePromiseElement;
            });


        const { p1, p2 } = ctx;
                    return false;


                    timeout: 5000,
    it('rename breakout room', async () => {
        const roomsList = await p1BreakoutRooms.getRooms();


                    return false;



            async () => {
            async () => await p1BreakoutRooms.getRoomsCount() === 1, {
    });

                if (list?.length !== 2) {
            }, {
                return list[0].participantCount === 1;
                    && (list[0].name === MAIN_ROOM_NAME || list[1].name === MAIN_ROOM_NAME);

                timeoutMsg: 'P1 is not seeing p2 in the breakout room'
        await p1BreakoutRooms.leaveBreakoutRoom();
            async el => {

            });
                    return false;
                timeoutMsg: 'P2 is not seeing p1 in the main room'
                const list = await p2.getBreakoutRooms().getRooms();
            }, {
    });
                if (list?.length !== 1) {


        // there should be two non-empty breakout rooms
                timeoutMsg: 'No breakout room added for p1'
        // send the second participant to the first breakout room
        await p2.driver.waitUntil(
            });
            }, {
                timeoutMsg: 'Breakout room was not removed for p2'
                timeout: 5000,
                const list = await p1BreakoutRooms.getRooms();
            }, {
                    const list = await breakoutRooms.getRooms();
        }
        // there should be one breakout room with one participant

    it('leave breakout room', async () => {
                    return false;
    ensureThreeParticipants,
                timeout: 5000,


                const list = await p1BreakoutRooms.getRooms();
                        const list = await breakoutRooms.getRooms();
