// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Joomla! Documentation',
  tagline: 'Documentation for Joomla! Users',
  organizationName: 'joomla',
  projectName: 'joomla-cms',
  url: 'https://docs-next.joomla.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      de: {
        htmlLang: 'de-DE'
      }
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/joomla/docs.joomla.org/tree/main/',
          docLayoutComponent: "@theme/DocPage",
          /*lastVersion: '4.3',*/
          versions: {
            'current': {
              label: 'v4.x (upcoming)',
              banner: 'unreleased'
            },
            /*'4.3': {
              label: 'v4.3.x (latest)',
            }*/
          },
          /*onlyIncludeVersions: ['current', '4.3'], */
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
      navbar: {
        title: 'Joomla!',
        logo: {
          alt: 'Joomla Logo',
          src: 'img/joomla_logo_small.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/help',
            label: 'Help',
            position: 'left',
            activeBaseRegex: `/help/`,
          },
          {
            href: 'https://docs.joomla.org',
            label: 'Legacy docs',
            position: 'right',
          },
          {
            href: 'https://api.joomla.org',
            label: 'API',
            position: 'right',
          },
          {
            href: 'https://framework.joomla.org',
            label: 'Framework',
            position: 'right',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsBefore: [
              {
                type: 'html',
                className: 'dropdown-current-versions',
                value: '<b>Current releases</b>',
              },
            ],
            dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr class="dropdown-separator">',
              },
              {
                type: 'html',
                className: 'dropdown-archived-versions',
                value: '<b>Archived versions</b>',
              },
              {
                href: 'https://docs.joomla.org/Category:Joomla!_3.0',
                label: '3.x',
              },
              {
                href: 'https://docs.joomla.org/Category:Joomla!_3.0',
                label: '2.5.x',
              },
              {
                type: 'html',
                value: '<hr class="dropdown-separator">',
              },
              {
                to: '/versions',
                label: 'All versions',
              },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/joomla/docs.joomla.org',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: 'The content is available under the <a href="https://docs.joomla.org/JEDL">Joomla! EDL</a> license, unless otherwise stated.',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'TBD',
                to: 'docs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Community Portal',
                href: 'https://community.joomla.org/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/joomla',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://community.joomla.org/blogs.html',
              },
              {
                label: 'Magazine',
                href: 'https://magazine.joomla.org/',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy',
                href: 'https://www.joomla.org/privacy-policy.html',
              },
              {
                label: 'Terms',
                href: 'https://tm.joomla.org',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php', 'ini'],
      },
    }),
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexBlog: false,
        language: "en",
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'help',
        path: 'help',
        routeBasePath: 'help',
        editUrl: ({locale, versionDocsDirPath, docPath}) => {
          /* if we need to support more languages this is an example
          if (locale !== 'en') {
            return `https://crowdin.com/project/docusaurus-v2/${locale}`;
          }
           */
          return `https://github.com/joomla/docs.joomla.org/edit/main/${versionDocsDirPath}/${docPath}`;
        },
        /*lastVersion: '4.3',*/
        versions: {
          'current': {
            label: 'v4.x (upcoming)',
            banner: 'unreleased'
          },
          /*'4.3': {
            label: 'v4.3.x (latest)',
          }*/
        },
        editCurrentVersion: true,
        sidebarPath: require.resolve('./sidebarsHelp.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
  ]
};

module.exports = config;
