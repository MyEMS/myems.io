import React, { useRef, useEffect } from 'react';
import styles from './styles.module.css';

export default function ParticleBackground() {
  const svgRef = useRef(null);
  const particlesGroupRef = useRef(null);
  const connectionsGroupRef = useRef(null);
  const particlesRef = useRef([]);
  const animationIdRef = useRef(null);

  const generateParticles = () => {
    const particlesGroup = particlesGroupRef.current;
    if (!particlesGroup) return;

    particlesGroup.innerHTML = '';
    particlesRef.current = [];

    const totalParticles = 120;
    const darkParticleRatio = 0.25;

    for (let i = 0; i < totalParticles; i++) {
      const isDark = i < totalParticles * darkParticleRatio;
      const cx = Math.random() * 1440;
      const cy = Math.random() * 800;
      const r = isDark ? Math.random() * 1.5 + 1 : Math.random() * 1 + 1;
      const opacity = isDark ? 0.7 : 0.6;

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', cx);
      circle.setAttribute('cy', cy);
      circle.setAttribute('r', r);
      circle.setAttribute('fill', isDark ? 'var(--dark-particle-color)' : 'url(#particleGradient)');
      circle.setAttribute('opacity', opacity);
      circle.classList.add(isDark ? styles.darkParticle : styles.particle);
      circle.style.filter = isDark ? 'blur(0.5px)' : 'blur(0.3px)';

      // 添加动画
      const translateAnimate = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
      translateAnimate.setAttribute('attributeName', 'transform');
      translateAnimate.setAttribute('type', 'translate');
      translateAnimate.setAttribute('dur', `${isDark ? Math.random() * 10 + 15 : Math.random() * 8 + 12}s`);
      translateAnimate.setAttribute('repeatCount', 'indefinite');
      translateAnimate.setAttribute('values', '0 0; 5 -5; 0 0; -5 5; 0 0');
      translateAnimate.setAttribute('calcMode', 'spline');
      translateAnimate.setAttribute('keySplines', '0.42 0 0.58 1');
      circle.appendChild(translateAnimate);

      const rotateAnimate = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
      rotateAnimate.setAttribute('attributeName', 'transform');
      rotateAnimate.setAttribute('type', 'rotate');
      rotateAnimate.setAttribute('dur', `${isDark ? Math.random() * 8 + 14 : Math.random() * 6 + 10}s`);
      rotateAnimate.setAttribute('repeatCount', 'indefinite');
      rotateAnimate.setAttribute('values', '0; 5; 0; -5; 0');
      rotateAnimate.setAttribute('additive', 'sum');
      circle.appendChild(rotateAnimate);

      const opacityAnimate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
      opacityAnimate.setAttribute('attributeName', 'opacity');
      opacityAnimate.setAttribute('dur', `${isDark ? Math.random() * 8 + 14 : Math.random() * 6 + 10}s`);
      opacityAnimate.setAttribute('repeatCount', 'indefinite');
      opacityAnimate.setAttribute('values', `${opacity}; ${opacity * 1.2}; ${opacity}`);
      circle.appendChild(opacityAnimate);

      particlesGroup.appendChild(circle);

      particlesRef.current.push({
        element: circle,
        x: cx,
        y: cy,
        vx: (Math.random() - 0.5) * (isDark ? 0.3 : 0.4),
        vy: (Math.random() - 0.5) * (isDark ? 0.3 : 0.4),
        r: r,
        isDark: isDark,
        opacity: opacity,
      });
    }
  };

  const generateConnections = () => {
    const connectionsGroup = connectionsGroupRef.current;
    if (!connectionsGroup) return;

    connectionsGroup.innerHTML = '';

    const particles = particlesRef.current;
    // 增加最大连接距离以生成更多连接线
    const maxDistance = 180;
    // 增加最大连接数量以生成更多连接线
    const maxConnectionsPerParticle = 6;

    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      if (p1.isDark) continue;

      let connectionCount = 0;
      
      for (let j = i + 1; j < particles.length && connectionCount < maxConnectionsPerParticle; j++) {
        const p2 = particles[j];
        if (p2.isDark) continue;

        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('x1', p1.x);
          line.setAttribute('y1', p1.y);
          line.setAttribute('x2', p2.x);
          line.setAttribute('y2', p2.y);
          line.setAttribute('stroke', 'url(#connectionGradient)');
          // 增加线条基本宽度
          line.setAttribute('stroke-width', Math.max(0.5, 1.2 - distance / maxDistance));
          // 增加线条基本透明度
          line.setAttribute('stroke-opacity', Math.max(0.3, 0.7 - distance / (maxDistance * 2)));
          line.setAttribute('stroke-linecap', 'round');
          line.classList.add(styles.connectionLine);
          connectionsGroup.appendChild(line);
          
          connectionCount++;
        }
      }
    }
  };

  const updateParticles = () => {
    const particles = particlesRef.current;
    if (!particles.length) return;

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > 1440) particle.vx *= -1;
      if (particle.y < 0 || particle.y > 800) particle.vy *= -1;

      particle.element.setAttribute('cx', particle.x);
      particle.element.setAttribute('cy', particle.y);
    });

    generateConnections();
    animationIdRef.current = requestAnimationFrame(updateParticles);
  };

  useEffect(() => {
    generateParticles();
    updateParticles();

    return () => {
      cancelAnimationFrame(animationIdRef.current);
    };
  }, []);

  return (
    <div className={styles.particleBackground}>
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="particleGradient" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stopColor="var(--particle-gradient-primary)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--particle-gradient-secondary)" stopOpacity="0.2" />
          </radialGradient>
          
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--ifm-color-dark)" />
            <stop offset="100%" stopColor="var(--ifm-background-color)" />
          </linearGradient>
          
          {/* 高对比度连接线渐变 */}
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--connection-gradient-start)" />
            <stop offset="100%" stopColor="var(--connection-gradient-end)" />
          </linearGradient>
          
          {/* 连接线发光效果 - 增强对比度 */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
            <feColorMatrix in="blur" type="matrix" 
              values="1 0 0 0 0 
                      0 1 0 0 0 
                      0 0 1 0 0 
                      0 0 0 8 -3" result="glow" />
            <feBlend in="SourceGraphic" in2="glow" mode="screen" />
          </filter>
        </defs>

        <rect width="100%" height="100%" fill="url(#bgGradient)" />
        <g ref={connectionsGroupRef} filter="url(#glow)"></g>
        <g ref={particlesGroupRef}></g>
      </svg>
    </div>
  );
}