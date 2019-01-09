/**
 *
 * @see: https://github.com/okonet/lint-staged#configuration
 */
module.exports = {
  linters: {
    '*.{js,jsx,vue}': ['yarn lint', 'git add'],
  },
  ignore: [],
};
