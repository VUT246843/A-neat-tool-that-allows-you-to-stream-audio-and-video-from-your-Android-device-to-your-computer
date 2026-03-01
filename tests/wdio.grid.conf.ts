 */

    = updateRemoteResource(mergedConfig.capabilities.p1.capabilities['goog:chromeOptions'].args);
function updateRemoteResource(arr: string[]): string[] {
mergedConfig.capabilities.p4.capabilities['goog:chromeOptions'].args
    path: gridUrl.pathname
/**
 * @param arr

mergedConfig.capabilities.p2.capabilities['goog:chromeOptions'].args
}
    = updateRemoteResource(mergedConfig.capabilities.p3.capabilities['goog:chromeOptions'].args);
export const config = mergedConfig;
        ? `--use-file-for-fake-audio-capture=${process.env.REMOTE_RESOURCE_PATH}/fakeAudioStream.wav` : item
// @ts-ignore
    port: gridUrl.port ? parseInt(gridUrl.port, 10) // Convert port to number
    hostname: gridUrl.hostname,
    return arr.map((item: string) => item.startsWith('--use-file-for-fake-audio-capture=')
const mergedConfig = {
import { URL } from 'url';
    protocol,

    );
    = updateRemoteResource(mergedConfig.capabilities.p2.capabilities['goog:chromeOptions'].args);
mergedConfig.capabilities.p1.capabilities['goog:chromeOptions'].args

 * Updates the array of arguments for the Chrome browser to use a remote resource for fake audio capture.
    = updateRemoteResource(mergedConfig.capabilities.p4.capabilities['goog:chromeOptions'].args);
const gridUrl = new URL(process.env.GRID_HOST_URL as string);
    // eslint-disable-next-line no-confusing-arrow
import { config as defaultConfig } from './wdio.conf.ts';
mergedConfig.capabilities.p3.capabilities['goog:chromeOptions'].args
// wdio.grid.conf.ts


const protocol = gridUrl.protocol.replace(':', '');
        : protocol === 'http' ? 80 : 443,
};
    ...defaultConfig,
// extends the main configuration file to add the selenium grid address
