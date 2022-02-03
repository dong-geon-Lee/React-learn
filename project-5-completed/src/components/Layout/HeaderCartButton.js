import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../../assets/CartIcon";
import CartContext from "../../store/cart-context";
import styled, { css, keyframes } from "styled-components";

const ButtonStyled = styled.button`
  cursor: pointer;
  font-family: inherit;
  font-weight: bold;
  border: none;
  background-color: #4d1601;
  color: #fff;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 2.5rem;
  animation: ${(props) =>
    props.btn
      ? css`
          ${bump} .3s ease-out
        `
      : ""};

  &:hover,
  &:active {
    background-color: #2c0d00;
  }

  & svg {
    width: 1.35rem;
    height: 1.35rem;
    margin-right: 0.5rem;
  }

  & span:nth-child(3) {
    background-color: #b94517;
    padding: 0.25rem 1rem;
    border-radius: 2.5rem;
    margin-left: 1rem;
    font-weight: bold;
  }

  &:hover span:nth-child(3),
  &:active span:nth-child(3) {
    background-color: #92320c;
  }
`;

var bump = keyframes`
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
    <ButtonStyled onClick={props.onShowCart} btn={btnIsHighlighted}>
      <span>
        <CartIcon></CartIcon>
      </span>

      <span>Your Cart</span>
      <span>{numberOfCartItems}</span>
    </ButtonStyled>
  );
};

export default HeaderCartButton;
