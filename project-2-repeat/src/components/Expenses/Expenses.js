import React, { useState } from "react";
import ExpenseList from "../Expenses/ExpenseList";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ items }) => {
  // 3.items 확인하기
  // 4.items 렌더링하기
  // 5.useState 사용 이유 이해하기
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // 더미 데이터 중에 filteredYear의 값에 있는 년도만 데이터를 골라낸다.
  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpenseList items={filteredExpenses}></ExpenseList>
    </div>
  );
};

export default Expenses;
