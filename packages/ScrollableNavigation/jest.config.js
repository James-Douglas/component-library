const baseConfig = require('../../jest.config.base');

module.exports = {
  ...baseConfig,
  roots: [
    '<rootDir>/packages/ScrollableNavigation',
  ],
  collectCoverageFrom: [
    '*.{js,jsx,ts,tsx}',
  ],
  name: 'ScrollableNavigation',
  displayName: 'ScrollableNavigation',
  rootDir: '../..',
};
