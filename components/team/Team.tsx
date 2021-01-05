import React from 'react';

import { CloudsSVG } from '../_images/Clouds';
import Separator from '../_images/Separator.svg';
import AlinaPrimary from '../_images/team/primary/alina.svg';
import AntonPrimary from '../_images/team/primary/anton.svg';
import EglePrimary from '../_images/team/primary/egle.svg';
import HarlesPrimary from '../_images/team/primary/harles.svg';
import IvarPrimary from '../_images/team/primary/ivar.svg';
import JoonasPrimary from '../_images/team/primary/joonas.svg';
import NaaberPrimary from '../_images/team/primary/kasparn.svg';
import SuviPrimary from '../_images/team/primary/kaspars.svg';
import KristoPrimary from '../_images/team/primary/kristo.svg';
import LauraPrimary from '../_images/team/primary/laura.svg';
import InternPrimary from '../_images/team/primary/praktikant.svg';
import TerasmaaPrimary from '../_images/team/primary/terasmaa.svg';
import AlinaSecondary from '../_images/team/secondary/alina.svg';
import AntonSecondary from '../_images/team/secondary/anton.svg';
import EgleSecondary from '../_images/team/secondary/egle.svg';
import HarlesSecondary from '../_images/team/secondary/harles.svg';
import IvarSecondary from '../_images/team/secondary/ivar.svg';
import JoonasSecondary from '../_images/team/secondary/joonas.svg';
import NaaberSecondary from '../_images/team/secondary/kasparn.svg';
import SuviSecondary from '../_images/team/secondary/kaspars.svg';
import KristoSecondary from '../_images/team/secondary/kristo.svg';
import LauraSecondary from '../_images/team/secondary/laura.svg';
import TerasmaaSecondary from '../_images/team/secondary/terasmaa.svg';
import { Stars } from '../stars/Stars';

export interface ITeamMember {
  name: string;
  title: string;
  description: string;
  descriptionExtended: string;
  imageUrl: string;
  PrimaryImage: JSX.Element;
  SecondaryImage?: JSX.Element;
  skillSet: string[];
  noHover?: boolean;
}

const Analysts: ITeamMember[] = [
  {
    name: 'Laura Asu',
    title: 'Team lead, UX & UI analyst',
    description: 'Keeps the team inspired and things running, smoothly.',
    descriptionExtended: 'She is one of the few who can perform open-heart surgery on a live system.',
    imageUrl: 'https://www.linkedin.com/in/laura-asu-40460663/',
    PrimaryImage: <LauraPrimary />,
    SecondaryImage: <LauraSecondary />,
    skillSet: ['UI analysis', 'Business analysis', 'User research', 'Usability testing'],
  },
  {
    name: 'Kristo Danilson',
    title: 'UX & UI analyst',
    description: 'Passionate about users and the business side of IT.',
    descriptionExtended: 'There is a rumour that he discovered the true meaning of disco. But then they changed it.',
    imageUrl: 'https://www.linkedin.com/in/kristo-danilson-a9a08b159/',
    PrimaryImage: <KristoPrimary />,
    SecondaryImage: <KristoSecondary />,
    skillSet: ['Business analysis', 'User research', 'Usability testing'],
  },
  {
    name: 'Joonas Kessel',
    title: 'UX & UI analyst',
    description: `Ensures the projects are on track and the users' needs are met.`,
    descriptionExtended: 'Watch out, you will most likely be hit by several witty remarks within a minute. We like.',
    imageUrl: 'https://www.linkedin.com/in/joonaskessel/',
    PrimaryImage: <JoonasPrimary />,
    SecondaryImage: <JoonasSecondary />,
    skillSet: ['Prototyping', 'User research', 'Usability testing'],
  },
];

const Designers: ITeamMember[] = [
  {
    name: 'Alina Trussova',
    title: 'Art director, UX & UI designer',
    description: 'Sparks the minds of designers while balancing creativity with rationality.',
    descriptionExtended: 'When everything is elegant and perfect on earth… the moon will be conquered.',
    imageUrl: 'Art Director, UX & UI Designer',
    PrimaryImage: <AlinaPrimary />,
    SecondaryImage: <AlinaSecondary />,
    skillSet: ['Branding', 'Graphic design', 'UI design', 'User research', 'Usability testing'],
    noHover: true,
  },
  {
    name: 'Egle Kiik',
    title: 'UX & UI designer',
    description: 'Bridges the gap between business and end user.',
    descriptionExtended: "Making digital rainbows with her unicorn skill set to make you feel like you're flying.",
    imageUrl: 'https://www.linkedin.com/in/egle-kiik-a3341451/',
    PrimaryImage: <EglePrimary />,
    SecondaryImage: <EgleSecondary />,
    skillSet: ['Printed media', 'Microcopy', 'UX analysis', 'UX/UI design', 'UX research', 'Usability testing'],
  },
  {
    name: 'Kerli Aava',
    title: 'Junior UX & UI designer',
    description: 'A connoisseur of life, who seeks out new experiences and places on a frequent basis.',
    descriptionExtended: "Possessing a wide range of skills, there's not much that escapes her eye.",
    imageUrl: 'https://www.linkedin.com/in/kerli-aava/',
    PrimaryImage: <InternPrimary />,
    skillSet: ['In progress...'],
    noHover: true,
  },
];

