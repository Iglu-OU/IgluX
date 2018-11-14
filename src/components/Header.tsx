import { Component } from 'inferno';

export default class Header extends Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        const htmlEl = document.querySelector('html');
        const navEl = document.querySelector('#header');

        let prev = 0;

        document.addEventListener('scroll', (e) => {
            if (!htmlEl || !navEl || htmlEl.scrollTop < 0) {
                return;
            }

            if (htmlEl.scrollTop > 400) {
                navEl.classList.add('fixed');
            } else if (htmlEl.scrollTop <= 15) {
                navEl.classList.remove('fixed');
            }

            if (prev < htmlEl.scrollTop) {
                navEl.classList.add('down');
                navEl.classList.remove('up');
            } else {
                navEl.classList.add('up');
                navEl.classList.remove('down');
            }

            prev = htmlEl.scrollTop;
        });
    }

    returnHeaderLinks() {
        const list = [
            { link: '#process', name: 'Process' },
            { link: '#journey', name: 'Journey' },
            { link: '#team', name: 'Team' },
        ];

        return list.map((i, index) => {
            const { link, name } = i;
            return (
                <li key={index}>
                    <a href={link}>{name}</a>
                </li>
            );
        });
    }

    public render() {
        return (
            <div className="app-header-wrapper">
                <header className="app-header" id="header">
                    <input className="app-header__toggle-checkbox" type="checkbox" id="app-header__toggler" />
                    <p className="app-header__logo">
                        <a href="#">
                            <img className="ico ico--logo" alt="Iglu logo" src={this.props.Logo} />{' '}
                            <span>Digital Agency</span>
                        </a>
                    </p>
                    <ul className="app-header__navigation">{this.returnHeaderLinks()}</ul>
                    <label className="app-header__toggler" htmlFor="app-header__toggler">
                        <span>Toggle navigation</span>
                    </label>
                </header>
            </div>
        );
    }
}
