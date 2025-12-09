import React, { useRef, useEffect } from 'react';
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
  const titleRef = useRef(null);
  const particleBackgroundRef = useRef(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    if (!titleElement) return;

    const handleMouseEnter = () => {
      if (particleBackgroundRef.current) {
        particleBackgroundRef.current.startTextFormation(titleElement);
      }
    };

    const handleMouseLeave = () => {
      if (particleBackgroundRef.current) {
        particleBackgroundRef.current.stopTextFormation();
      }
    };

    titleElement.addEventListener('mouseenter', handleMouseEnter);
    titleElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      titleElement.removeEventListener('mouseenter', handleMouseEnter);
      titleElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className={styles.container}>
      <ParticleBackground ref={particleBackgroundRef} />
      <div className={styles.heroContent}>
        <h1 
          ref={titleRef}
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