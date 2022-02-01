import React, { useState, useContext, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import styled, { keyframes, css } from "styled-components";

const bump = keyframes`
    0% {
      transform: scale(1);
    }

    10% {
      transform: scale(0.9);
    }

    30% {
      transform: scale(1.1);
    }

    50% {
      transform: scale(1.15);
    }

    100% {
      transform: scale(1);
    }
`;

const Wrapper = styled.button`
  background-color: darkgreen;
  border: none;
  border-radius: 1.2rem;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  animation: ${(props) =>
    props.btn
      ? css`
          ${bump} 0.3s ease-out
        `
      : ""};

  & svg {
    height: 1.5rem;
    fill: #fff;
  }

  span {
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    margin: 0 0.3rem;
  }

  & span:nth-child(2) {
    margin-right: 0.6rem;
  }

  & span:nth-child(3) {
    background-color: brown;
    color: #fff;
    padding: 0.4rem 0.6rem;
    border-radius: 50%;
  }

  &:hover,
  &:active {
    background-color: rgba(50, 120, 230, 0.9);
  }
`;

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <Wrapper onClick={props.onClick} btn={btnIsHighlighted}>
      <span>
        <CartIcon></CartIcon>
      </span>

      <span>Your Cart</span>
      <span>{numberOfCartItems}</span>
    </Wrapper>
  );
};

export default HeaderCartButton;
