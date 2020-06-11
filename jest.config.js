const baseConfig = require('./jest.config.base')

module.exports = {
    ...baseConfig,
    projects: [
        '<rootDir>/packages/*/jest.config.js',
    ],
    coverageDirectory: '<rootDir>/coverage/',
    collectCoverageFrom: [
        'packages/**/*.component.{js,jsx,ts,tsx}',
        'packages/**/*.styles.{js,jsx,ts,tsx}'
    ],
    roots: [
        'packages'
    ],
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy'
    },
    moduleDirectories: [
        'packages',
        'node_modules',
    ]
}