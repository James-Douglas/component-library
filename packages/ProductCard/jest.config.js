const baseConfig = require('../../jest.config.base');

module.exports = {
  ...baseConfig,
  roots: [
    '<rootDir>/packages/ProductCard',
  ],
  collectCoverageFrom: [
    '*.{js,jsx,ts,tsx}',
  ],
  name: 'ProductCard',
  displayName: 'Input',
  rootDir: '../..',
};
