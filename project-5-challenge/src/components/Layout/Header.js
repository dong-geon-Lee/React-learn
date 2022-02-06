import React from "react";
import styled from "styled-components";
import HeaderCartButton from "./HeaderCartButton";

const Wrapper = styled.div`
  background-color: greenyellow;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: blue;
  padding: 1rem;

  & h1 {
    margin: 0 3rem;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <h1>ReactMeals</h1>
      <HeaderCartButton></HeaderCartButton>
    </Wrapper>
  );
};

export default Header;
