import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { uiActions } from "../../store/ui-slice";

const Wrapper = styled.button`
  border: 1px solid aqua;
  background-color: transparent;
  color: aqua;
  padding: 0.7rem 1.4rem;
  border-radius: 0.4rem;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: skyblue;
    color: #fff;
  }

  & span {
    margin-right: 0.4rem;
  }

  & span:last-child {
    padding: 0.2rem 0.5rem;
    background-color: aqua;
    border-radius: 2rem;
    color: #111;
    padding: 0 1rem;
    margin-left: 1rem;
  }
`;

const CartButton = () => {
  const dispatch = useDispatch();

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const showIsCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <Wrapper onClick={showIsCartHandler}>
      <span>My Cart</span>
      <span>{totalQuantity}</span>
    </Wrapper>
  );
};

export default CartButton;
