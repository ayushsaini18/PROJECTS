import React, { useContext } from 'react';
import { TodoItemsContext } from "../store/todoItemsStore";

function TodoItem({ todoitemName, date }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div>
      <div className="container">
        <div className="row kg-row">
          <div className="col-6">{todoitemName}</div>
          <div className="col-4">{date}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger kg-button"
              onClick={() => deleteItem(todoitemName)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
