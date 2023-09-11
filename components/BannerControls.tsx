import Raect from 'react';
import { useBanner } from '../hooks/useBanner';

const BannerControls = ({
  images,
  imageHandler }) => {

  const {
    currentImage,
    next,
    prev,
    count
  } = useBanner({ images });

  return (
    <div className='banner__controls'>
      {
        images.map((element, index) => {
          return (
            <button key={index}>
              clcik
            </button>
          )
        })
      }
    </div>
  )
}
export default BannerControls;
