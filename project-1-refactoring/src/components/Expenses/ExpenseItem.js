import React from "react";
import ExpenseDate from "./ExpenseDate";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 1rem;
  background-color: grey;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #111;
    border-radius: 1rem;
  }

  & label {
    color: #fff;
    width: 100%;
    margin-left: 1.5rem;
    text-align: center;
  }

  & label:nth-of-type(2) {
    background-color: rebeccapurple;
    width: 20%;
    padding: 0.4rem 0;
    margin-right: 2.5rem;
    border-radius: 1rem;
    text-align: center;
  }

  & button {
    border: none;
    background-color: transparent;
    color: red;
    margin-top: 0.4rem;
  }
`;

const ExpenseItem = ({ title, amount, date, onDeleteExpense, id }) => {
  return (
    <Wrapper>
      <div>
        <ExpenseDate date={date}></ExpenseDate>
      </div>
      <label>{title}</label>
      <label>${amount}</label>

      <button onClick={() => onDeleteExpense(id)}>X</button>
    </Wrapper>
  );
};

export default ExpenseItem;
