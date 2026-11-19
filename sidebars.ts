
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Fundamentals',
      items: ['fundamentals/overview', 'fundamentals/technical-writing'],
    },
    {
      type: 'category',
      label: 'Documentation',
      items: ['documentation/overview', 'documentation/user-guides'],
    },
    {
      type: 'category',
      label: 'Doc Reviews',
      items: ['doc-reviews/overview', 'doc-reviews/review-framework'],
    },
    {
      type: 'category',
      label: 'Documentation Engineering',
      items: [
        'documentation-engineering/overview',
        'documentation-engineering/docs-as-code',
      ],
    },
    {
      type: 'category',
      label: 'AI & Automation',
      items: ['ai-automation/overview', 'ai-automation/rag'],
    },
    {
      type: 'category',
      label: 'Projects & Case Studies',
      items: [
        'projects-case-studies/overview',
        'projects-case-studies/pdf-exporter',
        'projects-case-studies/ai-documentation-assistant',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: ['resources/overview'],
    },
    {
      type: 'category',
      label: 'Glossary',
      items: ['glossary/overview'],
    },
  ],
};

export default sidebars;
