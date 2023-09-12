import React from 'react';
import { useBanner } from '../hooks/useBanner';
import Banner from '../components/Banner';
import BannerControls from '../components/BannerControls';

const BannerDisplay = ({ images }) => {
  const {
    current,
    count,
    onChangeImageHandler
  } = useBanner({ images });

  return (
    <div className='banner__display'>
      <Banner image={current} />
      <BannerControls
        images={images}
        imageHandler={onChangeImageHandler}
        currentId={current.id} />
    </div>
  )
}
export default BannerDisplay;
