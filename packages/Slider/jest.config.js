const baseConfig = require('../../jest.config.base');

module.exports = {
  ...baseConfig,
  roots: [
    '<rootDir>/packages/Slider',
  ],
  collectCoverageFrom: [
    '*.{js,jsx,ts,tsx}',
  ],
  name: 'Tabs',
  displayName: 'Tabs',
  rootDir: '../..',
};
