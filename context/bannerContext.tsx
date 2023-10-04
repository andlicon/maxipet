import React, { useState, createContext, useContext } from 'react';
import { Image, bannerImages } from '../constant/images';

const BannerContext = createContext(
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
  const [images, setImages] = useState(bannerImages);
  const [currentImage, setCurrentImage] = useState(null);

  const value = {
    images,
    setImages,
    currentImage,
    setCurrentImage
  };

  return (
    <BannerContext.Provider value={value}>
      {
        children
      }
    </BannerContext.Provider>
  );
};

export const useBannerContext = useContext(BannerContext);
