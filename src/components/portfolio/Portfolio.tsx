import * as React from 'react';
import { PortfolioContent } from './components/portfolio-content/PortfolioContent';
import { PortfolioHeader } from './components/portfolio-header/PortfolioHeader';

import './Portfolio.scss';

export class Portfolio extends React.PureComponent {
    render() {
        return (
            <section className="section portfolio" id="portfolio">
                <PortfolioHeader title="What have we done" />
                <PortfolioContent />
            </section>
        );
    }
}
