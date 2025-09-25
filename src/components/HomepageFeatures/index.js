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

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
