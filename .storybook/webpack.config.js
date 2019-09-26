const path = require("path");

module.exports = async ({ config }) => {
    config.module.rules.push({
        test: /\.css$/,
        loaders: ["postcss-loader"],
    });

    config.module.rules.push({
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [{
            loader: 'babel-loader',
            options: {
                "plugins": [
                    [
                        "styled-jsx/babel",
                        {
                            "plugins": [
                                "styled-jsx-plugin-postcss"
                            ]
                        }
                    ]
                ]
            }
        }],
        include: path.resolve(__dirname, '../src')
    })

    config.module.rules.push({
        test: /\.js$/,
        loaders: [{
            loader: 'eslint-loader',
            options: {
                emitError: true,
                failOnError: true
            },
        }],
        include: path.resolve(__dirname, '../src'),
    })

    return config;
};