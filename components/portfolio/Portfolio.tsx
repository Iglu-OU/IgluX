import React from 'react';

import DietlessSVG from '../_images/Dietless.svg';
import EShowcaseSVG from '../_images/E-Showcase-Briefing.svg';
import ERBISVG from '../_images/ERBI.svg';
import Eskimos from '../_images/Eskimos.svg';
import { Fire } from '../_images/Fire';
import Horizon from '../_images/Horizon.svg';
import HorizonMobileMax from '../_images/Horizon-Mobile-Max.svg';
import Igloo from '../_images/Igloo.svg';
import Trees4 from '../_images/Trees-4.svg';
import Trees5 from '../_images/Trees-5.svg';
import { Stars } from '../stars/Stars';
import { IPortfolioProject, PortfolioProject } from './components/PortfolioProject';

export const portfolioProjectList: IPortfolioProject[] = [
  {
    name: 'Dietless',
    title: 'Dietless',
    description:
      'Inspiring global policy makers, political leaders, corporate executives, investors and international media with the success story of e-Estonia and build links to leading IT service providers.',
    Svg: <DietlessSVG />,
    award: { text: 'Kuldmuna 2018', link: 'https://defol.io/kuldmuna/2018-erik-orgus-tailor-made-meal-plan-app' },
    project: 'https://www.erikorgu.ee',
    tags: ['Development', 'Angular', 'Cordova', 'User testing'],
  },
  {
    name: 'Estonian Responsible Business Index',
    title: 'Estonian Responsible Business Index',
    description:
      'Inspiring global policy makers, political leaders, corporate executives, investors and international media with the success story of e-Estonia and build links to leading IT service providers.',
    Svg: <ERBISVG />,
    project: 'https://questionnaire.csr.ee/#/login?afterLoginHash=%23%2FbasicQuestionnaire',
    tags: ['User research', 'Prototype', 'User testing', 'Development', 'Design', 'Aurelia'],
  },
  {
    name: 'E-Showcase Briefing',
    title: 'E-Showcase Briefing',
    description:
      'Inspiring global policy makers, political leaders, corporate executives, investors and international media with the success story of e-Estonia and build links to leading IT service providers',
    Svg: <EShowcaseSVG />,
    tags: ['Prototyping', 'UI analysis', 'Business analysis', 'User research'],
  },
];

export enum EScreenSize {
  MOB_MIN = 'MOB_MIN',
  MOB_MAX = 'MOB_MAX',
  DT_MIN = 'DESKTOP_MIN',
  DT_MAX = 'DESKTOP_MAX',
}

interface PortfolioState {
  screenWidth: number;
  screenSize: EScreenSize;
}

export const Portfolio: React.FC = () => {
  const [state, setState] = React.useState<PortfolioState>({ screenWidth: 0, screenSize: EScreenSize.DT_MAX });
  const isMobile = [EScreenSize.MOB_MAX, EScreenSize.MOB_MIN].includes(state.screenSize);

  React.useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  });

  const updateScreenSize = () => {
    const screenWidth = window.innerWidth;
    let screenSize = EScreenSize.MOB_MIN;

    if (screenWidth >= 1366) {
      screenSize = EScreenSize.DT_MAX;
    } else if (screenWidth < 1366 && screenWidth >= 768) {
      screenSize = EScreenSize.DT_MIN;
    } else if (screenWidth < 768 && screenWidth >= 446) {
      screenSize = EScreenSize.MOB_MAX;
    }

    if (screenSize !== state.screenSize || screenWidth !== state.screenWidth) {
      setState(() => ({ screenWidth, screenSize }));
    }
  };

  return (
    <section className="section portfolio" id="portfolio">
      <div className={`portfolio__top-fold${isMobile ? ' is-mobile' : ''}`}>
        {!isMobile ? <PortfolioHeader isMobile={isMobile} /> : null}
        <div className="background-wrapper">
          <div className="horizon">{isMobile ? <HorizonMobileMax /> : <Horizon />}</div>
          {!isMobile ? (
            <>
              <div className="trees trees--left">
                <Trees4 />
              </div>
              <div className="igloo">
                <Igloo />
              </div>
              <div className="trees trees--right">
                <Trees5 />
              </div>
              <div className="eskimos">
                <Eskimos />
              </div>
              <div className="fire">
                <Fire />
              </div>
            </>
          ) : null}
        </div>
        {isMobile ? <PortfolioHeader isMobile={isMobile} /> : null}
      </div>

      <ul className="portfolio-wrapper">
        {portfolioProjectList.map((project, index) => (
          <PortfolioProject
            data={project}
            index={index}
            key={index}
            isMobile={state.screenWidth <= 768}
            screenSize={state.screenSize}
          />
        ))}
      </ul>
    </section>
  );
};

const PortfolioHeader: React.FC<{ isMobile: boolean }> = (isMobile) => (
  <div className="portfolio__header">
    {!isMobile && <Stars id="portfolio-fold-stars" maxStars={25} />}
    <div className="text-wrapper" data-aos="zoom-in">
      <h1>Projects</h1>
      <h2>Some of our Clients we have worked with along the way</h2>
    </div>
  </div>
);
