import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import classes from "./ExpenseItem.module.css";

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <li>
      <Card className={`${classes.expense__item}`}>
        <ExpenseDate date={date}></ExpenseDate>
        <div className={`${classes["description"]}`}>
          <h2>{title}</h2>
          <p className={`${classes["price"]}`}>{amount}</p>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
