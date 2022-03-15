import React from "react";
import styled from "styled-components";

const Wrapper = styled.li`
  margin: 1rem 0;
  background-color: #8b005d;
  box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.26);
  color: #fff;
  padding: 1rem 2rem;
  cursor: pointer;
`;

const CourseGoalItem = ({ id, text, onDelete }) => {
  const deleteHandler = () => {
    onDelete(id);
  };

  return (
    <Wrapper className="goal-item" onClick={deleteHandler}>
      {text}
    </Wrapper>
  );
};

export default CourseGoalItem;
