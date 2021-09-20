const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'do some cool thing',
  tagline: 'Sven are cool',
  url: 'https://sven-xie.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.jpg',
  organizationName: 'sven-xie', // Usually your GitHub org/user name.
  projectName: 'sven-xie.github.io', // Usually your repo name.
  trailingSlash: false,
  
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        // },
        blog: {
           // path: './blog',
          // routeBasePath: '/',
          showReadingTime: true,
          // blogTitle: '', // blog 标题
          // logDescription: '', // blog 描述
          blogSidebarTitle: '随笔 🎯', // blog 侧边栏标题
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Sven',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.jpg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://github.com/sven-xie',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '兴趣爱好',
            items: [
              {
                label: '唱、跳、rap、篮球',
                to: '/',
              },
            ],
          },
          {
            title: '社交',
            items: [
              {
                label: '新浪微博',
                href: 'https://weibo.com/sven1203/home',
              },
            ],
          },
          {
            title: '打赏',
            items: [
              {
                label: '微信',
                to: '/blog/2021/09/18/请喝杯奶茶',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    // 插件
  plugins: [
    // sass 插件
    'docusaurus-plugin-sass',
  ],
  // 主题
  themes: [],
  // 需要加载的 CSS 线上资源地址，最终都会生成 link 标签
  stylesheets: [],
});
