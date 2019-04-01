import * as React from 'react';
import * as AOS from 'aos';

import Logo from './assets/logos/logo.svg';

import './styles/main.scss';
import { WorkFlow } from './components/workFlow/WorkFlow';
import { Journey } from './components/journey/Journey';
import { Team } from './components/team/Team';
import { Footer } from './components/footer/Footer';
import { Stars } from './components/stars/Stars';
import { Navigation } from './components/navigation/Navigation';

export interface IAppState {
    headingShouldBreak: boolean;
}

class App extends React.Component<{}, IAppState> {
    constructor(props: any, context: any) {
        super(props, context);

        this.state = {
            headingShouldBreak: document.body.getBoundingClientRect().width > 460,
        };

        AOS.init({
            once: true,
        });

        window.addEventListener('resize', this.updateHeaderShouldBreak);
    }

    componentDidMount() {
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

export default App;
