import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  width: 100%;
  font-size: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: #fff;
  background-color: #8b005d;
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

const Button = (props) => {
  return (
    <Wrapper type={props.type} onClick={props.onClick}>
      {props.children}
    </Wrapper>
  );
};

export default Button;
