import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";
import styled from "styled-components";

const MealItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  & h3 {
    margin: 0 0 0.25rem 0;
  }

  & p {
    font-style: italic;

    & + p {
      margin-top: 0.25rem;
      font-weight: bold;
      color: #ad5502;
      font-size: 1.25rem;
    }
  }
`;

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <MealItemStyled>
      <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>{price}</p>
      </div>

      <div>
        <MealItemForm id={props.id} onAddToCart={addCartHandler}></MealItemForm>
      </div>
    </MealItemStyled>
  );
};

export default MealItem;
