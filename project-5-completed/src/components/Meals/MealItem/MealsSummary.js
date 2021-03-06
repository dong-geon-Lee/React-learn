import React from "react";
import styled from "styled-components";

const SummaryStyled = styled.div`
  text-align: center;
  max-width: 45rem;
  width: 90%;
  margin: 0 auto;
  position: relative;
  background-color: #383838;
  color: #fff;
  border-radius: 1.4rem;
  padding: 1.4rem;
  box-shadow: 0 0.1rem 1.8rem 1rem rgba(0, 0, 0, 0.25);

  & h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const MealsSummary = () => {
  return (
    <SummaryStyled>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </SummaryStyled>
  );
};

export default MealsSummary;
