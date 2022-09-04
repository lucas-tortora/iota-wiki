// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const external = require('./external.config');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const internal = require('./internal.config');

module.exports = {
  ...internal,
  plugins: [...external.plugins, ...internal.plugins],
  staticDirectories: [
    ...external.staticDirectories,
    ...internal.staticDirectories,
  ],
};
