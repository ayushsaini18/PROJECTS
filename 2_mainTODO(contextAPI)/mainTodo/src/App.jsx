import Heading from "./Components/Heading";
import "./App.css";
import AddToDO from "./Components/AddToDO";
import ItemTodo from "./Components/ItemTodo";
import WelcomeMsg from "./Components/WelcomeMsg";
import { TodoItemsContextProvider } from "./store/todoItemsStore";

function App() {
  return (
    <>
      <TodoItemsContextProvider>
        <center className="todo-container">
          <Heading></Heading>
          <AddToDO></AddToDO>
          {<WelcomeMsg></WelcomeMsg>}
          <ItemTodo></ItemTodo>
        </center>
      </TodoItemsContextProvider>
    </>
  );
}

export default App;
