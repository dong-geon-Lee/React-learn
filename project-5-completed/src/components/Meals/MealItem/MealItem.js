import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  console.log(props);
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
    <li>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addCartHandler}></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;
