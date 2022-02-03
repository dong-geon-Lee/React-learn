import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "../Cart/CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setisSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  // Context 가 필요한 이유?
  // addItem, addRemove 함수를 쓰기위해서
  const cartCtx = useContext(CartContext);

  // 받은 amount의 소수점 값을 2째자리까지로 고정
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  // item이 0개 이상일 떄만 true
  const hasItems = cartCtx.items.length > 0;

  //  amount는 item 매개변수에 포함되어 있지 않다.
  // ? 일단은 좀 더 지켜보자.
  // 지금 amount는 여기에서 설정한 key와 value를 전제로
  // CartItem에 props을 넘기고 있다.
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setisSubmitting(true);

    await fetch(
      "https://food-order-5d3b4-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ user: userData, orderedItems: cartCtx.items }),
      }
    );

    setisSubmitting(false);
    setDidSubmit(true);

    cartCtx.clearCart();
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
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
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      {isCheckout && (
        <Checkout
          onConfirm={submitOrderHandler}
          onCancel={props.onClose}
        ></Checkout>
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingModalContext = (
    <>
      <p>Sending order data...</p>;
    </>
  );

  const didSubmitModalContext = (
    <>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContext}
      {!isSubmitting && didSubmit && didSubmitModalContext}
    </Modal>
  );
};

export default Cart;
