# Build with Docusaurus

## Introduction

A documentation website provides a centralized place for users to access product guides, tutorials, API references, troubleshooting instructions, and other technical content.

Docusaurus is an open-source framework for building documentation websites. It is built with React and supports Markdown, MDX, versioned documentation, search integrations, internationalization, and customizable themes.

It allows documentation teams to create structured, maintainable websites without building the entire site from scratch.

This article explains how to build a documentation site with Docusaurus, from project initialization to content organization, navigation configuration, customization, and production builds.

## 1. Why Choose Docusaurus?

Docusaurus provides a structured environment for creating and maintaining documentation websites.

Its main capabilities include:

- **Markdown and MDX support:** Write documentation using Markdown and extend pages with React components.
- **Content organization:** Organize documentation into categories, directories, and navigation structures.
- **Customizable themes:** Adjust layouts, colors, typography, and other visual elements.
- **Built-in navigation:** Configure sidebars, breadcrumbs, and navigation bars.
- **Internationalization:** Manage documentation in multiple languages.
- **Versioning:** Maintain documentation for different product or software versions.
- **Static site generation:** Generate static HTML pages for fast and accessible publishing.
- **Extensibility:** Extend functionality through plugins, themes, and React components.

Docusaurus is particularly suitable for developer documentation, product documentation, technical knowledge bases, and project documentation.

## 2. Set Up the Development Environment

Before creating a Docusaurus project, install the required development tools.

### 2.1 Install Node.js

Docusaurus uses Node.js to run its development tools and build the website.

Download and install a supported Node.js version from the official website:

https://nodejs.org/

Verify the installation:

```bash
node -v
npm -v
```

Both commands should return installed version numbers.

### 2.2 Create a Docusaurus Project

Docusaurus provides a command-line tool for generating a new website.

Run:

```bash
npx create-docusaurus@latest my-docs classic
```

This command creates a new project named `my-docs` using the classic template.

Navigate into the project directory:

```bash
cd my-docs
```

Install dependencies if they have not already been installed:

```bash
npm install
```

### 2.3 Start the Local Development Server

Run:

```bash
npm start
```

Docusaurus starts a local development server and displays the website in the browser.

The default local address is:

```text
http://localhost:3000/
```

The development server supports hot reloading, allowing content and configuration changes to appear without manually rebuilding the entire site.

Press `Ctrl + C` in the terminal to stop the server.

## 3. Understand the Project Structure

A newly created Docusaurus project contains several directories and configuration files.

A typical project structure looks like this:

```text
my-docs/
├── blog/
├── docs/
│   ├── intro.md
│   └── tutorial-basics/
├── src/
│   ├── components/
│   ├── css/
│   │   └── custom.css
│   └── pages/
├── static/
├── docusaurus.config.ts
├── sidebars.ts
├── package.json
└── tsconfig.json
```

Each directory serves a different purpose.

| File or directory | Purpose |
|---|---|
| `docs/` | Stores documentation pages written in Markdown or MDX |
| `blog/` | Stores blog posts |
| `src/` | Contains custom React components, pages, and styles |
| `static/` | Stores static assets such as images, icons, and downloadable files |
| `docusaurus.config.ts` | Defines the main website configuration |
| `sidebars.ts` | Defines documentation sidebar navigation |
| `package.json` | Manages project dependencies and npm scripts |
| `tsconfig.json` | Configures TypeScript |

You can add, remove, or reorganize directories depending on the requirements of your documentation project.

## 4. Organize Documentation Content

A clear content structure makes documentation easier to maintain and navigate.

### 4.1 Create a Logical Directory Structure

Organize documentation according to topics, user tasks, or product features.

For example:

```text
docs/
├── getting-started/
│   ├── overview.md
│   ├── installation.md
│   └── quick-start.md
├── configuration/
│   ├── overview.md
│   ├── network-settings.md
│   └── security-settings.md
├── troubleshooting/
│   ├── overview.md
│   └── connection-issues.md
└── reference/
    ├── specifications.md
    └── glossary.md
```

This structure separates major documentation topics and makes future expansion easier.

Avoid creating too many nested directories. The structure should reflect how users look for information rather than simply how the development team organizes internal resources.

### 4.2 Create Markdown Documentation Pages

Docusaurus uses Markdown files to generate documentation pages.

For example, create:

`docs/getting-started/installation.md`

```markdown
---
title: Installation
description: Learn how to install and prepare the product.
---

# Installation

This guide explains how to install the product.

## Before You Begin

Make sure you have the required equipment.

## Installation Steps

1. Connect the power adapter.
2. Connect the required cables.
3. Power on the device.
4. Verify the system status.
```

The content between the front matter delimiters defines page metadata.

Common front matter fields include:

