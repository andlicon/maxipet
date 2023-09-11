import React from 'react';
import { useBanner } from '../hooks/useBanner';
import Banner from '../components/Banner';

const BannerDisplay = ({ images }) => {
  const {
    currentImage,
    next,
    prev
  } = useBanner({ images });

  console.log(currentImage)

  return (
    <div className='banner__display'>
      <Banner image={currentImage} />
    </div>
  )
}
export default BannerDisplay;
