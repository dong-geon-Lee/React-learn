import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #fff;
  padding: 0.6rem 1rem;

  & span:nth-child(1) {
    color: yellow;
  }

  & span:nth-child(2) {
    color: red;
    margin: 0.3rem 0;
  }

  & span:nth-child(3) {
    color: aqua;
  }
`;

const ExpenseDate = ({ date }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("ko", { month: "long" });
  const day = date.toLocaleString("ko", { day: "2-digit" });

  return (
    <Wrapper>
      <span>{year} </span>
      <span>{month}</span>
      <span>{day}</span>
    </Wrapper>
  );
};

export default ExpenseDate;
