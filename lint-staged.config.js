/**
 *
 * @see: https://github.com/okonet/lint-staged#configuration
 */
module.exports = {
  linters: {
    '*.{js,jsx,vue}': ['yarn run lint', 'git add'],
  },
  ignore: [],
};
