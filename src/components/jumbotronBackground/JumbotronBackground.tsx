import * as React from 'react';

import './JumbotronBackground.scss';

export class JumbotronBackground extends React.Component {
    componentDidMount() {
        window.addEventListener('resize', this.resizeWrapper);
        this.resizeWrapper();
    }

    resizeWrapper() {
        const waterIce = document.getElementById('water-ice');
        const waterIceTop = waterIce ? waterIce.getBoundingClientRect().top : 0;

        document
            .getElementsByClassName('star__Wrapper')[0]
            .setAttribute('style', `height: ${waterIceTop + window.pageYOffset}px`);
    }

    render() {
        return (
            <div className="jumbotron__background">
                <div className="stars1 star" />
                <div className="stars2 star" />
                <div className="stars3 star" />
            </div>
        );
    }
}
