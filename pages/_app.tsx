import Aos from 'aos';
import { AppProps } from 'next/app';
import React from 'react';

import '../styles/main.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    Aos.init({ once: true });
  });

  return <Component {...pageProps} />;
};

export default App;
