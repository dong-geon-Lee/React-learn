import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  margin-bottom: 2rem;

  & select {
    border: none;
    padding: 0.4rem 1.6rem;
    border-radius: 0.6rem;
  }
`;

const ExpensesFilter = ({ onSelectHandler, expenseYear }) => {
  const onChangeHandler = (e) => {
    onSelectHandler(e.target.value);
  };

  return (
    <Wrapper>
      <h1>Filter by year</h1>
      <select value={expenseYear} onChange={onChangeHandler}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </Wrapper>
  );
};

export default ExpensesFilter;
