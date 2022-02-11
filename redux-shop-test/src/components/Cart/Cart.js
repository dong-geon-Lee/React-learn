import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "./CartItem";

const Wrapper = styled.div`
  background-color: #111;
  width: 50%;
  margin: 2rem auto;
  border-radius: 0.4rem;
  padding: 1.2rem 1.4rem 1.6rem;

  & h2 {
    color: #fff;
    margin-bottom: 1rem;
  }

  & .info-group {
    background-color: wheat;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    border-radius: 0.3rem;
    margin-bottom: 1.4rem;

    & .price {
      display: flex;
      align-items: center;
      color: green;

      & h3 {
        margin: 0 0.3rem;
      }
    }
  }

  & .group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    & .btn {
      & button {
        padding: 0 0.6rem;
        margin-top: 1rem;
        background-color: transparent;
        color: red;
        border: 2px solid skyblue;
        font-family: inherit;
        font-size: 1.2rem;
        border-radius: 0.4rem;
        margin-right: 0.4rem;
        cursor: pointer;
      }
    }
  }
`;

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  console.log(items);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          totalPrice={item.totalPrice}
          quantity={item.quantity}
        ></CartItem>
      ))}
    </Wrapper>
  );
};

export default Cart;
