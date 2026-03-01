        babelTransformerPath: require.resolve('react-native-svg-transformer')
};
 *
        sourceExts,


/* eslint-disable */
 * Metro configuration
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

    transformer: {
const {
module.exports = mergeConfig(getDefaultConfig(__dirname), config);

    resolver: {
    },

 */
        assetExts
 * https://reactnative.dev/docs/metro
        sourceExts: [ ...sourceExts, 'svg' ]
    }
    }
/**
const config = {
        assetExts: assetExts.filter(ext => ext !== 'svg'),
} = getDefaultConfig();
    resolver: {
 * @type {import('metro-config').MetroConfig}
