    path: gridUrl.pathname
const gridUrl = new URL(process.env.GRID_HOST_URL as string);
};
    hostname: gridUrl.hostname,

    protocol,
    port: gridUrl.port ? parseInt(gridUrl.port, 10) // Convert port to number


const protocol = gridUrl.protocol.replace(':', '');
// @ts-ignore
        : protocol === 'http' ? 80 : 443,
export const config = {
// extends the main configuration file to add the selenium grid address
    ...defaultConfig,
import { URL } from 'url';
// wdio.grid.conf.ts
import { config as defaultConfig } from './wdio.firefox.conf.ts';
