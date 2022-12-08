// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Selectize',
  tagline: '',
  url: 'https://selectize.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'selectize', // Usually your GitHub org/user name.
  projectName: 'selectize', // Usually your repo name.
  deploymentBranch: 'gh-pages', // Branch that GitHub pages will deploy from.
  trailingSlash: false, // GitHub pages doesn't support trailing slashes.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          versions: {
            current: {
              label: 'Current Version (0.15.x)',
            },
          },
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-QL249YEJYD',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  plugins: [
    'docusaurus-plugin-google-adsense',
    async function loadTailwindCss() {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  scripts: [
    "https://code.jquery.com/jquery-3.6.1.min.js",
    "https://code.jquery.com/ui/1.13.2/jquery-ui.min.js",
    "https://kit.fontawesome.com/109d56cc28.js",
    "/js/selectize.js",
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: true
      },
      googleAdsense: {
        dataAdClient: 'ca-pub-9290211346209107',
      },
      navbar: {
        title: 'Selectize',
        logo: {
          alt: 'Selectize Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Get Started',
          },
          {
            to: 'docs/demos/',
            position: 'left',
            label: 'Examples',
          },
          {
            type: 'doc',
            docId: 'api',
            position: 'left',
            label: 'API Documentation',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          { href: 'https://github.com/selectize/selectize.js/discussions', label: 'Community', position: 'right' },
          { href: 'https://github.com/selectize/selectize.js', label: 'GitHub', position: 'right', },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Selectize Logo',
          src: 'img/logo.svg',
          width: 160,
          height: 51,
        },
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Get Started",
                to: "/docs/intro",
              },
              {
                label: "Events",
                to: "/docs/events",
              },
              {
                label: "API",
                to: "/docs/api",
              },
            ],
          },
          {
            title: "Demos",
            items: [
              {
                label: "Examples",
                to: "/docs/demos",
              },
              {
                label: "Plugins",
                to: "/docs/plugins",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/selectize/selectize.js',
              },
              {
                label: "Keybase",
                href: "https://keybase.io/team/selectize",
              },
              {
                label: "Stackoverflow",
                href: "https://stackoverflow.com/questions/tagged/selectize.js",
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'License',
                to: '/docs/license',
              },
              // {
              //   label: 'Privacy Policy',
              //   href: 'https://github.com/selectize/selectize.js',
              // },
              // {
              //   label: 'Data Policy',
              //   href: 'https://github.com/selectize/selectize.js',
              // },
              // {
              //   label: 'Cookie Policy',
              //   href: 'https://github.com/selectize/selectize.js',
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Selectize team.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;