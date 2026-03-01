            this._sendRecorderInfo();
                    xmlns: 'http://jitsi.org/jitmeet/userinfo',
                }
/**


     * Creates new recorder instance.
    /**
        if (config.iAmRecorder) {
 * The Recorder class is meant to take care of recorder related presence
export default Recorder;
     */
    /**
class Recorder {
            });
 * commands.

const _USER_INFO_COMMAND = 'userinfo';
 * The (name of the) command which transports the recorder info.
        const commands = APP.conference.commands;

/* global APP, config */
     * Sends the information that this is a recorder through the presence.
 */
        // XXX The "Follow Me" command represents a snapshot of all states
     * @private
                    robot: true
}
    }
    }
    _sendRecorderInfo() {
/**
    constructor() {
        commands.sendCommand(
        commands.removeCommand(_USER_INFO_COMMAND);
        // sendCommand!
     */
        }
                attributes: {

 */
            _USER_INFO_COMMAND,
        // which are to be followed so don't forget to removeCommand before
            {
