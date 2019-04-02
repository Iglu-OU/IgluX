import * as React from 'react';

import { ReactComponent as PortfolioBG } from '../../../../assets/portfolio/background_wave.svg';
import { ReactComponent as PortfolioIglu } from '../../../../assets/portfolio/iglu.svg';
import { ReactComponent as PortfolioEskimos } from '../../../../assets/portfolio/eskimos.svg';

import './PortfolioHeader.scss';

export class PortfolioHeader extends React.PureComponent {
    render() {
        return (
            <div className="portfolio-header">
                <PortfolioBG className="portfolio-header__background" />
                <PortfolioIglu className="portfolio-header__iglu" />
                <PortfolioEskimos className="portfolio-header__eskimos" />
            </div>
        );
    }
}
