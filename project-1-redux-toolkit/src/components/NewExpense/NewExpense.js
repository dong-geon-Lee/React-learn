import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ addItem }) => {
  const [formToggle, setFormToggle] = useState(false);

  const toggleHandler = () => {
    setFormToggle((prevState) => !prevState);
  };

  return (
    <div>
      {!formToggle ? (
        <button onClick={() => toggleHandler()}>Add New Expense</button>
      ) : (
        <ExpenseForm addItem={addItem} toggle={toggleHandler}></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
