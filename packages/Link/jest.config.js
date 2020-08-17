const baseConfig = require('../../jest.config.base');

module.exports = {
  ...baseConfig,
  roots: [
    '<rootDir>/packages/Grid',
  ],
  collectCoverageFrom: [
    '*.{js,jsx,ts,tsx}',
  ],
  name: 'Link',
  displayName: 'Link',
  rootDir: '../..',
};
