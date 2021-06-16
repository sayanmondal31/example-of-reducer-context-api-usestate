import React, { useReducer } from "react";
import GroceryContext from "./grocery-context";

const DUMMY_LIST = [
  {
    id: 1,
    name: "Bread",
    price: 20,
  },
  {
    id: 2,
    name: "Cheese",
    price: 30,
  },
];

// initial state
const initialGroceryState = {
  groceryItems: DUMMY_LIST,
};

const groceryReducer = (state, action) => {
  if (action.type === "ADD_GROCERY") {
    //   const updatedGroceryItems = state.groceryItems.concat(action.newGroceryItem)
    //    at the top
    const updatedGroceryItems = [action.newGroceryItem, ...state.groceryItems];

    return {
      groceryItems: updatedGroceryItems,
    };
  }

  if (action.type === "REMOVE_GROCERY") {
    const afterRemoveGroceryItems = state.groceryItems.filter(
      (item) => item.id !== action.id
    );

    return {
      groceryItems: afterRemoveGroceryItems,
    };
    
  }

  return initialGroceryState;
};

function GroceryProvider(props) {
  const [groceryState, dispatchGrocery] = useReducer(
    groceryReducer,
    initialGroceryState
  );

  function addHandler(newgGroceryItem) {
    console.log(newgGroceryItem);
    dispatchGrocery({
      type: "ADD_GROCERY",
      newGroceryItem: newgGroceryItem,
    });
  }

  function removeHandler(id) {
    dispatchGrocery({
      type: "REMOVE_GROCERY",
      id: id,
    });
  }

  // creating grocery context from set it as value
  const groceryContext = {
    groceryItems: groceryState.groceryItems,
    add: addHandler,
    remove: removeHandler,
  };

  return (
    <GroceryContext.Provider value={groceryContext}>
      {props.children}
    </GroceryContext.Provider>
  );
}

export default GroceryProvider;
