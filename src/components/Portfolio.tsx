import * as React from 'react';
import { portfolioProjectList } from '../utils/portfolioProjects';
import { PortfolioProject } from './Portfolio/PortfolioProject';
import '../../styles/_portfolio.scss';
import PortfolioFold from './Portfolio/PortfolioFold';

interface IPortfolioState {
    screenWidth: number;
}

export class Portfolio extends React.Component<{}, IPortfolioState> {
    constructor(props) {
        super(props);
        this.state = {
            screenWidth: 0,
        };
    }
    componentDidMount() {
        this.setState(() => ({
            screenWidth: window.innerWidth,
        }));
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
                    />
                ))}
            </div>
        );
    }

    render() {
        return (
            <section className="section portfolio" id="portfolio">
                <PortfolioFold isMobile={this.state.screenWidth <= 768} />
                {this.renderProjects()}
            </section>
        );
    }
}
