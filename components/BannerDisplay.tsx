import React from 'react';
import { useBanner } from '../hooks/useBanner';
import Banner from './Banner';
import BannerControls from './BannerControls';
import { Image } from '../constant/images';

interface BannerDisplayProps {
  images: Image[];
};

const BannerDisplay = ({ images }: BannerDisplayProps) => {
  const { current, onChangeImageHandler } = useBanner({ images });

  return (
    <div className="banner__display">
      <Banner url={current.url} alt={current.alt} />
      <BannerControls
        images={images}
        imageHandler={onChangeImageHandler}
        currentId={current.id}
      />
    </div>
  );
};
export default BannerDisplay;
