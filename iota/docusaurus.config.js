// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const external = require('./external.config');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const common = require('../common/docusaurus.config');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const internal = require('./internal.config');

module.exports = {
  ...common,
  ...internal,
  plugins: [...external.plugins, ...common.plugins, ...internal.plugins],
  staticDirectories: [
    ...external.staticDirectories,
    ...common.staticDirectories,
    ...internal.staticDirectories,
  ],
};
