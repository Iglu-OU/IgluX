import * as React from 'react';

import './TagList.scss';

export interface ITagListProps {
    tags: string[];
    className?: string;
}

export class TagList extends React.Component<ITagListProps> {
    BEM(): string {
        const classArray = ['tag-list'];

        if (this.props.className) {
            classArray.push(this.props.className);
        }

        return classArray.join(' ');
    }

    render() {
        return (
            <ul className={this.BEM()}>
                {this.props.tags.map((tag: string, key: number) => {
                    return <li key={key}>{tag}</li>;
                })}
            </ul>
        );
    }
}
