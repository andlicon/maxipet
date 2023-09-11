import { useState } from 'react';

export const useBanner = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const next = ''
  const prev = ''

  return ({
    currentImage,
    next,
    prev
  });
};
