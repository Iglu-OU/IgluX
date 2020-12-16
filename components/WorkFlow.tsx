import React from 'react';

import { Iceberg } from './images/Iceberg';
import { Waves } from './images/Waves';
import { WavesBG } from './images/WavesBG';
import { WavesBottom } from './images/WavesBottom';
import { WavesTop } from './images/WavesTop';

export const WorkFlow: React.FC = () => {
  React.useEffect(() => {
    getContentPlacement();
    window.addEventListener('resize', getContentPlacement);
    return () => {
      window.removeEventListener('resize', getContentPlacement);
    };
  });

  React.useEffect(() => {
    animate();
  }, []);

  const getContentPlacement = () => {
    // Calculate px's between water-ice-top and work-flow-section
    const waterIce = document.getElementById('water-ice');
    const workFlowSection = document.getElementById('process');

    const waterIceTop = waterIce ? waterIce.getBoundingClientRect().top : 0;
    const workFlowSectionTop = workFlowSection ? workFlowSection.getBoundingClientRect().top : 0;

    // Add content new top.
    const contentNewTop = waterIceTop - workFlowSectionTop - 20;
    const content = document.getElementById('work-flow__content');
    if (content) {
      content.style.top = `${contentNewTop}px`;
    }
  };

  const animate = () => {
    animateWaves();
    animateIceberg();
  };

  const animateIceberg = () => {
    const iceberg = document.querySelector('.work-flow__iceberg');
    const icebergAnimation = {
      transform: ['translateY(-1.5%)', 'translateY(-0%)', 'translateY(-1.5%)'],
      easing: 'ease-in-out',
    };
    iceberg?.animate(icebergAnimation, {
      duration: 8000,
      iterations: Infinity,
    });
  };

  const animateWaves = () => {
    const waves = document.querySelector('.work-flow__waves');
    const wavesAnimation = {
      transform: ['rotateY(180deg) skewY(0.5deg)', 'rotateY(180deg) skewY(0deg)', 'rotateY(180deg) skewY(0.5deg)'],
      easing: 'ease-in-out',
    };
    waves?.animate(wavesAnimation, {
      duration: 4000,
      iterations: Infinity,
    });
  };

  return (
    <section className="transform-header__workflow" id="process">
      <div className="work-flow">
        <WavesBG />
        <Iceberg />
        <WavesTop />
        <Waves />
        <WavesBottom />
        <div id="work-flow__content" className="work-flow__content">
          <h1 className="text--white">How we work</h1>
          <dl>
            <dt className="text--white">Front-end Development</dt>
            <dd className="text--white">Coding, collaboration with back-end developers</dd>
            <dt className="text--white">Design</dt>
            <dd className="text--white stars-bottom">Typography, colors, documentation</dd>
            <dt className="text--white">Validation</dt>
            <dd className="text--white">User tests, iterations, analytics</dd>
            <dt className="text--white">Ideation</dt>
            <dd className="text--white">Low-fidelity, high-fidelity, clickable, HTML</dd>
            <dt className="text--white">Discovery</dt>
            <dd className="text--white">Interviews, data analysis, requirements</dd>
          </dl>
        </div>
      </div>
    </section>
  );
};
