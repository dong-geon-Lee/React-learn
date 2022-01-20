import React, { useState } from "react";
import { expenses } from "./data/data";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [expense, setExpense] = useState(expenses);

  // 추상화 [최종 단계]
  const saveExpenseHandler = (expense) => {
    setExpense((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <>
      <NewExpense onSaveExpenseData={saveExpenseHandler}></NewExpense>
      <Expenses items={expense}></Expenses>
    </>
  );
};

export default App;
