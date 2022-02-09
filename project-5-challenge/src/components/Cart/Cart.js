import React, { useContext } from "react";
import styled from "styled-components";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Wrapper = styled.ul`
  background-color: #fff;
  width: 45rem;
  padding: 1rem 1rem;
  border-radius: 1rem;

  & .total-container {
    padding: 1rem 0;
    margin: 1rem 0 0 0;

    & .amount {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & span {
        font-weight: bold;
        font-size: 1.6rem;
      }
    }

    & .btn {
      text-align: right;
      margin-top: 1rem;

      & button {
        border-radius: 2rem;
        padding: 0.6rem 1.8rem;
        color: brown;
        background-color: #fff;
        border: 1px solid brown;
        cursor: pointer;

        & + button {
          color: #fff;
          background-color: brown;
          margin-left: 1rem;
        }

        &:hover,
        &:active {
          opacity: 0.7;
        }
      }
    }
  }
`;

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const { items, totalAmount, addItem, removeItem } = cartContext;

  const newtotalAmount = `$${totalAmount.toFixed(2)}`;

  const addCartHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const removeCartHandler = (id) => {
    removeItem(id);
  };

  return (
    <Modal onClose={props.onCloseCart}>
      <Wrapper>
        {items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAddCart={addCartHandler.bind(null, item)}
            onRemove={removeCartHandler.bind(null, item.id)}
          ></CartItem>
        ))}

        <div className="total-container">
          <div className="amount">
            <h1>Total Amount</h1>
            <span>{newtotalAmount}</span>
          </div>

          <div className="btn">
            <button onClick={props.onCloseCart}>Close</button>
            <button>Order</button>
          </div>
        </div>
      </Wrapper>
    </Modal>
  );
};

export default Cart;
