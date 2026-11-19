import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function Portfolio(): JSX.Element {
  return (
    <Layout
      title="Portfolio"
      description="Selected projects, experiments, and case studies."
    >
      <main className="container margin-vert--lg">
        <p className="eyebrow">SELECTED WORK</p>

        <Heading as="h1">Portfolio</Heading>

        <p>
          Practical projects and case studies demonstrating technical
          communication, documentation engineering, and applied AI skills.
        </p>

        <p>
          Project status is stated explicitly. Planned projects are concepts,
          not completed deliverables.
        </p>

        <hr />

        {/* Project 1 */}
        <Heading as="h2">
          1. Modular User Guide PDF Exporter
        </Heading>

        <span className="badge badge--warning">
          In Progress
        </span>

        <p>
          <strong>Goal:</strong> Create a repeatable workflow to export
          modular online product documentation into a structured PDF manual.
        </p>

        <p><strong>Tools and technologies:</strong></p>

        <ul>
          <li>Python for workflow orchestration.</li>
          <li>Playwright for browser automation.</li>
          <li>Chromium for rendering web content.</li>
          <li>pypdf for PDF assembly and page-level operations.</li>
        </ul>

        <p><strong>Skills demonstrated:</strong></p>

        <ul>
          <li>Python scripting</li>
          <li>Browser automation</li>
          <li>HTML inspection</li>
          <li>PDF processing</li>
          <li>Debugging and workflow design</li>
        </ul>

        <Link to="/learn/projects-case-studies/pdf-exporter">
          Read Project Details →
        </Link>

        <hr />

        {/* Project 2 */}
        <Heading as="h2">
          2. Technical Documentation Redesign
        </Heading>

        <span className="badge badge--info">
          Case Study
        </span>

        <p>
          <strong>Goal:</strong> Evaluate a technical documentation
          experience and propose improvements that help users complete
          common tasks.
        </p>

        <p><strong>Review dimensions:</strong></p>

        <ul>
          <li>Information architecture and navigation.</li>
          <li>Task flow, prerequisites, and step sequence.</li>
          <li>Terminology consistency and sentence clarity.</li>
          <li>Visual hierarchy, tables, warnings, and troubleshooting.</li>
          <li>Mobile readability and findability.</li>
        </ul>

        <p>
          <strong>Expected output:</strong> A documented review with
          prioritized issues, before-and-after examples, and recommendations.
        </p>

        <Link to="/doc-reviews">
          Explore Documentation Reviews →
        </Link>

        <hr />

        {/* Project 3 */}
        <Heading as="h2">
          3. AI Documentation Assistant
        </Heading>

        <span className="badge badge--secondary">
          Planned
        </span>

        <p>
          <strong>Goal:</strong> Prototype an assistant that answers
          questions using a curated documentation knowledge base and
          provides traceable source references.
        </p>

        <p><strong>Potential technology stack:</strong></p>

        <ul>
          <li>Python</li>
          <li>LLM API</li>
          <li>Embeddings</li>
          <li>Vector retrieval</li>
          <li>Lightweight web interface</li>
        </ul>

        <p><strong>Evaluation focus:</strong></p>

        <ul>
          <li>Retrieval relevance and source coverage.</li>
          <li>Answer accuracy and citation quality.</li>
          <li>Handling missing or conflicting information.</li>
          <li>Practical usefulness for documentation search and QA.</li>
        </ul>

        <Link to="/learn/projects-case-studies/ai-documentation-assistant">
          Read Project Plan →
        </Link>

        <hr />

        <Heading as="h2">Future Experiments</Heading>

        <ul>
          <li>Documentation quality checklist and automated review.</li>
          <li>Technical terminology and consistency checker.</li>
          <li>AI-assisted knowledge extraction from product manuals.</li>
          <li>Small tools that reduce repetitive documentation work.</li>
        </ul>

      </main>
    </Layout>
  );
}