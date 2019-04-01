import * as React from 'react';

import './Navigation.scss';

export interface INavigationProps {
    logo: string;
}

export class Navigation extends React.Component<INavigationProps> {
    componentDidMount() {
        const navEl = document.querySelector('.navigation');
        const togglerEl = document.querySelector('.navigation__burger a');
        const navigationItemEls = document.querySelectorAll('.navigation__item a');

        let isVisible = false;

        if (togglerEl && navEl) {
            togglerEl.addEventListener('click', (e) => {
                e.preventDefault();
                isVisible = !isVisible;

                if (isVisible) {
                    navEl.classList.add('navigation--open');
                } else {
                    navEl.classList.remove('navigation--open');
                }
            });

            if (navigationItemEls) {
                [].forEach.call(navigationItemEls, (navigationItemEl: any) => {
                    navigationItemEl.addEventListener('click', () => {
                        navEl.classList.remove('navigation--open');
                    });
                });
            }
        }
    }

    returnHeaderLinks() {
        const list = [
            { link: '#process', name: 'Process' },
            { link: '#journey', name: 'Journey' },
            { link: '#team', name: 'Team' },
        ];

        return list.map(({ link, name }, index) => (
            <li key={index} className="navigation__item">
                <a href={link}>{name}</a>
            </li>
        ));
    }

    render() {
        const { logo } = this.props;

        return (
            <nav className="navigation-wrapper">
                <div className="navigation">
                    <div className="navigation__home">
                        <a href="#">
                            <img alt="Iglu logo" src={logo} />
                            <h1 className="navigation__header">Digital Agency</h1>
                        </a>
                    </div>
                    <ul className="navigation__items">{this.returnHeaderLinks()}</ul>
                    <p className="navigation__burger">
                        <a href="#">
                            <span>
                                <span />
                            </span>
                        </a>
                    </p>
                </div>
            </nav>
        );
    }
}
