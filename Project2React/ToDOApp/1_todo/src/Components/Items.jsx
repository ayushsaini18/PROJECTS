import React from "react";
import styles from'./Items.module.css';
function Items({ food ,handleBuyMethod}) {
  // const handleBuyMethod=() => {console.log(`${food} is clicked`)}
  return (
    <div>
      <li className={`list-group-item ${styles["kg-item"]} `}>{food}
      <button className={`${styles.Button} btn btn-info`}
      onClick={handleBuyMethod}
      >Buy</button>
      </li>
      
      
    </div>
  );
}

export default Items;
