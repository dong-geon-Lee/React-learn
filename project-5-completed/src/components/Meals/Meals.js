import React from "react";
import AvaliableMeals from "./AvaliableMeals";
import MealsSummary from "./MealItem/MealsSummary";

const Meals = () => {
  return (
    <>
      <MealsSummary></MealsSummary>
      <AvaliableMeals></AvaliableMeals>
    </>
  );
};

export default Meals;
