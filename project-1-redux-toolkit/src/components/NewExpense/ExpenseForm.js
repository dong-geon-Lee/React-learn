import React, { useState } from "react";

const ExpenseForm = ({ toggle, addItem }) => {
  const [items, setItems] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const onChangeHandler = (e) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const { title, amount, date } = items;

    const id = Math.floor(Math.random() * 1000) + 1;

    console.log(title);
    console.log(amount);
    console.log(date);

    addItem({ id, title, amount, date: new Date(date) });

    setItems({ title: "", amount: "", date: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={items.title}
          onChange={onChangeHandler}
        />
      </div>

      <div>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          onChange={onChangeHandler}
          value={items.amount}
        />
      </div>

      <div>
        <label htmlFor="Date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          onChange={onChangeHandler}
          value={items.date}
        />
      </div>

      <div>
        <button type="button" onClick={() => toggle()}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
