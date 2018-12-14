import { render, Component } from 'inferno';
// import Header from './components/Header';
import Navigation from './components/Navigation';
import Stars from './components/Stars';
import WorkFlow from './components/WorkFlow';
import TeamMember from './components/TeamMember';
import TeamMemberWrapper from './components/TeamMemberWrapper';
import registerSW from './utils/registerSW';
import 'web-animations-js';

import '../styles/main.scss';
import Logo from '../assets/logo.svg';

import { teamMemberList } from './utils/teamMembers';

import IcoFacebook from '../assets/ico-fb.svg';
import IcoInstagram from '../assets/ico-insta.svg';
import IcoLinkedIn from '../assets/ico-linkedin.svg';

export interface ITeamMember {
    name: string;
    title: string;
    description: string;
    descriptionExtended: string;
    imageUrl: string;
    imageSrc: string;
    imageSecSrc: string;
    imageAlt: string;
    skillSet: string[];
}

class App extends Component<any, any> {
    constructor(props, context) {
        super(props, context);

        if ('serviceWorker' in navigator) {
            registerSW();
        }
    }

    componentDidMount() {
        // TODO Refactor all of this, including the animate section, separate HTML into components

        let didScroll = false;

        document.addEventListener('scroll', () => {
            didScroll = true;
        });

        setInterval(() => {
            if (didScroll) {
                calculateNav();
                updateJourney();
                didScroll = false;
            }
        }, 50);

        const transitionContainerJumbotron = document.getElementById('transform-header__jumbotron');
        const transitionContainerWorkflow = document.getElementById('process');
        const transitionStartPoint = Math.max(0, window.innerHeight * 0.25);

        const htmlElement = document.querySelector('html');

        const calculateNav = () => {
            const scrollY = window.pageYOffset || document!.documentElement!.scrollTop;

            if (scrollY < transitionStartPoint) {
                transitionContainerJumbotron!.classList.remove('transform-header__jumbotron--alt');
                transitionContainerWorkflow!.classList.remove('transform-header__workflow--alt');
            } else {
                transitionContainerJumbotron!.classList.add('transform-header__jumbotron--alt');
                transitionContainerWorkflow!.classList.add('transform-header__workflow--alt');
            }
        };

        const journeyWrapper = document.querySelector('.journey-wrapper') as any;

        // events
        const beginning = document.querySelector('.beginning');
        const designproject = document.querySelector('.design-project');
        const spa = document.querySelector('.spa');
        const app = document.querySelector('.app');
        const uxProject = document.querySelector('.ux-project');
        const newTeam = document.querySelector('.new-team');

        const events = [
            { element: beginning, top: 100 },
            { element: designproject, top: 200 },
            { element: spa, top: 300 },
            { element: app, top: 400 },
            { element: uxProject, top: 500 },
            { element: newTeam, top: 600 },
        ];

        for (const i of events) {
            i.element!.classList.add('hide');
            i.element!.classList.remove('show');
        }

        let minHeight;

        const updateJourney = () => {
            const scrollY = window.pageYOffset || document!.documentElement!.scrollTop;
            const clientHeight = htmlElement!.clientHeight;

            const windowBottom = scrollY + clientHeight;
            const elementTop = journeyWrapper!.offsetTop + clientHeight / 2;
            const scrollPercentage = (windowBottom - elementTop) / journeyWrapper.scrollHeight;

            let scrolledOfJourney = scrollPercentage * journeyWrapper.offsetTop;

            const mask = document.querySelector('.mask');

            for (const i of events) {
                checkEventVisibility(i.element, i.top, scrolledOfJourney);
            }

            if (scrolledOfJourney > 90 && scrolledOfJourney < 550) {
                if (!minHeight || minHeight < scrolledOfJourney) {
                    minHeight = scrolledOfJourney;
                } else if (minHeight > scrolledOfJourney) {
                    scrolledOfJourney = minHeight;
                }
                if (mask) {
                    (mask as any).style.top = scrolledOfJourney + 'px';
                }
            } else if (scrollPercentage > 1) {
                scrolledOfJourney = 550;
                if (mask) {
                    (mask as any).style.top = scrolledOfJourney + 'px';
                }
            }
        };

        const checkEventVisibility = (element, top, now) => {
            if (now > top) {
                element.classList.add('show');
                element.classList.remove('hide');
            }
        };

        this.animate();
    }

