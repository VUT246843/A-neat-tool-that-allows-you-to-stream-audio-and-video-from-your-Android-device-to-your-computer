                }),
            ],
    ];
    const isProduction = mode === 'production';
            performance: getPerformanceHints(perfHintOptions, 1024 * 1024 * 2) },
            ],
            concatenateModules: isProduction,
                ...getBundleAnalyzerPlugin(analyzeBundle, 'screenshot-capture-worker')
function getConfig(options = {}) {
                ...config.plugins,
 * which local file is to be served in response to the request.
    return {
                'focus-visible': 'focus-visible/dist/focus-visible.min.js',
                                    firefox: 68,
            },
        hot: true,
            }
            sourceMapFilename: '[file].map'
            alias: {
                '.json'

 */
 * @returns {string|undefined} If the request is to be served by the proxy
            },
            || tpath.startsWith('/lang/')
        }
            plugins: [
        }
                                // Specify our target browsers so no transpiling is
            performance: getPerformanceHints(perfHintOptions, 128 * 1024) },

function getBundleAnalyzerPlugin(analyzeBundle, name) {
                'alwaysontop': './react/features/always-on-top/index.tsx'
            ],
        hints: isProduction && !analyzeBundle ? 'error' : false,
        analyzerMode: 'disabled',
        maxAssetSize: size,
        return [];
            path: `${__dirname}/build`,
                                // Detect usage of modern JavaScript features and automatically polyfill them
const fs = require('fs');
    const config = getConfig(configOptions);
                }),
                // Import SVG as raw text when using ?raw query parameter.
                ...config.module.rules,
                // Typescript:
            // value that is a mock (/index.js).
                    contextRegExp: /moment$/
                        expandProps: 'start'
    const { analyzeBundle, isProduction } = options;
                ...getBundleAnalyzerPlugin(analyzeBundle, 'alwaysontop')
                type: 'asset/source'
                globalObject: 'AudioWorkletGlobalScope'
                test: /\.tsx?$/,
            || tpath.startsWith('/static/')
            __filename: true
            entry: {
        { ...config,
        },
            publicPath: '/libs/',
 *
            },
            }
}
        client: {
                errors: true,
        mode: isProduction ? 'production' : 'development',
                                corejs: '3.40'
                }
            fallback: {
    const configOptions = {
                ]
                    loader: '@svgr/webpack',
 *
            ],
        optimization: {
                })
            }
                ...getBundleAnalyzerPlugin(analyzeBundle, 'external_api')
                        dimensions: false,
 * jitsi-meet such as app.bundle.js and external_api.js.
            entry: {
            || tpath.startsWith('/images/')
            performance: getPerformanceHints(perfHintOptions, 1024 * 1024 * 2),
            minimize: isProduction


    const analyzeBundle = Boolean(process.env.ANALYZE_BUNDLE);
            return tpath.replace('.min.js', '.js');
                                // Consider stage 3 proposals which are implemented by some browsers already.
                target: devServerProxyTarget,
                && new CircularDependencyPlugin({
                    ]
            rules: [ {
}
        return tpath;
const { join, resolve } = require('path');
                    }
    };
                loader: 'babel-loader',
    };
    let tpath = path;
const devServerProxyTarget
                    presets: [
 * The base Webpack configuration to bundle the JavaScript artifacts of
                // Transpile ES2015 (aka ES6) to ES5. Accept the JSX syntax by React
    = process.env.WEBPACK_DEV_SERVER_PROXY_TARGET || 'https://alpha.jitsi.net';
            ],
                'screenshot-capture-worker': './react/features/screenshot-capture/worker.ts'
        }
                ...getBundleAnalyzerPlugin(analyzeBundle, 'face-landmarks-worker')
                                // here, the ES2015+ profile will be used.
             * audio worklet "unfriendly" code however when running the dev server, hot module replacement
