import React, { useRef, useState } from "react";
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
  const [amountIsValid, setAmountIsValid] = useState(true);

  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    // useRef 관련 해서 식은 submitHandler 안에서 작성되어야 된다.
    const enteredInputRef = inputRef.current.value;
    const enteredInputRefNumber = +enteredInputRef;

    if (
      enteredInputRef.trim().length === 0 ||
      enteredInputRefNumber < 1 ||
      enteredInputRefNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    // 왜 context를 props로 운송한거지?
    // dummy로부터 Props로 받은 id,name,price를 MealItem에서 함수로 만들고
    // 여기서 amount만 받아서 context 함수에 전달하기 떄문이다. 즉 틀을 미리 만들었기 떄문이다.
    props.onAddCartItem(enteredInputRefNumber);
  };

  return (
    <Wrapper onSubmit={submitHandler}>
      <div>
        <label htmlFor={props.id}>Amount</label>
        <Input
          ref={inputRef}
          input={{
            id: props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
      </div>

      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount(1-5). </p>}
    </Wrapper>
  );
};

export default MealItemForm;
