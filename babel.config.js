module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          ie: '11',
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: ["babel-plugin-styled-components"],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-runtime',
      [
        "babel-plugin-styled-components",
        {
          "ssr": false,
          "displayName": false,
        }
      ]
    ],
    },
  },
};
