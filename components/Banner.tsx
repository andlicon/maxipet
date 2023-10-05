import React from 'react';
import { useBannerContext } from '../context/bannerContext';

const Banner = () => {
  const { currentImage } = useBannerContext();

  return (
    <img
      src={currentImage.url.src}
      alt={currentImage.alt}
      className="mx-auto"
    />
  );
};
export default Banner;
