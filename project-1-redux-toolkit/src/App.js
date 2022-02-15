import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import NewExpense from "./components/NewExpense/NewExpense";
import data from "./data/data";

// 1. 데이터 렌더링 components 구축
// 2. add 및 remove 기능 Form components 구축
// 3. Chart data & Filter Components 구축
//? 4. redux-toolkit setting
// 5. Styled-components 마무리

const App = () => {
  const [expenses, setExpenses] = useState(data);
  const [selectYear, setSelectYear] = useState(2022);

  const addItemHandler = (item) => {
    setExpenses((prevState) => {
      return [item, ...prevState];
    });
  };

  const removeItemHandler = (id) => {
    setExpenses((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  const filteredExpenseData = expenses.filter((item) => {
    const itemYear = item.date.getFullYear();
    return itemYear === selectYear;
  });

  const selectChangeHandler = (select) => {
    setSelectYear(select);
  };

  return (
    <>
      <NewExpense addItem={addItemHandler}></NewExpense>
      <ExpensesFilter
        selectHandler={selectChangeHandler}
        select={selectYear}
        expenses={expenses}
      ></ExpensesFilter>
      <Expenses
        datas={filteredExpenseData}
        removeItem={removeItemHandler}
      ></Expenses>
    </>
  );
};

export default App;
