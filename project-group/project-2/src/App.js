import React, { useState } from "react";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import { goalsData } from "./data/data";
import styled from "styled-components";

const Section = styled.section`
  width: 35rem;
  max-width: 90%;
  margin: 3rem auto;
`;

const FormWrapper = styled.section`
  width: 30rem;
  max-width: 90%;
  margin: 3rem auto;
  padding: 2rem;
  box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
`;

const App = () => {
  const [courseGoals, setcourseGoals] = useState(goalsData);

  const addGoalHandler = (enteredText) => {
    setcourseGoals((prevState) => {
      const updatedGoals = [...prevState];

      updatedGoals.unshift({
        id: Math.floor(Math.random() * 1000).toString(),
        text: enteredText,
      });

      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setcourseGoals((prevState) => {
      const updatedGoals = prevState.filter((goal) => goal.id !== goalId);

      return updatedGoals;
    });
  };

  return (
    <div>
      <FormWrapper>
        <CourseInput onAddGoal={addGoalHandler}></CourseInput>
      </FormWrapper>

      <Section>
        {courseGoals.length > 0 ? (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          ></CourseGoalList>
        ) : (
          <p style={{ textAlign: "center" }}>No goals Found. Maybe add one?</p>
        )}
      </Section>
    </div>
  );
};

export default App;
