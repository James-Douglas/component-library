module.exports = {
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
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'max-len': ["error", { "code": 200, "ignoreUrls": true, "ignoreComments": true, "ignoreStrings": true, "ignoreTemplateLiterals": true }],
    'react/jsx-one-expression-per-line': 'off'
  },
  settings: {
    "import/resolver": {
      node: {
        "paths": ["src"]
      }
    },
  },
};
