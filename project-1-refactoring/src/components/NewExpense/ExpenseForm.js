import React, { useState } from "react";

const ExpenseForm = ({ onAddExpense, onEditHandler }) => {
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

    if (!title || !amount || !date) {
      onEditHandler(false);
      return;
    }

    const makeExpense = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      amount: amount,
      date: new Date(date),
    };

    onAddExpense(makeExpense);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} value={title} />

        <label>Amount</label>
        <input type="number" onChange={amountChangeHandler} value={amount} />

        <label>Date</label>
        <input type="date" onChange={dateChangeHandler} value={date} />

        <button type="submit">Add Expense</button>
      </form>

      <button onClick={() => onEditHandler(false)}>Cancel</button>
    </div>
  );
};

export default ExpenseForm;
