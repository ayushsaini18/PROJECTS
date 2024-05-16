import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Heading from "./Components/Heading";
import "./App.css";
import AddToDO from "./Components/AddToDO";
import ItemTodo from "./Components/ItemTodo";
import WelcomeMsg from "./Components/WelcomeMsg";

function App() {
  const InitialtodoItems = [
    // {
    //   name: "Buy Milk",
    //   date: "12/12/24",
    // },
    // {
    //   name: "go-to-college",
    //   date: "12/12/24",
    // },
  ];
  let [todoItems, setTodoItems] = useState(InitialtodoItems);
  const handleNewItem = (itemName, itemDate) => {
    console.log(itemName, itemDate);
    const newToDOItem = [
      ...todoItems,
      { name: itemName, date: itemDate },
    ];
    setTodoItems(newToDOItem);
  };

  const handleDeleteItem=(deletedName)=>{
    const newtoDoItem=todoItems.filter((item)=>item.name!==deletedName)
    setTodoItems(newtoDoItem)
  }

  return (
    <>
      <center className="todo-container">
        <Heading></Heading>
        <AddToDO onNewItem={handleNewItem}></AddToDO>
        {todoItems.length===0 && <WelcomeMsg></WelcomeMsg>}
        <ItemTodo todoList={todoItems} delteItem={handleDeleteItem}></ItemTodo>
      </center>
    </>
  );
}

export default App;
