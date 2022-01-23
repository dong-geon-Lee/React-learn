import React from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";

const Wrapper = styled.li`
  margin: 1rem 0;
  background-color: sandybrown;
  padding: 1rem 2rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & button {
    color: red;
    background-color: transparent;
    cursor: pointer;
    font-size: inherit;
  }

  & button:focus {
    outline: none;
  }
`;

const CourseGoalItem = ({ id, text, onDeleteGoalData }) => {
  return (
    <>
      <Wrapper>
        {text} <Button onClick={() => onDeleteGoalData(id)}>X</Button>
      </Wrapper>
    </>
  );
};

export default CourseGoalItem;
