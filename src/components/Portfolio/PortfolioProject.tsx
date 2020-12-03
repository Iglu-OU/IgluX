import * as React from 'react';
import { ReactComponent as HeadlineSeparator } from '../../../assets/portfolio/headline_separator.svg';
import ProjectBackground from './ProjectBackground';
import { EScreenSize } from '../Portfolio';

export interface IPortfolioProjectBase {
    treesPosition: {
        top: number;
        left: number;
        rotation: string;
    };
    hillsPosition: {
        dtMax: {
            left: number;
            rotation: string;
        };
        dtMin: {
            left: number;
            rotation: string;
        };
    };
}

export interface IPortfolioProject extends IPortfolioProjectBase {
    name: string;
    title: string;
    description: string;
    collab: string;
    goldenEggLink?: string;
    goldenEggLinkText?: string;
    link?: string;
    linkText?: string;
    image?: React.FC;
    imageSrc: string;
    imageAlt: string;
    tags: string[];
}

export interface IPortfolioProjectProps {
    data: IPortfolioProject;
    index: number;
    isMobile: boolean;
    screenSize: EScreenSize;
}

export const PortfolioProject = (props: IPortfolioProjectProps) => {
    const {
        data: {
            name,
            description,
            collab,
            image,
            imageSrc,
            imageAlt,
            link,
            linkText,
            goldenEggLink,
            goldenEggLinkText,
            tags,
            hillsPosition,
            treesPosition,
        },
        index,
        isMobile,
        screenSize,
    } = props;
    const windowWidth = isNaN(window.innerWidth) ? window.outerWidth : window.innerWidth;
    let Image: React.FC;
    if (image) {
        Image = image;
    }

    const renderLinks = () => (
        <p className="details__links">
            {goldenEggLink && goldenEggLinkText && (
                <a href={goldenEggLink}>
                    <span className="golden-egg">{goldenEggLinkText}</span>
                </a>
            )}
            {link && linkText && (
                <a href={link}>
                    <span className="project-home">{linkText}</span>
                </a>
            )}
        </p>
    );

    const renderLogo = () => {
        return (
            <div className="logo-wrapper">
                <div className="details__logo">{image ? <Image /> : <img src={imageSrc} alt={imageAlt} />}</div>
            </div>
        );
    };

    const renderDescription = () => {
        return (
            <>
                <div className="details__header">
                    <h2 className="details__name">{name}</h2>
                    <div className="headline-separator">
                        <HeadlineSeparator />
                    </div>
                </div>
                <div className="details__main">
                    <span className="details__description">{description}</span>
                    {renderLinks()}
                    <p className="details__collab">{collab}</p>
                    <p className="details__tags">
                        {tags.map((tag, i) => {
                            return (
                                <span className="tag" key={`${tag}_${i}`}>
                                    {tag}
                                </span>
                            );
                        })}
                    </p>
                </div>
            </>
        );
    };

    const renderDetails = () => {
        if (index % 2 === 0 && !isMobile) {
            return (
                <>
                    {renderDescription()}
                    {renderLogo()}
                </>
            );
        }
        return (
            <>
                {renderLogo()}
                {renderDescription()}
            </>
        );
    };

    const classes = `portfolio-project${index % 2 === 0 && !isMobile ? '' : ' project--reversed'}${
        isMobile ? ' is-mobile' : ''
    }`;

    console.log('DEBUG::Project.render', isMobile, screenSize);

    return (
        <li className={classes} data-aos="fade-up" data-aos-offset={windowWidth > 600 ? '150' : '350'}>
            <ProjectBackground
                hillsPosition={hillsPosition}
                treesPosition={treesPosition}
                isMobile={isMobile}
                screenSize={screenSize}
            />
            <div className="details">{renderDetails()}</div>
        </li>
    );
};
