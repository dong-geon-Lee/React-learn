import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rebeccapurple;
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.5);
  width: 50rem;

  & div {
    width: 100%;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & button {
    border: none;
    color: #fff;
    background-color: royalblue;
    padding: 1rem 1.6rem;
    border-radius: 1rem;
    overflow: hidden;
  }
`;

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const editChangeHandler = (changeEdit) => {
    setIsEditing(changeEdit);
  };

  return (
    <Wrapper>
      {isEditing ? (
        <ExpenseForm
          onAddExpense={onAddExpense}
          onEditHandler={editChangeHandler}
        ></ExpenseForm>
      ) : (
        <div>
          <button onClick={() => editChangeHandler(true)}>
            Add New Expense
          </button>
        </div>
      )}
    </Wrapper>
  );
};

export default NewExpense;
