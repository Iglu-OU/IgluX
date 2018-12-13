import { Component } from 'inferno';

export default class Stars extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        const bottom =
            document.getElementsByClassName('stars-bottom')[0].getBoundingClientRect().bottom + window.pageYOffset;
        document.getElementsByClassName('star__Wrapper')[0].setAttribute('style', `height: ${bottom + 20}px`);
    }

    public render() {
        return (
            <div className="star__Wrapper">
                <div className="stars1 star" />
                <div className="stars2 star" />
                <div className="stars3 star" />
            </div>
        );
    }
}
