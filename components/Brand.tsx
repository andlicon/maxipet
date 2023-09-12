import React from 'react';

const Brand = ({ brand, background }) => {
  return (
    <div className={`brand ${background ? 'has-bg' : ''}`} >
      <img src={brand.image} alt="" />
    </div>
  )
}
export default Brand;
