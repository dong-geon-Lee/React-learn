import React from "react";
import classes from "./ExpenseDate.module.css";

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString("KO", { month: "long" });
  const day = date.toLocaleString("KO", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className={`${classes.expense__date}`}>
      <div className={`${classes.year}`}>{year}</div>
      <div className={`${classes.month}`}>{month}</div>
      <div className={`${classes.day}`}>{day}</div>
    </div>
  );
};

export default ExpenseDate;
