import Root from '@theme/Root';
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from '../css/module.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>
          
          {/* LEFT CONTENT */}
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              {siteConfig.title}
            </h1>

            <p className={styles.subtitle}>
              In this book, <strong>Abdullah Ikhlaq</strong> explores the convergence of <strong>digital intelligence</strong> and <strong>physical robotic systems,</strong> taking readers from theory all the way to deployment.
            </p>

            <div className={styles.ctaRow}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro">
                📘 Start Reading
              </Link>

              <Link
                className="button button--outline button--lg"
                to="/docs/glossary">
                📑 Glossary
              </Link>
            </div>

           
          </div>


        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Root> 
      <Layout
        title="Physical AI & Humanoid Robotics"
        description="A practical guide to bridging AI with real-world robotic systems">
        <HomepageHeader />
      </Layout>
    </Root>
  );
}
