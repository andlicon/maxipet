import React from "react";

const Category = ({ category }) => {
  return (
    <div className="category">
      <img src={category.img} alt="" />
      <span>{category.label}</span>
    </div>
  );
};
export default Category;
