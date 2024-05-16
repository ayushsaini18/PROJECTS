import React from "react";
import Items from "./Items";

function FoodItems({ foodList }) {
  return (
    <>
     
      <ul className="list-group">
        {foodList.map((item) => (
          <Items
            key={item}
            food={item}
            handleBuyMethod={() => {
              console.log(`${item} is clicked`);
            }}
          ></Items>
        ))}
      </ul>
    </>
  );
}

export default FoodItems;
