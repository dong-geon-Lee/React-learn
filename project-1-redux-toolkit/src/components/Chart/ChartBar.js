import React from "react";

const ChartBar = ({ label, value, maxValue }) => {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100);
  }

  return (
    <div>
      <div
        style={{
          height: `${barFillHeight}%`,
        }}
      ></div>

      <div>{label}</div>
    </div>
  );
};

export default ChartBar;
