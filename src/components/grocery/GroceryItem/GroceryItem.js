import React, { useContext } from "react";
import GroceryContext from "../../../store/Grocery-context/grocery-context";

function GroceryItem(props) {
  const groceryCtx = useContext(GroceryContext);
  function removeHandler() {
    groceryCtx.remove(props.id);
  }
  return (
    <div>
      <hr />
      <h2> Name: {props.name}</h2>
      <h2>price: ${props.price}</h2>
      <button onClick={removeHandler}>Remove</button>
      <hr />
    </div>
  );
}

export default GroceryItem;
