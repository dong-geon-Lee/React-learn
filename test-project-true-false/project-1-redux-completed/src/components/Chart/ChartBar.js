import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  & .inner {
    width: 100%;
    height: 100%;
    background-color: #c3b4f3;
    border: 1px solid #313131;
    border-radius: 1.2rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    & div {
      background-color: #4826b9;
      transition: all 0.3s ease-out;
      width: 100%;
      height: ${(props) => `${props.inHeight}%`};
    }
  }

  & div {
    font-weight: bold;
    font-size: 0.5rem;
    text-align: center;
  }
`;

const ChartBar = ({ label, value, maxValue }) => {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100);
  }

  return (
    <Wrapper inHeight={barFillHeight}>
      <div className="inner">
        <div></div>
      </div>

      <div>{label}</div>
    </Wrapper>
  );
};

export default ChartBar;
