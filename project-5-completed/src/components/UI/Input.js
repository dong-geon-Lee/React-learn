import React from "react";
import styled from "styled-components";

const InputStyled = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  & label {
    font-weight: bold;
    margin-right: 1rem;
  }

  & input {
    width: 3rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    font-family: inherit;
    padding-left: 0.5rem;
  }
`;

const Input = React.forwardRef((props, ref) => {
  return (
    <InputStyled>
      <label htmlFor={props.input.id}>{props.text}</label>
      <input ref={ref} {...props.input} />
    </InputStyled>
  );
});

export default Input;
