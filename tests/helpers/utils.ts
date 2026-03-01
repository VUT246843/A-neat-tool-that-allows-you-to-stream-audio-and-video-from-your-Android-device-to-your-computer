    let roomName = `${testName}-${rand}`;
 */
    }
export function generateRoomName(testName: string) {
}
                    const json = JSON.parse(data);
        https.get(url, res => {
            reject(err);
    if (testsConfig.roomName.prefix) {
 * @returns {Promise<Object>} - A promise that resolves to the parsed JSON object.
        }).on('error', err => {
    if (testsConfig.roomName.suffix) {
                data += chunk;
            }
            // Handle HTTP errors
        });
            res.on('data', chunk => {
        roomName = `${testsConfig.roomName.prefix}_${roomName}`;
            });
            if (res.statusCode < 200 || res.statusCode >= 300) {
            // Collect data chunks
                return reject(new Error(`HTTP Status Code: ${res.statusCode}`));


    return new Promise((resolve, reject) => {
    return roomName.toLowerCase();
/**
    const rand = (Math.floor(Math.random() * 400) + 1).toString();
                try {


import { config as testsConfig } from './TestsConfig';
export async function fetchJson(url) {
                } catch (err) {
 * @param {string} url - The URL to fetch data from.
        roomName += `_${testsConfig.roomName.suffix}`;
    }

            // Parse JSON when the response ends
                }
            res.on('end', () => {
    });
 * Fetches JSON data from a given URL.
const https = require('https');
                    resolve(json);
                    reject(new Error('Invalid JSON response'));

            });
}

            let data = '';


