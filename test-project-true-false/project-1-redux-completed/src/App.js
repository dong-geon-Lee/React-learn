import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  return (
    <>
      <NewExpense></NewExpense>
      <Expenses></Expenses>
    </>
  );
};

export default App;
