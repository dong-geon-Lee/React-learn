import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import styled from "styled-components";

const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.4rem;
  border-bottom: 1px solid #111;

  & div p:nth-child(2) {
    font-style: italic;
    color: aqua;
  }

  & div p:nth-child(3) {
    color: brown;
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 0.6rem;
  }
`;

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <Wrapper>
      <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>${props.price}</p>
      </div>

      <div>
        <MealItemForm
          id={props.id}
          onAddToCart={addToCartHandler}
        ></MealItemForm>
      </div>
    </Wrapper>
  );
};

export default MealItem;
