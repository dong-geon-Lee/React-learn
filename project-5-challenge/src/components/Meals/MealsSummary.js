import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #111;
  color: #fff;
  padding: 1.5rem 1rem;
  text-align: center;
  width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  border-radius: 1rem;

  & h1 {
    margin-bottom: 1rem;

    & ~ p {
      letter-spacing: 1px;
      margin-bottom: 0.3rem;
    }
  }
`;

const MealsSummary = () => {
  return (
    <Wrapper>
      <h1>Delicious Food, Delivered To You</h1>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </Wrapper>
  );
};

export default MealsSummary;
