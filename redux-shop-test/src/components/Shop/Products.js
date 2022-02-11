import React from "react";
import ProductItem from "./ProductItem";
import styled from "styled-components";

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

const Wrapper = styled.div`
  & .title {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    color: #fff;
    text-transform: uppercase;
  }
`;

const Products = () => {
  return (
    <Wrapper>
      <div className="title">
        <h2>Buy Your Favorite Products</h2>
      </div>

      {itemList.map((item) => (
        <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        ></ProductItem>
      ))}
    </Wrapper>
  );
};

export default Products;
