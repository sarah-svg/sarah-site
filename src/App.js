import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Home from './Home/Home.js';

export default function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  return (
    <div className='body'>
      {isDesktopOrLaptop && <Home/>}
      {isTabletOrMobile && <Home />}
      {isBigScreen && <Home />}
      {isPortrait && <Home />}
      {isRetina && <Home />}
    </div>
  );
}

//  <Footer/>