const baseConfig = require('../../jest.config.base');

module.exports = {
  ...baseConfig,
  roots: [
    '<rootDir>/packages/Notification',
  ],
  collectCoverageFrom: [
    '*.{js,jsx,ts,tsx}',
  ],
  name: 'Notification',
  displayName: 'Notification',
  rootDir: '../..',
};
