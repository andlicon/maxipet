import React from 'react';
import { useBanner } from '../hooks/useBanner';
import Banner from './Banner';
import BannerControls from './BannerControls';

const BannerDisplay = ({ images }) => {
  const { current, onChangeImageHandler } = useBanner({ images });

  return (
    <div className="banner__display">
      <Banner url={current.url} id={current.id} alt={current.alt} />
      <BannerControls
        images={images}
        imageHandler={onChangeImageHandler}
        currentId={current.id}
      />
    </div>
  );
};
export default BannerDisplay;
