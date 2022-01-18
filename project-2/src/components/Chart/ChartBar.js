import React from "react";
import classes from "./ChartBar.module.css";

const ChartBar = ({ value, maxValue, label }) => {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100);
  }

  return (
    <div className={`${classes.chart__bar}`}>
      <div className={`${classes.inner}`}>
        <div style={{ height: `${barFillHeight}%` }}></div>
      </div>

      <div className={`${classes.label}`}>{label}</div>
    </div>
  );
};

export default ChartBar;
