import React, { useContext } from 'react'
import {TodoItemsContext} from '../store/todoItemsStore';
function WelcomeMsg() {
  
  const {todoItems}=useContext(TodoItemsContext)
  return (
    <div>
        { todoItems.length===0 && <p>Enjoy Your Day</p>}
    </div>
  )
}

export default WelcomeMsg