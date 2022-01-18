import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ items }) => {
  if (items.length === 0) {
    return <h2>Found no expenses.</h2>;
  }

  return (
    <ul>
      {items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpenseList;
