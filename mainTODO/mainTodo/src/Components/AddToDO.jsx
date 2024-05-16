import React, { useRef } from "react";
import { useState } from "react";
function AddToDO({onNewItem}) {
  // let [inputName,setInputName]=useState("");
  // let [inputDate,setInputDate]=useState("");
  const todoNameElement=useRef();
  const todoDateElement=useRef()

  // const handleNameChange=(event)=>{
  //   setInputName(event.target.value)
  // }
  // const handleDateChange=(event)=>{
  //   setInputDate(event.target.value)
  // }
  const handleAddButtonClicked=()=>{
    const inputName=todoNameElement.current.value
    const inputDate=todoDateElement.current.value
    todoNameElement.current.value=""
    todoDateElement.current.value=""
    onNewItem(inputName,inputDate);
    // setInputDate("");
    // setInputName("")
  }
  return (
    <div>
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-6">
            <input type="text" placeholder="Enter TODO HERE" 
            ref={todoNameElement}
            // onChange={handleNameChange}
            // value={inputName} this is htmlFor 2 way binding
            />
          </div>
          <div className="col-4">
            <input type="date" 
            ref={todoDateElement}
            // onChange={handleDateChange}
            // value={inputDate}
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
