import React, { useState } from 'react'
import styles from './FoodInput.module.css'
function FoodInput({handleOnKeyDown}) {
  // const handleOnChange=(event)=>{
  //   {console.log(event.target.value)}
  // }

  
  return (
    <div>
        <input className={styles.input} type="text"placeholder='Enter Food Item' 
        onKeyDown={handleOnKeyDown}
        />
        
        
    </div>
  )
}

export default FoodInput