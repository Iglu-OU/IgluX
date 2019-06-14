import { ITeamMember } from '../index';

import LauraPortrait from '../../assets/team/primary/laura.svg';
import KristoPortrait from '../../assets/team/primary/kristo.svg';
import JoonasPortrait from '../../assets/team/primary/joonas.svg';
import KadiPortrait from '../../assets/team/primary/kadi.svg';
import EglePortrait from '../../assets/team/primary/egle.svg';
import ViljarPortrait from '../../assets/team/primary/viljar.svg';
import AntonPortrait from '../../assets/team/primary/anton.svg';
import HarlesPortrait from '../../assets/team/primary/harles.svg';
import IvarPortrait from '../../assets/team/primary/ivar.svg';
import TerasmaaPortrait from '../../assets/team/primary/terasmaa.svg';
import KasparPortrait from '../../assets/team/primary/kaspar.svg';
import AlinaPortrait from '../../assets/team/primary/alina.svg';

import LauraPortraitSec from '../../assets/team/secondary/laura.svg';
import KristoPortraitSec from '../../assets/team/secondary/kristo.svg';
import JoonasPortraitSec from '../../assets/team/secondary/joonas.svg';
import KadiPortraitSec from '../../assets/team/secondary/kadi.svg';
import EglePortraitSec from '../../assets/team/secondary/egle.svg';
import ViljarPortraitSec from '../../assets/team/secondary/viljar.svg';
import AntonPortraitSec from '../../assets/team/secondary/anton.svg';
import HarlesPortraitSec from '../../assets/team/secondary/harles.svg';
import IvarPortraitSec from '../../assets/team/secondary/ivar.svg';
import TerasmaaPortraitSec from '../../assets/team/secondary/terasmaa.svg';
import KasparPortraitSec from '../../assets/team/secondary/kaspar.svg';
import AlinaPortraitSec from '../../assets/team/secondary/alina.svg';

