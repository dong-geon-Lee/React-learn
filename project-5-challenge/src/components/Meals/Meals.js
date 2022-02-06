import React from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import mealImg from "../../assets/meals.jpeg";
import styled from "styled-components";

const mealsData = [
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

const Wrapper = styled.div`
  & div {
    overflow: hidden;
  }

  & img {
    width: 110%;
    transform: rotateZ(-8deg) translateY(-12rem) translateX(-2rem);
    object-fit: cover;
  }
`;

const Meals = () => {
  return (
    <Wrapper>
      <div>
        <img src={mealImg} alt="a meal Img" />
      </div>
      <MealsSummary></MealsSummary>
      <AvailableMeals items={mealsData}></AvailableMeals>
    </Wrapper>
  );
};

export default Meals;
