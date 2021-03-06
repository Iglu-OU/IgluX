import React from 'react';

export const WavesBottom: React.FC = () => (
  <svg
    className="work-flow__waves-bottom"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 1936 1034"
    preserveAspectRatio="xMidYMax slice"
  >
    <linearGradient
      id="bottom-wave-1"
      gradientUnits="userSpaceOnUse"
      x1="968"
      y1="-51.4999"
      x2="968"
      y2="-286.5024"
      gradientTransform="matrix(1 0 0 -1 0 738)"
    >
      <stop offset="0" stopColor="#054868" />
      <stop offset="1" stopColor="#00283B" stopOpacity="0.5" />
    </linearGradient>
    <linearGradient
      id="water-ice-gradient"
      x1="1185.8875"
      y1="-93.9308"
      x2="1185.8875"
      y2="-89.9267"
      gradientTransform="matrix(1936 0 0 9.14 -2294910 2450.2607)"
    >
      <stop offset="0" stopColor="#004A55" />
      <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.7" />
      <stop offset="1" stopColor="#00434F" stopOpacity="0.4" />
    </linearGradient>
    <path
      fill="url(#bottom-wave-1)"
      opacity="0.7"
      className="st0"
      d="M0,816.7v177.5c0,0.2,167,30.3,326.2,28.2c135.9-1.8,505.8-43.5,710.7-33.5c174.4,8.5,600.7,35.9,690,35.6c100.1-0.4,190.9-10.4,209.1-13.6V816.4c-46-16.4-110.1-26.9-306.1-26.9c-220.2,0-542.5,111.5-759.4,67.7c-209.2-42.2-452-71.5-625.5-67.3C88,793.8,0,816.7,0,816.7z"
    />
    <path
      fill="#05364D"
      d="M0.5,920.7c470.8-59.5,947,48.7,1392.3,39.9c289.6-5.7,543.5-72.4,543.5-72.4V767.6c-413.3-77.8-673.6,74.7-968.9,66.5c-215.7-6-563-129.5-966.9-64.3C0.5,769.9,0.5,920.7,0.5,920.7z"
    />
    <path id="water-ice" fill="url(#water-ice-gradient)" opacity="0.3" d="M0,322.4h1936.2v4H0V322.4z" />
  </svg>
);
