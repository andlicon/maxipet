import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className='productCard'>
      <div>
        <img src={product.image} alt="" className='productCard__img' />
      </div>
      <div className='productCard__info mt-4'>
        <p className='productCard__name'>{product.name}</p>
        <p>{product.rate}</p>
        <p className='productCard__price'>{product.price}</p>
      </div>
    </div>
  );
};
export default ProductCard;
