import React, { useState } from "react";
import "./SizeButton.css";

function SizeButton(props) {
    const [isPressed, setIsPressed]= useState(false);
   function sizePressed(event){

    var currentSize = event.target.innerHTML;
    setIsPressed(!isPressed);

       if (isPressed) {
        
        props.onDelete(currentSize);
        props.onChange();

       }
       else {
        props.onAdd(currentSize);
        props.onChange();
        


       }
   
        

    
    
    
    

   }

  return <button onClick={sizePressed}  className={isPressed ? "sizeButton pressed":"sizeButton"}>{props.size}</button>;
}

export default SizeButton;
