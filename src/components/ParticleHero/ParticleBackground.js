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
      const r = isDark ? Math.random() * 2 + 2.5 : Math.random() * 1.5 + 2;
      const opacity = isDark ? 0.85 : 0.8;

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', cx);
      circle.setAttribute('cy', cy);
      circle.setAttribute('r', r);
      circle.setAttribute('fill', isDark ? 'var(--dark-particle-color)' : 'url(#particleGradient)');
      circle.setAttribute('opacity', opacity);
      circle.classList.add(isDark ? styles.darkParticle : styles.particle);
      circle.style.filter = isDark ? 'blur(0.3px)' : 'blur(0.2px)';
      
      particlesGroup.appendChild(circle);

      const speed = Math.random() * 0.8 + 0.3;
      const angle = Math.random() * Math.PI * 2;
      const changeDirectionInterval = Math.random() * 3000 + 2000; 
      let lastDirectionChange = 0;

      particlesRef.current.push({
        element: circle,
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: r,
        isDark: isDark,
        opacity: opacity,
        speed: speed,
        angle: angle,
        changeDirectionInterval: changeDirectionInterval,
        lastDirectionChange: lastDirectionChange,
        targetX: cx + (Math.random() - 0.5) * 200,
        targetY: cy + (Math.random() - 0.5) * 200,
      });
    }
  };

  const generateConnections = () => {
    const connectionsGroup = connectionsGroupRef.current;
    if (!connectionsGroup) return;

    connectionsGroup.innerHTML = '';

    const particles = particlesRef.current;
    const maxDistance = 200;
    const maxConnectionsPerParticle = 8;
    const connectedPairs = new Map();

    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      if (p1.isDark) continue;

      let connectionCount = 0;
      const neighbors = [];
      
      for (let j = i + 1; j < particles.length && connectionCount < maxConnectionsPerParticle; j++) {
        const p2 = particles[j];
        if (p2.isDark) continue;

        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          neighbors.push({ particle: p2, distance, index: j });
        }
      }

      neighbors.sort((a, b) => a.distance - b.distance);

      for (const neighbor of neighbors.slice(0, maxConnectionsPerParticle)) {
        const p2 = neighbor.particle;
        const distance = neighbor.distance;
        const pairKey = `${Math.min(i, neighbor.index)}-${Math.max(i, neighbor.index)}`;

        if (!connectedPairs.has(pairKey)) {
          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('x1', p1.x);
          line.setAttribute('y1', p1.y);
          line.setAttribute('x2', p2.x);
          line.setAttribute('y2', p2.y);
          line.setAttribute('stroke', 'url(#connectionGradient)');
         
          line.setAttribute('stroke-width', Math.max(1, 2.5 - distance / maxDistance));
          line.setAttribute('stroke-opacity', Math.max(0.4, 0.85 - distance / (maxDistance * 1.5)));
          line.setAttribute('stroke-linecap', 'round');
          line.classList.add(styles.connectionLine);
          connectionsGroup.appendChild(line);
          connectedPairs.set(pairKey, true);
          connectionCount++;
        }
      }

      if (neighbors.length >= 2) {
        for (let k = 0; k < neighbors.length - 1; k++) {
          for (let l = k + 1; l < neighbors.length; l++) {
            const p2 = neighbors[k].particle;
            const p3 = neighbors[l].particle;
            const idx2 = neighbors[k].index;
            const idx3 = neighbors[l].index;
            const dx23 = p2.x - p3.x;
            const dy23 = p2.y - p3.y;
            const dist23 = Math.sqrt(dx23 * dx23 + dy23 * dy23);
            
            if (dist23 < maxDistance * 0.8) {
              const pairKey23 = `${Math.min(idx2, idx3)}-${Math.max(idx2, idx3)}`;
              if (!connectedPairs.has(pairKey23)) {
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', p2.x);
                line.setAttribute('y1', p2.y);
                line.setAttribute('x2', p3.x);
                line.setAttribute('y2', p3.y);
                line.setAttribute('stroke', 'url(#connectionGradient)');
                line.setAttribute('stroke-width', Math.max(0.8, 2 - dist23 / maxDistance));
                line.setAttribute('stroke-opacity', Math.max(0.35, 0.75 - dist23 / (maxDistance * 1.5)));
                line.setAttribute('stroke-linecap', 'round');
                line.classList.add(styles.connectionLine);
                connectionsGroup.appendChild(line);
                connectedPairs.set(pairKey23, true);
              }
            }
          }
        }
      }
    }
  };

  const updateParticles = () => {
    const particles = particlesRef.current;
    if (!particles.length) return;

    const currentTime = Date.now();

    particles.forEach((particle) => {
      if (currentTime - particle.lastDirectionChange > particle.changeDirectionInterval) {
        const newAngle = Math.random() * Math.PI * 2;
        const speedVariation = Math.random() * 0.5 + 0.5; 
        particle.vx = Math.cos(newAngle) * particle.speed * speedVariation;
        particle.vy = Math.sin(newAngle) * particle.speed * speedVariation;
        particle.lastDirectionChange = currentTime;
        particle.changeDirectionInterval = Math.random() * 3000 + 2000;
      
        particle.targetX = particle.x + (Math.random() - 0.5) * 300;
        particle.targetY = particle.y + (Math.random() - 0.5) * 300;
      }
      const dx = particle.targetX - particle.x;
      const dy = particle.targetY - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance > 0.1) {
        const randomFactor = 0.3;
        particle.vx += (dx / distance) * 0.02 + (Math.random() - 0.5) * randomFactor;
        particle.vy += (dy / distance) * 0.02 + (Math.random() - 0.5) * randomFactor;
      }

      const maxSpeed = 1.5;
      const currentSpeed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
      if (currentSpeed > maxSpeed) {
        particle.vx = (particle.vx / currentSpeed) * maxSpeed;
        particle.vy = (particle.vy / currentSpeed) * maxSpeed;
      }

      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0) {
        particle.x = 0;
        particle.vx = Math.abs(particle.vx) * (0.7 + Math.random() * 0.3);
        particle.targetX = particle.x + Math.random() * 200;
      } else if (particle.x > 1440) {
        particle.x = 1440;
        particle.vx = -Math.abs(particle.vx) * (0.7 + Math.random() * 0.3);
        particle.targetX = particle.x - Math.random() * 200;
      }

      if (particle.y < 0) {
        particle.y = 0;
        particle.vy = Math.abs(particle.vy) * (0.7 + Math.random() * 0.3);
        particle.targetY = particle.y + Math.random() * 200;
      } else if (particle.y > 800) {
        particle.y = 800;
        particle.vy = -Math.abs(particle.vy) * (0.7 + Math.random() * 0.3);
        particle.targetY = particle.y - Math.random() * 200;
      }

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
          
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--connection-gradient-start)" />
            <stop offset="100%" stopColor="var(--connection-gradient-end)" />
          </linearGradient>
          
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

        <rect width="100%" height="100%" fill="transparent" />
        <g ref={connectionsGroupRef} filter="url(#glow)"></g>
        <g ref={particlesGroupRef}></g>
      </svg>
    </div>
  );
}