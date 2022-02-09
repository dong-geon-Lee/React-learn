import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authHandler = (e) => {
    e.preventDefault();

    if (emailInputRef && passwordInputRef) {
      dispatch(authActions.login());
    } else {
      dispatch(authActions.logout());
    }

    console.log(emailInputRef.current.value, passwordInputRef.current.value);
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={authHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordInputRef} />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
