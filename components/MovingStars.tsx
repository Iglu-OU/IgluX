import React from 'react';

export const MovingStars: React.FC = () => {
  const [height, setHeight] = React.useState('0px');

  React.useEffect(() => {
    const waterIceTop = document.getElementById('water-ice')?.getBoundingClientRect().top || 0;
    const newHeight = waterIceTop + window.pageYOffset;
    setHeight(`${newHeight}px`);
  });

  return (
    <div className="star__Wrapper" style={{ height }}>
      <div className="stars1 star" />
      <div className="stars2 star" />
      <div className="stars3 star" />
    </div>
  );
};
