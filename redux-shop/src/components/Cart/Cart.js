import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const dummyData = { title: "Test Item", quantity: 3, total: 18, price: 6 };

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  console.log(cartItems);

  const dispatch = useDispatch();

  const addCartHandler = (item = dummyData) => {
    dispatch(cartActions.add(item));
  };

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem item={dummyData} addCartHandler={addCartHandler} />
      </ul>
    </Card>
  );
};

export default Cart;
