import React from "react";
import classes from "./Cart.module.css";
import Card from "../UI/Card";
import CartItem from "./CartItem";

const itemList = [
  {
    id: "1",
    title: "Test",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: "2",
    title: "Test2",
    price: 5,
    description: "This is a second product - amazing!",
  },
  {
    id: "3",
    title: "Test3",
    price: 4,
    description: "This is a three product - amazing!",
  },
];

const Cart = () => {
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>

      <ul>
        {itemList.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              // quantity: item.quantity,
              // total: item.totalPrice,
              price: item.price,
            }}
          ></CartItem>
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
