import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import classes from "./ExpenseItem.module.css";

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <li>
      <Card className={`${classes.expense__item}`}>
        <ExpenseDate date={date}></ExpenseDate>
        <div className={`${classes["description"]}`}>
          <h2>${title}</h2>
          <div className={`${classes["price"]}`}>${amount}</div>
        </div>

        {/* <button>X</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
