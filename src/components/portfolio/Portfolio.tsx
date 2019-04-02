import * as React from 'react';
import { PortfolioContent } from './Content/PortfolioContent';

export class Portfolio extends React.PureComponent {
    render() {
        return (
            <section className="section" id="portfolio">
                {/* TODO HEADER */}
                {<PortfolioContent />}
            </section>
        );
    }
}
