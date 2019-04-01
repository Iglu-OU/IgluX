import * as React from 'react';

import { ReactComponent as IceBerg } from '../../assets/iceberg/Iceberg.svg';
import { ReactComponent as Waves } from '../../assets/iceberg/Iceberg-waves.svg';
import { ReactComponent as WavesBackground } from '../../assets/iceberg/Iceberg-waves-bg.svg';
import { ReactComponent as WavesFront } from '../../assets/iceberg/Iceberg-waves-front.svg';
import { ReactComponent as WavesBottom } from '../../assets/iceberg/Iceberg-waves-bottom.svg';

import './WorkFlow.scss';

export class WorkFlow extends React.Component {
    componentDidMount() {
        window.addEventListener('resize', this.getContentPlacement);
        document.addEventListener('DOMContentLoaded', this.animate, false);
        this.getContentPlacement();
    }

    getContentPlacement() {
        // Calculate px's between water-ice-top and work-flow-section
        const waterIce = document.getElementById('water-ice');
        const workFlowSection = document.getElementById('process');

        const waterIceTop = waterIce ? waterIce.getBoundingClientRect().top : 0;
        const workFlowSectionTop = workFlowSection ? workFlowSection.getBoundingClientRect().top : 0;

        // Add content new top.
        const contentNewTop = waterIceTop - workFlowSectionTop - 20;

        const content = document.getElementById('work-flow__content');
        if (content) {
            content.style.top = `${contentNewTop}px`;
        }
    }

    animate = () => {
        this.animateWaves();
        this.animateIceberg();
    };

    animateIceberg() {
        const iceberg = document.querySelector('.work-flow__iceberg');
        const icebergAnimation: any = {
            transform: ['translateY(-1.5%)', 'translateY(-0%)', 'translateY(-1.5%)'],
            easing: 'ease-in-out',
        };
        if (iceberg) {
            iceberg.animate(icebergAnimation, {
                duration: 8000,
                iterations: Infinity,
            });
        }
    }

    animateWaves() {
        const waves = document.querySelector('.work-flow__waves');
        const wavesAnimation: any = {
            transform: [
                'rotateY(180deg) skewY(0.5deg)',
                'rotateY(180deg) skewY(0deg)',
                'rotateY(180deg) skewY(0.5deg)',
            ],
            easing: 'ease-in-out',
        };
        waves!.animate(wavesAnimation, {
            duration: 4000,
            iterations: Infinity,
        });
    }

    renderContent() {
        return (
            <div id="work-flow__content" className="work-flow__content">
                <h1 className="text--white">How we work</h1>
                <dl>
                    <dt className="text--white">Front-end Development</dt>
                    <dd className="text--white">Coding, collaboration with back-end developers</dd>
                    <dt className="text--white">Design</dt>
                    <dd className="text--white stars-bottom">Typography, colors, documentation</dd>
                    <dt className="text--white">Validation</dt>
                    <dd className="text--white">User tests, iterations, analytics</dd>
                    <dt className="text--white">Ideation</dt>
                    <dd className="text--white">Low-fidelity, high-fidelity, clickable, HTML</dd>
                    <dt className="text--white">Discovery</dt>
                    <dd className="text--white">Interviews, data analysis, requirements</dd>
                </dl>
            </div>
        );
    }

    render() {
        return (
            <section className="transform-header__workflow" id="process">
                <div className="work-flow">
                    <WavesBackground />

                    <IceBerg />

                    <WavesFront />

                    <Waves />

                    <WavesBottom />

                    {this.renderContent()}
                </div>
            </section>
        );
    }
}
