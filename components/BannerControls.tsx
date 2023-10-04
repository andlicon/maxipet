import DisplayChanger from './DisplayChanger';
import { Image } from '../constant/images';

interface BannerControlsProp {
  images: Image[];
  currentId: number;
  imageHandler: Function;
};

const BannerControls = ({ images, currentId, imageHandler }: BannerControlsProp) => (
  <div className="banner__controls flex gap-2">
    {images.map((element, index) => (
      <DisplayChanger
        key={index}
        current={element.id === currentId}
        changeImage={() => {
          imageHandler(element);
        }}
      />
    ))}
  </div>
);
export default BannerControls;
