
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {

  // 01. Technical Writing
  technicalWritingSidebar: [
    {
      type: 'category',
      label: 'LEARN',
      collapsible: true,
      collapsed: false,
      items: [
        'technical-writing/learn/overview',
        'technical-writing/learn/writing-fundamentals',
        'technical-writing/learn/user-guides',
        'technical-writing/learn/user-guide-development-workflow',
        'technical-writing/learn/information-architecture',
        'technical-writing/learn/visual-communication',
        'technical-writing/learn/api-documentation-best-practices',
        'technical-writing/learn/technical-documentation-quality-standards',
        'technical-writing/learn/documentation-reviews',
        'technical-writing/learn/documentation-localization',
      ],
    },
    {
      type: 'category',
      label: 'REVIEWS',
      collapsible: true,
      collapsed: true,
      items: [
        'technical-writing/reviews/overview',
        'technical-writing/reviews/stripe-api-documentation-case-study',
        'technical-writing/reviews/ikea-assembly-instructions-case-study',
      ],
    },
      {
      type: 'category',
      label: 'PROJECTS',
      collapsible: true,
      collapsed: true,
      items: [
        'technical-writing/projects/overview',
      ],
    },
  ],

  // 02. Documentation Engineering
  documentationEngineeringSidebar: [
    {
      type: 'category',
      label: 'LEARN',
      collapsible: true,
      collapsed: false,
      items: [
        'documentation-engineering/learn/overview',
        'documentation-engineering/learn/docs-as-code',

        'documentation-engineering/learn/documentation-architecture',
        'documentation-engineering/learn/documentation-versioning',
        'documentation-engineering/learn/modular-documentation-content-reuse',
        'documentation-engineering/learn/content-metadata-and-taxonomy',

        'documentation-engineering/learn/structured-authoring',
        'documentation-engineering/learn/dita-and-topic-based-documentation',
        'documentation-engineering/learn/component-content-management-systems',

        'documentation-engineering/learn/building-doc-site-with-docusaurus',
        'documentation-engineering/learn/automating-doc-builds-github-actions',

        'documentation-engineering/learn/automated-documentation-testing',
        'documentation-engineering/learn/documentation-quality-automation',
        'documentation-engineering/learn/documentation-governance',
        'documentation-engineering/learn/documentation-release-management',
        'documentation-engineering/learn/documentation-analytics',
      ],
    },
    {
      type: 'category',
      label: 'REVIEWS',
      collapsible: true,
      collapsed: true,
      items: [
        'documentation-engineering/reviews/overview',
        'documentation-engineering/reviews/github-docs-engineering-case-study',
      ],
    },
    {
      type: 'category',
      label: 'PROJECTS',
      collapsible: true,
      collapsed: true,
      items: [
        'documentation-engineering/projects/overview',
      ],
    },
  ],

  // 03. AI Engineering
  aiEngineeringSidebar: [
    {
      type: 'category',
      label: 'LEARN',
      collapsible: true,
      collapsed: false,
      items: [
        'ai-engineering/learn/overview',
        'ai-engineering/learn/how-large-language-models-work',
        'ai-engineering/learn/prompt-engineering',
        'ai-engineering/learn/llm-api-integration',
        'ai-engineering/learn/building-rag-applications',
        'ai-engineering/learn/ai-agents-fundamentals',
        'ai-engineering/learn/building-ai-agents-with-python',
        'ai-engineering/learn/ai-application-testing',
        'ai-engineering/learn/llm-evaluation-and-observability',
      ],
    },
    {
      type: 'category',
      label: 'REVIEWS',
      collapsible: true,
      collapsed: true,
      items: [
        'ai-engineering/reviews/overview',
        'ai-engineering/reviews/llamaindex-rag-architecture-case-study',
      ],
    },
    {
      type: 'category',
      label: 'PROJECTS',
      collapsible: true,
      collapsed: true,
      items: [
        'ai-product-ux/reviews/overview',
        'ai-engineering/projects/overview',
      ],
    },
  ],

  // 04. AI Product & UX
  aiProductUXSidebar: [
    {
      type: 'category',
      label: 'LEARN',
      collapsible: true,
      collapsed: false,
      items: [
        'ai-product-ux/learn/overview',
        'ai-product-ux/learn/ai-product-fundamentals',
        'ai-product-ux/learn/ai-product-lifecycle',
        'ai-product-ux/learn/ai-product-requirements',
        'ai-product-ux/learn/ai-ux-design-principles',
        'ai-product-ux/learn/human-ai-interaction',
        'ai-product-ux/learn/conversational-ux-design',
        'ai-product-ux/learn/designing-ai-feedback-and-error-recovery',
        'ai-product-ux/learn/trust-transparency-and-responsible-ai',
      ],
    },
    {
      type: 'category',
      label: 'REVIEWS',
      collapsible: true,
      collapsed: true,
      items: [
        'ai-product-ux/reviews/duolingo-max-case-study',
      ],
    },
    {
      type: 'category',
      label: 'PROJECTS',
      collapsible: true,
      collapsed: true,
      items: [
        'ai-product-ux/projects/overview',
      ],
    },
  ],

  // 05. Resources
  resourcesSidebar: [
    {
      type: 'category',
      label: 'RESOURCES',
      collapsible: true,
      collapsed: false,
      items: [
        'resources/overview',
        'resources/glossary/overview',
        'resources/tools-platforms/overview',
        'resources/learning-resources/overview',
      ],
    },
  ],

};

export default sidebars;
