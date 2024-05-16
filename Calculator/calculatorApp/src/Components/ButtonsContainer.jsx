import React from "react";
import styles from "./Buttons.module.css";
function ButtonsContainer({ onButtonClicked }) {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div>
      <div className={styles.buttonContainer}>
        {buttonNames.map((item) => (
          <button
            className={styles.button}
            key={item}
            onClick={()=>onButtonClicked(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ButtonsContainer;
