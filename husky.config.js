/**
 * For multiple commands:
 * @see: https://github.com/typicode/husky/blob/master/DOCS.md#multiple-commands
 */
module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
    'commit-msg': 'commitlint -e $HUSKY_GIT_PARAMS',
  },
};
