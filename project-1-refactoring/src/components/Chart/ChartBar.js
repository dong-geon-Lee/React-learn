import React from "react";

const ChartBar = ({ label, value, maxValues }) => {
  let barFillHeight = 0;

  if (maxValues > 0) {
    barFillHeight = Math.round((value / maxValues) * 100);
  }

  return <div style={{ height: `${barFillHeight}%` }}>{label}</div>;
};

export default ChartBar;
