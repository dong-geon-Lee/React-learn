import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #111;
  padding: 0.4rem 0.8rem;
  border-radius: 1rem;
  border: 2px solid #eee;
  align-items: center;

  & div:nth-child(1) {
    color: yellow;
  }

  & div:nth-child(2) {
    color: red;
  }

  & div:nth-last-child(1) {
    color: aqua;
  }
`;

const ExpenseDate = ({ date }) => {
  const dateArray = date.split("-");

  return (
    <Wrapper>
      <div>{dateArray[0]}</div>
      <div>{dateArray[1]}</div>
      <div>{dateArray[2]}</div>
    </Wrapper>
  );
};

export default ExpenseDate;
