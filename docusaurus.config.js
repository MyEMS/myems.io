// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const themes = require('prism-react-renderer').themes;
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

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

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'baidu-site-verification',
        content: 'codeva-8TUV7dDCxx',
      },
    },
  ],
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
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
            label: 'Tutorial',
            href: '/docs/category/tutorial',
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
            position: 'left',
            label: 'Cooperation',
            href: '/docs/cooperation',
          },
          {
            href: 'https://myems.cloud',
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
                label: 'Tutorial',
                href: '/docs/category/tutorial',
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
                label: 'Cooperation',
                to: '/docs/cooperation',
              },
              {
                label: 'DEMO',
                href: 'https://myems.cloud',
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
                label: 'WeChat Group',
                href: 'https://qr61.cn/o8TwX4/qeed3Hp',
              },
              {
                label: 'QQ Group',
                href: 'https://qr61.cn/o8TwX4/qZLVV0P',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/rmGeJ5Znbr',
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
