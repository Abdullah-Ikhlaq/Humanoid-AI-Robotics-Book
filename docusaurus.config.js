// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// You can also use TypeScript annotations if you prefer.

// ----------------------------------------------------------------------
// FIX 1: Import the Prism themes object using ES Module syntax
// ----------------------------------------------------------------------
const { themes: prismThemes } = require('prism-react-renderer'); 
// Note: This uses require() for compatibility with the CommonJS format of docusaurus.config.js
// but uses object destructuring to get the 'themes' object, which contains github/dracula.
// ----------------------------------------------------------------------


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Quarter 4 Hackathon - Physical AI & Humanoid Robotics Book',
  tagline: 'A guide to bridging digital AI with real-world robotic systems.',
  favicon: 'img/favicon.ico',
  url: 'https://your-docusaurus-site.com',
  baseUrl: '/',
  organizationName: 'your-org',
  projectName: 'physical-ai-book',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Abdullah-Ikhlaq/Humanoid-AI-Robotics-Book',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Abdullah-Ikhlaq/Humanoid-AI-Robotics-Book',
        },
        theme: {
          customCss: './src/css/custom.css',
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
        title: 'Physical AI & Humanoid Robotics Book',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Chapters',
          },
          {
            href: 'https://github.com/Abdullah-Ikhlaq/Humanoid-AI-Robotics-Book',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      // ----------------------------------------------------------------------
      // FIX 2: Reference themes as properties of the prismThemes object
      // ----------------------------------------------------------------------
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // ----------------------------------------------------------------------
    }),
};

module.exports = config;