import React from 'react';
import Translate from '@docusaurus/Translate';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: <Translate>Easy to Use</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <Translate>MyEMS is being developed and maintained by an experienced development team, and the system's source code is published under MIT license.</Translate>
      </>
    ),
  },
  {
    title: <Translate>Focus on Energy</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <Translate>MyEMS is used for collecting, processing, analyzing, reporting and displaying energy data of buildings, factories, shopping malls, data centers and enterprise zones.</Translate>
      </>
    ),
  },
  {
    title: <Translate>Powered by Top Tech Stacks</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <Translate>MyEMS is based on Python and ReactJS. Using open source to help achieve carbon peak carbon neutrality goals.</Translate>
      </>
    ),
  },
];

// 关键修改：移除col col--4类，只用自定义featureCard类
function Feature({ Svg, title, description }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureSvgContainer}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className={styles.featureContent}>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

// 关键修改：移除row类，只用自定义featuresRow类
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <h2 className={styles.featuresTitle}>
            <Translate>Core Features and Advantages</Translate>
          </h2>
        </div>
        
        <div className={styles.featuresRow}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}