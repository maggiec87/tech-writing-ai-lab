import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function About(): JSX.Element {
  return (
    <Layout
      title="About"
      description="About the Technical Writing & AI Lab."
    >
      <main className="container margin-vert--lg">
        <p className="eyebrow">ABOUT THIS SPACE</p>

        <Heading as="h1">
          About the Technical Writing & AI Lab
        </Heading>

        <p>
          A personal learning space and professional portfolio at the
          intersection of technical writing, documentation engineering,
          and AI.
        </p>

        <hr />

        <Heading as="h2">Why I Created This Site</Heading>

        <p>
          Technical information is valuable only when people can find it,
          understand it, and use it.
        </p>

        <p>
          This site is a place to study how that happens and how better
          tools and AI workflows can support the process.
        </p>

        <p>It serves two purposes:</p>

        <ul>
          <li>
            <strong>A Learning Hub:</strong> Organize concepts, notes,
            experiments, and resources into a structured knowledge base.
          </li>

          <li>
            <strong>A Professional Portfolio:</strong> Demonstrate
            practical skills through projects, documentation reviews,
            and case studies.
          </li>
        </ul>

        <Heading as="h2">Areas I Am Exploring</Heading>

        <Heading as="h3">Technical Writing & Content Design</Heading>

        <p>
          User guides, task-oriented content, information architecture,
          terminology, troubleshooting, and usability.
        </p>

        <Heading as="h3">Documentation Engineering</Heading>

        <p>
          Docs-as-code, Git workflows, static-site generators, reusable
          content, automated builds, and publishing.
        </p>

        <Heading as="h3">AI & Automation</Heading>

        <p>
          LLM fundamentals, prompt design, retrieval-augmented generation,
          AI agents, evaluation, and practical AI-assisted workflows.
        </p>

        <Heading as="h2">Working Principles</Heading>

        <ul>
          <li>Start with the user's task and the problem to solve.</li>
          <li>Prefer clear structure and plain language.</li>
          <li>Verify technical accuracy.</li>
          <li>Learn by building, testing, reviewing, and iterating.</li>
          <li>Share useful findings and make the work reproducible.</li>
        </ul>

        <Heading as="h2">How to Use This Site</Heading>

        <p>
          Browse Learn for structured notes, Doc Reviews for documentation
          analysis, Projects for hands-on work, and Insights for shorter
          observations and experiments.
        </p>
      </main>
    </Layout>
  );
}