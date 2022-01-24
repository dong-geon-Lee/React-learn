import React from "react";
import styled from "styled-components";
import ExpenseItem from "./ExpenseItem";

const Wrapper = styled.div`
  border-radius: 1rem;
  margin-top: 2rem;
`;

const ExpenseList = ({ items, onDeleteExpense }) => {
  return (
    <Wrapper>
      {items.map((item) => (
        <ExpenseItem
          key={item.id}
          id={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
          onDeleteExpense={onDeleteExpense}
        ></ExpenseItem>
      ))}
    </Wrapper>
  );
};

export default ExpenseList;
