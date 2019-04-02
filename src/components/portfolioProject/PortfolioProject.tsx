import * as React from 'react';
import { TagList } from '../tagList/TagList';
import { ReactComponent as DietlessLogo } from '../../assets/portfolio/dietless-est.svg';

import './PortfolioProject.scss';

export type TProjectLogos = 'Dietless' | 'test';

export interface IProject {
    title: string;
    description: React.ReactNode;
    tags: string[];
    logo: TProjectLogos;
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

        return classArray.join(' ');
    }

    getIcon(project: TProjectLogos) {
        switch (project) {
            case 'Dietless':
                return <DietlessLogo />;
        }
    }

    render() {
        const { project } = this.props;

        return (
            <div className={this.BEM()}>
                <div className="project__logo">{this.getIcon(project.logo)}</div>
                <div className="project__content">
                    <h2 className="project__title">{project.title}</h2>
                    <TagList className="project__tags" tags={project.tags} />
                    <p className="project__description">{project.description}</p>
                </div>
            </div>
        );
    }
}
