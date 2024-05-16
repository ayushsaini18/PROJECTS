import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EmptyMsg from "./EmptyMsg";
import FoodItems from "./FoodItems";
import FoodInput from "./FoodInput";
import Container from "./Container";
function Frag() {
  // let foodItems = ["Dal", "Roti", "Vegetables", "Soup", "Paneer"];
  //  let foodItems=[];

  
  let [foodItems, setFoodItems] = useState([
    "Dal",
    "Roti",
    "Vegetables",
    "Soup",
  ]);
  const handleOnKeyDown = (event) => {
    if(event.key==="Enter"){
      let newFoodItem=event.target.value;
      let newItems=[...foodItems,newFoodItem];
      setFoodItems(newItems)
    }
    
    
  };

  return (
    <Container>
      <h1>Food Items</h1>
      <FoodInput handleOnKeyDown={handleOnKeyDown}></FoodInput>
      <EmptyMsg foodList={foodItems}></EmptyMsg>
      <FoodItems foodList={foodItems}></FoodItems>
    </Container>
  );
}

export default Frag;
