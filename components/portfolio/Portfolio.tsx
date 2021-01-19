import React from 'react';

import BackgroundBottom from '../_images/Background-Bottom.svg';
import BackgroundTop from '../_images/Background-Top.svg';
import DietlessSVG from '../_images/Dietless.svg';
import EShowcaseSVG from '../_images/E-Showcase-Briefing.svg';
import ERBISVG from '../_images/ERBI.svg';
import Fitek from '../_images/Fitek.svg';
import Separator from '../_images/Separator.svg';
import Taltech from '../_images/Taltech.svg';
import { Stars } from '../stars/Stars';

interface IProject {
  name: string;
  description: string;
  image: React.ReactElement;
  award?: { text: string; link: string };
  project?: string;
  tags: string[];
}

export const ProjectList: IProject[] = [
  {
    name: 'Dietless',
    description: 'A tailor-made meal plan app as a  guide  towards good health and right fat percentage for Estonians',
    image: <DietlessSVG />,
    award: { text: 'Kuldmuna 2018', link: 'https://defol.io/kuldmuna/2018-erik-orgus-tailor-made-meal-plan-app' },
    project: 'https://www.erikorgu.ee',
    tags: ['Development', 'Angular', 'Cordova', 'User testing'],
  },
  {
    name: 'Estonian Responsible Business Index',
    description:
      'Responsible and caring companies creating a wholesome and healthy living environment. Nationally acclaimed assessment platform made with Estonian  enterprises.',
    image: <ERBISVG />,
    tags: ['User research', 'Prototype', 'User testing', 'Development', 'Design', 'Aurelia'],
  },
  {
    name: 'E-Showcase Briefing',
    description:
      'Inspiring global policy makers, political leaders, corporate executives, investors and international media with the success story of e-Estonia and build links to leading IT service providers',
    image: <EShowcaseSVG />,
    tags: ['Prototyping', 'UI analysis', 'Business analysis', 'User research'],
  },
  {
    name: 'Taltech',
    description:
      'Inspiring global policy makers, political leaders, corporate executives, investors and international media with the success story of e-Estonia and build links to leading IT service providers',
    image: <Taltech />,
    tags: ['Prototyping', 'UI analysis', 'Business analysis', 'User research'],
  },
  {
    name: 'Fitek',
    description:
      'Inspiring global policy makers, political leaders, corporate executives, investors and international media with the success story of e-Estonia and build links to leading IT service providers',
    image: <Fitek />,
    tags: ['Prototyping', 'UI analysis', 'Business analysis', 'User research'],
  },
];

export const Portfolio: React.FC = () => (
  <section className="portfolio">
    <BackgroundBottom />
    <BackgroundTop />
    <Stars id="portfolio-stars" maxStars={25} />
    <div className="portfolio-header" data-aos="zoom-in">
      <h1 className="portfolio-header__title">Portfolio</h1>
      <p className="portfolio-header__subtitle">Some of our clients we have worked with along the way</p>
    </div>
    <ul className="portfolio-project-wrapper">
      {ProjectList.map(({ name, description, tags, project, award, image }, index) => (
        <li key={`project-${name}-${index}`} className="portfolio-project" data-aos="fade-up">
          <div className="portfolio-project__text">
            <h2 className="portfolio-project__title">{name}</h2>
            <div className="portfolio-project__squiggle">
              <Separator />
            </div>
            <p className="portfolio-project__description">{description}</p>
            <ul className="portfolio-project__tags">
              {tags.map((i, index) => (
                <li key={`index-${i}-${index}`} className="portfolio-project__tags-item">
                  {i}
                </li>
              ))}
            </ul>
            <p className="portfolio-project__external">
              {project ? (
                <a className="portfolio-project__external-project" href={project} target="_blank" rel="noreferrer">
                  Visit website
                </a>
              ) : null}{' '}
              {project && award ? <span aria-hidden={true}>|</span> : null}{' '}
              {award ? (
                <a className="portfolio-project__external-award" href={award.link}>
                  {award.text}{' '}
                </a>
              ) : null}
            </p>
          </div>
          <div className={`portfolio-project__logo ${index === 1 ? 'portfolio-project__logo--xs' : ''}`}>{image}</div>
        </li>
      ))}
    </ul>
  </section>
);
