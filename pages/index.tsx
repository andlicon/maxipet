import React from 'react';
import Header from '../components/NavBar';
import BannerDisplay from '../components/BannerDisplay';
import { bannerImages } from '../constant/images';

function HomePage() {
  return (
    <>
      <Header />
      <BannerDisplay images={bannerImages} />
    </>
  );
}

export default HomePage;
