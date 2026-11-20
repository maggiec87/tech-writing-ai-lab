

# DITA and Topic-Based Docs

## 1. Introduction

DITA (Darwin Information Typing Architecture) is an XML-based standard for creating, organizing, reusing, and publishing structured content.

It was designed to support topic-based authoring, where information is divided into self-contained topics rather than maintained only as long, linear documents.

DITA is particularly useful for organizations that manage large volumes of technical content across multiple products, versions, languages, and publication formats.

It provides a structured approach to:

- Creating standardized content topics.
- Separating content from presentation.
- Reusing information across publications.
- Assembling topics into different documentation outputs.
- Managing product-specific and conditional content.
- Supporting automated publishing workflows.

DITA is not a documentation website framework. It is a content architecture and authoring standard that can be used with compatible authoring and publishing tools.

## 2. Understanding Topic-Based Authoring

Topic-based authoring organizes documentation into independent units of information called topics.

Each topic focuses on a specific subject, task, or reference area.

Instead of writing a complete manual as one large document, authors create individual topics that can be linked, reused, and assembled into different publications.

For example:

```text
topics/
├── concepts/
│   ├── wireless-network.xml
│   └── router-modes.xml
├── tasks/
│   ├── configure-wifi.xml
│   └── update-firmware.xml
└── references/
    ├── led-indicators.xml
    └── technical-specifications.xml
```

This approach provides several advantages:

- Topics can be maintained independently.
- Content can be reused across publications.
- Different documentation outputs can share the same source topics.
- Changes can be made without rewriting complete documents.
- Content can be assembled according to audience or product requirements.

A good topic should have a clear purpose and provide enough information to be understood in its intended context.

## 3. DITA Topic Types

DITA defines standard topic types that help authors organize content according to its purpose.

The three fundamental topic types are Concept, Task, and Reference.

### 3.1 Concept

A Concept topic explains what something is or how it works.

It is commonly used for:

- Product introductions
- Feature explanations
- Technical concepts
- System architecture descriptions
- Background information

Example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE concept PUBLIC
  "-//OASIS//DTD DITA Concept//EN"
  "concept.dtd">
<concept id="wireless-network">
  <title>Wireless Network</title>
  <conbody>
    <p>
      A wireless network allows devices to connect
      to a network without using physical cables.
    </p>
  </conbody>
</concept>
```

### 3.2 Task

A Task topic explains how to complete an activity.

It is commonly used for:

- Installation procedures
- Configuration instructions
- Maintenance operations
- Troubleshooting procedures

A typical task contains:

- A title
- A short description
- Prerequisites or context
- Required steps
- Expected results

Example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE task PUBLIC
  "-//OASIS//DTD DITA Task//EN"
  "task.dtd">
<task id="configure-wifi">
  <title>Configure Wi-Fi</title>
  <taskbody>
    <context>
      Connect to the router's management interface.
    </context>
    <steps>
      <step>
        <cmd>Open the Wireless Settings page.</cmd>
      </step>
      <step>
        <cmd>Enter the network name and password.</cmd>
      </step>
      <step>
        <cmd>Save the configuration.</cmd>
      </step>
    </steps>
  </taskbody>
</task>
```

### 3.3 Reference

A Reference topic provides factual or structured information that users may need to look up.

It is commonly used for:

- Technical specifications
- Configuration parameters
- Command references
- Port descriptions
- LED indicators
- Supported features

Example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE reference PUBLIC
  "-//OASIS//DTD DITA Reference//EN"
  "reference.dtd">
<reference id="led-indicators">
  <title>LED Indicators</title>
  <refbody>
    <section>
      <title>System LED</title>
      <p>
        Indicates the operating status of the device.
      </p>
    </section>
  </refbody>
</reference>
```

These three topic types provide a foundation for organizing technical information.

DITA also supports specialized topic types and domain-specific structures for more complex documentation requirements.

## 4. DITA Maps and Content Assembly

DITA Maps define how topics are organized and assembled into a publication.

A map references individual topics and establishes their hierarchy and relationships.

For example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE map PUBLIC
  "-//OASIS//DTD DITA Map//EN"
  "map.dtd">
<map>
  <title>Router User Guide</title>

  <topicref href="topics/concepts/wireless-network.xml"/>
  <topicref href="topics/tasks/configure-wifi.xml"/>
  <topicref href="topics/references/led-indicators.xml"/>

</map>
```

The map does not need to contain the full topic content. It references the source topics and defines how they are assembled.

A DITA Map can be used to produce different publications from shared topics.

For example:

```text
Shared Topics
      |
      v
  DITA Topics
      |
      v
    DITA Maps
      |
      +------------------+
      |                  |
      v                  v
User Guide         Quick Start Guide
      |                  |
      v                  v
   PDF / HTML        PDF / HTML
```

A product family may use a shared topic library while maintaining separate maps for individual models.

This makes it possible to produce different documentation sets without duplicating all source content.

## 5. Content Reuse in DITA

DITA provides structured mechanisms for reusing content.

### 5.1 Content References

The `conref` mechanism allows an element to reference content from another DITA topic.

Instead of copying the same information into multiple topics, authors maintain the source content in one location and reference it where needed.

For example, a standard warning may be maintained in a shared topic and reused in multiple procedures.

When the shared source content changes, the referencing content can reflect the updated information during processing.

