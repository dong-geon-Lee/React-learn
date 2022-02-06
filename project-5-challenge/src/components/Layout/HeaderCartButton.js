import React from "react";
import styled from "styled-components";
import CartIcon from "../Cart/CartIcon";

const Wrapper = styled.button`
  background-color: brown;
  border-radius: 1rem;
  border: none;
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }

  & svg {
    width: 1.35rem;
    fill: #fff;
  }

  & span {
    color: #fff;
    margin: 0 0.6rem;

    & + div {
      background-color: cadetblue;
      padding: 0.2rem;
      border-radius: 1rem;
      line-height: 1.5;
    }
  }
`;

const HeaderCartButton = () => {
  return (
    <Wrapper>
      <CartIcon></CartIcon>
      <span>Your Cart</span>
      <div>
        <span>0</span>
      </div>
    </Wrapper>
  );
};

export default HeaderCartButton;
