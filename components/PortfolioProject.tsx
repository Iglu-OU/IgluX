import React, { useEffect } from 'react';

import HillTrees from './images/Hill-Trees.svg';
import RollingHills from './images/Rolling-Hills.svg';
import Separator from './images/Separator.svg';
import { EScreenSize } from './Portfolio';

export interface IPortfolioProject {
  name: string;
  title: string;
  description: string;
  goldenEgg?: { text: string; link: string };
  project?: string;
  Svg: React.ReactElement;
  tags: string[];
}

export interface IPortfolioProjectProps {
  data: IPortfolioProject;
  index: number;
  isMobile: boolean;
  screenSize: EScreenSize;
}

const svgLocations = [
  { trees: { top: 170, left: 10 }, hills: { dtMax: { left: -6638 }, dtMin: { left: -745 } } },
  { trees: { top: 90, left: 1370 }, hills: { dtMax: { left: -2925 }, dtMin: { left: -3148 } } },
  { trees: { top: 230, left: 0, rotation: '180deg' }, hills: { dtMax: { left: -1813 }, dtMin: { left: -2498 } } },
];

export const PortfolioProject: React.FC<IPortfolioProjectProps> = ({ data, index, isMobile, screenSize }) => {
  const [windowWidth, setWindowWidth] = React.useState<number | null>(null);
  const { name, description, Svg, project, goldenEgg, tags } = data;
  const { hills, trees } = svgLocations[index];
  const hillStyle = { left: screenSize === EScreenSize.DT_MAX ? hills.dtMax.left : hills.dtMin.left };
  const treeStyle = { top: trees.top, left: trees.left, transform: `rotateY(${trees.rotation})` };

  useEffect(() => {
    const handleResize = () => setWindowWidth(isNaN(window.innerWidth) ? window.outerWidth : window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <li
      className={`portfolio-project${index % 2 === 0 && !isMobile ? '' : ' project--reversed'}${
        isMobile ? ' is-mobile' : ''
      }`}
      data-aos="fade-up"
      data-aos-offset={windowWidth && windowWidth > 600 ? '150' : '350'}
    >
      <div className="background">
        {!isMobile && (
          <>
            <div className="hills" style={hillStyle}>
              <RollingHills />
            </div>
            <div className="trees" style={treeStyle}>
              <HillTrees />
            </div>
          </>
        )}
      </div>
      <div className="details">
        <div className="details__header">
          <h2 className="details__name">{name}</h2>
          <div className="headline-separator">
            <Separator />
          </div>
        </div>
        <div className="details__main">
          <span className="details__description">{description}</span>
          <p className="details__tags">
            {tags.map((tag, i) => (
              <React.Fragment key={`${tag}_${i}`}>
                {tag}
                <span className="tag" />
              </React.Fragment>
            ))}
          </p>
          <p className="details__links">
            {project ? (
              <a href={project}>
                <span className="project-home">Visit website</span>
              </a>
            ) : null}
            {goldenEgg ? (
              <a href={goldenEgg.link}>
                <span className="golden-egg">{goldenEgg.text}</span>
              </a>
            ) : null}
          </p>
        </div>
        {!isMobile ? (
          <div className="logo-wrapper">
            <div className="details__logo">{Svg}</div>
          </div>
        ) : null}
      </div>
    </li>
  );
};
