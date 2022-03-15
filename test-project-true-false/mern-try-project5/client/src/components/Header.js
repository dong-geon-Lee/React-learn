import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  background-color: beige;

  & button {
    border: 2px solid aqua;
    padding: 0.8rem 1.2rem;
    background-color: transparent;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    color: blue;
    font-weight: bold;

    & div {
      background-color: red;
      margin: 0 0 0 1rem;
      padding: 0.4rem 0.4rem;
      border-radius: 1rem;
    }
  }

  & ul {
    list-style: none;

    & a {
      text-decoration: none;
      color: black;
      font-weight: bold;
    }
  }
`;

const Header = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <Wrapper>
      <h1>Redux Cart</h1>
      <button>
        My Cart <div>35</div>{" "}
      </button>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Header;
