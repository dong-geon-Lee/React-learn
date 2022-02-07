import React, { useContext } from "react";
import styled from "styled-components";
import CartContext from "../../store/cart-context";
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

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  const { items } = cartContext;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <Wrapper onClick={props.onShowCart}>
      <CartIcon></CartIcon>
      <span>Your Cart</span>
      <div>
        <span>{numberOfCartItems}</span>
      </div>
    </Wrapper>
  );
};

export default HeaderCartButton;
