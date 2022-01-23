import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.5);
  background-color: #fff;
  padding: 1rem;
`;

const Card = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Card;
