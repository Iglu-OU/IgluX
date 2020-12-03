import React, { useEffect, useState } from 'react';
import { ReactComponent as RollingHills } from '../../../assets/portfolio/rolling_hills.svg';
import { ReactComponent as HillTrees } from '../../../assets/portfolio/hill_trees.svg';
import { IPortfolioProjectBase } from './PortfolioProject';
import { EScreenSize } from '../Portfolio';

interface IProjectBackgroundProps extends IPortfolioProjectBase {
    isMobile: boolean;
    screenSize: EScreenSize;
}

const ProjectBackground = ({ hillsPosition, treesPosition, isMobile: mob, screenSize }: IProjectBackgroundProps) => {
    const [isMobile, setMobile] = useState<boolean>(mob);
    useEffect(() => {
        console.log('DEBUG::P.BG', screenSize);
        setMobile(mob);
    }, [mob, screenSize]);
    const hillsLeft: number = screenSize === EScreenSize.DT_MAX ? hillsPosition.dtMax.left : hillsPosition.dtMin.left;
    const hillsRotation: string =
        screenSize === EScreenSize.DT_MAX ? hillsPosition.dtMax.rotation : hillsPosition.dtMin.rotation;
    const { top: treesTop, left: treesLeft, rotation: treesRotation } = treesPosition;
    return (
        <div className="background">
            {!isMobile && (
                <>
                    <div
                        className="hills"
                        style={{
                            left: hillsLeft,
                            transform: `rotateY(${hillsRotation})`,
                        }}
                    >
                        <RollingHills />
                    </div>
                    <div
                        className="trees"
                        style={{
                            top: treesTop,
                            left: treesLeft,
                            transform: `rotateY(${treesRotation})`,
                        }}
                    >
                        <HillTrees />
                    </div>
                </>
            )}
        </div>
    );
};

export default ProjectBackground;
