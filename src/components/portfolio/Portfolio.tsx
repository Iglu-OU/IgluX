import * as React from 'react';
import { PortfolioHeader } from './components/portfolio-header/PortfolioHeader';

export class Portfolio extends React.PureComponent {
    render() {
        return (
            <section className="section" id="portfolio">
                <PortfolioHeader />
                {/* TODO CONTENT */}
            </section>
        );
    }
}
