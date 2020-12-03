import * as React from 'react';
import { PortfolioProject } from './Portfolio/PortfolioProject';
import '../../styles/_portfolio.scss';
import PortfolioFold from './Portfolio/PortfolioFold';
import dietlessLogoSrc, { ReactComponent as DietlessLogo } from '../../assets/portfolio/dietless_logo.svg';
import erbiLogoSrc, { ReactComponent as ErbiLogo } from '../../assets/portfolio/ERBI_logo.svg';
import esbLogoSrc, { ReactComponent as ESBLogo } from '../../assets/portfolio/E-Showcase_Briefing_logo.svg';
import { IPortfolioProject } from './Portfolio/PortfolioProject';

export const portfolioProjectList: IPortfolioProject[] = [
    {
        name: 'Dietless',
        title: 'Dietless',
        description:
            'Inspiring global policy makers, political leaders, corporate executives, investors and international media with the success story of e-Estonia and build links to leading IT service providers.',
        collab: 'Collaboration: Brand and style guidelines by X',
        image: DietlessLogo,
        imageAlt: 'Erik Orgu - Elu ilma dieedita',
        imageSrc: dietlessLogoSrc,
        goldenEggLinkText: 'Kuldmuna 2018',
        goldenEggLink: 'https://defol.io/kuldmuna/2018-erik-orgus-tailor-made-meal-plan-app',
        link: 'https://www.erikorgu.ee/',
        linkText: 'Dietless',
        tags: ['Development', 'Angular', 'Cordova', 'User testing'],
        treesPosition: {
            top: 170,
            left: 10,
            rotation: '0deg',
        },
        hillsPosition: {
            dtMax: {
                left: -6638,
                rotation: '0deg',
            },
            dtMin: {
                left: -7450,
                rotation: '0deg',
            },
        },
    },
    {
        name: 'Estonian Responsible Business Index',
        title: 'Estonian Responsible Business Index',
        description:
            'Inspiring global policy makers, political leaders, corporate executives, investors and international media with the success story of e-Estonia and build links to leading IT service providers.',
        collab: 'Collaboration: Brand and style guidelines by X',
        image: ErbiLogo,
        imageAlt: 'Test Image Alt',
        imageSrc: erbiLogoSrc,
        goldenEggLinkText: 'Kuldmuna link',
        link: 'https://questionnaire.csr.ee/#/login?afterLoginHash=%23%2FbasicQuestionnaire',
        linkText: 'Questionnaire',
        tags: ['User research', 'Prototype', 'User testing', 'Development', 'Design', 'Aurelia'],
        treesPosition: {
            top: 90,
            left: 1370,
            rotation: '0deg',
        },
        hillsPosition: {
            dtMax: {
                left: -2925,
                rotation: '0deg',
            },
            dtMin: {
                left: -3148,
                rotation: '0deg',
            },
        },
    },
    {
        name: 'E-Showcase Briefing',
        title: 'E-Showcase Briefing',
        description:
            'Inspiring global policy makers, political leaders, corporate executives, investors and international media with the success story of e-Estonia and build links to leading IT service providers',
        collab: 'Collaboration: Brand and style guidelines by X.',
        image: ESBLogo,
        imageAlt: 'Test Image Alt',
        imageSrc: esbLogoSrc,
        goldenEggLinkText: 'Kuldmuna link',
        link: '',
        linkText: 'Test link text',
        tags: ['Prototyping', 'UI analysis', 'Business analysis', 'User research'],
        treesPosition: {
            top: 230,
            left: 0,
            rotation: '180deg',
        },
        hillsPosition: {
            dtMax: {
                left: -1813,
                rotation: '0deg',
            },
            dtMin: {
                left: -2498,
                rotation: '0deg',
            },
        },
    },
];

export enum EScreenSize {
    MOB_MIN = 'MOB_MIN',
    MOB_MAX = 'MOB_MAX',
    DT_MIN = 'DESKTOP_MIN',
    DT_MAX = 'DESKTOP_MAX',
}

interface IPortfolioState {
    screenWidth: number;
    screenSize: EScreenSize;
}

export class Portfolio extends React.Component<{}, IPortfolioState> {
    static screenSizeWatcher = null;
    constructor(props) {
        super(props);
        this.state = {
            screenWidth: 0,
            screenSize: EScreenSize.DT_MAX,
        };
    }

    updateScreenSize() {
        const screenWidth: number = window.innerWidth;
        let screenSize: EScreenSize;

        if (screenWidth >= 1366) {
            screenSize = EScreenSize.DT_MAX;
        } else if (screenWidth < 1366 && screenWidth >= 768) {
            screenSize = EScreenSize.DT_MIN;
        } else if (screenWidth < 768 && screenWidth >= 446) {
            screenSize = EScreenSize.MOB_MAX;
        } else {
            screenSize = EScreenSize.MOB_MIN;
        }

        console.log('DEBUG::updateScreenSize', screenWidth, screenSize);

        if (screenSize !== this.state.screenSize || screenWidth !== this.state.screenWidth) {
            this.setState(() => ({
                screenWidth,
                screenSize,
            }));
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateScreenSize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateScreenSize);
    }

    renderProjects() {
        return (
            <div className="portfolio-wrapper">
                {portfolioProjectList.map((project, index) => (
                    <PortfolioProject
                        data={project}
                        index={index}
                        key={index}
                        isMobile={this.state.screenWidth <= 768}
                        screenSize={this.state.screenSize}
                    />
                ))}
            </div>
        );
    }

    render() {
        return (
            <section className="section portfolio" id="portfolio">
                <PortfolioFold screenSize={this.state.screenSize} />
                {this.renderProjects()}
            </section>
        );
    }
}
