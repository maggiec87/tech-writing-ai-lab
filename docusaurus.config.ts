
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
    locales: ['en', 'zh-CN'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'learn',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
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
        label: 'Technical Writing',
        to: '/learn/technical-writing/learn/overview',
        sidebarId: 'technicalWritingSidebar',
        position: 'left',
      },
      {
        label: 'Documentation Engineering',
        to: '/learn/documentation-engineering/learn/overview',
        sidebarId: 'documentationEngineeringSidebar',
        position: 'left',
      },
      {
        label: 'AI Engineering',
        to: '/learn/ai-engineering/learn/overview',
        sidebarId: 'aiEngineeringSidebar',
        position: 'left',
      },
      {
        label: 'AI Product & UX',
        to: '/learn/ai-product-ux/learn/overview',
        sidebarId: 'aiProductUXSidebar',
        position: 'left',
      },
      {
        label: 'Resources',
        to: '/learn/resources/overview',
        sidebarId: 'resourcesSidebar',
        position: 'right',
      },
      {
        label: 'Portfolio',
        to: '/portfolio',
        position: 'right',
      },
      {
        label: 'About',
        to: '/about',
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
