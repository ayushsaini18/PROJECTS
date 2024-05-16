import React from 'react'
import styles from './Display.module.css'
function Display({displayValue}) {
  return (
    <div>
         <input className={styles.display} type="text" value={displayValue} />
    </div>
  )
}

export default Display