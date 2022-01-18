import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import { expenses } from "./data/data";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [expense, setExpense] = useState(expenses);

  const addExpenseHandler = (expense) => {
    setExpense((prevState) => {
      return [expense, ...prevState]; 
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expense}></Expenses>
    </div>
  );
};

export default App;
