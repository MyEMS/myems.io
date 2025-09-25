import React from 'react';
import Link from '@docusaurus/Link';
import ParticleBackground from './ParticleBackground';
import styles from './styles.module.css';

export default function ParticleHero({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) {
  return (
    <div className={styles.container}>
      <ParticleBackground />
      <div className={styles.heroContent}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.buttons}>
          {primaryButtonText && primaryButtonLink && (
            <Link
              className={styles.primaryButton}
              to={primaryButtonLink}>
              {primaryButtonText}
            </Link>
          )}
          {secondaryButtonText && secondaryButtonLink && (
            <Link
              className={styles.secondaryButton}
              to={secondaryButtonLink}>
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}