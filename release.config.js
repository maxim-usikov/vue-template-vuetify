module.exports = {
  branch: 'wip', // todo: change to default master
  tagFormat: 'v${version}',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    // NOTE: DO NOT RELEASE ON NPM !!!
    // '@semantic-release/npm',
    '@semantic-release/gitlab',
  ],
  dryRun: true,
  ci: false,
  debug: false,
};
