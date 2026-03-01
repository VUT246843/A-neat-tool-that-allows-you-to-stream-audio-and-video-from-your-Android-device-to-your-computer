            i18nextPlugin({
 * @type { import("@inlang/core/config").DefineConfig }
        referenceLanguage: 'main',
        plugins: [
    );
    const { default: i18nextPlugin } = await env.$import(
            }),
        ]
                ignore: [ 'languages.json', 'translation-languages.json' ]
 */
                pathPattern: 'lang/{language}.json',
        'https://cdn.jsdelivr.net/npm/@inlang/plugin-standard-lint-rules@3/dist/index.js'
            standardLintRules()
    };
    return {
}
    const { default: standardLintRules } = await env.$import(
        'https://cdn.jsdelivr.net/npm/@inlang/plugin-i18next@2/dist/index.js'

export async function defineConfig(env) {
/**

    );
