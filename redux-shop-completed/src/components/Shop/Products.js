import React from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

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

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>

      <ul>
        {itemList.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          ></ProductItem>
        ))}
      </ul>
    </section>
  );
};

export default Products;
