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
      'Technical communication, user documentation, information architecture, and content design. Study how leading companies create effective documentation and apply those insights to practical improvements.',
    link: '/learn/technical-writing/learn/overview',
  },
  {
    number: '02',
    title: 'Documentation Engineering',
    description:
      'The systems and engineering practices behind modern documentation: docs-as-code, content architecture, automation, testing, versioning, and publishing.',
    link: '/learn/documentation-engineering/learn/overview',
  },
  {
    number: '03',
    title: 'AI Engineering',
    description:
      'The technical foundations of AI applications, including LLMs, prompt engineering, RAG, AI agents, Python integration, testing, and evaluation.',
    link: '/learn/ai-engineering/learn/overview',
  },
  {
    number: '04',
    title: 'AI Product & UX',
    description:
      'AI product development and user experience: product discovery, user research, requirements, interaction design, usability evaluation, and responsible AI.',
    link: '/learn/ai-product-ux/learn/overview',
  },
];

const selectedWork = [
  {
    status: 'In Progress',
    title: 'Modular User Guide PDF Exporter',
    description:
      'A Python-based tool for exporting modular online product documentation into structured PDF manuals.',
    stack: 'Python · Playwright · pypdf',
    link: '/learn/documentation-engineering/projects/overview',
  },
  {
    status: 'Case Study',
    title: 'Stripe API Documentation',
    description:
      'An analysis of Stripe’s developer documentation, focusing on information architecture, API reference design, task-oriented guidance, and developer experience.',
    stack: 'API Documentation · Content Design · DX',
    link: '/learn/technical-writing/reviews/stripe-api-documentation-case-study',
  },
  {
    status: 'Planned',
    title: 'AI Documentation Assistant',
    description:
      'An experimental assistant for searching documentation, explaining technical concepts, and supporting content quality checks.',
    stack: 'Python · LLM · RAG',
    link: '/learn/ai-engineering/projects/overview',
  },
];

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Technical Writing & AI"
      description="A practical learning and project portfolio covering technical writing, documentation engineering, AI engineering, and AI product experience."
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
              Exploring how technical communication, documentation
              engineering, and artificial intelligence can make complex
              information and technology easier to understand, use, and build.
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
              Four connected disciplines explored through systematic learning,
              real-world case studies, and hands-on projects.
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

        {/* Selected Work */}
        <section className={styles.projectSection}>
          <div className="container">
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>PUTTING KNOWLEDGE INTO PRACTICE</p>
              <Heading as="h2">Selected Work</Heading>
              <p>
                Projects and case studies that demonstrate practical
                implementation, critical analysis, and continuous improvement.
              </p>
            </div>

            <div className={styles.projectGrid}>
              {selectedWork.map((item) => (
                <article
                  className={styles.projectCard}
                  key={item.title}
                >
                  <span className={styles.status}>
                    {item.status}
                  </span>

                  <Heading as="h3">{item.title}</Heading>

                  <p>{item.description}</p>

                  <p className={styles.stack}>
                    {item.stack}
                  </p>

                  <Link to={item.link}>
                    View Details →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className={`container ${styles.splitSection}`}>
          <div>
            <p className={styles.eyebrow}>LEARN FROM REAL-WORLD EXAMPLES</p>

            <Heading as="h2">
              Reviews & Case Studies
            </Heading>

            <p>
              Examine how companies design their products, documentation,
              engineering systems, and AI experiences. Analyze their
              approaches, identify strengths and limitations, extract
              transferable lessons, and explore opportunities for improvement.
            </p>

            <Link
              className="button button--outline button--secondary"
              to="/learn/technical-writing/reviews/stripe-api-documentation-case-study"
            >
              Explore Case Studies
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
            It brings together what I learn, the real-world examples I analyze,
            the solutions I build, and the lessons I gain from each experience.
          </p>

          <Link to="/about">
            More About This Site →
          </Link>
        </section>
      </main>
    </Layout>
  );
}