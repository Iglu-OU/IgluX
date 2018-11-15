import { render, Component } from 'inferno';
// import Header from './components/Header';
import Navigation from './components/Navigation';
import TeamMember from './components/TeamMember';
import TeamMemberWrapper from './components/TeamMemberWrapper';
import registerSW from './utils/registerSW';
import 'web-animations-js';

import '../styles/main.scss';
import Logo from '../assets/logo.svg';

import LauraPortrait from '../assets/portraits/laura.svg';
import KristoPortrait from '../assets/portraits/kristo.svg';
import JoonasPortrait from '../assets/portraits/joonas.svg';
import KadiPortrait from '../assets/portraits/kadi.svg';
import EglePortrait from '../assets/portraits/egle.svg';
import ViljarPortrait from '../assets/portraits/viljar.svg';
import AntonPortrait from '../assets/portraits/anton.svg';
import HarlesPortrait from '../assets/portraits/harles.svg';
import IvarPortrait from '../assets/portraits/ivar.svg';
import TerasmaaPortrait from '../assets/portraits/terasmaa.svg';
import KasparPortrait from '../assets/portraits/kaspar.svg';
import AlinaPortrait from '../assets/portraits/alina.svg';

import IcoFacebook from '../assets/ico-fb.svg';
import IcoInstagram from '../assets/ico-insta.svg';
import IcoLinkedIn from '../assets/ico-linkedin.svg';

interface ITeamMember {
    name: string;
    title: string;
    description: string;
    descriptionExtended: string;
    imageUrl: string;
    imageSrc: string;
    imageAlt: string;
}

class App extends Component<any, any> {
    teamMemberList: ITeamMember[] = [
        {
            name: 'Laura Asu',
            title: 'Team lead, UI & UX analyst',
            description: 'Keeps the team inspired and things running, smoothly.',
            descriptionExtended:
                'Laura has extensive knowledge about UI analysis, her expertise includes business analysis, user research, user testing.',
            imageUrl: 'https://www.linkedin.com/in/laura-asu-40460663/',
            imageSrc: LauraPortrait,
            imageAlt: `Laura Asu's portrait... if she was an Eskimo`,
        },
        {
            name: 'Kristo Danilson',
            title: 'UI & UX analyst',
            description: 'Passionate about users and the business side of IT.',
            descriptionExtended:
                'Kristo is well-versed in business analysis and has experience in user research and user testing.',
            imageUrl: 'https://www.linkedin.com/in/kristo-danilson-a9a08b159/',
            imageSrc: KristoPortrait,
            imageAlt: `Kristo Danilson's portrait... if he was an Eskimo`,
        },
        {
            name: 'Joonas Kessel',
            title: 'UI & UX analyst',
            description: `Ensures the projects are on track and the users' needs are met.`,
            descriptionExtended: 'Joonas has experience in user research and user testing, as well as prototyping.',
            imageUrl: 'https://www.linkedin.com/in/joonaskessel/',
            imageSrc: JoonasPortrait,
            imageAlt: `Joonas Kessel's portrait... if he was an Eskimo`,
        },
        {
            name: 'Alina Trussova',
            title: 'Art Director, UI & UX Designer',
            description: 'Sees the bigger picture, balancing creativity with rational thinking.',
            descriptionExtended:
                'Has learned from experts around the world, bringing together different ideas and mindsets. Her skillset ranges from branding to UI design, user research and user testing.',
            imageUrl: 'Art Director, UI & UX Designer',
            imageSrc: AlinaPortrait,
            imageAlt: `Alina Trussova's portrait... if she was an Eskimo`,
        },
        {
            name: 'Kadi Lukas',
            title: 'UI & UX Designer',
            description: 'Has an eye or two (probably three) for detail.',
            descriptionExtended:
                'Kadi has expertise in graphic design, cinematography and is experienced in UI design, user research, user testing.',
            imageUrl: 'https://www.linkedin.com/in/kadi-lukas-a64a99130/',
            imageSrc: KadiPortrait,
            imageAlt: `Kadi Lukas's portrait... if she was an Eskimo`,
        },
        {
            name: 'Egle Kiik',
            title: 'UI & UX Designer',
            description: 'Bridges the gap between business and end user.',
            descriptionExtended:
                'Egle has a background in video editing, printed media and is skilled in UI design, UX writing, user research, user testing.',
            imageUrl: 'https://www.linkedin.com/in/egle-kiik-a3341451/',
            imageSrc: EglePortrait,
            imageAlt: `Egle Kiik's portrait... if she was an Eskimo`,
        },
        {
            name: 'Viljar Kärgenberg',
            title: 'Front-end lead',
            description: 'Leads and supports the dev team with dedication and eagerness.',
            descriptionExtended:
                'Viljar is proficient in using React, Vue.js, Angular.js and has vast experience with other frameworks.',
            imageUrl: 'https://www.linkedin.com/in/viljar-k%C3%A4rgenberg-81378398/',
            imageSrc: ViljarPortrait,
            imageAlt: `Viljar Kärgenberg's portrait... if he was an Eskimo`,
        },
        {
            name: 'Anton Aavik',
            title: 'Senior front-end developer',
            description: 'Open-source enthusiast, who strives for perfection.',
            descriptionExtended: `Anton's skill set includes React, Angular, Vue.js, BEM, semantic HTML and app development.`,
            imageUrl: '#',
            imageSrc: AntonPortrait,
            imageAlt: `Anton Aavik's portrait... if he was an Eskimo`,
        },
        {
            name: 'Harles-Herman Pilter',
            title: 'Front-end developer',
            description: 'Skilled in creating excellent micro-interactions, also, has a strong sense for business.',
            descriptionExtended: 'Harles has experience in React, Angular, Vue.js and Aurelia.',
            imageUrl: 'https://www.linkedin.com/in/harles-herman-pilter-6a3636114/',
            imageSrc: HarlesPortrait,
            imageAlt: `Harles-Herman Pilter's portrait... if he was an Eskimo`,
        },
        {
            name: 'Ivar Kallejärv',
            title: 'Front-end developer',
            description: 'Adept at data visualization complemented by knowledge of system analysis.',
            descriptionExtended:
                'Ivar is competent in React, Angular, Aurelia, Ionic, C3, D3, Chart.js and app development.',
            imageUrl: 'https://www.linkedin.com/in/ivar-kallej%C3%A4rv-21986611a/',
            imageSrc: IvarPortrait,
            imageAlt: `Ivar Kallejärv's portrait... if he was an Eskimo`,
        },
        {
            name: 'Tõnis Terasmaa',
            title: 'Front-end developer',
            description: 'Has a positive attitude in life, especially towards complex and challenging systems',
            descriptionExtended: 'Tõnis has competence in React, Angular.js and Vue.js.',
            imageUrl: 'https://www.linkedin.com/in/t%C3%B5nis-terasmaa-79b6bbb7/',
            imageSrc: TerasmaaPortrait,
            imageAlt: `Tõnis Terasmaa's portrait`,
        },
        {
            name: 'Kaspar Suvi',
            title: 'Junior front-end developer',
            description:
                'Started as a trainee and is discovering the wonderful world of front-end as a full-time team member.',
            descriptionExtended: 'Kaspar has experience with React, Angular, BEM, semantic HTML.',
            imageUrl: 'https://www.linkedin.com/in/kaspar-suvi-141080120/',
            imageSrc: KasparPortrait,
            imageAlt: `Kaspar Suvi's portrait... if he was an Eskimo`,
        },
    ];

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
            { element: beginning, top: 150 },
            { element: designproject, top: 250 },
            { element: spa, top: 350 },
            { element: app, top: 450 },
            { element: uxProject, top: 550 },
            { element: newTeam, top: 650 },
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

