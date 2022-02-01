import React from "react";
import styled from "styled-components";
import MealItem from "./Mealtem/MealItem";

const mealsList = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const Wrapper = styled.section`
  background-color: #fff;
  padding: 2rem;
  width: 60rem;
  margin: 2.6rem auto;
  border-radius: 1rem;

  & ul {
    list-style: none;
  }
`;

const AvailableMeals = () => {
  return (
    <Wrapper>
      <div>
        <ul>
          {mealsList.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            ></MealItem>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default AvailableMeals;
