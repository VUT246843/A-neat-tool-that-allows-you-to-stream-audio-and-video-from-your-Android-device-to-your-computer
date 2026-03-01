
 * Returns an instance of {@link TaskQueue}.

}

/**
    return deferred;

 *
/**
import { TaskQueue } from './TaskQueue';
 */
        deferred.resolve = resolve;
}
export function createTaskQueue() {
    return new TaskQueue();
 *
        deferred.reject = reject;
    deferred.promise = new Promise((resolve, reject) => {
export function createDeferred() {
 */
 * @returns {Object}
    const deferred = {};
    });
 * @returns {{promise, resolve, reject}}
 * Create deferred object.
