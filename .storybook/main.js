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
          "storybook-transform-jsx"
        ]
      ]
    },
    sourceLoaderOptions: null,
  },
};
