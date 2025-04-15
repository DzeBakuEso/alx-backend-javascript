module.exports = {
  env: {
    browser: false,
    es6: true,
    // jest: true, // ❌ Removed to fix lint crash
  },
  extends: [
    'airbnb-base',
    // 'plugin:jest/all', // ❌ Removed conflicting plugin
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  // plugins: ['jest'], // ❌ Removed conflicting plugin
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ],
};
