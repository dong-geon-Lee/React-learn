import React from "react";

const ExpenseDate = ({ date }) => {
  const year = date.getFullYear();
  const month = date.toLocaleDateString("ko", { month: "long" });
  const day = date.toLocaleDateString("ko", { day: "2-digit" });

  return (
    <div>
      <p>{year}</p>
      <p>{month}</p>
      <p>{day}</p>
    </div>
  );
};

export default ExpenseDate;
