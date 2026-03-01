        }
     * @returns {Promise<void>}

                    otherLabels.push(label);
                    return a.filename < b.filename ? -1 : 1;


        }
import { multiremotebrowser } from '@wdio/globals';
            .replace(/.spec.ts$/, '')

    'specs/**/*.spec.ts'

    async before(cid, _, files) {
                }
                            filename: `${instance}-console-logs`,
        // If a test doesn't use a particular browser, add it to exclusions for that browser
                resolve();
}
    maxInstances: parseInt(process.env.MAX_INSTANCES || '1', 10), // if changing check onWorkerStart logic
                    }));


        await Promise.all(multiremotebrowser.instances.map(async (instance: string) => {

    // Can be used to debug chromedriver, depends on chromedriver and wdio-chromedriver-service
                fs.writeFileSync(`${TEST_RESULTS_DIR}/allure-report/index.html`, modifiedContent);
import process from 'node:process';
                console.log(`Enabling retry for ${testFilePath}`);
            // Keep only the LAST parentSuite label (the manual one with directory name)
                        if (res) {
    framework: 'mocha',
    afterSuite(suite) {

const TEST_RESULTS_DIR = 'test-results';
            }
            generation.on('exit', eCode => {
     * Gets executed after all workers have shut down and the process is about to exit.


            AllureReporter.addSuite(test.parent);
    // =====
     */
            }
    beforeTest(test, context) {
if (process.env.RESOLVER_RULES) {
        if (testProperties.useJaas && !testsConfig.jaas.enabled) {
        if (testProperties.useWebhookProxy && testsConfig.webhooksProxy.enabled && !globalAny.ctx.webhooksProxy) {
                return await originalBefore[0].call(c, cid, ...args);
            const testFilePath = spec[0].replace(/^file:\/\//, '');
    '--disable-plugins',
                // Call original with cid as first param, followed by original args
                const bInstance = multiremotebrowser.getInstance(instance);
    connectionRetryTimeout: 15_000,
    },

                return;
        }
                } else {


        }
            initLogger(bInstance, `${instance}-${cid}-${testName}`, TEST_RESULTS_DIR);
            times: {}

        const testName = path.relative('tests/specs', testFilePath)
            return;
    },
        const props = testProperties[file];
                    attachments.push({
                        logs && attachments.push({
    // when executing waitForStable()
    outputDir: TEST_RESULTS_DIR,

                            type: 'text/plain' });
                            type: 'text/plain' }))
                        type: 'image/png' });
                c.specFileRetriesDeferred = true;
                    .catch(e => console.error('Failed grabbing debug logs', e)));
    //     } ]
        timeout: 180_000

        }
        });
        [ 'junit', {
            logInfo(multiremotebrowser.getInstance(instance),
     * @param {Object} test - Test object.
        if (spec && spec.length == 1) {

        console.log(`Running test: ${testName} via worker: ${cid}`);
            const tenant = testsConfig.jaas.tenant;
                            filename: `${instance}-debug-logs`,
                    ...(browser === 'p1' && process.env.BROWSER_CHROME_BETA ? { browserVersion: 'beta' } : {}),
            // Keep only the last parentSuite (the directory name we manually added)

        resultFiles.forEach(file => {
                `${TEST_RESULTS_DIR}/webhooks-${cid}-${testName}.log`);
    //         logFileName: 'wdio-chromedriver.log',
            c.before = [ async function(...args) {

    '--allow-insecure-localhost',

            // skip all remaining tests in the suite
 * Analyzes test files at config construction time to determine browser requirements
            });
        const globalAny: any = global;
            useCucumberStepReporter: false
    '--use-fake-ui-for-media-stream',
import fs from 'fs';
     * @param {Object} context - Scope object the test was executed with.

     *
    chromeArgs.push('--ignore-certificate-errors');
    // =====
        if (ctx.testProperties.description) {
    // if browser driver or grid doesn't send response
                    'wdio:exclude': Array.from(browserExclusions[browser] || [])
    //     [ 'chromedriver', {
            } ];
    const allSpecFiles: string[] = [];
        }
                `${testsConfig.webhooksProxy.url}?tenant=${tenant}&room=${globalAny.ctx.roomName}`,
            throw new Error('The test requires WebhookProxy, but it is not available.');
    chromeArgs.push('--headless');
import { IContext } from './helpers/types';

            });
    chromeArgs.push(`--use-file-for-fake-video-capture=${process.env.VIDEO_CAPTURE_FILE}`);
        } ],
                await bInstance.execute(() => console.log(`${new Date().toISOString()} keep-alive`));

                capabilities: {
    }
    logLevels: {
                            content: getLogs(bInstance) || '',
     * Function to be executed before a test (in Mocha/Jasmine only).
                allProcessing.push(
        console.log(`Using room name: ${globalAny.ctx.roomName}`);

    specs,
    // Hooks
    },
    capabilities,
                const modifiedContent = content.replace('<body>',

        browsers.map(browser => [
            '--clean', '--single-file',
    /**
    async afterTest(test, context, { error }) {
     */
    '--disable-renderer-backgrounding',
}
// eslint-disable-next-line @typescript-eslint/no-var-requires
            // setup keepalive
            {

    const browsers = [ 'p1', 'p2', 'p3', 'p4', 'p5', 'p6' ];
        if (files.length !== 1) {
            );
            logInfo(multiremotebrowser.getInstance(instance), `---=== End test ${test.title} ===---`));
    }
        multiremotebrowser.instances.forEach((instance: string) => {
                allProcessing.push(bInstance.takeScreenshot().then(shot => {
                testsConfig.webhooksProxy.sharedSecret!,
const allure = require('allure-commandline');
            }));

                }
    baseUrl: process.env.BASE_URL || 'https://alpha.jitsi.net/torture/',
                c.specFileRetriesDelay = 1;
    /**
    return Object.fromEntries(
        webdriver: 'info'
import WebhookProxy from './helpers/WebhookProxy';
    chromeArgs.push(`--host-resolver-rules=${process.env.RESOLVER_RULES}`);

        return new Promise<void>((resolve, reject) => {

    '--disable-setuid-sandbox',
    '--mute-audio',

        });


            'generate', `${TEST_RESULTS_DIR}/allure-results`,
                a => {
        }
        // For Allure v3: set directory as parent suite and describe block as suite
                // @ts-ignore

        p5: new Set(),
        if (originalBefore) {
        const relativeFile = path.relative(__dirname, file);
     * @param {Object} test - Test object.
                globalAny.ctx.skipSuiteTests = 'WebHookProxy is required but not configured (missing tenant)';
    //         // Pass the --verbose flag to Chromedriver
    };
            const otherLabels: any[] = [];
    execArgv: [ '--stack-trace-limit=100' ],


     * @returns {Promise<void>}
                        filename: `${instance}-screenshot`,
            console.log('No test file or multiple test files specified, will not enable retries');
    // Level of logging verbosity: trace | debug | info | warn | error | silent
                    AllureReporter.addAttachment(a.filename, a.content, a.type);
        allSpecFiles.push(...matches.map(f => path.resolve(__dirname, f)));
                }
            bInstance.iframePageBase = `file://${path.dirname(rpath)}`;
        globalAny.ctx.testProperties = testProperties;
    chromeArgs.push('--window-size=1280,1024');
 * and generate capabilities with appropriate exclusions.
            const parentSuiteLabels: any[] = [];
}
        const fileMatch = test.file.match(/.*\/tests\/specs\/(.*)/);
        } as IContext;
            globalAny.ctx.webhooksProxy = new WebhookProxy(
            AllureReporter.addParentSuite(dir);
            console.warn('No before hook found or more than one found, skipping');

        }
     * An error thrown in the `onComplete` hook will result in the test run failing.
        p3: new Set(),
     * @param {Object} suite - Suite details.

                }
        }
    // Default timeout for all waitForXXX commands.
            if (parentSuiteLabels.length > 1) {
     * @returns {Promise<void>}
            disableWebdriverScreenshotsReporting: true,
    // Import TestProperties to access the populated registry
    //         // Optionally, define a file to store the logs instead of stdout
import { generateRoomName } from './helpers/utils';
                return `results-${options.cid}.xml`;
            });


            // @ts-ignore
            outputDir: TEST_RESULTS_DIR,
} as WebdriverIO.MultiremoteConfig;

    after() {
    // Default request retries count
            browser,
        }
                (a, b) => {
                    bInstance.execute(() => window.APP?.debugLogs?.logs?.join('\n')).then(res => {
 */
/**
                allProcessing.push(bInstance.execute(() => typeof APP !== 'undefined' && APP.connection?.getLogs())
            });
import { Buffer } from 'buffer';
        if (error) {
            await Promise.allSettled(allProcessing);

        });
     */
];
        }
    for (const pattern of specs) {
            const result = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    //         // Optionally, define a directory for the log file
                }
    // Avoids - "You are checking for animations on an inactive tab, animations do not run for inactive tabs"
    // Default timeout in milliseconds for request

        // Extract directory to use as parent suite and describe block name as suite
            '--report-dir', `${TEST_RESULTS_DIR}/allure-report`
import pretty from 'pretty';
    const browserExclusions: Record<string, Set<string>> = {

                // @ts-ignore
        multiremotebrowser.instances.forEach((instance: string) => {
};


     * Function to be executed after a test (in Mocha/Jasmine only).
            result.labels.forEach((label: any) => {


        const testFilePath = files[0].replace(/^file:\/\//, '');
                if (eCode !== 0) {
                        content: pretty(source),
            globalAny.ctx.webhooksProxy.connect();

            AllureReporter.addLink(`https://github.com/jitsi/jitsi-meet/blob/master/tests/specs/${file}`, 'Code');
            }, 20_000));
import { config as testsConfig } from './helpers/TestsConfig';
    runner: 'local',

const capabilities = generateCapabilitiesFromSpecs();
                AllureReporter.addDescription((ctx.testProperties.description || '')
                        attachments.push({
    },
                        filename: `${instance}-html-source`,

                        prefs: chromePreferences
    //         args: [ '--verbose' ],
            const bInstance = multiremotebrowser.getInstance(instance);

                `---=== End ${suite.file.substring(suite.file.lastIndexOf('/') + 1)} ===---`);
        if (testProperties.requireWebhookProxy && !globalAny.ctx.webhooksProxy) {
if (process.env.VIDEO_CAPTURE_FILE) {
     * We have overriden this function in beforeSession to be able to pass cid as first param.
    const { testProperties } = require('./helpers/TestProperties');
            console.warn('We expect to run a single suite, but got more than one');

        ]);

        const dirMatch = test.file.match(/.*\/tests\/specs\/([^\/]+)\//);
                const content = fs.readFileSync(`${TEST_RESULTS_DIR}/allure-report/index.html`, 'utf8');


                `---=== Begin ${suite.file.substring(suite.file.lastIndexOf('/') + 1)} ===---`);
        p2: new Set(),
            logInfo(multiremotebrowser.getInstance(instance), `---=== Start test ${test.title} ===---`);
const chromeArgs = [

                            content: JSON.stringify(logs, null, '    '),


                    browserExclusions[browser].add(relativeFile);
                    return reject(reportError);
    for (const file of allSpecFiles) {
if (process.env.ALLOW_INSECURE_CERTS === 'true') {
}
        if (props?.usesBrowsers) {
                }).forEach(
                return;
        ])

            if ((typeof ctx.skipSuiteTests) === 'string') {


     */
    /**
                    'goog:chromeOptions': {
                if (label.name === 'parentSuite') {
        const { ctx }: any = global;
    '--autoplay-policy=no-user-gesture-required',
        });
export const config: WebdriverIO.MultiremoteConfig = {
        const file = fileMatch ? fileMatch[1] : false;
            await Promise.all(multiremotebrowser.instances.map(async (instance: string) => {
    reporters: [
     * @param {Object} context - The context object.

                );

function generateCapabilitiesFromSpecs(): Record<string, any> {
            if (testProperties.retry) {
            attachments.sort(



    /**
        const resultsDir = `${TEST_RESULTS_DIR}/allure-results`;
        } ]
if (process.env.HEADLESS === 'true') {

                        }
    '--use-fake-device-for-media-stream',
                console.log('Allure report successfully generated');
    // services: [
     * Gets executed before the suite starts (in Mocha/Jasmine only).
                    + '\n\nSkipped because: ' + ctx.skipSuiteTests, 'text');
        if (!originalBefore || !Array.isArray(originalBefore) || originalBefore.length !== 1) {
// we need it to be able to reuse jitsi-meet code in tests
            AllureReporter.addDescription(ctx.testProperties.description, 'text');


                result.labels = [ ...otherLabels, parentSuiteLabels[parentSuiteLabels.length - 1] ];
    tsConfigPath: './tsconfig.json',
    },
            const allProcessing: Promise<any>[] = [];
     */
        if (file) {


    //         outputDir: 'test-results',
    },
        const matches = glob.sync(pattern, { cwd: path.join(__dirname) });
     */
    '--disable-dev-shm-usage',




                fs.writeFileSync(filePath, JSON.stringify(result));
     *
        multiremotebrowser.instances.forEach((instance: string) =>
        multiremotebrowser.instances.forEach((instance: string) => {

    async beforeSession(c, capabilities_, spec, cid) {

    );
     * variables like `browser`. It is the perfect place to define custom commands.
                }));
    ],
            outputDir: `${TEST_RESULTS_DIR}/allure-results`,
            context.skip();
                // An ugly hack to sort by test order by default in the allure report.
        }
                if (!props.usesBrowsers!.includes(browser)) {
import { glob } from 'glob';
                    parentSuiteLabels.push(label);

const keepAlive: Array<any> = [];

        });


            // Remove the automatic one from WebDriverIO (describe block name)
            if (!tenant) {
            }

                        type: 'text/plain' });
            multiremotebrowser.instances.forEach((instance: string) => {
    '--disable-infobars',
            disableWebdriverStepsReporting: true,
    connectionRetryCount: 3,

        globalAny.ctx = {
            logInfo(multiremotebrowser.getInstance(instance),
        if (ctx.skipSuiteTests) {

                () => reject(reportError),
        }));
            globalAny.ctx.skipSuiteTests = 'JaaS is not configured';
        } else {
    // Determine which browsers need which exclusions
            .replace(/\//g, '-');
const chromePreferences = {
}
            const attachments: { content: string | Buffer; filename: string; type: string; }[] = [];
require.extensions['.web.ts'] = require.extensions['.ts'];
    },
        p4: new Set(),
                            saveLogs(bInstance, res);
            }
            console.log(`Skipping because: ${ctx.skipSuiteTests}`);

     *
                    .then(logs =>
                        content: Buffer.from(shot, 'base64'),
    waitforTimeout: 1000,
            // @ts-ignore
     * @param {Object} suite - Suite details.
                    '<body><script>localStorage.setItem("ALLURE_REPORT_SETTINGS_SUITES", \'{"treeSorting":{"sorter":"sorter.order","ascending":true}}\')</script>'
        p6: new Set()
import { getLogs, initLogger, logInfo, saveLogs } from './helpers/browserLogger';
        const reportError = new Error('Could not generate Allure report');
                }));
            if (bInstance.isFirefox) {
            ctx.skipSuiteTests = `Test "${test.title}" has failed.`;
        globalAny.ctx.roomName = generateRoomName(testName);
            }
    },
        const generation = allure([
            // addConsoleLogs: true,
                    },
                    attachments.push({
     * Hook that gets executed after the suite has ended (in Mocha/Jasmine only).
     *
import { getTestProperties, loadTestFiles } from './helpers/TestProperties';
                console.log(`Can not configure WebhookProxy, missing tenant in config. Skipping ${testName}.`);
            return;
                allProcessing.push(bInstance.getPageSource().then(source => {
            const generationTimeout = setTimeout(
        [ 'allure', {
            browsers.forEach(browser => {
            // make sure all browsers are at the main app in iframe (if used), so we collect debug info
    },
    // Load test files to populate the testProperties registry
                // @ts-ignore
    loadTestFiles(allSpecFiles);
    mochaOpts: {
    /**

            const rpath = await bInstance.uploadFile('tests/resources/iframeAPITest.html');

                c.specFileRetries = 1;
            outputFileFormat(options) { // optional
            keepAlive.push(setInterval(async () => {
    }
            }
        if (dir && test.parent) {
    '--use-file-for-fake-audio-capture=tests/resources/fakeAudioStream.wav'

    /**
    '--auto-select-desktop-capture-source=Your Entire screen',

     * @param {Error}  error - Error object in case the test fails, otherwise `undefined`.
    beforeSuite(suite) {
        ctx?.webhooksProxy?.disconnect();
    '--no-sandbox',
    // ],
        // Clean up duplicate parentSuite labels from Allure results
// This is deprecated without alternative (https://github.com/nodejs/node/issues/32483)
    // Set directory to store all logs into
        const testProperties = await getTestProperties(testFilePath);
        const originalBefore = c.before;
     * Gets executed before test execution begins. At this point you can access to all global
import path from 'node:path';
    logLevel: 'trace',


            }
    onComplete() {
                clearTimeout(generationTimeout);
     * @returns {Promise<void>}
];

        }
        const resultFiles = fs.readdirSync(resultsDir).filter(f => f.endsWith('-result.json'));
    'intl.accept_languages': 'en-US'
        p1: new Set(),
            return;
            // @ts-ignore
        keepAlive.forEach(clearInterval);
                    browserName: 'chrome',
                throw new Error('The test tries to use WebhookProxy without JaaS.');

            if (!testProperties.useJaas) {
            const filePath = path.join(resultsDir, file);

const specs = [
     *

                        args: chromeArgs,
     *

        const dir = dirMatch ? dirMatch[1] : false;
            const testProperties = await getTestProperties(testFilePath);

            }
import AllureReporter from '@wdio/allure-reporter';
                5000);
                await ctx[instance]?.switchToIFrame();
