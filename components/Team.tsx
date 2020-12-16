import React from 'react';

import { ITeamMember } from '../pages/index';
import { CloudsSVG } from './images/Clouds';
import AlinaPrimary from './images/team/primary/alina.svg';
import AntonPrimary from './images/team/primary/anton.svg';
import EglePrimary from './images/team/primary/egle.svg';
import HarlesPrimary from './images/team/primary/harles.svg';
import IvarPrimary from './images/team/primary/ivar.svg';
import JoonasPrimary from './images/team/primary/joonas.svg';
import NaaberPrimary from './images/team/primary/kasparn.svg';
import SuviPrimary from './images/team/primary/kaspars.svg';
import KristoPrimary from './images/team/primary/kristo.svg';
import LauraPrimary from './images/team/primary/laura.svg';
import InternPrimary from './images/team/primary/praktikant.svg';
import TerasmaaPrimary from './images/team/primary/terasmaa.svg';
import AlinaSecondary from './images/team/secondary/alina.svg';
import AntonSecondary from './images/team/secondary/anton.svg';
import EgleSecondary from './images/team/secondary/egle.svg';
import HarlesSecondary from './images/team/secondary/harles.svg';
import IvarSecondary from './images/team/secondary/ivar.svg';
import JoonasSecondary from './images/team/secondary/joonas.svg';
import NaaberSecondary from './images/team/secondary/kasparn.svg';
import SuviSecondary from './images/team/secondary/kaspars.svg';
import KristoSecondary from './images/team/secondary/kristo.svg';
import LauraSecondary from './images/team/secondary/laura.svg';
import TerasmaaSecondary from './images/team/secondary/terasmaa.svg';
import { Stars } from './Stars';
import { TeamMember } from './TeamMember';

export const teamMemberList: ITeamMember[] = [
  {
    name: 'Laura Asu',
    title: 'Team lead, UX & UI analyst',
    description: 'Keeps the team inspired and things running, smoothly.',
    descriptionExtended: 'She is one of the few who can perform open-heart surgery on a live system.',
    imageUrl: 'https://www.linkedin.com/in/laura-asu-40460663/',
    PrimaryImage: <LauraPrimary />,
    SecondaryImage: <LauraSecondary />,
    skillSet: ['UI analysis', 'Business analysis', 'User research', 'Usability testing'],
    position: 'analyst',
    noHover: false,
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
    position: 'analyst',
    noHover: false,
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
    position: 'analyst',
    noHover: false,
  },
  {
    name: 'Alina Trussova',
    title: 'Art Director, UX & UI Designer',
    description: 'Sparks the minds of designers while balancing creativity with rationality.',
    descriptionExtended: 'When everything is elegant and perfect on earth… the moon will be conquered.',
    imageUrl: 'Art Director, UX & UI Designer',
    PrimaryImage: <AlinaPrimary />,
    SecondaryImage: <AlinaSecondary />,
    skillSet: ['Branding', 'Graphic design', 'UI design', 'User research', 'Usability testing'],
    position: 'designer',
    noHover: true,
  },
  {
    name: 'Egle Kiik',
    title: 'UX & UI Designer',
    description: 'Bridges the gap between business and end user.',
    descriptionExtended: "Making digital rainbows with her unicorn skill set to make you feel like you're flying.",
    imageUrl: 'https://www.linkedin.com/in/egle-kiik-a3341451/',
    PrimaryImage: <EglePrimary />,
    SecondaryImage: <EgleSecondary />,
    skillSet: ['Printed media', 'Microcopy', 'UX analysis', 'UX/UI design', 'UX research', 'Usability testing'],
    position: 'designer',
    noHover: false,
  },
  {
    name: 'Kerli Aava',
    title: 'UX & UI Intern',
    description: 'A connoisseur of life, who seeks out new experiences and places on a frequent basis.',
    descriptionExtended: "Possessing a wide range of skills, there's not much that escapes her eye.",
    imageUrl: 'https://www.linkedin.com/in/kerli-aava/',
    PrimaryImage: <InternPrimary />,
    skillSet: ['In progress...'],
    position: 'designer',
    noHover: true,
  },
  {
    name: 'Harles-Herman Pilter',
    title: 'Senior front-end developer',
    description: 'Skilled in creating micro-interactions, also, has a strong sense for business.',
    descriptionExtended: 'He built a code delivery system that consists entirely of drones. Mr. Bezos is so jealous.',
    imageUrl: 'https://www.linkedin.com/in/harles-herman-pilter-6a3636114/',
    PrimaryImage: <HarlesPrimary />,
    SecondaryImage: <HarlesSecondary />,
    skillSet: ['Vue', 'Aurelia', 'React', 'Angular', 'TypeScript', 'App development', 'BEM'],
    position: 'fe',
    noHover: false,
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
    position: 'fe',
    noHover: false,
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
    position: 'fe',
    noHover: false,
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
    position: 'fe',
    noHover: false,
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
    position: 'fe',
    noHover: false,
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
    position: 'fe',
    noHover: false,
  },
];

const designer = teamMemberList.filter(({ position }) => position === 'designer');
const analyst = teamMemberList.filter(({ position }) => position === 'analyst');
const fe = teamMemberList.filter(({ position }) => position === 'fe');

export const Team: React.FC = () => (
  <section className="section" id="team">
    <Stars />
    <CloudsSVG />
    <div className="team__top-fold" />
    <TeamWrapper />
  </section>
);

const TeamWrapper = () => (
  <div className="team-wrapper">
    <TeamSection
      title="UX & UI Analysts"
      desc="The invisible force behind a system, helping users reach point C without realizing they've already passed point B."
      members={analyst}
    />
    <TeamSection
      title="UX & UI Designers"
      desc="Graceful and stylish, designing elegant solutions that feel easy and effortless."
      members={designer}
    />
    <TeamSection
      title="Front-End Developers"
      desc="The reasoning engine behind the team, that simplifies complexity and solves problems."
      members={fe}
    />
  </div>
);

interface TeamSectionProps {
  title: string;
  desc: string;
  members: ITeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ title, desc, members }) => (
  <>
    <div className="team__section" data-aos="zoom-in">
      <h2 className="team__heading">{title}</h2>
      <p className="team__description">{desc}</p>
    </div>
    <ul className="mt-0 list-unstyled team">
      {members.map((i, index) => (
        <TeamMember data={i} key={index} />
      ))}
    </ul>
  </>
);
