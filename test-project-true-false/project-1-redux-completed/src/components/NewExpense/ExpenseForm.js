import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { expenseActions } from "../../store/expense-slice";
import styled from "styled-components";

const Wrapper = styled.form`
  width: 40rem;
  padding: 1rem;
  color: #fff;

  & div {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    & label {
      margin: 0 1rem;
    }
  }

  & section {
    display: flex;
    justify-content: flex-end;

    & button {
      margin-right: 1.2rem;
    }
  }
`;

const ExpenseForm = ({ toggle }) => {
  const [items, setItems] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000) + 1;
    const { title, amount, date } = items;

    dispatch(expenseActions.addExpense({ id, title, amount, date: date }));

    setItems({ title: "", amount: "", date: "" });
  };

  return (
    <Wrapper onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={items.title}
          onChange={onChangeHandler}
        />

        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          onChange={onChangeHandler}
          value={items.amount}
        />
      </div>

      <div className="date">
        <label htmlFor="Date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          onChange={onChangeHandler}
          value={items.date}
        />
      </div>

      <section>
        <button type="button" onClick={() => toggle()}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </section>
    </Wrapper>
  );
};

export default ExpenseForm;
