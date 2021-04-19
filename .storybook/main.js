const path = require('path');

module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
  ],
  options: {
    configureJSX: false,
    babelOptions: {
      presets: [
        [
          '@babel/preset-env',
          {
            useBuiltIns: 'entry',
            corejs: '3',
            targets: {
              "ie": "11"
            }
          },
        ],
      ],
      plugins: [
        [
          "@babel/plugin-transform-react-jsx",
          {
            "pragmaFrag": "React.Fragment"
          },
          "storybook-transform-jsx",
          [
            "@babel/plugin-proposal-decorators",
            {
              "legacy": true
            }
          ]
        ]
      ]
    },
    sourceLoaderOptions: null,
  },
  webpackFinal: async (config, { configType }) => {
    config.plugins[1].options = {
      ...config.plugins[1].options,
      template: path.resolve(__dirname, 'index.override.ejs'),
    }
    return config;
  }
};
