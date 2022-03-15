import React, { useEffect } from "react";

import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getCartList } from "../features/cartSlice";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #eee;
  padding: 2rem;
  width: 45rem;
  margin: 3rem auto;
`;

const CartMain = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartList());
  }, []);

  return (
    <Wrapper>
      {cartItems.map((cartItem) => (
        <CartItem
          key={cartItem._id}
          cartItem={cartItem}
          id={cartItem._id}
        ></CartItem>
      ))}
    </Wrapper>
  );
};

export default CartMain;
