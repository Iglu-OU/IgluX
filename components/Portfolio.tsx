import React from 'react';

import DietlessSVG from './images/Dietless.svg';
import EShowcaseSVG from './images/E-Showcase-Briefing.svg';
import ERBISVG from './images/ERBI.svg';
import PortfolioFold from './PortfolioFold';
import { IPortfolioProject, PortfolioProject } from './PortfolioProject';

export const portfolioProjectList: IPortfolioProject[] = [
  {
    name: 'Dietless',
    title: 'Dietless',
    description:
      'Inspiring global policy makers, political leaders, corporate executives, investors and international media with the success story of e-Estonia and build links to leading IT service providers.',
    Svg: <DietlessSVG />,
    goldenEgg: { text: 'Kuldmuna 2018', link: 'https://defol.io/kuldmuna/2018-erik-orgus-tailor-made-meal-plan-app' },
    project: { text: 'Dietless', link: 'https://www.erikorgu.ee' },
    tags: ['Development', 'Angular', 'Cordova', 'User testing'],
  },
  {
    name: 'Estonian Responsible Business Index',
    title: 'Estonian Responsible Business Index',
    description:
      'Inspiring global policy makers, political leaders, corporate executives, investors and international media with the success story of e-Estonia and build links to leading IT service providers.',
    Svg: <EShowcaseSVG />,
    project: {
      text: 'Questionnaire',
      link: 'https://questionnaire.csr.ee/#/login?afterLoginHash=%23%2FbasicQuestionnaire',
    },
    tags: ['User research', 'Prototype', 'User testing', 'Development', 'Design', 'Aurelia'],
  },
  {
    name: 'E-Showcase Briefing',
    title: 'E-Showcase Briefing',
    description:
      'Inspiring global policy makers, political leaders, corporate executives, investors and international media with the success story of e-Estonia and build links to leading IT service providers',
    Svg: <ERBISVG />,
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
      <PortfolioFold screenSize={state.screenSize} />
      <div className="portfolio-wrapper">
        {portfolioProjectList.map((project, index) => (
          <PortfolioProject
            data={project}
            index={index}
            key={index}
            isMobile={state.screenWidth <= 768}
            screenSize={state.screenSize}
          />
        ))}
      </div>
    </section>
  );
};
