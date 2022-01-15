import React from "react";
import classes from "../UI/Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={classes.btn}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
