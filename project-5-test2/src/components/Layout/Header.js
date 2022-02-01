import React from "react";
import mealsImage from "../../assets/meals.jpeg";
import styled from "styled-components";
import HeaderCartButton from "./HeaderCartButton";

const Wrapper = styled.div`
  header {
    background-color: darkcyan;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;
  }

  & div {
    width: 100%;
    height: 25rem;
    z-index: 0;
    overflow: hidden;

    & img {
      width: 110%;
      height: 100%;
      object-fit: cover;
      transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
    }
  }
`;

const Header = (props) => {
  return (
    <Wrapper>
      <header>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>

      <div>
        <img src={mealsImage} alt="" />
      </div>
    </Wrapper>
  );
};

export default Header;
