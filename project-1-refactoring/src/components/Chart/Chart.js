import React from "react";
import ChartBar from "./ChartBar";

const Chart = ({ values, chartData }) => {
  const maxValues = Math.max(...values);
  console.log(chartData);
  console.log(maxValues);

  return (
    <div>
      {chartData.map((chart) => (
        <ChartBar
          key={chart.id}
          label={chart.label}
          value={chart.value}
          maxValues={maxValues}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
