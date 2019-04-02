import * as React from 'react';

import './Jumbotron.scss';

export interface IJumbotronState {
    headingShouldBreak: boolean;
}

export class Jumbotron extends React.Component<{}, IJumbotronState> {
    constructor(props: any) {
        super(props);

        this.state = {
            headingShouldBreak: document.body.getBoundingClientRect().width > 460,
        };

        window.addEventListener('resize', this.updateHeaderShouldBreak);
    }

    componentDidMount() {
        /**
         * Jumbotron transparent gradient animation when scrolling
         */
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
    }

    render() {
        return (
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
        );
    }
}
