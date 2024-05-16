import React from "react";
import TodoItem from "./TodoItem";
function ItemTodo({ todoList, delteItem }) {
  return (
    <div>
      <div className="item-container">
        {todoList.map((item) => (
          <TodoItem
            key={item.name}
            todoitemName={item.name}
            date={item.date}
            delteItem={delteItem}
          ></TodoItem>
        ))}
      </div>
    </div>
  );
}

export default ItemTodo;
