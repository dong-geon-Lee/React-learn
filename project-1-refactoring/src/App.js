import React, { useState } from "react";
import expenses from "./data/data";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const App = () => {
  const [expense, setExpense] = useState(expenses);

  const addExpenseHandler = (newExpense) => {
    setExpense((prevState) => {
      return [newExpense, ...prevState];
    });
  };

  const deleteExpenseHandler = (id) => {
    setExpense((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  return (
    <Wrapper>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses
        items={expense}
        onDeleteExpense={deleteExpenseHandler}
      ></Expenses>
    </Wrapper>
  );
};

export default App;
