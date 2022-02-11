import React from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { id, title, price } = props.item;

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>

        <div className={classes.price}>
          <span>{price.toFixed(2)}/item</span>
        </div>
      </header>

      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span></span>
        </div>

        <div className={classes.actions}>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
