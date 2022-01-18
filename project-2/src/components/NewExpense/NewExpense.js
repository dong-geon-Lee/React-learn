import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import classes from "./NewExpense.module.css";
import btnClass from "./ExpenseForm.module.css";

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.floor(Math.random() * 1000).toString(),
    };

    onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className={`${classes.new__expense}`}>
      {!isEditing && (
        <button onClick={startEditingHandler} className={`${btnClass.btn}`}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
