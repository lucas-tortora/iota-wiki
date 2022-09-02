// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const external = require('./external.config');
const tutorials = require('./tutorials/docusaurus.config');
const internal = require('./internal.config');

var path = require('path');

module.exports = {
  ...internal,
  plugins: [...external.plugins, ...internal.plugins],
  themes: [...tutorials.plugins, ...internal.themes],
  staticDirectories: [
    ...external.staticDirectories,
    ...tutorials.staticDirectories,
    ...internal.staticDirectories,
  ],
};
