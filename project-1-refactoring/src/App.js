import React, { useState } from "react";
import expenses from "./data/data";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

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
    <>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses
        items={expense}
        onDeleteExpense={deleteExpenseHandler}
      ></Expenses>
    </>
  );
};

export default App;
