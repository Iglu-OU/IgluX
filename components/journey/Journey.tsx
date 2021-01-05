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
  const [minHeight, setMinHeight] = React.useState(156);

  React.useEffect(() => {
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  const onScroll = () => {
    const journeyWrapper = document.querySelector('.journey-wrapper') as HTMLElement;
    const htmlElement = document.querySelector('html');

    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const clientHeight = htmlElement?.clientHeight || 0;

    const windowBottom = scrollY + clientHeight;
    const elementTop = journeyWrapper.offsetTop + clientHeight / 2;
    const scrollPercentage = (windowBottom - elementTop) / journeyWrapper.scrollHeight;

    let scrolledOfJourney = scrollPercentage * journeyWrapper.offsetTop;

    const mask = document.querySelector('.mask') as HTMLElement;

    if (scrolledOfJourney > 156 && scrolledOfJourney < 650) {
      if (!minHeight || minHeight < scrolledOfJourney) {
        setMinHeight(scrolledOfJourney);
      } else if (minHeight > scrolledOfJourney) {
        scrolledOfJourney = minHeight;
      }
      if (mask) {
        mask.style.top = `${scrolledOfJourney}px`;
      }
    } else if (scrolledOfJourney >= 650) {
      if (mask) {
        mask.style.top = '650px';
      }
    }
  };

  return (
    <section className="journey-wrapper" id="journey">
      <div className="journey">
        <div className="journey__header">
          <h1>Journey</h1>
        </div>
        <div className="mask" />
        <div className="journey__content">
          {events.map((event, index) => (
            <JourneyEvent key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

const JourneyEvent = ({ position, year, title, project }: IEvent): JSX.Element => {
  const animation = position === 'left' ? 'fade-right' : 'fade-left';
  return (
    <div className={`event-wrapper event-wrapper--${position}`} data-aos-offset="250" data-aos={animation}>
      <div className="event">
        <div className="event__year">{year}</div>
        <h2 className="event__title">{title}</h2>
        {project && <p className="event__project">{project}</p>}
      </div>
    </div>
  );
};
