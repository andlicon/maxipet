import { useState } from 'react';

export const useBanner = ({ images }) => {
  const [current, setCurrent] = useState(images[0]);

  const count = images.length;

  const onChangeImageHandler = (newImage) => {
    setCurrent(newImage);
  };

  return {
    current,
    count,
    onChangeImageHandler,
  };
};
