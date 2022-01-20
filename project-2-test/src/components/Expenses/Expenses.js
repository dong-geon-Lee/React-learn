import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpensesChart";
import Card from "../UI/Card";
import classes from "./Expenses.module.css";

const Expenses = ({ items }) => {
  const [FilteredYear, setFilteredYear] = useState("2022");

  const filteredExpenseHandler = (selectYear) => {
    setFilteredYear(selectYear);
  };

  const filteredExpense = items.filter((item) => {
    return item.date.getFullYear().toString() === FilteredYear;
  });

  return (
    <Card className={`${classes.expenses}`}>
      <ExpenseFilter
        selected={FilteredYear}
        onChangeFilter={filteredExpenseHandler}
      ></ExpenseFilter>
      <ExpenseChart expenses={filteredExpense}></ExpenseChart>
      <ExpenseList items={filteredExpense}></ExpenseList>
    </Card>
  );
};

export default Expenses;
