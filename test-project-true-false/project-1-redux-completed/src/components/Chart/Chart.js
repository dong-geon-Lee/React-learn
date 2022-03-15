import React from "react";
import styled from "styled-components";
import ChartBar from "./ChartBar";

const Wrapper = styled.div`
  background-color: #f8dfff;
  border-radius: 1.2rem;
  height: 10rem;
  display: flex;
  justify-content: space-around;
`;

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });

  const totalMaximum = Math.max(...dataPointValues);

  return (
    <Wrapper>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </Wrapper>
  );
};

export default Chart;
