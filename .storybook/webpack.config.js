const path = require("path");

module.exports = async ({ config }) => {
    config.module.rules.push({
        test: /\.css$/,
        loaders: ["postcss-loader"],
    });
    return config;
};