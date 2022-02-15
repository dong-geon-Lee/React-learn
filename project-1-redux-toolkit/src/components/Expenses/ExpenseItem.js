import React from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const { id, title, amount, date, removeItem } = props;

  return (
    <div>
      <ExpenseDate date={date}></ExpenseDate>
      <p>{title}</p>
      <p>{amount}</p>
      <button onClick={() => removeItem(id)}>x</button>
    </div>
  );
};

export default ExpenseItem;
