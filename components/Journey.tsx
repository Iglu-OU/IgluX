import React from 'react';

interface IEvent {
  position: 'left' | 'right';
  year: string;
  title: string;
  project?: string;
}

const events: IEvent[] = [
  { position: 'left', title: 'Iglu is founded', year: '2013' },
  { position: 'right', title: 'First design project', year: '2014', project: 'Evocon' },
  { position: 'left', title: 'First single page application', year: '2015', project: 'Südameapteek' },
  { position: 'right', title: 'First app', year: '2016', project: 'Dietless' },
  { position: 'left', title: 'First UX project', year: '2016', project: 'Responsible business index' },
  { position: 'right', title: "Iglu's Digital Agency team is created", year: '2018' },
];

export const Journey: React.FC = () => {
  let minHeight = 156;

  React.useEffect(() => {
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  const onScroll = () => {
    const journeyWrapper = document.querySelector('.journey-wrapper') as any;
    const htmlElement = document.querySelector('html');

    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const clientHeight = htmlElement?.clientHeight || 0;

    const windowBottom = scrollY + clientHeight;
    const elementTop = journeyWrapper.offsetTop + clientHeight / 2;
    const scrollPercentage = (windowBottom - elementTop) / journeyWrapper.scrollHeight;

    let scrolledOfJourney = scrollPercentage * journeyWrapper.offsetTop;

    const mask: any = document.querySelector('.mask');

    if (scrolledOfJourney > 156 && scrolledOfJourney < 650) {
      if (!minHeight || minHeight < scrolledOfJourney) {
        minHeight = scrolledOfJourney;
      } else if (minHeight > scrolledOfJourney) {
        scrolledOfJourney = minHeight;
      }
      if (mask) {
        mask.style.top = scrolledOfJourney + 'px';
      }
    } else if (scrolledOfJourney >= 650) {
      if (mask) {
        mask.style.top = 650 + 'px';
      }
    }
  };

  const renderEvent = (event: IEvent, key: number): JSX.Element => {
    const animation = event.position === 'left' ? 'fade-right' : 'fade-left';
    return (
      <div
        className={`event-wrapper event-wrapper--${event.position}`}
        data-aos-offset="250"
        data-aos={animation}
        key={key}
      >
        <div className="event">
          <div className="event__year">{event.year}</div>
          <h2 className="event__title">{event.title}</h2>
          {event.project && <p className="event__project">{event.project}</p>}
        </div>
      </div>
    );
  };

  return (
    <section className="section journey-wrapper" id="journey">
      <div className="journey">
        <div className="journey__header">
          <h1>Journey</h1>
        </div>
        <div className="mask" />
        <div className="journey__content">
          {events.map((event: IEvent, index: number) => renderEvent(event, index))}
        </div>
      </div>
    </section>
  );
};
