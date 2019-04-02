import * as React from 'react';
import { teamMemberList } from '../../content/teamMembers';
import { ITeamMember, TeamMember } from '../teamMember/TeamMember';
import { TeamStars } from '../teamStars/TeamStars';

import './Team.scss';

export class Team extends React.Component {
    renderTeam() {
        const designer = teamMemberList.filter((i: ITeamMember) => i.position === 'designer');
        const analyst = teamMemberList.filter((i: ITeamMember) => i.position === 'analyst');
        const fe = teamMemberList.filter((i: ITeamMember) => i.position === 'fe');

        return (
            <div className="team-wrapper">
                {this.renderTeamSection(
                    'UX & UI Analysts',
                    "The invisible force behind a system, helping users reach point C without realizing they've already passed point B.",
                    analyst,
                )}
                {this.renderTeamSection(
                    'UX & UI Designers',
                    'Graceful and stylish, designing elegant solutions that feel easy and effortless.',
                    designer,
                )}
                {this.renderTeamSection(
                    'Front-End Developers',
                    'The reasoning engine behind the team, that simplifies complexity and solves problems.',
                    fe,
                )}
            </div>
        );
    }

    renderTeamSection(title: string, desc: string, members: ITeamMember[]): JSX.Element {
        return (
            <React.Fragment>
                <div className="team__section" data-aos="zoom-in">
                    <h2 className="team__heading">{title}</h2>
                    <p className="team__description">{desc}</p>
                </div>
                <ul className="mt-0 list-unstyled team">
                    {members.map((i: ITeamMember, index: number) => (
                        <TeamMember data={i} key={index} />
                    ))}
                </ul>
            </React.Fragment>
        );
    }

    render() {
        return (
            <section id="team">
                <TeamStars />

                <div className="team__clouds" />

                <div className="team__top-fold" />
                {this.renderTeam()}
            </section>
        );
    }
}