- `title`: The page title.
- `description`: A short page description.
- `sidebar_position`: The page's position in the sidebar.
- `slug`: A custom URL path.

Markdown headings, lists, tables, links, and code blocks can be used to structure the page.

### 4.3 Use MDX Components

Docusaurus supports MDX, which allows React components to be used inside Markdown content.

For example:

```mdx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="windows" label="Windows">
    Download and run the installer.
  </TabItem>
  <TabItem value="macos" label="macOS">
    Download the package and follow the installation instructions.
  </TabItem>
</Tabs>
```

MDX is useful when documentation requires interactive elements, reusable components, or richer page layouts.

However, use components selectively. Standard Markdown is usually easier to maintain for ordinary documentation content.

## 5. Configure Documentation Navigation

Navigation helps users understand the documentation structure and move between topics.

Docusaurus provides several navigation options, including sidebars, navigation bars, and breadcrumbs.

### 5.1 Configure Sidebars

The `sidebars.ts` file defines the structure of the documentation sidebar.

For example:

```ts
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/overview',
        'getting-started/installation',
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'configuration/overview',
        'configuration/network-settings',
        'configuration/security-settings',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/overview',
        'troubleshooting/connection-issues',
      ],
    },
  ],
};

export default sidebars;
```

Each item references a documentation page by its ID, usually corresponding to its path relative to the `docs/` directory without the file extension.

Categories group related pages into expandable sections.

Docusaurus also supports autogenerated sidebars, which can build navigation from the documentation directory structure.

Use manual sidebars when precise navigation control is important. Use autogenerated sidebars when the directory structure already reflects the desired navigation.

### 5.2 Configure the Navigation Bar

The navigation bar is configured in `docusaurus.config.ts`.

For example:

```ts
themeConfig: {
  navbar: {
    title: 'My Documentation',
    logo: {
      alt: 'Site Logo',
      src: 'img/logo.svg',
    },
    items: [
      {
        type: 'docSidebar',
        sidebarId: 'tutorialSidebar',
        position: 'left',
        label: 'Documentation',
      },
      {
        href: 'https://github.com/example/my-docs',
        label: 'GitHub',
        position: 'right',
      },
    ],
  },
},
```

The navigation bar provides access to major website sections and external resources.

Keep the number of top-level navigation items manageable so users can quickly identify the main areas of the site.

## 6. Configure the Docusaurus Site

The main configuration file, `docusaurus.config.ts`, controls website metadata, URLs, themes, navigation, and other settings.

A simplified example:

```ts
import type { Config } from '@docusaurus/types';

const config: Config = {
  title: 'My Documentation',
  tagline: 'Technical Documentation Portal',
  favicon: 'img/favicon.ico',

  url: 'https://example.com',
  baseUrl: '/',

  organizationName: 'example',
  projectName: 'my-docs',

  onBrokenLinks: 'throw',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'My Documentation',
    },
  },
};

export default config;
```

Important configuration properties include:

| Property | Purpose |
|---|---|
| `title` | Defines the website title |
| `tagline` | Defines the website description |
| `favicon` | Specifies the browser icon |
| `url` | Defines the website's production domain |
| `baseUrl` | Defines the site's base path |
| `organizationName` | Identifies the GitHub organization or user |
| `projectName` | Identifies the project repository |
| `presets` | Configures preset plugins and features |
| `themeConfig` | Configures theme-related settings |

The `url` and `baseUrl` values must match the intended publishing environment.

For example, a website hosted at the root of a custom domain typically uses `/` as its base URL. A project website hosted under a repository path may require a base URL such as `/my-docs/`.

## 7. Customize the Website Theme

Docusaurus provides a default theme that can be customized to match the website's branding and usability requirements.

### 7.1 Customize Colors and Styles

The `src/css/custom.css` file contains custom styles.

For example:

```css
:root {
  --ifm-color-primary: #006bb3;
  --ifm-color-primary-dark: #005f9e;
  --ifm-color-primary-darker: #005994;
  --ifm-color-primary-darkest: #004878;
  --ifm-color-primary-light: #0077c7;
  --ifm-color-primary-lighter: #0083db;
  --ifm-color-primary-lightest: #1595e8;
}
```

Docusaurus uses CSS variables to control many theme properties.

You can customize colors, fonts, spacing, borders, and other visual elements through CSS.

### 7.2 Customize Layout and Components

For more advanced customization, Docusaurus allows developers to override theme components and create custom React components.

Common customization areas include:

- Navigation bars.
- Sidebars.
- Footers.
- Documentation page layouts.
- Custom landing pages.
- Reusable content components.

Prefer using configuration options and CSS when possible. Component swizzling should be reserved for requirements that cannot be achieved through standard configuration.

Swizzled components may require additional maintenance when upgrading Docusaurus.

