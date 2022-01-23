import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const editChangeHandler = (changeEdit) => {
    setIsEditing(changeEdit);
  };

  return (
    <div>
      {isEditing ? (
        <ExpenseForm
          onAddExpense={onAddExpense}
          onEditHandler={editChangeHandler}
        ></ExpenseForm>
      ) : (
        <button onClick={() => editChangeHandler(true)}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
