// import { StrictMode } from "react";
import ReactDOM from "react-dom";
import LoginProvider from "./store/LoginProvider";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <LoginProvider>
    <App />
  </LoginProvider>,
  rootElement
);
