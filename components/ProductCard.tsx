import React from "react";
import Button from "./Button";

const rateArray = [1, 2, 3, 4, 5];
const ProductCard = ({ product }) => {
  return (
    <div className="productCard sm:mx-auto">
      <div>
        <img src={product.image} alt="" className="productCard__img" />
      </div>
      <div className="productCard__info mt-4 me-2">
        <p className="productCard__name">{product.name}</p>
        {
          rateArray.map((number, index) => {
            const isChecked = product.rate >= number;

            return (
              <span className={`rate${isChecked ? " checked" : ""}`} key={index}>
              </span>
            )
          })
        }
        <p className="productCard__price">{product.price}</p>
      </div>
      <div className="flex justify-center">
        <Button label="Agregar" bootstrapIcon="bi bi-cart4" />
      </div>
    </div>
  );
};
export default ProductCard;
