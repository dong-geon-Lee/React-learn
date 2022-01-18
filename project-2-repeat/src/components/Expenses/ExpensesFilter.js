import React from "react";

const ExpensesFilter = ({ selected, onChangeFilter }) => {
  const dropDownChangeHandler = (e) => {
    onChangeFilter(e.target.value);
  };

  return (
    <section>
      <div>
        <label>Filter by year</label>

        <select value={selected} onChange={dropDownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </section>
  );
};

export default ExpensesFilter;
