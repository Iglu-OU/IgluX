import * as React from 'react';
import * as AOS from 'aos';

import Logo from './assets/logos/logo.svg';

import { WorkFlow } from './components/workFlow/WorkFlow';
import { Journey } from './components/journey/Journey';
import { Team } from './components/team/Team';
import { Footer } from './components/footer/Footer';
import { Navigation } from './components/navigation/Navigation';
import { Jumbotron } from './components/jumbotron/Jumbotron';
import { Portfolio } from './components/portfolio/Portfolio';

import './styles/main.scss';
import { JumbotronBackground } from './components/jumbotronBackground/JumbotronBackground';

class App extends React.Component {
    constructor(props: any) {
        super(props);

        AOS.init({
            once: true,
        });
    }

    componentDidMount() {
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
    }

    render() {
        return (
            <>
                <Navigation logo={Logo} />

                <JumbotronBackground />

                <main>
                    <Jumbotron />

                    <WorkFlow />

                    <Journey />

                    <Team />

                    <Portfolio />
                </main>

                <Footer />
            </>
        );
    }
}

export default App;
