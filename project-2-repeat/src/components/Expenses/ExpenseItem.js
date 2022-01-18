import React from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <li>
      <>
        <ExpenseDate date={date}></ExpenseDate>
        <div>
          <div>{title}</div>
          <div>{amount}</div>
        </div>
      </>
    </li>
  );
};

export default ExpenseItem;
