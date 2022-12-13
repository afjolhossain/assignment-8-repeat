import React from "react";
import "./summaryCart.css";

const SummaryCart = ({ cart }) => {
  const { name, image } = cart;
  return (
    <div className="container-cart">
      <p>{name}</p>
      <img className="cart-image" src={image} alt="" />
    </div>
  );
};

export default SummaryCart;