### 5.2 Key-Based References

DITA keys provide an indirect way to reference topics or other resources.

Instead of hardcoding a specific file path everywhere, authors can define a key in a map and use that key in topics.

This makes it easier to change a target resource without editing every reference.

Keys are particularly useful when the same content is published in different contexts or when product-specific references need to be resolved during publication.

### 5.3 Reuse Considerations

Content reuse should follow clear rules.

Teams should consider:

- Whether the reused content has the same meaning in every context.
- Whether the content is compatible with the target product and version.
- Whether dependencies are easy to identify.
- Whether changes to shared content require additional review.
- Whether reused content needs localization updates.

DITA provides reuse mechanisms, but it does not remove the need for content ownership and dependency management.

## 6. Conditional Processing and Filtering

Documentation often needs to support different products, audiences, platforms, or software versions.

DITA supports conditional processing through metadata attributes and filtering rules.

For example, content can be marked for specific product models:

```xml
<p product="model-a">
  This model includes two Ethernet ports.
</p>

<p product="model-b">
  This model includes four Ethernet ports.
</p>
```

A publishing configuration can use filtering rules to include the relevant content for a particular output.

Common filtering dimensions include:

- Product
- Audience
- Platform
- Software version
- Region
- Publication type

DITA-OT uses filtering configuration such as DITAVAL files to control which conditional content is included or excluded during processing.

Conditional processing is useful for product families with shared functionality and controlled differences.

However, excessive conditions can make content difficult to maintain. If two topics have substantially different purposes or procedures, separate topics may be more appropriate.

## 7. DITA Publishing Workflow

DITA source content must be processed before it can be published in formats such as HTML or PDF.

A typical workflow includes:

1. Authors create or update DITA topics.
2. Topics are organized through DITA Maps.
3. Content references and keys are resolved.
4. Conditional processing rules are applied.
5. The publishing engine transforms the source content.
6. The output is validated and reviewed.
7. The final publication is delivered.

### DITA Open Toolkit

DITA Open Toolkit (DITA-OT) is an open-source publishing engine for processing DITA content.

It supports several output formats, including HTML and PDF, through available transformation plugins and publishing configurations.

A basic command-line example is:

```bash
dita --input=maps/user-guide.ditamap --format=html5
```

To generate PDF output:

```bash
dita --input=maps/user-guide.ditamap --format=pdf
```

The exact output options and configuration depend on the installed DITA-OT version and plugins.

A typical project may organize its source files as follows:

```text
dita-project/
├── maps/
│   └── user-guide.ditamap
├── topics/
│   ├── concepts/
│   ├── tasks/
│   └── references/
├── images/
├── filters/
│   └── model-a.ditaval
└── README.md
```

DITA-OT can be integrated into automated build pipelines to generate documentation whenever source content changes.

## 8. DITA vs. Markdown

Markdown and DITA serve different documentation needs.

| Aspect | Markdown | DITA |
|---|---|---|
| Content format | Lightweight markup | XML-based structured markup |
| Authoring complexity | Relatively simple | More formal and structured |
| Content model | Usually project-defined | Standardized topic structures |
| Reuse | Depends on framework or tooling | Built-in structured reuse mechanisms |
| Content validation | Linting and custom rules | XML validation and DITA rules |
| Content assembly | Depends on the documentation toolchain | DITA Maps |
| Conditional processing | Usually requires additional tooling | Supported through conditional attributes and filtering |
| Publishing | Depends on the framework | Supported through DITA publishing tools |
| Typical use | Websites, project documentation, developer documentation | Large-scale structured technical content |

Markdown is often a practical choice for documentation projects that prioritize simplicity, Git-based collaboration, and lightweight publishing.

DITA is more suitable when organizations need formal content structures, extensive reuse, conditional publishing, and large-scale content management.

Neither format is universally better. The choice depends on content complexity, team capabilities, publishing requirements, and long-term maintenance needs.

## 9. When to Use DITA

DITA is worth considering when:

- Documentation covers many products or product variants.
- Content is reused extensively across publications.
- Multiple output formats are required.
- Content must follow formal structural rules.
- Documentation is maintained by multiple teams.
- Conditional publishing is a major requirement.
- Localization and version management are complex.

For small documentation websites, introducing DITA may add unnecessary complexity.

For large documentation environments, its structured content model and publishing mechanisms can provide significant benefits.

## 10. Best Practices

- Define topic types and authoring rules before creating large amounts of content.
- Keep each topic focused on a clear information purpose.
- Use DITA Maps to organize publication structure.
- Reuse content only when it is semantically appropriate.
- Use keys to manage references that may change across publications.
- Keep conditional processing rules understandable.
- Validate DITA source files before publishing.
- Automate publishing through a repeatable build process.
- Establish ownership and change management rules for shared topics.
- Train authors to understand both the content model and the publishing workflow.

## 11. Key Takeaways

DITA provides a structured approach to creating, organizing, reusing, and publishing technical documentation.

Its topic-based model separates content into reusable units, while DITA Maps define how those units are assembled into publications.

Content references, keys, and conditional processing support reuse and product-specific documentation.

DITA is particularly valuable for large documentation environments that require formal content structures and multiple publishing outputs.

However, its benefits depend on a well-designed content model, suitable tooling, and disciplined content management practices.