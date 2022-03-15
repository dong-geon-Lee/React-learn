import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { expenseActions } from "../../store/expense-slice";
import ExpensesChart from "./ExpensesChart";

const Wrapper = styled.div`
  & section {
    display: flex;
    justify-content: space-between;
    color: #fff;
    width: 35rem;
  }

  & select {
    margin-left: auto;
    padding: 0.3rem 1.3rem;
    border-radius: 0.6rem;
  }
`;

const ExpensesFilter = ({ expenses }) => {
  const selectYear = useSelector((state) => state.expense.year);

  const dispatch = useDispatch();

  const selectChangeHandler = (select) => {
    dispatch(expenseActions.selectYearExpense(select));
  };

  return (
    <Wrapper>
      <section>
        <h2>Filter by year</h2>

        <select
          onChange={(e) => selectChangeHandler(Number(e.target.value))}
          value={selectYear}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </section>

      <ExpensesChart expenses={expenses}></ExpensesChart>
    </Wrapper>
  );
};

export default ExpensesFilter;
