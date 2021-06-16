import "./styles.css";
import Login from "./components/Login";
import Home from "./components/Home";
import { useContext, useEffect } from "react";
import LoginContext from "./store/Login-context";
import LoginProvider from "./store/LoginProvider";

export default function App() {
  const loginCtx = useContext(LoginContext);

  return (
    <>
      Example of Reducer
      {!loginCtx.isLogin && <Login />}
      {loginCtx.isLogin && <Home />}
    </>
  );
}
