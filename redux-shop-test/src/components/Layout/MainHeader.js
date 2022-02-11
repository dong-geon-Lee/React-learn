import React from "react";
import CartButton from "../Cart/CartButton";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 8rem;
  color: #fff;
  background-color: #111;

  & ul {
    list-style: none;
  }
`;

const MainHeader = () => {
  return (
    <Wrapper>
      <h1>ReduxCart</h1>

      <nav>
        <ul>
          <li>
            <CartButton></CartButton>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default MainHeader;
