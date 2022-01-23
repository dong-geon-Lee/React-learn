import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  border: none;
  display: inline-block;
  padding: 0.5rem 1rem;
  color: #fff;
`;

const Button = (props) => {
  return (
    <Wrapper type={props.type || "button"} onClick={props.onClick}>
      {props.children}
    </Wrapper>
  );
};

export default Button;
