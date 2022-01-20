import React from "react";
import classes from "./ExpenseDate.module.css";

const ExpenseDate = ({ date }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("ko", { month: "long" });
  const day = date.toLocaleString("ko", { day: "2-digit" });

  return (
    <div className={`${classes.expense__date}`}>
      <div className={`${classes.year}`}>{year}</div>
      <div className={`${classes.month}`}>{month}</div>
      <div className={`${classes.day}`}>{day}</div>
    </div>
  );
};

export default ExpenseDate;
