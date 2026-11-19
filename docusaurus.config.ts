
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'Technical Writing & AI',
  tagline: 'Learn. Analyze. Build. Share.',

  favicon: 'img/favicon.ico',

  // GitHub Pages settings
  url: 'https://maggiec87.github.io',
  baseUrl: '/tech-writing-ai-lab/',
  organizationName: 'maggiec87',
  projectName: 'tech-writing-ai-lab',

  onBrokenLinks: 'throw',

  // Markdown settings
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'learn',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'TW + AI Lab',
      logo: {
        alt: 'Technical Writing & AI Lab',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/learn/fundamentals/overview',
          label: 'Learn',
          position: 'left',
        },
        {
          to: '/doc-reviews',
          label: 'Doc Reviews',
          position: 'left',
        },
        {
          to: '/projects',
          label: 'Projects',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Insights',
          position: 'left',
        },
        {
          to: '/portfolio',
          label: 'Portfolio',
          position: 'left',
        },
        {
          to: '/about',
          label: 'About',
          position: 'left',
        },
        {
          href: 'https://github.com/maggiec87/tech-writing-ai-lab',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Technical Writing & AI Lab.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
