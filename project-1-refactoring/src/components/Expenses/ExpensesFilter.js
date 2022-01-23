import React from "react";

const ExpensesFilter = ({ onSelectHandler, expenseYear }) => {
  const onChangeHandler = (e) => {
    onSelectHandler(e.target.value);
  };

  return (
    <div>
      <h1>Filter by year</h1>
      <select value={expenseYear} onChange={onChangeHandler}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
