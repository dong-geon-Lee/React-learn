import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import classes from "./NewExpense.module.css";
import btnClass from "./ExpenseForm.module.css";

const NewExpense = ({ onSaveExpenseData }) => {
  const [isEditing, setIsEditing] = useState(false);

  const makeExpense = (data) => {
    const expense = {
      id: Math.floor(Math.random() * 1000),
      ...data,
    };

    onSaveExpenseData(expense);
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className={`${classes.new__expense}`}>
      {!isEditing && (
        <button
          type="button"
          className={`${btnClass.btn}`}
          onClick={startEditing}
        >
          Add New Expense
        </button>
      )}

      {isEditing && (
        <ExpenseForm
          onMakeExpense={makeExpense}
          stopEditExpense={stopEditing}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
