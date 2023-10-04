import React from 'react';
import { useBanner } from '../hooks/useBanner';
import Banner from './Banner';
import BannerControls from './BannerControls';
import { Image } from '../constant/images';
import { BannerContextProvider } from '../context/bannerContext';

interface BannerDisplayProps {
  images: Image[];
};

const BannerDisplay = ({ images }: BannerDisplayProps) => {
  const { current, onChangeImageHandler } = useBanner({ images });

  return (
    <BannerContextProvider>
      <div className="banner__display">
        <Banner />
        <BannerControls
          images={images}
          imageHandler={onChangeImageHandler}
          currentId={current.id}
        />
      </div>
    </BannerContextProvider>
  );
};
export default BannerDisplay;