const Developers: ITeamMember[] = [
  {
    name: 'Harles-Herman Pilter',
    title: 'Lead front-end developer',
    description: 'Skilled in creating micro-interactions, also, has a strong sense for business.',
    descriptionExtended: 'He built a code delivery system that consists entirely of drones. Mr. Bezos is so jealous.',
    imageUrl: 'https://www.linkedin.com/in/harles-herman-pilter-6a3636114/',
    PrimaryImage: <HarlesPrimary />,
    SecondaryImage: <HarlesSecondary />,
    skillSet: ['Vue', 'Aurelia', 'React', 'Angular', 'TypeScript', 'App development', 'BEM'],
  },
  {
    name: 'Anton Aavik',
    title: 'Senior front-end developer',
    description: 'Open-source enthusiast, who strives for perfection.',
    descriptionExtended: `Abracadabra, hocus-pocus, add a bit of secret ingredients and magic happens.`,
    imageUrl: 'https://www.linkedin.com/in/anton-aavik-0ba1a9176/',
    PrimaryImage: <AntonPrimary />,
    SecondaryImage: <AntonSecondary />,
    skillSet: ['Vue', 'React', 'Angular', 'TypeScript', 'App development', 'BEM'],
  },
  {
    name: 'Tõnis Terasmaa',
    title: 'Front-end developer',
    description: 'Doing creative wizardry with software and hardware.',
    descriptionExtended: 'Cooking with one hand and coding with the other.... coding is a piece of cake.',
    imageUrl: 'https://www.linkedin.com/in/t%C3%B5nis-terasmaa-79b6bbb7/',
    PrimaryImage: <TerasmaaPrimary />,
    SecondaryImage: <TerasmaaSecondary />,
    skillSet: ['Vue', 'React', 'Angular', 'TypeScript', 'App development', 'BEM'],
  },
  {
    name: 'Ivar Kallejärv',
    title: 'Front-end developer',
    description: 'Adept at data visualization complemented by knowledge of system analysis.',
    descriptionExtended: "He could love books even more but they don't have landscape mode.",
    imageUrl: 'https://www.linkedin.com/in/ivar-kallej%C3%A4rv-21986611a/',
    PrimaryImage: <IvarPrimary />,
    SecondaryImage: <IvarSecondary />,
    skillSet: ['Aurelia', 'Ionic', 'C3', 'D3', 'Chart.js', 'React', 'Angular', 'TypeScript', 'App development', 'BEM'],
  },
  {
    name: 'Kaspar Suvi',
    title: 'Front-end developer',
    description: 'Wants to provide only reasonable and valuable code.',
    descriptionExtended: 'His daily routine consists of sports activities like badminton and git push-ups.',
    imageUrl: 'https://www.linkedin.com/in/kaspar-suvi-141080120/',
    PrimaryImage: <SuviPrimary />,
    SecondaryImage: <SuviSecondary />,
    skillSet: ['React', 'Angular', 'TypeScript', 'BEM'],
  },
  {
    name: 'Kaspar Naaber',
    title: 'Front-end developer',
    description: "A gentleman and a scholar who likes to keep pace in today's hectic world.",
    descriptionExtended: 'Balances an active lifestyle with active client communication.',
    imageUrl: 'https://www.linkedin.com/in/kaspar-naaber-6a240264/',
    PrimaryImage: <NaaberPrimary />,
    SecondaryImage: <NaaberSecondary />,
    skillSet: ['React', 'TypeScript', 'Flow', 'GraphQL', 'BEM'],
  },
];

export const Team: React.FC = () => (
  <section id="team">
    <Stars />
    <CloudsSVG />
    <div className="team__top-fold" />
    <div className="team-wrapper">
      <TeamSection
        title="UX & UI Analysts"
        desc="The invisible force behind a system, helping users reach point C without realizing they've already passed point B."
        members={Analysts}
      />
      <TeamSection
        title="UX & UI Designers"
        desc="Graceful and stylish, designing elegant solutions that feel easy and effortless."
        members={Designers}
      />
      <TeamSection
        title="Front-End Developers"
        desc="The reasoning engine behind the team, that simplifies complexity and solves problems."
        members={Developers}
      />
    </div>
  </section>
);

interface TeamSectionProps {
  title: string;
  desc: string;
  members: ITeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ title, desc, members }) => {
  const [windowWidth, setWindowWidth] = React.useState(0);
  React.useEffect(() => {
    setWindowWidth(isNaN(window?.innerWidth) ? window?.outerWidth : window?.innerWidth);
  });

  return (
    <>
      <div className="team__section" data-aos="zoom-in">
        <h2 className="team__heading">{title}</h2>
        <p className="team__heading-separator" aria-hidden="true">
          <Separator />
        </p>
        <p className="team__description">{desc}</p>
      </div>
      <ul className="mt-0 list-unstyled team">
        {members.map((i, index) => (
          <li
            key={index}
            className="team-member"
            data-aos="fade-up"
            data-aos-offset={windowWidth > 600 ? '150' : '350'}
          >
            <div className="team-member__portrait mt-0">
              <div className="team-member__portrait-primary">{i.PrimaryImage}</div>
              {i.SecondaryImage && (
                <div className={`team-member__portrait-secondary ${i.noHover ? 'no-hover' : ''}`}>
                  {i.SecondaryImage}
                </div>
              )}
            </div>
            <div className="team-member__description">
              <a
                className="team-member__name mt-0 h1"
                href={i.imageUrl}
                title={`LinkedIn - ${i.name}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <h2>{i.name}</h2>
              </a>
              <p className="team-member__title mt-0">
                <span>{title}</span>
              </p>
              <p>
                {i.description} {i.descriptionExtended}
              </p>
              <ul className="team-member__skills">
                {i.skillSet.map((skill, skillIndex) => (
                  <li key={`skillet-${skillIndex}`}>{skill}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
