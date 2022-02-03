import React from "react";
import styled from "styled-components";
import mealsImage from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const HeaderStyled = styled.div`
  header {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #8a2b06;
    width: 100%;
    height: 5rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8rem;
    box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.25);
    z-index: 10;
  }

  div {
    width: 100%;
    height: 25rem;
    z-index: 0;
    overflow: hidden;

    & img {
      width: 110%;
      height: 100%;
      object-fit: cover;
      transform: rotateZ(-5deg) translate(-1rem, -4rem);
    }
  }
`;

const Header = (props) => {
  return (
    <HeaderStyled>
      <header>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={props.onShowCart}></HeaderCartButton>
      </header>

      <div className="lot">
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </HeaderStyled>
  );
};

export default Header;
