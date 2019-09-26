
const glob = require('glob');
const { POSTCSS_MODES } = require('@craco/craco');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

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


module.exports = {
    style: {
        postcss: {
            mode: POSTCSS_MODES.file,
        },
    },
    babel: {
        loaderOptions: {
            babelrc: true,
        },
    },
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            //reset paths so we dont let create react app freak out
            paths.appBuild = `${__dirname}/lib`;
            paths.appHtml = `${__dirname}/src/index.css`;
            paths.appIndexJs = `${__dirname}/src/index.css`

            const components = gatherComponents()
            components["styles"] = `${__dirname}/src/index.css`

            webpackConfig.entry = components
            webpackConfig.output = {
                path: `${__dirname}/lib`,
                filename: 'components/[name]/index.js',
                library: '',
                libraryTarget: 'commonjs-module',
            };
            webpackConfig.plugins = webpackConfig.plugins.filter(plugin => !(plugin instanceof HtmlWebpackPlugin));
            webpackConfig.plugins = webpackConfig.plugins.filter(plugin => !(plugin instanceof MiniCssExtractPlugin));
            const { GenerateSW } = WorkboxWebpackPlugin;
            webpackConfig.plugins = webpackConfig.plugins.filter(plugin => !(plugin instanceof GenerateSW));
            webpackConfig.plugins = webpackConfig.plugins.filter(plugin => !(plugin instanceof InterpolateHtmlPlugin));
            webpackConfig.plugins = webpackConfig.plugins.filter(plugin => !(plugin instanceof ManifestPlugin));

            webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));

            webpackConfig.plugins.push(new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: '[name].css',
            }));
            webpackConfig.optimization.runtimeChunk = false;
            return webpackConfig;
        },
    },
};
