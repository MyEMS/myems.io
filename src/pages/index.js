import React from 'react';
import Translate from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import ParticleHero from '@site/src/components/ParticleHero'; 
import HomepageFeatures from '@site/src/components/HomepageFeatures'; 
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="MyEMS - 能源管理系统"
      description="行业领先的开源能源管理系统 | Industry Leading Open Source Energy Management System">
      
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
      
      <main>
        <HomepageFeatures />
        
        <section className={styles.usersSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              <Translate>Who's Using MyEMS</Translate>
            </h2>
            <div className={styles.userLogos}>
              <div className={styles.userLogo}>
                <div className={styles.logoIcon}>🏭</div>
                <span><Translate>Industrial Park</Translate></span>
              </div>
              <div className={styles.userLogo}>
                <div className={styles.logoIcon}>🏢</div>
                <span><Translate>Commercial Building</Translate></span>
              </div>
              <div className={styles.userLogo}>
                <div className={styles.logoIcon}>🏭</div>
                <span><Translate>Manufacturing</Translate></span>
              </div>
              <div className={styles.userLogo}>
                <div className={styles.logoIcon}>🏥</div>
                <span><Translate>Hospital</Translate></span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}