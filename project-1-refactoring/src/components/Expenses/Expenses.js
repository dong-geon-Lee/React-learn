import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 2rem;
  background-color: #1f1f1f;
  width: 100%;
  padding: 2rem;
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.5);
`;

const Expenses = ({ items, onDeleteExpense }) => {
  const [expenseYear, setExpenseYear] = useState("2022");

  const selectYearHandler = (selectYear) => {
    setExpenseYear(selectYear);
  };

  const filteredExpenseList = items.filter((item) => {
    return item.date.getFullYear().toString() === expenseYear;
  });

  return (
    <Wrapper>
      <ExpensesFilter
        onSelectHandler={selectYearHandler}
        expenseYear={expenseYear}
      ></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenseList}></ExpensesChart>
      <ExpenseList
        items={filteredExpenseList}
        onDeleteExpense={onDeleteExpense}
      ></ExpenseList>
    </Wrapper>
  );
};

export default Expenses;
