import React from "react";
import classes from "./ExpensesFilter.module.css";

const ExpensesFilter = ({ selected, onChangeFilter }) => {
  const dropdownChangeHandler = (e) => {
    onChangeFilter(e.target.value);
  };

  return (
    <section className={`${classes.expenses__filter}`}>
      <div className="filter__control">
        <label>Filter by year</label>

        <select value={selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </section>
  );
};

export default ExpensesFilter;
