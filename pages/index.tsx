import React from 'react';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import BannerDisplay from '../components/BannerDisplay';
import SectionCategory from '../components/SectionCategory';
import SectionFeatured from '../components/SectionFeatured';
import SectionPopular from '../components/SectionPopular';
import SectionNews from '../components/SectionNews';
import SectionServices from '../components/SectionServices';
import SectionBrand from '../components/SectionBrand';
import Footer from '../components/Footer';
import { bannerImages } from '../constant/images';
import ad1 from '../images/ad1.png';
import ad2 from '../images/ad2.png';
import ad3 from '../images/ad3.png';

function HomePage() {
  return (
    <>
      <NavBar />
      <BannerDisplay images={bannerImages} />
      <div className="container page__content mx-auto">
        <SectionCategory />
        <SectionFeatured />
        {/* add */}
        <div className="flex ad w-full">
          <Image src={ad2} alt="A dog eating its dog food" className="w-1/2" />
          <Image src={ad1} alt="A shovel with dog food" className="w-1/2" />
        </div>
        <SectionPopular />
        {/* add */}
        <div className="ad w-full">
          <Image
            src={ad3}
            alt="A happy dog lay down over the grass, playing with its toy"
            className="w-full"
          />
        </div>
        <SectionNews />
        <SectionServices />
        <SectionBrand />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
