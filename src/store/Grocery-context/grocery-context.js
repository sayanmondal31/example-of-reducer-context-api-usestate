import React from "react"


const GroceryContext =  React.createContext({
    groceryItems:[],
    add:(newItem)=>{},
    remove:(id)=>{}
})

export default GroceryContext