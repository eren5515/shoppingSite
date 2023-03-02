import React from "react";
import SizeButton from "./SizeButtons/SizeButton";
import { useState} from "react";
import "./SizeDiv.css";

const sizes = ["XS", "S", "M", "ML", "L", "XL", "XXL"];

var currentSizes = [];

function SizeDiv(props) {
    const [selectedSizes, setSelectedSizes] = useState([]);
  function handleAdd(newSize) {
    
    setSelectedSizes((arr) => [...arr, newSize]);
    
    currentSizes = [...selectedSizes, newSize];
  }
  function handleDelete(deletedSize){
    setSelectedSizes(selectedSizes.filter(size => size != deletedSize));
    currentSizes = selectedSizes.filter(size => size != deletedSize);
  }
  
 
  

  return (
    <div className="SizeDiv">
      <h1>Sizes:</h1>
      <div className="ButtonsDiv">
        {sizes.map((size, index) => {
          return <SizeButton key={index} onChange={props.onChange} onAdd={handleAdd} onDelete={handleDelete} size={size}></SizeButton>;
        })}
      </div>
    </div>
  );
}

export default SizeDiv;
export {currentSizes};


