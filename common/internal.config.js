// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
var path = require('path');

module.exports = {
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  trailingSlash: false,
  organizationName: 'iota-wiki', // Usually your GitHub org/user name.
  projectName: 'iota-wiki', // Usually your repo name.
  themes: [
    [
      '@docusaurus/theme-classic',
      {
        customCss: require.resolve('../src/css/custom.css'),
      },
    ],
  ],
  plugins: ['plugin-image-zoom', '@docusaurus/plugin-ideal-image'],
  staticDirectories: [path.resolve(__dirname, './static')],
};
