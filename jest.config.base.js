module.exports = {
    moduleDirectories: [
        'node_modules',
    ],
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy'
    },
    "modulePathIgnorePatterns": [
        "packages/.*/lib"
    ],
    setupFilesAfterEnv: [
        '<rootDir>/setupTests.js',
    ],
    transform: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/fileTransformer.js',
        '^.+\\.js$': ['babel-jest', { rootMode: 'upward' }]
    },
    coverageThreshold: {
        'global': {
          'branches': 75,
          'functions': 75,
          'lines': 75,
          'statements': 75
        }
    }
};
