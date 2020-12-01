import Image from 'next/image';
import React from 'react';

const footerInternalLinks = [
  { link: 'https://iglu.ee/', name: 'Iglu' },
  { link: 'https://iglu.ee/#how', name: 'Clients' },
  { link: 'https://iglu.ee/#where', name: 'Contact us' },
];
const footerExternalLinks = [
  {
    link: 'https://www.instagram.com/iglukad/',
    name: 'Instagram',
    imageSrc: '/assets/logos/ico-insta.svg',
    imageAlt: 'Instagram icon',
  },
  {
    link: 'https://www.facebook.com/IgluOU/',
    name: 'Facebook',
    imageSrc: '/assets/logos/ico-fb.svg',
    imageAlt: 'Facebook icon',
  },
  {
    link: 'https://www.linkedin.com/company/iglu-o%C3%BC/',
    name: 'LinkedIn',
    imageSrc: '/assets/logos/ico-linkedin.svg',
    imageAlt: 'LinkedIn icon',
  },
];

export const Footer: React.FC = () => (
  <footer className="footer">
    <ul className="footer__links mt-0 list-unstyled">
      {footerInternalLinks.map(({ link, name }, index) => (
        <li className="footer__links-item" key={`internal-link-${index}`}>
          <a className="footer__link" href={link} target="_blank" rel="noreferrer noopener">
            {name}
          </a>
        </li>
      ))}
      {footerExternalLinks.map(({ link, name, imageSrc, imageAlt }, index) => (
        <li className="footer__links-item" key={index}>
          <a className="footer__link" href={link} target="_blank" rel="noreferrer noopener">
            <img className="ico ico--sm" alt={imageAlt} src={imageSrc} loading="lazy" />
            <span>{name}</span>
          </a>
        </li>
      ))}
    </ul>
    <ul className="footer__links mt-0 list-unstyled">
      <li className="footer__links-item">
        <a href="https://www.iglu.ee/da/gdpr/" className="footer__link footer__link--small">
          Terms and conditions
        </a>
      </li>
    </ul>
  </footer>
);
