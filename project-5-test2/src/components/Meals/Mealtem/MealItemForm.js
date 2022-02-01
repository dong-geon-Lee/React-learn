import React, { useRef, useState } from "react";
import styled from "styled-components";
import Input from "../../UI/Input";

const Wrapper = styled.form`
  & button {
    border: none;
    color: #fff;
    background-color: brown;
    padding: 0.5rem 1.2rem;
    border-radius: 1rem;
    margin-top: 0.8rem;
    display: inline-block;
    margin-left: 3rem;
    cursor: pointer;
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
  };

  return (
    <Wrapper onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </Wrapper>
  );
};

export default MealItemForm;
