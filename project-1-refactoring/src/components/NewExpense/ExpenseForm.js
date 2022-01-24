import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.5);

  & form {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: flex-end;
  }

  & div {
    display: flex;
    flex-direction: column;
  }

  & label {
    display: block;
    width: 100%;
    font-size: 1.6rem;
    margin-bottom: 0.4rem;
    color: #fff;
  }

  & input {
    display: inline-block;
    width: 100%;
    border-radius: 0.6rem;
    border: none;
    padding: 0.4rem;
  }

  & button {
    margin: 1rem;
  }
`;

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
    <Wrapper>
      <form onSubmit={submitHandler}>
        <div>
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={title} />
        </div>

        <div>
          <label>Amount</label>

          <input type="number" onChange={amountChangeHandler} value={amount} />
        </div>

        <div>
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler} value={date} />
        </div>

        <button type="button" onClick={() => onEditHandler(false)}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </form>
    </Wrapper>
  );
};

export default ExpenseForm;
