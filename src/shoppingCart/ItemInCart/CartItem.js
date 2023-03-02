import React, { useEffect, useState } from "react";
import deleteIcon from "../imgs/delete-icon.png";
import "./CartItem.css";

function CartItem(props) {
  
  const [isDeleted, setIsDeleted] = useState(false);
  const [itemProperties, setItemProperties] = useState(props);

  useEffect(
    (x) => {
     

    
     setItemProperties(props);
      
    },
    [props]
  );

  function decreaseQuantity() {

    if(itemProperties.quantity>1){
      setItemProperties({quantity:itemProperties.quantity-1,img:itemProperties.img,title:itemProperties.title,price:itemProperties.price,id:itemProperties.id});
      props.onDecrease(itemProperties.id);


    }
    
      
    
  }
  function increaseQuantity() {
    setItemProperties({quantity:itemProperties.quantity+1,img:itemProperties.img,title:itemProperties.title,price:itemProperties.price,id:itemProperties.id});
    props.onIncrease(itemProperties.id);
    
    
   


  }

  function deleteItem() {
    props.onDelete({id:props.id,price:props.price,quantity:props.quantity});
    
  }
  if (!isDeleted) {
    return (
      <div>
        <div className="cart-item-div">
          <img className="cart-photo" src={itemProperties.img}></img>
          <div className="info-div">
            <h1>{itemProperties.title}</h1>
            <h2>Quantity:{itemProperties.quantity}</h2>
          </div>
          <div className="price-and-buttons">
            <img onClick={deleteItem} src={deleteIcon}></img>
            <h2 className="item-price">${(itemProperties.price*itemProperties.quantity).toFixed(2)} </h2>
            <div className="increment-buttons">
              <button onClick={decreaseQuantity}>-</button>
              <button onClick={increaseQuantity}>+</button>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default CartItem;
