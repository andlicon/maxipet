import { useState } from 'react';

export const useBanner = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const count = images.length
  const next = ''
  const prev = ''

  return ({
    currentImage,
    next,
    prev,
    count
  });
};