function getPerformanceHints(options, size) {
 * Build a BundleAnalyzerPlugin plugin instance for the given bundle name.
        { ...config,
                        [
    }
            // Allow the use of the real filename of the module being executed. By
/**

            directory: process.cwd(),
    if (tpath.startsWith('/v1/_cdn/')) {
             * context as a normal window, (e.g. self/window is not defined).

        plugins: [
                    './react/features/stream-effects/noise-suppression/NoiseSuppressorWorklet.ts'
 */
            }
                options: {
                }
                loader: 'ts-loader',
        { ...config,
            }, {
                options: {
                }),
        },

                test: /\.svg$/,
                use: [ {
};

                '.web.js',
/**


                ...config.plugins,
 * @param {boolean} options.detectCircularDeps - whether to detect circular dependencies or not.
                resourceQuery: { not: [ /raw/ ] },
    const perfHintOptions = {
                new webpack.DefinePlugin({
        static: {
            output: { ...config.output,

    const mode = typeof argv.mode === 'undefined' ? 'production' : argv.mode;

                    test: resolve(__dirname, 'node_modules/webpack-dev-server/client'),

                // Allow CSS to be imported into JavaScript.
    };
/**
                headers: {
            performance: getPerformanceHints(perfHintOptions, 95 * 1024) },
            plugins: [
 * Build a Performance configuration object for the given size.
 * @returns {Array} a configured list of plugins.
            },
                    'css-loader'
    }
 *

            output: {
                                    chrome: 80,
 * the main bundle.
            entry: {

            ],
                libraryTarget: 'umd' },
                    configFile: false,
            entry: {
 * Helper function to build the dev server config. It's necessary to split it in
            || tpath.startsWith('/sounds/')
                            // so that webpack may do tree shaking.
 * @param {boolean} analyzeBundle - whether the bundle needs to be analyzed for size.
                new webpack.IgnorePlugin({
                                modules: false,
            overlay: {
            }, {
                '.ts',
    const { detectCircularDeps, isProduction } = options;
            || tpath.startsWith('/fonts/')

            performance: getPerformanceHints(perfHintOptions, 800 * 1024) },

                                    electron: 10,
        node: {
        // The CDN is not available in the dev server, so we need to bypass it.
                    resourceRegExp: /^canvas$/,
                }
                } ]
        { ...config,
                ...config.plugins,
        analyzeBundle,
                            {
        server: process.env.CODESPACES ? 'http' : 'https',
                        require.resolve('@babel/preset-react')
            ],
    return [
            detectCircularDeps
    };
                // Provide some empty Node modules (required by AtlasKit, olm).
        isProduction
             * so we replace it.
/**
                context: [ '/' ],
             * While running a production build webpack's boilerplate code doesn't introduce any
                new webpack.ProvidePlugin({

                    failOnError: false
                    'style-loader',
        generateStatsFile: true,
        output: {
        ].filter(Boolean),
}
             * The dev server also expects a `self` global object that's not available in the `AudioWorkletGlobalScope`,
}
 * @param {boolean} options.isProduction - whether this is a production build or not.
                ...config.plugins,
                test: /\.css$/,
                warnings: false
        { ...config, /**

            plugins: [
const CircularDependencyPlugin = require('circular-dependency-plugin');
                    contextRegExp: /resemblejs$/
            plugins: [
                'noise-suppressor-worklet':
            filename: `[name]${isProduction ? '.min' : ''}.js`,
 * Webpack 5 because only one devServer entry is supported, so we attach it to

module.exports = (_env, argv) => {
                                // done unnecessarily. For browsers not specified
        tpath = tpath.replace(/\/v1\/_cdn\/[^/]+\//, '/');
                    allowAsyncCycles: false,
        module: {
 * @param {Object} request - The (HTTP) request received by the proxy.
                use: [
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
    }) ];
            performance: getPerformanceHints(perfHintOptions, 30 * 1024) }
                '.web.ts',
        maxEntrypointSize: size
            {
                'browser'
 * See: https://webpack.js.org/configuration/performance/
                '.web.tsx',
            } },

                            }
                bypass: devServerProxyBypass,
                                shippedProposals: true,
    };
             * and live reload add javascript code that can't be ran by the worklet, so we explicitly ignore
 * @returns {Object} the base config object.
                '@giphy/js-analytics': resolve(__dirname, 'giphy-analytics-stub.js')
                    exclude: /node_modules/,

                            require.resolve('@babel/preset-env'),
        { ...config,
 * webpack-dev-server (i.e. is to be handled by the proxy target) and, if not,
/**
                ignored: file => file.endsWith('.log')
            watch: {
            module: { rules: [
            },

 * @param {Object} options - options for the bundles configuration.
            extensions: [
        },
 */
                new webpack.IgnorePlugin({

                // as well.
                library: 'JitsiMeetExternalAPI',
            },
                process: false
            entry: {
 * @param {boolean} options.isProduction - whether this is a production build or not.
const webpack = require('webpack');
                ...getBundleAnalyzerPlugin(analyzeBundle, 'close3')
                            // Tell babel to avoid compiling imports into CommonJS
 * target, undefined; otherwise, the path to the local file to be served.
                test: /\.(j|t)sx?$/,
                ...config.plugins,
                fs: false,
        },
            aliasFields: [
            plugins: [
function getDevServerConfig() {
                                // core-js version to use, must be in sync with the version in package.json.
                                    safari: 14
             */
                    'Host': new URL(devServerProxyTarget).host
            ],
 */
                    resourceRegExp: /^\.\/locale$/,

        host: 'localhost',
function devServerProxyBypass({ path }) {
                exclude: /node_modules/

        return tpath;
        },
        if (tpath.endsWith('.min.js') && !fs.existsSync(join(process.cwd(), tpath))) {
                exclude: /node_modules/,
 */

                resourceQuery: /raw/,
                ...getBundleAnalyzerPlugin(analyzeBundle, 'app'),
    if (tpath.startsWith('/css/')
                ...config.output,
            plugins: [
                // Webpack defaults:
        isProduction
                    '__DEV__': !isProduction
/* global __dirname */
            devServer: isProduction ? {} : getDevServerConfig(),
                    // Avoid loading babel.config.js, since we only use it for React Native.
            entry: {
                    transpileOnly: !isProduction // Skip type checking for dev builds.,
    return [ new BundleAnalyzerPlugin({
 * The URL of the Jitsi Meet deployment to be proxy to in the context of
            }, {
            || tpath.endsWith('.wasm')) {
            // default Webpack does not leak path-related information and provides a
                test: /\.svg$/,
                    loader: 'null-loader'
             * The NoiseSuppressorWorklet is loaded in an audio worklet which doesn't have the same
                },
 * @returns {Object} a performance hints object.


                'external_api': './modules/API/external/index.js'
 *

            performance: getPerformanceHints(perfHintOptions, 5 * 1024 * 1024) },
                '.js',
             * those parts with the null-loader.
                crypto: false,
    }
 */

            ] },
                    options: {
 * development with webpack-dev-server.
            ],
                                useBuiltIns: 'usage',
            || tpath.startsWith('/doc/')
 * @param {boolean} options.analyzeBundle - whether the bundle needs to be analyzed for size.
/**
 * @param {Object} options - options for the bundles configuration.
    return {
                    process: 'process/browser'
            entry: {
                                },
            plugins: [

        { ...config,
                        ],
                // Import SVG as React component (default).
 * Determines whether a specific (HTTP) request is to bypass the proxy of
 * @returns {Object} the dev server configuration.
    }

                    configFile: 'tsconfig.web.json',
                '.tsx',
    if (!analyzeBundle) {
                                targets: {
                })
const process = require('process');
        devtool: isProduction ? 'source-map' : 'eval-source-map',
 * @param {number} size - the size limit to apply.
            },
    return {
        statsFilename: `${name}-stats.json`
        ],
}
            },
 * @param {string} name - the name of the bundle.
 *
        proxy: [
        detectCircularDeps: Boolean(process.env.DETECT_CIRCULAR_DEPS),
            }, {
                'face-landmarks-worker': './react/features/face-landmarks/faceLandmarksWorker.ts'
                ...config.plugins,

                path: false,
            } ]
                {
                                // with core-js.
        resolve: {
                secure: false,
                'close3': './static/close3.js'
                'app.bundle': './app.js'
    if (tpath.startsWith('/libs/')) {
