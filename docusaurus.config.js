// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const DefaultLocale = 'en';

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
    locales: ['en', 'de', 'es'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      de: {
        htmlLang: 'de-DE',
      },
      es: {
        htmlLang: 'es-ES',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ locale }) => {
            // Link to Crowdin for no english docs
            if (locale !== DefaultLocale) {
              return `https://joomla.crowdin.com/docsjoomlaorg/${locale}`;
            }
            // Link to GitHub for English docs
            return `https://github.com/joomla/docs.joomla.org/tree/main/`;
          },
          docLayoutComponent: '@theme/DocPage',
          /*lastVersion: '4.3',*/
          versions: {
            current: {
              label: 'v4.x (upcoming)',
              banner: 'unreleased',
            },
            /*'4.3': {
              label: 'v4.3.x (latest)',
            }*/
          },
          /*onlyIncludeVersions: ['current', '4.3'], */
        },
        blog: false,
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
            type: 'localeDropdown',
            position: 'left',
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
            href: 'https://github.com/joomla/docs.joomla.org',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright:
          'The content is available under the <a href="https://docs.joomla.org/JEDL">Joomla! EDL</a> license, unless otherwise stated.',
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
  /**
  plugins: [
    [
      // This plugin conflict with i18n https://github.com/cmfcmf/docusaurus-search-local/issues/129
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        // whether to index blog pages
        indexBlog: false,

        // whether to index static pages
        // /404.html is never indexed
        indexPages: false,

        // language supported for the documentation
        language: ['en', 'de', 'es'],

        // The maximum number of search results shown to the user. This does _not_ affect performance of
        // searches, but simply does not display additional search results that have been found.
        maxSearchResults: 8,

        // lunr.js-specific settings
        lunr: {
          // When indexing your documents, their content is split into "tokens".
          // Text entered into the search box is also tokenized.
          // This setting configures the separator used to determine where to split the text into tokens.
          // By default, it splits the text at whitespace and dashes.
          //
          // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
          tokenizerSeparator: /[\s\-]+/,
          // https://lunrjs.com/guides/customising.html#similarity-tuning
          //
          // This parameter controls the importance given to the length of a document and its fields. This
          // value must be between 0 and 1, and by default it has a value of 0.75. Reducing this value
          // reduces the effect of different length documents on a term’s importance to that document.
          b: 0.75,
          // This controls how quickly the boost given by a common word reaches saturation. Increasing it
          // will slow down the rate of saturation and lower values result in quicker saturation. The
          // default value is 1.2. If the collection of documents being indexed have high occurrences
          // of words that are not covered by a stop word filter, these words can quickly dominate any
          // similarity calculation. In these cases, this value can be reduced to get more balanced results.
          k1: 1.2,
          // By default, we rank pages where the search term appears in the title higher than pages where
          // the search term appears in just the text. This is done by "boosting" title matches with a
          // higher value than content matches. The concrete boosting behavior can be controlled by changing
          // the following settings.
          titleBoost: 5,
          contentBoost: 1,
          tagsBoost: 3,
          parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
        },
      },
    ],
  ],
  */
};

module.exports = config;
