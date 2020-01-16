module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/,
      exclude: [
        /node_modules/,
      ],
      use: [
        'style-loader',
        { loader: 'css-loader', options: { sourceMap: true } },
        'postcss-loader',
      ],
    });
    config.module.rules.push({
      test: /\.woff$|\.woff2$/i,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      },
    });
    return config;
  },
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
          "storybook-transform-jsx"
        ]
      ]
    },
    sourceLoaderOptions: null,
  },
};
