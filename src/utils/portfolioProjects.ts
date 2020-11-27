import dietlessLogoSrc from '../../assets/portfolio/dietless_logo.svg';
import erbiLogoSrc, { ReactComponent as ErbiLogo } from '../../assets/portfolio/ERBI_logo.svg';
import esbLogoSrc from '../../assets/portfolio/E-Showcase_Briefing_logo.svg';
import { IPortfolioProject } from '../components/Portfolio/PortfolioProject';

export const portfolioProjectList: IPortfolioProject[] = [
    {
        name: 'Dietless',
        title: 'Dietless',
        description:
            'Inspiring global policy makers, political leaders, corporate executives, investors and international media with the success story of e-Estonia and build links to leading IT service providers.',
        collab: 'Collaboration: Brand and style guidelines by X',
        imageAlt: 'Erik Orgu - Elu ilma dieedita',
        imageSrc: dietlessLogoSrc,
        goldenEggLinkText: 'Kuldmuna 2018',
        goldenEggLink: 'https://defol.io/kuldmuna/2018-erik-orgus-tailor-made-meal-plan-app',
        link: 'https://www.erikorgu.ee/',
        linkText: 'Dietless',
        tags: ['Development', 'Angular', 'Cordova', 'User testing'],
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
    },
    {
        name: 'E-Showcase Briefing',
        title: 'E-Showcase Briefing',
        description:
            'Inspiring global policy makers, political leaders, corporate executives, investors and international media with the success story of e-Estonia and build links to leading IT service providers',
        collab: 'Collaboration: Brand and style guidelines by X.',
        imageAlt: 'Test Image Alt',
        imageSrc: esbLogoSrc,
        goldenEggLinkText: 'Kuldmuna link',
        link: '',
        linkText: 'Test link text',
        tags: ['Prototyping', 'UI analysis', 'Business analysis', 'User research'],
    },
];
