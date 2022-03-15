import React, { useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const Wrapper = styled.form`
  background-color: lightcoral;
  padding: 1rem;
  width: 40rem;
  margin-bottom: 2rem;

  & div {
    margin-bottom: 1.4rem;
  }

  & label {
    display: block;
    font-size: 1.4rem;
    font-weight: bold;
    color: green;
    margin-bottom: 0.5rem;
  }

  & input {
    width: 100%;
    border: none;
    padding: 0.3rem;
    color: aquamarine;
  }

  & input:focus {
    outline: none;
  }
`;

const AddUser = ({ onAddUser, modalState }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const numberChangeHandler = (e) => {
    setNumber(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newData = {
      id: Math.floor(Math.random() * 1000),
      username: name,
      password: number,
    };

    if (!name || !number) {
      modalState(true);

      setName("");
      setNumber("");
      return;
    }

    onAddUser(newData);

    setName("");
    setNumber("");
  };

  return (
    <Wrapper onSubmit={submitHandler}>
      <div>
        <label>UserName</label>
        <input type="text" onChange={nameChangeHandler} value={name} />
      </div>

      <div>
        <label>Age (Years)</label>
        <input type="number" onChange={numberChangeHandler} value={number} />
      </div>

      <Button type="submit">Add User</Button>
    </Wrapper>
  );
};

export default AddUser;
