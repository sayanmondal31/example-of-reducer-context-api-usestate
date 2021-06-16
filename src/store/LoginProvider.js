import { useReducer } from "react";
import LoginContext from "./Login-context";

const defaultLoginState = {
  email: "",
  password: "",
  isLogin: false
};

const loginReducer = (state, action) => {
  if (action.type === "LOGIN") {
    console.log(
      action.email,
      action.password,
      action.isLogin,
      "reducer called"
    );
    return {
      email: action.email,
      password: action.password,
      isLogin: action.isLogin
    };
  }

  if (action.type === "LOGOUT") {
    return {
      isLogin: action.isLogin
    };
  }

  return defaultLoginState;
};

function LoginProvider(props) {
  const [loginState, dispatchLogin] = useReducer(
    loginReducer,
    defaultLoginState
  );

  function loginHandler(email, password) {
    console.log(email, password, "loginhandler-provider");
    dispatchLogin({
      type: "LOGIN",
      email: email,
      password: password,
      isLogin: true
    });
  }

  function logOutHandler() {
    dispatchLogin({
      type: "LOGOUT",
      isLogin: false
    });
  }

  const loginContext = {
    email: loginState.email, // dynamic ,,, value will send to login context
    password: loginState.password, // dynamic ,,, value will send to login context
    login: loginHandler,
    logout: logOutHandler,
    isLogin: loginState.isLogin
  };

  return (
    <LoginContext.Provider value={loginContext}>
      {console.log(loginState.email, "provider")}
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
