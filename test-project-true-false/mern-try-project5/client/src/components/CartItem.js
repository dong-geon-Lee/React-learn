import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteCartList, updateCartList } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
import EditForm from "./EditForm";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & button {
    cursor: pointer;
    border-radius: 1rem;
    border: 2px solid blue;
    color: green;
    font-size: 1rem;
    padding: 0.4rem;
    margin-left: 1rem;
  }
`;

const CartItem = ({ cartItem, id }) => {
  const { _id, title, price, description } = cartItem;

  console.log(cartItem);

  const [edit, setEdit] = useState(false);
  // const [cartId, setCartId] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteCartHandler = (id) => {
    dispatch(deleteCartList(id));
  };

  const updateCartHandler = (id) => {
    dispatch(updateCartList(id));
  };

  return (
    <>
      <Wrapper>
        <div>
          <p>{title}</p>
          <p>{description}</p>
        </div>

        <p>$ {price}</p>

        <div>
          <button>Add to Cart</button>
          <button onClick={() => deleteCartHandler(_id)}>Delete Cart</button>
          <button onClick={() => setEdit(!edit)}>Edit Cart</button>
        </div>
      </Wrapper>
      <div>{edit && <EditForm id={_id} key={_id}></EditForm>}</div>
    </>
  );
};

export default CartItem;
