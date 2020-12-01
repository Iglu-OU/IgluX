import React from 'react';

export const Stars: React.FC = () => {
  React.useEffect(() => {
    window.addEventListener('resize', resizeWrapper);
    resizeWrapper();
    return () => {
      window.removeEventListener('resize', resizeWrapper);
    };
  });

  const resizeWrapper = () => {
    const waterIce = document.getElementById('water-ice');
    const waterIceTop = waterIce ? waterIce.getBoundingClientRect().top : 0;

    document
      .getElementsByClassName('star__Wrapper')[0]
      .setAttribute('style', `height: ${waterIceTop + window.pageYOffset}px`);
  };

  return (
    <div className="star__Wrapper">
      <div className="stars1 star" />
      <div className="stars2 star" />
      <div className="stars3 star" />
    </div>
  );
};
