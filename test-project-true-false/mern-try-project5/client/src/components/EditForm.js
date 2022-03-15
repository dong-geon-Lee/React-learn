import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCartList } from "../features/cartSlice";

const EditForm = ({ id }) => {
  const [updateCartItems, setUpdateCartItems] = useState({
    title: "",
    price: "",
    description: "",
  });

  const { title, price, description } = updateCartItems;

  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const onChange = (e) => {
    setUpdateCartItems((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCartList({ id }));

    setUpdateCartItems("");
  };

  return (
    <section>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={onChange}
            placeholder="Enter the title"
          />
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={price}
            onChange={onChange}
            placeholder="Enter the price"
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={onChange}
            placeholder="Enter the description"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default EditForm;
