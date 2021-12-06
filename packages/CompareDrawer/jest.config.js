const baseConfig = require('../../jest.config.base');

module.exports = {
  ...baseConfig,
  roots: [
    '<rootDir>/packages/CompareDrawer',
  ],
  collectCoverageFrom: [
    '*.{js,jsx,ts,tsx}',
  ],
  name: 'CompareDrawer',
  displayName: 'CompareDrawer',
  rootDir: '../..',
};
