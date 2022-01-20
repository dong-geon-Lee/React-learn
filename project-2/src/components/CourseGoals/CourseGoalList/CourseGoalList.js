import React from "react";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import styled from "styled-components";

const Wrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CourseGoalList = ({ items, onDeleteItem }) => {
  console.log(items);

  return (
    <Wrapper>
      {items.map((item) => (
        <CourseGoalItem
          key={item.id}
          id={item.id}
          text={item.text}
          onDelete={onDeleteItem}
        ></CourseGoalItem>
      ))}
    </Wrapper>
  );
};

export default CourseGoalList;
