import React from "react";
import Product from "../products/product/product";
import products from "../models/json/products.json";
import { useState } from "react";

import "./products.css";



function Products(props){
  const[productList, setProductList]=useState(products.data.products);
  var filteredProducts = productList;
  var currentSizes = props.sizeList;

  

  if (currentSizes.length !==0) {
    var filteredProducts = productList.filter(product => (product.availableSizes).filter(element => currentSizes.includes(element)).length !== 0);
   
  }
 
  function onAdd(item){
    props.onAdd(item);
  }
  
  
  


  
    return (

        

        <div className="main-container">
          <h2 className="productFound">{filteredProducts.length} Product(s) found</h2>

           <div className="productsDiv">
           {filteredProducts.map(product => {
            return (

                <Product 
                key={product.id}
                quantity={product.quantity}
                onAdd={onAdd}
                img={product.sku}
                price={product.price} 
                title={product.title}
                id={product.id}
                >

                </Product>
            
                
                
            )
        })}
           </div>
        </div>

    )



}


export default Products;
