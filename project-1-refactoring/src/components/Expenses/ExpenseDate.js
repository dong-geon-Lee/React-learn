import React from "react";

const ExpenseDate = ({ date }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("ko", { month: "long" });
  const day = date.toLocaleString("ko", { day: "2-digit" });

  return (
    <div>
      <span>{year} </span>
      <span>{month}</span>
      <span>{day}</span>
    </div>
  );
};

export default ExpenseDate;
