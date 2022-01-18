import React from "react";

const ExpenseDate = ({ date }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("KO", { month: "long" });
  const day = date.toLocaleString("KO", { day: "2-digit" });

  return (
    <div>
      <div>{year}</div>
      <div>{month}</div>
      <div>{day}</div>
    </div>
  );
};

export default ExpenseDate;