            if (scrolledOfJourney > 90 && scrolledOfJourney < 750) {
                if (!minHeight || minHeight < scrolledOfJourney) {
                    minHeight = scrolledOfJourney;
                } else if (minHeight > scrolledOfJourney) {
                    scrolledOfJourney = minHeight;
                }
                if (mask) {
                    (mask as any).style.top = scrolledOfJourney + 'px';
                }
            } else if (scrollPercentage > 1) {
                scrolledOfJourney = 750;
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
            // const height = screen.height;
            const width = screen.width;

            if (width >= 768) {
                animateStars();
                animateWaves();
            }

            animateIceberg();
            animateInvisible();
        }

        function animateStars() {
            const starOne = document.querySelector('.jumbotron__star-one');
            const starTwo = document.querySelector('.jumbotron__star-two');
            const starThree = document.querySelector('.jumbotron__star-three');
            const starWorkflow = document.querySelector('.work-flow__star');

            const starAnimation: any = {
                transform: ['scale(1, 1)', 'scale(0, 0)', 'scale(1, 1)'],
                easing: 'linear',
            };

            starOne!.animate(starAnimation, {
                duration: 4000,
                iterations: Infinity,
            });

            starTwo!.animate(starAnimation, {
                duration: 6000,
                iterations: Infinity,
            });

            starThree!.animate(starAnimation, {
                duration: 7000,
                iterations: Infinity,
            });

            starWorkflow!.animate(starAnimation, {
                duration: 5000,
                iterations: Infinity,
            });
        }

        function animateIceberg() {
            const iceberg = document.querySelector('.work-flow__iceberg');
            const icebergAnimation: any = {
                transform: ['translate(-50%, -50%)', 'translate(-50%, -51.5%)', 'translate(-50%, -50%)'],
                easing: 'ease-in-out',
            };
            iceberg!.animate(icebergAnimation, {
                duration: 8000,
                iterations: Infinity,
            });

            const eskimo = document.querySelector('.work-flow__eskimo');
            const eskimoAnimation: any = {
                transform: ['translate(0, 0)', 'translate(0, 2%)', 'translate(0, 0)'],
                easing: 'ease-in-out',
            };
            eskimo!.animate(eskimoAnimation, {
                duration: 8000,
                iterations: Infinity,
            });
        }

