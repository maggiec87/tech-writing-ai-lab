import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function Projects(): JSX.Element {
  return (
    <Layout
      title="Projects"
      description="Practical projects and technical experiments."
    >
      <main className="container margin-vert--lg">
        <p className="eyebrow">LEARNING BY BUILDING</p>

        <Heading as="h1">Projects & Case Studies</Heading>

        <p>
          A collection of practical experiments, tools, and case studies.
          Each project records the problem, approach, implementation,
          validation, and lessons learned.
        </p>

        <ul>
          <li>
            <Link to="/learn/documentation-engineering/projects/overview">
              Documentation Engineering Projects
            </Link>
          </li>

          <li>
            <Link to="/learn/ai-engineering/projects/overview">
              AI Engineering Projects
            </Link>
          </li>

          <li>
            <Link to="/learn/technical-writing/projects/overview">
              Technical Writing Projects
            </Link>
          </li>

          <li>
            <Link to="/learn/ai-product-ux/projects/overview">
              AI Product & UX Projects
            </Link>
          </li>
        </ul>

        <p>
          New projects will be added as they move from an idea to a tested
          implementation.
        </p>
      </main>
    </Layout>
  );
}