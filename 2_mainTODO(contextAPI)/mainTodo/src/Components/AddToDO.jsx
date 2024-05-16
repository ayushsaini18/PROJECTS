import React, { useRef } from "react";
import { TodoItemsContext } from "../store/todoItemsStore";
import { useContext } from "react";


function AddToDO() {

  const {addNewItem}=useContext(TodoItemsContext);
  
  const todoNameElement=useRef();
  const todoDateElement=useRef()


  const handleAddButtonClicked=()=>{
    const inputName=todoNameElement.current.value
    const inputDate=todoDateElement.current.value
    todoNameElement.current.value=""
    todoDateElement.current.value=""
    addNewItem(inputName,inputDate);

  }
  return (
    <div>
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-6">
            <input type="text" placeholder="Enter TODO HERE" 
            ref={todoNameElement}
        
            />
          </div>
          <div className="col-4">
            <input type="date" 
            ref={todoDateElement}
           
            />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToDO;
