import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function DocReviews(): JSX.Element {
  return (
    <Layout
      title="Documentation Reviews"
      description="Reviews and analysis of technical documentation."
    >
      <main className="container margin-vert--lg">
        <p className="eyebrow">DOCUMENTATION QUALITY & UX</p>

        <Heading as="h1">Documentation Reviews</Heading>

        <p>
          Evaluate documentation from the user's perspective:
          Can readers find the right information, understand it,
          and successfully complete their tasks?
        </p>

        <Heading as="h2">Review Framework</Heading>

        <ol>
          <li>
            <strong>Audience and Task:</strong> Who is the reader,
            and what are they trying to do?
          </li>

          <li>
            <strong>Findability:</strong> Can users locate the right
            information quickly?
          </li>

          <li>
            <strong>Structure:</strong> Are prerequisites, steps,
            results, and exceptions organized logically?
          </li>

          <li>
            <strong>Clarity:</strong> Are language, terminology,
            and labels precise and consistent?
          </li>

          <li>
            <strong>Usability:</strong> Can users follow the instructions
            without unnecessary assumptions?
          </li>

          <li>
            <strong>Presentation:</strong> Are tables, screenshots,
            warnings, and responsive layouts effective?
          </li>
        </ol>

        <Heading as="h2">Review Checklist</Heading>

        <ul>
          <li>Is the intended audience clear?</li>
          <li>Does the page answer a real user question?</li>
          <li>Are prerequisites stated before procedures?</li>
          <li>Are steps presented in the correct order?</li>
          <li>Are UI labels and technical terms consistent?</li>
          <li>Are expected results and recovery steps included?</li>
          <li>Can the content be scanned on desktop and mobile?</li>
        </ul>

        <Heading as="h2">Reviews</Heading>

        <p>
          Individual documentation reviews and case studies will be
          collected here.
        </p>

        <Link to="/learn/doc-reviews/review-framework">
          Read the Review Framework →
        </Link>
      </main>
    </Layout>
  );
}