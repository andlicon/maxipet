import Raect from 'react';
import { useBanner } from '../hooks/useBanner';
import DisplayChanger from './DisplayChanger';

const BannerControls = ({
  images,
  currentId,
  imageHandler }) => {

  const {
    currentImage,
    next,
    prev,
    count
  } = useBanner({ images });

  return (
    <div className='banner__controls flex gap-2'>
      {
        images.map((element, index) => {
          return (
            <DisplayChanger key={index} current={element.id == currentId} />
          )
        })
      }
    </div>
  )
}
export default BannerControls;
