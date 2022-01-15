import React from "react";
import classes from "../UI/ErrorModal.module.css";

const ErrorModal = ({ title, message, errorState }) => {
  return (
    <div className={classes.container}>
      <div className={classes.err}>
        <h1>{title}</h1>

        <section>
          <p>{message}</p>

          <button onClick={errorState}>Okay</button>
        </section>
      </div>
    </div>
  );
};

export default ErrorModal;
