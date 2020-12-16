import React from 'react';

import Eskimos from './images/Eskimos.svg';
import { Fire } from './images/Fire';
import Horizon from './images/Horizon.svg';
import HorizonMobileMax from './images/Horizon-Mobile-Max.svg';
import Igloo from './images/Igloo.svg';
import Trees4 from './images/Trees-4.svg';
import Trees5 from './images/Trees-5.svg';
import { EScreenSize } from './Portfolio';
import { Stars } from './Stars';

const PortfolioFold: React.FC<{ screenSize: EScreenSize }> = ({ screenSize }) => {
  const isMobile = [EScreenSize.MOB_MAX, EScreenSize.MOB_MIN].includes(screenSize);
  return (
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

export default PortfolioFold;
