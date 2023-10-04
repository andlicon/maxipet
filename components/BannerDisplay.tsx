import React from 'react';
import Banner from './Banner';
import BannerControls from './BannerControls';
import { BannerContextProvider } from '../context/bannerContext';

const BannerDisplay = () => {
  return (
    <BannerContextProvider>
      <div className="banner__display">
        <Banner />
        <BannerControls />
      </div>
    </BannerContextProvider>
  );
};
export default BannerDisplay;
