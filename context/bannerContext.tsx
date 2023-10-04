import React from 'react';
import { Image, bannerImages } from '../constant/images';

const BannerContext = React.createContext(
  {} as {
    images: Image[]
    setImages: React.Dispatch<React.SetStateAction<Image[]>>
    currentImage: Image
    setCurrentImage: React.Dispatch<React.SetStateAction<Image>>
  }
);

interface Props {
  children: React.ReactNode
}

export const BannerContextProvider = ({ children }: Props) => {
  const [images, setImages] = React.useState(bannerImages)
  const [currentImage, setCurrentImage] = React.useState(bannerImages[0])

  const value = React.useMemo(
    () => (
      {
        images, setImages, currentImage, setCurrentImage
      }
    ), [images, setImages, currentImage, setCurrentImage]);

  return (
    <BannerContext.Provider value={value}>
      {
        children
      }
    </BannerContext.Provider>
  );
};

export const useBannerContext = () => React.useContext(BannerContext);
