import React from 'react';
import { ReactComponent as PortfolioHorizon } from '../../../assets/portfolio/horizon.svg';
import { ReactComponent as PortfolioMobileHorizon } from '../../../assets/portfolio/horizon_mob_max.svg';
import { ReactComponent as TreesLeft } from '../../../assets/portfolio/trees_4.svg';
import { ReactComponent as Igloo } from '../../../assets/portfolio/igloo.svg';
import { ReactComponent as Eskimos } from '../../../assets/portfolio/eskimos.svg';
import { ReactComponent as TreesRight } from '../../../assets/portfolio/trees_5.svg';
import PortfolioFire from './PortfolioFire';
import { Stars } from '../Stars';

interface IPortfolioContent {
    title: string;
    subtitle: string;
}

const portfolioContent: IPortfolioContent = {
    title: 'Projects',
    subtitle: 'Some of our Clients we have worked with along the way',
};

interface IPortfolioFoldProps {
    isMobile: boolean;
}

const PortfolioFold = (props: IPortfolioFoldProps) => {
    const { isMobile } = props;
    const renderHeader = () => (
        <div className="portfolio__header">
            {!isMobile && <Stars id={'portfolio-fold-stars'} maxStars={25} />}
            <h1>{portfolioContent.title}</h1>
            <h2>{portfolioContent.subtitle}</h2>
        </div>
    );
    const renderMobileBackground = () => (
        <div className="background-wrapper">
            <div className="horizon">
                <PortfolioMobileHorizon />
            </div>
            <div className="trees trees--left">
                <TreesLeft />
            </div>
            <div className="igloo">
                <Igloo />
            </div>
        </div>
    );
    const renderBackground = () => (
        <div className="background-wrapper">
            <div className="horizon">
                <PortfolioHorizon />
            </div>
            <div className="trees trees--left">
                <TreesLeft />
            </div>
            <div className="igloo">
                <Igloo />
            </div>
            <div className="trees trees--right">
                <TreesRight />
            </div>
            <div className="eskimos">
                <Eskimos />
            </div>
            <PortfolioFire />
        </div>
    );
    return (
        <div className={`portfolio__top-fold${isMobile ? ' is-mobile' : ''}`}>
            {!isMobile && renderHeader()}
            {isMobile ? renderMobileBackground() : renderBackground()}
            {isMobile && renderHeader()}
        </div>
    );
};

export default PortfolioFold;
