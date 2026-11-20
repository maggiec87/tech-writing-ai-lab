import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const focusAreas = [
  {
    number: '01',
    title: 'Technical Writing',
    description:
      'User-centered documentation, information architecture, content design, and clear technical communication.',
    link: '/learn/technical-writing/learn/overview',
  },
  {
    number: '02',
    title: 'Documentation Engineering',
    description:
      'Docs-as-code workflows, static documentation sites, automation, version control, and publishing.',
    link: '/learn/documentation-engineering/overview',
  },
  {
    number: '03',
    title: 'AI & Automation',
    description:
      'LLMs, prompt design, RAG, AI agents, and practical ways to improve knowledge work.',
    link: '/learn/ai-automation/overview',
  },
];

const projects = [
  {
    status: 'In Progress',
    title: 'Modular User Guide PDF Exporter',
    description:
      'A Python-based workflow for exporting modular online product guides into structured PDF manuals.',
    stack: 'Python · Playwright · pypdf',
    link: '/learn/projects-case-studies/modular-user-guide-pdf-exporter',
  },
  {
    status: 'Case Study',
    title: 'Technical Documentation Redesign',
    description:
      'A practical case study on improving information architecture, navigation, and task-based content.',
    stack: 'Content Design · IA · UX Writing',
    link: '/learn/technical-writing/reviews/overview',
  },
  {
    status: 'Planned',
    title: 'AI Documentation Assistant',
    description:
      'An experimental assistant for searching documentation, explaining technical concepts, and supporting content QA.',
    stack: 'Python · LLM · RAG',
    link: '/learn/projects-case-studies/ai-documentation-assistant',
  },
];

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Technical Writing & AI"
      description="A practical learning and project portfolio at the intersection of technical writing, documentation engineering, and AI."
    >
      <main>
        {/* Hero */}
        <header className={styles.hero}>
          <div className="container">
            <p className={styles.eyebrow}>
              A PRACTICAL LEARNING & BUILDING SPACE
            </p>

            <Heading as="h1" className={styles.heroTitle}>
              Technical Writing <span>&</span> AI
            </Heading>

            <p className={styles.heroSubtitle}>
              Learn. Analyze. Build. Share.
            </p>

            <p className={styles.heroText}>
              Exploring how clear technical communication, documentation
              engineering, and AI can work together to make complex information
              easier to understand and use.
            </p>

            <div className={styles.actions}>
              <Link
                className="button button--primary button--lg"
                to="/learn/technical-writing/learn/overview"
              >
                Explore the Learning Hub
              </Link>

              <Link
                className="button button--outline button--secondary button--lg"
                to="/portfolio"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </header>

        {/* Focus Areas */}
        <section className={`container ${styles.section}`}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>WHAT I EXPLORE</p>
            <Heading as="h2">Areas of Focus</Heading>
            <p>
              Three connected areas, approached through practical learning
              and hands-on projects.
            </p>
          </div>

          <div className={styles.focusGrid}>
            {focusAreas.map((area) => (
              <article className={styles.focusCard} key={area.number}>
                <span className={styles.cardNumber}>
                  {area.number}
                </span>

                <Heading as="h3">{area.title}</Heading>

                <p>{area.description}</p>

                <Link to={area.link}>
                  Explore Topic →
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className={styles.projectSection}>
          <div className="container">
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>LEARNING BY BUILDING</p>
              <Heading as="h2">Projects & Case Studies</Heading>
              <p>
                Experiments and real-world work that turn concepts into
                demonstrable skills.
              </p>
            </div>

            <div className={styles.projectGrid}>
              {projects.map((project) => (
                <article
                  className={styles.projectCard}
                  key={project.title}
                >
                  <span className={styles.status}>
                    {project.status}
                  </span>

                  <Heading as="h3">{project.title}</Heading>

                  <p>{project.description}</p>

                  <p className={styles.stack}>
                    {project.stack}
                  </p>

                  <Link to={project.link}>
                    View Details →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Reviews */}
        <section className={`container ${styles.splitSection}`}>
          <div>
            <p className={styles.eyebrow}>THINK CRITICALLY</p>

            <Heading as="h2">
              Documentation Reviews
            </Heading>

            <p>
              Examine real documentation from the perspective of usability,
              structure, task completion, terminology, and content quality.
              Identify issues and propose evidence-based improvements.
            </p>

            <Link
              className="button button--outline button--secondary"
              to="/learn/technical-writing/reviews/overview"
            >
              Explore Doc Reviews
            </Link>
          </div>

          <div className={styles.quotePanel}>
            <span className={styles.quoteMark}>“</span>

            <p>
              Good documentation does more than describe a product.
              It helps people complete the task they came to do.
            </p>

            <span className={styles.quoteCaption}>
              A user-centered documentation principle
            </span>
          </div>
        </section>

        {/* About */}
        <section className={`container ${styles.aboutSection}`}>
          <p className={styles.eyebrow}>ABOUT THIS SPACE</p>

          <Heading as="h2">
            From documenting products to building better knowledge experiences.
          </Heading>

          <p>
            This site is a working knowledge base and professional portfolio.
            It records what I learn, what I build, how I evaluate tools and
            documentation, and how those experiences shape my next steps.
          </p>

          <Link to="/about">
            More About This Site →
          </Link>
        </section>
      </main>
    </Layout>
  );
}