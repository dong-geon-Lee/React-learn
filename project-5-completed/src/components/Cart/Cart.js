import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const cartCtx = useContext(CartContext);

  console.log(cartCtx);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);

    await fetch(
      "https://food-order-5d3b4-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ user: userData, orderedItems: cartCtx.items }),
      }
    );

    setIsSubmitting(false);

    cartCtx.clearCart();
  };

  return (
    <Modal>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        ></CartItem>
      ))}

      <div>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <button onClick={props.onClose}>Close</button>
      <button>Order</button>
    </Modal>
  );
};

export default Cart;
