const { resolve } = require('path');
const { readdirSync, lstatSync } = require('fs');

const PACKAGE_DIR = 'packages/'; // this could be replaced utilizing the globs in package.json's "workpackges" or from the lerna.json config

// get files in packages
const noExtraneousOverrides = readdirSync(resolve(__dirname, PACKAGE_DIR))
// filter for non-hidden dirs to get a list of packages
  .filter(
    entry =>
      entry.substr(0, 1) !== '.' && lstatSync(resolve(__dirname, PACKAGE_DIR, entry)).isDirectory(),
  )
  // map to override rules pointing to local and root package.json for rule
  .map(entry => ({
    files: [`${PACKAGE_DIR}${entry}/**/*`],
    rules: {
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
          optionalDependencies: false,
          peerDependencies: true,
          packageDir: [__dirname, resolve(__dirname, PACKAGE_DIR, entry)],
        },
      ],
    },
  }));


module.exports = {
  overrides: [
    ...noExtraneousOverrides,
    {
      files: ['packages/**/index.js'],
      rules: {
        'import/prefer-default-export': 'off'
      }
    }
  ],
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'react-app'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true, packageDir: './' }],
    'max-len': ["error", { "code": 200, "ignoreUrls": true, "ignoreComments": true, "ignoreStrings": true, "ignoreTemplateLiterals": true }],
    'react/jsx-one-expression-per-line': 'off'
  },
  settings: {
    "import/resolver": {
      node: {
        "paths": ["packages"]
      }
    },
  },
};
