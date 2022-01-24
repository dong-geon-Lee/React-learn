import React from "react";
import ChartBar from "./ChartBar";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  background-color: #f8dfff;
  border-radius: 1.2rem;
  height: 10rem;
  display: flex;
  justify-content: space-around;
`;

const Chart = ({ values, chartData }) => {
  const maxValues = Math.max(...values);

  return (
    <Wrapper>
      {chartData.map((chart) => (
        <ChartBar
          key={chart.id}
          label={chart.label}
          value={chart.value}
          maxValues={maxValues}
        ></ChartBar>
      ))}
    </Wrapper>
  );
};

export default Chart;
