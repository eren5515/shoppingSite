import React from 'react';
import { useState } from 'react';
import Products from './products/products';
import './App.css';
import SizeDiv from "./sizeSection/SizeDiv";
import { currentSizes } from './sizeSection/SizeDiv';
import ShoppingCart from './shoppingCart/ShoppingCart';


function App() {
  const[itemsInCart, setItemsInCart] = useState([]);
  const[totalPrice,setTotalPrice] = useState(0);

  const[SizeArray, setSizeArray] = useState([]);
  

 
  
    function handleChange(){
      setSizeArray(currentSizes);
    }

    function addToCart(item){
      var doesContain = itemsInCart.find(x => x.id ===item.id);
      
      if (doesContain === undefined){setItemsInCart([...itemsInCart, item]);
        setTotalPrice(totalPrice + item.price);}
      
      
      

    }
    function removeFromCart(item){
      const newCart =itemsInCart.filter(x => x.id!==item.id)
      setItemsInCart(newCart);
      setTotalPrice(totalPrice-(item.price*item.quantity));
    }

    function onIncrease(id) {

      itemsInCart.find(item => item.id ===id).quantity +=1;
      setTotalPrice(totalPrice + itemsInCart.find(item => item.id ===id).price);
      console.log(itemsInCart);


      


      
     
    }
    function onDecrease(id) {
      itemsInCart.find(item => item.id === id).quantity -= 1;
      setTotalPrice(totalPrice - itemsInCart.find(item => item.id ===id).price);
    }
  


  return (
    <div className='mainDiv'>


    <SizeDiv onChange={handleChange}></SizeDiv>


<Products onAdd={addToCart} sizeList = {SizeArray}></Products>

<ShoppingCart totalPrice={totalPrice} onIncrease={onIncrease} onDecrease={onDecrease} onDelete={removeFromCart} itemList={itemsInCart}></ShoppingCart>
    </div>
    
    
   
  );
}

export default App;
