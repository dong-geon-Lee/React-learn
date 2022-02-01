import React, { useContext } from "react";
import CartItem from "../Cart/CartItem";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 50;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 60%;
  height: 33rem;
  border-radius: 1rem;
  padding: 1rem;
  overflow: hidden;

  & ul {
    padding: 1rem;
    height: 24rem;
    overflow: scroll;
    list-style: none;

    & li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid brown;
      margin-bottom: 1.3rem;

      & h2 {
        margin-bottom: 0.6rem;
      }

      & div {
        margin-bottom: 0.4rem;
        font-weight: bold;

        & span:nth-child(1) {
          margin-right: 4rem;
          color: burlywood;
        }

        & span:nth-child(2) {
          border: 1px solid #ccc;
          padding: 0.1rem 0.5rem;
          border-radius: 0.4rem;
        }
      }

      & div button {
        padding: 0.2rem 0.6rem;
        cursor: pointer;
        color: brown;
        font-size: 1.3rem;
        font-weight: bold;
        border: 1px solid brown;
        border-radius: 0.3rem;

        &:last-child {
          margin-left: 1rem;
        }

        &:hover,
        &:active {
          background-color: brown;
          opacity: 0.9;
          color: #fff;
        }
      }
    }
  }

  & section {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    font-size: 1.6rem;
    font-weight: bold;

    & div {
      display: flex;
      justify-content: space-between;

      & + div {
        justify-content: flex-end;
        margin-top: 1rem;

        & button {
          padding: 0.6rem 1.6rem;
          color: burlywood;
          font-weight: bold;
          border-radius: 1rem;
          border: 1px solid brown;
          background-color: #fff;

          &:last-child {
            margin-left: 1rem;
            background-color: brown;
          }

          &:hover {
            background-color: #111;
            opacity: 0.9;
          }
        }
      }
    }
  }
`;

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  console.log(cartCtx);

  return (
    <Modal onClose={props.onClose}>
      <Wrapper>
        <ul>
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
        </ul>

        <section>
          <div>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>

          <div>
            <button onClick={props.onClose}>Close</button>
            {hasItems && <button>Order</button>}
          </div>
        </section>
      </Wrapper>
    </Modal>
  );
};

export default Cart;
