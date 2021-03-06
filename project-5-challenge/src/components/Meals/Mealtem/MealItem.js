import React, { useContext } from "react";
import styled from "styled-components";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";

const Wrapper = styled.li`
  border-bottom: 1px solid #ccc;
  margin-bottom: 1rem;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;

  & .one {
    font-weight: bold;

    & + p {
      font-style: italic;

      & + p {
        color: brown;
      }
    }
  }
`;

const MealItem = (props) => {
  const cartContext = useContext(CartContext);

  const addItemHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <Wrapper>
      <div>
        <p className="one">{props.name}</p>
        <p className="two">{props.description}</p>
        <p className="three">{props.price}</p>
      </div>

      <div>
        <MealItemForm
          id={props.id}
          onAddCartItem={addItemHandler}
        ></MealItemForm>
      </div>
    </Wrapper>
  );
};

export default MealItem;
