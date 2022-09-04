// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
var path = require('path');

module.exports = {
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  trailingSlash: false,
  organizationName: 'iota-wiki', // Usually your GitHub org/user name.
  projectName: 'iota-wiki', // Usually your repo name.
  plugins: [
    'plugin-image-zoom',
    '@docusaurus/plugin-ideal-image',
    [
      '@docusaurus/plugin-content-pages',
      {
        path: path.resolve(__dirname, 'pages'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'common',
        path: path.resolve(__dirname, 'docs'),
        routeBasePath: '/',
        sidebarPath: path.resolve(__dirname, 'sidebars.ts'),

        // General config
        editUrl: 'https://github.com/iota-wiki/iota-wiki/edit/main/common/docs',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
      },
    ],
  ],
  staticDirectories: [path.resolve(__dirname, './static')],
};
