import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  text-align: center;
  color: #fff;
  background-color: #111;
  display: inline-block;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -10%);
  padding: 1.6rem 2rem;
  max-width: 45rem;
  border-radius: 1.2rem;
`;

const MealsSummary = () => {
  return (
    <Wrapper>
      <h2>Delicious Food, Delivered To You</h2>
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
