import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ invalid }) => (invalid ? "blue" : "red")};
    font-size: 1.4rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${({ invalid }) => (invalid ? "blue" : "red")};
    background-color: ${({ invalid }) => (invalid ? "#fff" : "transparent")};
    font-size: inherit;
    padding: 0.5rem;
  }

  & input:focus {
    outline: none;
    background-color: #fad0ec;
    border-color: #8b005d;
  }
`;

const CourseInput = ({ onAddGoal }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }

    setEnteredValue(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
    }

    onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>

      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
