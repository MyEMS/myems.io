import React from 'react';
import styles from './styles.module.css';
import ParticleBackground from './ParticleBackground';

const ParticleHero = ({ 
  title, 
  subtitle, 
  primaryButtonText, 
  primaryButtonLink, 
  secondaryButtonText, 
  secondaryButtonLink,
}) => {
  return (
    <div className={styles.container}>
      <ParticleBackground />
      <div className={styles.heroContent}>
        <h1 
          className={styles.title} 
          data-text={title}
        >
          {title}
        </h1>
        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.buttons}>
          <a href={primaryButtonLink} className={styles.primaryButton}>
            {primaryButtonText}
          </a>
          <a href={secondaryButtonLink} className={styles.secondaryButton}>
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ParticleHero;