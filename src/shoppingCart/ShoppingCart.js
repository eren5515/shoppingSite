import React, { useState, useEffect } from "react";
import "./ShoppingCart.css";
import icon from "./imgs/cart-icon.png";
import CartItem from "./ItemInCart/CartItem";

function ShoppingCart(props) {
  const [isTrue, setIsTrue] = useState(false);

  function handleChange() {
    setIsTrue(!isTrue);
  }

 
  
 

  return (
    <div className={isTrue ? "shopping-cart active" : "shopping-cart passive"}>
      <button
        onClick={handleChange}
        className={isTrue ? "active-button" : "passive-button"}
      ></button>
      <div className="header-div">
        <img src={icon}></img>
        <h1>Cart</h1>
      </div>
      <hr></hr>
      <div className="shop-container">
        {props.itemList.map((item) => (
          <CartItem
          onIncrease={props.onIncrease}
          onDecrease={props.onDecrease}
          quantity={item.quantity}
          key={item.id}
          id={item.id}
          onDelete={props.onDelete}
            img={
              process.env.PUBLIC_URL + "products/" + item.img + "-1-cart.webp"
            }
            title={item.title}
            price={item.price}
          ></CartItem>
        ))}
      </div>
      <div className="bottom-div">
        <div className="price-div">
          <h1 className="subtotal">SUBTOTAL</h1>
          <h1 className="price"> {(props.totalPrice).toFixed(2)} $</h1>
        </div>
        <button className="checkout">CHECKOUT</button>
      </div>
    </div>
  );
}

export default ShoppingCart;
