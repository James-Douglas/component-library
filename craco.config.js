
const glob = require('glob');
const { POSTCSS_MODES } = require('@craco/craco');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const gatherComponents = () => {
    const entryPoints = {};
    const files = glob.sync(`${__dirname}/src/components/**/*.component.js`);
    files.forEach((e) => {
        const [fileName] = /([^\/]+$)/.exec(e);
        const key = fileName.replace(".component.js", "")
        entryPoints[key] = e;
    });
    return entryPoints
};

const filterPlugins = (webpackConfig, pluginType) => {
    const i = webpackConfig.plugins.findIndex((e) => typeof e === pluginType);
    return webpackConfig.plugins.splice(i, 1);
};

module.exports = {
    style: {
        postcss: {
            mode: POSTCSS_MODES.file,
        },
    },
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            console.log(gatherComponents())
            paths.appBuild = `${__dirname}/lib`;
            webpackConfig.entry = gatherComponents();
            webpackConfig.output = {
                path: `${__dirname}/lib`,
                library: '',
                libraryTarget: 'commonjs-module',
            };
            webpackConfig.plugins = filterPlugins(webpackConfig, HtmlWebpackPlugin);
            const { GenerateSW } = WorkboxWebpackPlugin;
            webpackConfig.plugins = filterPlugins(webpackConfig, GenerateSW);
            webpackConfig.plugins = filterPlugins(webpackConfig, InterpolateHtmlPlugin);
            webpackConfig.plugins = filterPlugins(webpackConfig, ManifestPlugin);
            webpackConfig.plugins.push(new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: '[name].css',
            }));
            webpackConfig.optimization.runtimeChunk = false;
            console.log(webpackConfig)
            return webpackConfig;
        },
    },
};
