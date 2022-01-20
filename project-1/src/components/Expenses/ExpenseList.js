import React from "react";
import ExpenseItem from "./ExpenseItem";
import classes from "./ExpenseList.module.css";

const ExpenseList = ({ items }) => {
  if (items.length === 0) {
    return <h2>Found no expenses.</h2>;
  }

  return (
    <ul className={`${classes.expenses__list}`}>
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
