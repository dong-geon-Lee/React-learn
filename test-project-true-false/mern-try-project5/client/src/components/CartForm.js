import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCartList } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

const CartForm = () => {
  const [cartItems, setCartItems] = useState({
    title: "",
    price: "",
    description: "",
  });

  const { title, price, description } = cartItems;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    setCartItems((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title,
      price,
      description,
    };

    dispatch(addCartList(data));
    setCartItems("");
    navigate("/");
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

export default CartForm;
