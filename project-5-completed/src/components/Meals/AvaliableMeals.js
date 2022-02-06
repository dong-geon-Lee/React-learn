import React, { useEffect, useState } from "react";
import MealItem from "./MealItem/MealItem";
import styled, { keyframes } from "styled-components";

const AvaliableStyled = styled.div`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: ${(props) => props.meals} 1s ease-out forwards;
  background-color: #fff;
  padding: 1rem 1.4rem;
  border-radius: 1rem;

  & .mealsLoading {
    text-align: center;
    color: #fff;
  }

  & .mealsError {
    text-align: center;
    color: red;
  }

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

var mealsApper = keyframes`
  0% {
    opacity:0;
    transform: translateY(3rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

const AvaliableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(undefined);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-order-5d3b4-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  return (
    <AvaliableStyled meals={mealsApper}>
      {isLoading && (
        <section className="mealsLoading">
          <p>Loading...</p>
        </section>
      )}
      {httpError && (
        <section className="mealsError">
          <p>{httpError}</p>
        </section>
      )}
      <ul>
        {meals.map((meal) => (
          <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          ></MealItem>
        ))}
      </ul>
    </AvaliableStyled>
  );
};

export default AvaliableMeals;
