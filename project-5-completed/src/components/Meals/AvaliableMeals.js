import React, { useEffect, useState } from "react";
import MealItem from "./MealItem/MealItem";

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
    <section>
      {isLoading && (
        <section>
          <p>Loading...</p>
        </section>
      )}
      {httpError && (
        <section>
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
    </section>
  );
};

export default AvaliableMeals;
