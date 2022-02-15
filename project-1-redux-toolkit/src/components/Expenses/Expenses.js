import React from "react";

import ExpenseItem from "./ExpenseItem";

const Expenses = ({ datas, removeItem }) => {
  return (
    <div>
      {datas.map((data) => (
        <ExpenseItem
          key={data.id}
          id={data.id}
          title={data.title}
          amount={data.amount}
          date={data.date}
          removeItem={removeItem}
        ></ExpenseItem>
      ))}
    </div>
  );
};

export default Expenses;
