# Localization and Internationalization

## Introduction

Technical products are often used by people in different countries, languages, and cultural contexts. Documentation must therefore be designed and adapted to support a global audience.

Two important concepts in this process are internationalization (i18n) and localization (L10n).

- **Internationalization (i18n)** prepares content, systems, and workflows for multiple languages and regions.
- **Localization (L10n)** adapts content for a specific language, region, or target audience.

Internationalization makes localization easier. Together, they help organizations deliver accurate, consistent, and usable documentation across markets.

## 1. Why Internationalization and Localization Matter

Users need documentation they can understand and apply in their local context.

Poorly localized documentation can lead to:

- Misunderstood instructions.
- Incorrect product configuration.
- Inconsistent technical terminology.
- Confusion caused by unfamiliar units or formats.
- Increased support requests.
- Reduced user confidence.

A well-managed localization process improves usability, supports international product launches, and maintains consistent product information across languages.

## 2. Understand the Localization Process

Documentation localization involves more than translating words from one language into another.

A complete process may include:

1. Prepare the source content.
2. Identify target languages and regions.
3. Extract and manage translatable content.
4. Translate the content.
5. Review technical terminology.
6. Adapt regional formats and references.
7. Perform linguistic and functional quality checks.
8. Publish and maintain localized versions.

The exact process depends on product complexity, target markets, content volume, and release schedules.

## 3. Prepare Content for Internationalization

Internationalization should be considered during the initial content development stage rather than added after the source documentation is complete.

### 3.1 Use Clear and Translation-Friendly Language

Write source content in a way that reduces ambiguity and translation effort.

Recommended practices include:

- Use short and direct sentences.
- Prefer standard technical terminology.
- Avoid unnecessary idioms and slang.
- Avoid culturally specific expressions.
- Use consistent product names and feature names.
- Avoid ambiguous pronouns and references.
- Keep instructions explicit.

For example:

Less effective:

"Give it a quick restart if things don't look right."

More effective:

"Restart the device if the issue persists."

The second version is more precise and easier to translate.

### 3.2 Separate Text from Visual Assets

Avoid embedding important text directly into images whenever possible.

Instead:

- Keep labels and descriptions in editable text.
- Maintain source files for diagrams and illustrations.
- Provide translatable text for image labels.
- Use separate localized assets when text must appear inside an image.

This reduces the effort required to create localized versions.

### 3.3 Avoid Hard-Coded Regional Assumptions

Consider regional differences when preparing content.

Examples include:

- Date and time formats.
- Measurement units.
- Currency formats.
- Address formats.
- Telephone number formats.
- Electrical standards and regional requirements.

Use region-neutral content where possible, and provide localized information when necessary.

### 3.4 Support Text Expansion

Translated text may be longer or shorter than the original.

Design layouts and visual assets to accommodate text expansion without:

- Clipping text.
- Overlapping labels.
- Breaking page layouts.
- Reducing readability.

## 4. Establish Terminology and Translation Standards

Consistent terminology is essential for technical documentation, especially when multiple translators or language vendors are involved.

A terminology management process should include:

### 4.1 Create a Terminology Glossary

Define preferred translations for:

- Product names.
- Technical terms.
- Interface labels.
- Feature names.
- Warnings and safety terms.
- Frequently used expressions.

### 4.2 Maintain a Translation Style Guide

A translation style guide defines language-specific writing conventions.

It may cover:

- Tone and formality.
- Sentence structure.
- Capitalization.
- Punctuation.
- Technical terminology.
- Units and number formatting.
- Treatment of product names and interface labels.

### 4.3 Use Translation Memory

Translation Memory (TM) stores previously translated segments and reuses them when similar content appears again.

It helps to:

- Reduce repetitive translation work.
- Improve consistency.
- Accelerate updates.
- Reduce translation costs.

Translation Memory should be supported by terminology review and human quality checks. Reused translations are not automatically correct in every context.

## 5. Manage Localized Documentation

A structured content management approach helps teams maintain multiple language versions.

Common practices include:

- Maintain one authoritative source language.
- Use consistent file and folder naming.
- Separate localized content where appropriate.
- Track translation status.
- Record source content versions.
- Identify outdated translations.
- Link localized pages to their corresponding source pages.

For example:

```text
docs/
├── en/
│   ├── getting-started.md
│   └── troubleshooting.md
├── zh-CN/
│   ├── getting-started.md
│   └── troubleshooting.md
└── ja/
    ├── getting-started.md
    └── troubleshooting.md
```

The exact directory structure depends on the documentation platform and localization workflow.

For documentation sites, localization features provided by platforms such as Docusaurus can help manage language versions and translated interface strings.

## 6. Control Translation Updates

Source documentation changes over time. Localized versions must be updated accordingly.

A translation update workflow should:

1. Identify changes in the source content.
2. Determine which localized pages are affected.
3. Mark outdated translations.
4. Send changed content for translation.
5. Review the updated translations.
6. Publish synchronized versions.

For larger documentation projects, a content management or translation management system can help track source changes and translation progress.

Avoid publishing localized content that no longer reflects the current product behavior.

## 7. Perform Localization Quality Assurance

Localization quality assurance checks whether translated documentation is linguistically correct, technically accurate, and usable in the target locale.

A practical review should cover:

### 7.1 Linguistic Accuracy

- Grammar and spelling.
- Natural phrasing.
- Consistent terminology.
- Appropriate tone.
- Correct punctuation.

### 7.2 Technical Accuracy

- Product names and feature names.
- Configuration instructions.
- Technical values and parameters.
- Interface labels.
- Warnings and safety instructions.

### 7.3 Regional Adaptation

- Date and time formats.
- Measurement units.
- Number formats.
- Regional terminology.
- Local standards and references.

### 7.4 Functional and Layout Checks

- Correct language selection.
- Working navigation and links.
- Proper character rendering.
- No clipped or overlapping text.
- Correct display of localized images.
- Consistent formatting across pages.

Technical review is particularly important because a grammatically correct translation may still describe incorrect product behavior.

## 8. Common Localization Problems

| Problem | Impact | Recommended approach |
|---|---|---|
| Inconsistent terminology | Confuses users | Maintain a terminology glossary |
| Ambiguous source text | Produces inaccurate translations | Improve source content |
| Outdated translations | Creates inconsistencies with the product | Track source changes |
| Text embedded in images | Increases localization effort | Keep text editable |
| Unadapted regional formats | Causes misunderstandings | Apply locale-specific conventions |
| Excessive text expansion | Breaks page layouts | Design flexible layouts |
| Translation without technical review | Introduces technical errors | Include technical reviewers |

## 9. Improve the Localization Workflow

Localization should be integrated into the documentation development lifecycle.

Useful improvements include:

- Establish clear ownership for source and translated content.
- Define terminology and style standards.
- Use translation memory where appropriate.
- Automate change detection.
- Track translation status.
- Include localization checks in release workflows.
- Review localized content whenever product behavior changes.

For frequently updated documentation, automation can help identify changed pages and reduce manual tracking.

## Conclusion

Internationalization and localization are essential for delivering technical documentation to a global audience.

Internationalization prepares content and systems for multiple languages and regions, while localization adapts documentation to the needs of specific audiences.

By establishing clear source-writing standards, managing terminology, controlling translation updates, and performing technical and linguistic quality assurance, teams can maintain accurate and consistent documentation across languages.

## Related Topics

- [Writing Fundamentals](./writing-fundamentals)
- [Information Architecture for Technical Documentation](./information-architecture)
- [Visual Communication in Technical Documentation](./visual-communication)
- [Docs-as-Code](../../documentation-engineering/learn/docs-as-code.md)
