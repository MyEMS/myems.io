import React from 'react';
import Translate from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import ParticleHero from '@site/src/components/ParticleHero';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import CloudIcon from '@site/static/img/cloud-icon.svg';
import SpeedIcon from '@site/static/img/speed-icon.svg';
import StreamIcon from '@site/static/img/stream-icon.svg';
import SecurityIcon from '@site/static/img/security-icon.svg';
import EcoIcon from '@site/static/img/eco-icon.svg';
import SimpleIcon from '@site/static/img/simple-icon.svg';

export default function Home() {
  return (
    <Layout
      title="MyEMS - 能源管理系统"
      description="行业领先的开源能源管理系统 | Industry Leading Open Source Energy Management System">

      <div className={styles.heroContainer}>
        <ParticleHero
          title="MyEMS"
          subtitle={(
            <div className={styles.heroSubtitle}>
              <p><Translate>Industry Leading Open Source Energy Management System</Translate></p>
              <p><Translate>Nearly a thousand project cases</Translate></p>
              <p><Translate>Commitment to permanent open source</Translate></p>
              <p><Translate>Free technical support within QQ and WeChat groups</Translate></p>
              <p><Translate>Keep updated, 1 minor version per month, 1 major version per year</Translate></p>
            </div>
          )}
          primaryButtonText={<Translate>MyEMS Introduction in 5min ⏱️</Translate>}
          primaryButtonLink="/docs/intro"
          secondaryButtonText={<Translate>Get Started</Translate>}
          secondaryButtonLink="/docs/category/installation"
        />
      </div>

      <main>
        <HomepageFeatures />
        <section className={styles.featuresSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <Translate>Core Features</Translate>
            </h2>
            <div className={styles.featuresContainer}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <CloudIcon className={styles.svgIcon} />
                </div>
                <h3 className={styles.featureTitle}><Translate>Multi-Energy Data Collection</Translate></h3>
                <p className={styles.featureDesc}>
                  <Translate>Supports real-time data collection and analysis of electricity, water, gas, cooling, and heating energy types</Translate>
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <SpeedIcon className={styles.svgIcon} />
                </div>
                <h3 className={styles.featureTitle}><Translate>Real-Time Monitoring & Analysis</Translate></h3>
                <p className={styles.featureDesc}>
                  <Translate>Real-time energy monitoring, historical data analysis, and comprehensive energy reports for informed decision-making</Translate>
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <StreamIcon className={styles.svgIcon} />
                </div>
                <h3 className={styles.featureTitle}><Translate>Carbon Emission Management</Translate></h3>
                <p className={styles.featureDesc}>
                  <Translate>Track and report carbon emissions, support carbon peak and carbon neutrality goals with ISO 50001 compliance</Translate>
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <SecurityIcon className={styles.svgIcon} />
                </div>
                <h3 className={styles.featureTitle}><Translate>Multi-Scenario Application</Translate></h3>
                <p className={styles.featureDesc}>
                  <Translate>Suitable for buildings, factories, shopping malls, hospitals, parks, and various enterprise zones</Translate>
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <SimpleIcon className={styles.svgIcon} />
                </div>
                <h3 className={styles.featureTitle}><Translate>Open Source & Extensible</Translate></h3>
                <p className={styles.featureDesc}>
                  <Translate>MIT licensed open source system, supports multiple databases and cloud platforms, highly extensible architecture</Translate>
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <EcoIcon className={styles.svgIcon} />
                </div>
                <h3 className={styles.featureTitle}><Translate>Intelligent Reports & Visualization</Translate></h3>
                <p className={styles.featureDesc}>
                  <Translate>Rich reporting features, data visualization dashboards, and Excel export capabilities for comprehensive energy insights</Translate>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}