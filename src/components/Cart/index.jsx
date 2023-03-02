import { useState } from "react";
import Card from "../Card";

const Cart = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  const deleteFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div className="">
      <h1>Cart</h1>
      <div>
        {cart?.map((product) => (
          <Card key={product.id} product={product} onClick={deleteFromCart} btnText='Delete product' />
        ))}
      </div>
    </div>
  );
};

export default Cart;
