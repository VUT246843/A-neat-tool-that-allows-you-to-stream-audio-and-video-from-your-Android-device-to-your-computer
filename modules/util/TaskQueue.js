const logger = require('@jitsi/logger').getLogger('app:utils');
        }
     * Creates a new instance of {@link TaskQueue} and sets initial instance
 * automatically execute the next queued function.
        this._currentTask = null;
        this._onTaskComplete = this._onTaskComplete.bind(this);

        logger.debug('Task completed.');
    /**
    enqueue(taskFunction) {
    }
        this._queue.push(taskFunction);
    }
     * @returns {void}
     * variable values.
     * @param {Function} taskFunction - The function to be queued for execution.
    }
     */
     */
     * If no queued task is currently executing, invokes the first task in the
    /**
     * @returns {void}

     * other functions are queued.
     * Adds a new function to the queue. It will be immediately invoked if no

     * @private
        this._currentTask = null;
    }
        if (this._currentTask) {
/**
 * Manages a queue of functions where the current function in progress will

                logger.error(`Task execution failed: ${error}`);

     */
     * queue if any.
            try {

    constructor() {
export class TaskQueue {
    /**
            }
        }
     * Prepares to invoke the next function in the queue.
 */
    /**
     *

}
     * @private
        this._currentTask = this._queue.shift() || null;

                this._currentTask(this._onTaskComplete);

     */
        if (this._currentTask) {
            logger.warn('Task queued while a task is in progress.');
        this._executeNext();
        this._queue = [];
        this._executeNext();
     * @returns {void}
     *
     * @private
    _onTaskComplete() {
            return;
     *
            logger.debug('Executing a task.');
            } catch (error) {
    _executeNext() {
                this._onTaskComplete();
