import React, { useContext, useRef } from "react";
import GroceryContext from "../../../store/Grocery-context/grocery-context";

function AddGrocery() {
  const groceryNameInputRef = useRef();
  const groceryPriceInputRef = useRef();

  // hooking up with grocery context
  const groceryCtx = useContext(GroceryContext)

  function groceryInfoAddHandler(event){
    event.preventDefault()

    const nameInput = groceryNameInputRef.current.value
    const priceInput = groceryPriceInputRef.current.value

    const newGroceryItem = {
      id:Math.random().toString(),
      name:nameInput,
      price: priceInput
    } 

    console.log(newGroceryItem);

    groceryCtx.add(newGroceryItem)

    groceryNameInputRef.current.value = ""
    groceryPriceInputRef.current.value = ""

  }


  return (
    <form style={{ display: "flex" }} onSubmit={groceryInfoAddHandler}>
      <div>
        <label>Name</label>
        <input type="text" ref={groceryNameInputRef} />
      </div>
      <div>
        <label>Price</label>
        <input type="number" min="1" step="1" ref={groceryPriceInputRef} />
      </div>
      <button type="submit" >Add</button>
    </form>
  );
}

export default AddGrocery;
