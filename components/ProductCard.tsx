import React from 'react';

const rateArray = [1, 2, 3, 4, 5];

const ProductCard = ({ product }) => {
  return (
    <div className='productCard'>
      <div>
        <img src={product.image} alt="" className='productCard__img' />
      </div>
      <div className='productCard__info mt-4 me-2'>
        <p className='productCard__name'>{product.name}</p>
        {
          rateArray.map((number) => {
            const isChecked = product.rate >= number;

            return (
              <span className={`rate${isChecked ? ' checked' : ''}`}>
              </span>
            )
          })
        }
        <p className='productCard__price'>{product.price}</p>
      </div>
    </div>
  );
};
export default ProductCard;
