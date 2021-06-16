import { TextField } from "@material-ui/core";
import { useContext, useRef, useState } from "react";
import LoginContext from "../store/Login-context";

function Login() {
  // const emailInputRef = useRef();
  // const passwordInputRef = useRef();

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const loginCtx = useContext(LoginContext);

  function emailInputHandler(event) {
    setEmailInput(event.target.value);
  }

  function passwordInputHandler(event) {
    setPasswordInput(event.target.value);
  }

  const loginHandler = (event) => {
    event.preventDefault();
    // const emailInput = emailInputRef.current.value;
    // const passwordInput = passwordInputRef.current.value;

    console.log(emailInput, passwordInput, "login");

    loginCtx.login(emailInput, passwordInput);

    setEmailInput("");
    setPasswordInput("");

    // emailInputRef.current.value = "";
    // passwordInputRef.current.value = "";
  };

  return (
    <>
      <form className="email-form" onSubmit={loginHandler}>
        <div>
          <TextField
            label="email"
            type="email"
            required
            value={emailInput}
            onChange={emailInputHandler}
          />
        </div>
        <div>
          <TextField
            label="password"
            type="password"
            required
            // ref={passwordInputRef}
            value={passwordInput}
            onChange={passwordInputHandler}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
