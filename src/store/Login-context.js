import React from "react";

const LoginContext = React.createContext({
  email: "",
  password: "",
  isLogin: false,
  login: (email, password) => {},
  logout: () => {},
});

export default LoginContext;
