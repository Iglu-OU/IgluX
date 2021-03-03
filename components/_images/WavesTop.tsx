import React from 'react';

export const WavesTop: React.FC = () => (
  <svg
    className="work-flow__waves-top"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1936 1034"
    preserveAspectRatio="xMidYMax slice"
  >
    <linearGradient id="wave_1" x1="968" y1="624.4" x2="968" y2="1139.4" gradientTransform="matrix(1 0 0 1 0 -298)">
      <stop offset="0" stopColor="#054868" />
      <stop offset="1" stopColor="#00283B" stopOpacity="0.5" />
    </linearGradient>
    <path fill="url(#wave_1)" opacity="0.2" d="M0,841.4h1936v-515H0V841.4z" />
  </svg>
);
