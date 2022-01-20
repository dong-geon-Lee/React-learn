import React, { useState } from "react";
import classes from "./ExpenseForm.module.css";

const ExpenseForm = ({ onMakeExpense, stopEditExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title,
      amount,
      date: new Date(date),
    };

    onMakeExpense(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`${classes.expense__controls}`}>
        <div>
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={title} />
        </div>

        <div>
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            value={amount}
            min="0.01"
            step="0.01"
          />
        </div>

        <div>
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            value={date}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>

      <div className={`${classes.expense__actions}`}>
        <button
          type="button"
          className={`${classes.btn}`}
          onClick={stopEditExpense}
        >
          Cancel
        </button>
        <button type="submit" className={`${classes.btn}`}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
