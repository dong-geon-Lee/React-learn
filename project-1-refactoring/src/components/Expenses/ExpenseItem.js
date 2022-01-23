import React from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ title, amount, date, onDeleteExpense, id }) => {
  return (
    <div>
      <ExpenseDate date={date}></ExpenseDate>
      <label>{title}</label>
      <label>{amount}</label>

      <button onClick={() => onDeleteExpense(id)}>X</button>
    </div>
  );
};

export default ExpenseItem;
