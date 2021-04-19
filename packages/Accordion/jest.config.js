const baseConfig = require('../../jest.config.base');

module.exports = {
  ...baseConfig,
  roots: [
    '<rootDir>/packages/Accordion',
    '<rootDir>/__mocks__',
  ],
  collectCoverageFrom: [
    '*.{js,jsx,ts,tsx}',
  ],
  name: 'Accordion',
  displayName: 'Accordion',
  rootDir: '../..',
};
