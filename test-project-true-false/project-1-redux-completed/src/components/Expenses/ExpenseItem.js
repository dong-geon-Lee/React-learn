import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { expenseActions } from "../../store/expense-slice";
import ExpenseDate from "./ExpenseDate";

const Wrapper = styled.div`
  color: #fff;
  padding: 1rem;
  background-color: aqua;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  margin-top: 2rem;

  & div {
    display: flex;
    flex-direction: column;
    margin: 0 13%;
  }
`;

const ExpenseItem = (props) => {
  const { id, title, amount, date } = props;

  const dispatch = useDispatch();

  const removeItemHandler = (id) => {
    dispatch(expenseActions.removeExpense(id));
  };

  return (
    <Wrapper>
      <ExpenseDate date={date}></ExpenseDate>
      <div>
        <p>${amount}</p>
        <p>{title}</p>
      </div>
      <button onClick={() => removeItemHandler(id)}>x</button>
    </Wrapper>
  );
};

export default ExpenseItem;
