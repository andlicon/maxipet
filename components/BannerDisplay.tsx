import React from 'react';
import Banner from './Banner';
import BannerControls from './BannerControls';
import { BannerContextProvider } from '../context/bannerContext';

const BannerDisplay = () => (
  <BannerContextProvider>
    <div className="flex flow-col flex-nowrap items-center justify-center relative">
      <Banner />
      <BannerControls />
    </div>
  </BannerContextProvider>
);
export default BannerDisplay;
