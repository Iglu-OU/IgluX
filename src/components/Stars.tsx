import * as React from 'react';

export class Stars extends React.Component {
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
            <div className="star__Wrapper">
                <div className="stars1 star" />
                <div className="stars2 star" />
                <div className="stars3 star" />
            </div>
        );
    }
}
