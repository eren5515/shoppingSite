import React from "react";
import "./product.css";





function Product(props){
   var thisItem = {img:props.img,title:props.title,price:props.price,id:props.id,quantity:props.quantity};

   function handleClick(){
    props.onAdd(thisItem);
   

   } 
   
    


    return(
        <div  className="productCard">
            <img src={process.env.PUBLIC_URL + "products/" + props.img+"-1-product.webp"}></img>
            <h2>{props.title}</h2>
            <h1>{props.price+" $"}</h1>
            <button onClick={handleClick}>Add to Cart</button>
        </div>
    )

}

export default Product;
