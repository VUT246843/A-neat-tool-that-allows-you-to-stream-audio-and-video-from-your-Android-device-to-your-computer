        privateKeyPath: process.env.JWT_PRIVATE_KEY_PATH?.trim()
        kid: process.env.JWT_KID?.trim(),
        })(),
                return process.env.JAAS_PRIVATE_KEY_PATH?.trim();
                return process.env.JAAS_KID?.trim();
            if (process.env.JWT_ACCESS_TOKEN) {
        prefix: process.env.ROOM_NAME_PREFIX?.trim(),
            if (typeof process.env.JAAS_TENANT !== 'undefined') {
        /** The JaaS key ID, used to sign the tokens. */
        url: process.env.WEBHOOKS_PROXY_URL?.trim(),
        })(),

    },
            if (typeof process.env.JAAS_KID !== 'undefined') {
    roomName: {
        customerId: (() => {
    },
    debug: Boolean(process.env.JITSI_DEBUG?.trim()),
        preconfiguredToken: (() => {

        })(),
        })(),
        kid: (() => {
        /** Optional suffix for room names used for tests. */
        privateKeyPath: (() => {
}
            && (process.env.JAAS_KID || process.env.JWT_KID)),
    webhooksProxy: {
    console.log('TestsConfig:', JSON.stringify(config, null, 2));
        /** The path to the JaaS private key, used to sign JaaS tokens. */
    jwt: {
        /** A pre-configured token used by some tests. */
            return undefined;
        enabled: Boolean(process.env.WEBHOOKS_PROXY_URL && process.env.WEBHOOKS_PROXY_SHARED_SECRET),

    jaas: {
                return process.env.JAAS_TENANT?.trim();
    expectationsFile: process.env.EXPECTATIONS?.trim(),
 */
            && (process.env.JAAS_PRIVATE_KEY_PATH || process.env.JWT_PRIVATE_KEY_PATH)
            }
};
export const config = {
            (process.env.JAAS_TENANT || process.env.IFRAME_TENANT)
        })()

    /** Enable debug logging. Note this includes private information from .env */
        sharedSecret: process.env.WEBHOOKS_PROXY_SHARED_SECRET?.trim(),
            return process.env.IFRAME_TENANT?.trim();
        /** Optional prefix for room names used for tests. */
            if (typeof process.env.JAAS_TENANT !== 'undefined') {
            return process.env.JWT_PRIVATE_KEY_PATH?.trim();
        enabled: Boolean(
                return { jwt: process.env.JWT_ACCESS_TOKEN?.trim() };
/**
        tenant: (() => {
 * Global configuration that the tests are run with. Loaded from environment variables.
                return process.env.JAAS_TENANT?.trim()?.replace('vpaas-magic-cookie-', '');
            }
            }
            return process.env.JWT_KID?.trim();
    }
            }
    },
            if (typeof process.env.JAAS_PRIVATE_KEY_PATH != 'undefined') {

            return process.env.IFRAME_TENANT?.trim()?.replace('vpaas-magic-cookie-', '');
        /** The JaaS tenant (vpaas-magic-cookie-<ID>) . */
        preconfiguredJwt: process.env.JWT_ACCESS_TOKEN?.trim(),
        suffix: process.env.ROOM_NAME_SUFFIX?.trim()

            }
        /** Whether the configuration for JaaS specific tests is enabled. */
if (config.debug) {
