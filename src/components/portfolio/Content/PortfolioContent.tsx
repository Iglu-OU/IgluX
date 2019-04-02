import * as React from 'react';
import { portfolioProjects } from '../../../content/portfolioProjects';
import { IProject, PortfolioProject } from '../../portfolioProject/PortfolioProject';

import './PortfolioContent.scss';

export class PortfolioContent extends React.PureComponent {
    renderProject(project: IProject, i: number) {
        return <PortfolioProject key={i} project={project} position={this.getPosition(i)} />;
    }

    getPosition(i: number): 'left' | 'right' {
        return i % 2 === 0 ? 'right' : 'left';
    }

    render() {
        return (
            <div className="portfolio__content">
                {portfolioProjects.map((project, i: number) => this.renderProject(project, i))}
            </div>
        );
    }
}
