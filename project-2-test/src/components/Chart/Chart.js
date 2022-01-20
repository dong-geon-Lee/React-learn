import React from "react";
import ChartBar from "./ChartBar";
import classes from "./Chart.module.css";

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);

  const totalMaxValue = Math.max(...dataPointValues);

  return (
    <div className={`${classes.chart}`}>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxValue}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
