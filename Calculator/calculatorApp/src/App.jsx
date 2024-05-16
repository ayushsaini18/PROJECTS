import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./Components/ButtonsContainer";
import Display from "./Components/Display";

function App() {
  let [calValue,setCalValue]=useState("");
  const onButtonClicked=(buttonText)=>{
    if(buttonText==='C'){
      setCalValue("")
    }
    else if(buttonText==='='){
      const result=eval(calValue);
      setCalValue(result);
    }
    else{
      const newDisplayValue=calValue+buttonText;
      setCalValue(newDisplayValue);
    }
  }
  return (
    <div className={styles.calculator}>
     <Display displayValue={calValue}></Display>
      <ButtonsContainer onButtonClicked={onButtonClicked}></ButtonsContainer>
    </div>
  );
}

export default App;
