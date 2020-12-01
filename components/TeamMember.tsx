import React from 'react';

import { ITeamMember } from '../pages/index';

interface TeamMemberProps {
  data: ITeamMember;
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  data: { name, title, description, descriptionExtended, imageUrl, imageSrc, imageSecSrc, imageAlt, skillSet, noHover },
}) => {
  const [windowWidth, setWindowWidth] = React.useState(0);

  React.useEffect(() => {
    setWindowWidth(isNaN(window?.innerWidth) ? window?.outerWidth : window?.innerWidth);
  });

  return (
    <li className="team-member" data-aos="fade-up" data-aos-offset={windowWidth > 600 ? '150' : '350'}>
      <div className="team-member__portrait mt-0">
        <img className="team-member__portrait-primary" loading="lazy" src={imageSrc} alt={imageAlt} />
        {imageSecSrc && (
          <img
            className={`team-member__portrait-secondary${noHover ? ' no-hover' : ''}`}
            loading="lazy"
            src={imageSecSrc}
            alt={imageAlt}
          />
        )}
      </div>
      <div className="team-member__description">
        <a
          className="team-member__name mt-0 h1"
          href={imageUrl}
          title={`LinkedIn - ${name}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <h2>{name}</h2>
        </a>
        <p className="team-member__title mt-0">
          <span>{title}</span>
        </p>
        <p>
          {description} {descriptionExtended}
        </p>
        <ul className="team-member__skills">
          {skillSet.map((skill, skillIndex) => (
            <li key={`skillet-${skillIndex}`}>{skill}</li>
          ))}
        </ul>
      </div>
    </li>
  );
};
