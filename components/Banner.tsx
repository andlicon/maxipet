import React from 'react';
import { useBannerContext } from '../context/bannerContext';

const Banner = () => {
  const {
    currentImage
  } = useBannerContext();

  return (
    <div className="banner">
      <img
        src={currentImage.url.src}
        alt={currentImage.alt}
        className="banner_img mx-auto" />
    </div>
  )
};
export default Banner;
