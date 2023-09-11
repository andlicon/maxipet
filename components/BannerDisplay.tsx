import React, { useState } from 'react';
import Banner from '../components/Banner';
import BannerControls from '../components/BannerControls';

const BannerDisplay = ({ images }) => {
  const [current, setCurrent] = useState(images[0]);

  const currentImageHandler = (newImage) => {
    setCurrent(newImage);
  }

  return (
    <div className='banner__display'>
      <Banner image={current} />
      <BannerControls
        images={images}
        imageHandler={currentImageHandler} />
    </div>
  )
}
export default BannerDisplay;
