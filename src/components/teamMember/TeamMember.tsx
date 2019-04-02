import * as React from 'react';

import './TeamMember.scss';
import { TagList } from '../tagList/TagList';

export interface ITeamMember {
    name: string;
    title: string;
    description: string;
    descriptionExtended: string;
    imageUrl: string;
    imageSrc: string;
    imageSecSrc: string;
    imageAlt: string;
    skillSet: string[];
    position: 'designer' | 'analyst' | 'fe';
    noHover: boolean;
}

interface ITeamMemberProps {
    data: ITeamMember;
}

export class TeamMember extends React.Component<ITeamMemberProps> {
    render() {
        const windowWidth = isNaN(window.innerWidth) ? window.outerWidth : window.innerWidth;
        const {
            title,
            noHover,
            name,
            description,
            descriptionExtended,
            imageAlt,
            imageSecSrc,
            imageSrc,
            imageUrl,
            skillSet,
        } = this.props.data;

        return (
            <li className="team-member" data-aos="fade-up" data-aos-offset={windowWidth > 600 ? '150' : '350'}>
                <p className="team-member__portrait mt-0">
                    <img className="team-member__portrait-primary" src={imageSrc} alt={imageAlt} />
                    <img
                        className={`team-member__portrait-secondary${noHover ? ' no-hover' : ''}`}
                        src={imageSecSrc}
                        alt={imageAlt}
                    />
                </p>
                <div className="team-member__description">
                    <a
                        className="team-member__name mt-0 h1"
                        href={imageUrl}
                        title={`LinkedIn - ${name}`}
                        target="_blank"
                    >
                        <h2>{name}</h2>
                    </a>
                    <p className="team-member__title mt-0">
                        <span>{title}</span>
                    </p>
                    <p>
                        {description} {descriptionExtended}
                    </p>
                    <TagList tags={skillSet} className="team-member__skills" />
                </div>
            </li>
        );
    }
}
