import * as React from 'react';
import { PortfolioContent } from './Content/PortfolioContent';
import { PortfolioHeader } from './components/portfolio-header/PortfolioHeader';

import './Portfolio.scss';

export class Portfolio extends React.PureComponent {
    render() {
        return (
            <section className="section portfolio" id="portfolio">
                <PortfolioHeader />
                {<PortfolioContent />}
            </section>
        );
    }
}
