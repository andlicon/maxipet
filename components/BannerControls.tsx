import DisplayChanger from './DisplayChanger';
import { useBannerContext } from '../context/bannerContext';

const BannerControls = () => {
  const { images, currentImage, setCurrentImage } = useBannerContext();

  const currentId = currentImage.id;

  return (
    <div className="banner__controls flex gap-2">
      {images.map((element, index) => (
        <DisplayChanger
          key={index}
          current={element.id === currentId}
          changeImage={() => {
            setCurrentImage(element);
          }}
        />
      ))}
    </div>
  );
};
export default BannerControls;
