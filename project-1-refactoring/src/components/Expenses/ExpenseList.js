import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ items, onDeleteExpense }) => {
  return (
    <div>
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
    </div>
  );
};

export default ExpenseList;
