import React from "react";
import styled from "styled-components";
import { Card } from "../UI/Card/Card";

const HomeStyle = styled(Card)`
  width: 90%;
  max-width: 40rem;
  padding: 30rem;
  margin: 2rem auto;
  text-align: center;
`;

const Home = () => {
  return (
    <HomeStyle>
      <h1>Welcome back!</h1>
    </HomeStyle>
  );
};

export default Home;
