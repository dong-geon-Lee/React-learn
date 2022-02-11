import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const { id, title, price, totalPrice, quantity } = props;

  const dispatch = useDispatch();

  const addCartHandler = () => {
    dispatch(cartActions.addToCartItem({ id, price }));
  };

  const removeCartHandler = () => {
    dispatch(cartActions.removeToCartItem(id));
  };

  return (
    <>
      <div className="info-group">
        <div>
          <h1>{title}</h1>
          <h1>x {quantity}</h1>
        </div>

        <div className="group">
          <div className="price">
            <h3>${totalPrice.toFixed(2)}</h3>
            <h3>(${price.toFixed(2)}/item)</h3>
          </div>

          <div className="btn">
            <button onClick={removeCartHandler}>-</button>
            <button onClick={addCartHandler}>+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
