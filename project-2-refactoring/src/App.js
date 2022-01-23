import React, { useState } from "react";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import { goalsData } from "./data/data";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";

const App = () => {
  const [goalData, setGoalData] = useState(goalsData);

  const addGoalDataHandler = (newGoaldata) => {
    setGoalData((prevState) => {
      return [newGoaldata, ...prevState];
    });
  };

  const deleteGoalDataHandler = (id) => {
    setGoalData((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="app">
      <CourseInput onAddGoalData={addGoalDataHandler}></CourseInput>
      <CourseGoalList
        items={goalData}
        onDeleteGoalData={deleteGoalDataHandler}
      ></CourseGoalList>
    </div>
  );
};

export default App;
