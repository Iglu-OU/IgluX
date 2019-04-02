import * as React from 'react';
import { portfolioProjects } from '../../../content/portfolioProjects';

export interface IProject {
    title: string;
    description: React.ReactNode;
    tags: string[];
}

export class PortfolioContent extends React.PureComponent {
    render() {
        return <div>{/* TODO CONTENT */}</div>;
    }
}
