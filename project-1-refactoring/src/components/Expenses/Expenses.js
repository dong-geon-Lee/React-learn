import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ items, onDeleteExpense }) => {
  const [expenseYear, setExpenseYear] = useState("2022");

  const selectYearHandler = (selectYear) => {
    setExpenseYear(selectYear);
  };

  const filteredExpenseList = items.filter((item) => {
    return item.date.getFullYear().toString() === expenseYear;
  });

  return (
    <>
      <ExpensesFilter
        onSelectHandler={selectYearHandler}
        expenseYear={expenseYear}
      ></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenseList}></ExpensesChart>
      <ExpenseList
        items={filteredExpenseList}
        onDeleteExpense={onDeleteExpense}
      ></ExpenseList>
    </>
  );
};

export default Expenses;
