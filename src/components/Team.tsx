import { Component } from 'inferno';

import { teamMemberList } from '../utils/teamMembers';
import TeamMember from './TeamMember';
import { ITeamMember } from '../index';

export default class Team extends Component {
    renderTeam(): JSX.Element {
        return (
            <div className="team-wrapper">
                <div className="team__header">
                    <h1>Our team</h1>
                </div>

                <ul className="mt-0 list-unstyled team">
                    {teamMemberList.map((i: ITeamMember, index: number) => (
                        <TeamMember data={i} key={index} />
                    ))}
                </ul>
            </div>
        );
    }

    renderTopFold() {
        return (
            <svg
                className="team__top-fold"
                id="team__top-fold"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="5 0 1925 1034"
                preserveAspectRatio="xMidYMax slice"
            >
                <defs>
                    <linearGradient
                        id="linear-gradient"
                        x1="968.59"
                        x2="968.59"
                        y1="309.68"
                        y2="328.14"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#004a55" offset="0" id="stop6" />
                        <stop stop-color="#004a55" stop-opacity=".98" offset="0" id="stop8" />
                        <stop stop-color="#00434f" stop-opacity=".4" offset="1" id="stop10" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-2"
                        x1="968.59"
                        x2="968.59"
                        y1="327.38"
                        y2="818.04"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#01323e" offset="0" id="stop13" />
                        <stop stop-color="#01323e" stop-opacity="0" offset="1" id="stop15" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-3" x1="968.33" x2="968.33" y1="389.28" y2="862.55" />
                    <linearGradient id="linear-gradient-4" x1="968.5" x2="968.5" y1="529.47" y2="849.55" />
                    <linearGradient id="linear-gradient-5" x1="968.33" x2="968.33" y1="628.26" y2="852.25" />
                    <linearGradient
                        id="linear-gradient-6"
                        x1="1"
                        x2="1936"
                        y1="838.9"
                        y2="838.9"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(0 46)"
                    >
                        <stop stop-color="#002735" offset="0" id="stop21" stop-opacity="1" />
                        <stop stop-color="#01323e" offset="1" id="stop23" />
                        <stop stop-color="#002735" stop-opacity=".949" offset="1" id="stop25" />
                    </linearGradient>
                </defs>
                <g transform="rotate(180 968 517)">
                    <path
                        d="M1 872.25v133.52c35.65 6.31 200.39 23.22 326.16 25.08 135.84 2 544.12-34.51 710.74-34.51 174.59 0 600.75 37 690 36.72 100.13-.36 189.22-10.26 207.41-13.63V872.25z"
                        id="path32"
                        opacity=".7"
                        fill="#08353f"
                    />
                    <path
                        d="M2.12 940.77s287.69-23.43 423.48-21.59c148.15 2 775.62 56.91 968.8 57 239.46.12 541.6-63.76 541.6-63.76l-.59-107.42s-84.09-11.41-198.94-11.41c-117.41 0-542 68.64-757.75 67.14s-601.54-58.4-939.57-58.4c-27.62 0-38.15 3.19-38.15 3.19z"
                        id="path34"
                        fill="#002735"
                        fill-opacity="1"
                    />
                </g>
            </svg>
        );
    }

    public render() {
        return (
            <section className="section" id="team">
                <div className="team__top-fold" />
                {this.renderTeam()}
            </section>
        );
    }
}
