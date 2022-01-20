import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.onInvalid ? "aqua" : "green")};
  }

  & input {
    display: block;
    width: 100%;
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
    <FormControl onSubmit={formSubmitHandler} invalid={isValid}>
      <div>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>

      <Button type="submit">Add Goal</Button>
    </FormControl>
  );
};

export default CourseInput;
