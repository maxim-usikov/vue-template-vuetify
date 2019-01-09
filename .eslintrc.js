const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,

  env: {
    node: true,
    // TODO: temp solution.
    jest: true,
  },

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  extends: ['plugin:vue/recommended', '@vue/airbnb', '@vue/prettier'],

  rules: {
    'no-console': isProduction ? 'error' : 'off',
    'no-debugger': isProduction ? 'error' : 'off',
    'vue/prop-name-casing': 'error',
    'vue/html-closing-bracket-spacing': 'error',
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
  },
};
