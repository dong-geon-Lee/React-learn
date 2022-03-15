import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Wrapper = styled.div`
  background-color: #111;
  padding: 2rem 1rem;
  border-radius: 0.6rem;
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.5);
`;

const Expenses = () => {
  const expenses = useSelector((state) => state.expense.items);
  const selectYear = useSelector((state) => state.expense.year);

  const filteredExpenseData = expenses.filter((item) => {
    const itemYear = Number(item.date.split("-")[0]);
    return selectYear === itemYear;
  });

  return (
    <Wrapper>
      <ExpensesFilter expenses={expenses}></ExpensesFilter>
      {filteredExpenseData.map((data) => (
        <ExpenseItem
          key={data.id}
          id={data.id}
          title={data.title}
          amount={data.amount}
          date={data.date}
        ></ExpenseItem>
      ))}
    </Wrapper>
  );
};

export default Expenses;
