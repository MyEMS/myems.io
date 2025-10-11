import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import styles from './styles.module.css';

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className={styles.particleBackground}
      options={{
        background: { 
          color: { 
            value: "transparent" 
          },
        },
        fpsLimit: 60,
        particles: {
          color: { 
            value: "#e0e0e0" 
          },
          links: {
            enable: true,
            color: "#69c0ff",
            distance: 120, 
            opacity: 0.4,
            width: 1, 
          },
          move: {
            enable: true,
            speed: 0.6, 
            direction: 'none',
            random: true,
            outMode: 'out',
          },
          number: {
            value: 200, 
            density: {
              enable: true,
              area: 700, 
            },
          },
          opacity: {
            value: 0.7, 
            random: true,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1.5, max: 3.5 }, 
            random: true,
          },
        },
        interactivity: {
          detectsOn: 'element', 
          element: '#myems-title', 
          events: {
            onHover: {
              enable: true,
              mode: "grab", 
            },
            onClick: {
              enable: true,
              mode: "push", 
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 150, 
              links: {
                opacity: 0.6,
              },
            },
            push: {
              quantity: 3, 
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}