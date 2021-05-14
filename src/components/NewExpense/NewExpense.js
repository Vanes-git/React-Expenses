import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [editMode, setEditMode] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditMode(false);
  };

  const toggleEditMode = () => {
    setEditMode((prevMode) => {
      return !prevMode;
    });
  };

  return (
    <div className="new-expense">
      {editMode === true ? (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={toggleEditMode}
        />
      ) : (
        <button onClick={toggleEditMode}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
