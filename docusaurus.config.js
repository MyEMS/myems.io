// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MyEMS',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://myems.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'myems', // Usually your GitHub org/user name.
  projectName: 'myems.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans', 'de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MyEMS/myems.io/blob/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'MyEMS',
        logo: {
          alt: 'MyEMS Logo',
          src: 'img/myems.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Introduction',
          },
          {
            position: 'left',
            label: 'Installation',
            href: '/docs/category/installation',
          },
          {
            position: 'left',
            label: 'API',
            href: '/docs/api',
          },
          {
            position: 'left',
            label: 'Enterprise Edition',
            href: '/docs/enterprise',
          },
          {
            href: 'http://106.14.32.24/',
            label: 'DEMO',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/myems/myems',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://gitee.com/myems/myems',
            label: 'Gitee',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Installation',
                to: '/docs/category/installation',
              },
              {
                label: 'API',
                to: '/docs/api',
              },
              {
                label: 'Enterprise Edition',
                to: '/docs/enterprise',
              },
              {
                label: 'DEMO',
                href: 'http://106.14.32.24/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Gitee Issues',
                href: 'https://gitee.com/myems/myems/issues',
              },
              {
                label: 'Github Issues',
                href: 'https://github.com/MyEMS/myems/issues',
              },
              {
                label: 'QQ Group (792528967)',
                href: 'https://jq.qq.com/?_wv=1027&k=pPKr2e0u',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Bilibili',
                href: 'https://space.bilibili.com/539108162',
              },{
                label: 'YouTube',
                href: 'https://www.youtube.com/@myems',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MyEMS`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
