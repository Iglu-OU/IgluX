import * as React from 'react';

import IcoFacebook, { ReactComponent as IcoFacebookSVG } from '../../assets/logos/ico-fb.svg';
import IcoInstagram, { ReactComponent as IcoInstagramSVG } from '../../assets/logos/ico-insta.svg';
import IcoLinkedIn, { ReactComponent as IcoLinkedInSVG } from '../../assets/logos/ico-linkedin.svg';

export class Footer extends React.Component {
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
                link: 'https://www.instagram.com/iglukad/',
                name: 'Instagram',
                svg: IcoInstagramSVG,
                imageSrc: IcoInstagram,
                imageAlt: 'Instagram icon',
            },
            {
                link: 'https://www.facebook.com/IgluOU/',
                name: 'Facebook',
                svg: IcoFacebookSVG,
                imageSrc: IcoFacebook,
                imageAlt: 'Facebook icon',
            },
            {
                link: 'https://www.linkedin.com/company/iglu-o%C3%BC/',
                name: 'LinkedIn',
                svg: IcoLinkedInSVG,
                imageSrc: IcoLinkedIn,
                imageAlt: 'LinkedIn icon',
            },
        ];

        console.log('DEBUG::images', IcoLinkedIn, IcoLinkedInSVG);

        const externalLinkList = externalList.map(({ link, name, imageSrc, imageAlt }, index) => (
            <li className="footer__links-item" key={index}>
                <a className="footer__link" href={link} target="_blank" rel="noopener">
                    <img className="ico ico--sm lazyload" alt={imageAlt} src={imageSrc} />
                    <span>{name}</span>
                </a>
            </li>
        ));

        return [...internalLinkList, ...externalLinkList];
    }

    render() {
        return (
            <footer className="footer">
                <ul className="footer__links mt-0 list-unstyled">{this.returnFooterLinks()}</ul>
                <ul className="footer__links mt-0 list-unstyled">
                    <li className="footer__links-item">
                        <a href="https://www.iglu.ee/da/gdpr/" className="footer__link footer__link--small">
                            Terms and conditions
                        </a>
                    </li>
                </ul>
            </footer>
        );
    }
}
