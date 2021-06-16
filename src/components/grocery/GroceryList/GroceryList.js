import React, { useContext } from 'react'
import GroceryContext from '../../../store/Grocery-context/grocery-context'
import GroceryItem from '../GroceryItem/GroceryItem'



function GroceryList() {
    
    const groceryCtx = useContext(GroceryContext)

    // pulling out the list from grocerycontext
    const groceryItemList = groceryCtx.groceryItems
    

    return (
        <div>
            {console.log(groceryCtx)}
            {groceryItemList.map((item) =>(
                <GroceryItem key={item.id} id={item.id} name={item.name} price={item.price} />
            ))}
        </div>
    )
}

export default GroceryList
