import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import SummaryCart from "../summaryCart/SummaryCart";

import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("porducts.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const addToClick = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div>
      <h1 className="website-name">Man's Shoes Available</h1>
      <div className="products-container">
        <div className="product-container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              addToClick={addToClick}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <h3>Cart Summary</h3>
          {cart.map((cart) => (
            <SummaryCart cart={cart}></SummaryCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
