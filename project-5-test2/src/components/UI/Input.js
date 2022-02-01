import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  & label {
    color: green;
    font-weight: bold;
    margin-right: 1rem;
  }

  & input {
    padding: 0.2rem 0.5rem;
    text-align: center;
  }
`;

const Input = React.forwardRef((props, ref) => {
  return (
    <Wrapper>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </Wrapper>
  );
});

export default Input;
