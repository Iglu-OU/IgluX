import * as React from 'react';

export class Journey extends React.Component {
    minHeight = 156;

    componentDidMount(): void {
        this.onScroll();
    }

    componentWillMount(): void {
        window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount(): void {
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll() {
        const journeyWrapper = document.querySelector('.journey-wrapper') as any;
        const htmlElement = document.querySelector('html');
        // events

        const scrollY = window.pageYOffset || document!.documentElement!.scrollTop;
        const clientHeight = htmlElement!.clientHeight;

        const windowBottom = scrollY + clientHeight;
        const elementTop = journeyWrapper!.offsetTop + clientHeight / 2;
        const scrollPercentage = (windowBottom - elementTop) / journeyWrapper.scrollHeight;

        let scrolledOfJourney = scrollPercentage * journeyWrapper.offsetTop;

        const mask = document.querySelector('.mask');

        if (scrolledOfJourney > 156 && scrolledOfJourney < 550) {
            if (!this.minHeight || this.minHeight < scrolledOfJourney) {
                this.minHeight = scrolledOfJourney;
            } else if (this.minHeight > scrolledOfJourney) {
                scrolledOfJourney = this.minHeight;
            }
            if (mask) {
                (mask as any).style.top = scrolledOfJourney + 'px';
            }
        } else if (scrolledOfJourney >= 550) {
            if (mask) {
                (mask as any).style.top = 550 + 'px';
            }
        }
    }

    render() {
        return (
            <section className="section journey-wrapper" id="journey">
                <div className="journey">
                    <div className="journey__header">
                        <h1>Journey</h1>
                    </div>

                    <div className="mask" />
                    <div className="journey__content">
                        <div
                            className="event-wrapper event-wrapper--left beginning"
                            data-aos-offset="250"
                            data-aos="fade-right"
                        >
                            <div className="event show">
                                <div className="event__date">
                                    <span>March 2013</span>
                                </div>
                                <h2 className="event__name">Iglu is founded</h2>
                                <div className="event__circle" />
                            </div>
                        </div>

                        <div
                            className="event-wrapper event-wrapper--right design-project"
                            data-aos-offset="250"
                            data-aos="fade-left"
                        >
                            <div className="event show">
                                <div className="event__date">
                                    <span>June 2014</span>
                                    <span>Evocon</span>
                                </div>
                                <h2 className="event__name">First design project</h2>
                                <div className="event__circle event__circle--right" />
                            </div>
                        </div>

                        <div
                            className="event-wrapper event-wrapper--left spa"
                            data-aos-offset="250"
                            data-aos="fade-right"
                        >
                            <div className="event show">
                                <div className="event__date">
                                    <span>January 2015</span>
                                    <span>Südameapteek</span>
                                </div>
                                <h2 className="event__name">First single page application</h2>
                                <div className="event__circle" />
                            </div>
                        </div>

                        <div
                            className="event-wrapper event-wrapper--right app"
                            data-aos-offset="250"
                            data-aos="fade-left"
                        >
                            <div className="event show">
                                <div className="event__date">
                                    <span>November 2016</span>
                                    <span>Dietless</span>
                                </div>
                                <h2 className="event__name">First app</h2>
                                <div className="event__circle event__circle--right" />
                            </div>
                        </div>

                        <div
                            className="event-wrapper event-wrapper--left ux-project"
                            data-aos-offset="250"
                            data-aos="fade-right"
                        >
                            <div className="event show">
                                <div className="event__date">
                                    <span>December 2016</span>
                                    <span>Responsible business index</span>
                                </div>
                                <h2 className="event__name">First UX Project</h2>
                                <div className="event__circle" />
                            </div>
                        </div>

                        <div
                            className="event-wrapper event-wrapper--right new-team"
                            data-aos-offset="250"
                            data-aos="fade-left"
                        >
                            <div className="event show">
                                <div className="event__date">January 2018</div>
                                <h2 className="event__name">Iglu's Digital Agency team is created</h2>
                                <div className="event__circle event__circle--right" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
