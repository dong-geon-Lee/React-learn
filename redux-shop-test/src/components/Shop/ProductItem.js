import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { cartActions } from "../../store/cart-slice";

const Wrapper = styled.section`
  padding: 2rem;
  margin: 1.4rem auto;
  width: 60%;
  background-color: #fff;
  border-radius: 0.4rem;

  & .list {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 0.6rem;

    & p:last-child {
      padding: 0.4rem 1.6rem;
      background-color: #111;
      color: #fff;
      border-radius: 1.2rem;
    }
  }

  & .description {
    font-style: italic;
  }

  & button {
    border: 1px solid skyblue;
    background-color: transparent;
    color: skyblue;
    font-weight: bold;
    padding: 0.6rem 1rem;
    margin: 1.2rem 0 0;
    display: flex;
    margin: 1rem 0 0 auto;
    border-radius: 0.4rem;
    cursor: pointer;
  }
`;

const ProductItem = (props) => {
  const { id, title, price, description } = props;

  const dispatch = useDispatch();

  const addToCartItemHandler = () => {
    dispatch(cartActions.addToCartItem({ id, title, price }));
  };

  return (
    <Wrapper>
      <section>
        <div className="list">
          <p>{title}</p>
          <p>$ {price}</p>
        </div>

        <div className="description">
          <p>{description}</p>
        </div>
      </section>

      <button onClick={addToCartItemHandler}>Add to Cart</button>
    </Wrapper>
  );
};

export default ProductItem;
