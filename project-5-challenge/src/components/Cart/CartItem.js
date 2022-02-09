import React from "react";
import styled from "styled-components";

const Wrapper = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid brown;
  padding: 1rem 0;

  & h2 {
    margin-bottom: 0.6rem;
  }

  & .group {
    display: flex;
    align-items: center;

    & .price {
      margin-right: 4rem;
      color: green;
    }

    & h4 {
      border: 1px solid #ccc;
      padding: 0.3rem 0.6rem;
      border-radius: 0.4rem;
    }
  }

  & .btn {
    & button {
      border: 1px solid brown;
      padding: 0.2rem 0.6rem;
      background-color: transparent;
      color: brown;
      margin: 0 0.3rem;
      font-family: inherit;
      font-size: 1.4rem;
      border-radius: 0.3rem;
      cursor: pointer;
    }
  }
`;

const CartItem = (props) => {
  return (
    <Wrapper>
      <div>
        <h2>{props.name}</h2>
        <div className="group">
          <h3 className="price">${props.price}</h3>
          <h4>x {props.amount}</h4>
        </div>
      </div>

      <div className="btn">
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAddCart}>+</button>
      </div>
    </Wrapper>
  );
};

export default CartItem;
