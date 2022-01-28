import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const Wrapper = styled.div`
  background-color: rebeccapurple;
  padding: 1rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h1 {
    margin-left: 1.4rem;
  }
`;

const MainHeader = () => {
  return (
    <Wrapper>
      <h1>A Typical Page</h1>
      <Navigation></Navigation>
    </Wrapper>
  );
};

export default MainHeader;
