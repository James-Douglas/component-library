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
                "presets": [
                    [
                        "@babel/preset-env",
                        {
                            "targets": {
                                "ie": "11"
                            }
                        }
                    ],
                    "@babel/preset-react"
                ]
            }
        }],
        include: path.resolve(__dirname, '../src')
    });

    return config;
};
