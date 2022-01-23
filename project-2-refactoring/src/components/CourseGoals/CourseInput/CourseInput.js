import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";

const Wrapper = styled.div`
  background-color: #fff;
  padding: 3rem 2rem;
  width: 35rem;
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.3);
  margin-bottom: 3rem;

  & label {
    display: block;
    font-size: 1.4rem;
    font-weight: bold;
    color: green;
  }

  & input {
    width: 100%;
    display: block;
    margin: 1rem 0;
    border: 1px solid ${(props) => (props.text ? "green" : "red")};
    font-size: 1.2rem;
    padding: 0.5rem;
    color: ${(props) => (props.text ? "green" : "red")};

    &:focus {
      outline: none;
    }
  }

  & button {
    background-color: skyblue;
  }
`;

const CourseInput = ({ onAddGoalData }) => {
  const [text, setText] = useState("");

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setText(e.target.value);

    const makeGoalData = {
      id: Math.floor(Math.random() * 1000),
      text: text,
    };

    onAddGoalData(makeGoalData);

    setText("");
  };

  return (
    <form onSubmit={submitHandler}>
      <Wrapper text={text}>
        <label>Course Goal</label>
        <input type="text" onChange={onChangeHandler} value={text} />

        <Button type="submit">Add Goal</Button>
      </Wrapper>
    </form>
  );
};

export default CourseInput;
