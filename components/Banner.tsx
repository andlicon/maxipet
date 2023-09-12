import React from 'react';

const Banner = ({ image }) => {
  return (
    <div className='banner'>
      <img
        src={image.url.src}
        alt={image.alt}
        className='banner_img mx-auto' />
    </div>
  )
}
export default Banner;
