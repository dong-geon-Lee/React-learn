import React from "react";
import classes from "./ExpensesFilter.module.css";

const ExpensesFilter = ({ selected, onChangeFilter }) => {
  const selectedExpense = (e) => {
    onChangeFilter(e.target.value);
  };

  return (
    <section className={`${classes.expenses__filter}`}>
      <div>
        <label>Filtered by year</label>

        <select value={selected} onChange={selectedExpense}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </section>
  );
};

export default ExpensesFilter;
