import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import {TodoItemsContext} from '../store/todoItemsStore';

function ItemTodo() {
 
 const {todoItems}=useContext(TodoItemsContext)

  return (
    <div>
      <div className="item-container">
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoitemName={item.name}
            date={item.date}
          ></TodoItem>
        ))}
      </div>
    </div>
  );
}

export default ItemTodo;
