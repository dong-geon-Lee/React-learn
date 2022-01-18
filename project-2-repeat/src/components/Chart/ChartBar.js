import React from "react";

const ChartBar = ({ value, maxValue, label }) => {
  let barFillHeight = 0;

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100);
  }

  return (
    <div>
      <div>
        <div style={{ height: `${barFillHeight}%` }}></div>
      </div>

      <div>{label}</div>
    </div>
  );
};

export default ChartBar;
