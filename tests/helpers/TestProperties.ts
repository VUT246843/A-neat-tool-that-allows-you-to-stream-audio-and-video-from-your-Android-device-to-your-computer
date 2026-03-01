            }
 * change dynamically.
 */
 * An interface that tests can export (as a TEST_PROPERTIES property) to define what they require.
let testFilesLoaded = false;



    description?: string;
/**
                require(file);
    }
 * @returns Promise<ITestProperties> - The test properties with defaults applied
    /** Whether the test should be retried. */
    retry: false,
            delete require.cache[file];
    /** The test requires jaas, it should be skipped when the jaas configuration is not enabled. */
    // loaded.
/**
/**
        testFilesLoaded = true;
    /** The test uses the webhook proxy if available. */
        originalTestFunctions[fn] = (global as any)[fn];
            // do nothing
    const properties = testProperties[testFilePath] || { ...defaultProperties };
export async function getTestProperties(testFilePath: string): Promise<ITestProperties> {
    const testGlobals = [ 'describe', 'it', 'test', 'expect', 'beforeEach', 'afterEach', 'before', 'after', 'beforeAll',
    if (properties.requireWebhookProxy && !properties.useWebhookProxy) {
    if (testProperties[filename]) {

 * 2. require()s each file to trigger setTestProperties calls
export type ITestProperties = {
        properties.useWebhookProxy = true;
    const originalTestFunctions: Record<string, any> = {};
        files.forEach(file => {

        // Clear require cache for analyzed files so they can be loaded fresh by WebDriverIO
                console.warn(`Warning: Could not analyze ${file}:`, (error as Error).message);
 * @param testFilePath - The absolute path to the test file
    }
    usesBrowsers: string[];
    usesBrowsers: [ 'p1' ]
        });
    if (testFilesLoaded) {
            } catch (error) {
        testGlobals.forEach(fn => {
 */

 * @param properties the properties to set for the test file, defaults will be applied for missing properties
        (global as any)[fn] = () => {
    useJaas: boolean;
    requireWebhookProxy: false,
    retry: boolean;
 */
        // Restore original functions
                (global as any)[fn] = originalTestFunctions[fn];
export function setTestProperties(filename: string, properties: Partial<ITestProperties>): void {
        };
 * Loads test files to populate the testProperties registry. This function:
    } finally {
    requireWebhookProxy: boolean;
                    // If no properties were set, apply defaults
        files.forEach(file => {
                delete (global as any)[fn];
            try {

 * Set properties for a test file. This was needed because I couldn't find a hook that executes with describe() before
    /** The test requires the webhook proxy to be available. */

            } else {
}
export function loadTestFiles(files: string[]): void {
 */
export const testProperties: Record<string, ITestProperties> = {};

};


     * A more detailed description of what the test does, to be included in the Allure report.
};
 */
    useWebhookProxy: false,
/**
}
        'afterAll', 'suite', 'setup', 'teardown' ];
            if (originalTestFunctions[fn] !== undefined) {
                if (!testProperties[file]) {
     */
                }
    useWebhookProxy: boolean;
    testGlobals.forEach(fn => {
        console.warn(`Test properties for ${filename} are already set. Overwriting.`);
                    setTestProperties(file, { ...defaultProperties });

    });
 * Maps a test filename to its registered properties.
/**
        });
 *
    return properties;
}

const defaultProperties: ITestProperties = {
        // Load all spec files to trigger setTestProperties calls
 * 1. Mocks test framework globals to prevent test registration
    // Temporarily override test functions to prevent tests registering at this stage. We only want TestProperties to be
            }
        return;
        });
    try {
    /**
    useJaas: false,
    }

    }
    testProperties[filename] = { ...defaultProperties, ...properties };
 * the code in wdio.conf.ts's before() hook. The intention is for tests to execute this directly. The properties don't
 * @param filename the absolute path to the test file
 * 3. Restores original test framework functions
 * @param files - Array of file names to load
 *
