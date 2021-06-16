import { useContext } from "react";
import LoginContext from "../store/Login-context";

const Home = () =>{
  const loginCtx = useContext(LoginContext)

  return (
    <>
    {console.log(loginCtx,"home")}
    <div> Welcome to home </div>
    <div> email: {loginCtx.email} </div>
    <button onClick={loginCtx.logout} >Logout</button>
    </>
  );
}

export default Home;