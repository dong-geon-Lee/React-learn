import React from "react";
import classes from "./Cart.module.css";
import Card from "../UI/Card";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>

      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              price: item.price,
              totalPrice: item.totalPrice,
              quantity: item.quantity,
            }}
          ></CartItem>
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