    animate() {
        document.addEventListener('DOMContentLoaded', animateContent(), false);

        function animateContent(): any {
            animateInvisible();
        }

        function animateInvisible() {
            const invisible = document.querySelector('.invisible');
            const initialDuration = 3000;
            const continuousDuration = 5000;
            const fadeAmount = 0.2;
            const initialAnimation: any = {
                opacity: [0.1, 0.8],
                easing: 'ease-in-out',
            };
            const continuousAnimation: any = {
                opacity: [0.8, fadeAmount, 0.8],
                easing: 'ease-in-out',
            };
            invisible!.animate(initialAnimation, {
                duration: initialDuration,
                fill: 'forwards',
            });
            setTimeout(() => {
                for (let i = 0; i < 6; i++) {
                    continuousAnimation.opacity = [0.8, fadeAmount + (i + 1) * 0.1, 0.8];
                    invisible!.animate(continuousAnimation, {
                        delay: continuousDuration * i,
                        duration: continuousDuration,
                    });
                }
            }, initialDuration);
        }

        /* Navigation */

        (() => {
            // browser detection //
            const root = document.documentElement;
            const ua = navigator.userAgent;
            let browser = '';
            if (ua.indexOf('MSIE 10') >= 0) {
                browser += ' ie10';
            }
            if (ua.indexOf('IEMobile') >= 0) {
                browser += ' wp';
            }
            if (ua.indexOf('iPad') >= 0) {
                browser += ' ipad';
            }
            root!.className += browser;
        })();

        // ie9 no request animation frame
        (window as any).iglu = (window as any).iglu || {};
        const iglu = (window as any).iglu;
        iglu.nav = {
            config: {
                trigger: '.app-header__navigation a',
                speed: 400, // scroll duration
            },
            interval: null,
            scrollTo(element) {
                // const currentY = self.pageYOffset;
                const targetY = document.getElementById(element)!.offsetTop;
                function scrollTo(Y, duration) {
                    const start = Date.now();
                    const elem = document!.documentElement!.scrollTop ? document.documentElement : document.body;
                    const from = elem!.scrollTop;
                    const easingFunction = (t) => {
                        return Math.pow(t, 0.48);
                    };
                    if (from === Y) {
                        return;
                    }
                    function min(a, b) {
                        return a < b ? a : b;
                    }
                    function scroll() {
                        const currentTime = Date.now();
                        const time = min(1, (currentTime - start) / duration);
                        const easedT = easingFunction(time);
                        window.scrollTo(0, easedT * (Y - from) + from);

                        if (time < 1) {
                            requestAnimationFrame(scroll);
                        }
                    }
                    requestAnimationFrame(scroll);
                }
                scrollTo(targetY, iglu.nav.config.speed);
            },
            setBindings() {
                // const config = iglu.nav.config;
                const navItems = document.querySelectorAll(iglu.nav.config.trigger);
                const eventFunction = function(e) {
                    e.preventDefault();
                    iglu.nav.scrollTo(this.href.split('#')[1]);
                    // $('#app-header__toggler').prop('checked', false);
                    const toggler: any = document.getElementById('app-header__toggler');
                    toggler!.checked = false;
                };

                for (let i; i < navItems.length; i++) {
                    navItems[i].addEventListener('click', eventFunction);
                }

                // document.querySelectorAll('#logo a')[0].addEventListener("click", eventFunction);
            },
            init() {
                iglu.nav.setBindings();
            },
        };

        if (window.requestAnimationFrame) {
            iglu.nav.init();
        }
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

    returnFooterLinks() {
        const internalList = [
            { link: 'https://iglu.ee/', name: 'Iglu' },
            { link: 'https://iglu.ee/#how', name: 'Clients' },
            { link: 'https://iglu.ee/#where', name: 'Contact us' },
        ];

        const internalLinkList = internalList.map((i, index) => {
            const { link, name } = i;
            return (
                <li key={index}>
                    <a href={link} target="_blank" rel="noopener">
                        {name}
                    </a>
                </li>
            );
        });

        const externalList = [
            { link: '#', name: 'Instagram', imageSrc: IcoInstagram, imageAlt: 'Instagram icon' },
            {
                link: 'https://www.facebook.com/IgluOU/',
                name: 'Facebook',
                imageSrc: IcoFacebook,
                imageAlt: 'Facebook icon',
            },
            {
                link: 'https://www.linkedin.com/company/iglu-o%C3%BC/',
                name: 'LinkedIn',
                imageSrc: IcoLinkedIn,
                imageAlt: 'LinkedIn icon',
            },
        ];

        const externalLinkList = externalList.map((i, index) => {
            const { link, name, imageSrc, imageAlt } = i;
            return (
                <li key={index}>
                    <a href={link}>
                        <img className="ico ico--sm lazyload" alt={imageAlt} src={imageSrc} />
                        {name}
                    </a>
                </li>
            );
        });

        return [...internalLinkList, ...externalLinkList];
    }

    public render() {
        return (
            <div>
                <Navigation Logo={Logo} />

                <Stars />

                <main>
                    <section className="transform-header__jumbotron" id="transform-header__jumbotron">
                        <div className="jumbotron">
                            <div className="jumbotron__content">
                                <h1 className="mt-0">
                                    Driven to make complex systems
                                    <br />
                                    feel <strong>elegant</strong> and <strong className="invisible">invisible</strong>
                                </h1>
                            </div>
                        </div>
                    </section>

                    <WorkFlow />

                    <section className="section journey-wrapper" id="journey">
                        <div className="journey">
                            <div className="journey__header">
                                <h1>Journey</h1>
                            </div>

                            <div className="mask" />
                            <div className="journey__content">
                                <div className="event-wrapper event-wrapper--left beginning">
                                    <div className="event show">
                                        <h4 className="event__date">
                                            <span>March 2013</span>
                                        </h4>
                                        <br />
                                        <h3 className="event__name">Iglu is founded</h3>
                                        <div className="event__circle" />
                                    </div>
                                </div>

                                <div className="event-wrapper event-wrapper--right design-project">
                                    <div className="event show">
                                        <h4 className="event__date">
                                            <span>June 2014</span>
                                            <span>
                                                <a
                                                    className="event__project"
                                                    href="https://evocon.com/"
                                                    target="_blank"
                                                >
                                                    Evocon
                                                </a>
                                            </span>
                                        </h4>
                                        <br />
                                        <h3 className="event__name">First design project</h3>
                                        <div className="event__circle event__circle--right" />
                                    </div>
                                </div>

                                <div className="event-wrapper event-wrapper--left spa">
                                    <div className="event show">
                                        <h4 className="event__date">
                                            <span>January 2015</span>
                                            <span>
                                                <a
                                                    className="event__project"
                                                    href="https://www.sudameapteek.ee/"
                                                    target="_blank"
                                                >
                                                    Südameapteek
                                                </a>
                                            </span>
                                        </h4>
                                        <br />
                                        <h3 className="event__name">First single page application</h3>
                                        <div className="event__circle" />
                                    </div>
                                </div>

                                <div className="event-wrapper event-wrapper--right app">
                                    <div className="event show">
                                        <h4 className="event__date">
                                            <span>November 2016</span>
                                            <span>
                                                <a
                                                    className="event__project"
                                                    href="https://www.dietless.co.uk/"
                                                    target="_blank"
                                                >
                                                    Dietless
                                                </a>
                                            </span>
                                        </h4>
                                        <br />
                                        <h3 className="event__name">First app</h3>
                                        <div className="event__circle event__circle--right" />
                                    </div>
                                </div>

                                <div className="event-wrapper event-wrapper--left ux-project">
                                    <div className="event show">
                                        <h4 className="event__date">
                                            <span>December 2016</span>
                                            <span>
                                                <a className="event__project" href="http://www.csr.ee/" target="_blank">
                                                    Responsible business index
                                                </a>
                                            </span>
                                        </h4>
                                        <br />
                                        <h3 className="event__name">First UX Project</h3>
                                        <div className="event__circle" />
                                    </div>
                                </div>

                                <div className="event-wrapper event-wrapper--right new-team">
                                    <div className="event show">
                                        <h4 className="event__date">January 2018</h4>
                                        <br />
                                        <h3 className="event__name">Iglu`s Digital Agency team is created</h3>
                                        <div className="event__circle event__circle--right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section" id="team">
                        <div className="team__top-fold" />
                        <TeamMemberWrapper>
                            {teamMemberList.map((i: ITeamMember, index: number) => (
                                <TeamMember data={i} key={index} />
                            ))}
                        </TeamMemberWrapper>
                    </section>
                </main>

                <footer className="footer">
                    <ul className="mt-0 list-unstyled">{this.returnFooterLinks()}</ul>
                </footer>
            </div>
        );
    }
}

const container = document.getElementById('app');
render(<App />, container);
