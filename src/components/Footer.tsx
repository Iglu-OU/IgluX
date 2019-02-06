import { Component } from 'inferno';

import IcoFacebook from '../../assets/logos/ico-fb.svg';
import IcoInstagram from '../../assets/logos/ico-insta.svg';
import IcoLinkedIn from '../../assets/logos/ico-linkedin.svg';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    returnFooterLinks() {
        const internalList = [
            { link: 'https://iglu.ee/', name: 'Iglu' },
            { link: 'https://iglu.ee/#how', name: 'Clients' },
            { link: 'https://iglu.ee/#where', name: 'Contact us' },
        ];

        const internalLinkList = internalList.map(({ link, name }, index) => (
            <li className="footer__links-item" key={`internal-link-${index}`}>
                <a className="footer__link" href={link} target="_blank" rel="noopener">
                    {name}
                </a>
            </li>
        ));

        const externalList = [
            {
                link: 'https://www.instagram.com/igluda/',
                name: 'Instagram',
                imageSrc: IcoInstagram,
                imageAlt: 'Instagram icon',
            },
            {
                link: 'https://www.facebook.com/IgluOU/',
                name: 'Facebook',
                imageSrc: IcoFacebook,
                imageAlt: 'Facebook icon',
            },
            {
                link: 'https://www.linkedin.com/company/iglu-o%C3%BC/',
                name: 'LinkedIn',
                imageSrc: IcoLinkedIn,
                imageAlt: 'LinkedIn icon',
            },
        ];

        const externalLinkList = externalList.map((i, index) => {
            const { link, name, imageSrc, imageAlt } = i;
            return (
                <li className="footer__links-item" key={index}>
                    <a className="footer__link" href={link} target="_blank" rel="noopener">
                        <img className="ico ico--sm lazyload" alt={imageAlt} src={imageSrc} />
                        <span>{name}</span>
                    </a>
                </li>
            );
        });

        return [...internalLinkList, ...externalLinkList];
    }

    public render() {
        return (
            <footer className="footer">
                <ul className="footer__links mt-0 list-unstyled">{this.returnFooterLinks()}</ul>
            </footer>
        );
    }
}
