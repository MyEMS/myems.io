import React from 'react';
import Translate from '@docusaurus/Translate';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle"><Translate>Industry Leading Open Source Energy Management System</Translate></p>
        <h3><Translate>Nearly a thousand project cases</Translate></h3>
        <h3><Translate>Commitment to permanent open source</Translate></h3>
        <h3><Translate>Free technical support within QQ and WeChat groups</Translate></h3>
        <h3><Translate>Keep updated, 1 minor version per month, 1 major version per year</Translate></h3>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            <Translate>MyEMS Introduction in 5min ⏱️</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} 能源管理系统 Energy Management System`}
      description="行业领先的开源能源管理系统 Industry Leading Open Source Energy Management System">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
