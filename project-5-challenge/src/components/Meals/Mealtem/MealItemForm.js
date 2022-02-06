import React, { useRef } from "react";
import styled from "styled-components";
import Input from "../../UI/Input";

const Wrapper = styled.form`
  & div {
    display: flex;

    & label {
      margin: 0 1rem;
      font-weight: bold;
    }

    & input {
      width: 3rem;
      border-radius: 0.3rem;
      border: 1px solid green;
    }
  }

  & button {
    margin-left: 4rem;
    border: none;
    padding: 0.4rem 1.2rem;
    border-radius: 1rem;
    background-color: brown;
    color: #fff;
    font-weight: bold;
    margin-top: 1rem;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`;

const MealItemForm = (props) => {
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper onSubmit={submitHandler}>
      <div>
        <label htmlFor="number">Amount</label>
        <Input
          ref={inputRef}
          input={{
            id: props.id,
            type: "number",
            min: " 1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
      </div>

      <button type="button">+ Add</button>
    </Wrapper>
  );
};

export default MealItemForm;
