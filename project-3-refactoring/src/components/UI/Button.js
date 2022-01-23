import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  border: none;
  padding: 0.6rem 1rem;
  background-color: rebeccapurple;
  color: #fff;
  font-size: inherit;
`;

const Button = (props) => {
  return (
    <Wrapper type={props.type || "button"} onClick={props.onClick}>
      {props.children}
    </Wrapper>
  );
};

export default Button;
