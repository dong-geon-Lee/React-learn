import React from "react";
import styled from "styled-components";
import MealItem from "./Mealtem/MealItem";

const Wrapper = styled.ul`
  background-color: #fff;
  width: 80%;
  margin: 1rem auto;
  border-radius: 1rem;
  list-style: none;
  padding: 1.5rem;
`;

const AvailableMeals = (props) => {
  return (
    <Wrapper>
      {props.items.map((item) => (
        <MealItem
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
        ></MealItem>
      ))}
    </Wrapper>
  );
};

export default AvailableMeals;
