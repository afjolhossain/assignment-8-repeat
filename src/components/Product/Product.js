import React from "react";
import "./Product.css";

const Product = ({ product, addToClick }) => {
  const { name, discription, image, price } = product;

  return (
    <div className="product-cart">
      <img className="image" src={image} alt="" />
      <div className="product-details">
        <h3>{name}</h3>
        <p>Price: {price}</p>
        <p>{discription}</p>
      </div>
      <button className="product-btn" onClick={() => addToClick(product)}>
        Add-To-Cart
      </button>
    </div>
  );
};

export default Product;
