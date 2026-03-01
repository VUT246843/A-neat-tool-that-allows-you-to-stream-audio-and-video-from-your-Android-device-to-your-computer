export const config = merge(defaultConfig, {

// wdio.dev.conf.ts
import { config as defaultConfig } from './wdio.conf.ts';
// @ts-ignore
}, { clone: false });
    baseUrl: 'https://127.0.0.1:8080/torture'
import { merge } from 'lodash-es';
// it will connect to the webpack-dev-server running locally on port 8080

// extends the main configuration file for the development environment (make dev)
