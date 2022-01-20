import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = ({ onAdduser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const userHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || password.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age!",
      });

      return;
    }

    onAdduser(username, password);

    setUsername("");
    setPassword("");
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          errorState={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.user}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={userHandler}
            value={username}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={passwordHandler}
            value={password}
          />

          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
