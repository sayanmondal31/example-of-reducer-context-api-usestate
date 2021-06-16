import { useContext } from "react";
import LoginContext from "../store/Login-context";
import GroceryList from "./grocery/GroceryList/GroceryList";
import AddGrocery from "./grocery/AddGrocery/AddGrocery";
import GroceryProvider from "../store/Grocery-context/GroceryProvider";

const Home = () =>{
  const loginCtx = useContext(LoginContext)

  return (
    <GroceryProvider>
    {console.log(loginCtx,"home")}
    <div> Welcome to home </div>
    <div> email: {loginCtx.email} </div>
    <button onClick={loginCtx.logout} >Logout</button>
    <br />
    <br />
    <br />
    <AddGrocery />
    <GroceryList />
    </GroceryProvider>
  );
}

export default Home;