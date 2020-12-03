import * as React from 'react';

import { ReactComponent as Logo } from '../../assets/logos/logo.svg';

export class Navigation extends React.Component {
    get BEM(): string {
        return 'navigation';
    }

    componentDidMount() {
        const navEl = document.querySelector('.navigation');
        const togglerEl = document.querySelector('.navigation__burger a');
        const navigationItemEls = document.querySelectorAll('.navigation__item a');

        // Show header on scroll top
        /*
        const htmlEl = document.querySelector('html');
        let prev = 0;

        document.addEventListener('touchmove', scroll, false);

        document.addEventListener('scroll', scroll, false);

        function scroll(e) {
            if (!htmlEl || !navEl || getBodyScrollTop() < 0) {
                return;
            }

            if (getBodyScrollTop() > 400) {
                navEl.classList.add('fixed');
            } else if (getBodyScrollTop() <= 15) {
                navEl.classList.remove('fixed');
            }

            if (prev < getBodyScrollTop()) {
                navEl.classList.add('down');
                navEl.classList.remove('up');
            } else {
                navEl.classList.add('up');
                navEl.classList.remove('down');
            }

            prev = getBodyScrollTop();
        }

        function getBodyScrollTop() {
            const el = document.scrollingElement || document.documentElement;
            return el ? el.scrollTop : 0;
        }
        */

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
                [].forEach.call(navigationItemEls, (navigationItemEl) => {
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
        return (
            <nav className="navigation-wrapper">
                <div className={this.BEM}>
                    <div className="navigation__home">
                        <a href="#">
                            <Logo />
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
