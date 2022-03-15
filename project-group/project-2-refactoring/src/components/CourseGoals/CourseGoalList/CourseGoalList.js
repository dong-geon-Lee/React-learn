import React from "react";
import styled from "styled-components";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

const Wrapper = styled.ul`
  list-style: none;
  width: 100%;
`;

const CourseGoalList = ({ items, onDeleteGoalData }) => {
  return (
    <Wrapper>
      {items.map((item) => (
        <CourseGoalItem
          key={item.id}
          id={item.id}
          text={item.text}
          onDeleteGoalData={onDeleteGoalData}
        ></CourseGoalItem>
      ))}
    </Wrapper>
  );
};

export default CourseGoalList;
