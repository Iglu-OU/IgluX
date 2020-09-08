import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as AOS from 'aos';

import { Navigation } from './components/Navigation';
import { Stars } from './components/Stars';
import { WorkFlow } from './components/WorkFlow';
import { Footer } from './components/Footer';
import { Team } from './components/Team';
import { Journey } from './components/Journey';

import registerSW from './utils/registerSW';
import 'web-animations-js';

import '../styles/main.scss';
import Logo from '../assets/logos/logo.svg';

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
    position: 'designer' | 'analyst' | 'fe';
    noHover: boolean;
}

export interface IAppState {
    headingShouldBreak: boolean;
}

class App extends React.Component<{}, IAppState> {
    constructor(props, context) {
        super(props, context);

        this.state = {
            headingShouldBreak: document.body.getBoundingClientRect().width > 460,
        };

        if ('serviceWorker' in navigator) {
            registerSW({});
        }

        AOS.init({
            once: true,
        });

        window.addEventListener('resize', this.updateHeaderShouldBreak);
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
                didScroll = false;
            }
        }, 50);

        const jumbotron = document.getElementById('jumbotron');
        const transitionContainerJumbotron = document.getElementById('transform-header__jumbotron');
        const transitionContainerWorkflow = document.getElementById('process');
        const transitionStartPoint = Math.max(0, window.innerHeight * 0.25);
        const windowHeight = isNaN(window.innerHeight) ? window.outerHeight : window.innerHeight;
        const iOSChromeDetected = /CriOS/.test(navigator.userAgent);

        if (jumbotron && iOSChromeDetected) {
            jumbotron.style.height = `${windowHeight}px`;
        }

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

        this.animate();
    }

    componentWillUnmount(): void {
        window.removeEventListener('resize', this.updateHeaderShouldBreak);
    }

    updateHeaderShouldBreak = () => {
        if (this.state.headingShouldBreak !== document.body.getBoundingClientRect().width > 460) {
            this.setState({
                headingShouldBreak: document.body.getBoundingClientRect().width > 460,
            });
        }
    };

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
            },
            init() {
                iglu.nav.setBindings();
            },
        };

        // @ts-ignore
        if (window.requestAnimationFrame) {
            iglu.nav.init();
        }
    }

    render() {
        return (
            <>
                <Navigation logo={Logo} />

                <Stars />

                <main>
                    <section className="transform-header__jumbotron" id="transform-header__jumbotron">
                        <div className="jumbotron" id="jumbotron">
                            <div className="jumbotron__content">
                                <h1 className="mt-0" data-aos="zoom-in">
                                    Driven to make complex systems
                                    {this.state.headingShouldBreak ? <br /> : ' '}
                                    feel <strong>elegant</strong> and <strong className="invisible">invisible</strong>
                                </h1>
                            </div>
                        </div>
                    </section>

                    <WorkFlow />

                    <Journey />

                    <Team />
                </main>

                <Footer />
            </>
        );
    }
}

const container = document.getElementById('app');
ReactDOM.render(<App />, container);
