// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require('path');
const themes = require('prism-react-renderer').themes;
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */ // 改为使用 @docusaurus/types
const config = {
  title: 'MyEMS',
  tagline: '',
  favicon: 'img/favicon.ico',
  url: 'https://myems.io',
  baseUrl: '/',
  organizationName: 'myems',
  projectName: 'myems.io',
  
  onBrokenLinks: 'throw',
  
  // 添加类型忽略注释解决 hooks 和 mermaid 的类型问题
  markdown: {
    // @ts-ignore - Docusaurus 3.9 类型定义问题
    hooks: {
      onBrokenMarkdownLinks: 'warn'
    },
    // @ts-ignore - Docusaurus 3.9 类型定义问题
    mermaid: true,
    format: 'detect'
  },

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'baidu-site-verification',
        content: 'codeva-8TUV7dDCxx',
      },
    },
  ],
  
  themes: ['@docusaurus/theme-mermaid'],
  
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en', 'zh-Hans', 'zh-Hant', 'fr'],
  },
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/MyEMS/myems.io/blob/master/',
        },
        theme: {
          customCss: [path.resolve(__dirname, 'src/css/custom.css')],
        },
      }),
    ],
  ],
  
  // 修复 themeConfig 类型问题
  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    
    image: 'img/docusaurus-social-card.jpg',
    
    algolia: {
      appId: 'YOUR_ALGOLIA_APP_ID',
      apiKey: 'YOUR_ALGOLIA_API_KEY',
      indexName: 'YOUR_ALGOLIA_INDEX_NAME',
      contextualSearch: true,
    },
    
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
      style: 'dark',
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