        function animateWaves() {
            const waves = document.querySelector('.work-flow__waves');
            const wavesAnimation: any = {
                transform: ['skewY(1.5deg)', 'skewY(0deg)', 'skewY(1.5deg)'],
                easing: 'ease-in-out',
            };
            waves!.animate(wavesAnimation, {
                duration: 4000,
                iterations: Infinity,
            });

            const waveTop = document.querySelector('.work-flow__wave-top');
            const waveTopAnimation: any = {
                transform: ['translate(-100%, 0)', 'translate(100%, 0)'],
                easing: 'ease-in-out',
            };
            waveTop!.animate(waveTopAnimation, {
                duration: 12000,
                iterations: Infinity,
            });
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
                <main>
                    <section className="transform-header__jumbotron" id="transform-header__jumbotron">
                        <div className="jumbotron">
                            <div className="jumbotron__content text-center">
                                <h1 className="mt-0">
                                    Full stack power for creating <strong>human experiences</strong>
                                </h1>
                                <p>
                                    Driven to make
                                    <br /> complex systems feel <strong>elegant</strong> and{' '}
                                    <strong className="invisible">invisible</strong>
                                </p>
                            </div>
                            <div className="jumbotron__background" />
                            <div className="jumbotron__star-one" />
                            <div className="jumbotron__star-two" />
                            <div className="jumbotron__star-three" />
                        </div>
                    </section>

                    <section className="transform-header__workflow" id="process">
                        <div className="work-flow">
                            <div className="work-flow__eskimo" />
                            <div className="work-flow__star" />
                            <div className="work-flow__sky" />
                            <div className="work-flow__iceberg" />
                            <div className="work-flow__wave-top" />
                            <div className="work-flow__waves" />
                            <div className="work-flow__content">
                                <h1>How we work</h1>
                                <dl>
                                    <dt>Front-end development</dt>
                                    <dd>Collaboration with back-end team</dd>
                                    <dt>UI design</dt>
                                    <dd>Typography, colors, documentation</dd>
                                    <dt>Evaluate</dt>
                                    <dd>User tests, iterations</dd>
                                    <dt>Ideate</dt>
                                    <dd>Whiteboard and HTML prototypes</dd>
                                    <dt>User research</dt>
                                    <dd>Interviews, data analysis</dd>
                                    <dt>Requirements</dt>
                                    <dd>Identification, prioritisation of needs</dd>
                                </dl>
                            </div>
                        </div>
                    </section>

                    <section className="section journey-wrapper" id="journey">
                        <div className="journey">
                            <div className="journey__header">
                                <h1>Journey</h1>
                            </div>

                            <div className="mask" />
                            <div className="journey__content">
                                <div className="event-wrapper event-wrapper--left beginning">
                                    <div className="event show">
                                        <h4 className="event__date">March 2013</h4>
                                        <br />
                                        <h3 className="event__name">The beginning of Iglu</h3>
                                        <div className="event__circle" />
                                    </div>
                                </div>

                                <div className="event-wrapper event-wrapper--right design-project">
                                    <div className="event show">
                                        <h4 className="event__date">June 2014 * 1st Design project</h4>
                                        <br />
                                        <h3 className="event__name">Evocon</h3>
                                        <div className="event__circle event__circle--right" />
                                    </div>
                                </div>

                                <div className="event-wrapper event-wrapper--left spa">
                                    <div className="event show">
                                        <h4 className="event__date">January 2015 * 1st Single page application</h4>
                                        <br />
                                        <h3 className="event__name">Südameapteek</h3>
                                        <div className="event__circle" />
                                    </div>
                                </div>

                                <div className="event-wrapper event-wrapper--right app">
                                    <div className="event show">
                                        <h4 className="event__date">November 2016 * 1st App</h4>
                                        <br />
                                        <h3 className="event__name">Dietless</h3>
                                        <div className="event__circle event__circle--right" />
                                    </div>
                                </div>

                                <div className="event-wrapper event-wrapper--left ux-project">
                                    <div className="event show">
                                        <h4 className="event__date">December 2016 * 1st UX Project</h4>
                                        <br />
                                        <h3 className="event__name">Vastutustundliku ettevõtluse foorum</h3>
                                        <div className="event__circle" />
                                    </div>
                                </div>

                                <div className="event-wrapper event-wrapper--right new-team">
                                    <div className="event show">
                                        <h4 className="event__date">February 2018</h4>
                                        <br />
                                        <h3 className="event__name">The beginning of Iglu Digital Agency team</h3>
                                        <div className="event__circle event__circle--right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section" id="team">
                        <TeamMemberWrapper>
                            {this.teamMemberList.map((i, index) => (
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
