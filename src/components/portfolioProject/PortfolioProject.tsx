import * as React from 'react';
import { TagList } from '../tagList/TagList';
import { ReactComponent as DietlessLogo } from '../../assets/portfolio/dietless-est.svg';
import { ReactComponent as VefLogo } from '../../assets/portfolio/vef-logo.svg';
import { ReactComponent as ShowroomLogo } from '../../assets/portfolio/showroom-logo.svg';
import { ReactComponent as Topwave } from '../../assets/portfolio/top-wave.svg';
import { ReactComponent as MiddleWave } from '../../assets/portfolio/middle-wave.svg';
import { ReactComponent as BottomWave } from '../../assets/portfolio/bottom-wave.svg';

import './PortfolioProject.scss';

export type TProjects = 'Erik Orgu' | 'Estonian responsible business index' | 'E-showcase Briefing';

export interface IProject {
    title: TProjects;
    description: React.ReactNode;
    tags: string[];
    collaborations: string;
}

export interface IPortfolioProjectProps {
    project: IProject;
    className?: string;
    position: 'left' | 'right';
}

export class PortfolioProject extends React.PureComponent<IPortfolioProjectProps> {
    BEM(): string {
        const classArray = ['project'];

        classArray.push(`project--${this.props.position}`);

        classArray.push(`project--${this.props.project.title}`);

        return classArray.join(' ');
    }

    getIcon(project: TProjects) {
        switch (project) {
            case 'Erik Orgu':
                return <DietlessLogo />;
            case 'Estonian responsible business index':
                return <VefLogo />;
            case 'E-showcase Briefing':
                return <ShowroomLogo />;
        }
    }

    getBackground(project: TProjects) {
        const className = 'project__background';

        switch (project) {
            case 'Erik Orgu':
                return <Topwave className={className} />;
            case 'Estonian responsible business index':
                return <MiddleWave className={className} />;
            case 'E-showcase Briefing':
                return <BottomWave className={className} />;
        }
    }

    render() {
        const { project } = this.props;

        return (
            <div className={this.BEM()}>
                <div className="project__content">
                    <div className="project__logo">{this.getIcon(project.title)}</div>

                    <div className="project__text">
                        <h2 className="project__title">{project.title}</h2>
                        <TagList className="project__tags" tags={project.tags} />
                        <p className="project__description">{project.description}</p>
                        <h5 className="project__collaboration-title">Collaborations</h5>
                        <p className="project__collaboration">{project.collaborations}</p>
                    </div>
                </div>

                {this.getBackground(project.title)}
            </div>
        );
    }
}