## 8. Add Static Assets

Documentation often requires images, diagrams, icons, and downloadable files.

The `static/` directory is used to store assets that should be copied directly to the generated website.

For example:

```text
static/
├── img/
│   ├── logo.svg
│   ├── product-front.png
│   └── network-diagram.png
└── files/
    └── quick-start-guide.pdf
```

A file stored at `static/img/product-front.png` can be referenced using:

```markdown
![Product Front Panel](/img/product-front.png)
```

For assets that belong to a specific documentation page, you can also organize them alongside the page source files.

Choose a consistent asset management approach and use descriptive file names.

## 9. Support Multiple Languages

Docusaurus includes built-in internationalization support.

You can configure multiple locales in `docusaurus.config.ts`.

For example:

```ts
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'zh-CN'],
},
```

Run the following command to start the website in a specific locale:

```bash
npm run start -- --locale zh-CN
```

Docusaurus provides commands for extracting and managing translated interface strings.

For example:

```bash
npm run write-translations -- --locale zh-CN
```

Translated documentation content is maintained in locale-specific directories, while translated theme and interface strings are managed separately.

For a multilingual documentation project, establish clear source-language ownership and a process for keeping translations synchronized with source updates.

## 10. Build and Preview the Website

During development, `npm start` provides a local preview environment.

Before publishing, generate a production build.

Run:

```bash
npm run build
```

Docusaurus processes the source files and generates a static website in the `build/` directory.

To preview the production build locally, run:

```bash
npm run serve
```

This allows you to verify the generated website before deployment.

### 10.1 Validate the Production Build

Before publishing, check:

- All documentation pages load correctly.
- Navigation and sidebar links work.
- Images and downloadable files are accessible.
- Page layouts display correctly.
- No broken links or missing assets remain.
- The production build completes successfully.
- The configured URL and base path are correct.

A successful build confirms that the site can be generated, but it does not guarantee that every page or link works as intended. Browser-based verification is still necessary.

## 11. Common Development Issues

Several issues may occur during Docusaurus development.

| Issue | Possible cause | Recommended approach |
|---|---|---|
| Local server fails to start | Missing dependencies or configuration errors | Check the terminal output and run `npm install` |
| MDX compilation error | Invalid JSX syntax or unsupported Markdown content | Check the reported file and line |
| Sidebar page not found | Incorrect document ID or file path | Verify the sidebar references |
| Images do not display | Incorrect asset path or missing file | Check the `static/` directory and image URL |
| Production pages return 404 | Incorrect `url` or `baseUrl` configuration | Verify the deployment path |
| Theme changes do not appear | CSS syntax errors or cached assets | Check the stylesheet and refresh the browser |
| Build fails | Invalid configuration, broken references, or MDX errors | Review the build output and fix the reported issue |

When troubleshooting, start with the first meaningful error in the terminal output. Later errors may be consequences of the initial problem.

## 12. Best Practices for Maintaining a Documentation Site

Building a website is only the beginning. Long-term maintainability requires consistent content and technical management.

Recommended practices include:

### 12.1 Establish a Clear Information Architecture

Organize pages around user needs and logical topics.

Avoid unnecessary nesting and duplicated content.

### 12.2 Use Consistent Content Templates

Define reusable structures for common documentation types, such as:

- User guides.
- Tutorials.
- API references.
- Troubleshooting articles.
- Product specifications.

Templates help maintain consistent organization and presentation.

### 12.3 Keep Configuration Maintainable

Use clear naming conventions and organize configuration files logically.

Avoid unnecessary customization that makes upgrades and troubleshooting more difficult.

### 12.4 Review Dependencies Regularly

Keep Docusaurus and its dependencies reasonably up to date.

Before upgrading, review release notes, check compatibility, and test the production build.

### 12.5 Validate Before Publishing

Run production builds and review important pages before deployment.

Automated validation can further reduce the risk of publishing broken content.

## Conclusion

Docusaurus provides a flexible framework for building modern documentation websites.

By combining Markdown and MDX, structured content directories, configurable navigation, theme customization, and static site generation, documentation teams can create websites that are easier to maintain and expand.

A successful documentation site requires more than a working build. It also needs a logical information architecture, consistent content standards, reliable configuration, and regular quality checks.

Once the site structure is established, automation can further improve the efficiency and reliability of documentation publishing.

## Related Topics

- [Documentation Engineering Overview](./overview)
- [Docs-as-Code](../../documentation-engineering/learn/docs-as-code.md)
- [Automating Documentation Builds with GitHub Actions](./automating-doc-builds-github-actions)
- [Information Architecture](../../technical-writing/learn/information-architecture.md)
- [Documentation Localization](../../technical-writing/learn/documentation-localization.md)