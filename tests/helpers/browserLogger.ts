 * @param {WebdriverIO.Browser} driver - The driver.



}
 * @param {string} value - The content to add to the file.
    }
 * @param {WebdriverIO.Browser} driver - The driver which log file is requested.
        LOG_PREFIX, message);
 * @param {WebdriverIO.Browser} driver - The driver which log file is requested.
    return driver.execute((prefix, msg) =>
 * Initialize logger for a driver.
export function saveLogs(driver: WebdriverIO.Browser, value: string) {
        return;
            console.error(err);
}
 * @param {string} fileName - The name of the file.
 * Logs a message in the logfile.
    if (!driver.logFile) {
        // @ts-ignore

 * Returns the content of the log file.

    try {
    }
}
        console.error(err);
    // @ts-ignore
    // @ts-ignore
 *

    if (!driver.logFile) {
 */
 */

            // @ts-ignore
    } catch (err) {
 * Appends value to the log file.
    driver.logFile = `${folder}/${fileName}.log`;
    return fs.readFileSync(driver.logFile, 'utf8');
/**
 */
            fs.appendFileSync(driver.logFile, `${entry.text}\n`);
    });
 * A prefix to use for all messages we add to the console log.
    // @ts-ignore
 * @param {WebdriverIO.Browser} driver - The participant in which log file to write.
}
 *
    if (!driver.logFile) {
 * @param {string} folder - The folder to save the file.
        try {
export const LOG_PREFIX = '[MeetTest] ';
        console.log(`${new Date().toISOString()} ${prefix} ${msg}\n`),
 * @param {string} message - The message to add.
/**
 */
        }
export function initLogger(driver: WebdriverIO.Browser, fileName: string, folder: string) {
 * @returns {string} The content of the log file.
    // @ts-ignore
import fs from 'node:fs';

export async function logInfo(driver: WebdriverIO.Browser, message: string) {
 * @returns {void}
/**

    driver.on('log.entryAdded', (entry: any) => {
 */
/**
    driver.sessionSubscribe({ events: [ 'log.entryAdded' ] });
    }
    // @ts-ignore
        fs.appendFileSync(driver.logFile, value);

        return;
 * @returns {void}
 *
    }
        } catch (err) {
export function getLogs(driver: WebdriverIO.Browser) {
        return;
/**
