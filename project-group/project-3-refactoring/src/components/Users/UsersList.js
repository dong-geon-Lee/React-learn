import React from "react";
import Card from "../UI/Card";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  border: 2px solid #eee;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
`;

const UsersList = ({ items, onDeleteUser }) => {
  return (
    <Card>
      {items.map((item) => (
        <Wrapper key={item.id} onClick={() => onDeleteUser(item.id)}>
          <label>{item.username}</label>
          <label>{item.password}</label>
        </Wrapper>
      ))}
    </Card>
  );
};

export default UsersList;
