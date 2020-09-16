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
  env: {
    development: {
      plugins: ['babel-plugin-styled-components'],
    },
    test: {
      plugins: ['@babel/plugin-transform-runtime'],
    },
  },
};