export const teamMemberList: ITeamMember[] = [
    {
        name: 'Laura Asu',
        title: 'Team lead, UX & UI analyst',
        description: 'Keeps the team inspired and things running, smoothly.',
        descriptionExtended: 'She is one of the few who can perform open-heart surgery on a live system.',
        imageUrl: 'https://www.linkedin.com/in/laura-asu-40460663/',
        imageSrc: LauraPortrait,
        imageSecSrc: LauraPortraitSec,
        imageAlt: `Laura Asu's portrait... if she was an Eskimo`,
        skillSet: ['UI analysis', 'Business analysis', 'User research', 'User testing'],
        position: 'analyst',
        noHover: false,
    },
    {
        name: 'Kristo Danilson',
        title: 'UX & UI analyst',
        description: 'Passionate about users and the business side of IT.',
        descriptionExtended:
            'There is a rumour that he discovered the true meaning of disco. But then they changed it.',
        imageUrl: 'https://www.linkedin.com/in/kristo-danilson-a9a08b159/',
        imageSrc: KristoPortrait,
        imageSecSrc: KristoPortraitSec,
        imageAlt: `Kristo Danilson's portrait... if he was an Eskimo`,
        skillSet: ['Business analysis', 'User research', 'User testing'],
        position: 'analyst',
        noHover: false,
    },
    {
        name: 'Joonas Kessel',
        title: 'UX & UI analyst',
        description: `Ensures the projects are on track and the users' needs are met.`,
        descriptionExtended:
            'Watch out, you will most likely be hit by several witty remarks within a minute. We like.',
        imageUrl: 'https://www.linkedin.com/in/joonaskessel/',
        imageSrc: JoonasPortrait,
        imageSecSrc: JoonasPortraitSec,
        imageAlt: `Joonas Kessel's portrait... if he was an Eskimo`,
        skillSet: ['Prototyping', 'User research', 'User testing'],
        position: 'analyst',
        noHover: false,
    },
    {
        name: 'Alina Trussova',
        title: 'Art Director, UX & UI Designer',
        description: 'Sparks the minds of designers while balancing creativity with rationality.',
        descriptionExtended: 'When everything is elegant and perfect on earth… the moon will be conquered.',
        imageUrl: 'Art Director, UX & UI Designer',
        imageSrc: AlinaPortrait,
        imageSecSrc: AlinaPortraitSec,
        imageAlt: `Alina Trussova's portrait... if she was an Eskimo`,
        skillSet: ['Branding', 'Graphic design', 'UI design', 'User research', 'User testing'],
        position: 'designer',
        noHover: true,
    },
    {
        name: 'Kadi Lukas',
        title: 'UX & UI Designer',
        description: 'Has an eye or two (probably three) for detail.',
        descriptionExtended: 'The third eye helped her win a staring contest against Chuck Norris.',
        imageUrl: 'https://www.linkedin.com/in/kadi-lukas-a64a99130/',
        imageSrc: KadiPortrait,
        imageSecSrc: KadiPortraitSec,
        imageAlt: `Kadi Lukas's portrait... if she was an Eskimo`,
        skillSet: ['Graphic design', 'Cinematography', 'UI design', 'User research', 'User testing'],
        position: 'designer',
        noHover: false,
    },
    {
        name: 'Egle Kiik',
        title: 'UX & UI Designer',
        description: 'Bridges the gap between business and end user.',
        descriptionExtended: "Making digital rainbows with her unicorn skillset to make you feel like you're flying.",
        imageUrl: 'https://www.linkedin.com/in/egle-kiik-a3341451/',
        imageSrc: EglePortrait,
        imageSecSrc: EglePortraitSec,
        imageAlt: `Egle Kiik's portrait... if she was an Eskimo`,
        skillSet: ['Video editing', 'Printed media', 'UX writing', 'UI design', 'User research', 'User testing'],
        position: 'designer',
        noHover: false,
    },
    {
        name: 'Viljar Kärgenberg',
        title: 'Front-end lead',
        description: 'Leads and supports the dev team with dedication and eagerness.',
        descriptionExtended: 'Scores 5-point slam dunks with ease while learning new emerging technologies.',
        imageUrl: 'https://www.linkedin.com/in/viljar-k%C3%A4rgenberg-81378398/',
        imageSrc: ViljarPortrait,
        imageSecSrc: ViljarPortraitSec,
        imageAlt: `Viljar Kärgenberg's portrait... if he was an Eskimo`,
        skillSet: ['Vue', 'React', 'Angular', 'TypeScript', 'App development', 'BEM'],
        position: 'fe',
        noHover: false,
    },
    {
        name: 'Harles-Herman Pilter',
        title: 'Senior front-end developer',
        description: 'Skilled in creating micro-interactions, also, has a strong sense for business.',
        descriptionExtended:
            'He built a code delivery system that consists entirely of drones. Mr. Bezos is so jealous.',
        imageUrl: 'https://www.linkedin.com/in/harles-herman-pilter-6a3636114/',
        imageSrc: HarlesPortrait,
        imageSecSrc: HarlesPortraitSec,
        imageAlt: `Harles-Herman Pilter's portrait... if he was an Eskimo`,
        skillSet: ['Vue', 'Aurelia', 'React', 'Angular', 'TypeScript', 'App development', 'BEM'],
        position: 'fe',
        noHover: false,
    },
    {
        name: 'Anton Aavik',
        title: 'Senior front-end developer',
        description: 'Open-source enthusiast, who strives for perfection.',
        descriptionExtended: `Abracadabra, hocus pocus, add a bit of secret ingredients and magic happens.`,
        imageUrl: 'https://www.linkedin.com/in/anton-aavik-0ba1a9176/',
        imageSrc: AntonPortrait,
        imageSecSrc: AntonPortraitSec,
        imageAlt: `Anton Aavik's portrait... if he was an Eskimo`,
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
        imageSrc: TerasmaaPortrait,
        imageSecSrc: TerasmaaPortraitSec,
        imageAlt: `Tõnis Terasmaa's portrait... if he was an Eskimo`,
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
        imageSrc: IvarPortrait,
        imageSecSrc: IvarPortraitSec,
        imageAlt: `Ivar Kallejärv's portrait... if he was an Eskimo`,
        skillSet: [
            'Aurelia',
            'Ionic',
            'C3',
            'D3',
            'Chart.js',
            'React',
            'Angular',
            'TypeScript',
            'App development',
            'BEM',
        ],
        position: 'fe',
        noHover: false,
    },
    {
        name: 'Kaspar Suvi',
        title: 'Junior front-end developer',
        description: 'Wants to provide only reasonable and valuable code.',
        descriptionExtended: 'His daily routine consists of sports activities like badminton and git push-ups.',
        imageUrl: 'https://www.linkedin.com/in/kaspar-suvi-141080120/',
        imageSrc: KasparPortrait,
        imageSecSrc: KasparPortraitSec,
        imageAlt: `Kaspar Suvi's portrait... if he was an Eskimo`,
        skillSet: ['React', 'Angular', 'TypeScript', 'BEM'],
        position: 'fe',
        noHover: false,
    },
];
