import "./style.css";
import Card from "../Card";
import { useState } from "react";

import products from "./mockData.json";

const Shop = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  const addToCart = (product) => {
    const newCart = [
      ...cart,
      { ...product, id: Date.now() },
    ];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div className="shop">
      <h1 className="title">Shop</h1>
      <div className="shop-products">
        {products.map((product) => (
          <div key={product.id} className="gallery">
            <Card product={product} onClick={addToCart} btnText='Add Cart' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
