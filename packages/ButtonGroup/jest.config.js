const baseConfig = require('../../jest.config.base');

module.exports = {
  ...baseConfig,
  roots: ['<rootDir>/packages/ButtonGroup'],
  collectCoverageFrom: ['*.{js,jsx,ts,tsx}'],
  name: 'ButtonGroup',
  displayName: 'ButtonGroup',
  rootDir: '../..',
};
