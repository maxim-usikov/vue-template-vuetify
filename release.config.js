module.exports = {
  branch: 'master',
  tagFormat: '${version}',
  dryRun: false,
  ci: false,
  debug: false,
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',

    // NOTE: DO NOT RELEASE ON NPM !!!
    // '@semantic-release/npm',

    // Release to gitlab.
    '@semantic-release/gitlab',

    // Release to github.
    // '@semantic-release/github',

    // Release to git.
    // '@semantic-release/git',
  ],
};
