import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { expenseActions } from "../../store/expense-slice";
import ExpenseForm from "./ExpenseForm";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rebeccapurple;
  padding: 1rem 2rem;
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.5);
  width: 40rem;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  border-radius: 1rem;

  & button {
    border: none;
    border-radius: 1rem;
    padding: 0.8rem 1rem;
    background-color: blueviolet;
    color: #fff;
  }
`;

const NewExpense = () => {
  const formToggle = useSelector((state) => state.expense.toggle);

  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(expenseActions.toggleExpense());
  };

  return (
    <Wrapper>
      {!formToggle ? (
        <button onClick={() => toggleHandler()}>Add New Expense</button>
      ) : (
        <ExpenseForm toggle={toggleHandler}></ExpenseForm>
      )}
    </Wrapper>
  );
};

export default NewExpense;
