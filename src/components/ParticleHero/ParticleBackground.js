import React, { useCallback } from 'react';
import Particles from '@tsparticles/react'; // 改为新包名
import { loadFull } from 'tsparticles'; // 导入方式改变
import styles from './styles.module.css';

export default function ParticleBackground() {
  // 初始化函数使用 loadFull
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // 使用新方法
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className={styles.particleBackground}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#ff0000", // 临时改为红色（确保可见）
          },
          links: {
            color: "#69c0ff",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1.2,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true,
            straight: false,
            outMode: "out",
          },
          number: {
            value: 70,
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: {
            value: 1, // 临时改为完全不透明
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
        detectRetina: true,
        interactivity: {
          detectsOn: "window",
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
              distance: 140,
              links: {
                opacity: 0.6,
              },
            },
            push: {
              quantity: 3,
            },
          },
        },
      }}
    />
  );
}