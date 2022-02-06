import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import styled from "styled-components";

const MealItemFormStyled = styled.form`
  text-align: right;

  & button {
    font-family: inherit;
    cursor: pointer;
    background-color: #8a2b06;
    border: 1px solid #8a2b06;
    color: #fff;
    padding: 0.25rem 2rem;
    border-radius: 2rem;
    font-weight: bold;

    &:hover,
    &:active {
      background-color: #641e03;
      border-color: #641e03;
    }
  }
`;

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
    setAmountIsValid(true);
  };

  return (
    <MealItemFormStyled onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        text="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: "1",
          max: "6",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5) </p>}
    </MealItemFormStyled>
  );
};

export default MealItemForm;
