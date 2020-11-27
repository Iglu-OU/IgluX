import * as React from 'react';
import { ReactComponent as RollingHills } from '../../../assets/portfolio/rolling_hills.svg';
import { ReactComponent as HillTrees } from '../../../assets/portfolio/hill_trees.svg';
import { ReactComponent as HeadlineSeparator } from '../../../assets/portfolio/headline_separator.svg';

export interface IPortfolioProject {
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
        },
        index,
        isMobile,
    } = props;
    const windowWidth = isNaN(window.innerWidth) ? window.outerWidth : window.innerWidth;
    let Image: React.FC;
    if (image) {
        Image = image;
    }

    const renderLinks = () => (
        <div className="details__links">
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
        </div>
    );

    const renderLogo = () => {
        return (
            <div className="logo-wrapper">
                <div className="details__logo">{image ? <Image /> : <img src={imageSrc} alt={imageAlt} />}</div>
                {!isMobile && renderLinks()}
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
                    {isMobile && renderLinks()}
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

    return (
        <li className={classes} data-aos="fade-up" data-aos-offset={windowWidth > 600 ? '150' : '350'}>
            <div className="background">
                {!isMobile && (
                    <>
                        <div className="hills">
                            <RollingHills />
                        </div>
                        <div className="trees">
                            <HillTrees />
                        </div>
                    </>
                )}
            </div>
            <div className="details">{renderDetails()}</div>
        </li>
    );
};
