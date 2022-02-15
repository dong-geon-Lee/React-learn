import React from "react";
import ExpensesChart from "./ExpensesChart";

const ExpensesFilter = ({ selectHandler, select, expenses }) => {
  return (
    <div>
      <h2>Filter by year</h2>

      <select
        onChange={(e) => selectHandler(Number(e.target.value))}
        value={select}
      >
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>

      <ExpensesChart expenses={expenses}></ExpensesChart>
    </div>
  );
};

export default ExpensesFilter;
