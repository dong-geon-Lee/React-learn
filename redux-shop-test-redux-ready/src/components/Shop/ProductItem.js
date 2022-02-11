import React from "react";
import classes from "./ProductItem.module.css";
import Card from "../UI/Card";

const ProductItem = (props) => {
  const { title, price, description, id } = props;

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>$ {price}</div>
        </header>

        <p>{description}</p>

        <div className={classes.actions}>
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
