import { createContext } from "react";
import { useReducer } from "react";
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemReducer = (currTodoItems, action) => {
  let newToDOItem = currTodoItems;

  if (action.value === "NEW_ITEM") {
    newToDOItem = [
      ...currTodoItems,
      { name: action.payload.itemName, date: action.payload.itemDate },
    ];
  } else if (action.value === "DEL_ITEM") {
    newToDOItem = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newToDOItem;
};

export const TodoItemsContextProvider = ({ children }) => {
  let [todoItems, dispatchToDOItems] = useReducer(todoItemReducer, []);
  const addNewItem = (itemName, itemDate) => {
    const newItemAction = {
      value: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    };
    dispatchToDOItems(newItemAction);
  };

  const deleteItem = (deletedName) => {
    const delItemAction = {
      value: "DEL_ITEM",
      payload: {
        itemName: deletedName,
      },
    };
    dispatchToDOItems(delItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
